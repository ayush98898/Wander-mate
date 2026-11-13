"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import { categories, type Category, type Post, type Region } from "@/lib/journal";
import { cn } from "@/lib/utils";

type Card = Pick<Post, "slug" | "title" | "excerpt" | "category" | "region" | "place" | "image" | "imageAlt" | "imagePosition"> & {
  read: string;
};

const regions: ("All" | Region)[] = ["All", "India", "World"];

/** Story grid with category and region filters. */
export function JournalBrowser({ cards }: { cards: Card[] }) {
  const [cat, setCat] = useState<"All" | Category>("All");
  const [region, setRegion] = useState<"All" | Region>("All");

  const shown = useMemo(
    () => cards.filter((c) => (cat === "All" || c.category === cat) && (region === "All" || c.region === region)),
    [cards, cat, region],
  );
  const counts = useMemo(() => {
    const m = new Map<string, number>();
    for (const c of cards) m.set(c.category, (m.get(c.category) ?? 0) + 1);
    return m;
  }, [cards]);

  const [lead, ...rest] = shown;

  return (
    <div>
      <div className="flex flex-col gap-6 border-b border-ink/15 pb-6 lg:flex-row lg:items-end lg:justify-between">
        <div role="group" aria-label="Filter by theme" className="flex flex-wrap gap-2">
          {(["All", ...categories] as const).map((c) => {
            const on = cat === c;
            return (
              <button
                key={c}
                type="button"
                aria-pressed={on}
                onClick={() => setCat(c)}
                className={cn(
                  "label inline-flex min-h-11 items-center gap-2 border px-4 transition-colors",
                  on ? "border-ink bg-ink text-bone" : "border-ink/20 text-ink hover:border-ink",
                )}
              >
                {c}
                <span className={on ? "text-bone/60" : "text-smoke"}>{c === "All" ? cards.length : (counts.get(c) ?? 0)}</span>
              </button>
            );
          })}
        </div>
        <div role="group" aria-label="Filter by region" className="flex shrink-0 border border-ink/20">
          {regions.map((r) => (
            <button
              key={r}
              type="button"
              aria-pressed={region === r}
              onClick={() => setRegion(r)}
              className={cn(
                "label min-h-11 px-4 transition-colors",
                region === r ? "bg-ochre text-bone" : "text-ink hover:bg-ink/5",
              )}
            >
              {r === "World" ? "The world" : r}
            </button>
          ))}
        </div>
      </div>

      <p aria-live="polite" className="sr-only">
        {shown.length} stories
      </p>

      {lead ? (
        <>
          <Link
            href={`/journal/${lead.slug}`}
            data-category={lead.category}
            data-region={lead.region}
            className="group mt-12 grid gap-8 md:grid-cols-12 md:items-center md:gap-12">
            <div className="relative aspect-[4/3] overflow-hidden bg-ink md:col-span-7">
              <Image
                src={lead.image}
                alt={lead.imageAlt}
                fill
                sizes="(min-width:768px) 55vw, 100vw"
                style={{ objectPosition: lead.imagePosition }}
                className="object-cover transition-transform duration-[1.4s] ease-[var(--ease-expo)] group-hover:scale-[1.04]"
              />
            </div>
            <div className="md:col-span-5">
              <Meta c={lead} />
              <h3 className="display mt-5 text-4xl leading-[1.05] md:text-5xl">
                <span className="ul">{lead.title}</span>
              </h3>
              <p className="mt-5 text-lg leading-relaxed text-ink-2">{lead.excerpt}</p>
              <p className="label mt-6 text-ochre">Read the story · {lead.read}</p>
            </div>
          </Link>

          {rest.length ? (
            <ul className="mt-16 grid gap-x-8 gap-y-14 border-t border-ink/15 pt-14 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((c) => (
                <li key={c.slug} data-category={c.category} data-region={c.region}>
                  <Link href={`/journal/${c.slug}`} className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                      <Image
                        src={c.image}
                        alt={c.imageAlt}
                        fill
                        sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 100vw"
                        style={{ objectPosition: c.imagePosition }}
                        className="object-cover transition-transform duration-[1.4s] ease-[var(--ease-expo)] group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="mt-5">
                      <Meta c={c} />
                      <h3 className="display mt-3 text-[1.9rem] leading-[1.08]">
                        <span className="ul">{c.title}</span>
                      </h3>
                      <p className="mt-3 line-clamp-3 leading-relaxed text-ink-2">{c.excerpt}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </>
      ) : (
        <div className="py-24 text-center">
          <p className="display text-3xl">No stories here yet.</p>
          <button
            type="button"
            onClick={() => {
              setCat("All");
              setRegion("All");
            }}
            className="label ul mt-6 text-ochre"
          >
            Show every story
          </button>
        </div>
      )}
    </div>
  );
}

function Meta({ c }: { c: Card }) {
  return (
    <p className="label flex flex-wrap items-center gap-x-3 gap-y-1 text-smoke">
      <span className="text-ochre">{c.category}</span>
      <span aria-hidden>·</span>
      <span>{c.place}</span>
      <span aria-hidden>·</span>
      <span>{c.read}</span>
    </p>
  );
}
