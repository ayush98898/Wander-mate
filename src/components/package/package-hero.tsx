"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

import type { PackageDay } from "@/lib/packages";
import { cn } from "@/lib/utils";

const HOLD = 7000;
const ease = [0.16, 1, 0.3, 1] as const;

/**
 * One full-bleed photograph at a time, drifting slowly and dissolving into the next
 * day's. The title sits quietly bottom-left; a four-step day line bottom-right names
 * the day on screen and lets you pick one.
 */
export function PackageHero({
  name,
  length,
  tagline,
  days,
}: {
  name: string;
  length: string;
  tagline: string;
  days: PackageDay[];
}) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = window.setTimeout(() => setI((n) => (n + 1) % days.length), HOLD);
    return () => window.clearTimeout(t);
  }, [i, reduce, days.length]);

  const words = name.split(" ");
  const rise = (d: number) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.4, ease, delay: d },
  });

  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink text-bone">
      {days.map((d, n) => (
        <Image
          key={d.image}
          src={d.image}
          alt={n === i ? d.imageAlt : ""}
          aria-hidden={n !== i}
          fill
          priority={n === 0}
          sizes="100vw"
          style={{ objectPosition: d.position }}
          className={cn(
            "-z-20 object-cover transition-[opacity,transform] ease-out",
            n === i ? "scale-100 opacity-100 duration-[2400ms,9000ms]" : "scale-[1.07] opacity-0 duration-[2400ms,2400ms]",
          )}
        />
      ))}
      {/* Black only, per the brand: a soft veil for the header, a deeper one under the words. */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-black/45 via-black/5 to-black/80" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-black/45 via-transparent to-transparent" />
      {/* Phones: the words cover most of the frame, so the whole photo sits a shade deeper. */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-black/35 md:hidden" />

      <div className="wrap w-full pt-40 pb-10 md:pb-14">
        <div className="grid items-end gap-14 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-20">
          <div>
            <motion.p {...rise(0.1)} className="label flex items-center gap-4 text-bone/80">
              <span aria-hidden className="h-px w-10 bg-bone/60" />
              Varanasi · {length}
            </motion.p>
            <motion.h1 {...rise(0.25)} className="display mt-7 text-[clamp(3.4rem,8.5vw,8rem)] leading-[0.9] text-balance">
              {words.slice(0, -2).join(" ")} <em>{words.slice(-2).join(" ")}</em>
            </motion.h1>
            <motion.p {...rise(0.45)} className="mt-7 max-w-md text-lg leading-relaxed text-bone/80">
              {tagline}
            </motion.p>
            <motion.div {...rise(0.6)} className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="#price"
                className="group label inline-flex min-h-13 items-center gap-5 bg-bone px-7 text-ink transition-colors duration-500 hover:bg-ochre-lit"
              >
                Get my price
                <ArrowUpRight aria-hidden className="size-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a href="#days" className="label inline-flex min-h-12 items-center gap-3 border-b border-bone/40 transition-colors hover:border-bone">
                See the four days <ArrowDown aria-hidden className="size-4" />
              </a>
            </motion.div>
          </div>

          {/* The day on screen */}
          <motion.div {...rise(0.8)}>
            <div role="group" aria-label="Days of the journey" className="grid grid-cols-4 gap-2">
              {days.map((d, n) => (
                <button
                  key={d.n}
                  type="button"
                  onClick={() => setI(n)}
                  aria-pressed={n === i}
                  aria-label={`Day ${d.n}: ${d.title}`}
                  className="group py-3 text-left"
                >
                  <span className={cn("label block transition-colors", n === i ? "text-bone" : "text-bone/45 group-hover:text-bone/80")}>
                    {String(d.n).padStart(2, "0")}
                  </span>
                  <span className="relative mt-3 block h-px overflow-hidden bg-bone/25">
                    {n === i ? (
                      <motion.span
                        key={`${i}-${reduce}`}
                        className="absolute inset-y-0 left-0 bg-bone"
                        initial={{ width: reduce ? "100%" : "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: reduce ? 0 : HOLD / 1000, ease: "linear" }}
                      />
                    ) : n < i ? (
                      <span className="absolute inset-0 bg-bone/60" />
                    ) : null}
                  </span>
                </button>
              ))}
            </div>
            <div aria-live="polite" className="mt-4 min-h-14">
              <p className="label text-bone/55">Day {days[i].n}</p>
              <p className="display mt-1 text-2xl italic">{days[i].title}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
