"use client";

import Link from "next/link";
import { useId, useRef, useState, type KeyboardEvent } from "react";

import { DestinationPlate } from "@/components/site/destination-plate";
import { beyond, india, type Destination } from "@/lib/destinations";
import { cn } from "@/lib/utils";

const groups = [
  { id: "india", label: "India", count: india.length, list: india, note: "Kashi now; Braj, Rishikesh and Rajputana open in 2027." },
  { id: "beyond", label: "Beyond India", count: beyond.length, list: beyond, note: "Private journeys on request, where India's stories travelled." },
] as const;

const statusTone: Record<Destination["status"], string> = {
  Now: "bg-ochre text-bone",
  "Opening 2027": "bg-bone text-ink",
  "Coming later": "bg-bone/80 text-ink",
  "On request": "bg-bone text-ink",
};

/** Destinations by group — an accessible two-tab switch over a card grid. */
export function DestinationExplorer() {
  const uid = useId();
  const [active, setActive] = useState<(typeof groups)[number]["id"]>("india");
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const group = groups.find((g) => g.id === active)!;

  function onKeyDown(e: KeyboardEvent, i: number) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (i + 1) % groups.length;
    setActive(groups[next].id);
    tabs.current[next]?.focus();
  }

  return (
    <div>
      <div className="flex flex-col justify-between gap-6 border-b border-ink/15 md:flex-row md:items-end">
        <div role="tablist" aria-label="Destination groups" className="flex gap-8">
          {groups.map((g, i) => {
            const on = g.id === active;
            return (
              <button
                key={g.id}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                role="tab"
                id={`${uid}-${g.id}`}
                aria-selected={on}
                aria-controls={`${uid}-panel`}
                tabIndex={on ? 0 : -1}
                onClick={() => setActive(g.id)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={cn(
                  "-mb-px flex items-baseline gap-3 border-b-2 pb-4 transition-colors",
                  on ? "border-ink text-ink" : "border-transparent text-ink/35 hover:text-ink/70",
                )}
              >
                <span className={cn("display text-4xl md:text-5xl", on && "italic")}>{g.label}</span>
                <span className="label">{g.count}</span>
              </button>
            );
          })}
        </div>
        <p className="pb-4 text-sm text-smoke md:max-w-xs md:text-right">{group.note}</p>
      </div>

      <div
        id={`${uid}-panel`}
        role="tabpanel"
        aria-labelledby={`${uid}-${active}`}
        className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4"
      >
        {group.list.map((d, i) => {
          // Fill the 4-column grid exactly: a large first card, and (for India's 8) a wide last card.
          const big = i === 0;
          const wide = active === "india" && i === group.list.length - 1;
          return (
            <Link
              key={d.slug}
              href={`/destinations/${d.slug}`}
              className={cn("group block", big && "sm:col-span-2 lg:row-span-2", wide && "lg:col-span-2")}
            >
              <div className="relative">
                <DestinationPlate
                  d={d}
                  sizes={big || wide ? "(min-width:1024px) 50vw, 100vw" : "(min-width:1024px) 25vw, 50vw"}
                  className={cn("aspect-[4/5]", big && "lg:aspect-[5/6]", wide && "lg:aspect-[8/5]")}
                />
                <span className={cn("label absolute bottom-4 left-4 px-2.5 py-1.5", statusTone[d.status])}>{d.status}</span>
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <h3 className="display text-3xl">
                  <span className="ul">{d.name}</span>
                </h3>
                <span className="label shrink-0 text-smoke">{d.trips.length} journeys</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-smoke">{d.line}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
