"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, type ReactNode } from "react";

import { TripCard } from "@/components/site/trip-card";
import type { TripWithPlace } from "@/lib/destinations";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Horizontal Scroll Journey (ui-ux-pro-max landing pattern): on wide screens the
 * section pins and vertical scroll drives the track sideways. On small screens or
 * with reduced motion it is a native, swipeable scroll-snap row.
 */
export function JourneyRail({ trips, intro }: { trips: TripWithPlace[]; intro: ReactNode }) {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const el = track.current!;
        const distance = () => el.scrollWidth - window.innerWidth;
        const tween = gsap.to(el, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section.current,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => gsap.set(bar.current, { scaleX: self.progress }),
          },
        });
        return () => tween.kill();
      });
      return () => mm.revert();
    },
    { scope: section },
  );

  return (
    <section ref={section} className="relative overflow-hidden bg-bone py-20 lg:flex lg:h-svh lg:flex-col lg:justify-center lg:py-0">
      <div className="wrap mb-10 lg:hidden">{intro}</div>
      <div
        ref={track}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 will-change-transform md:px-10 lg:snap-none lg:gap-10 lg:overflow-visible"
      >
        <div className="hidden shrink-0 flex-col justify-end lg:flex lg:w-[34vw] lg:pr-10">
          {intro}
        </div>
        {trips.map((t) => (
          <TripCard
            key={t.slug}
            trip={t}
            className="w-[78vw] shrink-0 snap-start sm:w-[46vw] lg:w-[27vw]"
            sizes="(min-width:1024px) 27vw, 78vw"
          />
        ))}
        <div aria-hidden className="w-1 shrink-0 lg:w-[6vw]" />
      </div>
      <div className="wrap mt-10 hidden lg:block">
        <div className="h-px w-full bg-ink/12">
          <div ref={bar} className="h-px origin-left scale-x-0 bg-ink" />
        </div>
      </div>
    </section>
  );
}
