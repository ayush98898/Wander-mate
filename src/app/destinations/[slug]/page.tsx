import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { DestinationPlate } from "@/components/site/destination-plate";
import { Reveal } from "@/components/site/reveal";
import { SplitHeading } from "@/components/site/split-heading";
import { TripCard } from "@/components/site/trip-card";
import { Btn, Eyebrow } from "@/components/site/ui";
import { feelings } from "@/lib/content";
import { allTrips, destinations, getDestination } from "@/lib/destinations";

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const d = getDestination(slug);
  if (!d) return {};
  return {
    title: `${d.name}, ${d.country}`,
    description: `${d.line} ${d.trips.length} heritage journeys and ${d.experiences.length} experiences with WanderMate.`,
  };
}

const feelingLabel = Object.fromEntries(feelings.map((f) => [f.id, f.label]));

const statusNote: Record<string, string> = {
  Now: "Running now, with our own team on the ground.",
  "Opening 2027": "Opening in 2027. Register interest and we'll reach you first.",
  "Coming later": "On our roadmap. Register interest to help us choose the first dates.",
  "On request": "Planned privately on request, with trusted local partners.",
};

export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = getDestination(slug);
  if (!d) notFound();

  const trips = allTrips.filter((t) => t.destination.slug === d.slug);
  const idx = destinations.findIndex((x) => x.slug === d.slug);
  const next = destinations.at((idx + 1) % destinations.length)!;
  const live = d.status === "Now";

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink text-bone">
        <DestinationPlate d={d} priority sizes="100vw" showName={false} className="absolute inset-0 -z-10 opacity-90" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/40 to-ink/30" />
        <div className="wrap flex min-h-[82svh] flex-col justify-end pt-32 pb-12 md:pb-16">
          <p className="label text-bone/75">
            {d.country} · {d.status}
          </p>
          <SplitHeading as="h1" onLoad className="display mt-5 max-w-6xl text-[3.6rem] sm:text-7xl md:text-8xl lg:text-[9rem]">
            {d.name}
          </SplitHeading>
          <p className="mt-6 max-w-xl text-lg text-bone/80">{d.line}</p>
          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-bone/25 pt-6 text-sm md:grid-cols-4">
            <div>
              <dt className="label text-bone/55">Base</dt>
              <dd className="mt-1 font-display text-2xl">{d.hub}</dd>
            </div>
            <div>
              <dt className="label text-bone/55">Best time</dt>
              <dd className="mt-1 font-display text-2xl">{d.season}</dd>
            </div>
            <div className="col-span-2">
              <dt className="label text-bone/55">Also</dt>
              <dd className="mt-1 font-display text-2xl">{d.places.join(", ")}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Journeys */}
      <section className="py-24 md:py-32">
        <div className="wrap">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow index="01" className="text-smoke">
                Journeys in {d.name}
              </Eyebrow>
              <h2 className="display mt-6 text-5xl md:text-7xl">
                {trips.length} ways <em>in.</em>
              </h2>
            </div>
            <p className="max-w-sm text-smoke">{statusNote[d.status]}</p>
          </div>

          <div className="space-y-20">
            {trips.map((t, i) => (
              <article key={t.slug} id={t.slug} className="grid scroll-mt-28 gap-8 border-t border-ink/15 pt-10 md:grid-cols-12">
                <Reveal className="md:col-span-5">
                  <TripCard trip={t} sizes="(min-width:768px) 40vw, 100vw" />
                </Reveal>
                <Reveal delay={0.08} className="md:col-span-6 md:col-start-7 md:self-end">
                  <p className="label text-smoke">
                    {String(i + 1).padStart(2, "0")} · {t.format} · {t.duration}
                  </p>
                  <p className="display mt-4 text-3xl leading-[1.08] md:text-4xl">{t.summary}</p>
                  <ul className="mt-6 divide-y divide-ink/12 border-y border-ink/12">
                    {t.highlights.map((h) => (
                      <li key={h} className="py-3">
                        {h}
                      </li>
                    ))}
                  </ul>
                  <p className="label mt-5 text-smoke">For {t.feelings.map((f) => feelingLabel[f].toLowerCase()).join(" · ")}</p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {t.href ? (
                      <Btn href={t.href}>See the journey</Btn>
                    ) : (
                      <Btn href={`/plan?trip=${t.slug}`}>{live ? "Plan this journey" : "Register interest"}</Btn>
                    )}
                  </div>
                </Reveal>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="bg-ink py-24 text-bone md:py-32">
        <div className="wrap">
          <Eyebrow index="02" className="text-bone/55">
            Experiences in {d.name}
          </Eyebrow>
          <h2 className="display mt-6 text-5xl md:text-7xl">
            Add to <em>any journey.</em>
          </h2>
          <ol className="mt-14 grid border-t border-bone/15 md:grid-cols-3">
            {d.experiences.map((e, i) => (
              <li key={e.name} className="border-b border-bone/15 py-8 md:border-r md:border-b-0 md:px-8 md:first:pl-0 md:last:border-r-0">
                <p className="label text-ochre-lit">
                  {String(i + 1).padStart(2, "0")} · {feelingLabel[e.feeling]}
                </p>
                <h3 className="display mt-5 text-4xl">{e.name}</h3>
                <p className="mt-3 text-bone/70">{e.line}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Next destination */}
      <section className="py-20 md:py-28">
        <div className="wrap flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="label text-smoke">Next destination</p>
            <Link href={`/destinations/${next.slug}`} className="group mt-4 block">
              <span className="display text-6xl md:text-8xl">
                <span className="ul">{next.name}</span> <span aria-hidden>→</span>
              </span>
            </Link>
          </div>
          <Btn href={`/plan?destination=${d.slug}`} variant="line">
            Plan a journey to {d.name}
          </Btn>
        </div>
      </section>
    </>
  );
}
