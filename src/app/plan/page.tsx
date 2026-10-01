import type { Metadata } from "next";

import { PageHero } from "@/components/site/blocks";
import { TripBuilder } from "@/components/site/trip-builder";
import { experiences, tiers, type Tier } from "@/lib/content";

export const metadata: Metadata = {
  title: "Plan Your Varanasi Trip",
  description:
    "Craft your own Varanasi journey — choose your style, days, experiences and route, then send it to a WanderMate Kashi companion on WhatsApp.",
};

export default async function PlanPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const sp = await searchParams;
  const first = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v);

  const n = Number(first(sp.nights));
  const nights = Number.isInteger(n) && n >= 1 && n <= 6 ? n : 2;
  const tierParam = first(sp.tier);
  const tier = tiers.some((t) => t.id === tierParam) ? (tierParam as Tier["id"]) : "premium";
  const addParam = first(sp.add);
  const add = experiences.some((e) => e.slug === addParam) ? [addParam as string] : [];

  return (
    <>
      <PageHero
        image="/images/river-clouds.jpg"
        eyebrow="Self-planning"
        deva="योजना"
        title={
          <>
            Craft your journey <em className="text-marigold">on your own.</em>
          </>
        }
        intro="Shape it here in a minute. Your Kashi companion turns it into a day-by-day itinerary and quote — usually within a couple of hours."
      />
      <section className="py-16 md:py-24">
        <div className="container-x">
          <TripBuilder initialNights={nights} initialTier={tier} initialAdd={add} />
        </div>
      </section>
    </>
  );
}
