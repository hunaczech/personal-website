import type { Locale } from "./i18n";

export type Project = {
  name: string;
  meta: string;
  tag: string;
  description: string;
  linkLabel: string;
  href?: string;
  featured?: boolean;
};

export type Content = {
  nav: { about: string; projects: string; contact: string };
  hero: {
    eyebrow: string;
    headline: string;
    subhead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    photoAlt: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    stats: { value: string; label: string }[];
    paragraphs: string[];
  };
  projects: { eyebrow: string; heading: string; items: Project[] };
  contact: {
    eyebrow: string;
    heading: string;
    sub: string;
    email: string;
    socials: { label: string; href: string }[];
  };
  footer: { copyright: string };
};

const en: Content = {
  nav: { about: "About", projects: "Projects", contact: "Contact" },
  hero: {
    eyebrow: "Founder · Builder · Prague",
    headline: "Hi, I'm Lukáš. I help European brands sell everywhere.",
    subhead:
      "I build companies and tools at the messy intersection of e-commerce, marketplaces and automation — most of all Omnicado, the platform connecting sellers to 800+ channels across Europe.",
    ctaPrimary: "Get in touch",
    ctaSecondary: "See my work",
    photoAlt: "Portrait of Lukáš Huňka",
  },
  about: {
    eyebrow: "About",
    heading: "A builder, not a bystander.",
    stats: [
      { value: "2020", label: "Omnicado founded" },
      { value: "250+", label: "clients & growing" },
      { value: "800+", label: "connected channels" },
    ],
    paragraphs: [
      "I'm a Prague-based founder. In 2020 I started what became Omnicado — first as a nights-and-weekends project called ISimplySell, then as a real company helping Czech and European brands reach customers on marketplaces like Alza, Allegro, Kaufland and Amazon.",
      "[PLACEHOLDER — your story: how you got into e-commerce, the turning points, what you were doing before, what you're proudest of. A few honest sentences land better than a polished résumé.]",
      "[PLACEHOLDER — what drives you: the kind of problems you like, how you think about building, and a glimpse of the person behind the work — family, what you do when you're not shipping.]",
    ],
  },
  projects: {
    eyebrow: "Projects",
    heading: "Things I've built and am building.",
    items: [
      {
        name: "Omnicado",
        meta: "Co-founder & CEO · 2020 — now",
        tag: "Active",
        description:
          "The omnichannel platform that connects online sellers to 800+ marketplaces and channels — Alza, Allegro, Kaufland, Amazon and more — handling listings, pricing, stock and orders in one place. 250+ clients, official integrator for the major CEE marketplaces.",
        linkLabel: "omnicado.com",
        href: "https://www.omnicado.com",
        featured: true,
      },
      {
        name: "Atoto.cz",
        meta: "[Role] · [years]",
        tag: "[Status]",
        description:
          "[PLACEHOLDER — what Atoto.cz is and what you did there. One or two lines.]",
        linkLabel: "atoto.cz",
        href: "https://atoto.cz",
      },
      {
        name: "Sousedská Pomoc",
        meta: "Founder · 2020 · COVID response",
        tag: "Non-profit",
        description:
          "A civic initiative I launched in March 2020 as an immediate response to the COVID-19 crisis. It connected 6,000+ volunteers — couriers, caregivers, dispatchers and mask-sewers — with people who needed help locally, all across the Czech Republic. Within a week, towns and municipalities were using it to coordinate their own volunteers.",
        linkLabel: "sousedskapomoc.cz",
        href: "https://sousedskapomoc.cz",
      },
      {
        name: "Side projects & experiments",
        meta: "Maker · ongoing",
        tag: "Playground",
        description:
          "[PLACEHOLDER — a sentence or two on the smaller things you tinker with: tools, AI experiments, prototypes. List the ones worth showing.]",
        linkLabel: "See more",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    heading: "Building something, or want to talk marketplaces?",
    sub: "I'm always up for a good conversation about e-commerce, building companies, or a new idea. Reach out.",
    email: "lukas@omnicado.com",
    socials: [
      { label: "LinkedIn", href: "https://cz.linkedin.com/in/lukashunka" },
      { label: "X / Twitter", href: "https://x.com/hunaczech" },
    ],
  },
  footer: { copyright: "© 2026 Lukáš Huňka" },
};

const cs: Content = {
  nav: { about: "O mně", projects: "Projekty", contact: "Kontakt" },
  hero: {
    eyebrow: "Zakladatel · Tvůrce · Praha",
    headline: "Ahoj, jsem Lukáš. Pomáhám evropským značkám prodávat všude.",
    subhead:
      "Stavím firmy a nástroje na pomezí e-commerce, marketplaců a automatizace — především Omnicado, platformu, která propojuje prodejce s 800+ kanály po celé Evropě.",
    ctaPrimary: "Napište mi",
    ctaSecondary: "Moje práce",
    photoAlt: "Portrét Lukáše Huňky",
  },
  about: {
    eyebrow: "O mně",
    heading: "Tvořím, nestojím stranou.",
    stats: [
      { value: "2020", label: "vznik Omnicada" },
      { value: "250+", label: "klientů a roste to" },
      { value: "800+", label: "propojených kanálů" },
    ],
    paragraphs: [
      "Jsem zakladatel z Prahy. V roce 2020 jsem rozjel to, z čeho se stalo Omnicado — nejdřív jako večerní projekt ISimplySell, pak jako skutečnou firmu, která pomáhá českým a evropským značkám prodávat na marketplacech jako Alza, Allegro, Kaufland nebo Amazon.",
      "[PLACEHOLDER — tvůj příběh: jak ses dostal k e-commerce, zlomové momenty, co jsi dělal předtím a na co jsi nejvíc hrdý. Pár upřímných vět zabere víc než vyleštěné CV.]",
      "[PLACEHOLDER — co tě žene dál: jaké problémy tě baví, jak přemýšlíš o stavění věcí, a kousek člověka za prací — rodina, co děláš, když zrovna nepracuješ.]",
    ],
  },
  projects: {
    eyebrow: "Projekty",
    heading: "Co jsem postavil a co stavím.",
    items: [
      {
        name: "Omnicado",
        meta: "Spoluzakladatel & CEO · 2020 — nyní",
        tag: "Aktivní",
        description:
          "Omnichannel platforma, která propojuje online prodejce s 800+ marketplacy a kanály — Alza, Allegro, Kaufland, Amazon a další — a řeší nabídky, ceny, sklad i objednávky na jednom místě. 250+ klientů, oficiální integrátor hlavních středoevropských marketplaců.",
        linkLabel: "omnicado.com",
        href: "https://www.omnicado.com",
        featured: true,
      },
      {
        name: "Atoto.cz",
        meta: "[Role] · [roky]",
        tag: "[Stav]",
        description:
          "[PLACEHOLDER — co je Atoto.cz a co jsi tam dělal. Jedna až dvě věty.]",
        linkLabel: "atoto.cz",
        href: "https://atoto.cz",
      },
      {
        name: "Sousedská Pomoc",
        meta: "Zakladatel · 2020 · reakce na covid",
        tag: "Nezisk",
        description:
          "Občanská iniciativa, kterou jsem spustil v březnu 2020 jako bezprostřední reakci na koronavirovou krizi. Propojila přes 6 000 dobrovolníků — kurýrů, pečovatelů, dispečerů i švadlen šijících roušky — s lidmi, kteří potřebovali pomoc na lokální úrovni po celé ČR. Během týdne ji obce a města využívaly ke koordinaci vlastních dobrovolníků.",
        linkLabel: "sousedskapomoc.cz",
        href: "https://sousedskapomoc.cz",
      },
      {
        name: "Vedlejší projekty & experimenty",
        meta: "Tvůrce · průběžně",
        tag: "Hřiště",
        description:
          "[PLACEHOLDER — věta nebo dvě o menších věcech, na kterých si hraješ: nástroje, AI experimenty, prototypy. Vyjmenuj ty, které stojí za ukázku.]",
        linkLabel: "Více",
      },
    ],
  },
  contact: {
    eyebrow: "Kontakt",
    heading: "Stavíš něco, nebo si chceš popovídat o marketplacech?",
    sub: "Vždycky rád probírám e-commerce, stavění firem nebo nový nápad. Ozvi se.",
    email: "lukas@omnicado.com",
    socials: [
      { label: "LinkedIn", href: "https://cz.linkedin.com/in/lukashunka" },
      { label: "X / Twitter", href: "https://x.com/hunaczech" },
    ],
  },
  footer: { copyright: "© 2026 Lukáš Huňka" },
};

const dictionaries: Record<Locale, Content> = { en, cs };

export const getContent = (locale: Locale): Content => dictionaries[locale];
