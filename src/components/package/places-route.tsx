"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { LineDrawSvg } from "@/components/ui/line-draw-svg";
import type { Place } from "@/lib/packages";
import { cn } from "@/lib/utils";

type Pt = { x: number; y: number };

/** A smooth curve through the points (Catmull-Rom as cubic Béziers), one segment per string. */
function segments(pts: Pt[]) {
  return pts.slice(1).map((b, i) => {
    const a = pts[i];
    const p = pts[i - 1] ?? a;
    const n = pts[i + 2] ?? b;
    const c1 = { x: a.x + (b.x - p.x) / 6, y: a.y + (b.y - p.y) / 6 };
    const c2 = { x: b.x - (n.x - a.x) / 6, y: b.y - (n.y - a.y) / 6 };
    return `C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${b.x} ${b.y}`;
  });
}

/**
 * Every place on the journey, in order: one line draws itself down the page as you
 * scroll, and each place lights up as the line reaches it — the same idea as the
 * river route, for the whole trip. Labels are HTML so they stay readable on phones;
 * the line is laid over them from measured positions.
 */
export function PlacesRoute({ places, days }: { places: Place[]; days: { n: number; title: string }[] }) {
  const wrap = useRef<HTMLDivElement>(null);
  const dots = useRef<(HTMLSpanElement | null)[]>([]);
  const measure = useRef<SVGPathElement>(null);
  const [geo, setGeo] = useState<{ w: number; h: number; pts: Pt[]; segs: string[] } | null>(null);
  const [at, setAt] = useState<number[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      const box = el.getBoundingClientRect();
      const pts = dots.current.map((d, i) => {
        const r = d!.getBoundingClientRect();
        // The dot's own x sets the lane; the line sways a little either side of it.
        return { x: r.left - box.left + Math.sin(i * 1.35) * (r.left - box.left) * 0.45, y: r.top - box.top + r.height / 2 };
      });
      const all = [{ x: pts[0].x, y: 0 }, ...pts, { x: pts.at(-1)!.x, y: box.height }];
      setGeo({ w: box.width, h: box.height, pts, segs: segments(all) });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [places]);

  // Where along the line each place sits (0–1), so it lights up as the line arrives.
  useEffect(() => {
    const m = measure.current;
    if (!geo || !m) return;
    const start = `M ${geo.pts[0].x} 0 `;
    m.setAttribute("d", start + geo.segs.join(" "));
    const total = m.getTotalLength();
    const out = geo.pts.map((_, i) => {
      m.setAttribute("d", start + geo.segs.slice(0, i + 1).join(" "));
      return m.getTotalLength() / total;
    });
    m.setAttribute("d", start + geo.segs.join(" "));
    setAt(out);
  }, [geo]);

  const onProgress = useCallback((p: number) => setProgress(p), []);
  const path = geo ? `M ${geo.pts[0].x} 0 ${geo.segs.join(" ")}` : "";
  const lit = (i: number) => at.length > 0 && progress >= at[i] - 0.01;

  return (
    <div ref={wrap} className="relative">
      {geo ? (
        <LineDrawSvg
          path={path}
          viewBox={`0 0 ${geo.w} ${geo.h}`}
          strokeWidth={3}
          className="pointer-events-none absolute inset-0 h-full w-full text-ochre-lit"
          strokeClassName="text-ochre-lit"
          onProgress={onProgress}
          start="top 65%"
          end="bottom 70%"
          title={`The journey through ${places.length} places, from ${places[0].name} to ${places.at(-1)!.name}`}
        >
          <path ref={measure} fill="none" stroke="none" />
          {geo.pts.map((pt, n) => (
            <g key={places[n].name} className="transition-opacity duration-500" style={{ opacity: lit(n) ? 1 : 0.3 }}>
              <circle cx={pt.x} cy={pt.y} r={places[n].key ? 8 : 5.5} className="fill-bone" />
              {places[n].key ? <circle cx={pt.x} cy={pt.y} r={15} fill="none" className="stroke-bone/40" strokeWidth={1.5} /> : null}
            </g>
          ))}
        </LineDrawSvg>
      ) : null}

      <div className="space-y-14 py-6 md:space-y-16">
        {days.map((d) => {
          const here = places.map((p, n) => ({ ...p, n })).filter((p) => p.day === d.n);
          if (!here.length) return null;
          return (
            <div key={d.n} className="pl-24 md:pl-36">
              <p className="label text-ochre-lit">
                Day {d.n} <span className="text-bone/45">· {d.title}</span>
              </p>
              <ol className="mt-6 space-y-7 md:space-y-8">
                {here.map(({ n, ...p }) => {
                  return (
                    <li key={p.name} className="relative transition-opacity duration-500" style={{ opacity: lit(n) ? 1 : 0.35 }}>
                      <span
                        ref={(el) => {
                          dots.current[n] = el;
                        }}
                        aria-hidden
                        className="absolute top-[0.55em] -left-12 block size-0 md:-left-16"
                      />
                      <span className={cn("display block leading-none", p.key ? "text-4xl italic md:text-5xl" : "text-3xl md:text-4xl")}>
                        {p.name}
                      </span>
                      <span className="label mt-2 block text-bone/50">{p.note}</span>
                    </li>
                  );
                })}
              </ol>
            </div>
          );
        })}
      </div>
    </div>
  );
}
