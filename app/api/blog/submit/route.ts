import { NextRequest, NextResponse } from "next/server";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO_OWNER = "Aika-labs";
const REPO_NAME = "Aika-main";
const BASE_BRANCH = "main";

interface BlogSubmission {
  title: string;
  description: string;
  date: string;
  tags: string[];
  author: string;
  thumbnail: string;
  body: string;
}

/**
 * Calls the GitHub API with authentication.
 */
async function githubApi(
  endpoint: string,
  options: RequestInit = {}
): Promise<Response> {
  return fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}${endpoint}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      ...options.headers,
    },
  });
}

/**
 * Converts a title into a URL-friendly slug.
 */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * Builds the MDX file content with frontmatter and body.
 */
function buildMdxContent(data: BlogSubmission): string {
  const tagsYaml = data.tags.length > 0
    ? `\ntags: [${data.tags.map((t) => `"${t}"`).join(", ")}]`
    : "";
  const thumbnail = data.thumbnail
    ? `\nthumbnail: "${data.thumbnail}"`
    : "";

  return `---
title: "${data.title.replace(/"/g, '\\"')}"
description: "${data.description.replace(/"/g, '\\"')}"
date: "${data.date}"${tagsYaml}
featured: false
readTime: "${estimateReadTime(data.body)}"
author: "${data.author}"${thumbnail}
---

${data.body}
`;
}

/**
 * Rough read-time estimate based on word count.
 */
function estimateReadTime(text: string): string {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

export async function POST(request: NextRequest) {
  if (!GITHUB_TOKEN) {
    return NextResponse.json(
      { error: "GitHub token not configured on the server." },
      { status: 500 }
    );
  }

  let data: BlogSubmission;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  // Validate required fields.
  if (!data.title || !data.description || !data.date || !data.body) {
    return NextResponse.json(
      { error: "title, description, date, and body are required." },
      { status: 400 }
    );
  }

  const slug = slugify(data.title);
  const filePath = `blog/content/${slug}.mdx`;
  const branchName = `blog/${slug}`;
  const mdxContent = buildMdxContent(data);

  try {
    // 1. Get the SHA of the base branch HEAD.
    const refRes = await githubApi(`/git/ref/heads/${BASE_BRANCH}`);
    if (!refRes.ok) {
      const err = await refRes.text();
      return NextResponse.json(
        { error: `Failed to get base branch: ${err}` },
        { status: 502 }
      );
    }
    const refData = await refRes.json();
    const baseSha: string = refData.object.sha;

    // 2. Create a new branch from the base SHA.
    const createBranchRes = await githubApi("/git/refs", {
      method: "POST",
      body: JSON.stringify({
        ref: `refs/heads/${branchName}`,
        sha: baseSha,
      }),
    });
    if (!createBranchRes.ok) {
      const err = await createBranchRes.text();
      // 422 likely means branch already exists.
      if (createBranchRes.status === 422) {
        return NextResponse.json(
          { error: "A post with a similar title already has a pending PR. Choose a different title." },
          { status: 409 }
        );
      }
      return NextResponse.json(
        { error: `Failed to create branch: ${err}` },
        { status: 502 }
      );
    }

    // 3. Create the MDX file on the new branch.
    const createFileRes = await githubApi(`/contents/${filePath}`, {
      method: "PUT",
      body: JSON.stringify({
        message: `blog: add "${data.title}"`,
        content: Buffer.from(mdxContent).toString("base64"),
        branch: branchName,
      }),
    });
    if (!createFileRes.ok) {
      const err = await createFileRes.text();
      return NextResponse.json(
        { error: `Failed to create file: ${err}` },
        { status: 502 }
      );
    }

    // 4. Open a Pull Request.
    const prRes = await githubApi("/pulls", {
      method: "POST",
      body: JSON.stringify({
        title: `blog: ${data.title}`,
        body: `## New Blog Post\n\n**Title:** ${data.title}\n**Author:** ${data.author}\n**Date:** ${data.date}\n**Tags:** ${data.tags.join(", ") || "none"}\n\n---\n\n${data.description}\n\n> Submitted via the blog editor at /blog/new`,
        head: branchName,
        base: BASE_BRANCH,
      }),
    });
    if (!prRes.ok) {
      const err = await prRes.text();
      return NextResponse.json(
        { error: `Failed to create PR: ${err}` },
        { status: 502 }
      );
    }

    const prData = await prRes.json();

    return NextResponse.json({
      success: true,
      pr: {
        number: prData.number,
        url: prData.html_url,
      },
    });
  } catch (err) {
    console.error("Blog submission error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
