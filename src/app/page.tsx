import Image from "next/image";
import Link from "next/link";

import { CinematicList } from "@/components/site/cinematic-list";
import { DayInKashi } from "@/components/site/day-in-kashi";
import { FeelingFinder } from "@/components/site/feeling-finder";
import { HeroSearch } from "@/components/site/hero-search";
import { JourneyRail } from "@/components/site/journey-rail";
import { Reveal } from "@/components/site/reveal";
import { Reviews } from "@/components/site/reviews";
import { SplitHeading } from "@/components/site/split-heading";
import { Btn, Eyebrow } from "@/components/site/ui";
import { approach, experiences, site, team } from "@/lib/content";
import { posts } from "@/lib/journal";
import { journeys } from "@/lib/journeys";

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
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/35 to-ink/45" />

        <div className="wrap pt-36 pb-8 md:pb-12">
          <div className="flex items-end justify-between gap-8">
            <SplitHeading
              as="h1"
              onLoad
              delay={0.2}
              className="display text-[clamp(4rem,13.5vw,15rem)] leading-[0.82]"
            >
              Feel the <em>centuries.</em>
            </SplitHeading>
            <span
              aria-hidden
              className="hidden pb-4 font-deva text-[clamp(3rem,6vw,6rem)] leading-none text-bone/30 lg:block"
            >
              काशी
            </span>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-xl text-lg leading-relaxed text-bone/85 md:text-xl">
              Private cultural and heritage journeys through Kashi — the world&apos;s oldest living
              city — designed around how you want to feel.
            </p>
            <p className="label text-bone/60 md:text-right">
              Varanasi, India
              <br />
              {site.coordinates}
            </p>
          </div>
          <div className="mt-10">
            <HeroSearch />
          </div>
        </div>
      </section>

      {/* ---------- 01 Manifesto ---------- */}
      <section className="py-28 md:py-44">
        <div className="wrap">
          <Eyebrow index="01" className="text-smoke">
            Our approach
          </Eyebrow>
          <SplitHeading className="display mt-10 max-w-[18ch] text-[2.8rem] leading-[0.98] sm:text-6xl md:text-[5.6rem]">
            We don&apos;t sell tours. We open the doors <em>Kashi</em> keeps closed to most visitors.
          </SplitHeading>
          <div className="mt-16 grid gap-12 md:grid-cols-12">
            <Reveal className="relative aspect-[3/4] md:col-span-4 md:col-start-2">
              <Image src="/images/priest-river.jpg" alt="A priest at the edge of the Ganga at dawn" fill sizes="(min-width:768px) 30vw, 100vw" className="object-cover" />
            </Reveal>
            <div className="flex flex-col justify-end gap-8 md:col-span-5 md:col-start-7">
              <Reveal>
                <p className="text-lg leading-relaxed text-ink-2 md:text-xl">
                  The lanes where silk has been woven for twenty generations. A temple tucked away
                  from the crowds. The river at 5am, from the middle of the Ganga, with no one else
                  around. WanderMate is built by a team with local roots in Varanasi — people who
                  know these stories, and who know who to call.
                </p>
              </Reveal>
              <Reveal delay={0.1} className="grid grid-cols-3 border-t border-ink/15 pt-6">
                <div>
                  <p className="display text-5xl">{site.rating.score}</p>
                  <p className="label mt-2 text-smoke">{site.rating.count} reviews</p>
                </div>
                <div>
                  <p className="display text-5xl">Fri</p>
                  <p className="label mt-2 text-smoke">Weekly solo departures</p>
                </div>
                <div>
                  <p className="display text-5xl">2h</p>
                  <p className="label mt-2 text-smoke">Reply on WhatsApp</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 02 Feeling finder ---------- */}
      <section className="border-t border-ink/12 py-24 md:py-36">
        <div className="wrap">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow index="02" className="text-smoke">
                Travel by feeling
              </Eyebrow>
              <SplitHeading className="display mt-6 text-5xl md:text-7xl">
                How do you want to <em>feel?</em>
              </SplitHeading>
            </div>
            <p className="max-w-sm text-smoke">
              Start with the feeling, not the itinerary. We&apos;ll find the places, people and
              hours of the day that bring it to life.
            </p>
          </div>
          <FeelingFinder />
        </div>
      </section>

      {/* ---------- Journeys rail ---------- */}
      <JourneyRail
        journeys={journeys}
        intro={
          <>
            <Eyebrow index="03" className="text-smoke">
              Journeys
            </Eyebrow>
            <h2 className="display mt-6 text-5xl md:text-7xl">
              Ways into <em>Kashi.</em>
            </h2>
            <p className="mt-6 max-w-sm text-smoke">
              From a small-group weekend to a private pilgrimage across three holy cities. Every
              journey is tailored.
            </p>
            <div className="mt-8">
              <Btn href="/journeys" variant="line">
                All journeys
              </Btn>
            </div>
          </>
        }
      />

      {/* ---------- One day in Kashi (pinned) ---------- */}
      <DayInKashi />

      {/* ---------- 04 Experiences ---------- */}
      <section className="bg-ink pt-24 text-bone md:pt-32">
        <div className="wrap flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow index="04" className="text-bone/55">
              Moments
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

      {/* ---------- 05 How we work ---------- */}
      <section className="py-24 md:py-36">
        <div className="wrap grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow index="05" className="text-smoke">
              How it works
            </Eyebrow>
            <SplitHeading className="display mt-6 text-5xl md:text-7xl">
              Local roots, <em>modern ease.</em>
            </SplitHeading>
            <div className="relative mt-10 hidden aspect-[4/3] lg:block">
              <Image src="/images/group.jpg" alt="A WanderMate group in the lanes of Varanasi" fill sizes="35vw" className="object-cover" />
            </div>
          </div>
          <ol className="border-t border-ink/15">
            {approach.map((a, i) => (
              <Reveal key={a.title}>
                <li className="grid grid-cols-[3rem_1fr] gap-4 border-b border-ink/15 py-8 md:grid-cols-[5rem_1fr] md:py-10">
                  <span className="label pt-3 text-smoke">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="display text-4xl md:text-5xl">{a.title}</h3>
                    <p className="mt-4 max-w-lg leading-relaxed text-smoke">{a.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
            <Reveal className="pt-10">
              <Btn href="/plan">Start a conversation</Btn>
            </Reveal>
          </ol>
        </div>
      </section>

      {/* ---------- 06 Reviews ---------- */}
      <section className="border-t border-ink/12 py-24 md:py-32">
        <div className="wrap mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow index="06" className="text-smoke">
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

      {/* ---------- 07 People ---------- */}
      <section className="bg-paper py-24 md:py-32">
        <div className="wrap">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow index="07" className="text-smoke">
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

      {/* ---------- 08 Journal ---------- */}
      <section className="py-24 md:py-32">
        <div className="wrap">
          <div className="mb-14 flex items-end justify-between gap-6">
            <div>
              <Eyebrow index="08" className="text-smoke">
                Journal
              </Eyebrow>
              <h2 className="display mt-6 text-5xl md:text-7xl">
                Notes from <em>the ghats.</em>
              </h2>
            </div>
            <Link href="/journal" className="label ul hidden md:inline">
              Read the journal
            </Link>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {posts.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link href={`/journal/${p.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone">
                    <Image
                      src={p.image}
                      alt=""
                      fill
                      sizes="(min-width:768px) 30vw, 100vw"
                      className="object-cover transition-transform duration-[1.4s] ease-[var(--ease-expo)] group-hover:scale-[1.05]"
                    />
                  </div>
                  <p className="label mt-5 text-smoke">{p.readTime}</p>
                  <h3 className="display mt-2 text-3xl leading-[1.02]">
                    <span className="ul">{p.title}</span>
                  </h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
