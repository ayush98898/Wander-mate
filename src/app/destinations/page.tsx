import type { Metadata } from "next";
import Link from "next/link";

import { DestinationPlate } from "@/components/site/destination-plate";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { Btn, Eyebrow } from "@/components/site/ui";
import { beyond, india, type Destination } from "@/lib/destinations";
import { abs, breadcrumbs, JsonLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Heritage Destinations in India & the World",
  description:
    "Heritage and cultural destinations: Kashi, Braj, Rishikesh, Rajputana and Hampi in India, and Nepal, Sri Lanka, Bhutan, Angkor, Kyoto, Petra and Machu Picchu beyond.",
  path: "/destinations",
});

function Row({ d, i }: { d: Destination; i: number }) {
  return (
    <Reveal>
      <Link
        href={`/destinations/${d.slug}`}
        className="group grid gap-6 border-b border-ink/15 py-10 md:grid-cols-12 md:items-center md:py-12"
      >
        <span className="label text-smoke md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
        <div className="md:col-span-5">
          <p className="label text-ochre">
            {d.status} · {d.country}
          </p>
          <h2 className="display mt-3 text-5xl md:text-6xl">
            <span className="ul">{d.name}</span>
          </h2>
          <p className="mt-4 max-w-md text-smoke">{d.line}</p>
          <p className="label mt-5 text-smoke">
            {d.trips.length} journeys · {d.experiences.length} experiences · {d.season}
          </p>
        </div>
        <DestinationPlate
          d={d}
          sizes="(min-width:768px) 40vw, 100vw"
          className="aspect-[16/10] md:col-span-5 md:col-start-8"
        />
      </Link>
    </Reveal>
  );
}

export default function DestinationsPage() {
  const list = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "WanderMate destinations",
    itemListElement: [...india, ...beyond].map((d, i) => ({ "@type": "ListItem", position: i + 1, name: d.name, url: abs(`/destinations/${d.slug}`) })),
  };
  return (
    <>
      <JsonLd data={[list, breadcrumbs([["Destinations", "/destinations"]])]} />
      <PageHero
        image="/images/ghats-panorama.jpg"
        label={`Destinations · ${india.length} in India · ${beyond.length} beyond`}
        title={
          <>
            From Kashi, <em>outward.</em>
          </>
        }
        intro="We open a place only when we have local people there we trust. Kashi is home; the rest open in waves, and journeys beyond India are planned privately on request."
      />

      <section className="py-24 md:py-32">
        <div className="wrap">
          <Eyebrow index="01" className="text-smoke">
            India
          </Eyebrow>
          <div className="mt-8 border-t border-ink/15">
            {india.map((d, i) => (
              <Row key={d.slug} d={d} i={i} />
            ))}
          </div>

          <div className="mt-28">
            <Eyebrow index="02" className="text-smoke">
              Beyond India
            </Eyebrow>
            <p className="display mt-6 max-w-3xl text-4xl leading-[1.05] md:text-5xl">
              Where India&apos;s stories travelled: the Ramayana in Sri Lanka and Java, the Buddha in
              Nepal and Bhutan, Shiva and Vishnu at <em>Angkor.</em>
            </p>
            <div className="mt-12 border-t border-ink/15">
              {beyond.map((d, i) => (
                <Row key={d.slug} d={d} i={i} />
              ))}
            </div>
          </div>

          <Reveal className="mt-24 flex flex-col items-start justify-between gap-8 bg-ink p-8 text-bone md:flex-row md:items-end md:p-14">
            <div>
              <Eyebrow className="text-bone/55">Somewhere not listed?</Eyebrow>
              <p className="display mt-5 max-w-2xl text-4xl md:text-6xl">
                Tell us where, and how you want to <em>feel.</em>
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
