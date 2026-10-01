import type { Metadata } from "next";

import { JourneyCard } from "@/components/site/journey-card";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { Btn, Eyebrow } from "@/components/site/ui";
import { journeys } from "@/lib/journeys";

export const metadata: Metadata = {
  title: "Journeys",
  description:
    "Private and small-group cultural journeys through Varanasi — Banaras Unfiltered, Kashi Classic, Premium and In Private, the Spiritual Triangle and Dev Deepawali.",
};

export default function JourneysPage() {
  const [lead, ...rest] = journeys;
  return (
    <>
      <PageHero
        image="/images/temple-tree.jpg"
        position="50% 40%"
        label="Journeys · Varanasi & beyond"
        title={
          <>
            Ways into <em>Kashi.</em>
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

          <div className="mt-20 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((j, i) => (
              <Reveal key={j.slug} delay={(i % 3) * 0.08}>
                <JourneyCard journey={j} />
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-smoke">{j.summary}</p>
              </Reveal>
            ))}
          </div>

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
