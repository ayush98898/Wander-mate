import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ReadingProgress } from "@/components/journal/reading-progress";
import { allTrips, getDestination, tripHref, type TripWithPlace } from "@/lib/destinations";
import { formatDate, getPost, headingId, isLive, livePosts, posts, readTime, wordCount, type Block } from "@/lib/journal";
import { abs, breadcrumbs, JsonLd, ORG_ID, pageMeta } from "@/lib/seo";

// Guides written ahead go live on their publication date; pages refresh hourly.
export const revalidate = 3600;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post || !isLive(post)) return {};
  return {
    ...pageMeta({
      title: post.seo?.title ?? post.title,
      description: post.seo?.description ?? post.excerpt,
      path: `/journal/${post.slug}`,
      type: "article",
    }),
    ...(post.published && {
      openGraph: {
        type: "article",
        title: post.seo?.title ?? post.title,
        description: post.seo?.description ?? post.excerpt,
        url: `/journal/${post.slug}`,
        publishedTime: post.published,
        ...(post.updated && { modifiedTime: post.updated }),
        section: post.category,
      },
    }),
    keywords: post.seo?.keywords,
    // Short notes stay out of search until they're expanded; links on them are still followed.
    ...(post.index === false && { robots: { index: false, follow: true } }),
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post || !isLive(post)) notFound();

  const dest = post.destination ? getDestination(post.destination) : undefined;
  // Related: the same place first, then the same category, then the same region — full stories only.
  const others = livePosts().filter((p) => p.slug !== slug && p.index !== false);
  const related = [
    ...others.filter((p) => p.place === post.place),
    ...others.filter((p) => p.place !== post.place && p.category === post.category),
    ...others.filter((p) => p.place !== post.place && p.category !== post.category && p.region === post.region),
    ...others.filter((p) => p.region !== post.region),
  ].slice(0, 3);
  // Tours this story belongs to: the ones named on the post, else the destination's first three.
  const tourSlugs = post.tours?.length ? post.tours : (dest?.trips ?? []).slice(0, 3).map((t) => t.slug);
  const tours = tourSlugs.map((t) => allTrips.find((x) => x.slug === t)).filter((t): t is TripWithPlace => Boolean(t));
  const headings = post.body.filter((b): b is Extract<Block, { t: "h" }> => b.t === "h");
  const firstP = post.body.findIndex((b) => b.t === "p");

  const url = abs(`/journal/${post.slug}`);
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${url}#article`,
      headline: post.title,
      description: post.seo?.description ?? post.excerpt,
      image: abs(post.image),
      url,
      mainEntityOfPage: url,
      isPartOf: { "@type": "Blog", name: "The WanderMate Journal", url: abs("/journal") },
      articleSection: post.category,
      ...(post.seo && { keywords: post.seo.keywords.join(", ") }),
      wordCount: wordCount(post),
      timeRequired: `PT${Math.max(1, Math.ceil(wordCount(post) / 200))}M`,
      about: { "@type": "Place", name: post.place },
      ...(post.published && { datePublished: post.published, dateModified: post.updated ?? post.published }),
      ...(post.answer && { abstract: post.answer }),
      ...(post.sources?.length && { citation: post.sources.map((c) => ({ "@type": "CreativeWork", name: c.name, url: c.url })) }),
      author: post.author ? { "@type": "Person", name: post.author, worksFor: { "@id": ORG_ID } } : { "@id": ORG_ID },
      publisher: { "@id": ORG_ID },
      inLanguage: "en-IN",
    },
    ...(post.faqs?.length
      ? [
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: post.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          },
        ]
      : []),
    breadcrumbs([
      ["Journal", "/journal"],
      [post.title, `/journal/${post.slug}`],
    ]),
  ];

  return (
    <>
      <JsonLd data={schema} />
      <ReadingProgress />

      {/* ---------- Opening ---------- */}
      <header className="relative isolate flex min-h-[92svh] flex-col justify-end overflow-hidden text-bone">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          priority
          sizes="100vw"
          style={{ objectPosition: post.imagePosition }}
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/30 to-black/40" />
        <div className="wrap pt-36 pb-12 md:pb-16">
          <p className="label flex flex-wrap gap-x-3 gap-y-1 text-bone/75">
            <Link href="/journal" className="ul">
              The Journal
            </Link>
            <span aria-hidden>·</span>
            <span>{post.category}</span>
            <span aria-hidden>·</span>
            <span>{post.place}</span>
            <span aria-hidden>·</span>
            <span>{readTime(post)}</span>
            {post.published ? (
              <>
                <span aria-hidden>·</span>
                <time dateTime={post.updated ?? post.published}>
                  {post.updated ? `Updated ${formatDate(post.updated)}` : formatDate(post.published)}
                </time>
              </>
            ) : null}
          </p>
          <h1 className="display mt-6 max-w-5xl text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.98]">{post.title}</h1>
        </div>
      </header>

      {/* ---------- Story ---------- */}
      <article className="py-20 md:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] lg:gap-20">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            {post.facts?.length ? (
              <div className="border-t-2 border-ink pt-5">
                <p className="label text-ochre">At a glance</p>
                <dl className="mt-4">
                  {post.facts.map((f) => (
                    <div key={f.k} className="border-b border-ink/12 py-3.5">
                      <dt className="label text-smoke">{f.k}</dt>
                      <dd className="mt-1.5 leading-snug text-ink">{f.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ) : null}
            {headings.length > 1 ? (
              <nav aria-label="In this story" className="mt-8 hidden border-t border-ink/15 pt-5 lg:block">
                <p className="label text-smoke">In this story</p>
                <ol className="mt-3 space-y-2">
                  {headings.map((h) => (
                    <li key={h.text}>
                      <a href={`#${headingId(h.text)}`} className="text-sm leading-snug text-ink-2 underline-offset-4 hover:text-ochre hover:underline">
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            ) : null}
            {dest ? (
              <Link href={`/destinations/${dest.slug}`} className="group label mt-6 inline-flex items-center gap-2 text-ochre">
                <span className="ul">Travel to {dest.name}</span>
                <ArrowUpRight aria-hidden className="size-4" />
              </Link>
            ) : null}
          </aside>

          <div className="min-w-0">
            <p className="display max-w-[34ch] text-[clamp(1.6rem,2.6vw,2.2rem)] leading-[1.3] text-ink">{post.excerpt}</p>
            {post.answer ? (
              <div className="mt-10 max-w-[68ch] border-l-2 border-ochre bg-paper px-6 py-6 md:px-8">
                <p className="label text-ochre">The short answer</p>
                <p className="mt-3 text-lg leading-relaxed text-ink">{post.answer}</p>
                {post.author ? <p className="label mt-4 text-smoke">By {post.author}, WanderMate · Varanasi</p> : null}
              </div>
            ) : null}
            <div className="mt-12 max-w-[68ch] border-t border-ink/15 pt-12">
              {post.body.map((b, i) => (
                <BlockView key={i} b={b} first={i === firstP} />
              ))}
            </div>
            {post.faqs?.length ? (
              <section aria-labelledby="faqs" className="mt-16 max-w-[68ch] border-t border-ink/15 pt-12">
                <h2 id="faqs" className="display scroll-mt-28 text-[clamp(2rem,3.2vw,2.75rem)] leading-[1.1]">
                  Questions people <em>ask</em>
                </h2>
                <dl className="mt-8">
                  {post.faqs.map((f) => (
                    <div key={f.q} className="border-b border-ink/12 py-6">
                      <dt className="display text-2xl leading-snug">{f.q}</dt>
                      <dd className="mt-3 leading-relaxed text-ink-2">{f.a}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            ) : null}
            {post.sources?.length ? (
              <section aria-label="Sources" className="mt-12 max-w-[68ch]">
                <p className="label text-smoke">Sources</p>
                <ul className="mt-3 space-y-1.5 text-sm">
                  {post.sources.map((c) => (
                    <li key={c.url}>
                      <a href={c.url} target="_blank" rel="noopener" className="text-ink-2 underline underline-offset-4 hover:text-ochre">
                        {c.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>
        </div>
      </article>

      {/* ---------- Travel there ---------- */}
      {dest ? (
        <section className="pb-24 md:pb-32">
          <div className="wrap">
            <div className="grid overflow-hidden bg-ink text-bone md:grid-cols-2">
              <Link href={`/destinations/${dest.slug}`} className="group relative block aspect-[4/3] overflow-hidden md:aspect-auto" aria-label={`${dest.name}, ${dest.country}`}>
                {dest.image ? (
                  <Image
                    src={dest.image}
                    alt={`${dest.name}, ${dest.country}`}
                    fill
                    sizes="(min-width:768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1.4s] ease-[var(--ease-expo)] group-hover:scale-[1.04]"
                  />
                ) : null}
              </Link>
              <div className="flex flex-col justify-between gap-10 p-8 md:p-14">
                <div>
                  <p className="label text-bone/60">Travel there with WanderMate · {dest.status}</p>
                  <h2 className="display mt-6 text-5xl md:text-6xl">
                    <Link href={`/destinations/${dest.slug}`} className="ul">
                      {dest.name}
                    </Link>
                  </h2>
                  <p className="mt-5 max-w-md leading-relaxed text-bone/75">{dest.line}</p>
                </div>
                {tours.length ? (
                  <div>
                    <p className="label text-bone/55">Tours that include it</p>
                    <ul className="mt-3 border-t border-bone/20">
                      {tours.map((t) => (
                        <li key={t.slug} className="border-b border-bone/15">
                          <Link href={tripHref(t)} className="group flex items-baseline justify-between gap-4 py-3">
                            <span className="display text-2xl">
                              <span className="ul">{t.name}</span>
                            </span>
                            <span className="label shrink-0 text-bone/55">{t.duration}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                <Link href={`/destinations/${dest.slug}`} className="group label inline-flex items-center gap-2 text-ochre-lit">
                  <span className="ul">All journeys to {dest.name}</span> <ArrowUpRight aria-hidden className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* ---------- More from the Journal ---------- */}
      <section className="border-t border-ink/12 bg-paper py-24 md:py-32">
        <div className="wrap">
          <div className="flex items-baseline justify-between gap-6">
            <h2 className="display text-5xl md:text-6xl">
              More from <em>the Journal</em>
            </h2>
            <Link href="/journal" className="label ul shrink-0 text-ochre">
              All stories
            </Link>
          </div>
          <ul className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <li key={p.slug}>
                <Link href={`/journal/${p.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                    <Image
                      src={p.image}
                      alt={p.imageAlt}
                      fill
                      sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 100vw"
                      style={{ objectPosition: p.imagePosition }}
                      className="object-cover transition-transform duration-[1.4s] ease-[var(--ease-expo)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <p className="label mt-5 text-smoke">
                    <span className="text-ochre">{p.category}</span> · {p.place}
                  </p>
                  <h3 className="display mt-3 text-[1.9rem] leading-[1.08]">
                    <span className="ul">{p.title}</span>
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

function BlockView({ b, first }: { b: Block; first?: boolean }) {
  switch (b.t) {
    case "p":
      return (
        <p
          className={
            "mb-7 text-[1.15rem] leading-[1.75] text-ink-2 " +
            (first
              ? "first-letter:float-left first-letter:mt-1 first-letter:mr-3 first-letter:font-display first-letter:text-[4.6rem] first-letter:leading-[0.8] first-letter:text-ochre"
              : "")
          }
        >
          {b.text}
        </p>
      );
    case "h":
      return (
        <h2 id={headingId(b.text)} className="display mt-14 mb-6 scroll-mt-28 text-[2.2rem] leading-[1.1] text-ink md:text-[2.6rem]">
          {b.text}
        </h2>
      );
    case "quote":
      return (
        <figure className="my-14 border-l-2 border-ochre pl-6 md:-ml-8 md:pl-8">
          <blockquote className="display text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.2] text-ink italic">&ldquo;{b.text}&rdquo;</blockquote>
          {b.cite ? <figcaption className="label mt-5 text-smoke">{b.cite}</figcaption> : null}
        </figure>
      );
    case "img":
      return (
        <figure className="my-12">
          <div className="relative aspect-[3/2] overflow-hidden bg-ink">
            <Image src={b.src} alt={b.alt} fill sizes="(min-width:1024px) 60vw, 100vw" className="object-cover" />
          </div>
          {b.caption ? <figcaption className="mt-3 text-sm text-smoke">{b.caption}</figcaption> : null}
        </figure>
      );
  }
}
