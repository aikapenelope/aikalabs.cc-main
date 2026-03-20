"use client";

import {
  Monitor,
  Server,
  Database,
  Smartphone,
  Cloud,
  Shield,
  BarChart3,
  CreditCard,
  Wand2,
  MessageSquare,
  Code2,
  Activity,
  Zap,
  Brain,
  TestTube2,
  Search,
} from "lucide-react";
import { MarqueeCard } from "./marquee-card";

const col1Cards = [
  {
    icon: <Monitor className="w-4 h-4" />,
    iconBg: "bg-white text-zinc-900",
    title: "Frontend Core",
    subtitle: "React Ecosystem",
    description:
      "Next.js 14, React Server Components, Tailwind CSS, Framer Motion.",
  },
  {
    icon: <Server className="w-4 h-4" />,
    iconBg: "bg-indigo-600",
    title: "Backend API",
    subtitle: "High Performance",
    description:
      "FastAPI (Python), Node.js, GraphQL Federation, gRPC protocols.",
  },
  {
    icon: <Database className="w-4 h-4" />,
    iconBg: "bg-emerald-600",
    title: "Data Layer",
    subtitle: "Storage & Cache",
    description: "PostgreSQL, Redis, Supabase, Prisma ORM, Vector Stores.",
  },
  {
    icon: <Smartphone className="w-4 h-4" />,
    iconBg: "bg-pink-500",
    title: "Mobile",
    subtitle: "Cross-platform",
    description: "React Native, Expo, Flutter, Native Modules, OTA Updates.",
  },
];

const col2Cards = [
  {
    icon: <Cloud className="w-4 h-4" />,
    iconBg: "bg-sky-500",
    title: "DevOps",
    subtitle: "CI/CD & Infra",
    description: "Docker, Kubernetes, AWS Lambda, Vercel Edge Functions.",
  },
  {
    icon: <Shield className="w-4 h-4" />,
    iconBg: "bg-rose-500",
    title: "Security",
    subtitle: "Auth & Protection",
    description: "OAuth 2.0, Clerk, JWT, AES-256 Encryption, Cloudflare.",
  },
  {
    icon: <BarChart3 className="w-4 h-4" />,
    iconBg: "bg-amber-500",
    title: "Analytics",
    subtitle: "Data Insights",
    description:
      "PostHog, Google Analytics 4, Custom Events, Real-time Dashboards.",
  },
  {
    icon: <CreditCard className="w-4 h-4" />,
    iconBg: "bg-green-600",
    title: "Payments",
    subtitle: "Billing & Subs",
    description: "Stripe, MercadoPago, Subscription Billing, Webhooks.",
  },
];

const col3Cards = [
  {
    icon: <Wand2 className="w-4 h-4" />,
    iconBg: "bg-violet-600",
    title: "AI Agents",
    subtitle: "Autonomous Systems",
    description: "LangChain, AutoGPT, BabyAGI, Custom LLM Orchestration.",
  },
  {
    icon: <MessageSquare className="w-4 h-4" />,
    iconBg: "bg-teal-500",
    title: "Communication",
    subtitle: "Real-time Msg",
    description: "WhatsApp Business API, Twilio, Socket.io, WebRTC.",
  },
  {
    icon: <Code2 className="w-4 h-4" />,
    iconBg: "bg-cyan-500",
    title: "Typesafe",
    subtitle: "Robust Code",
    description: "TypeScript, Zod Validation, tRPC, End-to-end type safety.",
  },
  {
    icon: <Activity className="w-4 h-4" />,
    iconBg: "bg-lime-600",
    title: "Observability",
    subtitle: "Monitoring",
    description: "Sentry, Datadog, OpenTelemetry, Structured Logging.",
  },
];

const col4Cards = [
  {
    icon: <Zap className="w-4 h-4" />,
    iconBg: "bg-orange-500",
    title: "Performance",
    subtitle: "Optimization",
    description: "Core Web Vitals, Lazy Loading, Edge Caching, Image Opt.",
  },
  {
    icon: <Brain className="w-4 h-4" />,
    iconBg: "bg-fuchsia-600",
    title: "LLM Ops",
    subtitle: "Model Tuning",
    description:
      "OpenAI GPT-4, Anthropic Claude, Fine-tuning, Prompt Engineering.",
  },
  {
    icon: <TestTube2 className="w-4 h-4" />,
    iconBg: "bg-blue-600",
    title: "Testing",
    subtitle: "QA Automation",
    description: "Jest, Cypress, Playwright, Storybook, CI Checks.",
  },
  {
    icon: <Search className="w-4 h-4" />,
    iconBg: "bg-red-600",
    title: "Search",
    subtitle: "Vector & Full-text",
    description: "Pinecone, pgvector, Elasticsearch, Hybrid RAG Pipelines.",
  },
];

function MarqueeColumn({
  cards,
  direction,
}: {
  cards: typeof col1Cards;
  direction: "up" | "down";
}) {
  const animClass =
    direction === "up" ? "animate-scroll-up" : "animate-scroll-down";
  // Duplicate cards for seamless loop
  const allCards = [...cards, ...cards];

  return (
    <div className={`flex flex-col gap-4 ${animClass}`}>
      {allCards.map((card, i) => (
        <MarqueeCard key={`${card.title}-${i}`} {...card} />
      ))}
    </div>
  );
}

export function LandingMarquee() {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col sm:flex-row mb-8 gap-x-4 gap-y-4 items-start justify-between">
        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-foreground max-w-lg leading-tight">
          Infraestructura viva y stacks tecnológicos en tiempo real.
        </h2>
        <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground pt-2">
          Live Monitor
        </span>
      </div>

      {/* Marquee 3D Container - Dark Theme */}
      <div className="relative flex h-[500px] w-full flex-row items-center justify-center gap-4 overflow-hidden perspective-container bg-zinc-900 border border-zinc-800 rounded-3xl group">
        {/* 3D Transform Wrapper */}
        <div className="flex flex-row items-start gap-6 perspective-content h-[150%] -mt-20">
          <MarqueeColumn cards={col1Cards} direction="up" />
          <MarqueeColumn cards={col2Cards} direction="down" />
          <MarqueeColumn cards={col3Cards} direction="up" />
          <MarqueeColumn cards={col4Cards} direction="down" />
        </div>

        {/* Fade gradients */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-zinc-900 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-zinc-900 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-zinc-900 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-zinc-900 to-transparent z-10" />
      </div>
    </section>
  );
}
