import type { Content } from "@/lib/content";

export default function About({ t }: { t: Content }) {
  return (
    <section id="about" className="bg-surface-2">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[360px_1fr] md:gap-16 md:px-10 md:py-24">
        <div className="flex flex-col gap-5">
          <span className="eyebrow text-[13px] text-accent">{t.about.eyebrow}</span>
          <h2 className="font-heading text-3xl font-semibold leading-tight text-fg md:text-4xl">
            {t.about.heading}
          </h2>
          <dl className="mt-4 flex flex-col gap-5">
            {t.about.stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-0.5">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-heading text-3xl font-semibold text-accent">{s.value}</dd>
                <span className="eyebrow text-xs text-fg-muted">{s.label}</span>
              </div>
            ))}
          </dl>
        </div>
        <div className="flex flex-col gap-5">
          {t.about.paragraphs.map((p, i) => (
            <p key={i} className="max-w-prose text-[17px] leading-[1.65] text-fg-2">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
