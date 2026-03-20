import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Code2 } from "lucide-react";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto w-full flex h-14 items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg tracking-tighter"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center bg-muted rounded-lg">
              <Code2 className="w-5 h-5" />
            </span>
            <span className="hidden sm:inline font-bold text-xl">A\KA</span>
          </Link>
        </div>

        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link
            href="/blog"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Blog
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
