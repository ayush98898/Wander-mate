import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/site/blocks";
import { Reveal } from "@/components/site/reveal";
import { posts } from "@/lib/journal";

export const metadata: Metadata = {
  title: "Travel Journal",
  description: "Stories, guides and reflections on travelling through Varanasi from the WanderMate team.",
};

export default function JournalPage() {
  const [lead, ...rest] = posts;
  return (
    <>
      <PageHero
        image="/images/ghats-panorama.jpg"
        eyebrow="Travel journal"
        deva="कथा"
        title={
          <>
            Stories from <em className="text-marigold">the ghats.</em>
          </>
        }
      />
      <section className="py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <Link href={`/journal/${lead.slug}`} className="group grid gap-8 md:grid-cols-2 md:items-center md:gap-14">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-sand">
                <Image src={lead.image} alt="" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div>
                <p className="eyebrow text-sindoor">Featured · {lead.readTime}</p>
                <h2 className="mt-3 font-display text-4xl leading-tight group-hover:text-sindoor md:text-5xl">{lead.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-ink-soft">{lead.excerpt}</p>
                <span className="mt-6 inline-block font-semibold text-sindoor">Read the story →</span>
              </div>
            </Link>
          </Reveal>

          <div className="mt-20 grid gap-10 md:grid-cols-2">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link href={`/journal/${p.slug}`} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-sand">
                    <Image src={p.image} alt="" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <p className="eyebrow mt-5 text-ink-muted">{p.readTime}</p>
                  <h3 className="mt-2 font-display text-3xl leading-snug group-hover:text-sindoor">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">{p.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
