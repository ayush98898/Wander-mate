"use client";

import { useReducedMotion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export type Slide = { src: string; alt: string; place: string; position?: string };

/** Full-bleed crossfading photographs with a caption naming the place on screen. */
export function HeroSlides({ slides, interval = 6000 }: { slides: Slide[]; interval?: number }) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), interval);
    return () => clearInterval(t);
  }, [reduce, slides.length, interval]);

  return (
    <>
      {slides.map((s, n) => (
        <Image
          key={s.src}
          src={s.src}
          alt={n === i ? s.alt : ""}
          aria-hidden={n !== i}
          fill
          priority={n === 0}
          sizes="100vw"
          style={{ objectPosition: s.position }}
          className={cn(
            "-z-20 object-cover transition-[opacity,transform] duration-[2s] ease-[var(--ease-expo)]",
            n === i ? "scale-100 opacity-100" : "scale-[1.06] opacity-0",
          )}
        />
      ))}
      <p aria-live="polite" className="label absolute right-5 bottom-6 z-10 hidden text-bone/70 md:right-10 md:block">
        {slides[i].place}
      </p>
    </>
  );
}
