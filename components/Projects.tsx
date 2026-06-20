import type { Content, Project } from "@/lib/content";
import { ArrowUpRight } from "./icons";

function Card({ p, featured }: { p: Project; featured?: boolean }) {
  const inner = (
    <div className="flex h-full flex-col gap-4 rounded-lg border border-border-subtle bg-surface p-8 shadow-[0_6px_20px_rgba(0,0,0,0.06)] transition-shadow hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-between gap-4">
        <span className="eyebrow text-xs text-fg-muted">{p.meta}</span>
        <span className="eyebrow rounded-full bg-surface-2 px-3 py-1 text-[11px] font-semibold text-accent">
          {p.tag}
        </span>
      </div>
      <h3 className={`font-heading font-semibold text-fg ${featured ? "text-4xl" : "text-2xl"}`}>
        {p.name}
      </h3>
      <p className="text-base leading-relaxed text-fg-2">{p.description}</p>
      <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-accent">
        {p.linkLabel}
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </div>
  );

  if (p.href) {
    return (
      <a
        href={p.href}
        target="_blank"
        rel="noopener noreferrer"
        className={featured ? "block" : "block h-full"}
      >
        {inner}
      </a>
    );
  }
  return <div className={featured ? "" : "h-full"}>{inner}</div>;
}

export default function Projects({ t }: { t: Content }) {
  const featured = t.projects.items.find((p) => p.featured);
  const rest = t.projects.items.filter((p) => !p.featured);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
      <div className="flex flex-col gap-3">
        <span className="eyebrow text-[13px] text-accent">{t.projects.eyebrow}</span>
        <h2 className="font-heading text-3xl font-semibold leading-tight text-fg md:text-4xl">
          {t.projects.heading}
        </h2>
      </div>

      <div className="mt-8 flex flex-col gap-6">
        {featured && <Card p={featured} featured />}
        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((p) => (
            <Card key={p.name} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
