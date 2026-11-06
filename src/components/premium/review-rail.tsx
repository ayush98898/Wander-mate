"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";

type Review = { quote: string; name: string; meta: string };

/** Horizontally scrolling, snap-aligned guest reviews with previous/next buttons. */
export function ReviewRail({ reviews }: { reviews: Review[] }) {
  const track = useRef<HTMLUListElement>(null);
  const go = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div>
      <ul ref={track} className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2">
        {reviews.map((r) => (
          <li
            key={r.name}
            className="flex w-[85%] shrink-0 snap-start flex-col justify-between gap-10 border-t border-bone/25 pt-8 sm:w-[60%] lg:w-[38%]"
          >
            <blockquote className="display text-[1.9rem] leading-[1.18] italic md:text-[2.2rem]">&ldquo;{r.quote}&rdquo;</blockquote>
            <p className="label text-bone/60">
              {r.name} · {r.meta}
            </p>
          </li>
        ))}
      </ul>
      <div className="mt-10 flex gap-3">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous reviews"
          className="grid size-12 place-items-center border border-bone/40 transition-colors hover:bg-bone hover:text-ink"
        >
          <ArrowLeft className="size-4" aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next reviews"
          className="grid size-12 place-items-center border border-bone/40 transition-colors hover:bg-bone hover:text-ink"
        >
          <ArrowRight className="size-4" aria-hidden />
        </button>
      </div>
    </div>
  );
}
