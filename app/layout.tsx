import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/lib/site";
import { metadataKeywords } from "./metadata";
import { SiteNav } from "@/components/site-nav";
import Footer from "@/components/footer";
import "@/app/globals.css";

export const viewport: Viewport = {
  themeColor: "black",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: metadataKeywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Aika Labs",
    url: "https://aikalabs.cc",
    description: siteConfig.description,
    foundingDate: "2024",
    sameAs: [
      "https://github.com/aikapenelope",
    ],
    knowsAbout: [
      "Electronic Health Records",
      "WhatsApp Business CRM",
      "Voice-first applications",
      "Artificial Intelligence",
      "Latin America digital health",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "Docflow",
          applicationCategory: "HealthApplication",
          operatingSystem: "Web",
          description: "Sistema de Historia Clinica Electronica (EHR) con transcripcion de voz por IA para clinicas en Latinoamerica.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "Whabi",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description: "CRM para WhatsApp Business con automatizacion de conversaciones y gestion de leads.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "Aurora",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description: "PWA voice-first para negocios con interfaz conversacional de IA.",
        },
      },
    ],
  };

  return (
    <html
      lang="es"
      className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteNav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
