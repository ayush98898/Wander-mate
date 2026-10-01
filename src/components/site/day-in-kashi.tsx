"use client";

import Image from "next/image";
import { useState } from "react";

import { ScrollGallery } from "@/components/ui/scroll-gallery";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

const hours = [
  { time: "04:30", title: "Darshan before dawn", image: "/images/young-priests.jpg", body: "Kashi Vishwanath, Annapurna and Vishalakshi while the lanes are still dark and quiet." },
  { time: "06:00", title: "The river wakes", image: "/images/sunrise-boats.jpg", body: "A private boat from Panchaganga past the painted ghats as the sun clears the far bank." },
  { time: "11:00", title: "The weavers' lanes", image: "/images/ghat-temple.jpg", body: "Handlooms clatter in Madanpura, where families have woven silk for twenty generations." },
  { time: "18:30", title: "Fire on the water", image: "/images/aarti-night.jpg", body: "Front-row seats at Dashashwamedh as the Ganga Aarti begins, then diyas on the river." },
  { time: "21:00", title: "The city after dark", image: "/images/ghats-evening.jpg", body: "Chaat, paan and thandai in the lit bylanes of Chowk — each dish with its story." },
];

const slides = hours.map((h) => ({ title: h.title, image: h.image, url: "/experiences", linkLabel: h.time }));
const timing = { initialDelay: 30, finalDelay: 30, scaleFrom: 1.15 };
const classNames = {
  info: "py-6",
  infoInner: "wrap items-end",
  prefix: "hidden",
  title: "h-[1.08em] text-[clamp(2.4rem,7vw,7.5rem)]",
  titleText:
    "font-display leading-none tracking-[-0.02em] whitespace-nowrap text-bone will-change-transform [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)]",
  link: "hidden",
};

/** "One day in Kashi" — pinned, scroll-scrubbed chapter (21st.dev Scroll Gallery). */
export function DayInKashi() {
  const [active, setActive] = useState(0);
  const reduce = usePrefersReducedMotion();
  const h = hours[active];

  // Reduced motion: no pinning or scrubbing — every hour in its final readable state.
  if (reduce) {
    return (
      <section className="bg-ink py-20 text-bone">
        <div className="wrap">
          <p className="label text-bone/70">Chapter 03 · One day in Kashi</p>
          <ol className="mt-10 grid gap-10 md:grid-cols-5">
            {hours.map((x) => (
              <li key={x.time}>
                <div className="relative aspect-[3/4]">
                  <Image src={x.image} alt="" fill sizes="20vw" className="object-cover" />
                </div>
                <p className="label mt-4 text-ochre-lit">{x.time}</p>
                <p className="display mt-2 text-3xl">{x.title}</p>
                <p className="mt-2 text-sm text-bone/70">{x.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }

  return (
    <ScrollGallery
      slides={slides}
      scrollPerTransition={65}
      timing={timing}
      showPrefix={false}
      showLink={false}
      classNames={classNames}
      className="bg-ink"
      onSlideChange={setActive}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-ink/60 via-ink/10 to-ink/80" />
      <div className="absolute inset-x-0 top-0 z-[2] pt-24 md:pt-28">
        <div className="wrap flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <p className="label text-bone/70">Chapter 03 · One day in Kashi</p>
          <ol className="flex gap-3" aria-label="Hours of the day">
            {hours.map((x, i) => (
              <li
                key={x.time}
                aria-current={i === active ? "step" : undefined}
                className={`label transition-colors ${i === active ? "text-ochre-lit" : "text-bone/35"}`}
              >
                {x.time}
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 z-[2] pb-10 md:pb-14">
        <div className="wrap">
          <p className="max-w-md text-base leading-relaxed text-bone/85 md:text-lg" aria-live="polite">
            {h.body}
          </p>
        </div>
      </div>
    </ScrollGallery>
  );
}
