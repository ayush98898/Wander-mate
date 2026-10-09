import { ArrowDown, ArrowUpRight, Check, Minus } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

import { ChapterNav, type Chapter } from "@/components/premium/chapter-nav";
import { ReviewRail } from "@/components/premium/review-rail";
import { Reveal } from "@/components/site/reveal";
import { Timeline } from "@/components/ui/timeline";
import { whatsappLink } from "@/lib/content";
import {
  addOns,
  bands,
  boatRoute,
  booking,
  contact,
  days,
  dayTrips,
  exclusions,
  founders,
  inclusions,
  places,
  premium,
  reviews,
  stays,
  whyVaranasi,
} from "@/lib/premium";
import { abs, breadcrumbs, JsonLd, ORG_ID, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Varanasi 2 Nights 3 Days Premium Tour | WanderMate",
  absolute: true,
  description:
    "Our most popular Varanasi tour: a boutique heritage stay, VIP darshan at Kashi Vishwanath, a private boat and reserved seats beside the Ganga Aarti.",
  path: "/journeys/kashi-premium",
});

const premiumUrl = abs("/journeys/kashi-premium");
const premiumSchema = [
  {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "@id": `${premiumUrl}#trip`,
    name: premium.name,
    description: premium.intro,
    url: premiumUrl,
    image: abs("/images/premium/stock/hero-aarti.jpg"),
    provider: { "@id": ORG_ID },
    itinerary: {
      "@type": "ItemList",
      itemListElement: days.flatMap((d) => d.moments.map((m) => ({ day: d.n, m }))).map(({ day, m }, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: { "@type": "TouristAttraction", name: m.title, description: `Day ${day}${m.points[0] ? `: ${m.points[0]}` : ""}` },
      })),
    },
  },
  breadcrumbs([
    ["All tours", "/journeys"],
    [premium.name, "/journeys/kashi-premium"],
  ]),
];

const enquire = whatsappLink("Namaste WanderMate! I'd like to book Wandermate Premium (2N3D) in Varanasi.");

const chapters: Chapter[] = [
  { id: "overview", label: "Overview" },
  { id: "itinerary", label: "Itinerary" },
  { id: "included", label: "Included" },
  { id: "add-ons", label: "Add-ons" },
  { id: "places", label: "Places" },
  { id: "booking", label: "Booking" },
  { id: "reviews", label: "Reviews" },
];

/** Small tracked-caps heading used to open each chapter. */
function Kicker({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`label ${light ? "text-bone/65" : "text-ochre"}`}>{children}</p>;
}

function EnquireButton({ light, children = "Request this journey" }: { light?: boolean; children?: React.ReactNode }) {
  return (
    <a
      href={enquire}
      target="_blank"
      rel="noreferrer"
      className={`group label inline-flex min-h-12 items-center gap-6 px-6 transition-colors ${
        light ? "bg-bone text-ink hover:bg-ochre-lit" : "bg-ochre text-bone hover:bg-ink"
      }`}
    >
      {children}
      <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

export default function PremiumPage() {
  return (
    <>
      <JsonLd data={premiumSchema} />
      {/* ---------- Hero ---------- */}
      <section className="relative isolate flex min-h-svh flex-col justify-end overflow-hidden text-bone">
        <Image
          src="/images/premium/stock/hero-aarti.jpg"
          alt="The Aarti flame raised above the crowd on the ghats at night"
          fill
          priority
          sizes="100vw"
          style={{ objectPosition: "50% 22%" }}
          className="animate-kenburns -z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/30 to-black/45" />
        <div className="wrap pt-36 pb-10 md:pb-14">
          <Kicker light>
            {premium.name} · {premium.duration}
          </Kicker>
          <h1 className="display mt-6 max-w-5xl text-[clamp(3.5rem,10vw,10rem)] leading-[0.92]">
            Varanasi, the <em>eternal</em> experience
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-bone/85">
            {premium.tagline}. Three days with a companion who knows every lane, a boat of your own, and a seat beside the Aarti.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <EnquireButton light />
            <a href="#itinerary" className="label inline-flex min-h-12 items-center gap-3 border-b border-bone/50 hover:border-bone">
              See the three days <ArrowDown aria-hidden className="size-4" />
            </a>
          </div>
          <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-bone/25 pt-6 sm:grid-cols-3 lg:grid-cols-5">
            {premium.facts.map((f) => (
              <div key={f.k}>
                <dt className="label text-bone/55">{f.k}</dt>
                <dd className="mt-2 font-display text-2xl">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <ChapterNav chapters={chapters} cta={{ href: enquire, label: "Request this journey" }} />

      {/* ---------- Overview ---------- */}
      <section id="overview" className="scroll-mt-14 py-24 md:py-36">
        <div className="wrap grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
          <Reveal>
            <Kicker>The journey</Kicker>
            <p className="display mt-8 text-[clamp(2rem,3.6vw,3.25rem)] leading-[1.12]">{premium.intro}</p>
          </Reveal>
          <Reveal delay={0.1} className="lg:pt-16">
            <div className="relative aspect-[8/5] overflow-hidden">
              <Image
                src="/images/premium/group.jpg"
                alt="A Wandermate group in the lanes of old Varanasi"
                fill
                sizes="(min-width:1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-sm text-smoke">A Wandermate group in the old city lanes.</p>
          </Reveal>
        </div>

        {/* Why Varanasi */}
        <div className="wrap mt-24 md:mt-36">
          <div className="grid gap-12 border-t border-ink/15 pt-12 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
            <Reveal>
              <Kicker>Why Varanasi</Kicker>
              <h2 className="display mt-6 text-5xl md:text-6xl">
                The city that <em>transcends</em> time
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-ink-2">{whyVaranasi.text}</p>
              <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
                {whyVaranasi.stats.map((s) => (
                  <div key={s.l}>
                    <dt className="sr-only">{s.l}</dt>
                    <dd>
                      <span className="display block text-5xl text-ochre md:text-6xl">{s.n}</span>
                      <span className="mt-3 block text-sm leading-snug text-smoke">{s.l}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>

        {/* Founders */}
        <div className="wrap mt-24 md:mt-36">
          <Reveal>
            <Kicker>From the founders</Kicker>
            <h2 className="display mt-6 max-w-3xl text-5xl md:text-6xl">
              Hosted the way we&rsquo;d host <em>our closest friends</em>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-16 md:grid-cols-2 md:gap-12">
            {founders.map((f, i) => (
              <Reveal key={f.name} delay={i * 0.1}>
                <figure className="grid grid-cols-[7rem_1fr] gap-6 sm:grid-cols-[9rem_1fr]">
                  <div className="relative aspect-[4/5] overflow-hidden bg-stone">
                    <Image src={f.image} alt={f.name} fill sizes="9rem" className="object-cover" />
                  </div>
                  <div>
                    <blockquote className="space-y-4 text-[1.05rem] leading-relaxed text-ink-2">
                      {f.quote.map((q) => (
                        <p key={q}>&ldquo;{q}&rdquo;</p>
                      ))}
                    </blockquote>
                    <figcaption className="mt-6">
                      <span className="display block text-2xl">{f.name}</span>
                      <span className="label mt-1 block text-smoke">{f.role}</span>
                    </figcaption>
                  </div>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PhotoBand band={bands.aarti} />

      {/* ---------- Itinerary ---------- */}
      <section id="itinerary" className="scroll-mt-14 border-t border-ink/10 bg-paper py-24 md:py-36">
        <div className="wrap">
          <Reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <Kicker>Itinerary</Kicker>
              <h2 className="display mt-6 text-6xl md:text-7xl">
                Three days, <em>hour by hour</em>
              </h2>
            </div>
            <p className="max-w-sm text-smoke">
              A rhythm built around the river: the Aarti at dusk, temples before dawn, and real rest in between.
            </p>
          </Reveal>

          <div className="mt-8 md:mt-16">
            <Timeline
              data={days.map((d) => ({
                id: `day-${d.n}`,
                title: `Day ${d.n}`,
                subtitle: d.title,
                content: (
                  <div className="pb-6">
                    <div className="relative aspect-[3/2] overflow-hidden bg-ink">
                      <Image
                        src={d.image}
                        alt={d.alt}
                        fill
                        sizes="(min-width:1024px) 55vw, 90vw"
                        style={{ objectPosition: d.position }}
                        className="object-cover"
                      />
                    </div>
                    <ol className="mt-4">
                      {d.moments.map((m) => (
                        <li key={m.title} className="grid gap-3 border-b border-ink/12 py-8 md:grid-cols-[7.5rem_1fr] md:gap-8">
                          <p className="label pt-2 text-ochre">{m.time ?? ""}</p>
                          <div>
                            <h3 className="display text-3xl md:text-[2.1rem]">
                              {m.title}
                              {m.optional ? <span className="label ml-3 align-middle text-smoke">Optional</span> : null}
                            </h3>
                            <ul className="mt-4 space-y-2.5 text-ink-2">
                              {m.points.map((p) => (
                                <li key={p} className="grid grid-cols-[1rem_1fr] gap-2 leading-relaxed">
                                  <span aria-hidden className="mt-[0.7em] h-px w-2.5 bg-ochre" />
                                  {p}
                                </li>
                              ))}
                            </ul>
                            {d.n === 2 && m.title.startsWith("Banarasi breakfast") ? <BoatRoute /> : null}
                            {m.image ? (
                              <div className="relative mt-6 aspect-[4/3] max-w-md overflow-hidden bg-ink">
                                <Image
                                  src={m.image.src}
                                  alt={m.image.alt}
                                  fill
                                  sizes="28rem"
                                  style={{ objectPosition: m.image.position }}
                                  className="object-cover"
                                />
                              </div>
                            ) : null}
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                ),
              }))}
            />
          </div>

          <Reveal className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-ink/15 pt-10 md:flex-row md:items-center">
            <p className="display text-3xl md:text-4xl">Want a slower day, or a different hotel? Every detail can change.</p>
            <EnquireButton>Tailor these days</EnquireButton>
          </Reveal>
        </div>
      </section>

      {/* ---------- Included ---------- */}
      <section id="included" className="scroll-mt-14 py-24 md:py-36">
        <div className="wrap">
          <Reveal>
            <Kicker>What&rsquo;s included</Kicker>
            <h2 className="display mt-6 max-w-3xl text-6xl md:text-7xl">
              Everything, <em>taken care of</em>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px bg-ink/12 sm:grid-cols-2 lg:grid-cols-4">
            {inclusions.map((g, i) => (
              <Reveal key={g.title} delay={(i % 4) * 0.05} className="bg-bone p-6 md:p-8">
                <h3 className="display text-3xl">{g.title}</h3>
                <ul className="mt-5 space-y-3 text-[0.95rem] leading-relaxed text-ink-2">
                  {g.items.map((it) => (
                    <li key={it} className="grid grid-cols-[1.25rem_1fr] gap-2">
                      <Check aria-hidden className="mt-1 size-4 text-ochre" />
                      {it}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <div className="mt-20 grid gap-14 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
            <Reveal>
              <h3 className="display text-4xl">Where you&rsquo;ll stay</h3>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {stays.map((s) => (
                  <figure key={s.name}>
                    <div className="relative aspect-[4/3] overflow-hidden bg-stone">
                      <Image src={s.image} alt={s.name} fill sizes="(min-width:1024px) 28vw, 50vw" className="object-cover" />
                    </div>
                    <figcaption className="display mt-4 text-2xl">{s.name}</figcaption>
                  </figure>
                ))}
              </div>
              <p className="mt-5 text-sm text-smoke">Or a similar boutique property, depending on availability.</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="display text-4xl">Not included</h3>
              <ul className="mt-8 border-t border-ink/15">
                {exclusions.map((e) => (
                  <li key={e} className="grid grid-cols-[1.25rem_1fr] gap-3 border-b border-ink/15 py-4 text-ink-2">
                    <Minus aria-hidden className="mt-1 size-4 text-smoke" />
                    {e}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Add-ons ---------- */}
      <section id="add-ons" className="scroll-mt-14 bg-ink py-24 text-bone md:py-36">
        <div className="wrap">
          <Reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <Kicker light>Add-on experiences</Kicker>
              <h2 className="display mt-6 text-6xl md:text-7xl">
                Make it <em>yours</em>
              </h2>
            </div>
            <p className="max-w-sm text-bone/70">
              Add any of these when you book, or during your stay. Prices are per session or per car.
            </p>
          </Reveal>
          <div className="mt-16 grid gap-px bg-bone/15 sm:grid-cols-2 lg:grid-cols-3">
            {addOns.map((a, i) => (
              <Reveal key={a.name} delay={(i % 3) * 0.06} className="flex flex-col bg-ink p-7 md:p-9">
                <div className="flex h-full flex-col">
                  <h3 className="display text-3xl">{a.name}</h3>
                  <p className="mt-4 flex-1 leading-relaxed text-bone/70">{a.text}</p>
                  <p className="mt-8 flex items-baseline gap-2 border-t border-bone/15 pt-5">
                    <span className="display text-4xl text-ochre-lit">{a.price}</span>
                    {a.unit ? <span className="label text-bone/55">{a.unit}</span> : null}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Places ---------- */}
      <section id="places" className="scroll-mt-14 py-24 md:py-36">
        <div className="wrap">
          <Reveal>
            <Kicker>Places we cover</Kicker>
            <h2 className="display mt-6 max-w-4xl text-6xl md:text-7xl">
              Across the <em>sacred circuit</em>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {places.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <h3 className="flex items-baseline justify-between border-b border-ink pb-4">
                  <span className="display text-3xl">{p.title}</span>
                  <span className="label text-smoke">{p.items.length}</span>
                </h3>
                <ul>
                  {p.items.map((it) => (
                    <li key={it} className="border-b border-ink/12 py-3 text-ink-2">
                      {it}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-28">
            <h3 className="display text-4xl md:text-5xl">
              Beyond Varanasi <span className="text-smoke">— as add-on day trips</span>
            </h3>
          </Reveal>
          <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
            {dayTrips.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08} className="border-t border-ink pt-6">
                <p className="display text-7xl text-ochre md:text-8xl">
                  {t.km}
                  <span className="ml-2 font-sans text-base tracking-normal text-smoke">km from Varanasi</span>
                </p>
                <h4 className="display mt-6 text-4xl">{t.name}</h4>
                <ul className="mt-4 space-y-2 text-ink-2">
                  {t.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PhotoBand band={bands.deepawali} />

      {/* ---------- Booking ---------- */}
      <section id="booking" className="scroll-mt-14 border-t border-ink/10 bg-paper py-24 md:py-36">
        <div className="wrap grid gap-16 lg:grid-cols-[1fr_1.5fr] lg:gap-24">
          <Reveal>
            <Kicker>How to book</Kicker>
            <h2 className="display mt-6 text-6xl md:text-7xl">
              Five easy <em>steps</em>
            </h2>
            <p className="mt-6 max-w-sm leading-relaxed text-smoke">
              A tailored itinerary and quote within 24 hours. A 50% advance confirms; the balance is due 7 days before you travel.
            </p>
            <div className="mt-10">
              <EnquireButton />
            </div>
          </Reveal>
          <ol className="border-t border-ink/15">
            {booking.map((b, i) => (
              <li key={b.title}>
                <Reveal delay={i * 0.05} className="grid grid-cols-[3.5rem_1fr] gap-4 border-b border-ink/15 py-7 md:grid-cols-[5rem_1fr]">
                  <span className="display text-5xl text-ochre">{i + 1}</span>
                  <div>
                    <h3 className="display text-3xl">{b.title}</h3>
                    <p className="mt-2 leading-relaxed text-ink-2">{b.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Reviews ---------- */}
      <section id="reviews" className="scroll-mt-14 bg-river py-24 text-bone md:py-36">
        <div className="wrap">
          <Reveal>
            <Kicker light>Guest reviews</Kicker>
            <h2 className="display mt-6 max-w-3xl text-6xl md:text-7xl">
              Words from travellers who <em>felt</em> Kashi with us
            </h2>
          </Reveal>
          <div className="mt-16">
            <ReviewRail reviews={reviews} />
          </div>
        </div>
      </section>

      {/* ---------- Contact ---------- */}
      <section className="py-24 md:py-36">
        <div className="wrap">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.08]">
              &ldquo;Kashi is not just a city. It is an experience that lives within you <em>long after you leave.</em>&rdquo;
            </p>
            <div className="mt-12 flex justify-center">
              <EnquireButton />
            </div>
          </Reveal>
          <dl className="mt-24 grid gap-10 border-t border-ink/15 pt-10 text-ink-2 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="label text-smoke">WhatsApp & phone</dt>
              <dd className="mt-3 space-y-1">
                {contact.phones.map((p) => (
                  <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="ul block w-fit">
                    {p}
                  </a>
                ))}
              </dd>
            </div>
            <div>
              <dt className="label text-smoke">Email</dt>
              <dd className="mt-3">
                <a href={`mailto:${contact.email}`} className="ul">
                  {contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="label text-smoke">Instagram</dt>
              <dd className="mt-3">
                <a href={`https://instagram.com/${contact.instagram}`} target="_blank" rel="noreferrer" className="ul">
                  @{contact.instagram}
                </a>
              </dd>
            </div>
            <div>
              <dt className="label text-smoke">Visit us</dt>
              <dd className="mt-3 text-sm leading-relaxed">{contact.address}</dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}

/** Day 2's boat route, ghat by ghat. */
function BoatRoute() {
  return (
    <div className="mt-6 border border-ink/12 bg-bone p-5">
      <p className="label text-smoke">Your boat route</p>
      <ol className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-3 text-sm">
        {boatRoute.map((g, i) => (
          <li key={`${g}-${i}`} className="flex items-center gap-2">
            <span className={i === 0 || i === boatRoute.length - 1 ? "font-medium text-ochre" : "text-ink-2"}>{g}</span>
            {i < boatRoute.length - 1 ? <span aria-hidden className="h-px w-5 bg-ink/30" /> : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

/** A full-width photograph between chapters, with one line set over a black gradient. */
function PhotoBand({ band }: { band: (typeof bands)[keyof typeof bands] }) {
  return (
    <figure className="relative isolate flex min-h-[90svh] items-end overflow-hidden text-bone">
      <Image
        src={band.src}
        alt={band.alt}
        fill
        sizes="100vw"
        style={{ objectPosition: band.position }}
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />
      <div className="wrap pb-12 md:pb-16">
        <Reveal>
          <p className="display max-w-4xl text-[clamp(2.25rem,5vw,4.75rem)] leading-[1.05]">{band.line}</p>
          <figcaption className="label mt-6 text-bone/70">{band.caption}</figcaption>
        </Reveal>
      </div>
    </figure>
  );
}
