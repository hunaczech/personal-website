"use client";

import { useState } from "react";
import Image from "next/image";
import photo from "@/personal-photo.jpeg";
import photoHover from "@/persona-photo-hover.jpeg";

const shadow =
  "shadow-[0_18px_48px_rgba(0,0,0,0.12),0_2px_6px_rgba(0,0,0,0.04)]";

export default function HeroPhoto({ alt }: { alt: string }) {
  const [tapped, setTapped] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setTapped((v) => !v)}
      aria-label={alt}
      aria-pressed={tapped}
      className={`group relative block aspect-[4/5] w-full overflow-hidden rounded-xl ${shadow} cursor-pointer`}
    >
      <Image
        src={photo}
        alt={alt}
        priority
        placeholder="blur"
        sizes="(max-width: 768px) 100vw, 420px"
        className="h-full w-full object-cover"
      />
      <Image
        src={photoHover}
        alt=""
        aria-hidden
        placeholder="blur"
        sizes="(max-width: 768px) 100vw, 420px"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-out group-hover:opacity-100 ${
          tapped ? "opacity-100" : "opacity-0"
        }`}
      />
    </button>
  );
}
