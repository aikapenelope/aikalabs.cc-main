import { Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto p-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center text-muted-foreground bg-muted rounded">
            <Code2 className="w-3.5 h-3.5" />
          </span>
          <p className="text-sm text-muted-foreground">
            <span className="font-bold">A\KA</span> &copy;{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
