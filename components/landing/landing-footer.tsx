import Link from "next/link";
import { Mail, Phone, Code2, Camera, Twitter, Linkedin } from "lucide-react";

export function LandingFooter() {
  return (
    <footer className="sm:p-8 bg-card border-border border rounded-3xl px-6 py-10 shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* CTA */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-4xl sm:text-5xl font-medium text-foreground tracking-tighter leading-[1.05]">
              Hablemos de tu próximo proyecto
            </h3>
            <p className="mt-4 text-lg text-muted-foreground font-normal leading-relaxed max-w-md">
              ¿Tienes una idea ambiciosa? Nuestro equipo de expertos en IA y
              desarrollo está listo para construirla.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:hello@humano-agentic.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition"
            >
              <Mail className="w-4 h-4" />
              Enviar Email
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border text-foreground text-sm font-medium hover:bg-muted transition"
            >
              <Phone className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 border-t lg:border-t-0 border-border pt-8 lg:pt-0">
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
              Empresa
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Carreras
                </a>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
              Legal
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacidad
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Términos
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
              Social
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Camera className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center text-muted-foreground bg-muted rounded">
            <Code2 className="w-3.5 h-3.5" />
          </span>
          <span className="text-xs font-medium tracking-tight text-muted-foreground">
            <span className="font-bold">A\KA</span> &copy; 2025
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          Diseñado con inteligencia.
        </p>
      </div>
    </footer>
  );
}
