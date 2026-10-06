"use client";

import { Car, Footprints, Plane, TrainFront } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import type { Ground, LatLng } from "@/lib/packages";
import { cn } from "@/lib/utils";

// Equirectangular projection around Varanasi — true to scale for this small area.
const LAT0 = 25.52;
const LNG0 = 82.83;
const K = 3356;
const COS = Math.cos((25.38 * Math.PI) / 180);
const xy = ([lat, lng]: LatLng) => ({ x: (lng - LNG0) * COS * K, y: (LAT0 - lat) * K });

// The Ganga, roughly along its centre line, south to north.
const GANGA: LatLng[] = [
  [25.235, 83.031],
  [25.262, 83.022],
  [25.285, 83.012],
  [25.3, 83.0135],
  [25.31, 83.0178],
  [25.318, 83.025],
  [25.324, 83.035],
  [25.331, 83.05],
  [25.346, 83.07],
  [25.372, 83.089],
  [25.405, 83.101],
  [25.44, 83.114],
  [25.472, 83.124],
  [25.497, 83.137],
  [25.525, 83.152],
];

/** SVG text styles sized in map units so they stay legible at any zoom (inline style beats CSS classes). */
const caps = (px: number, u: number) => ({
  fontSize: px * u,
  letterSpacing: px * 0.16 * u,
  fontFamily: "var(--font-sans)",
  textTransform: "uppercase" as const,
});
const serif = (px: number, u: number) => ({ fontSize: px * u, fontFamily: "var(--font-display)" });

const fmt = (m: number) => (m >= 60 ? `${Math.floor(m / 60)} h${m % 60 ? ` ${m % 60} min` : ""}` : `${m} min`);
const arrivalIcon = (name: string) => (/airport/i.test(name) ? Plane : TrainFront);

type Box = [number, number, number, number];

function boxFor(points: LatLng[], pad: number): Box {
  const ps = points.map(xy);
  const xs = ps.map((p) => p.x);
  const ys = ps.map((p) => p.y);
  let [x0, x1, y0, y1] = [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)];
  const w = x1 - x0;
  const h = y1 - y0;
  const size = Math.max(w, h * 1.1, 160) * (1 + pad);
  const cx = (x0 + x1) / 2;
  const cy = (y0 + y1) / 2;
  x0 = cx - size / 2;
  x1 = cx + size / 2;
  y0 = cy - (size / 1.1) / 2;
  y1 = cy + (size / 1.1) / 2;
  return [x0, y0, x1 - x0, y1 - y0];
}

/** One practical map: where you stay versus the sights, how you arrive, and each day's time in the car. */
export function TripOnGround({ ground }: { ground: Ground }) {
  const views = ["Getting here", ...ground.days.map((d) => d.label)];
  const [v, setV] = useState(0);
  const day = v > 0 ? ground.days[v - 1] : null;

  const target = useMemo<Box>(() => {
    if (!day) return boxFor([ground.hotel.at, ...ground.arrivals.map((a) => a.at), ground.zones.ghatSide.center], 0.28);
    return boxFor(day.stops.map((s) => s.at), 0.55);
  }, [day, ground]);

  // Ease the viewBox between views.
  const [box, setBox] = useState<Box>(target);
  const boxRef = useRef(box);
  useEffect(() => {
    const from = boxRef.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const t0 = performance.now();
    const step = (t: number) => {
      const k = reduce ? 1 : Math.min(1, (t - t0) / 700);
      const e = 1 - Math.pow(1 - k, 3);
      const next = from.map((f, i) => f + (target[i] - f) * e) as Box;
      boxRef.current = next;
      setBox(next);
      if (k < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target]);

  // Size map text in real screen pixels, whatever the zoom or container width.
  const svgRef = useRef<SVGSVGElement>(null);
  const [pxW, setPxW] = useState(800);
  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setPxW(e.contentRect.width || 800));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const u = (box[2] / pxW) * (pxW < 560 ? 0.62 : 0.82); // one screen pixel, in map units
  const river = GANGA.map(xy).map((p, i) => `${i ? "L" : "M"}${p.x} ${p.y}`).join(" ");
  const ghat = ground.zones.ghatSide;
  const gc = xy(ghat.center);
  const hotel = xy(ground.hotel.at);

  const driving = day ? day.legs.reduce((a, b) => a + b, 0) : 0;
  const total = day ? driving / 60 + day.siteHours : 1;

  return (
    <div className="grid gap-px bg-ink/12 lg:grid-cols-[1.45fr_1fr]">
      {/* Map */}
      <div className="relative bg-paper">
        <svg
          ref={svgRef}
          viewBox={box.join(" ")}
          className="block aspect-[1.1] w-full"
          role="img"
          aria-label={
            day
              ? `${day.label} route: ${day.stops.map((s) => s.name).join(", then ")}`
              : `Arrival points and their drive times to the hotel and the ghats`
          }
        >
          <defs>
            <pattern id="hatch" width={8 * u} height={8 * u} patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2={8 * u} className="stroke-ochre/25" strokeWidth={2 * u} />
            </pattern>
            <marker id="arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M0 0 L10 5 L0 10 z" className="fill-ink" />
            </marker>
          </defs>

          {/* The river */}
          <path d={river} fill="none" className="stroke-ochre-lit/60" strokeWidth={14 * u} strokeLinecap="round" strokeLinejoin="round" />
          <text x={xy([25.36, 83.1]).x + 16 * u} y={xy([25.36, 83.1]).y} className="fill-ochre italic" style={serif(22, u)}>
            Ganga
          </text>

          {/* Zones: walk-only old city vs car-friendly city side */}
          <ellipse cx={gc.x} cy={gc.y} rx={ghat.rx * COS * K} ry={ghat.ry * K} fill="url(#hatch)" className="stroke-ochre/50" strokeWidth={1.5 * u} strokeDasharray={`${4 * u} ${4 * u}`} />
          <text x={gc.x + ghat.rx * COS * K + 12 * u} y={gc.y + ghat.ry * K * 0.75} textAnchor="start" className="fill-ochre" style={caps(11, u)}>
            OLD CITY · ON FOOT
          </text>
          <circle cx={hotel.x} cy={hotel.y} r={46 * u} className="fill-ink/[0.04] stroke-ink/20" strokeWidth={1.2 * u} strokeDasharray={`${4 * u} ${5 * u}`} />
          <text x={hotel.x - 54 * u} y={hotel.y - 26 * u} textAnchor="end" className="fill-smoke" style={caps(11, u)}>
            CITY SIDE · CAR TO THE DOOR
          </text>

          {/* Getting here */}
          {!day
            ? ground.arrivals.map((a) => {
                const p = xy(a.at);
                return (
                  <g key={a.name}>
                    <line x1={p.x} y1={p.y} x2={hotel.x} y2={hotel.y} className="stroke-ink/50" strokeWidth={1.6 * u} strokeDasharray={`${6 * u} ${6 * u}`} />
                    <circle cx={p.x} cy={p.y} r={9 * u} className="fill-ochre" />
                    <text x={p.x + 16 * u} y={p.y - 4 * u} className="fill-ink" style={serif(24, u)}>
                      {a.name}
                    </text>
                    <text x={p.x + 16 * u} y={p.y + 18 * u} className="fill-smoke" style={caps(11, u)}>
                      ~{fmt(a.toHotel)} TO THE HOTEL
                    </text>
                  </g>
                );
              })
            : null}

          {/* A day's route */}
          {day
            ? day.stops.slice(1).map((s, i) => {
                const a = xy(day.stops[i].at);
                const b = xy(s.at);
                const mx = (a.x + b.x) / 2;
                const my = (a.y + b.y) / 2;
                const walk = day.legs[i] === 0;
                const short = Math.hypot(b.x - a.x, b.y - a.y) < 90 * u;
                return (
                  <g key={`${s.name}-${i}`}>
                    <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} className="stroke-ink" strokeWidth={2.2 * u} strokeDasharray={walk ? `${3 * u} ${5 * u}` : undefined} markerEnd="url(#arrow)" />
                    <g transform={`translate(${mx} ${my})`} style={{ display: short ? "none" : undefined }}>
                      <rect x={-34 * u} y={-12 * u} width={68 * u} height={24 * u} className="fill-ink" />
                      <text textAnchor="middle" y={5 * u} className="fill-bone" style={caps(11, u)}>
                        {walk ? "ON FOOT" : `${day.legs[i]} MIN`}
                      </text>
                    </g>
                  </g>
                );
              })
            : null}
          {day
            ? day.stops.map((s, i) => {
                if (s.name === "Hotel") return null;
                const p = xy(s.at);
                const left = p.x > box[0] + box[2] * 0.62;
                return (
                  <g key={`${s.name}-${i}`}>
                    <circle cx={p.x} cy={p.y} r={14 * u} className="fill-ochre" />
                    <text x={p.x} y={p.y + 5 * u} textAnchor="middle" className="fill-bone" style={caps(13, u)}>
                      {i}
                    </text>
                    <text x={p.x + (left ? -22 : 22) * u} y={p.y + 7 * u} textAnchor={left ? "end" : "start"} className="fill-ink" style={serif(22, u)}>
                      {s.name}
                    </text>
                  </g>
                );
              })
            : null}

          {/* Hotel */}
          <rect x={hotel.x - 11 * u} y={hotel.y - 11 * u} width={22 * u} height={22 * u} className="fill-ink" />
          <text x={hotel.x + 18 * u} y={hotel.y + 30 * u} className="fill-ink italic" style={serif(20, u)}>
            {ground.hotel.name}
          </text>
        </svg>
        <p className="label absolute bottom-3 left-4 text-smoke">Times are typical · traffic varies</p>
      </div>

      {/* Panel */}
      <div className="flex flex-col bg-bone p-6 md:p-9">
        <div role="tablist" aria-label="Map view" className="flex flex-wrap gap-1.5">
          {views.map((label, i) => (
            <button
              key={label}
              role="tab"
              type="button"
              aria-selected={i === v}
              onClick={() => setV(i)}
              className={cn(
                "label min-h-11 border px-3.5 transition-colors",
                i === v ? "border-ink bg-ink text-bone" : "border-ink/20 hover:border-ink",
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {!day ? (
          <div className="mt-8 flex flex-1 flex-col">
            <ul>
              {ground.arrivals.map((a) => {
                const Icon = arrivalIcon(a.name);
                return (
                  <li key={a.name} className="grid grid-cols-[2.5rem_1fr] items-center gap-3 border-b border-ink/12 py-4">
                    <Icon aria-hidden className="size-5 text-ochre" strokeWidth={1.5} />
                    <span>
                      <span className="display block text-2xl">{a.name}</span>
                      <span className="label text-smoke">
                        ~{fmt(a.toHotel)} to the hotel · ~{fmt(a.toGhats)} to the ghats
                      </span>
                    </span>
                  </li>
                );
              })}
            </ul>
            <div className="mt-auto grid gap-4 pt-8 sm:grid-cols-2">
              <div className="border-l-2 border-ochre pl-4">
                <p className="flex items-center gap-2 font-medium">
                  <Footprints aria-hidden className="size-4 text-ochre" /> Ghat side
                </p>
                <p className="mt-1 text-sm leading-relaxed text-smoke">At the river at dawn — but lanes are on foot, with steps and carried luggage.</p>
              </div>
              <div className="border-l-2 border-ink pl-4">
                <p className="flex items-center gap-2 font-medium">
                  <Car aria-hidden className="size-4" /> City side
                </p>
                <p className="mt-1 text-sm leading-relaxed text-smoke">Car to the door, easier with elders — about 25 minutes to the ghats.</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-8 flex flex-1 flex-col">
            <ol>
              {day.stops.slice(1).map((s, i) => (
                <li key={`${s.name}-${i}`} className="flex items-baseline justify-between gap-4 border-b border-ink/12 py-3">
                  <span className="min-w-0">
                    <span className="label mr-2 text-smoke">{day.stops[i].name === "Hotel" ? "From hotel" : `${i}`} →</span>
                    <span className="display text-xl">{s.name}</span>
                  </span>
                  <span className="label shrink-0 text-ochre">{day.legs[i] ? `~${fmt(day.legs[i])}` : "On foot"}</span>
                </li>
              ))}
            </ol>
            <div className="mt-auto pt-8">
              <div className="flex h-3 w-full overflow-hidden" aria-hidden>
                <span className="bg-ink" style={{ width: `${(driving / 60 / total) * 100}%` }} />
                <span className="bg-ochre-lit" style={{ width: `${(day.siteHours / total) * 100}%` }} />
              </div>
              <dl className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <dt className="label text-smoke">In the car</dt>
                  <dd className="display text-3xl md:text-4xl">~{fmt(driving)}</dd>
                </div>
                <div>
                  <dt className="label text-smoke">At the places</dt>
                  <dd className="display text-3xl text-ochre md:text-4xl">~{day.siteHours} h</dd>
                </div>
              </dl>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
