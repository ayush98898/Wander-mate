import { Check } from "lucide-react";
import Image from "next/image";

import type { StayTier } from "@/lib/packages";
import { cn } from "@/lib/utils";

/** The stay tiers side by side; tiers with confirmed partner hotels show them, others a mood photograph. */
export function StayTiers({ tiers }: { tiers: StayTier[] }) {
  return (
    <div className="grid gap-px bg-ink/12 md:grid-cols-2">
      {tiers.map((t) => {
        const featured = t.hotels.length > 0;
        return (
          <article key={t.name} className={cn("flex flex-col", featured ? "bg-ink text-bone" : "bg-bone")}>
            {featured ? (
              <div className="grid h-64 grid-cols-3 gap-px bg-ink md:h-80">
                {t.hotels.slice(0, 3).map((h) => (
                  <figure key={h.name} className="group relative overflow-hidden">
                    <Image src={h.image} alt={h.name} fill sizes="(min-width:768px) 17vw, 33vw" className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-expo)] group-hover:scale-105" />
                  </figure>
                ))}
              </div>
            ) : t.image ? (
              <figure className="group relative h-64 overflow-hidden md:h-80">
                <Image src={t.image} alt="" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-expo)] group-hover:scale-105" />
              </figure>
            ) : null}
            <div className="flex flex-1 flex-col p-7 md:p-9">
              <p className={cn("label", featured ? "text-ochre-lit" : "text-ochre")}>{featured ? "Our partner hotels" : "Chosen for your dates"}</p>
              <h3 className="display mt-3 text-5xl">{t.name}</h3>
              <p className={cn("mt-3", featured ? "text-bone/75" : "text-ink-2")}>{t.line}</p>
              <ul className="mt-6 mb-8 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <Check aria-hidden className={cn("size-4 shrink-0", featured ? "text-ochre-lit" : "text-ochre")} />
                    <span className={featured ? "text-bone/90" : ""}>{f}</span>
                  </li>
                ))}
              </ul>
              {featured ? (
                <p className="label mt-auto border-t border-bone/15 pt-5 text-bone/60">{t.hotels.map((h) => h.name).join(" · ")}</p>
              ) : null}
            </div>
          </article>
        );
      })}
    </div>
  );
}
