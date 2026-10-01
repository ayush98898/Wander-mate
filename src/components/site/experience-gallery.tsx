"use client";

import { useState } from "react";

import { ScrollGallery } from "@/components/ui/scroll-gallery";
import { experiences } from "@/lib/content";

const featured = experiences.slice(0, 6);

const slides = featured.map((e) => ({
  title: e.title,
  image: e.image,
  url: `/experiences#${e.slug}`,
  linkLabel: "Discover →",
}));

const timing = { initialDelay: 40, finalDelay: 40, scaleFrom: 1.18 };
const classNames = {
  info: "border-y border-white/20 bg-night/25 py-5 backdrop-blur-[2px]",
  infoInner: "container-x items-center",
  prefix: "max-md:hidden",
  prefixText: "eyebrow text-marigold",
  title: "h-[1.1em] text-[clamp(2rem,6vw,4.75rem)]",
  titleText:
    "font-display leading-none tracking-tight text-white will-change-transform [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)]",
  linkText:
    "text-sm font-semibold tracking-wide whitespace-nowrap text-white underline-offset-8 hover:underline",
};

/** Pinned, scroll-driven showcase of signature experiences (21st.dev Scroll Gallery). */
export function ExperienceGallery() {
  const [active, setActive] = useState(0);
  const current = featured[active];
  return (
    <ScrollGallery
      slides={slides}
      scrollPerTransition={70}
      timing={timing}
      prefixLabel="Signature experiences"
      classNames={classNames}
      className="bg-night"
      onSlideChange={setActive}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-night/50 via-transparent to-night/80"
      />
      <div className="absolute inset-x-0 bottom-0 z-[2] pb-10 md:pb-14">
        <div className="container-x flex items-end justify-between gap-6">
          <div className="max-w-md">
            <p className="eyebrow text-marigold">{current?.kicker}</p>
            <p className="mt-2 text-sm leading-relaxed text-white/85 sm:text-base" aria-live="polite">
              {current?.body}
            </p>
          </div>
          <p className="hidden font-display text-white/70 italic md:block">
            <span className="text-3xl text-white">{String(active + 1).padStart(2, "0")}</span>
            {" / "}
            {String(featured.length).padStart(2, "0")}
          </p>
        </div>
      </div>
      <div className="absolute inset-x-0 top-0 z-[2] pt-28">
        <div className="container-x">
          <p className="eyebrow text-white/70">Scroll to wander ↓</p>
        </div>
      </div>
    </ScrollGallery>
  );
}
