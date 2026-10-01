"use client";

import { Minus, Plus, Sparkles } from "lucide-react";
import Image from "next/image";
import { useId, useMemo, useState } from "react";

import { WhatsAppIcon } from "@/components/site/icons";
import { experiences, tiers, whatsappLink, type Tier } from "@/lib/content";
import { cn } from "@/lib/utils";

const extensions = [
  { id: "kashi", label: "Kashi only" },
  { id: "ayodhya", label: "+ Ayodhya" },
  { id: "triangle", label: "+ Ayodhya & Prayagraj" },
] as const;

type ExtensionId = (typeof extensions)[number]["id"];

// The always-included backbone of any Kashi trip, in the order we'd schedule it.
const essentials = ["Arrival, check-in & evening Ganga Aarti", "Pre-dawn temple circuit & sunrise boat"];

export function TripBuilder({
  initialNights = 2,
  initialTier = "premium",
  initialAdd = [],
}: {
  initialNights?: number;
  initialTier?: Tier["id"];
  initialAdd?: string[];
}) {
  const uid = useId();
  const [nights, setNights] = useState(initialNights);
  const [tier, setTier] = useState<Tier["id"]>(initialTier);
  const [people, setPeople] = useState(2);
  const [date, setDate] = useState("");
  const [extension, setExtension] = useState<ExtensionId>("kashi");
  const [picked, setPicked] = useState<string[]>(
    initialAdd.length ? initialAdd : ["food-walk", "silk-walk"],
  );
  const [name, setName] = useState("");

  const toggle = (slug: string) =>
    setPicked((p) => (p.includes(slug) ? p.filter((s) => s !== slug) : [...p, slug]));

  const chosen = experiences.filter(
    (e) => picked.includes(e.slug) && e.slug !== "ganga-aarti" && e.slug !== "sunrise-boat",
  );
  const tierInfo = tiers.find((t) => t.id === tier)!;
  const days = nights + 1;

  // Sketch a day-by-day outline: essentials first, then chosen experiences, then the extension.
  const plan = useMemo(() => {
    const items = [...essentials, ...chosen.map((e) => e.title)];
    if (extension !== "kashi") items.push("Drive to Ayodhya — Ram Janmabhoomi & Saryu Aarti");
    if (extension === "triangle") items.push("Prayagraj — Triveni Sangam boat ride");
    const out: string[][] = Array.from({ length: days }, () => []);
    items.forEach((item, i) => out[Math.min(i, days - 1)].push(item));
    out[days - 1].push("Farewell chai by the river & departure");
    return out;
  }, [chosen, days, extension]);

  const message = [
    `Namaste WanderMate! I'd like to plan a trip.`,
    name && `Name: ${name}`,
    `Style: ${tierInfo.name}`,
    `Duration: ${nights}N/${days}D`,
    `Travellers: ${people}`,
    date && `Dates: ${date}`,
    `Route: ${extensions.find((x) => x.id === extension)!.label}`,
    chosen.length ? `Experiences: ${chosen.map((e) => e.title).join(", ")}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const fieldset = "rounded-2xl border border-ink/10 bg-card p-6 md:p-7";
  const legend = "eyebrow mb-4 block text-sindoor";

  return (
    <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <fieldset className={fieldset}>
          <legend className="sr-only">Style</legend>
          <span className={legend} aria-hidden>01 · Choose your style</span>
          <div className="grid gap-3 sm:grid-cols-3">
            {tiers.map((t) => (
              <label
                key={t.id}
                className={cn(
                  "relative cursor-pointer overflow-hidden rounded-xl border-2 transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-sindoor",
                  tier === t.id ? "border-sindoor" : "border-transparent",
                )}
              >
                <input
                  type="radio"
                  name={`${uid}-tier`}
                  value={t.id}
                  checked={tier === t.id}
                  onChange={() => setTier(t.id)}
                  className="sr-only"
                />
                <div className="relative aspect-[4/3]">
                  <Image src={t.image} alt="" fill sizes="200px" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-night/90 to-transparent" />
                  <span className="absolute bottom-3 left-3 font-display text-xl text-white">{t.name}</span>
                </div>
              </label>
            ))}
          </div>
          <p className="mt-3 text-sm text-ink-soft">Best for {tierInfo.bestFor.charAt(0).toLowerCase() + tierInfo.bestFor.slice(1)}.</p>
        </fieldset>

        <fieldset className={cn(fieldset, "grid gap-6 sm:grid-cols-2")}>
          <legend className="sr-only">Duration and group</legend>
          <div>
            <span className={legend} id={`${uid}-n`}>02 · Nights</span>
            <Stepper
              labelledBy={`${uid}-n`}
              value={nights}
              min={1}
              max={6}
              onChange={setNights}
              display={`${nights}N · ${days}D`}
            />
          </div>
          <div>
            <span className={legend} id={`${uid}-p`}>03 · Travellers</span>
            <Stepper
              labelledBy={`${uid}-p`}
              value={people}
              min={1}
              max={30}
              onChange={setPeople}
              display={`${people} ${people === 1 ? "person" : "people"}`}
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor={`${uid}-date`} className={legend}>
              04 · When are you planning to visit?
            </label>
            <input
              id={`${uid}-date`}
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="h-12 w-full rounded-xl border border-ink/15 bg-parchment px-4 text-base"
            />
          </div>
        </fieldset>

        <fieldset className={fieldset}>
          <legend className="sr-only">Experiences</legend>
          <span className={legend} aria-hidden>05 · Add experiences</span>
          <p className="-mt-2 mb-4 text-sm text-ink-muted">
            Ganga Aarti and a sunrise boat ride are part of every journey.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {experiences
              .filter((e) => e.slug !== "ganga-aarti" && e.slug !== "sunrise-boat")
              .map((e) => {
                const on = picked.includes(e.slug);
                return (
                  <button
                    key={e.slug}
                    type="button"
                    aria-pressed={on}
                    onClick={() => toggle(e.slug)}
                    className={cn(
                      "min-h-11 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                      on
                        ? "border-sindoor bg-sindoor text-white"
                        : "border-ink/15 bg-parchment hover:border-ink/40",
                    )}
                  >
                    {on ? "✓ " : "+ "}
                    {e.title}
                  </button>
                );
              })}
          </div>
        </fieldset>

        <fieldset className={fieldset}>
          <legend className="sr-only">Route</legend>
          <span className={legend} aria-hidden>06 · Extend the journey</span>
          <div className="grid gap-2.5 sm:grid-cols-3">
            {extensions.map((x) => (
              <label
                key={x.id}
                className={cn(
                  "flex min-h-12 cursor-pointer items-center justify-center rounded-xl border px-3 py-2 text-center text-sm font-medium transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-sindoor",
                  extension === x.id ? "border-ink bg-ink text-parchment" : "border-ink/15 bg-parchment",
                )}
              >
                <input
                  type="radio"
                  name={`${uid}-ext`}
                  className="sr-only"
                  checked={extension === x.id}
                  onChange={() => setExtension(x.id)}
                />
                {x.label}
              </label>
            ))}
          </div>
        </fieldset>
      </form>

      <aside className="lg:sticky lg:top-24 lg:self-start" aria-label="Your journey summary">
        <div className="overflow-hidden rounded-[1.5rem] bg-night text-parchment shadow-2xl">
          <div className="relative h-36">
            <Image src={tierInfo.image} alt="" fill sizes="480px" className="object-cover opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-t from-night to-transparent" />
            <div className="absolute bottom-4 left-6">
              <p className="eyebrow text-marigold">Your journey</p>
              <p className="font-display text-3xl">
                {tierInfo.name} · {nights}N/{days}D
              </p>
            </div>
          </div>

          <ol className="space-y-5 px-6 py-6" aria-live="polite">
            {plan.map((items, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-display text-2xl text-marigold italic">{String(i + 1).padStart(2, "0")}</span>
                <ul className="space-y-1 pt-1 text-sm text-parchment/80">
                  {items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <div className="border-t border-white/10 px-6 py-6">
            <label htmlFor={`${uid}-name`} className="text-sm text-parchment/70">
              Your name (optional)
            </label>
            <input
              id={`${uid}-name`}
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              className="mt-2 h-12 w-full rounded-xl border border-white/15 bg-white/5 px-4 text-base text-white placeholder:text-white/40"
              placeholder="e.g. Ananya"
            />
            <a
              href={whatsappLink(message)}
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-night transition-colors hover:bg-[#3ee07b]"
            >
              <WhatsAppIcon className="size-5" /> Send my plan on WhatsApp
            </a>
            <p className="mt-3 flex items-start gap-2 text-xs text-parchment/55">
              <Sparkles className="mt-0.5 size-3.5 shrink-0 text-marigold" />
              A Kashi companion replies with a detailed itinerary and quote. Book directly for
              15% off.
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}

function Stepper({
  value,
  min,
  max,
  onChange,
  display,
  labelledBy,
}: {
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
  display: string;
  labelledBy: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-ink/15 bg-parchment p-1.5" role="group" aria-labelledby={labelledBy}>
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        aria-label="Decrease"
        className="grid size-10 place-items-center rounded-lg transition-colors hover:bg-sand disabled:opacity-30"
      >
        <Minus className="size-4" />
      </button>
      <output className="font-display text-xl" aria-live="polite">
        {display}
      </output>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        aria-label="Increase"
        className="grid size-10 place-items-center rounded-lg transition-colors hover:bg-sand disabled:opacity-30"
      >
        <Plus className="size-4" />
      </button>
    </div>
  );
}
