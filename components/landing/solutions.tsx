import {
  MessageCircle,
  Building2,
  ShieldCheck,
  Dumbbell,
  Sparkles,
} from "lucide-react";

const solutions = [
  {
    label: "SaaS",
    labelColor: "text-indigo-400 bg-indigo-400/10",
    icon: <MessageCircle className="w-6 h-6 text-zinc-400" />,
    title: "Chati",
    description:
      "Plataforma SaaS multi-tenant para automatización de WhatsApp con IA, CRM y gestión de calendario.",
    tags: ["Multi-tenant", "RAG"],
  },
  {
    label: "PropTech",
    labelColor: "text-cyan-400 bg-cyan-400/10",
    icon: <Building2 className="w-6 h-6 text-zinc-400" />,
    title: "PropAI",
    description:
      "Plataforma inmobiliaria con IA para Venezuela. Búsqueda conversacional y analytics para agentes.",
    tags: ["GPT-4o", "Analytics"],
  },
  {
    label: "InsurTech",
    labelColor: "text-rose-400 bg-rose-400/10",
    icon: <ShieldCheck className="w-6 h-6 text-zinc-400" />,
    title: "Insurespond",
    description:
      "CRM multi-tenant especializado para agencias de seguros. Automatización de pólizas y seguimiento.",
    tags: ["CRM", "Auto"],
  },
  {
    label: "SportsTech",
    labelColor: "text-orange-400 bg-orange-400/10",
    icon: <Dumbbell className="w-6 h-6 text-zinc-400" />,
    title: "Project Titan",
    description:
      "Sistema de inteligencia deportiva con simulaciones automatizadas para MLB, NBA y ligas europeas.",
    tags: ["Data", "AI Sim"],
  },
];

export function LandingSolutions() {
  return (
    <section className="sm:p-8 bg-zinc-900 border-zinc-800 border rounded-3xl pt-8 pb-8 px-6 text-white overflow-hidden relative">
      <div className="mb-10 max-w-2xl">
        <div className="flex items-center gap-2 text-sm text-zinc-400 mb-2">
          <Sparkles className="w-4 h-4" />
          <span className="font-medium">Soluciones Especializadas</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-white leading-[1]">
          Verticales &amp; Plataformas.
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {solutions.map((sol) => (
          <article
            key={sol.title}
            className="bg-zinc-800/50 border border-zinc-700/50 rounded-2xl p-6 flex flex-col h-full hover:bg-zinc-800 transition-colors"
          >
            <div className="flex items-center justify-between mb-4">
              <span
                className={`text-xs font-semibold px-2 py-1 rounded ${sol.labelColor}`}
              >
                {sol.label}
              </span>
              {sol.icon}
            </div>
            <h3 className="text-2xl font-medium tracking-tight text-white mb-2">
              {sol.title}
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-6">
              {sol.description}
            </p>
            <div className="mt-auto flex flex-wrap gap-2">
              {sol.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] border border-zinc-700 text-zinc-400 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
