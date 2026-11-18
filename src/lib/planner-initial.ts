import type { PlannerInitial } from "@/components/site/planner";
import { experiences, feelings, type FeelingId } from "@/lib/content";
import { allTrips, getDestination } from "@/lib/destinations";
import { getJourney } from "@/lib/journeys";

// Map a journey page to sensible planner defaults.
const fromJourney: Record<string, PlannerInitial> = {
  "kashi-classic": { style: "classic" },
  "kashi-premium": { style: "premium" },
  "kashi-luxury": { style: "private", feeling: "stillness" },
  "spiritual-triangle": { where: "Kashi", trip: "The Spiritual Triangle", feeling: "devotion" },
  "kashi-ayodhya": { where: "Kashi", trip: "Kashi & Ayodhya", feeling: "devotion" },
};

/** Planner defaults from the URL: ?journey= ?trip= ?destination= ?feeling= ?nights= ?experience= */
export function plannerInitialFrom(get: (key: string) => string | null | undefined): PlannerInitial {
  const initial: PlannerInitial = {};

  const journey = get("journey");
  if (journey && getJourney(journey)) Object.assign(initial, fromJourney[journey]);

  const trip = allTrips.find((t) => t.slug === get("trip"));
  if (trip) Object.assign(initial, { where: trip.destination.name, trip: trip.name, feeling: trip.feelings[0] });

  const dest = getDestination(get("destination") ?? "");
  if (dest) initial.where = dest.name;

  const feeling = get("feeling");
  if (feelings.some((f) => f.id === feeling)) initial.feeling = feeling as FeelingId;

  const n = Number(get("nights"));
  if (Number.isInteger(n) && n >= 1 && n <= 14) initial.nights = n;

  const exp = get("experience");
  if (experiences.some((e) => e.slug === exp)) initial.experience = exp ?? undefined;

  return initial;
}
