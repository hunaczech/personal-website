import { ImageResponse } from "next/og";

export const alt = "Lukáš Huňka";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isCs = lang === "cs";
  const eyebrow = isCs
    ? "ZAKLADATEL · TVŮRCE · PRAHA"
    : "FOUNDER · BUILDER · PRAGUE";
  const sub = isCs
    ? "Stavím Omnicado — e-commerce na 800+ kanálech"
    : "Building Omnicado — e-commerce on 800+ channels";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#17150F",
          padding: "80px",
          color: "#F2EEE4",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#C81E2C",
            fontSize: 26,
            letterSpacing: 6,
          }}
        >
          {eyebrow}
        </div>
        <div style={{ display: "flex", fontSize: 128, fontWeight: 700, marginTop: 24 }}>
          Lukáš Huňka
        </div>
        <div style={{ display: "flex", fontSize: 38, color: "#C7C0B2", marginTop: 24 }}>
          {sub}
        </div>
        <div
          style={{ display: "flex", marginTop: 56, height: 6, width: 120, background: "#C81E2C" }}
        />
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 64,
            right: 80,
            fontSize: 30,
            color: "#8C8782",
          }}
        >
          hunka.cz
        </div>
      </div>
    ),
    { ...size },
  );
}
