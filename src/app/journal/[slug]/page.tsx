import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CtaBand, PageHero } from "@/components/site/blocks";
import { posts } from "@/lib/journal";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { images: [post.image] },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const others = posts.filter((p) => p.slug !== slug);

  return (
    <>
      <PageHero image={post.image} eyebrow={`Travel journal · ${post.readTime}`} title={post.title} />
      <article className="py-20 md:py-28">
        <div className="container-x max-w-3xl">
          <div className="space-y-6 text-lg leading-relaxed text-ink-soft md:text-xl">
            {post.body.map((para, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "font-display text-2xl leading-snug text-ink md:text-[1.75rem]"
                    : undefined
                }
              >
                {para}
              </p>
            ))}
          </div>
          <div className="ornament my-16 text-marigold">✦</div>
          <p className="eyebrow text-ink-muted">Keep reading</p>
          <ul className="mt-4 divide-y divide-ink/10 border-y border-ink/10">
            {others.map((p) => (
              <li key={p.slug}>
                <Link href={`/journal/${p.slug}`} className="flex items-center justify-between gap-6 py-5 font-display text-xl hover:text-sindoor">
                  {p.title} <span aria-hidden>→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </article>
      <CtaBand />
    </>
  );
}
