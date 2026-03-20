import { Shield, Globe, Brain, Infinity } from "lucide-react";

const capabilities = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Seguridad Enterprise",
    description:
      "SOC2 Compliance, encriptación en tránsito y reposo, y gestión de identidad federada.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Edge Network",
    description:
      "Despliegue global en el borde para latencia < 50ms en cualquier parte del mundo.",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Neural Search",
    description:
      "Motores de búsqueda vectorial híbrida para recuperación de contexto precisa en IA.",
  },
  {
    icon: <Infinity className="w-6 h-6" />,
    title: "CI/CD Autónomo",
    description:
      "Pipelines de despliegue automatizados con pruebas de regresión visual y unitaria.",
  },
];

export function LandingCapabilities() {
  return (
    <section>
      <div className="mb-6">
        <h3 className="text-lg font-medium tracking-tight text-foreground">
          Arquitectura de Nueva Generación
        </h3>
        <p className="text-sm text-muted-foreground">
          Diseñado para soportar cargas de trabajo intensivas y escalabilidad
          global.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {capabilities.map((cap) => (
          <div
            key={cap.title}
            className="flex flex-col gap-3 p-5 rounded-2xl border border-border bg-card hover:border-muted-foreground/30 transition-colors"
          >
            <div className="h-10 w-10 rounded-lg bg-muted border border-border flex items-center justify-center text-foreground">
              {cap.icon}
            </div>
            <div>
              <h4 className="font-medium text-foreground">{cap.title}</h4>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                {cap.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
