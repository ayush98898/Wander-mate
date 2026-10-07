import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CinematicList, type CinematicItem } from "@/components/site/cinematic-list";
import { DestinationExplorer } from "@/components/site/destination-explorer";
import { FeelingFinder } from "@/components/site/feeling-finder";
import { HeroSlides, type Slide } from "@/components/site/hero-slides";
import { HeroSearch } from "@/components/site/hero-search";
import { FestivalStrip, Tiers, WaysToTravel } from "@/components/site/home-sections";
import { JourneyRail } from "@/components/site/journey-rail";
import { Reveal } from "@/components/site/reveal";
import { Reviews } from "@/components/site/reviews";
import { SplitHeading } from "@/components/site/split-heading";
import { Btn, Eyebrow } from "@/components/site/ui";
import { approach, site, team, whatsappLink } from "@/lib/content";
import { allTrips, destinations, featuredTripSlugs } from "@/lib/destinations";
import { posts, readTime } from "@/lib/journal";


export const metadata: Metadata = { alternates: { canonical: "/" } };

const featured = featuredTripSlugs.map((s) => allTrips.find((t) => t.slug === s)!);
const tripCount = allTrips.length;
const countries = new Set(destinations.map((d) => d.country)).size;

const slides: Slide[] = [
  { src: "/images/destinations/jordan.jpg", alt: "The Treasury at Petra, carved into rose-red rock", place: "Petra, Jordan", position: "50% 40%" },
  { src: "/images/destinations/kyoto.jpg", alt: "Vermilion torii gates at Fushimi Inari, Kyoto", place: "Fushimi Inari, Kyoto", position: "50% 45%" },
  { src: "/images/hero-ghats.jpg", alt: "The ghats of Varanasi from above, boats gathered on the Ganga", place: "The ghats of Kashi, India" },
  { src: "/images/destinations/cambodia.jpg", alt: "The towers of Angkor Wat", place: "Angkor Wat, Cambodia" },
  { src: "/images/destinations/peru.jpg", alt: "Machu Picchu among the Andes", place: "Machu Picchu, Peru" },
  { src: "/images/destinations/agra.jpg", alt: "The Taj Mahal seen through an arch", place: "The Taj Mahal, Agra", position: "50% 55%" },
];

/** Living traditions, one per corner of the map. */
const traditions: CinematicItem[] = [
  { slug: "aarti", title: "The Ganga Aarti", kicker: "Varanasi", time: "India", duration: "Ritual", image: "/images/premium/stock/band-aarti-fan.jpg", href: "/journal/the-ganga-aarti-explained" },
  { slug: "tea", title: "The tea ceremony", kicker: "Kyoto", time: "Japan", duration: "Ritual", image: "/images/destinations/kyoto.jpg", href: "/destinations/kyoto" },
  { slug: "langar", title: "Seva in the langar", kicker: "Amritsar", time: "India", duration: "Tradition", image: "/images/destinations/amritsar.jpg", href: "/journal/langar-the-kitchen-that-feeds-everyone" },
  { slug: "sema", title: "The whirling dervishes", kicker: "Konya", time: "Türkiye", duration: "Ritual", image: "/images/destinations/istanbul.jpg", href: "/destinations/istanbul" },
  { slug: "tshechu", title: "Masked dances of the Tshechu", kicker: "Paro", time: "Bhutan", duration: "Festival", image: "/images/destinations/bhutan.jpg", href: "/destinations/bhutan" },
  { slug: "zellige", title: "Zellige, tile by tile", kicker: "Fes", time: "Morocco", duration: "Craft", image: "/images/destinations/morocco.jpg", href: "/destinations/morocco" },
  { slug: "inti-raymi", title: "Inti Raymi, the festival of the sun", kicker: "Cusco", time: "Peru", duration: "Festival", image: "/images/destinations/peru.jpg", href: "/destinations/peru" },
  { slug: "alms", title: "The dawn alms round", kicker: "Chiang Mai", time: "Thailand", duration: "Ritual", image: "/images/destinations/thailand.jpg", href: "/destinations/thailand" },
];

const stories = ["langar-the-kitchen-that-feeds-everyone", "fushimi-inari-a-thousand-gates", "petra-the-city-the-nabataeans-carved"].map(
  (s) => posts.find((p) => p.slug === s)!,
);

export default function Home() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative isolate flex min-h-svh flex-col justify-end overflow-hidden bg-ink text-bone">
        <HeroSlides slides={slides} />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/35 to-black/45" />

        <div className="wrap pt-36 pb-8 md:pb-12">
          <SplitHeading as="h1" onLoad delay={0.2} className="display text-[clamp(4rem,13.5vw,15rem)] leading-[0.82]">
            Feel the <em>centuries.</em>
          </SplitHeading>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-bone/85 md:text-xl">
            Heritage and cultural journeys across India and the world — temples, rituals, crafts and festivals, with the
            people who keep them alive.
          </p>
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
              <Image src="/images/destinations/morocco.jpg" alt="Bab Bou Jeloud, the blue gate into the medina of Fes" fill sizes="(min-width:768px) 30vw, 100vw" className="object-cover" />
            </Reveal>
            <div className="flex flex-col justify-end gap-8 md:col-span-5 md:col-start-7">
              <Reveal>
                <p className="text-lg leading-relaxed text-ink-2 md:text-xl">
                  The weaver in Fes, the monk in Kyoto, the priest on the Ganga — the people are the
                  journey; monuments are the backdrop. We began in Kashi with a team that has local
                  roots, and we open each new place only when we have the same depth of local people there.
                </p>
              </Reveal>
              <Reveal delay={0.1} className="grid grid-cols-3 border-t border-ink/15 pt-6">
                <div>
                  <p className="display text-5xl">{destinations.length}</p>
                  <p className="label mt-2 text-smoke">Destinations</p>
                </div>
                <div>
                  <p className="display text-5xl">{countries}</p>
                  <p className="label mt-2 text-smoke">Countries</p>
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
                Where the stories <em>live.</em>
              </SplitHeading>
            </div>
            <Btn href="/destinations" variant="line">
              All destinations
            </Btn>
          </div>
          <DestinationExplorer limit={8} />
        </div>
      </section>

      {/* ---------- Traditions of the world ---------- */}
      <section className="bg-ink pt-24 text-bone md:pt-32">
        <div className="wrap flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow className="text-bone/55">Living traditions</Eyebrow>
            <SplitHeading className="display mt-6 text-5xl md:text-7xl">
              Rituals the world <em>still keeps.</em>
            </SplitHeading>
          </div>
          <Btn href="/journal" variant="line-light">
            Read the Journal
          </Btn>
        </div>
        <CinematicList items={traditions} />
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
              Angkor at sunrise, a night on Koyasan, Petra by candlelight or a weekend on the Ganga.
              {" "}{tripCount} journeys across {destinations.length} destinations in {countries} countries, each one tailored.
            </p>
            <div className="mt-8">
              <Btn href="/journeys" variant="line">
                See all {tripCount} tours
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

      {/* ---------- From the Journal ---------- */}
      <section className="py-24 md:py-32">
        <div className="wrap">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow className="text-smoke">From the Journal</Eyebrow>
              <SplitHeading className="display mt-6 text-5xl md:text-7xl">
                Heritage, <em>introduced.</em>
              </SplitHeading>
            </div>
            <Btn href="/journal" variant="line">
              All stories
            </Btn>
          </div>
          <ul className="grid gap-x-8 gap-y-14 md:grid-cols-3">
            {stories.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <li>
                  <Link href={`/journal/${p.slug}`} className="group block">
                    <div className="relative aspect-[4/5] overflow-hidden bg-ink">
                      <Image
                        src={p.image}
                        alt={p.imageAlt}
                        fill
                        sizes="(min-width:768px) 31vw, 100vw"
                        style={{ objectPosition: p.imagePosition }}
                        className="object-cover transition-transform duration-[1.4s] ease-[var(--ease-expo)] group-hover:scale-[1.04]"
                      />
                    </div>
                    <p className="label mt-5 text-smoke">
                      <span className="text-ochre">{p.category}</span> · {p.place} · {readTime(p)}
                    </p>
                    <h3 className="display mt-3 text-[2rem] leading-[1.06]">
                      <span className="ul">{p.title}</span>
                    </h3>
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Where we began: Kashi ---------- */}
      <section id="premium" className="scroll-mt-20 border-t border-ink/12 py-24 md:py-32">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <Reveal className="lg:col-span-7">
            <Link href="/journeys/kashi-premium" className="group relative block aspect-[4/3] overflow-hidden bg-ink">
              <Image
                src="/images/golden-boats.jpg"
                alt="Wooden boats on the Ganga in golden morning light"
                fill
                sizes="(min-width:1024px) 55vw, 100vw"
                className="object-cover transition-transform duration-[1.4s] ease-[var(--ease-expo)] group-hover:scale-[1.04]"
              />
              <span className="label absolute bottom-5 left-5 bg-bone px-3 py-2 text-ink">Now travelling · Kashi</span>
            </Link>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <Eyebrow className="text-ochre">Where we began · Travelling now</Eyebrow>
            <h2 className="display mt-6 text-5xl md:text-7xl">
              Begin in <em>Kashi</em>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-2">
              WanderMate was born on the ghats of Varanasi, and it is where we travel today while the rest of the map
              opens. Our most popular journey, <strong className="font-normal text-ink">Wandermate Premium</strong>, is
              two nights in the world&rsquo;s oldest living city: a heritage stay, a private boat, a seat beside the Ganga
              Aarti and three food walks.
            </p>
            <ul className="mt-8 grid grid-cols-3 border-t border-ink/15 pt-6">
              {[
                ["3", "days, hour by hour"],
                ["3", "food walks"],
                ["24/7", "WhatsApp support"],
              ].map(([n, l]) => (
                <li key={l}>
                  <p className="display text-4xl text-ochre">{n}</p>
                  <p className="mt-1 text-sm text-smoke">{l}</p>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <Btn href="/journeys/kashi-premium">See the full journey</Btn>
              <Btn
                href={whatsappLink("Namaste WanderMate! I'd like to book Wandermate Premium (2N3D) in Varanasi.")}
                variant="line"
              >
                Request it
              </Btn>
            </div>
          </Reveal>
        </div>
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
                The people behind <em>WanderMate.</em>
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
