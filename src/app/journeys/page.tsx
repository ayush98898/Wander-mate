import type { Metadata } from "next";
import Link from "next/link";

import { JourneyCard } from "@/components/site/journey-card";
import { TripCard } from "@/components/site/trip-card";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { Btn, Eyebrow } from "@/components/site/ui";
import { allTrips, destinations } from "@/lib/destinations";
import { journeys } from "@/lib/journeys";

export const metadata: Metadata = {
  title: "Journeys",
  description:
    "Private and small-group heritage journeys, from Kashi, Braj and Rajputana to Kathmandu, Sri Lanka, Bhutan, Angkor, Java and Bali.",
};

export default function JourneysPage() {
  const lead = journeys[0];
  return (
    <>
      <PageHero
        image="/images/temple-tree.jpg"
        position="50% 40%"
        label={`Journeys · ${allTrips.length} across ${destinations.length} destinations`}
        title={
          <>
            Ways <em>in.</em>
          </>
        }
        intro="Every journey is private and tailored — these are starting points. Choose one, or tell us how you want to feel and we'll begin there."
      />

      <section className="py-24 md:py-32">
        <div className="wrap">
          <Reveal className="grid gap-10 border-b border-ink/15 pb-20 md:grid-cols-[1.3fr_1fr] md:items-end md:gap-16">
            <JourneyCard journey={lead} sizes="(min-width:768px) 55vw, 100vw" />
            <div>
              <Eyebrow className="text-ochre">Featured · Departing every Friday</Eyebrow>
              <p className="display mt-6 text-4xl leading-[1.02] md:text-5xl">{lead.summary}</p>
              <ul className="mt-8 space-y-3 border-t border-ink/15 pt-6 text-smoke">
                {lead.highlights.map((h) => (
                  <li key={h}>— {h}</li>
                ))}
              </ul>
              <div className="mt-8">
                <Btn href={`/journeys/${lead.slug}`}>See the journey</Btn>
              </div>
            </div>
          </Reveal>

          {destinations.map((d) => (
            <div key={d.slug} id={d.slug} className="mt-20 scroll-mt-24">
              <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4 border-b border-ink/15 pb-4">
                <h2 className="display text-4xl md:text-5xl">
                  {d.name}
                  {d.group === "beyond" ? <span className="text-smoke">, {d.country}</span> : null}
                </h2>
                <Link href={`/destinations/${d.slug}`} className="label ul text-smoke">
                  {d.status} · About {d.name}
                </Link>
              </div>
              <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
                {allTrips
                  .filter((t) => t.destination.slug === d.slug)
                  .map((t) => (
                    <div key={t.slug}>
                      <TripCard trip={t} sizes="(min-width:1024px) 22vw, (min-width:640px) 45vw, 100vw" />
                      <p className="mt-3 text-sm leading-relaxed text-smoke">{t.summary}</p>
                    </div>
                  ))}
              </div>
            </div>
          ))}

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
