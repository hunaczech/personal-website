import type { Content } from "@/lib/content";
import { Mail, LinkedIn, XLogo } from "./icons";

export default function Contact({ t }: { t: Content }) {
  return (
    <section id="contact" className="bg-accent-deep">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-24 text-center md:px-10">
        <span className="eyebrow text-[13px] text-accent-soft">{t.contact.eyebrow}</span>
        <h2 className="max-w-2xl font-heading text-4xl font-semibold leading-tight text-fg">
          {t.contact.heading}
        </h2>
        <p className="max-w-xl text-lg leading-relaxed text-[#d8d1c2]">{t.contact.sub}</p>
        <a
          href={`mailto:${t.contact.email}`}
          className="mt-2 inline-flex items-center gap-2.5 rounded-full bg-fg px-7 py-4 text-base font-semibold text-accent-deep transition-opacity hover:opacity-90"
        >
          <Mail className="h-[18px] w-[18px]" />
          {t.contact.email}
        </a>
        <div className="flex items-center gap-7 pt-2">
          {t.contact.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[15px] text-[#d8d1c2] transition-colors hover:text-fg"
            >
              {s.label === "LinkedIn" ? (
                <LinkedIn className="h-[18px] w-[18px]" />
              ) : (
                <XLogo className="h-4 w-4" />
              )}
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
