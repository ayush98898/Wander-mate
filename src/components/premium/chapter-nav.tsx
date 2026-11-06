"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export type Chapter = { id: string; label: string };

/** Sticky chapter bar: highlights the section in view and shows reading progress. */
export function ChapterNav({ chapters, cta }: { chapters: Chapter[]; cta: { href: string; label: string } }) {
  const [active, setActive] = useState(chapters[0]?.id);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 });

  useEffect(() => {
    const els = chapters.map((c) => document.getElementById(c.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [chapters]);

  return (
    <nav aria-label="On this page" className="sticky top-0 z-40 border-b border-ink/10 bg-bone/95 backdrop-blur-sm">
      <div className="wrap flex h-14 items-center justify-between gap-6">
        <ol className="no-scrollbar -mx-1 flex min-w-0 items-center gap-1 overflow-x-auto">
          {chapters.map((c) => (
            <li key={c.id} className="shrink-0">
              <a
                href={`#${c.id}`}
                aria-current={active === c.id ? "true" : undefined}
                className={cn(
                  "label inline-flex min-h-11 items-center px-3 transition-colors",
                  active === c.id ? "text-ochre" : "text-smoke hover:text-ink",
                )}
              >
                {c.label}
              </a>
            </li>
          ))}
        </ol>
        <a
          href={cta.href}
          target="_blank"
          rel="noreferrer"
          className="label hidden min-h-10 shrink-0 items-center bg-ochre px-5 text-bone transition-colors hover:bg-ink md:inline-flex"
        >
          {cta.label}
        </a>
      </div>
      <motion.div aria-hidden style={{ scaleX: progress }} className="h-0.5 origin-left bg-ochre" />
    </nav>
  );
}
