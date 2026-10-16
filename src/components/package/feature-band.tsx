import Image from "next/image";

import { Reveal } from "@/components/site/reveal";
import type { Feature } from "@/lib/packages";
import { cn } from "@/lib/utils";

/**
 * One experience told in a single band: a tall photograph on one side, the name and
 * what it holds on the other. Bands alternate sides and grounds so a pair reads as day and night.
 */
export function FeatureBand({ feature: f, index }: { feature: Feature; index: number }) {
  const night = index % 2 === 1;
  return (
    <section className={cn("overflow-hidden py-24 md:py-32", night ? "bg-ink text-bone" : "border-t border-ink/12")}>
      <div className="wrap grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal className={cn("relative", night && "lg:order-2")}>
          <figure className="relative aspect-[4/5] overflow-hidden md:aspect-[5/4] lg:aspect-[4/5]">
            <Image src={f.image} alt={f.alt} fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
          </figure>
        </Reveal>
        <Reveal delay={0.1} className="min-w-0">
          <p className={cn("label", night ? "text-ochre-lit" : "text-ochre")}>{f.kicker}</p>
          <h2 className="display mt-6 text-5xl leading-[1] md:text-7xl">
            {f.title} <em>{f.italic}</em>
          </h2>
          <p className={cn("mt-6 max-w-md text-lg leading-relaxed", night ? "text-bone/70" : "text-ink-2")}>{f.line}</p>
          <ul className={cn("mt-10 grid border-t sm:grid-cols-2 sm:gap-x-10", night ? "border-bone/15" : "border-ink/12")}>
            {f.items.map((it, i) => (
              <li key={it} className={cn("flex items-baseline gap-4 border-b py-4", night ? "border-bone/15" : "border-ink/12")}>
                <span className={cn("label w-6 shrink-0 tabular-nums", night ? "text-bone/45" : "text-smoke")}>{String(i + 1).padStart(2, "0")}</span>
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
