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
      "I'm a builder from a small town in the Polabí lowlands — the kid who was always a step ahead and happiest taking things apart to see how they worked. I sold my first “products” to the neighbours at five, built my first online shop at sixteen, and taught myself to code mostly because I couldn't stand doing the same manual work twice.",
      "That one instinct — take the tedious work and turn it into a system that lets other people do what they couldn't — has run through everything since. Before Omnicado I spent seven years commentating poker on Czech Television, then learned e-commerce the hard way: as CTO at Rohlík, building Košík, and as CEO of Atoto, which I grew from a few dozen orders a month to hundreds a day before it was acquired.",
      "I've started things that thrived and things that fell apart, and I've learned more from the second kind. Somewhere along the way I stopped hunting for shortcuts and learned to simply do the work — to face problems instead of letting them rot. Now I'm building Omnicado to last, and chasing the freedom to keep building, back ideas worth backing, and one day do it all with a family beside me.",
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
        meta: "CEO · 2017–2019",
        tag: "Acquired",
        description:
          "An online-grocery price comparison I took over as CEO and pivoted into a marketplace with delivery — scaling it from around 40 orders a month to 250 a day before it was acquired.",
        linkLabel: "",
      },
      {
        name: "Sousedská Pomoc",
        meta: "Founder · 2020 · COVID response",
        tag: "Non-profit",
        description:
          "A civic initiative I launched in March 2020 as an immediate response to the COVID-19 crisis. It connected 6,000+ volunteers — couriers, caregivers, dispatchers and mask-sewers — with people who needed help locally, all across the Czech Republic. Within a week, towns and municipalities were using it to coordinate their own volunteers.",
        linkLabel: "",
      },
      {
        name: "Poker commentary",
        meta: "Commentator · 7 years on Czech TV",
        tag: "On air",
        description:
          "My parallel life at the mic — seven years commentating poker for Czech Television, Czech streams of the European Poker Tour with PokerStars, and in 2026 back on Nova Sport covering tournaments from King's Casino, Rozvadov.",
        linkLabel: "",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    heading: "Building something, or want to talk marketplaces?",
    sub: "I'm always up for a good conversation about e-commerce, building companies, or a new idea. Reach out.",
    email: "lukas@hunka.cz",
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
      "Jsem tvůrce z malého města v polabské nížině — ten kluk, co byl vždycky o krok napřed a nejradši rozebíral věci, aby viděl, jak fungují. První „produkty“ jsem prodával sousedům v pěti, první e-shop postavil v šestnácti a programovat se naučil hlavně proto, že nesnesl dělat tu samou ruční práci dvakrát.",
      "Ten jediný instinkt — vzít otravnou práci a udělat z ní systém, který druhým umožní něco, co by sami nezvládli — se táhne vším, co dělám. Než vzniklo Omnicado, sedm let jsem komentoval poker pro Českou televizi a pak se naučil e-commerce tou těžší cestou: jako CTO v Rohlíku, stavbou Košíku a jako CEO Atota, které jsem vytáhl z pár desítek objednávek měsíčně na stovky denně, než ho koupili.",
      "Rozjel jsem věci, co vzkvétaly, i věci, co se rozpadly — a z těch druhých jsem se naučil víc. Někde po cestě jsem přestal hledat zkratky a naučil se prostě makat — řešit problémy, místo abych je nechal vyhnít. Dneska stavím Omnicado tak, aby vydrželo, a jdu za svobodou dál tvořit, podporovat nápady, co za to stojí, a jednou to všechno dělat s rodinou po boku.",
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
        meta: "CEO · 2017–2019",
        tag: "Akvizice",
        description:
          "Porovnávač cen online potravin, který jsem převzal jako CEO a pivotoval do modelu marketplace s doručením — vyškáloval z nějakých 40 objednávek měsíčně na 250 denně, než ho koupili.",
        linkLabel: "",
      },
      {
        name: "Sousedská Pomoc",
        meta: "Zakladatel · 2020 · reakce na covid",
        tag: "Nezisk",
        description:
          "Občanská iniciativa, kterou jsem spustil v březnu 2020 jako bezprostřední reakci na koronavirovou krizi. Propojila přes 6 000 dobrovolníků — kurýrů, pečovatelů, dispečerů i švadlen šijících roušky — s lidmi, kteří potřebovali pomoc na lokální úrovni po celé ČR. Během týdne ji obce a města využívaly ke koordinaci vlastních dobrovolníků.",
        linkLabel: "",
      },
      {
        name: "Komentování pokeru",
        meta: "Komentátor · 7 let v České televizi",
        tag: "Ve vysílání",
        description:
          "Můj paralelní život u mikrofonu — sedm let komentování pokeru pro Českou televizi, české streamy European Poker Tour s PokerStars, a v roce 2026 zpátky na Nova Sport se sestřihy turnajů z King's Casina v Rozvadově.",
        linkLabel: "",
      },
    ],
  },
  contact: {
    eyebrow: "Kontakt",
    heading: "Stavíš něco, nebo si chceš popovídat o marketplacech?",
    sub: "Vždycky rád probírám e-commerce, stavění firem nebo nový nápad. Ozvi se.",
    email: "lukas@hunka.cz",
    socials: [
      { label: "LinkedIn", href: "https://cz.linkedin.com/in/lukashunka" },
      { label: "X / Twitter", href: "https://x.com/hunaczech" },
    ],
  },
  footer: { copyright: "© 2026 Lukáš Huňka" },
};

const dictionaries: Record<Locale, Content> = { en, cs };

export const getContent = (locale: Locale): Content => dictionaries[locale];
