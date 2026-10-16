import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { JournalBrowser } from "@/components/journal/journal-browser";
import { Reveal } from "@/components/site/reveal";
import { Btn } from "@/components/site/ui";
import { glossary, livePosts, readTime } from "@/lib/journal";
import { abs, breadcrumbs, JsonLd, ORG_ID, pageMeta } from "@/lib/seo";

const meta = pageMeta({
  title: "The Journal — Heritage, Rituals & Festivals",
  description:
    "Stories of heritage, culture and tradition from India and the world — from the Ganga Aarti and Dev Deepawali to the gates of Fushimi Inari.",
  path: "/journal",
});
export const metadata: Metadata = {
  ...meta,
  alternates: { ...meta.alternates, types: { "application/rss+xml": [{ url: "/journal/feed.xml", title: "The WanderMate Journal" }] } },
};

// New guides go live on their publication date; refresh hourly so they appear without a deploy.
export const revalidate = 3600;

export default function JournalPage() {
  const posts = livePosts();
  const featured = posts[0];
  const places = new Set(posts.map((p) => p.place)).size;
  const cards = posts.slice(1).map((p) => ({
  slug: p.slug,
  title: p.title,
  excerpt: p.excerpt,
  category: p.category,
  region: p.region,
  place: p.place,
  image: p.image,
  imageAlt: p.imageAlt,
  imagePosition: p.imagePosition,
  read: readTime(p),
  }));
  const blog = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "The WanderMate Journal",
    url: abs("/journal"),
    publisher: { "@id": ORG_ID },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: abs(`/journal/${p.slug}`),
      image: abs(p.image),
      ...(p.published && { datePublished: p.published }),
    })),
  };
  return (
    <>
      <JsonLd data={[blog, breadcrumbs([["Journal", "/journal"]])]} />
      {/* ---------- Featured story ---------- */}
      <section className="relative isolate flex min-h-svh flex-col justify-end overflow-hidden text-bone">
        <Image
          src={featured.image}
          alt={featured.imageAlt}
          fill
          priority
          sizes="100vw"
          style={{ objectPosition: featured.imagePosition }}
          className="animate-kenburns -z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/25 to-black/40" />
        <div className="wrap pt-36 pb-12 md:pb-16">
          <p className="label text-bone/75">
            The Journal · Featured · {featured.category} · {featured.place}
          </p>
          <h1 className="display mt-6 max-w-4xl text-[clamp(3rem,8vw,7.5rem)] leading-[0.95]">{featured.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-bone/85">{featured.excerpt}</p>
          <Link
            href={`/journal/${featured.slug}`}
            className="group label mt-10 inline-flex min-h-12 items-center gap-6 bg-bone px-6 text-ink transition-colors hover:bg-ochre-lit"
          >
            Read the story · {readTime(featured)}
            <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      {/* ---------- Masthead ---------- */}
      <section className="pt-24 md:pt-32">
        <div className="wrap">
          <Reveal className="grid gap-10 border-b border-ink pb-12 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-16">
            <div>
              <p className="label text-ochre">WanderMate · Est. Kashi</p>
              <h2 className="display mt-6 text-[clamp(4.5rem,13vw,11rem)] leading-[0.85]">
                The <em>Journal</em>
              </h2>
            </div>
            <div>
              <p className="text-xl leading-relaxed text-ink-2">
                Heritage, culture and the traditions of the world — introduced by the people who travel them. Read about a
                place before you go, or instead of going. Either is a beginning.
              </p>
              <dl className="mt-8 grid grid-cols-3 border-t border-ink/15 pt-5">
                {[
                  [posts.length, "stories"],
                  [places, "places"],
                  ["2", "regions"],
                ].map(([n, l]) => (
                  <div key={String(l)} className="flex flex-col-reverse">
                    <dt className="label mt-1 text-smoke">{l}</dt>
                    <dd className="display text-4xl text-ochre">{n}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- All stories ---------- */}
      <section className="pt-12 pb-24 md:pb-36">
        <div className="wrap">
          <JournalBrowser cards={cards} />
        </div>
      </section>

      {/* ---------- Words to know ---------- */}
      <section className="bg-ink py-24 text-bone md:py-36">
        <div className="wrap">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="label text-bone/60">Words to know</p>
              <h2 className="display mt-6 max-w-2xl text-5xl md:text-7xl">
                A small glossary of <em>the sacred</em>
              </h2>
            </div>
            <p className="max-w-sm text-bone/70">
              Words you will meet in our stories and on the road, each from the tradition that gave it.
            </p>
          </Reveal>
          <dl className="mt-16 grid gap-px bg-bone/15 sm:grid-cols-2 lg:grid-cols-4">
            {glossary.map((g, i) => (
              <Reveal key={g.word} delay={(i % 4) * 0.05} className="bg-ink p-7 md:p-8">
                <dt>
                  <span className="display block text-4xl text-ochre-lit">{g.word}</span>
                  <span className="label mt-2 block text-bone/50">{g.lang}</span>
                </dt>
                <dd className="mt-5 leading-relaxed text-bone/80">{g.meaning}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------- Read, then travel ---------- */}
      <section className="py-24 md:py-32">
        <Reveal className="wrap flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <p className="display max-w-3xl text-5xl leading-[1.05] md:text-6xl">
            Read it here. Then come and <em>stand in it.</em>
          </p>
          <Btn href="/destinations">Explore destinations</Btn>
        </Reveal>
      </section>
    </>
  );
}
