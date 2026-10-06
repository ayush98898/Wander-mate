"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useId, useRef, useState, type KeyboardEvent } from "react";

import { momentIcons, stopIcons } from "@/components/package/icons";
import type { PackageDay } from "@/lib/packages";
import { cn } from "@/lib/utils";

/** Day tabs: one big photograph, and the day's stops as icon rows — almost no prose. */
export function DayExplorer({ days }: { days: PackageDay[] }) {
  const uid = useId();
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const d = days[i];

  const onKey = (e: KeyboardEvent, n: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const j = (n + (e.key === "ArrowRight" ? 1 : days.length - 1)) % days.length;
    setI(j);
    tabs.current[j]?.focus();
  };

  return (
    <div>
      <div role="tablist" aria-label="Days" className="grid grid-cols-4 border-b border-ink/15">
        {days.map((day, n) => {
          const on = n === i;
          return (
            <button
              key={day.n}
              ref={(el) => {
                tabs.current[n] = el;
              }}
              role="tab"
              id={`${uid}-t${n}`}
              aria-selected={on}
              aria-controls={`${uid}-p`}
              tabIndex={on ? 0 : -1}
              onClick={() => setI(n)}
              onKeyDown={(e) => onKey(e, n)}
              className="group relative pt-2 pb-5 text-left"
            >
              <span className={cn("display block text-[clamp(3rem,8vw,7rem)] leading-[0.85] transition-colors", on ? "text-ink" : "text-ink/15 group-hover:text-ink/40")}>
                {String(day.n).padStart(2, "0")}
              </span>
              <span className={cn("label mt-3 hidden transition-colors sm:block", on ? "text-ochre" : "text-smoke")}>{day.title}</span>
              {on ? (
                <motion.span layoutId={`${uid}-bar`} className="absolute inset-x-0 -bottom-px h-0.5 bg-ochre" transition={reduce ? { duration: 0 } : { type: "spring", bounce: 0.15, duration: 0.5 }} />
              ) : null}
            </button>
          );
        })}
      </div>

      <div id={`${uid}-p`} role="tabpanel" aria-labelledby={`${uid}-t${i}`} className="mt-10 grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden bg-ink lg:aspect-auto lg:min-h-[34rem]">
          <AnimatePresence initial={false} mode="popLayout">
            <motion.div
              key={d.n}
              initial={reduce ? false : { opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <Image src={d.image} alt={d.imageAlt} fill sizes="(min-width:1024px) 55vw, 100vw" style={{ objectPosition: d.position }} className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <p className="display absolute right-6 bottom-6 left-6 text-3xl text-bone md:text-4xl">{d.line}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <ol className="self-center">
          {d.stops.map((s, n) => {
            const Icon = stopIcons[s.icon];
            const M = momentIcons[s.when];
            return (
              <motion.li
                key={`${d.n}-${s.title}`}
                initial={reduce ? false : { opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: reduce ? 0 : 0.08 * n, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-[3.5rem_1fr_auto] items-center gap-4 border-b border-ink/12 py-5 first:border-t"
              >
                <span className="grid size-14 place-items-center bg-ink text-bone">
                  <Icon aria-hidden className="size-6" strokeWidth={1.4} />
                </span>
                <span className="min-w-0">
                  <span className="display block text-[1.7rem] leading-tight">{s.title}</span>
                  {s.note ? <span className="mt-0.5 block text-sm text-smoke">{s.note}</span> : null}
                </span>
                <span className="flex flex-col items-center gap-1 text-ochre">
                  <M.icon aria-hidden className="size-5" strokeWidth={1.5} />
                  <span className="label text-[0.62rem] text-smoke">{M.label}</span>
                </span>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
