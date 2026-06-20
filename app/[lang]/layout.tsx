import type { Metadata } from "next";
import { Newsreader, Inter, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
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
  const description = isCs
    ? "Zakladatel a CEO Omnicada z Prahy. Stavím firmy a nástroje pro e-commerce a marketplacy."
    : "Prague-based founder and CEO of Omnicado. I build companies and tools for e-commerce and marketplaces.";
  return {
    metadataBase: new URL(SITE),
    title: { default: title, template: `%s · ${title}` },
    description,
    alternates: {
      canonical: `/${lang}`,
      languages: { en: "/en", cs: "/cs" },
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: `${SITE}/${lang}`,
      siteName: title,
      locale: isCs ? "cs_CZ" : "en_US",
      images: [{ url: "/personal-photo.jpeg", width: 870, height: 1130, alt: title }],
    },
    twitter: { card: "summary", title, description, creator: "@hunaczech" },
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
    jobTitle: "Co-founder & CEO, Omnicado",
    url: SITE,
    image: `${SITE}/personal-photo.jpeg`,
    email: "mailto:lukas@omnicado.com",
    address: { "@type": "PostalAddress", addressLocality: "Prague", addressCountry: "CZ" },
    worksFor: { "@type": "Organization", name: "Omnicado", url: "https://www.omnicado.com" },
    sameAs: ["https://cz.linkedin.com/in/lukashunka", "https://x.com/hunaczech"],
  };

  return (
    <html lang={locale} className={`${newsreader.variable} ${inter.variable} ${geistMono.variable}`}>
      <body>
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
