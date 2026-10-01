import { ArrowRight, Check } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ButtonLink, CtaBand, PageHero, SectionHeading } from "@/components/site/blocks";
import { Reveal } from "@/components/site/reveal";
import { circuits, durations, tiers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Varanasi Packages",
  description:
    "Classic, Premium and Luxury Varanasi tour packages from 1 to 7 days, plus the Spiritual Triangle — Kashi, Ayodhya and Prayagraj.",
};

export default function PackagesPage() {
  return (
    <>
      <PageHero
        image="/images/temple-tree.jpg"
        position="50% 40%"
        eyebrow="Varanasi packages"
        deva="यात्रा"
        title={
          <>
            Experience the soul of Varanasi, <em className="text-marigold">exactly how you want to.</em>
          </>
        }
        intro="Choose a style, choose your days — or let us shape something entirely your own. Every package includes a Kashi companion who knows the city's stories, not just its sights."
      />

      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading index="01" eyebrow="By experience" title="Three ways to travel" />
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {tiers.map((t, i) => (
              <Reveal key={t.id} delay={i * 0.08} className="h-full">
                <article
                  className={`flex h-full flex-col overflow-hidden rounded-[1.5rem] border ${
                    t.id === "premium"
                      ? "border-sindoor bg-card shadow-[0_30px_60px_-30px_rgba(178,58,30,0.45)]"
                      : "border-ink/10 bg-card"
                  }`}
                >
                  <div className="relative aspect-[16/11]">
                    <Image src={t.image} alt="" fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover" />
                    {t.id === "premium" ? (
                      <span className="absolute top-4 left-4 rounded-full bg-sindoor px-3 py-1 text-xs font-semibold text-white">
                        Most loved
                      </span>
                    ) : null}
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <p className="eyebrow text-ink-muted">1 – 7 days</p>
                    <h2 className="mt-2 font-display text-4xl">{t.name}</h2>
                    <p className="mt-2 text-ink-soft">Best for {t.bestFor.charAt(0).toLowerCase() + t.bestFor.slice(1)}.</p>
                    <ul className="mt-6 space-y-3 border-t border-ink/10 pt-6 text-[0.95rem]">
                      {t.features.map((f) => (
                        <li key={f} className="flex gap-3">
                          <Check className="mt-0.5 size-4 shrink-0 text-sindoor" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-8">
                      <ButtonLink
                        href={`/plan?tier=${t.id}`}
                        variant={t.id === "premium" ? "primary" : "outline"}
                        className="w-full"
                      >
                        {t.id === "luxury" ? "Enquire now" : "Book now"}
                      </ButtonLink>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand/60 py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            index="02"
            eyebrow="By duration"
            title="How long would you like to stay?"
            intro="Pick a duration and style to start planning. We'll send a detailed day-by-day itinerary and quote on WhatsApp."
          />
          <Reveal className="mt-12 overflow-x-auto rounded-2xl border border-ink/10 bg-card">
            <table className="w-full min-w-[640px] text-left">
              <caption className="sr-only">Packages by duration and style</caption>
              <thead>
                <tr className="border-b border-ink/10 text-sm">
                  <th scope="col" className="px-6 py-5 font-semibold">Duration</th>
                  {tiers.map((t) => (
                    <th key={t.id} scope="col" className="px-6 py-5 font-semibold">
                      {t.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {durations.map((d) => (
                  <tr key={d.nights} className="border-b border-ink/10 last:border-0">
                    <th scope="row" className="px-6 py-5">
                      <span className="font-display text-xl">{d.label}</span>
                      <span className="ml-2 text-xs text-ink-muted">{d.code}</span>
                    </th>
                    {tiers.map((t) => (
                      <td key={t.id} className="px-6 py-5">
                        <Link
                          href={`/plan?nights=${d.nights}&tier=${t.id}`}
                          className="group inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-sm font-medium transition-colors hover:border-sindoor hover:bg-sindoor hover:text-white"
                        >
                          {t.name} {d.code}
                          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      <section id="circuits" className="scroll-mt-24 py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            index="03"
            eyebrow="Pilgrim circuits"
            title={
              <>
                The <em className="text-sindoor">Spiritual Triangle</em>
              </>
            }
            intro="Extend your Kashi journey to Ayodhya and Prayagraj, with transfers, stays and darshan arranged end to end."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {circuits.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.08}>
                <div className="arch relative aspect-[3/4] bg-night">
                  <Image src={c.image} alt="" fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover" />
                </div>
                <p className="eyebrow mt-6 text-sindoor">{c.route}</p>
                <h3 className="mt-2 font-display text-3xl">{c.name}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{c.body}</p>
                <Link
                  href={`/enquire?interest=${encodeURIComponent(c.route)}`}
                  className="mt-4 inline-flex items-center gap-2 font-semibold text-sindoor"
                >
                  <span className="link-underline">Enquire about this circuit</span>
                  <ArrowRight className="size-4" />
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20 flex flex-col items-start justify-between gap-6 rounded-[1.5rem] bg-ink p-8 text-parchment md:flex-row md:items-center md:p-12">
            <div>
              <p className="eyebrow text-marigold">Self-planning</p>
              <h3 className="mt-3 font-display text-3xl md:text-4xl">Craft your journey on your own.</h3>
              <p className="mt-2 text-parchment/65">
                Pick your days, stay and experiences — we&apos;ll turn it into an itinerary.
              </p>
            </div>
            <ButtonLink href="/plan" variant="light">
              Start planning <ArrowRight className="size-4" />
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
