import { siteConfig } from "@/lib/site";
import type { Metadata } from "next";

export const metadataKeywords = [
  "Blog",
  "IA",
  "Inteligencia Artificial",
  "Agentes IA",
  "Desarrollo de Software",
  "SaaS",
  "WhatsApp Automation",
  "RAG",
  "LLM",
  "Next.js",
  "React",
  "Humano y Agéntico",
];

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: metadataKeywords,
  authors: [
    {
      name: "Humano y Agéntico",
      url: siteConfig.url,
    },
  ],
  creator: "Humano y Agéntico",
  openGraph: {
    type: "website",
    locale: "es_LA",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
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
};
