import { Metadata } from "next";
import { blogSource, type BlogFrontmatter } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const { slug } = await params;

    if (!slug || slug.length === 0) {
      return {
        title: "Blog Not Found",
        description: "The requested blog post could not be found.",
      };
    }

    const page = blogSource.getPage([slug]);

    if (!page) {
      return {
        title: "Blog Not Found",
        description: "The requested blog post could not be found.",
      };
    }

    const data = page.data as unknown as BlogFrontmatter;
    const ogUrl = `${siteConfig.url}/blog/${slug}`;
    const ogImage = `${ogUrl}/opengraph-image`;

    return {
      title: data.title,
      description: data.description,
      keywords: [
        data.title,
        ...(data.tags || []),
        "Blog",
        "Artículo",
        "Tecnología",
        "Inteligencia Artificial",
      ],
      authors: [
        {
          name: data.author || "Humano y Agéntico",
          url: siteConfig.url,
        },
      ],
      creator: data.author || "Humano y Agéntico",
      publisher: "Humano y Agéntico",
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
      openGraph: {
        title: data.title,
        description: data.description,
        type: "article",
        url: ogUrl,
        publishedTime: data.date,
        authors: [data.author || "Humano y Agéntico"],
        tags: data.tags,
        images: [
          {
            url: data.thumbnail || ogImage,
            width: 1200,
            height: 630,
            alt: data.title,
          },
        ],
        siteName: siteConfig.name,
      },
      twitter: {
        card: "summary_large_image",
        title: data.title,
        description: data.description,
        images: [data.thumbnail || ogImage],
      },
      alternates: {
        canonical: ogUrl,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Blog Not Found",
      description: "The requested blog post could not be found.",
    };
  }
}
