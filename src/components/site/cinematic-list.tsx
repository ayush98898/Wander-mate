"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import type { Experience } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Cinematic list — rows that reveal a full-bleed image behind the whole section
 * on hover/focus (pattern inspired by 21st.dev "Cinematic List").
 */
export function CinematicList({ items }: { items: Experience[] }) {
  const [active, setActive] = useState(0);
  return (
    <div className="relative isolate overflow-hidden bg-ink text-bone">
      {items.map((e, i) => (
        <Image
          key={e.slug}
          src={e.image}
          alt=""
          fill
          sizes="100vw"
          className={cn(
            "-z-20 object-cover transition-[opacity,transform] duration-[1.2s] ease-[var(--ease-expo)]",
            i === active ? "scale-100 opacity-60" : "scale-105 opacity-0",
          )}
        />
      ))}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/75 to-black/30" />

      <ol className="wrap py-10 md:py-16">
        {items.map((e, i) => {
          const on = i === active;
          return (
            <li key={e.slug} className="border-b border-bone/15 first:border-t">
              <Link
                href={`/experiences#${e.slug}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="grid grid-cols-[3.5rem_1fr] items-baseline gap-x-4 py-5 md:grid-cols-[6rem_1fr_16rem_6rem] md:py-7"
              >
                <span className={cn("label transition-colors", on ? "text-ochre-lit" : "text-bone/40")}>{e.time}</span>
                <span
                  className={cn(
                    "display text-[2.2rem] leading-none transition-[color,transform] duration-500 md:text-6xl",
                    on ? "translate-x-2 text-bone italic" : "text-bone/45",
                  )}
                >
                  {e.title}
                </span>
                <span className={cn("label col-start-2 mt-2 md:col-start-auto md:mt-0", on ? "text-bone/80" : "text-bone/35")}>
                  {e.kicker}
                </span>
                <span className="label hidden text-right text-bone/40 md:block">{e.duration}</span>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
