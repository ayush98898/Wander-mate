"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { type ElementType, type ReactNode, useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

/**
 * Headline that rises word-by-word out of clipped lines
 * (ui-ux-pro-max GSAP preset "Stagger List · Complex": SplitText + expo.out).
 * Readable, unsplit text is rendered on the server and under reduced motion.
 */
export function SplitHeading({
  as: Tag = "h2",
  children,
  className,
  delay = 0,
  onLoad = false,
}: {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Animate immediately instead of when scrolled into view (heroes). */
  onLoad?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        let split: SplitText | undefined;
        document.fonts.ready.then(() => {
          split = SplitText.create(el, {
            type: "lines,words",
            linesClass: "split-line",
            autoSplit: true,
            onSplit(self) {
              return gsap.from(self.words, {
                yPercent: 110,
                duration: 1.1,
                ease: "expo.out",
                stagger: 0.045,
                delay,
                scrollTrigger: onLoad ? undefined : { trigger: el, start: "top 88%", once: true },
              });
            },
          });
          gsap.set(el, { autoAlpha: 1 });
        });
        return () => split?.revert();
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
