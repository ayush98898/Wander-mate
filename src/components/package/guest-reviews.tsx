"use client";

import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { useEffect, useState, useSyncExternalStore } from "react";

import type { Review } from "@/lib/packages";
import { cn } from "@/lib/utils";

const REDUCED = "(prefers-reduced-motion: reduce)";
const subscribe = (cb: () => void) => {
  const mq = window.matchMedia(REDUCED);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

/**
 * The rating on the left, one guest's words at a time on the right. All quotes share
 * one grid cell, so the block keeps the height of the longest and never jumps.
 * Advances on its own every few seconds (not under reduced motion, and paused while
 * the pointer or focus is inside).
 */
export function GuestReviews({ reviews, score, count }: { reviews: Review[]; score: number; count: number }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useSyncExternalStore(subscribe, () => window.matchMedia(REDUCED).matches, () => true);
  const n = reviews.length;
  const go = (d: number) => setI((v) => (v + d + n) % n);

  useEffect(() => {
    if (reduced || paused || n < 2) return;
    const t = window.setTimeout(() => setI((v) => (v + 1) % n), 7000);
    return () => window.clearTimeout(t);
  }, [i, reduced, paused, n]);

  return (
    <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.4fr)] lg:gap-24">
      {/* The score */}
      <div className="flex flex-col justify-between gap-10 border-bone/15 lg:border-r lg:pr-16">
        <div>
          <p className="label text-bone/55">Guest reviews</p>
          <p className="display mt-8 text-[7rem] leading-[0.85] md:text-[9rem]">{score}</p>
          <div aria-hidden className="mt-10 flex gap-1.5 text-ochre-lit">
            {Array.from({ length: 5 }).map((_, k) => (
              <Star key={k} className="size-4 fill-current" />
            ))}
          </div>
          <p className="label mt-4 text-bone/55">
            <span className="sr-only">Rated {score} out of 5, </span>
            from {count} travellers
          </p>
        </div>
        <ol className="hidden space-y-3 lg:block">
          {reviews.map((r, k) => (
            <li key={r.name}>
              <button
                type="button"
                onClick={() => setI(k)}
                aria-current={k === i}
                className={cn("label flex min-h-8 items-center gap-3 transition-colors", k === i ? "text-bone" : "text-bone/35 hover:text-bone/70")}
              >
                <span className={cn("h-px bg-current transition-all duration-500", k === i ? "w-8" : "w-3")} />
                {r.name}
              </button>
            </li>
          ))}
        </ol>
      </div>

      {/* One voice at a time */}
      <div
        className="flex flex-col justify-between gap-12"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div>
          <span aria-hidden className="display block h-16 text-[8rem] leading-none text-ochre-lit md:h-20 md:text-[10rem]">
            &ldquo;
          </span>
          <div className="grid" aria-live="polite">
            {reviews.map((r, k) => (
              <figure
                key={r.name}
                aria-hidden={k !== i}
                className={cn(
                  "[grid-area:1/1] transition-[opacity,transform] duration-700 ease-out",
                  k === i ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
                )}
              >
                <blockquote className="display text-[clamp(2rem,4.2vw,3.6rem)] leading-[1.12] text-balance">{r.quote}</blockquote>
                <figcaption className="mt-10 flex items-center gap-4">
                  <span aria-hidden className="h-px w-10 bg-ochre-lit" />
                  <span className="text-lg">{r.name}</span>
                  <span className="label text-bone/50">{r.from}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-6 border-t border-bone/15 pt-6">
          <p className="label tabular-nums text-bone/55">
            <span className="text-bone">{String(i + 1).padStart(2, "0")}</span> / {String(n).padStart(2, "0")}
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous review"
              onClick={() => go(-1)}
              className="grid size-12 place-items-center border border-bone/25 transition-colors hover:border-bone hover:bg-bone hover:text-ink"
            >
              <ArrowLeft aria-hidden className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Next review"
              onClick={() => go(1)}
              className="grid size-12 place-items-center border border-bone/25 transition-colors hover:border-bone hover:bg-bone hover:text-ink"
            >
              <ArrowRight aria-hidden className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
