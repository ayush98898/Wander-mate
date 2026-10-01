import { Check, Clock, MapPin, Users, X } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

import { ButtonLink, PageHero, SectionHeading } from "@/components/site/blocks";
import { WhatsAppIcon } from "@/components/site/icons";
import { Reveal } from "@/components/site/reveal";
import { Testimonials } from "@/components/site/testimonials";
import { hotels, site, whatsappLink } from "@/lib/content";
import { exclusions, inclusions, itinerary, solo } from "@/lib/solo";

export const metadata: Metadata = {
  title: "Banaras Unfiltered — Premium Solo & Small Group Tour",
  description:
    "A 2N/3D small-group weekend in Varanasi for 4–8 independent travellers: Ganga Aarti, sunrise boat, temple circuit, silk walk and food walks. INR 8,999 all inclusive.",
};

const soloMessage = "Solo — I'd like to join Banaras Unfiltered.";

export default function SoloPage() {
  return (
    <>
      <PageHero
        image="/images/hero-ghats.jpg"
        eyebrow={`${solo.series} · ${solo.format}`}
        deva="बनारस"
        title={
          <>
            Banaras <em className="text-marigold">Unfiltered</em>
          </>
        }
        intro={`${solo.lede} ${solo.groupSize}. One expert guide.`}
      >
        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
          <p>
            <span className="font-display text-4xl">{solo.price}</span>
            <span className="ml-2 text-sm text-white/70">{solo.priceNote}</span>
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="#reserve">Reserve your place</ButtonLink>
            <ButtonLink href="#itinerary" variant="outline-light">
              View itinerary
            </ButtonLink>
          </div>
        </div>
      </PageHero>

      <section className="border-b border-ink/10 bg-card">
        <dl className="container-x grid grid-cols-2 gap-6 py-8 text-sm md:grid-cols-4">
          {[
            { icon: Clock, k: "Duration", v: "2 nights · 3 days" },
            { icon: MapPin, k: "Departs", v: "Every Friday → Sunday" },
            { icon: Users, k: "Group", v: "4–8 travellers" },
            { icon: Check, k: "Includes", v: "Stay, meals, guide, transfers" },
          ].map(({ icon: Icon, k, v }) => (
            <div key={k} className="flex items-start gap-3">
              <Icon className="mt-0.5 size-5 shrink-0 text-sindoor" />
              <div>
                <dt className="text-ink-muted">{k}</dt>
                <dd className="font-semibold">{v}</dd>
              </div>
            </div>
          ))}
        </dl>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
          <Reveal>
            <blockquote className="font-display text-3xl leading-snug text-balance md:text-[2.6rem]">
              <span className="text-sindoor">“</span>
              {solo.quote}
              <span className="text-sindoor">”</span>
            </blockquote>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-lg leading-relaxed text-ink-soft">
            {solo.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="itinerary" className="scroll-mt-20 bg-night py-24 text-parchment md:py-32">
        <div className="container-x">
          <SectionHeading
            tone="light"
            eyebrow="The journey"
            title={
              <>
                Three days. <em className="text-marigold">Thousands of years of stories.</em>
              </>
            }
          />

          <div className="mt-16 space-y-24">
            {itinerary.map((day) => (
              <article key={day.day} className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                <div className="lg:sticky lg:top-24 lg:self-start">
                  <Reveal className="arch relative aspect-[4/5] max-h-[70svh] w-full bg-ink">
                    <Image src={day.image} alt="" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-night/85 via-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                      <p className="font-display text-7xl text-marigold italic md:text-8xl">
                        {String(day.day).padStart(2, "0")}
                      </p>
                    </div>
                  </Reveal>
                </div>
                <div>
                  <Reveal>
                    <p className="eyebrow text-marigold">Day {day.day}</p>
                    <h3 className="mt-3 font-display text-3xl leading-tight md:text-4xl">{day.title}</h3>
                  </Reveal>
                  <ol className="relative mt-10 space-y-10 border-l border-white/15 pl-8">
                    {day.stops.map((s) => (
                      <li key={s.title} className="relative">
                        <span
                          aria-hidden
                          className="absolute top-1.5 -left-[2.32rem] size-3 rounded-full border-2 border-marigold bg-night"
                        />
                        <Reveal>
                          {s.time ? <p className="eyebrow mb-1 text-marigold">{s.time}</p> : null}
                          <h4 className="font-display text-xl md:text-2xl">{s.title}</h4>
                          <ul className="mt-3 space-y-2 text-[0.97rem] leading-relaxed text-parchment/70">
                            {s.points.map((p) => (
                              <li key={p}>{p}</li>
                            ))}
                          </ul>
                        </Reveal>
                      </li>
                    ))}
                  </ol>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Accommodation" title="Where you'll stay" intro="Premium, well-located properties close to Kashi Vishwanath and the ghats — Dev Residency or similar." />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {hotels.map((h, i) => (
              <Reveal key={h.name} delay={i * 0.08}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-sand">
                  <Image src={h.image} alt={h.name} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover" />
                </div>
                <h3 className="mt-5 font-display text-2xl">{h.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{h.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand/60 py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="Tour inclusions"
              title={
                <>
                  Everything included. <em className="text-sindoor">Nothing hidden.</em>
                </>
              }
            />
            <ul className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {inclusions.map((inc) => (
                <li key={inc.title} className="flex gap-4">
                  <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-sindoor text-white">
                    <Check className="size-4" />
                  </span>
                  <span>
                    <span className="block font-semibold">{inc.title}</span>
                    <span className="text-sm text-ink-soft">{inc.body}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <Reveal className="self-start rounded-2xl border border-ink/10 bg-card p-8">
            <h3 className="font-display text-2xl">Exclusions</h3>
            <ul className="mt-5 space-y-3 text-ink-soft">
              {exclusions.map((e) => (
                <li key={e} className="flex gap-3">
                  <X className="mt-0.5 size-4 shrink-0 text-ink-muted" />
                  {e}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section id="reserve" className="scroll-mt-20 relative isolate overflow-hidden bg-ganga-deep py-24 text-parchment md:py-32">
        <Image src="/images/sunrise-boats.jpg" alt="" fill sizes="100vw" className="-z-20 object-cover opacity-30" />
        <div className="container-x grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <p className="eyebrow text-marigold">Reserve your place</p>
            <h2 className="mt-4 font-display text-5xl leading-tight md:text-6xl">
              Ready for the <em className="text-marigold">real Banaras?</em>
            </h2>
            <p className="mt-6 max-w-lg text-lg text-parchment/75">
              WhatsApp the word <strong className="text-white">“Solo”</strong> and we confirm your
              dates within 2 hours. No forms, no payment upfront — just a conversation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={whatsappLink(soloMessage)} external variant="light">
                <WhatsAppIcon className="size-4 text-[#1a9e4b]" /> WhatsApp “Solo”
              </ButtonLink>
              <ButtonLink href={`tel:+${site.whatsapp}`} variant="outline-light">
                Call {site.phoneDisplay}
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="rounded-2xl bg-parchment p-7 text-ink shadow-2xl md:p-9">
            <p className="eyebrow text-sindoor">Upcoming departures</p>
            <ul className="mt-5 divide-y divide-ink/10">
              {solo.departures.map((d) => (
                <li key={d.dates} className="flex items-center justify-between gap-4 py-4">
                  <span>
                    <span className="block font-display text-2xl">{d.dates}</span>
                    <span className="text-sm text-ink-muted">Friday → Sunday</span>
                  </span>
                  <span className="rounded-full bg-marigold-soft px-3 py-1 text-xs font-semibold text-sindoor-deep">
                    {d.spots} spots left
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-end justify-between border-t border-ink/10 pt-5">
              <span className="text-sm text-ink-muted">{solo.priceNote}</span>
              <span className="font-display text-3xl">{solo.price}</span>
            </div>
            <ButtonLink href={whatsappLink(`${soloMessage} Dates: ${solo.departures[0].dates}`)} external className="mt-6 w-full">
              Book this departure
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow={`${site.rating.score} ★ · based on ${site.rating.count} reviews`}
            title="What travellers say"
          />
        </div>
        <div className="mt-12">
          <Testimonials />
        </div>
      </section>
    </>
  );
}
