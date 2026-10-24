"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { LineDrawSvg } from "@/components/ui/line-draw-svg";
import { cn } from "@/lib/utils";

// A stylised crescent of the Ganga at Varanasi, south (bottom) to north (top).
const RIVER = "M 820 640 C 560 610, 330 520, 300 380 C 270 240, 420 110, 700 40";

/** The boat route: the river draws itself, and each ghat lights up as the line reaches it. */
export function RiverRoute({ ghats, caption }: { ghats: string[]; caption: string }) {
  const measure = useRef<SVGPathElement>(null);
  const [points, setPoints] = useState<{ x: number; y: number; at: number }[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = measure.current;
    if (!el) return;
    const len = el.getTotalLength();
    setPoints(
      ghats.map((_, i) => {
        const at = 0.04 + (i / (ghats.length - 1)) * 0.92;
        const p = el.getPointAtLength(len * at);
        return { x: p.x, y: p.y, at };
      }),
    );
  }, [ghats]);

  const onProgress = useCallback((p: number) => setProgress(p), []);

  return (
    <div>
      <LineDrawSvg
        path={RIVER}
        viewBox="0 0 1000 680"
        strokeWidth={5}
        className="h-auto w-full text-ochre-lit"
        strokeClassName="text-ochre-lit"
        onProgress={onProgress}
        start="top 70%"
        end="bottom 60%"
        title={`The boat route past ${ghats.length} ghats, from ${ghats[0]} to ${ghats.at(-1)}`}
      >
        <path ref={measure} d={RIVER} fill="none" stroke="none" />
        {points.map((pt, i) => {
          const lit = progress >= pt.at - 0.01;
          const key = i === 0 || i === points.length - 1 || ghats[i] === "Dashashwamedh" || ghats[i] === "Manikarnika";
          return (
            <g key={ghats[i]} className="transition-opacity duration-500" style={{ opacity: lit ? 1 : 0.25 }}>
              <circle cx={pt.x} cy={pt.y} r={key ? 11 : 7} className={cn(lit ? "fill-bone" : "fill-bone/40")} />
              {key ? <circle cx={pt.x} cy={pt.y} r={20} fill="none" className="stroke-bone/40" strokeWidth={1.5} /> : null}
              <text
                x={pt.x - 34}
                y={pt.y + 8}
                textAnchor="end"
                className={cn("fill-bone font-display", key ? "text-[47px] italic md:text-[44px]" : "text-[42px] md:text-[32px]")}
              >
                {ghats[i]}
              </text>
            </g>
          );
        })}
      </LineDrawSvg>
      <p className="label mt-4 text-right text-bone/50">{caption}</p>
    </div>
  );
}
