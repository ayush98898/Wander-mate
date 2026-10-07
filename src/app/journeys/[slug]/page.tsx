import { Check, X } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { JourneyCard } from "@/components/site/journey-card";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { Reviews } from "@/components/site/reviews";
import { SplitHeading } from "@/components/site/split-heading";
import { Btn, Eyebrow } from "@/components/site/ui";
import { hotels, whatsappLink } from "@/lib/content";
import { getJourney, journeys } from "@/lib/journeys";
import { exclusions, inclusions, itinerary, solo } from "@/lib/solo";
import { abs, breadcrumbs, JsonLd, ORG_ID, pageMeta, parsePrice } from "@/lib/seo";

export function generateStaticParams() {
  // kashi-premium has its own page at journeys/kashi-premium.
  return journeys.filter((j) => !j.external && j.slug !== "kashi-premium").map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const j = getJourney(slug);
  if (!j) return {};
  return pageMeta({ title: `${j.name} · ${j.duration}`, description: j.summary, path: `/journeys/${j.slug}` });
}

export default async function JourneyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const j = getJourney(slug);
  if (!j || j.external) notFound();

  const isSolo = j.slug === "banaras-unfiltered";
  const planHref = `/plan?journey=${j.slug}`;
  const others = journeys.filter((x) => x.slug !== j.slug).slice(0, 3);

  const url = abs(`/journeys/${j.slug}`);
  const price = parsePrice(j.price);
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "TouristTrip",
      "@id": `${url}#trip`,
      name: j.name,
      description: j.summary,
      url,
      image: abs(j.image),
      provider: { "@id": ORG_ID },
      ...(j.days && {
        itinerary: {
          "@type": "ItemList",
          itemListElement: j.days.map((d, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: { "@type": "TouristAttraction", name: d.title, description: d.points.join(" · ") },
          })),
        },
      }),
      ...(price && {
        offers: { "@type": "Offer", ...price, url, availability: "https://schema.org/InStock", description: j.priceNote },
      }),
    },
    breadcrumbs([
      ["All tours", "/journeys"],
      [j.name, `/journeys/${j.slug}`],
    ]),
  ];

  return (
    <>
      <JsonLd data={schema} />
      <PageHero image={j.image} label={`${j.kind} · ${j.route}`} title={j.name} intro={j.summary}>
        <div className="mt-10 flex flex-wrap items-end gap-x-12 gap-y-6 border-t border-bone/25 pt-6">
          <dl className="flex flex-wrap gap-x-12 gap-y-4">
            <div>
              <dt className="label text-bone/55">Duration</dt>
              <dd className="mt-1 font-display text-2xl">{j.duration}</dd>
            </div>
            {j.price ? (
              <div>
                <dt className="label text-bone/55">From</dt>
                <dd className="mt-1 font-display text-2xl">
                  {j.price} <span className="label text-bone/55">{j.priceNote}</span>
                </dd>
              </div>
            ) : (
              <div>
                <dt className="label text-bone/55">Price</dt>
                <dd className="mt-1 font-display text-2xl">Tailored on request</dd>
              </div>
            )}
          </dl>
          <div className="flex flex-wrap gap-3">
            <Btn
              href={isSolo ? whatsappLink("Solo — I'd like to join Banaras Unfiltered.") : planHref}
              variant="light"
            >
              {isSolo ? "Reserve a place" : "Plan this journey"}
            </Btn>
          </div>
        </div>
      </PageHero>

      {/* Intro + highlights */}
      <section className="py-24 md:py-32">
        <div className="wrap grid gap-14 md:grid-cols-[1.3fr_1fr] md:gap-24">
          <div>
            <Eyebrow index="01" className="text-smoke">
              The journey
            </Eyebrow>
            {isSolo ? (
              <SplitHeading className="display mt-8 text-4xl leading-[1.02] md:text-6xl">
                “{solo.quote}”
              </SplitHeading>
            ) : (
              <SplitHeading className="display mt-8 text-4xl leading-[1.02] md:text-6xl">{j.summary}</SplitHeading>
            )}
            {isSolo ? (
              <div className="mt-10 max-w-2xl space-y-5 text-lg leading-relaxed text-ink-2">
                {solo.intro.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            ) : null}
          </div>
          <Reveal className="self-end">
            <p className="label text-smoke">Highlights</p>
            <ul className="mt-4 divide-y divide-ink/12 border-y border-ink/12">
              {j.highlights.map((h) => (
                <li key={h} className="py-4 font-display text-2xl leading-snug">
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Itinerary */}
      {j.days ? (
        <section className="bg-ink py-24 text-bone md:py-32">
          <div className="wrap">
            <Eyebrow index="02" className="text-bone/55">
              {isSolo ? "Day by day" : "A sample itinerary — every journey is tailored"}
            </Eyebrow>
            <h2 className="display mt-6 text-5xl md:text-7xl">
              {isSolo ? (
                <>
                  Three days. <em>Thousands of years.</em>
                </>
              ) : (
                <>
                  How it <em>might unfold.</em>
                </>
              )}
            </h2>
            <div className="mt-16 space-y-20 md:space-y-28">
              {(isSolo
                ? itinerary.map((d) => ({ title: d.title, image: d.image, stops: d.stops }))
                : j.days.map((d) => ({ title: d.title, image: d.image, stops: d.points.map((p) => ({ title: p, points: [] as string[], time: undefined as string | undefined })) }))
              ).map((d, i) => (
                <article key={d.title} className="grid gap-10 md:grid-cols-12">
                  <Reveal className="md:col-span-5">
                    <div className="relative aspect-[4/5] overflow-hidden md:sticky md:top-24">
                      <Image src={d.image} alt="" fill sizes="(min-width:768px) 40vw, 100vw" className="object-cover" />
                      <span className="display absolute bottom-4 left-5 text-8xl text-bone/90 italic">{i + 1}</span>
                    </div>
                  </Reveal>
                  <div className="md:col-span-6 md:col-start-7">
                    <p className="label text-ochre-lit">Day {String(i + 1).padStart(2, "0")}</p>
                    <h3 className="display mt-3 text-4xl md:text-5xl">{d.title}</h3>
                    <ol className="mt-8 border-t border-bone/15">
                      {d.stops.map((s) => (
                        <li key={s.title} className="border-b border-bone/15 py-5">
                          <div className="flex items-baseline justify-between gap-4">
                            <h4 className="font-display text-2xl">{s.title}</h4>
                            {s.time ? <span className="label text-ochre-lit">{s.time}</span> : null}
                          </div>
                          {s.points.length ? (
                            <ul className="mt-3 space-y-1.5 text-[0.95rem] leading-relaxed text-bone/65">
                              {s.points.map((p) => (
                                <li key={p}>{p}</li>
                              ))}
                            </ul>
                          ) : null}
                        </li>
                      ))}
                    </ol>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Solo-only: stays, inclusions, departures */}
      {isSolo ? (
        <>
          <section className="py-24 md:py-32">
            <div className="wrap">
              <Eyebrow index="03" className="text-smoke">
                Where you&apos;ll stay
              </Eyebrow>
              <h2 className="display mt-6 text-5xl md:text-7xl">
                Dev Residency <em>or similar.</em>
              </h2>
              <div className="mt-14 grid gap-10 md:grid-cols-3">
                {hotels.map((h, i) => (
                  <Reveal key={h.name} delay={i * 0.08}>
                    <div className="relative aspect-[4/3] overflow-hidden bg-stone">
                      <Image src={h.image} alt={h.name} fill sizes="(min-width:768px) 30vw, 100vw" className="object-cover" />
                    </div>
                    <h3 className="display mt-5 text-3xl">{h.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-smoke">{h.body}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <section className="border-t border-ink/12 bg-paper py-24 md:py-32">
            <div className="wrap grid gap-16 lg:grid-cols-[1.5fr_1fr]">
              <div>
                <Eyebrow index="04" className="text-smoke">
                  Included
                </Eyebrow>
                <h2 className="display mt-6 text-5xl md:text-7xl">
                  Everything included. <em>Nothing hidden.</em>
                </h2>
                <ul className="mt-12 grid gap-x-10 sm:grid-cols-2">
                  {inclusions.map((inc) => (
                    <li key={inc.title} className="flex gap-4 border-t border-ink/12 py-5">
                      <Check className="mt-1 size-4 shrink-0 text-ochre" />
                      <span>
                        <span className="block font-medium">{inc.title}</span>
                        <span className="text-sm text-smoke">{inc.body}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-10 lg:pt-28">
                <div>
                  <p className="label text-smoke">Not included</p>
                  <ul className="mt-4 divide-y divide-ink/12 border-y border-ink/12 text-smoke">
                    {exclusions.map((e) => (
                      <li key={e} className="flex items-center gap-3 py-3">
                        <X className="size-4 shrink-0" /> {e}
                      </li>
                    ))}
                  </ul>
                </div>
                <div id="reserve" className="bg-ink p-8 text-bone">
                  <p className="label text-bone/55">Upcoming departure</p>
                  {solo.departures.map((d) => (
                    <div key={d.dates} className="mt-4 flex items-end justify-between gap-4 border-b border-bone/15 pb-5">
                      <p className="display text-4xl">{d.dates}</p>
                      <p className="label text-ochre-lit">{d.spots} spots left</p>
                    </div>
                  ))}
                  <p className="mt-5 text-sm leading-relaxed text-bone/70">
                    WhatsApp the word <strong className="text-bone">“Solo”</strong> and we confirm your dates within
                    2 hours. No forms, no payment upfront — just a conversation.
                  </p>
                  <Btn href={whatsappLink(`Solo — I'd like to join Banaras Unfiltered (${solo.departures[0].dates}).`)} variant="light" className="mt-6 w-full">
                    WhatsApp “Solo” · {solo.price}
                  </Btn>
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 md:py-28">
            <div className="wrap mb-12">
              <Eyebrow index="05" className="text-smoke">
                Travellers say
              </Eyebrow>
            </div>
            <Reviews />
          </section>
        </>
      ) : (
        <section className="bg-paper py-24 md:py-32">
          <div className="wrap flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <p className="display max-w-3xl text-5xl md:text-7xl">
              Make it <em>yours.</em>
            </p>
            <Btn href={planHref}>Plan this journey</Btn>
          </div>
        </section>
      )}

      {/* More journeys */}
      <section className="border-t border-ink/12 py-24 md:py-32">
        <div className="wrap">
          <Eyebrow className="text-smoke">More journeys</Eyebrow>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {others.map((o) => (
              <JourneyCard key={o.slug} journey={o} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
