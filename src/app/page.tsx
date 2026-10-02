import Image from "next/image";

import { CinematicList } from "@/components/site/cinematic-list";
import { DayInKashi } from "@/components/site/day-in-kashi";
import { DestinationExplorer } from "@/components/site/destination-explorer";
import { FeelingFinder } from "@/components/site/feeling-finder";
import { HeroSearch } from "@/components/site/hero-search";
import { FestivalStrip, Tiers, WaysToTravel } from "@/components/site/home-sections";
import { JourneyRail } from "@/components/site/journey-rail";
import { Reveal } from "@/components/site/reveal";
import { Reviews } from "@/components/site/reviews";
import { SplitHeading } from "@/components/site/split-heading";
import { Btn, Eyebrow } from "@/components/site/ui";
import { approach, experiences, site, team } from "@/lib/content";
import { allTrips, destinations, featuredTripSlugs } from "@/lib/destinations";

const featured = featuredTripSlugs.map((s) => allTrips.find((t) => t.slug === s)!);
const tripCount = allTrips.length;

export default function Home() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative isolate flex min-h-svh flex-col justify-end overflow-hidden bg-ink text-bone">
        <Image
          src="/images/hero-ghats.jpg"
          alt="The ghats of Varanasi from above, boats gathered on the Ganga"
          fill
          priority
          sizes="100vw"
          className="animate-kenburns -z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/35 to-black/45" />

        <div className="wrap pt-36 pb-8 md:pb-12">
          <div className="flex items-end justify-between gap-8">
            <SplitHeading as="h1" onLoad delay={0.2} className="display text-[clamp(4rem,13.5vw,15rem)] leading-[0.82]">
              Feel the <em>centuries.</em>
            </SplitHeading>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-xl text-lg leading-relaxed text-bone/85 md:text-xl">
              Heritage and cultural journeys led by local people, from the ghats of Kashi to
              Kathmandu, Angkor and Java, designed around how you want to feel.
            </p>
          </div>
          <div className="mt-10">
            <HeroSearch />
          </div>
        </div>
      </section>

      {/* ---------- 01 Approach ---------- */}
      <section className="py-28 md:py-40">
        <div className="wrap">
          <Eyebrow className="text-smoke">
            Our approach
          </Eyebrow>
          <SplitHeading className="display mt-10 max-w-[19ch] text-[2.8rem] leading-[0.98] sm:text-6xl md:text-[5.6rem]">
            Every place has its people. We travel <em>with them,</em> not past them.
          </SplitHeading>
          <div className="mt-16 grid gap-12 md:grid-cols-12">
            <Reveal className="relative aspect-[3/4] md:col-span-4 md:col-start-2">
              <Image src="/images/priest-river.jpg" alt="A priest at the edge of the Ganga at dawn" fill sizes="(min-width:768px) 30vw, 100vw" className="object-cover" />
            </Reveal>
            <div className="flex flex-col justify-end gap-8 md:col-span-5 md:col-start-7">
              <Reveal>
                <p className="text-lg leading-relaxed text-ink-2 md:text-xl">
                  The weaver, the priest, the cook and the boatman are the journey; monuments are
                  the backdrop. We began in Kashi with a team that has local roots, and we open a
                  new place only when we have the same depth of local people there.
                </p>
              </Reveal>
              <Reveal delay={0.1} className="grid grid-cols-3 border-t border-ink/15 pt-6">
                <div>
                  <p className="display text-5xl">{destinations.length}</p>
                  <p className="label mt-2 text-smoke">Destinations</p>
                </div>
                <div>
                  <p className="display text-5xl">{tripCount}</p>
                  <p className="label mt-2 text-smoke">Journeys</p>
                </div>
                <div>
                  <p className="display text-5xl">{site.rating.score}</p>
                  <p className="label mt-2 text-smoke">{site.rating.count} reviews</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 02 Destinations ---------- */}
      <section id="destinations" className="scroll-mt-20 border-t border-ink/12 py-24 md:py-32">
        <div className="wrap">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow className="text-smoke">
                Destinations
              </Eyebrow>
              <SplitHeading className="display mt-6 text-5xl md:text-7xl">
                From Kashi, <em>outward.</em>
              </SplitHeading>
            </div>
            <Btn href="/destinations" variant="line">
              All destinations
            </Btn>
          </div>
          <DestinationExplorer />
        </div>
      </section>

      {/* ---------- 03 Feeling finder ---------- */}
      <section className="border-t border-ink/12 py-24 md:py-36">
        <div className="wrap">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow className="text-smoke">
                Travel by feeling
              </Eyebrow>
              <SplitHeading className="display mt-6 text-5xl md:text-7xl">
                How do you want to <em>feel?</em>
              </SplitHeading>
            </div>
            <p className="max-w-sm text-smoke">
              Start with the feeling, not the map. We&apos;ll find the places, people and hours of
              the day that bring it to life, in India or beyond.
            </p>
          </div>
          <FeelingFinder />
        </div>
      </section>

      {/* ---------- 04 Journeys rail ---------- */}
      <JourneyRail
        trips={featured}
        intro={
          <>
            <Eyebrow className="text-smoke">
              Journeys
            </Eyebrow>
            <h2 className="display mt-6 text-5xl md:text-7xl">
              Ways <em>in.</em>
            </h2>
            <p className="mt-6 max-w-sm text-smoke">
              A small-group weekend in Kashi, a pilgrimage across three holy cities, or Angkor at
              sunrise. {tripCount} journeys across {destinations.length} destinations, each one tailored.
            </p>
            <div className="mt-8">
              <Btn href="/journeys" variant="line">
                All journeys
              </Btn>
            </div>
          </>
        }
      />

      {/* ---------- 05 Ways to travel ---------- */}
      <section className="border-t border-ink/12 py-24 md:py-32">
        <div className="wrap">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow className="text-smoke">
                Ways to travel
              </Eyebrow>
              <SplitHeading className="display mt-6 text-5xl md:text-7xl">
                An hour, a weekend, <em>or a month.</em>
              </SplitHeading>
            </div>
            <p className="max-w-sm text-smoke">
              Every journey is built from the same pieces, so you can start small and go further.
            </p>
          </div>
          <WaysToTravel />
        </div>
      </section>

      {/* ---------- Flagship chapter: one day in Kashi (pinned) ---------- */}
      <DayInKashi />

      {/* ---------- 06 Festivals ---------- */}
      <section id="festivals" className="scroll-mt-20 bg-river py-24 text-bone md:py-32">
        <div className="wrap">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow className="text-bone/55">
                Festivals
              </Eyebrow>
              <SplitHeading className="display mt-6 text-5xl md:text-7xl">
                Arrive on the days <em>that matter.</em>
              </SplitHeading>
            </div>
            <p className="max-w-sm text-bone/65">
              Festival journeys go on sale 90 days ahead with a fixed number of places. Dates follow
              the lunar calendar and are confirmed each year.
            </p>
          </div>
          <FestivalStrip />
        </div>
      </section>

      {/* ---------- 07 Moments (Kashi) ---------- */}
      <section className="bg-ink pt-24 text-bone md:pt-32">
        <div className="wrap flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow className="text-bone/55">
              Moments in Kashi
            </Eyebrow>
            <SplitHeading className="display mt-6 text-5xl md:text-7xl">
              Hours you&apos;ll <em>keep.</em>
            </SplitHeading>
          </div>
          <Btn href="/experiences" variant="line-light">
            All experiences
          </Btn>
        </div>
        <CinematicList items={experiences} />
      </section>

      {/* ---------- 08 How we travel ---------- */}
      <section className="py-24 md:py-36">
        <div className="wrap">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow className="text-smoke">
                How we travel
              </Eyebrow>
              <SplitHeading className="display mt-6 text-5xl md:text-7xl">
                Four ways to <em>stay and move.</em>
              </SplitHeading>
            </div>
            <p className="max-w-sm text-smoke">
              Tiers are defined by what is included, so you can compare them at a glance. Every
              journey can be priced in any tier.
            </p>
          </div>
          <Tiers />

          <div className="mt-24 grid gap-16 lg:grid-cols-[1fr_1.4fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <h3 className="display text-4xl md:text-6xl">
                Local roots, <em>modern ease.</em>
              </h3>
              <div className="relative mt-10 hidden aspect-[4/3] lg:block">
                <Image src="/images/group.jpg" alt="A WanderMate group in the lanes of Varanasi" fill sizes="35vw" className="object-cover" />
              </div>
            </div>
            <ol className="border-t border-ink/15">
              {approach.map((a) => (
                <Reveal key={a.title}>
                  <li className="border-b border-ink/15 py-8">
                    
                    <div>
                      <h4 className="display text-4xl">{a.title}</h4>
                      <p className="mt-3 max-w-lg leading-relaxed text-smoke">{a.body}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
              <Reveal className="pt-10">
                <Btn href="/plan">Start a conversation</Btn>
              </Reveal>
            </ol>
          </div>
        </div>
      </section>

      {/* ---------- 09 Reviews ---------- */}
      <section className="border-t border-ink/12 py-24 md:py-32">
        <div className="wrap mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow className="text-smoke">
              In their words
            </Eyebrow>
            <h2 className="display mt-6 text-5xl md:text-7xl">
              {site.rating.score} <span className="text-ochre">★</span>
            </h2>
          </div>
          <p className="label text-smoke">Based on {site.rating.count} traveller reviews</p>
        </div>
        <Reviews />
      </section>

      {/* ---------- 10 People ---------- */}
      <section className="bg-paper py-24 md:py-32">
        <div className="wrap">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow className="text-smoke">
                The people
              </Eyebrow>
              <SplitHeading className="display mt-6 text-5xl md:text-7xl">
                Your companions <em>in Kashi.</em>
              </SplitHeading>
            </div>
            <Btn href="/about" variant="line">
              About us
            </Btn>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.08}>
                <div className="relative aspect-[4/5] overflow-hidden bg-stone">
                  <Image
                    src={m.image}
                    alt={`${m.name}, ${m.role}`}
                    fill
                    sizes="(min-width:768px) 30vw, 100vw"
                    className="object-cover grayscale transition-[filter] duration-700 hover:grayscale-0"
                    style={{ objectPosition: m.position }}
                  />
                </div>
                <h3 className="display mt-5 text-3xl">{m.name}</h3>
                <p className="label mt-2 text-smoke">{m.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
