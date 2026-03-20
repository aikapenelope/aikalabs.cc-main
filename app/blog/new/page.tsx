import type { Metadata } from "next";
import { BlogEditor } from "@/components/blog-editor";

export const metadata: Metadata = {
  title: "Nuevo Post",
  description: "Escribe y envía un nuevo artículo para el blog.",
};

export default function NewBlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border">
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-3xl sm:text-4xl font-medium tracking-tighter">
            Nuevo Post
          </h1>
          <p className="mt-2 text-muted-foreground">
            Escribe tu artículo y envíalo como Pull Request para revisión.
          </p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto p-6">
        <BlogEditor />
      </div>
    </div>
  );
}
