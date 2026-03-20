import { Stethoscope, MessageCircle, Mic, Sparkles } from "lucide-react";

const solutions = [
  {
    label: "HealthTech",
    labelColor: "text-emerald-400 bg-emerald-400/10",
    icon: <Stethoscope className="w-6 h-6 text-zinc-400" />,
    title: "Docflow",
    description:
      "Historia Clinica Electronica para clinicas en Latinoamerica. Digitaliza documentos, transcribe consultas con IA, y cumple regulaciones de salud.",
    tags: ["EHR", "Whisper AI", "HIPAA-aware"],
  },
  {
    label: "SaaS",
    labelColor: "text-green-400 bg-green-400/10",
    icon: <MessageCircle className="w-6 h-6 text-zinc-400" />,
    title: "Whabi",
    description:
      "CRM para WhatsApp Business. Automatiza conversaciones, gestiona leads, y centraliza documentos de clientes en un solo lugar.",
    tags: ["WhatsApp API", "CRM", "Automatizacion"],
  },
  {
    label: "Voice-First",
    labelColor: "text-purple-400 bg-purple-400/10",
    icon: <Mic className="w-6 h-6 text-zinc-400" />,
    title: "Aurora",
    description:
      "PWA voice-first para negocios. Interfaz conversacional con IA que prioriza la voz sobre el texto. Sin instalacion, funciona offline.",
    tags: ["PWA", "Nuxt 3", "Groq Whisper"],
  },
];

export function LandingSolutions() {
  return (
    <section id="soluciones" className="sm:p-8 bg-zinc-900 border-zinc-800 border rounded-3xl pt-8 pb-8 px-6 text-white overflow-hidden relative">
      <div className="mb-10 max-w-2xl">
        <div className="flex items-center gap-2 text-sm text-zinc-400 mb-2">
          <Sparkles className="w-4 h-4" />
          <span className="font-medium">Soluciones</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-white leading-[1]">
          Software que resuelve problemas reales.
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
