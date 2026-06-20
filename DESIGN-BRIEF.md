# Design Brief — Lukáš Huňka, personal website

> Working document for the Pencil design (`design.pen`) and the Next.js build.
> Status: **direction locked, copy partially pending** (see "Content inputs needed").

---

## 1. Goal

A personal website whose single job is: **people find Lukáš, understand who he is, and see his past & present projects.** Not a corporate Omnicado page — a personal hub for a *builder*.

Primary visitor actions, in order:
1. Understand who he is (one-line + warm bio)
2. Browse his projects (Omnicado leads; others follow)
3. Reach him (email / LinkedIn / X)

## 2. Positioning

**Builder / generalist.** Lukáš is a founder and maker — Omnicado is the flagship, but the site frames him as someone who builds things (companies, side projects, a charitable foundation). Tone is personal, not corporate. He happens to be CEO of Omnicado; he *is* a builder.

## 3. Audience

- Potential partners, clients, investors (CEE + international)
- Press / people Googling him
- Fellow founders and collaborators

## 4. Language

**Bilingual EN + CZ** with a language toggle in the header. EN is the default; CZ mirror for the local network. All copy must be authored in both. (i18n in Next.js via route segments `/` and `/cs` or `next-intl` — TBD in build.)

## 5. Visual direction — Warm & personal

Photo-forward, human, story-driven. Reference style: *Illustrated Warm → Heritage Warmth* palette, adapted (NO cartoon illustrations — we use Lukáš's real photography instead).

### Tokens

| Token | Value | Use |
|---|---|---|
| `surface.primary` | `#F5F2E9` | Page background (warm linen) |
| `surface.secondary` | `#E8E4D8` | Tinted section band |
| `foreground.primary` | `#2D2926` | Headings, primary text |
| `foreground.secondary` | `#5E5954` | Body copy |
| `foreground.muted` | `#8C8782` | Captions, labels |
| `border.subtle` | `#DCD8CB` | Hairline rules |
| `accent.primary` | `#7D6B3D` | CTAs, links, active states (bronze) |
| `accent.secondary` | `#4A3F24` | Icon accents, deep detail |

- **Roundness:** subtle — `8px` cards, `9999px` pills for buttons/tags.
- **Elevation:** one soft shadow on the hero photo and project cards only. Everything else flat on the linen ground.
- **Type:**
  - Headings — **Newsreader** (warm serif), bold, tight line-height. Hero ~`clamp(2.5rem, 6vw, 4.5rem)`.
  - Body — **Inter**, normal weight, line length 50–75 chars, never below 14px.
  - Captions / labels / eyebrows — **Geist Mono**, uppercase, letter-spaced, muted.

## 6. Page structure (single long page, anchor nav)

Narrative arc: *who → proof → projects → human → reach me.*

1. **Header** — name wordmark left; nav (About · Projects · Contact) + **EN/CZ toggle** right. Sticky, transparent over linen.
2. **Hero** — left: eyebrow (`FOUNDER · BUILDER · PRAGUE`), big Newsreader headline ("Hi, I'm Lukáš. I help European brands sell everywhere."), one-paragraph subhead, primary CTA (`Get in touch`) + secondary (`See my work`). Right: the real headshot (`personal-photo.jpeg`), soft shadow, slight rounded corner. Alternate left/right alignment per Landing Page rhythm.
3. **About / story** — story-driven bio (2–3 short paragraphs). Tinted `surface.secondary` band for a "chapter break." A few facts as Geist-Mono captioned stats (e.g. *Founded · 2020*, *Clients · 250+*, *Channels · 800+*).
4. **Projects** — the core. Card grid (or alternating rows for the big two). Each card: project name (Newsreader), role + year (mono caption), 1–2 line description, status tag (`Active` / `Past`), outbound link. Order:
   - **Omnicado** — flagship, larger hero card. Marketplace integration platform.
   - **Atoto.cz** — *(content pending)*
   - **Sousedská Pomoc** — charitable foundation; gives the "values" dimension.
   - **Side projects / experiments** — *(content pending)* — smaller cards or a list.
5. **Contact** — short warm line ("Building something, or want to talk marketplaces? Reach out.") + email button + LinkedIn + X. Dark-ish `accent.secondary` or tinted band for closing weight.
6. **Footer** — copyright, minimal nav repeat, language toggle.

### Layout rules (from Landing Page guide)
- One alignment axis per section.
- Alternate text-heavy and visual sections; never stack two similar-density sections.
- CTA is the most prominent element on its screen; accent color reserved for actions only.
- Group related elements tightly, separate groups generously.

## 7. Responsive
- Mobile-first. Hero stacks (photo above or below headline). Project grid → single column. Nav collapses to a simple menu. Body never < 14px.

## 8. Content inputs needed (from Lukáš)
- [x] **Domain** — **hunka.cz**
- [ ] **Atoto.cz** — what it is + his role
- [ ] **Sousedská Pomoc** — description + involvement
- [ ] **Side projects** — names + one line each
- [ ] **Story** — origin, what drives him, personal notes (Prague-based assumed)
- [ ] **Confirm Omnicado copy** drafted from research

Until provided, copy uses research-grounded drafts with `[PLACEHOLDER]` markers.

## 9. Tech (build phase)
- **Next.js (App Router) + Tailwind CSS**, deployed on **Vercel**.
- Tokens above → Tailwind theme (`@theme` / CSS variables).
- Fonts via `next/font` (Newsreader, Inter, Geist Mono).
- Static, no DB. i18n via route segments. Image optimization for the headshot.
- SEO: title/description, OpenGraph image, JSON-LD `Person` schema (key for "people find me").
