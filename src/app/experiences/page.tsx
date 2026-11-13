import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { Btn } from "@/components/site/ui";
import { experiences, feelings } from "@/lib/content";
import { cn } from "@/lib/utils";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Varanasi Experiences: Boats, Aarti & Food Walks",
  description:
    "Pre-dawn darshan, a private sunrise boat, Madanpura\u2019s silk weavers, the Ganga Aarti from the front row and night food walks — the hours of Kashi you\u2019ll keep.",
  path: "/experiences",
});

const feelingLabel = Object.fromEntries(feelings.map((f) => [f.id, f.label]));
const sorted = [...experiences].sort((a, b) => a.time.localeCompare(b.time));

export default function ExperiencesPage() {
  return (
    <>
      <PageHero
        image="/images/aarti-priest.jpg"
        label="Experiences · from 04:30 to midnight"
        title={
          <>
            Hours you&apos;ll <em>keep.</em>
          </>
        }
        intro="Add any of these to a journey. Each is led by someone who knows its story — the priest, the weaver, the boatman, the cook."
      />

      <section className="py-24 md:py-32">
        <div className="wrap space-y-28 md:space-y-40">
          {sorted.map((e, i) => (
            <article key={e.slug} id={e.slug} className="grid scroll-mt-28 items-center gap-10 md:grid-cols-12">
              <Reveal className={cn("md:col-span-6", i % 2 ? "md:order-2 md:col-start-7" : "")}>
                <div className="relative aspect-[4/5] overflow-hidden bg-stone">
                  <Image src={e.image} alt={e.title} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
                </div>
              </Reveal>
              <Reveal delay={0.08} className={cn("md:col-span-5", i % 2 ? "md:col-start-1 md:row-start-1" : "md:col-start-8")}>
                <div className="flex items-baseline justify-between border-b border-ink/15 pb-4">
                  <span className="display text-6xl md:text-7xl">{e.time}</span>
                  <span className="label text-smoke">{e.duration}</span>
                </div>
                <p className="label mt-6 text-ochre">{e.kicker}</p>
                <h2 className="display mt-3 text-5xl leading-[0.95] md:text-6xl">{e.title}</h2>
                <p className="mt-6 text-lg leading-relaxed text-ink-2">{e.body}</p>
                <p className="label mt-6 text-smoke">For {e.feelings.map((f) => feelingLabel[f].toLowerCase()).join(" · ")}</p>
                <Link href={`/plan?experience=${e.slug}`} className="label ul mt-8 inline-block">
                  Add to a journey →
                </Link>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ink py-24 text-bone md:py-32">
        <div className="wrap flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <p className="display max-w-3xl text-5xl md:text-7xl">
            Weave them into <em>one unhurried journey.</em>
          </p>
          <Btn href="/plan" variant="light">
            Plan a journey
          </Btn>
        </div>
      </section>
    </>
  );
}
