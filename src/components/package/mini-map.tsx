import type { Place } from "@/lib/packages";

/**
 * A minimal radial map: the ghats at the centre, each excursion placed by its
 * compass bearing, with distance on a square-root scale so near and far both fit.
 */
export function MiniMap({ places }: { places: Place[] }) {
  const max = Math.max(...places.map((p) => p.km));
  const R = 230;
  const pos = (p: Place) => {
    const r = 60 + Math.sqrt(p.km / max) * R;
    const a = ((p.bearing - 90) * Math.PI) / 180;
    return { x: 300 + r * Math.cos(a), y: 300 + r * Math.sin(a) };
  };
  return (
    <svg viewBox="0 0 600 600" className="h-auto w-full" role="img" aria-label={`Excursions from the ghats: ${places.map((p) => `${p.name}, about ${p.km} km`).join("; ")}`}>
      {[100, 180, 260].map((r) => (
        <circle key={r} cx={300} cy={300} r={r} fill="none" className="stroke-ink/10" strokeDasharray="2 6" />
      ))}
      <text x={300} y={34} textAnchor="middle" className="label fill-smoke text-[13px]">
        N
      </text>
      <line x1={300} y1={44} x2={300} y2={64} className="stroke-ink/30" />
      {places.map((p) => {
        const { x, y } = pos(p);
        // Labels sit beside the point, or below it when the point is near the edge.
        const edge = x > 440 || x < 160;
        const right = !edge && x >= 300;
        const tx = edge ? x : x + (right ? 16 : -16);
        const anchor = edge ? (x > 300 ? "end" : "start") : right ? "start" : "end";
        const ty = edge ? y + 42 : y - 2;
        return (
          <g key={p.name}>
            <line x1={300} y1={300} x2={x} y2={y} className="stroke-ochre" strokeWidth={1.5} strokeDasharray="5 6" />
            <circle cx={x} cy={y} r={7} className="fill-ochre" />
            <text x={tx} y={ty} textAnchor={anchor} className="fill-ink font-display text-[26px]">
              {p.name}
            </text>
            <text x={tx} y={ty + 22} textAnchor={anchor} className="label fill-smoke text-[12px]">
              ~{p.km} km · {p.note}
            </text>
          </g>
        );
      })}
      <circle cx={300} cy={300} r={16} className="fill-ink" />
      <circle cx={300} cy={300} r={30} fill="none" className="stroke-ink/30" />
      <text x={300} y={352} textAnchor="middle" className="fill-ink font-display text-[24px] italic">
        The ghats
      </text>
    </svg>
  );
}
