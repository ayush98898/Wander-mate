"use client";

import { ArrowUpRight, Minus, Plus } from "lucide-react";
import { useId, useState } from "react";

import { whatsappLink } from "@/lib/content";
import { cn } from "@/lib/utils";

const months = ["Any time", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"];

/** Choose stay, vehicle, group size and month — then send it as a ready-made WhatsApp enquiry. */
export function TripBuilder({
  name,
  length,
  stays,
  vehicles,
}: {
  name: string;
  length: string;
  stays: string[];
  vehicles: { name: string; seats: string }[];
}) {
  const uid = useId();
  const [stay, setStay] = useState(stays[0]);
  const [vehicle, setVehicle] = useState(vehicles[0].name);
  const [people, setPeople] = useState(2);
  const [month, setMonth] = useState(months[0]);

  const suggested = people <= 4 ? vehicles[0].name : people <= 6 ? vehicles[1]?.name : vehicles[2]?.name;
  const message = `Namaste WanderMate! I'd like a price for ${name} (${length}): ${stay} stay, ${vehicle}, ${people} ${people === 1 ? "traveller" : "travellers"}, ${month === "Any time" ? "dates flexible" : `in ${month}`}.`;

  return (
    <div className="grid gap-px bg-ink/12 lg:grid-cols-[1.4fr_1fr]">
      <div className="space-y-10 bg-bone p-6 md:p-10">
        <Choice label="Stay" options={stays} value={stay} onChange={setStay} />
        <fieldset>
          <legend className="label text-smoke">Vehicle</legend>
          <div className="mt-4 grid gap-2 sm:grid-cols-3">
            {vehicles.map((v) => {
              const on = v.name === vehicle;
              return (
                <button
                  key={v.name}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setVehicle(v.name)}
                  className={cn("min-h-11 border p-4 text-left transition-colors", on ? "border-ink bg-ink text-bone" : "border-ink/20 hover:border-ink")}
                >
                  <span className="display block text-2xl">{v.name}</span>
                  <span className={cn("label mt-1 block", on ? "text-bone/60" : "text-smoke")}>
                    {v.seats}
                    {v.name === suggested ? " · suits your group" : ""}
                  </span>
                </button>
              );
            })}
          </div>
        </fieldset>
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <p id={`${uid}-p`} className="label text-smoke">
              Travellers
            </p>
            <div role="group" aria-labelledby={`${uid}-p`} className="mt-4 flex items-center gap-4">
              <button type="button" aria-label="Fewer travellers" onClick={() => setPeople((n) => Math.max(1, n - 1))} className="grid size-12 place-items-center border border-ink/20 hover:border-ink">
                <Minus aria-hidden className="size-4" />
              </button>
              <output aria-live="polite" className="display w-14 text-center text-5xl tabular-nums">
                {people}
              </output>
              <button type="button" aria-label="More travellers" onClick={() => setPeople((n) => Math.min(20, n + 1))} className="grid size-12 place-items-center border border-ink/20 hover:border-ink">
                <Plus aria-hidden className="size-4" />
              </button>
            </div>
          </div>
          <div>
            <label htmlFor={`${uid}-m`} className="label text-smoke">
              When
            </label>
            <select
              id={`${uid}-m`}
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="mt-4 block min-h-12 w-full cursor-pointer border-b border-ink/30 bg-transparent font-display text-3xl outline-none focus-visible:border-ochre"
            >
              {months.map((m) => (
                <option key={m}>{m}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-10 bg-ink p-6 text-bone md:p-10">
        <div>
          <p className="label text-bone/55">Your journey</p>
          <dl className="mt-6 space-y-4">
            {[
              ["Stay", stay],
              ["Vehicle", vehicle],
              ["Travellers", String(people)],
              ["When", month],
            ].map(([k, v]) => (
              <div key={k} className="flex items-baseline justify-between gap-6 border-b border-bone/15 pb-3">
                <dt className="label text-bone/55">{k}</dt>
                <dd className="display text-2xl">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm leading-relaxed text-bone/65">
            Prices depend on the stay, vehicle and group size. Send your choices and we reply with a quote, usually within a few hours.
          </p>
        </div>
        <a
          href={whatsappLink(message)}
          target="_blank"
          rel="noreferrer"
          className="group label inline-flex min-h-14 items-center justify-between gap-6 bg-ochre px-6 text-bone transition-colors hover:bg-bone hover:text-ink"
        >
          Get my price on WhatsApp
          <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}

function Choice({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <fieldset>
      <legend className="label text-smoke">{label}</legend>
      <div className="mt-4 flex flex-wrap border border-ink/20">
        {options.map((o) => {
          const on = o === value;
          return (
            <button
              key={o}
              type="button"
              aria-pressed={on}
              onClick={() => onChange(o)}
              className={cn("display min-h-12 flex-1 px-5 text-2xl transition-colors", on ? "bg-ink text-bone" : "hover:bg-ink/5")}
            >
              {o}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
