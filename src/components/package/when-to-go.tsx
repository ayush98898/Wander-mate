"use client";

import { ArrowDown, CloudFog, CloudRain, Sun, ThermometerSun, type LucideIcon } from "lucide-react";
import { useState } from "react";

import type { MonthInfo } from "@/lib/packages";
import { cn } from "@/lib/utils";

const sky: Record<MonthInfo["sky"], { icon: LucideIcon; label: string }> = {
  clear: { icon: Sun, label: "Clear" },
  fog: { icon: CloudFog, label: "Foggy mornings" },
  hot: { icon: ThermometerSun, label: "Very hot" },
  rain: { icon: CloudRain, label: "Monsoon rain" },
};

const tone: Record<MonthInfo["verdict"], string> = {
  Best: "bg-ochre-lit text-ink",
  Good: "bg-bone text-ink",
  Hot: "border border-bone/30 text-bone/70",
  Monsoon: "border border-bone/30 text-bone/70",
};

/** Twelve months as a strip: temperature bars, sky, verdict and festivals. Picking one fills the trip builder. */
export function WhenToGo({ months }: { months: MonthInfo[] }) {
  const firstBest = months.findIndex((m) => m.verdict === "Best");
  const [i, setI] = useState(firstBest < 0 ? 0 : firstBest);
  const sel = months[i];
  const max = Math.max(...months.map((m) => m.hi));
  const Sky = sky[sel.sky].icon;

  const plan = () => {
    window.dispatchEvent(new CustomEvent("wm:month", { detail: sel.m }));
    document.getElementById("price")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      <div role="radiogroup" aria-label="Month" className="no-scrollbar -mx-5 overflow-x-auto px-5 md:mx-0 md:px-0">
        <div className="grid min-w-[46rem] grid-cols-12 gap-1.5">
          {months.map((m, n) => {
            const on = n === i;
            const Icon = sky[m.sky].icon;
            return (
              <button
                key={m.m}
                type="button"
                role="radio"
                aria-checked={on}
                aria-label={`${m.m}: ${m.verdict}, ${m.hi}° by day, ${m.lo}° at night${m.festival ? `, ${m.festival}` : ""}`}
                onClick={() => setI(n)}
                className={cn(
                  "group flex flex-col items-center gap-3 px-1 pt-4 pb-3 transition-colors",
                  on ? "bg-bone text-ink" : "bg-bone/[0.06] text-bone hover:bg-bone/[0.12]",
                )}
              >
                <span className="label">{m.m}</span>
                <Icon aria-hidden className={cn("size-5", on ? "text-ochre" : "text-bone/70")} strokeWidth={1.5} />
                <span className="relative flex h-24 w-2.5 items-end bg-current/10">
                  <span
                    className={cn("w-full", m.verdict === "Best" ? "bg-ochre-lit" : on ? "bg-ink/50" : "bg-bone/45")}
                    style={{ height: `${(m.hi / max) * 100}%` }}
                  />
                </span>
                <span className="display text-2xl leading-none tabular-nums">{m.hi}°</span>
                <span aria-hidden className={cn("size-1.5 rounded-full", m.festival ? (on ? "bg-ochre" : "bg-ochre-lit") : "bg-transparent")} />
              </button>
            );
          })}
        </div>
      </div>

      <div aria-live="polite" className="mt-10 grid gap-8 border-t border-bone/20 pt-8 md:grid-cols-[1fr_auto] md:items-end">
        <div className="flex flex-wrap items-end gap-x-10 gap-y-5">
          <p className="display text-6xl leading-none md:text-7xl">{sel.m}</p>
          <span className={cn("label px-3 py-2", tone[sel.verdict])}>{sel.verdict}</span>
          <p className="flex items-center gap-3 text-bone/80">
            <Sky aria-hidden className="size-5" strokeWidth={1.5} /> {sky[sel.sky].label} · {sel.hi}° / {sel.lo}°
          </p>
          {sel.festival ? (
            <p className="flex items-center gap-3 text-bone">
              <span aria-hidden className="size-2 rounded-full bg-ochre-lit" /> {sel.festival}
            </p>
          ) : null}
        </div>
        <button
          type="button"
          onClick={plan}
          className="label inline-flex min-h-12 items-center gap-4 bg-bone px-6 text-ink transition-colors hover:bg-ochre-lit"
        >
          Plan for {sel.m} <ArrowDown aria-hidden className="size-4" />
        </button>
      </div>
      <p className="mt-6 flex items-center gap-2 text-sm text-bone/55">
        <span aria-hidden className="size-1.5 rounded-full bg-ochre-lit" /> Festival month · typical temperatures; dates follow the lunar calendar.
      </p>
    </div>
  );
}
