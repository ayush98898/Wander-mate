"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { splitName, type PackageDay } from "@/lib/packages";
import { cn } from "@/lib/utils";

const HOLD = 7000;
const ease = [0.16, 1, 0.3, 1] as const;

/**
 * One full-bleed photograph per day, drifting slowly and dissolving into the next.
 * Nothing else on screen but the trip's length and its name.
 */
export function PackageHero({
  name,
  length,
  days,
}: {
  name: string;
  length: string;
  days: PackageDay[];
}) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = window.setTimeout(() => setI((n) => (n + 1) % days.length), HOLD);
    return () => window.clearTimeout(t);
  }, [i, reduce, days.length]);

  const [lead, last] = splitName(name);
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
      {/* Black only, per the brand: a soft veil for the header, a deeper one under the title. */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/10 to-black/70" />

      <div className="wrap w-full pb-16 text-center md:pb-24">
        <motion.p
          {...rise(0.2)}
          className="label inline-flex items-center gap-4 text-[0.8rem] font-medium text-bone [text-shadow:0_1px_14px_rgb(0_0_0/0.7)] md:text-sm"
        >
          <span aria-hidden className="h-px w-8 bg-bone/70" />
          {length}
          <span aria-hidden className="h-px w-8 bg-bone/70" />
        </motion.p>
        <motion.h1 {...rise(0.4)} className="display mt-6 text-[clamp(3.2rem,8vw,7.5rem)] leading-[0.92] text-balance">
          {lead} <em>{last}</em>
        </motion.h1>
      </div>
    </section>
  );
}
