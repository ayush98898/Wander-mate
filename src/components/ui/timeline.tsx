"use client";

// Adapted from Aceternity's Timeline on 21st.dev (manuarora700/timeline):
// sticky entry titles with a line that fills as you scroll. Re-skinned for
// WanderMate (navy line, royal-blue progress, serif titles), uses motion/react,
// re-measures on resize, and shows the full line under reduced motion.

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

export type TimelineEntry = {
  /** Short sticky label, e.g. "Day 1". */
  title: ReactNode;
  /** Optional second line under the sticky label. */
  subtitle?: ReactNode;
  content: ReactNode;
  id?: string;
};

export function Timeline({ data }: { data: TimelineEntry[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setHeight(el.getBoundingClientRect().height));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 30%", "end 60%"] });
  const fill = useTransform(scrollYProgress, [0, 1], [0, height]);
  const fade = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <div ref={ref} className="relative">
      {data.map((item, i) => (
        <div key={item.id ?? i} id={item.id} className="flex scroll-mt-24 justify-start pt-12 md:gap-10 md:pt-32 first:md:pt-8">
          <div className="sticky top-28 z-10 flex flex-col self-start md:w-full md:max-w-xs lg:max-w-sm">
            <div className="absolute left-2 grid size-8 place-items-center rounded-full bg-bone md:left-2">
              <div className="size-3 rounded-full border border-ink/30 bg-stone" />
            </div>
            <div className="hidden md:block md:pl-20">
              <p className="display text-6xl text-ink lg:text-7xl">{item.title}</p>
              {item.subtitle ? <p className="mt-4 max-w-[16rem] text-sm leading-relaxed text-smoke">{item.subtitle}</p> : null}
            </div>
          </div>

          <div className="relative w-full pl-16 md:pl-4">
            <div className="mb-6 md:hidden">
              <p className="display text-5xl text-ink">{item.title}</p>
              {item.subtitle ? <p className="mt-2 text-sm text-smoke">{item.subtitle}</p> : null}
            </div>
            {item.content}
          </div>
        </div>
      ))}

      <div
        aria-hidden
        style={{ height }}
        className="absolute top-0 left-6 w-px overflow-hidden bg-ink/12 [mask-image:linear-gradient(to_bottom,transparent_0%,black_6%,black_94%,transparent_100%)]"
      >
        <motion.div
          style={reduce ? { height: "100%" } : { height: fill, opacity: fade }}
          className="absolute inset-x-0 top-0 w-px bg-gradient-to-b from-ochre via-ochre to-ink"
        />
      </div>
    </div>
  );
}
