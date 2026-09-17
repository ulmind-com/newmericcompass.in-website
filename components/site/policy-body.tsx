/**
 * The shared renderer for a policy document.
 *
 * Privacy, Terms and Refund are all written as `PolicyBlock[]` and all read the
 * same way, so the markup lives here once rather than being copied into each
 * page and drifting apart.
 */

import { Globe, Mail, ShieldCheck } from "lucide-react";

import type { PolicyBlock } from "@/lib/data/privacy";

/** Href for a contact row: mailto for email, a scheme-prefixed URL otherwise. */
function contactHref(kind: "email" | "url", value: string): string {
  if (kind === "email") return `mailto:${value}`;
  return /^https?:\/\//.test(value) ? value : `https://${value}`;
}

function Block({ block }: { block: PolicyBlock }) {
  switch (block.t) {
    case "h":
      return (
        <h2 className="mt-12 scroll-mt-24 border-l-4 border-accent pl-4 text-2xl font-bold text-primary md:text-3xl">
          {block.text}
        </h2>
      );

    case "sub":
      return <h3 className="mt-8 text-lg font-semibold text-primary">{block.text}</h3>;

    case "p":
      return <p className="mt-4 leading-relaxed text-muted-foreground">{block.text}</p>;

    case "lead":
      return <p className="mt-4 font-medium text-foreground">{block.text}</p>;

    case "callout":
      return (
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-accent/30 bg-accent/10 p-5">
          <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
          <p className="font-medium text-primary">{block.text}</p>
        </div>
      );

    case "list":
      return (
        <ul className="mt-4 space-y-2.5">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3 leading-relaxed text-muted-foreground">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case "pairs":
      return (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {block.items.map((item) => (
            <div key={item.label} className="rounded-xl bg-card p-5 shadow-sm ring-1 ring-border">
              <p className="font-semibold text-primary">{item.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      );

    case "contact":
      return (
        <div className="mt-6 space-y-3">
          {block.rows.map((row) => (
            <a
              key={row.value}
              href={contactHref(row.kind, row.value)}
              target={row.kind === "url" ? "_blank" : undefined}
              rel={row.kind === "url" ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 rounded-xl bg-card p-4 shadow-sm ring-1 ring-border transition-colors hover:ring-accent"
            >
              <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                {row.kind === "email" ? <Mail className="h-5 w-5" /> : <Globe className="h-5 w-5" />}
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {row.label}
                </span>
                <span className="mt-0.5 block font-semibold text-primary">{row.value}</span>
              </span>
            </a>
          ))}
        </div>
      );

    case "byline":
      return <p className="mt-10 text-sm italic text-muted-foreground">{block.text}</p>;
  }
}

export function PolicyBody({ blocks }: { blocks: PolicyBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </>
  );
}
