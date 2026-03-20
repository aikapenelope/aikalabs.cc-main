"use client";

import { useState, useCallback } from "react";
import { Send, Eye, Pencil, X, Plus, Loader2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FormData {
  title: string;
  description: string;
  date: string;
  tags: string[];
  author: string;
  thumbnail: string;
  body: string;
}

interface SubmitResult {
  success: boolean;
  pr?: { number: number; url: string };
  error?: string;
}

const initialForm: FormData = {
  title: "",
  description: "",
  date: new Date().toISOString().split("T")[0],
  tags: [],
  author: "",
  thumbnail: "",
  body: "",
};

export function BlogEditor() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [tagInput, setTagInput] = useState("");
  const [tab, setTab] = useState<"write" | "preview">("write");
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<SubmitResult | null>(null);

  const update = useCallback(
    <K extends keyof FormData>(key: K, value: FormData[K]) => {
      setForm((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const addTag = useCallback(() => {
    const tag = tagInput.trim();
    if (tag && !form.tags.includes(tag)) {
      setForm((prev) => ({ ...prev, tags: [...prev.tags, tag] }));
    }
    setTagInput("");
  }, [tagInput, form.tags]);

  const removeTag = useCallback((tag: string) => {
    setForm((prev) => ({
      ...prev,
      tags: prev.tags.filter((t) => t !== tag),
    }));
  }, []);

  const handleSubmit = useCallback(async () => {
    if (!form.title || !form.description || !form.body) return;
    setSubmitting(true);
    setResult(null);
    try {
      const res = await fetch("/api/blog/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data: SubmitResult = await res.json();
      setResult(data);
    } catch {
      setResult({ success: false, error: "Error de conexión." });
    } finally {
      setSubmitting(false);
    }
  }, [form]);

  const isValid = form.title && form.description && form.date && form.body;

  // Success state
  if (result?.success && result.pr) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center space-y-4">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
          <Send className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
        </div>
        <h2 className="text-2xl font-medium tracking-tight">
          Pull Request creado
        </h2>
        <p className="text-muted-foreground">
          Tu artículo fue enviado como PR #{result.pr.number}. Será revisado
          antes de publicarse.
        </p>
        <div className="flex justify-center gap-3 pt-2">
          <Button asChild>
            <a href={result.pr.url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Ver en GitHub
            </a>
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              setForm(initialForm);
              setResult(null);
            }}
          >
            Escribir otro
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Error banner */}
      {result?.error && (
        <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive">
          {result.error}
        </div>
      )}

      {/* Metadata fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Título *">
          <input
            type="text"
            value={form.title}
            onChange={(e) => update("title", e.target.value)}
            placeholder="Mi nuevo artículo"
            className="input-field"
          />
        </Field>
        <Field label="Autor">
          <input
            type="text"
            value={form.author}
            onChange={(e) => update("author", e.target.value)}
            placeholder="Tu nombre"
            className="input-field"
          />
        </Field>
      </div>

      <Field label="Descripción *">
        <textarea
          value={form.description}
          onChange={(e) => update("description", e.target.value)}
          placeholder="Breve resumen del artículo..."
          rows={2}
          className="input-field resize-none"
        />
      </Field>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Fecha">
          <input
            type="date"
            value={form.date}
            onChange={(e) => update("date", e.target.value)}
            className="input-field"
          />
        </Field>
        <Field label="Thumbnail URL">
          <input
            type="text"
            value={form.thumbnail}
            onChange={(e) => update("thumbnail", e.target.value)}
            placeholder="/thumbnails/my-image.jpg"
            className="input-field"
          />
        </Field>
      </div>

      {/* Tags */}
      <Field label="Tags">
        <div className="flex flex-wrap gap-2 mb-2">
          {form.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-muted text-sm text-muted-foreground border border-border"
            >
              {tag}
              <button
                type="button"
                onClick={() => removeTag(tag)}
                className="hover:text-foreground transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addTag();
              }
            }}
            placeholder="Agregar tag..."
            className="input-field flex-1"
          />
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={addTag}
            className="shrink-0"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </Field>

      {/* Editor / Preview tabs */}
      <div className="rounded-2xl border border-border overflow-hidden">
        <div className="flex border-b border-border bg-muted/30">
          <button
            type="button"
            onClick={() => setTab("write")}
            className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors ${
              tab === "write"
                ? "text-foreground border-b-2 border-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Pencil className="w-4 h-4" />
            Escribir
          </button>
          <button
            type="button"
            onClick={() => setTab("preview")}
            className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors ${
              tab === "preview"
                ? "text-foreground border-b-2 border-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Eye className="w-4 h-4" />
            Preview
          </button>
        </div>

        {tab === "write" ? (
          <textarea
            value={form.body}
            onChange={(e) => update("body", e.target.value)}
            placeholder={"Escribe tu artículo en Markdown...\n\n## Sección\n\nTexto del artículo..."}
            rows={20}
            className="w-full p-4 bg-background text-foreground text-sm font-mono leading-relaxed resize-y focus:outline-none min-h-[400px]"
          />
        ) : (
          <div className="p-6 min-h-[400px]">
            {form.body ? (
              <MarkdownPreview content={form.body} />
            ) : (
              <p className="text-muted-foreground text-sm italic">
                Nada que previsualizar. Escribe algo primero.
              </p>
            )}
          </div>
        )}
      </div>

      {/* Submit */}
      <div className="flex items-center justify-between pt-2">
        <p className="text-xs text-muted-foreground">
          Se creará un Pull Request en GitHub para revisión.
        </p>
        <Button
          onClick={handleSubmit}
          disabled={!isValid || submitting}
          className="gap-2"
        >
          {submitting ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Send className="w-4 h-4" />
          )}
          {submitting ? "Enviando..." : "Enviar Post"}
        </Button>
      </div>
    </div>
  );
}

/** Reusable field wrapper. */
function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-medium text-foreground">{label}</label>
      {children}
    </div>
  );
}

/**
 * Simple client-side markdown preview.
 * Renders headings, bold, italic, code blocks, links, lists, and paragraphs.
 */
function MarkdownPreview({ content }: { content: string }) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Code block
    if (line.startsWith("```")) {
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing ```
      elements.push(
        <pre
          key={`code-${i}`}
          className="bg-muted rounded-lg p-4 overflow-x-auto text-sm font-mono my-3"
        >
          <code>{codeLines.join("\n")}</code>
        </pre>
      );
      continue;
    }

    // Headings
    if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={`h3-${i}`}
          className="text-lg font-semibold tracking-tight mt-6 mb-2"
        >
          {renderInline(line.slice(4))}
        </h3>
      );
    } else if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={`h2-${i}`}
          className="text-xl font-semibold tracking-tight mt-8 mb-3"
        >
          {renderInline(line.slice(3))}
        </h2>
      );
    } else if (line.startsWith("# ")) {
      elements.push(
        <h1
          key={`h1-${i}`}
          className="text-2xl font-bold tracking-tight mt-8 mb-3"
        >
          {renderInline(line.slice(2))}
        </h1>
      );
    }
    // Unordered list
    else if (line.match(/^[-*] /)) {
      elements.push(
        <li key={`li-${i}`} className="ml-4 list-disc text-sm leading-relaxed">
          {renderInline(line.slice(2))}
        </li>
      );
    }
    // Blockquote
    else if (line.startsWith("> ")) {
      elements.push(
        <blockquote
          key={`bq-${i}`}
          className="border-l-2 border-muted-foreground/30 pl-4 italic text-muted-foreground my-2"
        >
          {renderInline(line.slice(2))}
        </blockquote>
      );
    }
    // Empty line
    else if (line.trim() === "") {
      elements.push(<div key={`br-${i}`} className="h-3" />);
    }
    // Paragraph
    else {
      elements.push(
        <p key={`p-${i}`} className="text-sm leading-relaxed">
          {renderInline(line)}
        </p>
      );
    }

    i++;
  }

  return <div className="prose-preview space-y-1">{elements}</div>;
}

/** Renders inline markdown: bold, italic, inline code, links. */
function renderInline(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  // Match **bold**, *italic*, `code`, [text](url)
  const regex = /(\*\*(.+?)\*\*|\*(.+?)\*|`(.+?)`|\[(.+?)\]\((.+?)\))/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    if (match[2]) {
      parts.push(
        <strong key={match.index} className="font-semibold">
          {match[2]}
        </strong>
      );
    } else if (match[3]) {
      parts.push(
        <em key={match.index} className="italic">
          {match[3]}
        </em>
      );
    } else if (match[4]) {
      parts.push(
        <code
          key={match.index}
          className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono"
        >
          {match[4]}
        </code>
      );
    } else if (match[5] && match[6]) {
      parts.push(
        <a
          key={match.index}
          href={match[6]}
          className="text-primary underline underline-offset-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          {match[5]}
        </a>
      );
    }
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length === 1 ? parts[0] : <>{parts}</>;
}
