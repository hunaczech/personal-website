import type { Locale } from "@/lib/i18n";
import type { Content } from "@/lib/content";
import LangToggle from "./LangToggle";

export default function Header({ locale, t }: { locale: Locale; t: Content }) {
  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle/60 bg-surface/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="font-heading text-xl font-semibold text-fg">
          Lukáš Huňka
        </a>
        <nav className="flex items-center gap-6 md:gap-9">
          <div className="hidden items-center gap-6 sm:flex md:gap-9">
            <a href="#about" className="text-sm text-fg-2 transition-colors hover:text-fg">
              {t.nav.about}
            </a>
            <a href="#projects" className="text-sm text-fg-2 transition-colors hover:text-fg">
              {t.nav.projects}
            </a>
            <a href="#contact" className="text-sm text-fg-2 transition-colors hover:text-fg">
              {t.nav.contact}
            </a>
          </div>
          <LangToggle locale={locale} />
        </nav>
      </div>
    </header>
  );
}
