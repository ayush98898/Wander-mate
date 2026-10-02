"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useRef, useState, type KeyboardEvent } from "react";

import { experiences, feelings, type FeelingId } from "@/lib/content";
import { allTrips, tripHref } from "@/lib/destinations";
import { cn } from "@/lib/utils";

/**
 * "How do you want to feel?" — feeling-led discovery (the Black Tomato idea),
 * built as an accessible tablist with an image cross-fade.
 */
export function FeelingFinder() {
  const uid = useId();
  const [active, setActive] = useState<FeelingId>("awe");
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const feeling = feelings.find((f) => f.id === active)!;
  // Spread matches across destinations: at most one trip per place.
  const matchJourneys = allTrips
    .filter((t) => t.feelings.includes(active))
    .filter((t, i, arr) => arr.findIndex((x) => x.destination.slug === t.destination.slug) === i)
    .slice(0, 4);
  const matchExperiences = experiences.filter((e) => e.feelings.includes(active)).slice(0, 3);

  function onKeyDown(e: KeyboardEvent, i: number) {
    const dir = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = (i + dir + feelings.length) % feelings.length;
    setActive(feelings[next].id);
    tabs.current[next]?.focus();
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
      <div className="flex flex-col">
        <div role="tablist" aria-label="Choose a feeling" aria-orientation="vertical" className="border-t border-ink/15">
          {feelings.map((f, i) => {
            const on = f.id === active;
            return (
              <button
                key={f.id}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                role="tab"
                id={`${uid}-tab-${f.id}`}
                aria-selected={on}
                aria-controls={`${uid}-panel`}
                tabIndex={on ? 0 : -1}
                onClick={() => setActive(f.id)}
                onMouseEnter={() => setActive(f.id)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className="group flex w-full items-baseline justify-between gap-4 border-b border-ink/15 py-3 text-left md:py-4"
              >
                <span
                  className={cn(
                    "display text-5xl transition-[color,transform] duration-500 md:text-7xl",
                    on ? "translate-x-0 text-ink italic" : "text-ink/25 group-hover:text-ink/60",
                  )}
                >
                  {f.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div id={`${uid}-panel`} role="tabpanel" aria-labelledby={`${uid}-tab-${active}`} className="flex flex-col">
        <div className="relative aspect-[5/4] overflow-hidden bg-ink">
          {feelings.map((f) => (
            <Image
              key={f.id}
              src={f.image}
              alt=""
              fill
              sizes="(min-width:1024px) 50vw, 100vw"
              className={cn(
                "object-cover transition-[opacity,transform] duration-[1.2s] ease-[var(--ease-expo)]",
                f.id === active ? "scale-100 opacity-100" : "scale-[1.04] opacity-0",
              )}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
          <p
            key={active}
            className="display absolute inset-x-6 bottom-6 max-w-lg text-[1.9rem] leading-[1.05] text-bone md:inset-x-8 md:bottom-8 md:text-4xl"
          >
            {feeling.line}
          </p>
        </div>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <div>
            <p className="label text-smoke">Journeys for {feeling.label.toLowerCase()}</p>
            <ul className="mt-4 divide-y divide-ink/12 border-y border-ink/12">
              {matchJourneys.map((j) => (
                <li key={j.slug}>
                  <Link
                    href={tripHref(j)}
                    className="group flex items-center justify-between gap-4 py-3"
                  >
                    <span className="font-display text-xl">
                      <span className="ul">{j.name}</span>
                    </span>
                    <span className="label shrink-0 text-right text-smoke">{j.destination.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label text-smoke">Moments to add</p>
            <ul className="mt-4 divide-y divide-ink/12 border-y border-ink/12">
              {matchExperiences.map((e) => (
                <li key={e.slug}>
                  <Link href={`/experiences#${e.slug}`} className="group flex items-center justify-between gap-4 py-3">
                    <span className="font-display text-xl">
                      <span className="ul">{e.title}</span>
                    </span>
                    <span className="label text-smoke">{e.time}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
