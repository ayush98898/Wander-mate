import { ArrowUpRight, Check, X } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { DayExplorer } from "@/components/package/day-explorer";
import { Faq } from "@/components/package/faq";
import { GuestReviews } from "@/components/package/guest-reviews";
import { statIcons } from "@/components/package/icons";
import { PackageHero } from "@/components/package/package-hero";
import { RiverRoute } from "@/components/package/river-route";
import { StayTiers } from "@/components/package/stay-tiers";
import { TripBuilder } from "@/components/package/trip-builder";
import { Reveal } from "@/components/site/reveal";
import { site } from "@/lib/content";
import { getPackage, packages } from "@/lib/packages";

export function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getPackage(slug);
  if (!p) return {};
  return { title: `${p.name} · ${p.length}`, description: p.tagline, openGraph: { images: [p.hero.image] } };
}

export default async function PackagePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPackage(slug);
  if (!p) notFound();

  return (
    <>
      {/* ---------- Hero: one quiet, full-bleed photograph per day ---------- */}
      <PackageHero name={p.name} length={p.length} tagline={p.tagline} days={p.days} />

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
        </div>
      </section>

      {/* ---------- The river at dawn ---------- */}
      {p.ghats ? (
        <section className="overflow-hidden bg-ink py-24 text-bone md:py-32">
          <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:items-center lg:gap-20">
            <Reveal>
              <p className="label text-ochre-lit">Day 2 · Sunrise boat</p>
              <h2 className="display mt-6 text-5xl leading-[1] md:text-7xl">
                The river, <em>ghat by ghat.</em>
              </h2>
              <p className="mt-6 max-w-sm text-bone/65">Scroll, and the boat moves north with the light.</p>
            </Reveal>
            <RiverRoute ghats={p.ghats} />
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
              <p className="label text-ochre">Three nights</p>
              <h2 className="display mt-6 text-5xl md:text-7xl">
                Where you&rsquo;ll <em>stay</em>
              </h2>
            </div>
            <p className="max-w-xs text-smoke">Choose a tier — it&rsquo;s the biggest thing that changes the price.</p>
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
      <section className="bg-ink py-24 text-bone md:py-32">
        <div className="wrap">
          <Reveal>
            <GuestReviews reviews={p.reviews} score={site.rating.score} count={site.rating.count} />
          </Reveal>
        </div>
      </section>

      {/* ---------- Build your trip ---------- */}
      <section id="price" className="scroll-mt-16 border-t border-ink/12 bg-paper py-24 md:py-32">
        <div className="wrap">
          <Reveal className="mb-12">
            <p className="label text-ochre">Your price in three taps</p>
            <h2 className="display mt-6 text-5xl md:text-7xl">
              Build <em>your trip</em>
            </h2>
          </Reveal>
          <TripBuilder name={p.name} length={p.length} stays={p.stays.map((t) => t.name)} vehicles={p.vehicles} />
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

      {/* ---------- Closing ---------- */}
      <section className="relative isolate flex min-h-[80svh] items-end overflow-hidden text-bone">
        <Image src={p.closing.image} alt={p.closing.alt} fill sizes="100vw" className="-z-20 object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/25 to-black/20" />
        <Reveal className="wrap flex flex-col items-start justify-between gap-8 pb-14 md:flex-row md:items-end md:pb-20">
          <p className="display max-w-3xl text-[clamp(2.5rem,6vw,5.5rem)] leading-[1]">{p.closing.line}</p>
          <a href="#price" className="group label inline-flex min-h-12 shrink-0 items-center gap-5 bg-bone px-6 text-ink transition-colors hover:bg-ochre-lit">
            Get my price <ArrowUpRight aria-hidden className="size-4" />
          </a>
        </Reveal>
      </section>
    </>
  );
}
