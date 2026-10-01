import type { Metadata } from "next";

import { Planner, type PlannerInitial } from "@/components/site/planner";
import { Eyebrow } from "@/components/site/ui";
import { experiences, feelings, type FeelingId } from "@/lib/content";
import { allTrips, getDestination } from "@/lib/destinations";
import { getJourney } from "@/lib/journeys";

export const metadata: Metadata = {
  title: "Plan a Journey",
  description:
    "Tell us who's travelling, when, and how you want to feel. A WanderMate companion replies on WhatsApp with a tailored itinerary.",
};

type SP = { [key: string]: string | string[] | undefined };
const first = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v);

// Map a journey page to sensible planner defaults.
const fromJourney: Record<string, PlannerInitial> = {
  "kashi-classic": { style: "classic" },
  "kashi-premium": { style: "premium" },
  "kashi-luxury": { style: "private", feeling: "stillness" },
  "spiritual-triangle": { where: "Kashi", trip: "The Spiritual Triangle", feeling: "devotion" },
  "kashi-ayodhya": { where: "Kashi", trip: "Kashi & Ayodhya", feeling: "devotion" },
};

export default async function PlanPage({ searchParams }: { searchParams: Promise<SP> }) {
  const sp = await searchParams;
  const initial: PlannerInitial = {};

  const journey = first(sp.journey);
  if (journey && getJourney(journey)) Object.assign(initial, fromJourney[journey]);

  const trip = allTrips.find((t) => t.slug === first(sp.trip));
  if (trip) Object.assign(initial, { where: trip.destination.name, trip: trip.name, feeling: trip.feelings[0] });

  const dest = getDestination(first(sp.destination) ?? "");
  if (dest) initial.where = dest.name;

  const feeling = first(sp.feeling);
  if (feelings.some((f) => f.id === feeling)) initial.feeling = feeling as FeelingId;

  const n = Number(first(sp.nights));
  if (Number.isInteger(n) && n >= 1 && n <= 14) initial.nights = n;

  const exp = first(sp.experience);
  if (experiences.some((e) => e.slug === exp)) initial.experience = exp;

  return (
    <section className="bg-bone pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="wrap">
        <div className="mb-16 grid gap-6 border-b border-ink/15 pb-12 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div>
            <Eyebrow className="text-smoke">Plan a journey · 5 short steps</Eyebrow>
            <h1 className="display mt-6 text-6xl md:text-8xl">
              Begin with <em>a conversation.</em>
            </h1>
          </div>
          <p className="max-w-md text-smoke md:justify-self-end">
            Share a few details and a WanderMate companion will shape a journey around you — the places,
            the people and the hours of the day that matter.
          </p>
        </div>
        <Planner initial={initial} />
      </div>
    </section>
  );
}
