import { ArrowUpRight, Check, X } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { DayExplorer } from "@/components/package/day-explorer";
import { Faq } from "@/components/package/faq";
import { KashiStories } from "@/components/package/kashi-stories";
import { GuestReviews } from "@/components/package/guest-reviews";
import { statIcons } from "@/components/package/icons";
import { PackageHero } from "@/components/package/package-hero";
import { RiverRoute } from "@/components/package/river-route";
import { SeatBooker } from "@/components/package/seat-booker";
import { StayTiers } from "@/components/package/stay-tiers";
import { TripBuilder } from "@/components/package/trip-builder";
import { HeritageStore } from "@/components/site/heritage-store";
import { Reveal } from "@/components/site/reveal";
import { site } from "@/lib/content";
import { getPost, type Post } from "@/lib/journal";
import { getPackage, packages } from "@/lib/packages";
import { abs, breadcrumbs, JsonLd, ORG_ID, pageMeta, parsePrice } from "@/lib/seo";
import { getShelf } from "@/lib/store";

export function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getPackage(slug);
  if (!p) return {};
  return pageMeta({ title: p.seo.title, absolute: true, description: p.seo.description, path: `/packages/${p.slug}` });
}

export default async function PackagePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPackage(slug);
  if (!p) notFound();
  const shelf = getShelf(p.shop);
  const stories = (p.stories ?? []).map(getPost).filter((s): s is Post => Boolean(s));
  const url = abs(`/packages/${p.slug}`);
  const places = p.days.flatMap((d) => d.stops.filter((s) => s.icon !== "hotel" && s.icon !== "car").map((s) => ({ ...s, day: d.n })));
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "TouristTrip",
      "@id": `${url}#trip`,
      name: p.name,
      description: p.seo.description,
      url,
      image: [...new Set(p.days.map((d) => abs(d.image)))],
      touristType: p.goodFor,
      provider: { "@id": ORG_ID },
      ...(p.booking && {
        offers: p.booking.departures.map((d) => ({
          "@type": "Offer",
          ...parsePrice(p.booking!.price),
          url,
          availability: "https://schema.org/InStock",
          description: `${d.dates} (${d.days}), ${p.booking!.per}`,
        })),
      }),
      itinerary: {
        "@type": "ItemList",
        numberOfItems: places.length,
        itemListElement: places.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: { "@type": "TouristAttraction", name: s.title, description: `Day ${s.day}: ${s.note}` },
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: p.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    breadcrumbs([
      ["All tours", "/journeys"],
      [p.name, `/packages/${p.slug}`],
    ]),
  ];

  return (
    <>
      <JsonLd data={schema} />
      {/* ---------- Hero: one quiet, full-bleed photograph per day ---------- */}
      <PackageHero name={p.name} length={p.length} days={p.days} />

      {/* ---------- At a glance ---------- */}
      <section className="border-b border-ink/12">
        <div className="wrap grid grid-cols-2 lg:grid-cols-4">
          {p.stats.map((s, i) => {
            const Icon = statIcons[s.icon];
            return (
              <Reveal
                key={s.label}
                delay={i * 0.06}
                className="flex items-center gap-5 border-ink/12 py-10 pr-4 max-lg:[&:nth-child(odd)]:border-r lg:border-r lg:last:border-r-0 lg:pl-8 lg:first:pl-0 max-lg:[&:nth-child(even)]:pl-6 max-lg:[&:nth-child(-n+2)]:border-b"
              >
                <Icon aria-hidden className="size-7 shrink-0 text-ochre" strokeWidth={1.3} />
                <p>
                  <span className="display block text-6xl leading-none">{s.value}</span>
                  <span className="mt-2 block text-sm text-smoke">{s.label}</span>
                </p>
              </Reveal>
            );
          })}
        </div>
        <div className="wrap flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-ink/12 py-5">
          <span className="label text-smoke">Made for</span>
          {p.goodFor.map((g) => (
            <span key={g} className="label border border-ink/20 px-3 py-1.5 text-ink">
              {g}
            </span>
          ))}
          <a href="#price" className="group label ml-auto inline-flex min-h-11 items-center gap-3 text-ochre max-md:w-full max-md:justify-between max-md:border-t max-md:border-ink/12 max-md:pt-4">
            {p.booking ? "Reserve a seat" : "Get my price"}
            <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </section>

      {/* ---------- The river at dawn ---------- */}
      {p.river ? (
        <section className="overflow-hidden bg-ink py-24 text-bone md:py-32">
          <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:items-center lg:gap-20">
            <Reveal>
              <p className="label text-ochre-lit">{p.river.kicker}</p>
              <h2 className="display mt-6 text-5xl leading-[1] md:text-7xl">
                The river, <em>ghat by ghat.</em>
              </h2>
              <p className="mt-6 max-w-sm text-bone/65">{p.river.note}</p>
            </Reveal>
            <RiverRoute ghats={p.river.ghats} caption={p.river.caption} />
          </div>
        </section>
      ) : null}

      {/* ---------- Day by day ---------- */}
      <section id="days" className="scroll-mt-16 py-24 md:py-32">
        <div className="wrap">
          <Reveal className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="display text-5xl md:text-7xl">
              Day by <em>day</em>
            </h2>
            <p className="label text-smoke">Tap a day</p>
          </Reveal>
          <DayExplorer days={p.days} />
        </div>
      </section>

      {/* ---------- Where you'll stay ---------- */}
      <section className="border-t border-ink/12 py-24 md:py-32">
        <div className="wrap">
          <Reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="label text-ochre">{p.length.split(" · ")[0]}</p>
              <h2 className="display mt-6 text-5xl md:text-7xl">
                Where you&rsquo;ll <em>stay</em>
              </h2>
            </div>
            <p className="max-w-xs text-smoke">
              {p.stays.length > 1
                ? "Choose a tier — it\u2019s the biggest thing that changes the price."
                : "One stay for the whole group, chosen and checked by us."}
            </p>
          </Reveal>
          <StayTiers tiers={p.stays} />
        </div>
      </section>

      {/* ---------- Included ---------- */}
      <section className="border-t border-ink/12 bg-paper py-24 md:py-32">
        <div className="wrap grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          <Reveal>
            <h2 className="display text-5xl md:text-6xl">
              In the <em>price</em>
            </h2>
            <ul className="mt-10 grid gap-x-10 sm:grid-cols-2">
              {p.included.map((it) => (
                <li key={it} className="flex items-center gap-4 border-b border-ink/12 py-5">
                  <span className="grid size-9 shrink-0 place-items-center bg-ochre text-bone">
                    <Check aria-hidden className="size-4" />
                  </span>
                  <span className="text-lg">{it}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display text-5xl text-smoke md:text-6xl">Not included</h2>
            <ul className="mt-10">
              {p.excluded.map((it) => (
                <li key={it} className="flex items-center gap-4 border-b border-ink/12 py-5">
                  <span className="grid size-9 shrink-0 place-items-center border border-ink/20 text-smoke">
                    <X aria-hidden className="size-4" />
                  </span>
                  <span className="text-lg text-smoke">{it}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ---------- Guests ---------- */}
      {p.reviews?.length ? (
        <section className="bg-ink py-24 text-bone md:py-32">
          <div className="wrap">
            <Reveal>
              <GuestReviews reviews={p.reviews} score={site.rating.score} count={site.rating.count} />
            </Reveal>
          </div>
        </section>
      ) : null}

      {/* ---------- Build your trip ---------- */}
      <section id="price" className="scroll-mt-16 border-t border-ink/12 bg-paper py-24 md:py-32">
        <div className="wrap">
          {p.booking ? (
            <>
              <Reveal className="mb-12">
                <p className="label text-ochre">Small group · fixed dates</p>
                <h2 className="display mt-6 text-5xl md:text-7xl">
                  Reserve <em>your seat</em>
                </h2>
              </Reveal>
              <SeatBooker name={p.name} length={p.length} booking={p.booking} included={p.included} />
            </>
          ) : (
            <>
              <Reveal className="mb-12">
                <p className="label text-ochre">Your price in three taps</p>
                <h2 className="display mt-6 text-5xl md:text-7xl">
                  Build <em>your trip</em>
                </h2>
              </Reveal>
              <TripBuilder name={p.name} length={p.length} stays={p.stays.map((t) => t.name)} vehicles={p.vehicles ?? []} />
            </>
          )}
        </div>
      </section>

      {/* ---------- Before you go ---------- */}
      <section className="py-24 md:py-32">
        <div className="wrap">
          <Reveal className="mb-12">
            <p className="label text-ochre">Before you go</p>
            <h2 className="display mt-6 text-5xl md:text-7xl">
              Good to <em>know</em>
            </h2>
          </Reveal>
          <Faq items={p.faqs} />
        </div>
      </section>

      {/* ---------- The Heritage Store ---------- */}
      {shelf ? <HeritageStore shelf={shelf} /> : null}

      {/* ---------- Stories from the Journal ---------- */}
      {stories.length ? (
        <section className="border-t border-ink/12 bg-paper py-24 md:py-32">
          <div className="wrap">
            <Reveal className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
              <div>
                <p className="label text-ochre">From the Journal</p>
                <h2 className="display mt-6 text-5xl leading-[1] md:text-7xl">
                  Stories of <em>Kashi</em>
                </h2>
              </div>
              <div className="max-w-xs md:text-right">
                <p className="text-smoke">A few pages to read before you go — the trip means more when you know the story.</p>
                <Link href="/journal" className="group label mt-5 inline-flex min-h-11 items-center gap-3 border-b border-ink/30 transition-colors hover:border-ink">
                  All stories <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </Reveal>
            <Reveal>
              <KashiStories stories={stories} />
            </Reveal>
          </div>
        </section>
      ) : null}

      {/* ---------- Closing ---------- */}
      <section className="relative isolate flex min-h-[80svh] items-end overflow-hidden text-bone">
        <Image src={p.closing.image} alt={p.closing.alt} fill sizes="100vw" className="-z-20 object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/25 to-black/20" />
        <Reveal className="wrap flex flex-col items-start justify-between gap-8 pb-14 md:flex-row md:items-end md:pb-20">
          <p className="display max-w-3xl text-[clamp(2.5rem,6vw,5.5rem)] leading-[1]">{p.closing.line}</p>
          <a href="#price" className="group label inline-flex min-h-12 shrink-0 items-center gap-5 bg-bone px-6 text-ink transition-colors hover:bg-ochre-lit">
            {p.booking ? "Reserve a seat" : "Get my price"} <ArrowUpRight aria-hidden className="size-4" />
          </a>
        </Reveal>
      </section>
    </>
  );
}
