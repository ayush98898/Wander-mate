"use client";

// Adapted from "Line Draw SVG" by pulkitxm on 21st.dev: an SVG path that draws
// itself as you scroll. WanderMate changes: any viewBox, children drawn on top
// (markers, labels), a progress callback so markers can light up as the line
// reaches them, and a fully drawn line under reduced motion.

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef, type ReactNode } from "react";

import { cn } from "@/lib/utils";

export function LineDrawSvg({
  path,
  viewBox = "0 0 100 100",
  className,
  strokeClassName,
  strokeWidth = 2,
  start = "top 75%",
  end = "bottom 45%",
  scrub = 0.8,
  onProgress,
  children,
  title,
}: {
  path: string;
  viewBox?: string;
  className?: string;
  strokeClassName?: string;
  strokeWidth?: number;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  onProgress?: (p: number) => void;
  children?: ReactNode;
  title?: string;
}) {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const progressRef = useRef(onProgress);
  useEffect(() => {
    progressRef.current = onProgress;
  }, [onProgress]);

  useLayoutEffect(() => {
    const el = pathRef.current;
    if (!el) return;
    const length = el.getTotalLength();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      progressRef.current?.(1);
      return;
    }
    el.style.strokeDasharray = `${length}`;
    el.style.strokeDashoffset = `${length}`;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.to(el, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: svgRef.current,
          start,
          end,
          scrub,
          onUpdate: (self) => progressRef.current?.(self.progress),
        },
      });
    });
    return () => ctx.revert();
  }, [path, start, end, scrub]);

  return (
    <svg
      ref={svgRef}
      viewBox={viewBox}
      className={cn("overflow-visible", className)}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <path d={path} fill="none" stroke="currentColor" strokeWidth={strokeWidth} className="opacity-15" />
      <path
        ref={pathRef}
        d={path}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
       
        className={strokeClassName}
      />
      {children}
    </svg>
  );
}
