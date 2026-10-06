import { Star } from "lucide-react";

import type { Review } from "@/lib/packages";

/** One large lead quote, then the rest in a quiet row. */
export function GuestReviews({ reviews, score, count }: { reviews: Review[]; score: number; count: number }) {
  const [lead, ...rest] = reviews;
  return (
    <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
      <figure>
        <div aria-label={`Rated ${score} out of 5`} className="flex items-center gap-1 text-ochre">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} aria-hidden className="size-5 fill-current" />
          ))}
          <span className="label ml-3 text-smoke">
            {score} · {count} reviews
          </span>
        </div>
        <blockquote className="display mt-8 text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[1.08] italic">&ldquo;{lead.quote}&rdquo;</blockquote>
        <figcaption className="mt-8 flex items-center gap-4">
          <span aria-hidden className="grid size-12 place-items-center bg-ink font-display text-xl text-bone">
            {lead.name.charAt(0)}
          </span>
          <span>
            <span className="block text-lg">{lead.name}</span>
            <span className="label block text-smoke">
              {lead.from} · {lead.trip}
            </span>
          </span>
        </figcaption>
      </figure>
      <ul className="self-end border-t border-ink/15">
        {rest.map((r) => (
          <li key={r.name} className="border-b border-ink/15 py-6">
            <p className="text-lg leading-relaxed text-ink-2">&ldquo;{r.quote}&rdquo;</p>
            <p className="label mt-3 text-smoke">
              {r.name} · {r.from} · {r.trip}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
