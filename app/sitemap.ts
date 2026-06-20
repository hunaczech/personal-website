import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((l) => ({
    url: `https://hunka.cz/${l}`,
    changeFrequency: "monthly",
    priority: l === "en" ? 1 : 0.9,
    alternates: { languages: { en: "https://hunka.cz/en", cs: "https://hunka.cz/cs" } },
  }));
}
