import { NextResponse } from "next/server";
import { getContent } from "@/lib/content";

export const dynamic = "force-static";

// Machine-readable profile for agents / LLMs. See also /llms.txt
export function GET() {
  const en = getContent("en");

  return NextResponse.json(
    {
      name: "Lukáš Huňka",
      alternateName: "Lukas Hunka",
      role: "Co-founder & CEO, Omnicado",
      location: "Prague, Czech Republic",
      headline: en.hero.headline,
      summary: en.hero.subhead,
      bio: en.about.paragraphs,
      email: "lukas@hunka.cz",
      links: {
        website: "https://hunka.cz",
        linkedin: "https://cz.linkedin.com/in/lukashunka",
        x: "https://x.com/hunaczech",
        omnicado: "https://www.omnicado.com",
      },
      projects: en.projects.items.map((p) => ({
        name: p.name,
        role: p.meta,
        status: p.tag,
        description: p.description,
        url: p.href ?? null,
      })),
      languages: ["en", "cs"],
    },
    {
      headers: {
        "Cache-Control": "public, max-age=3600, s-maxage=86400",
        "Access-Control-Allow-Origin": "*",
      },
    },
  );
}
