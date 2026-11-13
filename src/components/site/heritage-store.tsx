import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { Reveal } from "@/components/site/reveal";
import { store, type Shelf } from "@/lib/store";
import { cn } from "@/lib/utils";

/**
 * A place's signature crafts from the Heritage Store: three tall "plates", the first
 * one wider, each a photograph with its name, a line of story and what you can buy.
 * `tone` lets it sit on a dark or a light band, whichever the page needs next.
 */
export function HeritageStore({ shelf, tone = "dark" }: { shelf: Shelf; tone?: "dark" | "light" }) {
  const dark = tone === "dark";
  return (
    <section className={cn("py-24 md:py-32", dark ? "bg-ink text-bone" : "border-t border-ink/12")}>
      <div className="wrap">
        <Reveal className="mb-12 flex flex-col justify-between gap-8 md:mb-16 md:flex-row md:items-end">
          <div>
            <p className={cn("label", dark ? "text-ochre-lit" : "text-ochre")}>The Heritage Store</p>
            <h2 className="display mt-6 text-5xl leading-[1] md:text-7xl">
              Take <em>{shelf.place}</em> home
            </h2>
          </div>
          <p className={cn("max-w-sm", dark ? "text-bone/70" : "text-smoke")}>
            The crafts {shelf.place} is famous for, from the weavers and makers we know — each piece as real as the place.
          </p>
        </Reveal>

        <ol className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-x-8">
          {shelf.crafts.map((c, n) => (
            <li key={c.name} className={cn(n === 0 && "sm:col-span-2 lg:col-span-1")}>
              <Reveal delay={n * 0.08}>
                <a href={store.url} target="_blank" rel="noreferrer" className="group block">
                  <div className={cn("relative overflow-hidden", dark ? "bg-bone/5" : "bg-ink", n === 0 ? "aspect-[4/5] sm:aspect-[16/10] lg:aspect-square" : "aspect-[4/5] lg:aspect-[2/3]")}>
                    <Image
                      src={c.image}
                      alt={c.alt}
                      fill
                      sizes={n === 0 ? "(min-width:1024px) 42vw, 100vw" : "(min-width:1024px) 28vw, (min-width:640px) 50vw, 100vw"}
                      style={{ objectPosition: c.position }}
                      className="object-cover transition-transform duration-[1.6s] ease-[var(--ease-expo)] group-hover:scale-[1.04]"
                    />
                    {c.mark ? (
                      <span className="label absolute top-5 left-5 bg-bone px-3 py-1.5 text-[0.65rem] text-ink">{c.mark}</span>
                    ) : null}
                  </div>
                  <div className={cn("mt-6 flex items-start justify-between gap-4 border-b pb-6", dark ? "border-bone/15" : "border-ink/15")}>
                    <div className="min-w-0">
                      <p className={cn("label tabular-nums", dark ? "text-bone/45" : "text-smoke")}>
                        {String(n + 1).padStart(2, "0")} · Made in {shelf.place}
                      </p>
                      <h3 className={cn("display mt-3 leading-none", n === 0 ? "text-5xl md:text-6xl" : "text-4xl")}>{c.name}</h3>
                      <p className={cn("mt-4 max-w-md leading-relaxed", dark ? "text-bone/70" : "text-ink-2")}>{c.line}</p>
                      <p className={cn("label mt-5", dark ? "text-ochre-lit" : "text-ochre")}>{c.range}</p>
                    </div>
                    <ArrowUpRight
                      aria-hidden
                      className={cn("mt-1 size-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5", dark ? "text-bone/60" : "text-ink/50")}
                    />
                  </div>
                </a>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className={cn("mt-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center", dark ? "text-bone" : "")}>
          <p className={cn("display text-3xl md:text-4xl", dark ? "text-bone/90" : "")}>
            Every piece has a maker, and a <em>story.</em>
          </p>
          <a
            href={store.url}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "group label inline-flex min-h-14 items-center gap-6 px-7 transition-colors duration-500",
              dark ? "bg-bone text-ink hover:bg-ochre-lit" : "bg-ink text-bone hover:bg-ochre",
            )}
          >
            Visit the heritage store
            <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
