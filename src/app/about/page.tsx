import type { Metadata } from "next";
import Image from "next/image";

import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { SplitHeading } from "@/components/site/split-heading";
import { Btn, Eyebrow } from "@/components/site/ui";
import { approach, site, team, whyKashi } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "WanderMate was founded by Ayush Singh, Ritesh Singh and Vineet — bridging traditional local knowledge of Varanasi with modern convenience.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="/images/group.jpg"
        position="50% 35%"
        label="About WanderMate"
        title={
          <>
            Local roots, <em>modern ease.</em>
          </>
        }
      />

      <section className="py-24 md:py-36">
        <div className="wrap grid gap-14 md:grid-cols-12">
          <div className="md:col-span-7">
            <Eyebrow index="01" className="text-smoke">
              Our story
            </Eyebrow>
            <SplitHeading className="display mt-8 text-4xl leading-[1.02] md:text-6xl">
              Travelling is more than visiting a destination. It&apos;s immersing yourself in the
              stories, the culture and the energy of <em>a city.</em>
            </SplitHeading>
          </div>
          <Reveal className="space-y-5 text-lg leading-relaxed text-ink-2 md:col-span-4 md:col-start-9 md:self-end">
            <p>
              WanderMate was built on a shared passion for exploration and a deep appreciation for
              the heritage of Varanasi. Founded by Ayush Singh, an IIT Delhi alumnus, alongside
              co-founders Ritesh Singh and Vineet, the team bridges traditional local knowledge and
              modern convenience.
            </p>
            <p>
              Our mission is singular: remarkable, tailor-made journeys through the heart of
              Varanasi for families, couples and private groups from across the globe.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-24 text-bone md:py-32">
        <div className="wrap">
          <Eyebrow index="02" className="text-bone/55">
            Why Kashi
          </Eyebrow>
          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-20">
            {whyKashi.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="display text-3xl leading-[1.15] md:text-4xl">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="wrap">
          <Eyebrow index="03" className="text-smoke">
            The people
          </Eyebrow>
          <h2 className="display mt-6 text-5xl md:text-7xl">
            Meet the <em>team.</em>
          </h2>
          <div className="mt-16 space-y-20">
            {team.map((m, i) => (
              <Reveal key={m.name}>
                <article className="grid gap-8 border-t border-ink/15 pt-10 md:grid-cols-12">
                  <div className={`relative aspect-[4/5] overflow-hidden bg-stone md:col-span-4 ${i % 2 ? "md:order-2 md:col-start-9" : ""}`}>
                    <Image
                      src={m.image}
                      alt={`${m.name}, ${m.role}`}
                      fill
                      sizes="(min-width:768px) 33vw, 100vw"
                      className="object-cover"
                      style={{ objectPosition: m.position }}
                    />
                  </div>
                  <div className={`md:col-span-6 md:self-end ${i % 2 ? "md:col-start-2 md:row-start-1" : "md:col-start-6"}`}>
                    <p className="label text-ochre">{m.role}</p>
                    <h3 className="display mt-3 text-5xl md:text-6xl">{m.name}</h3>
                    <p className="mt-6 text-lg leading-relaxed text-ink-2">{m.bio}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-24 md:py-32">
        <div className="wrap">
          <Eyebrow index="04" className="text-smoke">
            How we work
          </Eyebrow>
          <div className="mt-12 grid gap-px bg-ink/12 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.06} className="bg-paper p-8">
                <p className="label text-smoke">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="display mt-8 text-3xl">{a.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-smoke">{a.body}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-14 flex flex-wrap gap-3">
            <Btn href="/plan">Plan a journey</Btn>
            <Btn href={site.instagram} variant="line">
              {site.instagramHandle}
            </Btn>
          </div>
        </div>
      </section>
    </>
  );
}
