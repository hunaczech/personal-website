import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";
import { getContent } from "@/lib/content";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const t = getContent(locale);

  return (
    <main>
      <Header locale={locale} t={t} />
      <Hero t={t} />
      <About t={t} />
      <Projects t={t} />
      <Contact t={t} />
      <Footer locale={locale} t={t} />
    </main>
  );
}
