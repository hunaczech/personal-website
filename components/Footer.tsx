import type { Locale } from "@/lib/i18n";
import type { Content } from "@/lib/content";

export default function Footer({ locale, t }: { locale: Locale; t: Content }) {
  return (
    <footer className="border-t border-border-subtle bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-7 sm:flex-row md:px-10">
        <span className="font-mono text-xs text-fg-muted">{t.footer.copyright}</span>
        <nav className="flex items-center gap-6 font-mono text-xs text-fg-muted">
          <a href="#about" className="transition-colors hover:text-fg-2">{t.nav.about}</a>
          <a href="#projects" className="transition-colors hover:text-fg-2">{t.nav.projects}</a>
          <a href="#contact" className="transition-colors hover:text-fg-2">{t.nav.contact}</a>
          <span aria-hidden="true">{locale === "en" ? "EN" : "CZ"}</span>
        </nav>
      </div>
    </footer>
  );
}
