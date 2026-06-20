import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "@/lib/i18n";

function pickLocale(req: NextRequest): string {
  const header = req.headers.get("accept-language") ?? "";
  const preferred = header.split(",").map((p) => p.split(";")[0].trim().toLowerCase());
  for (const p of preferred) {
    const base = p.split("-")[0];
    if ((locales as readonly string[]).includes(base)) return base;
  }
  return defaultLocale;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (hasLocale) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = `/${pickLocale(req)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
