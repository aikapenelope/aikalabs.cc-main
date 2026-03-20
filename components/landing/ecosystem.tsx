import { Server, Stethoscope, Store, FolderOpen, CheckCircle } from "lucide-react";

const products = [
  {
    label: "Infraestructura",
    labelColor: "text-muted-foreground",
    icon: <Server className="w-5 h-5" />,
    title: "Agent OS",
    description:
      "Plataforma full-stack para construir, desplegar y gestionar agentes de IA a escala. Control plane unificado.",
    tags: ["GCP", "Python", "Docker"],
  },
  {
    label: "HealthTech",
    labelColor: "text-emerald-600 dark:text-emerald-400",
    icon: <Stethoscope className="w-5 h-5" />,
    title: "Doci",
    description:
      "Sistema de Historia Clínica Electrónica (EHR) con transcripción de voz por IA para el mercado latinoamericano.",
    tags: ["Whisper", "React"],
  },
  {
    label: "Marketplace",
    labelColor: "text-blue-600 dark:text-blue-400",
    icon: <Store className="w-5 h-5" />,
    title: "Todi",
    description:
      "Marketplace impulsado por IA que conecta consumidores con proveedores vía WhatsApp. Búsqueda semántica.",
    tags: ["Pgvector", "WhatsApp API"],
  },
  {
    label: "Directory",
    labelColor: "text-amber-600 dark:text-amber-400",
    icon: <FolderOpen className="w-5 h-5" />,
    title: "LatamVault",
    description:
      "Directorio comercial semántico para la web agéntica. Descubrimiento vía protocolos MCP.",
    tags: ["MCP", "A2A Protocol"],
  },
];

export function LandingEcosystem() {
  return (
    <section className="sm:p-8 bg-muted/50 border border-border rounded-3xl pt-8 pb-8 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <span className="text-sm text-muted-foreground font-medium">
              Ecosistema
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-foreground tracking-tighter mt-3 leading-[1]">
              Nuestros productos y plataformas activas.
            </h2>
            <div className="mt-8 flex flex-col gap-6">
              <p className="text-base text-muted-foreground font-normal leading-relaxed max-w-md">
                Desplegamos soluciones que combinan lo mejor de la ingeniería de
                software tradicional con las capacidades emergentes de los
                modelos de lenguaje.
              </p>
              <div>
                <button className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition">
                  Ver todo
                </button>
              </div>
            </div>
          </div>
          <div className="mt-auto pt-10 hidden lg:block">
            <div className="flex items-center gap-4 text-xs text-muted-foreground font-medium uppercase tracking-wider">
              <span className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3" /> Scalable
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3" /> Secure
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3" /> Intelligent
              </span>
            </div>
          </div>
        </div>

        {/* Right: Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {products.map((product) => (
            <article
              key={product.title}
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
