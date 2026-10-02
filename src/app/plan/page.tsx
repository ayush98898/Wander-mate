import type { Metadata } from "next";

import { Suspense } from "react";

import { Planner } from "@/components/site/planner";
import { PlannerFromUrl } from "@/components/site/planner-from-url";
import { Eyebrow } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "Plan a Journey",
  description:
    "Tell us who's travelling, when, and how you want to feel. A WanderMate companion replies on WhatsApp with a tailored itinerary.",
};

export default function PlanPage() {
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
        <Suspense fallback={<Planner />}>
          <PlannerFromUrl />
        </Suspense>
      </div>
    </section>
  );
}
