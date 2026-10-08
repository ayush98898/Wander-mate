"use client";

import { ArrowUpRight, CalendarDays, Check, Minus, Plus, Users } from "lucide-react";
import { useId, useState } from "react";

import { whatsappLink } from "@/lib/content";
import type { TourPackage } from "@/lib/packages";
import { cn } from "@/lib/utils";

type Booking = NonNullable<TourPackage["booking"]>;

/**
 * For fixed-date trips: pick a departure (and a tier, where there are several) and
 * how many seats, see the total, and reserve on WhatsApp with a ready-made message.
 */
export function SeatBooker({ name, length, booking, included }: { name: string; length: string; booking: Booking; included: string[] }) {
  const uid = useId();
  const [d, setD] = useState(0);
  const [seats, setSeats] = useState(1);
  const [t, setT] = useState(0);
  const dep = booking.departures[d];
  const tier = booking.tiers?.[t];
  const price = tier?.price ?? booking.price;
  const unit = Number(price.replace(/[^\d]/g, ""));
  const max = dep.seats ?? 10;
  const total = (unit * seats).toLocaleString("en-IN");
  const message = `Namaste WanderMate! I'd like to reserve ${seats} ${seats === 1 ? "seat" : "seats"} on ${name}${tier ? ` (${tier.name})` : ""}, ${length}, ${dep.dates}.`;

  return (
    <div className="grid gap-px bg-ink/12 lg:grid-cols-[1.4fr_1fr]">
      <div className="space-y-10 bg-bone p-6 md:p-10">
        <fieldset>
          <legend className="label text-smoke">{booking.departures.length > 1 ? "Choose a departure" : "Next departure"}</legend>
          <div className="mt-4 grid gap-2">
            {booking.departures.map((x, i) => {
              const on = i === d;
              return (
                <button
                  key={x.dates}
                  type="button"
                  aria-pressed={on}
                  onClick={() => {
                    setD(i);
                    setSeats((n) => Math.min(n, x.seats ?? 10));
                  }}
                  className={cn(
                    "flex min-h-11 flex-wrap items-center justify-between gap-x-8 gap-y-3 border p-5 text-left transition-colors md:p-6",
                    on ? "border-ink bg-ink text-bone" : "border-ink/20 hover:border-ink",
                  )}
                >
                  <span className="flex items-center gap-5">
                    <CalendarDays aria-hidden className={cn("size-7 shrink-0", on ? "text-ochre-lit" : "text-ochre")} strokeWidth={1.3} />
                    <span>
                      <span className="display block text-3xl leading-tight md:text-4xl">{x.dates}</span>
                      <span className={cn("label mt-1 block", on ? "text-bone/60" : "text-smoke")}>{x.days}</span>
                    </span>
                  </span>
                  {x.seats ? (
                    <span className={cn("label inline-flex items-center gap-2", on ? "text-bone/75" : "text-smoke")}>
                      <Users aria-hidden className="size-4" />
                      Up to {x.seats} travellers
                    </span>
                  ) : (
                    <span className={cn("label", on ? "text-bone/75" : "text-smoke")}>{booking.group}</span>
                  )}
                </button>
              );
            })}
          </div>
        </fieldset>

        {booking.tiers ? (
          <div>
            <p id={`${uid}-t`} className="label text-smoke">
              Choose your package
            </p>
            <div role="group" aria-labelledby={`${uid}-t`} className="mt-4 grid gap-2 sm:grid-cols-2">
              {booking.tiers.map((x, i) => {
                const on = i === t;
                return (
                  <button
                    key={x.name}
                    type="button"
                    aria-pressed={on}
                    onClick={() => setT(i)}
                    className={cn("flex min-h-11 flex-col gap-2 border p-5 text-left transition-colors", on ? "border-ink bg-ink text-bone" : "border-ink/20 hover:border-ink")}
                  >
                    <span className="flex items-baseline justify-between gap-4">
                      <span className="display text-3xl">{x.name}</span>
                      <span className="display text-2xl tabular-nums">{x.price.replace(/^INR\s*/, "₹")}</span>
                    </span>
                    <span className={cn("text-sm leading-relaxed", on ? "text-bone/70" : "text-smoke")}>{x.line}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ) : null}

        <div>
          <p id={`${uid}-s`} className="label text-smoke">
            Seats
          </p>
          <div role="group" aria-labelledby={`${uid}-s`} className="mt-4 flex items-center gap-4">
            <button type="button" aria-label="Fewer seats" disabled={seats <= 1} onClick={() => setSeats((n) => Math.max(1, n - 1))} className="grid size-12 place-items-center border border-ink/20 hover:border-ink disabled:opacity-30">
              <Minus aria-hidden className="size-4" />
            </button>
            <output aria-live="polite" className="display w-14 text-center text-5xl tabular-nums">
              {seats}
            </output>
            <button type="button" aria-label="More seats" disabled={seats >= max} onClick={() => setSeats((n) => Math.min(max, n + 1))} className="grid size-12 place-items-center border border-ink/20 hover:border-ink disabled:opacity-30">
              <Plus aria-hidden className="size-4" />
            </button>
          </div>
          {booking.note ? <p className="mt-4 max-w-md text-sm leading-relaxed text-smoke">{booking.note}</p> : null}
        </div>

        <div className="border-t border-ink/12 pt-8">
          <p className="label text-smoke">Every seat includes</p>
          <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {included.map((it) => (
              <li key={it} className="flex items-start gap-3 text-sm">
                <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-ochre" />
                {it}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-10 bg-ink p-6 text-bone md:p-10">
        <div>
          <p className="label text-bone/55">{tier ? `Your seat · ${tier.name}` : "Your seat"}</p>
          <p className="display mt-6 text-6xl leading-none tabular-nums md:text-7xl">{price.replace(/^INR\s*/, "₹")}</p>
          <p className="label mt-3 text-bone/60">{booking.per}</p>
          <dl className="mt-8 space-y-4">
            {[
              ["Departure", dep.dates],
              ["Group", booking.group],
              ["Seats", String(seats)],
              ["Total", `₹${total}`],
            ].map(([k, v]) => (
              <div key={k} className="flex items-baseline justify-between gap-6 border-b border-bone/15 pb-3">
                <dt className="label text-bone/55">{k}</dt>
                <dd className={cn("display text-2xl tabular-nums", k === "Total" && "text-3xl")}>{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm leading-relaxed text-bone/65">Send your request and we confirm your seat on WhatsApp, usually within a few hours.</p>
        </div>
        <a
          href={whatsappLink(message)}
          target="_blank"
          rel="noreferrer"
          className="group label inline-flex min-h-14 items-center justify-between gap-6 bg-ochre px-6 text-bone transition-colors hover:bg-bone hover:text-ink"
        >
          Reserve on WhatsApp
          <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}
