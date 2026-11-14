"use client";

import { ArrowLeft, ArrowRight, Check, Minus, Plus } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useId, useRef, useState } from "react";

import { WhatsAppIcon } from "@/components/site/icons";
import { experiences, feelings, whatsappLink, type FeelingId } from "@/lib/content";
import { destinations } from "@/lib/destinations";
import { cn } from "@/lib/utils";

const parties = ["Solo", "A couple", "Family", "Friends", "A group"] as const;
const styles = [
  { id: "classic", name: "Classic", line: "Budget friendly, ideal for solo backpackers" },
  { id: "premium", name: "Premium", line: "Hassle-free, with premium hospitality" },
  { id: "private", name: "In Private", line: "Serene, luxurious, complete privacy" },
] as const;
const places = ["Not sure yet", ...destinations.map((d) => d.name)];
const steps = ["Who", "When", "Feel", "Style", "You"] as const;

export type PlannerInitial = {
  feeling?: FeelingId;
  nights?: number;
  style?: (typeof styles)[number]["id"];
  experience?: string;
  where?: string;
  /** A specific journey the traveller came from. */
  trip?: string;
};

export function Planner({ initial = {} }: { initial?: PlannerInitial }) {
  const uid = useId();
  const reduce = useReducedMotion();
  const heading = useRef<HTMLHeadingElement>(null);
  const [step, setStep] = useState(0);
  const [party, setParty] = useState<(typeof parties)[number]>("A couple");
  const [people, setPeople] = useState(2);
  const [date, setDate] = useState("");
  const [nights, setNights] = useState(initial.nights ?? 3);
  const [feels, setFeels] = useState<FeelingId[]>(initial.feeling ? [initial.feeling] : []);
  const [picked, setPicked] = useState<string[]>(initial.experience ? [initial.experience] : []);
  const [style, setStyle] = useState<(typeof styles)[number]["id"]>(initial.style ?? "premium");
  const [where, setWhere] = useState(initial.where && places.includes(initial.where) ? initial.where : "Not sure yet");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  // Move focus to the step heading so screen-reader and keyboard users follow along.
  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    heading.current?.focus();
  }, [step]);

  const toggle = <T,>(list: T[], v: T) => (list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);

  const styleName = styles.find((s) => s.id === style)!.name;
  const chosen = experiences.filter((e) => picked.includes(e.slug));
  const message = [
    "Namaste WanderMate! I'd like to plan a journey.",
    name && `Name: ${name}`,
    phone && `Phone: ${phone}`,
    `Travelling: ${party} (${people} ${people === 1 ? "person" : "people"})`,
    date ? `Arriving: ${date}` : "Dates: flexible",
    `Length: ${nights} night${nights > 1 ? "s" : ""}`,
    feels.length && `I want to feel: ${feels.join(", ")}`,
    chosen.length && `Moments: ${chosen.map((e) => e.title).join(", ")}`,
    `Style: ${styleName}`,
    `Where: ${where}`,
    initial.trip && `Journey: ${initial.trip}`,
    notes && `Notes: ${notes}`,
  ]
    .filter(Boolean)
    .join("\n");

  const choice = (on: boolean) =>
    cn(
      "min-h-12 border px-4 py-3 text-left transition-colors",
      on ? "border-ink bg-ink text-bone" : "border-ink/20 hover:border-ink",
    );

  const titles = [
    "Who's travelling?",
    "When, and for how long?",
    "How do you want to feel?",
    "How would you like to travel?",
    "Where should we reply?",
  ];

  return (
    <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
      <div>
        <ol className="grid grid-cols-5 gap-2" aria-label="Progress">
          {steps.map((s, i) => (
            <li key={s}>
              <button
                type="button"
                onClick={() => setStep(i)}
                aria-current={i === step ? "step" : undefined}
                className="group block w-full text-left"
              >
                <span className={cn("block h-px w-full transition-colors", i <= step ? "bg-ink" : "bg-ink/15")} />
                <span className={cn("label mt-3 block", i === step ? "text-ink" : "text-smoke")}>
                  {String(i + 1).padStart(2, "0")} <span className="hidden sm:inline">· {s}</span>
                </span>
              </button>
            </li>
          ))}
        </ol>

        <form
          className="mt-12"
          onSubmit={(e) => {
            e.preventDefault();
            if (step < steps.length - 1) setStep(step + 1);
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.fieldset
              key={step}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="min-h-[22rem]"
            >
              <legend className="contents">
                <h2 ref={heading} tabIndex={-1} className="display text-5xl outline-none md:text-6xl">
                  {titles[step]}
                </h2>
              </legend>

              {step === 0 ? (
                <div className="mt-10 space-y-8">
                  <div className="grid gap-2 sm:grid-cols-3">
                    {parties.map((p) => (
                      <button key={p} type="button" aria-pressed={party === p} onClick={() => {
                        setParty(p);
                        if (p === "Solo") setPeople(1);
                        else if (p === "A couple") setPeople(2);
                        else if (people < 3) setPeople(3);
                      }} className={choice(party === p)}>
                        <span className="font-display text-2xl">{p}</span>
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center justify-between border-y border-ink/15 py-4">
                    <span className="label" id={`${uid}-ppl`}>
                      Number of travellers
                    </span>
                    <Stepper labelledBy={`${uid}-ppl`} value={people} min={1} max={40} onChange={setPeople} />
                  </div>
                </div>
              ) : null}

              {step === 1 ? (
                <div className="mt-10 grid gap-8 sm:grid-cols-2">
                  <div>
                    <label htmlFor={`${uid}-date`} className="label">
                      Arriving around <span className="text-smoke">(optional)</span>
                    </label>
                    <input
                      id={`${uid}-date`}
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="mt-3 h-12 w-full border-b border-ink/30 bg-transparent font-display text-2xl outline-none focus:border-ink"
                    />
                  </div>
                  <div>
                    <span className="label" id={`${uid}-n`}>
                      Nights in Kashi
                    </span>
                    <div className="mt-3 border-b border-ink/30 pb-1">
                      <Stepper labelledBy={`${uid}-n`} value={nights} min={1} max={14} onChange={setNights} suffix={nights === 1 ? "night" : "nights"} />
                    </div>
                  </div>
                </div>
              ) : null}

              {step === 2 ? (
                <div className="mt-10 space-y-10">
                  <div>
                    <p className="label text-smoke">Choose any</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {feelings.map((f) => {
                        const on = feels.includes(f.id);
                        return (
                          <button key={f.id} type="button" aria-pressed={on} onClick={() => setFeels(toggle(feels, f.id))} className={choice(on)}>
                            <span className="font-display text-2xl italic">{f.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <p className="label text-smoke">Moments in Kashi you&apos;d love (elsewhere, your companion suggests the local equivalents)</p>
                    <div className="mt-3 grid gap-2 sm:grid-cols-2">
                      {experiences
                        .filter((e) => e.slug !== "ganga-aarti" && e.slug !== "sunrise-boat")
                        .map((e) => {
                          const on = picked.includes(e.slug);
                          return (
                            <button
                              key={e.slug}
                              type="button"
                              aria-pressed={on}
                              onClick={() => setPicked(toggle(picked, e.slug))}
                              className={cn(choice(on), "flex items-center justify-between gap-3")}
                            >
                              <span>{e.title}</span>
                              {on ? <Check className="size-4 shrink-0" /> : <Plus className="size-4 shrink-0 opacity-50" />}
                            </button>
                          );
                        })}
                    </div>
                  </div>
                </div>
              ) : null}

              {step === 3 ? (
                <div className="mt-10 space-y-10">
                  <div className="grid gap-2 md:grid-cols-3">
                    {styles.map((s) => (
                      <button key={s.id} type="button" aria-pressed={style === s.id} onClick={() => setStyle(s.id)} className={cn(choice(style === s.id), "py-5")}>
                        <span className="block font-display text-3xl">{s.name}</span>
                        <span className={cn("mt-2 block text-sm", style === s.id ? "text-bone/70" : "text-smoke")}>{s.line}</span>
                      </button>
                    ))}
                  </div>
                  <div>
                    <p className="label text-smoke">Where</p>
                    <div className="mt-3 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                      {places.map((r) => (
                        <button key={r} type="button" aria-pressed={where === r} onClick={() => setWhere(r)} className={choice(where === r)}>
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}

              {step === 4 ? (
                <div className="mt-10 grid gap-8 sm:grid-cols-2">
                  <Field id={`${uid}-name`} label="Your name" value={name} onChange={setName} autoComplete="name" />
                  <Field id={`${uid}-phone`} label="Phone (optional)" value={phone} onChange={setPhone} autoComplete="tel" type="tel" />
                  <div className="sm:col-span-2">
                    <label htmlFor={`${uid}-notes`} className="label">
                      Anything else? <span className="text-smoke">(optional)</span>
                    </label>
                    <textarea
                      id={`${uid}-notes`}
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="mt-3 w-full resize-none border-b border-ink/30 bg-transparent py-2 text-lg outline-none focus:border-ink"
                    />
                  </div>
                </div>
              ) : null}
            </motion.fieldset>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-between gap-4 border-t border-ink/15 pt-6">
            <button
              type="button"
              onClick={() => setStep(Math.max(0, step - 1))}
              disabled={step === 0}
              className="label inline-flex min-h-12 items-center gap-2 disabled:opacity-30"
            >
              <ArrowLeft className="size-4" /> Back
            </button>
            {step < steps.length - 1 ? (
              <button type="submit" className="label inline-flex min-h-12 items-center gap-6 bg-ink px-6 text-bone transition-colors hover:bg-ochre">
                Continue <ArrowRight className="size-4" />
              </button>
            ) : (
              <a
                href={whatsappLink(message)}
                target="_blank"
                rel="noreferrer"
                className="label inline-flex min-h-12 items-center gap-3 bg-ink px-6 text-bone transition-colors hover:bg-ochre"
              >
                <WhatsAppIcon className="size-4 text-[#25D366]" /> Send to a WanderMate companion
              </a>
            )}
          </div>
        </form>
      </div>

      <aside className="lg:sticky lg:top-28 lg:self-start" aria-label="Your journey so far">
        <div className="bg-ink p-7 text-bone md:p-9">
          <p className="label text-bone/55">Your journey so far</p>
          <p className="display mt-4 text-4xl">
            {styleName} · {nights}N
          </p>
          <dl className="mt-6 divide-y divide-bone/12 border-y border-bone/12 text-sm">
            {[
              ["Travelling", `${party}, ${people}`],
              ["Arriving", date || "Flexible"],
              ["Feeling", feels.length ? feels.map((f) => f[0].toUpperCase() + f.slice(1)).join(", ") : "—"],
              ["Moments", chosen.length ? chosen.map((e) => e.title).join(", ") : where === "Kashi" ? "Aarti & sunrise boat" : "Chosen with your companion"],
              ["Where", initial.trip ? `${where} · ${initial.trip}` : where],
            ].map(([k, v]) => (
              <div key={k} className="grid grid-cols-[6.5rem_1fr] gap-3 py-3">
                <dt className="label pt-0.5 text-bone/45">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm leading-relaxed text-bone/60">
            A WanderMate companion replies on WhatsApp, usually within two hours, with a day-by-day
            itinerary and quote. No payment upfront.
          </p>
        </div>
      </aside>
    </div>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="label">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        className="mt-3 h-12 w-full border-b border-ink/30 bg-transparent font-display text-2xl outline-none focus:border-ink"
      />
    </div>
  );
}

function Stepper({
  value,
  min,
  max,
  onChange,
  labelledBy,
  suffix,
}: {
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
  labelledBy: string;
  suffix?: string;
}) {
  return (
    <div role="group" aria-labelledby={labelledBy} className="flex items-center gap-5">
      <button
        type="button"
        aria-label="Decrease"
        disabled={value <= min}
        onClick={() => onChange(Math.max(min, value - 1))}
        className="grid size-11 place-items-center border border-ink/20 hover:border-ink disabled:opacity-30"
      >
        <Minus className="size-4" />
      </button>
      <output aria-live="polite" className="min-w-[5ch] text-center font-display text-3xl">
        {value}
        {suffix ? <span className="label ml-2 align-middle text-smoke">{suffix}</span> : null}
      </output>
      <button
        type="button"
        aria-label="Increase"
        disabled={value >= max}
        onClick={() => onChange(Math.min(max, value + 1))}
        className="grid size-11 place-items-center border border-ink/20 hover:border-ink disabled:opacity-30"
      >
        <Plus className="size-4" />
      </button>
    </div>
  );
}
