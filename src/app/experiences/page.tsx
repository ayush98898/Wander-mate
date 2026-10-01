import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CtaBand, PageHero } from "@/components/site/blocks";
import { Reveal } from "@/components/site/reveal";
import { experiences } from "@/lib/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Experiences in Varanasi",
  description:
    "Ganga Aarti from premium seats, private sunrise boat rides, Madanpura silk walks, food walks, temple circuits with Sugam Darshan, and soul-portrait photography in Varanasi.",
};

export default function ExperiencesPage() {
  return (
    <>
      <PageHero
        image="/images/aarti-priest.jpg"
        eyebrow="Enhance your trip"
        deva="अनुभव"
        title={
          <>
            The best experiences <em className="text-marigold">ever</em> — off the main paths.
          </>
        }
        intro="Add any of these to a package or your own plan. Each one is led by someone who knows its story — the vendor, the weaver, the priest, the boatman."
      />

      <section className="py-24 md:py-32">
        <div className="container-x space-y-24 md:space-y-36">
          {experiences.map((e, i) => (
            <article
              key={e.slug}
              id={e.slug}
              className="grid scroll-mt-28 items-center gap-10 md:grid-cols-2 md:gap-20"
            >
              <Reveal className={cn("relative", i % 2 === 1 && "md:order-2")}>
                <div className="arch relative mx-auto aspect-[4/5] max-w-md bg-night">
                  <Image
                    src={e.image}
                    alt={e.title}
                    fill
                    sizes="(min-width:768px) 40vw, 90vw"
                    className="object-cover"
                  />
                </div>
                <span
                  aria-hidden
                  className={cn(
                    "absolute -bottom-6 font-display text-[7rem] leading-none text-marigold/30 italic md:text-[9rem]",
                    i % 2 === 1 ? "-left-2" : "-right-2",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="eyebrow text-sindoor">{e.kicker}</p>
                <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">{e.title}</h2>
                <p className="mt-5 text-lg leading-relaxed text-ink-soft">{e.body}</p>
                <Link
                  href={`/plan?add=${e.slug}`}
                  className="mt-7 inline-flex items-center gap-2 font-semibold text-sindoor"
                >
                  <span className="link-underline">Add to my trip</span>
                  <ArrowRight className="size-4" />
                </Link>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      <CtaBand title="Let's design your Kashi" body="Tell us what moves you — temples, food, crafts, photography or the river — and we'll weave it into one unhurried journey. Book directly for 15% off." />
    </>
  );
}
