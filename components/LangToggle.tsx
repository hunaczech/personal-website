import Link from "next/link";
import type { Locale } from "@/lib/i18n";

export default function LangToggle({ locale }: { locale: Locale }) {
  const link = (l: Locale, label: string) => (
    <Link
      href={`/${l}`}
      aria-label={l === "en" ? "English" : "Čeština"}
      className={
        locale === l
          ? "font-mono text-xs font-semibold text-accent"
          : "font-mono text-xs text-fg-muted transition-colors hover:text-fg-2"
      }
    >
      {label}
    </Link>
  );
  return (
    <div className="flex items-center gap-1.5 rounded-full bg-surface-2 px-3.5 py-1.5">
      {link("en", "EN")}
      <span className="font-mono text-xs text-fg-muted">/</span>
      {link("cs", "CZ")}
    </div>
  );
}
