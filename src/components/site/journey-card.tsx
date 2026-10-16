import Image from "next/image";
import Link from "next/link";

import { journeyHref, type Journey } from "@/lib/journeys";
import { cn } from "@/lib/utils";

export function JourneyCard({
  journey,
  className,
  sizes = "(min-width:1024px) 30vw, 85vw",
  tone = "light",
}: {
  journey: Journey;
  className?: string;
  sizes?: string;
  tone?: "light" | "dark";
}) {
  const href = journeyHref(journey);
  const external = Boolean(journey.external);
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={cn("group block", className)}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-stone">
        <Image
          src={journey.image}
          alt=""
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-[1.4s] ease-[var(--ease-expo)] group-hover:scale-[1.06]"
        />
        <span className="label absolute top-4 left-4 bg-bone px-2.5 py-1.5 text-ink">{journey.kind}</span>
      </div>
      <div className={cn("mt-5 flex items-start justify-between gap-4", tone === "dark" ? "text-bone" : "text-ink")}>
        <div>
          <h3 className="display text-[2rem] leading-none md:text-[2.4rem]">
            <span className="ul">{journey.name}</span>
          </h3>
          <p className={cn("label mt-3", tone === "dark" ? "text-bone/55" : "text-smoke")}>
            {journey.route} · {journey.duration}
          </p>
        </div>
        {journey.price ? (
          <p className="label shrink-0 pt-1 text-right">
            From
            <br />
            <span className="font-sans text-base tracking-normal normal-case">{journey.price}</span>
          </p>
        ) : null}
      </div>
    </Link>
  );
}
