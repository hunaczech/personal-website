import type { Metadata } from "next";
import { Newsreader, Inter, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import "../globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const SITE = "https://hunka.cz";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isCs = lang === "cs";
  const title = "Lukáš Huňka";
  const fullTitle = isCs
    ? "Lukáš Huňka — tvůrce a zakladatel Omnicada"
    : "Lukáš Huňka — Builder & founder of Omnicado";
  const description = isCs
    ? "Zakladatel a CEO Omnicada z Prahy. Stavím firmy a nástroje pro e-commerce a marketplacy."
    : "Prague-based founder and CEO of Omnicado. I build companies and tools for e-commerce and marketplaces.";
  const keywords = isCs
    ? ["Lukáš Huňka", "Omnicado", "e-commerce", "marketplace", "zakladatel", "CEO", "Praha", "Rohlík", "Atoto", "poker komentátor"]
    : ["Lukáš Huňka", "Lukas Hunka", "Omnicado", "e-commerce", "marketplace", "founder", "CEO", "Prague", "Rohlík", "Atoto"];
  return {
    metadataBase: new URL(SITE),
    title: { default: fullTitle, template: `%s · ${title}` },
    description,
    keywords,
    applicationName: title,
    authors: [{ name: title, url: SITE }],
    creator: title,
    publisher: title,
    category: "technology",
    alternates: {
      canonical: `/${lang}`,
      languages: { en: "/en", cs: "/cs", "x-default": "/en" },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      title: fullTitle,
      description,
      url: `${SITE}/${lang}`,
      siteName: title,
      locale: isCs ? "cs_CZ" : "en_US",
      alternateLocale: isCs ? "en_US" : "cs_CZ",
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, creator: "@hunaczech" },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Lukáš Huňka",
    alternateName: "Lukas Hunka",
    jobTitle: "Co-founder & CEO, Omnicado",
    description:
      "Prague-based founder and builder working in e-commerce, marketplaces and automation.",
    url: SITE,
    image: `${SITE}/personal-photo.jpeg`,
    email: "mailto:lukas@hunka.cz",
    knowsAbout: ["E-commerce", "Marketplaces", "Automation", "Product", "Startups"],
    address: { "@type": "PostalAddress", addressLocality: "Prague", addressCountry: "CZ" },
    worksFor: { "@type": "Organization", name: "Omnicado", url: "https://www.omnicado.com" },
    sameAs: [
      "https://cz.linkedin.com/in/lukashunka",
      "https://x.com/hunaczech",
      "https://www.omnicado.com",
    ],
  };

  return (
    <html lang={locale} className={`${newsreader.variable} ${inter.variable} ${geistMono.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
