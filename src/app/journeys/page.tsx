import type { Metadata } from "next";

import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { TourFinder, type TourFilters } from "@/components/site/tour-finder";
import { Btn, Eyebrow } from "@/components/site/ui";
import { allTrips, destinations, tripHref } from "@/lib/destinations";
import { abs, breadcrumbs, JsonLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "All Heritage Tours — India & Worldwide",
  description:
    "Every WanderMate tour in one place: private and small-group heritage journeys from Kashi, Braj and Rajputana to Angkor, Kyoto and Petra. Filter by length and style.",
  path: "/journeys",
});

export default async function JourneysPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const sp = await searchParams;
  const one = (k: string) => (typeof sp[k] === "string" ? (sp[k] as string) : undefined);
  const initial: TourFilters = { region: one("region"), dest: one("dest"), len: one("len"), style: one("style"), feel: one("feel") };
  const list = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "WanderMate tours",
    numberOfItems: allTrips.length,
    itemListElement: allTrips.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t.name, url: abs(tripHref(t)) })),
  };
  return (
    <>
      <JsonLd data={[list, breadcrumbs([["All tours", "/journeys"]])]} />
      <PageHero
        image="/images/temple-tree.jpg"
        position="50% 40%"
        label={`All tours · ${allTrips.length} across ${destinations.length} destinations`}
        title={
          <>
            Ways <em>in.</em>
          </>
        }
        intro="Every journey is private and tailored — these are starting points. Choose one, or tell us how you want to feel and we'll begin there."
      />

      <section id="tours" className="scroll-mt-20 py-20 md:py-28">
        <div className="wrap">
          <TourFinder initial={initial} />

          <Reveal className="mt-28 flex flex-col items-start justify-between gap-8 bg-ink p-8 text-bone md:flex-row md:items-end md:p-14">
            <div>
              <Eyebrow className="text-bone/55">Something else in mind?</Eyebrow>
              <p className="display mt-5 max-w-2xl text-4xl md:text-6xl">
                Tell us how you want to <em>feel.</em>
              </p>
            </div>
            <Btn href="/plan" variant="light">
              Plan a journey
            </Btn>
          </Reveal>
        </div>
      </section>
    </>
  );
}
