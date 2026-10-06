import type { PackageDay } from "@/lib/packages";

const FROM = 4;
const TO = 22;
const span = TO - FROM;
const ticks = [5, 8, 12, 16, 20];

const fmt = (h: number) => {
  const hh = Math.floor(h);
  const mm = Math.round((h - hh) * 60);
  const suffix = hh >= 12 ? "pm" : "am";
  return `${((hh + 11) % 12) + 1}${mm ? `:${String(mm).padStart(2, "0")}` : ""} ${suffix}`;
};

/** A Gantt-style strip per day: when you are out, and when you are resting. */
export function DayRhythm({ days }: { days: PackageDay[] }) {
  const early = days.filter((d) => d.hours.some(([a]) => a < 7)).length;
  return (
    <figure>
      <div className="relative">
        <div aria-hidden className="ml-14 grid" style={{ gridTemplateColumns: `repeat(${span}, 1fr)` }}>
          {Array.from({ length: span }).map((_, n) => (
            <span key={n} className="h-full border-l border-bone/8" />
          ))}
        </div>
        <ul className="space-y-4">
          {days.map((d) => (
            <li key={d.n} className="grid grid-cols-[3.5rem_1fr] items-center">
              <span className="display text-3xl text-bone/70">{String(d.n).padStart(2, "0")}</span>
              <span className="relative block h-9 bg-bone/[0.06]">
                {d.hours.map(([a, b]) => (
                  <span
                    key={a}
                    className={a < 7 ? "absolute inset-y-0 bg-ochre-lit" : "absolute inset-y-0 bg-bone/80"}
                    style={{ left: `${((a - FROM) / span) * 100}%`, width: `${((b - a) / span) * 100}%` }}
                    title={`${fmt(a)} – ${fmt(b)}`}
                  />
                ))}
                <span className="sr-only">
                  Day {d.n}: out {d.hours.map(([a, b]) => `${fmt(a)} to ${fmt(b)}`).join(", then ")}
                </span>
              </span>
            </li>
          ))}
        </ul>
        <div aria-hidden className="relative mt-3 ml-14 h-5">
          {ticks.map((t) => (
            <span key={t} className="label absolute -translate-x-1/2 whitespace-nowrap text-bone/45" style={{ left: `${((t - FROM) / span) * 100}%` }}>
              {fmt(t)}
            </span>
          ))}
        </div>
      </div>
      <figcaption className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-bone/70">
        <span className="flex items-center gap-2">
          <span aria-hidden className="h-3 w-6 bg-ochre-lit" /> Early start — only {early} of {days.length} days
        </span>
        <span className="flex items-center gap-2">
          <span aria-hidden className="h-3 w-6 bg-bone/80" /> Out exploring
        </span>
        <span className="flex items-center gap-2">
          <span aria-hidden className="h-3 w-6 bg-bone/[0.08]" /> Rest at the hotel
        </span>
      </figcaption>
    </figure>
  );
}
