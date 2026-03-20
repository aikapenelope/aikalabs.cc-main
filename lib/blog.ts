import { docs, meta } from "@/.source";
import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";

/**
 * Shared blog source loader used across blog pages.
 */
export const blogSource = loader({
  baseUrl: "/blog",
  source: createMDXSource(docs, meta),
});

/**
 * Type-safe representation of blog post frontmatter data.
 * Matches the schema defined in source.config.ts.
 */
export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  featured?: boolean;
  readTime?: string;
  author?: string;
  thumbnail?: string;
  body: React.ComponentType;
}
