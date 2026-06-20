# hunka.cz — personal website of Lukáš Huňka

Bilingual (EN/CZ) personal site built with **Next.js (App Router)** + **Tailwind CSS v4**, deployed on **Vercel**.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000  → redirects to /en (or /cs by browser language)
```

## Structure

- `app/[lang]/` — locale-aware layout (fonts, SEO, Person JSON-LD) and the single page
- `lib/i18n.ts` — locales (`en`, `cs`)
- `lib/content.ts` — **all copy, both languages.** Edit here to change text.
- `components/` — `Header`, `Hero`, `About`, `Projects`, `Contact`, `Footer`, `LangToggle`
- `middleware.ts` — redirects `/` to a locale (Accept-Language aware)
- `app/globals.css` — design tokens (Heritage Warmth palette) as Tailwind `@theme`
- `DESIGN-BRIEF.md` — the design brief; `design.pen` — the Pencil design

## Pending content

Search `lib/content.ts` for `[PLACEHOLDER]` — Atoto.cz, Sousedská Pomoc, side projects,
and the personal story still need real copy (EN + CZ).

## Deploy

Push to a Git remote and import in Vercel (zero config). Set the production domain to `hunka.cz`.
