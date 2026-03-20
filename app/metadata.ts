import { siteConfig } from "@/lib/site";
import type { Metadata } from "next";

export const metadataKeywords = [
  "Aika Labs",
  "Whabi",
  "Docflow",
  "Aurora",
  "EHR Latinoamerica",
  "Historia Clinica Electronica",
  "WhatsApp Business CRM",
  "CRM WhatsApp",
  "Salud Digital",
  "Voice-first PWA",
  "Software Clinicas",
  "Automatizacion WhatsApp",
  "SaaS Salud",
  "Inteligencia Artificial Salud",
  "IA Latinoamerica",
];

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: metadataKeywords,
  authors: [
    {
      name: "Aika Labs",
      url: siteConfig.url,
    },
  ],
  creator: "Aika Labs",
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
