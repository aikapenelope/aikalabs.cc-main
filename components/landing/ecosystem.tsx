import { Stethoscope, MessageCircle, Mic, CheckCircle } from "lucide-react";

const products = [
  {
    label: "HealthTech",
    labelColor: "text-emerald-600 dark:text-emerald-400",
    icon: <Stethoscope className="w-5 h-5" />,
    title: "Docflow",
    description:
      "Sistema de Historia Clinica Electronica (EHR) con transcripcion de voz por IA. Digitaliza el flujo documental de clinicas en Latinoamerica.",
    tags: ["EHR", "Whisper", "PostgreSQL", "pgvector"],
    href: "/docflow",
  },
  {
    label: "SaaS",
    labelColor: "text-green-600 dark:text-green-400",
    icon: <MessageCircle className="w-5 h-5" />,
    title: "Whabi",
    description:
      "CRM para WhatsApp Business con automatizacion de conversaciones, seguimiento de leads y gestion de documentos.",
    tags: ["WhatsApp API", "CRM", "Redis", "MinIO"],
    href: "/whabi",
  },
  {
    label: "Voice-First",
    labelColor: "text-purple-600 dark:text-purple-400",
    icon: <Mic className="w-5 h-5" />,
    title: "Aurora",
    description:
      "PWA voice-first para negocios. Interfaz conversacional con IA que prioriza la voz sobre el texto.",
    tags: ["Nuxt 3", "Clerk", "Groq Whisper", "PWA"],
    href: "/aurora",
  },
];

export function LandingEcosystem() {
  return (
    <section id="productos" className="sm:p-8 bg-muted/50 border border-border rounded-3xl pt-8 pb-8 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <span className="text-sm text-muted-foreground font-medium">
              Ecosistema
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-foreground tracking-tighter mt-3 leading-[1]">
              Tres productos. Un ecosistema.
            </h2>
            <div className="mt-8 flex flex-col gap-6">
              <p className="text-base text-muted-foreground font-normal leading-relaxed max-w-md">
                Software de inteligencia artificial para salud digital,
                comunicacion empresarial y aplicaciones voice-first en
                Latinoamerica.
              </p>
              <div>
                <a
                  href="#productos"
                  className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition"
                >
                  Conocer mas
                </a>
              </div>
            </div>
          </div>
          <div className="mt-auto pt-10 hidden lg:block">
            <div className="flex items-center gap-4 text-xs text-muted-foreground font-medium uppercase tracking-wider">
              <span className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3" /> Escalable
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3" /> Seguro
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3" /> Inteligente
              </span>
            </div>
          </div>
        </div>

        {/* Right: Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {products.map((product) => (
            <a
              key={product.title}
              href={product.href}
              className="group relative flex flex-col bg-card border border-border rounded-2xl p-5 hover:border-muted-foreground/30 transition-all h-[240px]"
            >
              <div className="flex justify-between items-start mb-2">
                <span
                  className={`text-xs font-semibold uppercase tracking-wider ${product.labelColor}`}
                >
                  {product.label}
                </span>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {product.icon}
                </span>
              </div>
              <h3 className="text-xl font-medium text-foreground tracking-tight">
                {product.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {product.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-2 pt-4">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-muted text-[10px] font-medium text-muted-foreground rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
