import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ReadingProgress } from "@/components/journal/reading-progress";
import { getDestination } from "@/lib/destinations";
import { getPost, posts, readTime, type Block } from "@/lib/journal";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt, openGraph: { images: [post.image] } };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const dest = post.destination ? getDestination(post.destination) : undefined;
  // Related: same category first, then same region, never itself.
  const related = [
    ...posts.filter((p) => p.slug !== slug && p.category === post.category),
    ...posts.filter((p) => p.slug !== slug && p.category !== post.category && p.region === post.region),
    ...posts.filter((p) => p.slug !== slug && p.region !== post.region),
  ].slice(0, 3);
  const firstP = post.body.findIndex((b) => b.t === "p");

  return (
    <>
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
            {dest ? (
              <Link href={`/destinations/${dest.slug}`} className="group label mt-6 inline-flex items-center gap-2 text-ochre">
                <span className="ul">Travel to {dest.name}</span>
                <ArrowUpRight aria-hidden className="size-4" />
              </Link>
            ) : null}
          </aside>

          <div className="min-w-0">
            <p className="display max-w-[34ch] text-[clamp(1.6rem,2.6vw,2.2rem)] leading-[1.3] text-ink">{post.excerpt}</p>
            <div className="mt-12 max-w-[68ch] border-t border-ink/15 pt-12">
              {post.body.map((b, i) => (
                <BlockView key={i} b={b} first={i === firstP} />
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* ---------- Travel there ---------- */}
      {dest ? (
        <section className="pb-24 md:pb-32">
          <div className="wrap">
            <Link href={`/destinations/${dest.slug}`} className="group grid overflow-hidden bg-ink text-bone md:grid-cols-2">
              <div className="relative aspect-[4/3] md:aspect-auto">
                {dest.image ? (
                  <Image
                    src={dest.image}
                    alt={`${dest.name}, ${dest.country}`}
                    fill
                    sizes="(min-width:768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1.4s] ease-[var(--ease-expo)] group-hover:scale-[1.04]"
                  />
                ) : null}
              </div>
              <div className="flex flex-col justify-between gap-10 p-8 md:p-14">
                <div>
                  <p className="label text-bone/60">Travel there with WanderMate · {dest.status}</p>
                  <p className="display mt-6 text-5xl md:text-6xl">{dest.name}</p>
                  <p className="mt-5 max-w-md leading-relaxed text-bone/75">{dest.line}</p>
                </div>
                <ul className="border-t border-bone/20">
                  {dest.trips.slice(0, 3).map((t) => (
                    <li key={t.slug} className="flex items-baseline justify-between gap-4 border-b border-bone/15 py-3">
                      <span className="display text-2xl">{t.name}</span>
                      <span className="label shrink-0 text-bone/55">{t.duration}</span>
                    </li>
                  ))}
                </ul>
                <span className="label inline-flex items-center gap-2 text-ochre-lit">
                  <span className="ul">See the journeys</span> <ArrowUpRight aria-hidden className="size-4" />
                </span>
              </div>
            </Link>
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
      return <h2 className="display mt-14 mb-6 text-[2.2rem] leading-[1.1] text-ink md:text-[2.6rem]">{b.text}</h2>;
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
