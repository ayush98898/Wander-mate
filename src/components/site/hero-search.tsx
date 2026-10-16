"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useId, useState, type FormEvent } from "react";

import { feelings } from "@/lib/content";

const lengths = [
  { value: "1", label: "A short escape · 1–2 nights" },
  { value: "3", label: "A long weekend · 3 nights" },
  { value: "5", label: "A deeper journey · 5+ nights" },
];

/** "I want to feel ___ for ___" — a sentence-style search that seeds the planner. */
export function HeroSearch() {
  const id = useId();
  const router = useRouter();
  const [feeling, setFeeling] = useState("awe");
  const [nights, setNights] = useState("3");

  function submit(e: FormEvent) {
    e.preventDefault();
    router.push(`/plan?feeling=${feeling}&nights=${nights}`);
  }

  const select =
    "min-h-11 cursor-pointer appearance-none border-b border-bone/50 bg-transparent pr-6 font-display text-2xl italic text-bone outline-none transition-colors hover:border-bone focus-visible:border-ochre-lit md:text-[2rem] [&>option]:bg-ink [&>option]:font-sans [&>option]:text-base [&>option]:not-italic";

  return (
    <form
      onSubmit={submit}
      className="flex flex-col gap-5 border-t border-bone/25 pt-6 md:flex-row md:items-end md:justify-between"
      aria-label="Find a journey"
    >
      <p className="flex flex-wrap items-baseline gap-x-3 gap-y-2 text-bone">
        <span className="label text-bone/70">I want to feel</span>
        <label htmlFor={`${id}-f`} className="sr-only">
          Feeling
        </label>
        <span className="relative">
          <select id={`${id}-f`} value={feeling} onChange={(e) => setFeeling(e.target.value)} className={select}>
            {feelings.map((f) => (
              <option key={f.id} value={f.id}>
                {f.label.toLowerCase()}
              </option>
            ))}
          </select>
          <span aria-hidden className="pointer-events-none absolute right-0 bottom-2 text-xs">▾</span>
        </span>
        <span className="label text-bone/70">for</span>
        <label htmlFor={`${id}-n`} className="sr-only">
          Length of journey
        </label>
        <span className="relative">
          <select id={`${id}-n`} value={nights} onChange={(e) => setNights(e.target.value)} className={select}>
            {lengths.map((l) => (
              <option key={l.value} value={l.value}>
                {l.label}
              </option>
            ))}
          </select>
          <span aria-hidden className="pointer-events-none absolute right-0 bottom-2 text-xs">▾</span>
        </span>
      </p>
      <button
        type="submit"
        className="label group inline-flex min-h-12 shrink-0 items-center justify-between gap-6 bg-bone px-6 text-ink transition-colors hover:bg-ochre-lit"
      >
        Find my journey
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
}
