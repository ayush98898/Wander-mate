import { ArrowRight, Clock, MapPin, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ButtonLink, CtaBand, SectionHeading } from "@/components/site/blocks";
import { ExperienceGallery } from "@/components/site/experience-gallery";
import { InstagramIcon, Lotus } from "@/components/site/icons";
import { Reveal } from "@/components/site/reveal";
import { Testimonials } from "@/components/site/testimonials";
import { circuits, pillars, site, team, tiers, whyKashi } from "@/lib/content";
import { posts } from "@/lib/journal";
import { solo } from "@/lib/solo";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyKashi />
      <SoloFeature />
      <ExperienceGallery />
      <Journeys />
      <WhyUs />
      <Reviews />
      <Team />
      <Journal />
      <CtaBand />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate flex min-h-svh items-end overflow-hidden bg-night text-white">
      <Image
        src="/images/hero-ghats.jpg"
        alt="Aerial view of the Varanasi ghats and boats on the Ganga"
        fill
        priority
        sizes="100vw"
        className="-z-20 scale-105 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-night via-night/45 to-night/35" />
      <span
        aria-hidden
        className="pointer-events-none absolute top-[14%] right-[-2%] -z-10 select-none font-deva text-[clamp(8rem,26vw,24rem)] leading-none text-white/[0.12]"
      >
        काशी
      </span>

      <div className="container-x pt-40 pb-14 md:pb-20">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 text-marigold">
            <Lotus className="h-4 w-7" /> Cultural & heritage journeys · Varanasi
          </p>
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(3rem,8.5vw,7.5rem)] leading-[0.95] tracking-tight text-balance">
            Wander the city <em className="text-marigold">older</em> than history.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/80">
            Ghats at first light, the Ganga Aarti from the front row, silk looms in
            hidden lanes, and stories passed down for generations — Kashi, the way
            locals know it.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/packages">
              Explore journeys <ArrowRight className="size-4" />
            </ButtonLink>
            <ButtonLink href="/plan" variant="outline-light">
              Craft your own trip
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/20 pt-6 text-sm sm:grid-cols-4">
            <div>
              <dt className="text-white/60">Traveller rating</dt>
              <dd className="mt-1 font-display text-2xl">
                {site.rating.score} <span className="text-marigold">★</span>
                <span className="ml-2 font-sans text-xs text-white/60">
                  {site.rating.count} reviews
                </span>
              </dd>
            </div>
            <div>
              <dt className="text-white/60">Solo departures</dt>
              <dd className="mt-1 font-display text-2xl">Every Friday</dd>
            </div>
            <div>
              <dt className="text-white/60">Journeys</dt>
              <dd className="mt-1 font-display text-2xl">1 – 7 days</dd>
            </div>
            <div>
              <dt className="text-white/60">Made by</dt>
              <dd className="mt-1 font-display text-2xl">Locals of Kashi</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

function WhyKashi() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      <div className="container-x grid items-center gap-16 lg:grid-cols-[1fr_1.05fr]">
        <div className="relative mx-auto grid w-full max-w-lg grid-cols-2 gap-4">
          <Reveal className="arch relative mt-16 aspect-[3/4.6] bg-sand">
            <Image
              src="/images/priest-river.jpg"
              alt="A priest standing at the edge of the Ganga"
              fill
              sizes="(min-width:1024px) 22vw, 45vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={0.12} className="arch relative aspect-[3/4.6] bg-sand">
            <Image
              src="/images/stairs-sunset.jpg"
              alt="Sunrise seen through a narrow stairway to the ghats"
              fill
              sizes="(min-width:1024px) 22vw, 45vw"
              className="object-cover"
            />
          </Reveal>
          <div
            aria-hidden
            className="absolute -bottom-8 left-2 grid size-28 sm:-left-6 place-items-center rounded-full bg-marigold text-center font-display text-sm leading-tight text-ink shadow-xl sm:size-32"
          >
            <span>
              5,000
              <br />
              <span className="text-xs italic">years of stories</span>
            </span>
          </div>
        </div>

        <div>
          <SectionHeading
            index="01"
            eyebrow="About the journey"
            title={
              <>
                Why <em className="text-sindoor">Kashi</em>?
              </>
            }
          />
          <Reveal delay={0.1} className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-ink-soft">
            {whyKashi.map((p, i) => (
              <p key={i} className={i === 0 ? "text-lg text-ink first-letter:float-left first-letter:mr-2 first-letter:font-display first-letter:text-6xl first-letter:leading-[0.85] first-letter:text-sindoor" : undefined}>
                {p}
              </p>
            ))}
          </Reveal>
          <Reveal delay={0.15} className="mt-8">
            <Link href="/experiences" className="inline-flex items-center gap-2 font-semibold text-sindoor">
              <span className="link-underline">Find the hidden trails</span>
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SoloFeature() {
  const next = solo.departures[0];
  return (
    <section className="relative isolate overflow-hidden bg-night text-parchment">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[60svh] lg:min-h-[86svh]">
          <Image
            src="/images/holi.jpg"
            alt="A crowd celebrating Holi in the lanes of Varanasi"
            fill
            sizes="(min-width:1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night/80 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-night/30" />
          <div className="absolute bottom-6 left-5 rounded-full bg-parchment px-4 py-2 text-xs font-semibold text-ink shadow-lg md:left-8">
            Next departure · {next.dates} · <span className="text-sindoor">{next.spots} spots left</span>
          </div>
        </div>

        <div className="flex items-center px-5 py-20 md:px-14 lg:py-24">
          <div className="max-w-xl">
            <Reveal>
              <p className="eyebrow text-marigold">02 — {solo.series}</p>
              <h2 className="mt-5 font-display text-6xl leading-[0.95] tracking-tight md:text-7xl">
                Banaras <em className="text-marigold">Unfiltered</em>
              </h2>
              <p className="mt-6 text-lg text-parchment/75">{solo.lede}</p>
              <p className="mt-3 text-parchment/60">
                A curated weekend for the independent traveller — {solo.groupSize}, one expert
                guide.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="mt-8 grid grid-cols-3 gap-4 border-y border-white/15 py-6 text-sm">
                <li>
                  <Clock className="mb-2 size-5 text-marigold" />
                  {solo.format}
                </li>
                <li>
                  <Users className="mb-2 size-5 text-marigold" />
                  4–8 travellers
                </li>
                <li>
                  <MapPin className="mb-2 size-5 text-marigold" />
                  {solo.schedule}
                </li>
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <p>
                  <span className="font-display text-4xl text-white">{solo.price}</span>
                  <span className="ml-2 text-sm text-parchment/60">/ person, all inclusive</span>
                </p>
                <ButtonLink href="/banaras-unfiltered" variant="light">
                  See the itinerary <ArrowRight className="size-4" />
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Journeys() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            index="03"
            eyebrow="Start your journey"
            title={
              <>
                Experience the soul of Varanasi, <em className="text-sindoor">exactly how you want to.</em>
              </>
            }
          />
          <Reveal>
            <ButtonLink href="/packages" variant="outline">
              View all packages
            </ButtonLink>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.08}>
              <Link
                href={`/plan?tier=${t.id}`}
                className="group relative block aspect-[3/4] overflow-hidden rounded-[1.25rem] bg-night text-white"
              >
                <Image
                  src={t.image}
                  alt=""
                  fill
                  sizes="(min-width:768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night via-night/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                  <p className="eyebrow text-marigold">1 – 7 days</p>
                  <h3 className="mt-2 font-display text-4xl">{t.name}</h3>
                  <p className="mt-2 text-sm text-white/75">{t.bestFor}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                    Build this trip
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div id="circuits" className="mt-20 grid gap-6 rounded-[1.5rem] bg-sand p-6 md:grid-cols-[0.9fr_1.1fr] md:p-10">
          <Reveal className="flex flex-col justify-center">
            <p className="eyebrow text-sindoor">Pilgrim circuits</p>
            <h3 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
              The Spiritual Triangle
            </h3>
            <p className="mt-4 text-ink-soft">
              Kashi, Ayodhya and Prayagraj — three of India&apos;s holiest cities, joined in
              one seamless journey with a companion who knows each one.
            </p>
            <div className="mt-6">
              <ButtonLink href="/packages#circuits">See circuits</ButtonLink>
            </div>
          </Reveal>
          <div className="grid grid-cols-3 gap-3">
            {circuits.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.08} className="arch relative aspect-[3/5] bg-night">
                <Image src={c.image} alt="" fill sizes="20vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-transparent" />
                <p className="absolute inset-x-0 bottom-3 px-2 text-center text-[0.7rem] font-semibold tracking-wide text-white sm:text-xs">
                  {c.route}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-ganga-deep py-24 text-parchment md:py-32">
      <span
        aria-hidden
        className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 select-none font-deva text-[14rem] leading-none text-white/[0.04] md:text-[22rem]"
      >
        गंगा
      </span>
      <div className="container-x relative">
        <SectionHeading
          index="04"
          tone="light"
          align="center"
          eyebrow="Why WanderMate?"
          title={
            <>
              We believe every traveller <em className="text-marigold">is unique.</em>
            </>
          }
          intro="Local roots, modern ease — traditional knowledge of Kashi with the convenience of a modern travel company."
        />
        <ol className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06} className="h-full">
              <li className="flex h-full flex-col bg-ganga-deep p-7 transition-colors hover:bg-ganga">
                <span className="font-display text-3xl text-marigold italic">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-display text-2xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-parchment/65">{p.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <SectionHeading
          index="05"
          eyebrow="What travellers say"
          title={
            <>
              Treated like <em className="text-sindoor">family</em> in the city of Mahadev.
            </>
          }
        />
        <Reveal className="shrink-0 rounded-2xl border border-ink/10 bg-card px-7 py-5 text-center">
          <p className="font-display text-5xl">{site.rating.score}</p>
          <p className="mt-1 tracking-[0.2em] text-marigold">★★★★★</p>
          <p className="eyebrow mt-2 text-ink-muted">Based on {site.rating.count} reviews</p>
        </Reveal>
      </div>
      <div className="mt-14">
        <Testimonials />
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="bg-sand/60 py-24 md:py-32">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <SectionHeading
              index="06"
              eyebrow="About us"
              title={
                <>
                  Local roots, <em className="text-sindoor">modern ease.</em>
                </>
              }
            />
            <Reveal delay={0.1}>
              <p className="mt-6 leading-relaxed text-ink-soft">
                WanderMate was built on a shared passion for exploration and a deep
                appreciation for the rich heritage of Varanasi. Founded by Ayush Singh, an
                IIT Delhi alumnus, alongside co-founders Ritesh Singh and Vineet, our team
                bridges the gap between traditional local knowledge and modern convenience.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/about" variant="outline">
                  Our story
                </ButtonLink>
                <ButtonLink href={site.instagram} external variant="outline">
                  <InstagramIcon className="size-4" /> {site.instagramHandle}
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.08}>
                <div className="arch relative aspect-[3/4] bg-night">
                  <Image
                    src={m.image}
                    alt={`${m.name}, ${m.role}`}
                    fill
                    sizes="(min-width:640px) 25vw, 90vw"
                    className="object-cover"
                    style={{ objectPosition: m.position }}
                  />
                </div>
                <h3 className="mt-4 font-display text-2xl">{m.name}</h3>
                <p className="eyebrow mt-1 text-sindoor">{m.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Journal() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading index="07" eyebrow="Travel journal" title="Stories from the ghats" />
          <Reveal>
            <ButtonLink href="/journal" variant="outline">
              Read all
            </ButtonLink>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <Link href={`/journal/${p.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-sand">
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    sizes="(min-width:768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="eyebrow mt-5 text-ink-muted">{p.readTime}</p>
                <h3 className="mt-2 font-display text-2xl leading-snug group-hover:text-sindoor">
                  {p.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-soft">{p.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
