import type { Metadata } from "next";
import Image from "next/image";

import { ButtonLink, CtaBand, PageHero, SectionHeading } from "@/components/site/blocks";
import { InstagramIcon } from "@/components/site/icons";
import { Reveal } from "@/components/site/reveal";
import { pillars, site, team } from "@/lib/content";

export const metadata: Metadata = {
  title: "About WanderMate",
  description:
    "WanderMate is a Varanasi travel company founded by Ayush Singh, Ritesh Singh and Vineet — bridging traditional local knowledge with modern convenience.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="/images/group.jpg"
        position="50% 35%"
        eyebrow="About us"
        deva="घुमक्कड़"
        title={
          <>
            Local roots, <em className="text-marigold">modern ease.</em>
          </>
        }
      />

      <section className="py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-24">
          <SectionHeading
            eyebrow="Our story"
            title={
              <>
                Travelling is more than visiting a destination.
              </>
            }
          />
          <Reveal delay={0.1} className="space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>
              WanderMate was built on a shared passion for exploration and a deep appreciation
              for the rich heritage of Varanasi. Founded by Ayush Singh, an IIT Delhi alumnus,
              alongside co-founders Ritesh Singh and Vineet, our team bridges the gap between
              traditional local knowledge and modern convenience.
            </p>
            <p>
              We understand that travelling is more than just visiting a destination; it&apos;s
              about immersing yourself in the stories, the culture, and the energy of the city.
            </p>
            <p>
              Since our founding, we have been dedicated to one singular mission: crafting
              remarkable, tailor-made journeys through the heart of Varanasi for families,
              couples, and private groups from across the globe.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand/60 py-24 md:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Meet our team" title="The people behind your journey" />
          <div className="mt-14 grid gap-12 md:grid-cols-3">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.08}>
                <div className="arch relative aspect-[3/4] bg-night">
                  <Image
                    src={m.image}
                    alt={`${m.name}, ${m.role}`}
                    fill
                    sizes="(min-width:768px) 33vw, 100vw"
                    className="object-cover"
                    style={{ objectPosition: m.position }}
                  />
                </div>
                <h3 className="mt-6 font-display text-3xl">{m.name}</h3>
                <p className="eyebrow mt-1 text-sindoor">{m.role}</p>
                <p className="mt-4 leading-relaxed text-ink-soft">{m.bio}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Why WanderMate?" title="We believe every traveller is unique." />
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <p className="font-display text-3xl text-sindoor italic">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 font-display text-2xl">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-16">
            <ButtonLink href={site.instagram} external variant="outline">
              <InstagramIcon className="size-4" /> Follow us on Instagram {site.instagramHandle}
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
