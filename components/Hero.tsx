import type { Content } from "@/lib/content";
import { ArrowUpRight } from "./icons";
import HeroPhoto from "./HeroPhoto";

export default function Hero({ t }: { t: Content }) {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
      <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        <div className="flex flex-col gap-7">
          <span className="eyebrow text-[13px] text-accent">{t.hero.eyebrow}</span>
          <h1 className="font-heading text-4xl font-semibold leading-[1.05] text-fg md:text-6xl">
            {t.hero.headline}
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-fg-2">{t.hero.subhead}</p>
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <a
              href="#contact"
              className="rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-surface transition-opacity hover:opacity-90"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle px-6 py-3.5 text-sm font-semibold text-fg transition-colors hover:bg-surface-2"
            >
              {t.hero.ctaSecondary}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="order-first md:order-last">
          <HeroPhoto alt={t.hero.photoAlt} />
        </div>
      </div>
    </section>
  );
}
