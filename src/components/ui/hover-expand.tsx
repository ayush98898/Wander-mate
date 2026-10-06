"use client";

// Adapted from "Hover Expand" by educalvolpz on 21st.dev: an accordion of image
// panels — the active one grows, the rest fold to slim strips with a rotated
// label. WanderMate changes: next/image, square corners, brand type, a large
// numeral per panel, optional children for the active panel, and a vertical
// stack on small screens.

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useRef, useState, useSyncExternalStore, type KeyboardEvent, type ReactNode } from "react";

import { cn } from "@/lib/utils";

export type HoverExpandItem = {
  id: string;
  title: string;
  kicker?: string;
  description?: string;
  image: string;
  alt: string;
  position?: string;
};

const HOVER = "(hover: hover) and (pointer: fine)";
const subscribeHover = (cb: () => void) => {
  const mq = window.matchMedia(HOVER);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};
const getHover = () => window.matchMedia(HOVER).matches;

export function HoverExpand({
  items,
  className,
  expandedFlex = 5,
  collapsedFlex = 1,
  renderActive,
  onActiveChange,
}: {
  items: HoverExpandItem[];
  className?: string;
  expandedFlex?: number;
  collapsedFlex?: number;
  renderActive?: (item: HoverExpandItem, index: number) => ReactNode;
  onActiveChange?: (index: number) => void;
}) {
  const reduce = useReducedMotion();
  const [active, setActiveState] = useState(0);
  const hoverDevice = useSyncExternalStore(subscribeHover, getHover, () => false);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const setActive = (i: number) => {
    setActiveState(i);
    onActiveChange?.(i);
  };

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const next = e.key === "ArrowRight" || e.key === "ArrowDown";
    const prev = e.key === "ArrowLeft" || e.key === "ArrowUp";
    if (!next && !prev) return;
    e.preventDefault();
    const j = next ? Math.min(i + 1, items.length - 1) : Math.max(i - 1, 0);
    setActive(j);
    refs.current[j]?.focus();
  };

  const spring = reduce ? { duration: 0 } : { type: "spring" as const, bounce: 0.08, duration: 0.6 };

  return (
    <div role="group" aria-label="Days of the journey" className={cn("flex w-full flex-col gap-1.5 md:flex-row", className)}>
      {items.map((item, i) => {
        const on = i === active;
        return (
          <motion.button
            key={item.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            type="button"
            aria-pressed={on}
            aria-label={`${item.kicker ?? ""} ${item.title}`.trim()}
            initial={false}
            animate={{ flexGrow: on ? expandedFlex : collapsedFlex }}
            transition={spring}
            style={{ flexBasis: 0 }}
            onMouseEnter={() => hoverDevice && setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => !hoverDevice && setActive(i)}
            onKeyDown={(e) => onKey(e, i)}
            className="group relative min-h-[4.5rem] min-w-0 overflow-hidden bg-ink text-left text-bone outline-none focus-visible:ring-2 focus-visible:ring-ochre-lit md:min-h-0"
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes={on ? "(min-width:768px) 65vw, 100vw" : "(min-width:768px) 15vw, 100vw"}
              style={{ objectPosition: item.position }}
              className={cn(
                "object-cover transition-[transform,filter] duration-[1.2s] ease-[var(--ease-expo)]",
                on ? "scale-100" : "scale-110 brightness-[0.55] grayscale-[35%]",
              )}
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" />

            {/* Collapsed: the day number and title read upward along the strip. */}
            <motion.div
              aria-hidden
              initial={false}
              animate={{ opacity: on ? 0 : 1 }}
              transition={reduce ? { duration: 0 } : { duration: 0.3 }}
              className="pointer-events-none absolute inset-0 hidden items-end justify-center pb-8 md:flex"
            >
              <span className="label rotate-180 whitespace-nowrap text-bone/85 [writing-mode:vertical-rl]">
                {item.kicker} · {item.title}
              </span>
            </motion.div>
            <div aria-hidden className="absolute inset-0 flex items-center px-5 md:hidden">
              {!on ? (
                <span className="label text-bone/85">
                  {item.kicker} · {item.title}
                </span>
              ) : null}
            </div>

            {/* Active: big numeral, title, line and any extra content. */}
            <motion.div
              initial={false}
              animate={{ opacity: on ? 1 : 0, y: on ? 0 : 12 }}
              transition={reduce ? { duration: 0 } : { duration: 0.45, delay: on ? 0.15 : 0 }}
              className={cn("absolute inset-x-0 bottom-0 p-6 md:p-10", !on && "pointer-events-none")}
            >
              {item.kicker ? <p className="label text-ochre-lit">{item.kicker}</p> : null}
              <p className="display mt-3 text-[clamp(2.4rem,5vw,4.5rem)] leading-[0.95]">{item.title}</p>
              {item.description ? <p className="mt-4 max-w-md text-bone/80">{item.description}</p> : null}
              {renderActive ? <div className="mt-6">{renderActive(item, i)}</div> : null}
            </motion.div>
          </motion.button>
        );
      })}
    </div>
  );
}
