import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/site/page-hero";
import { Btn } from "@/components/site/ui";
import { posts } from "@/lib/journal";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt, openGraph: { images: [post.image] } };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();
  const others = posts.filter((p) => p.slug !== slug);

  return (
    <>
      <PageHero image={post.image} label={`Journal · ${post.readTime}`} title={post.title} />
      <article className="py-24 md:py-32">
        <div className="wrap max-w-3xl">
          <div className="space-y-7">
            {post.body.map((para, i) =>
              i === 0 ? (
                <p key={i} className="display text-3xl leading-[1.15] md:text-[2.6rem]">
                  {para}
                </p>
              ) : (
                <p key={i} className="text-lg leading-[1.75] text-ink-2 md:text-xl">
                  {para}
                </p>
              ),
            )}
          </div>
          <div className="mt-16 border-t border-ink/15 pt-10">
            <Btn href="/plan">Plan a journey</Btn>
          </div>
          <p className="label mt-20 text-smoke">Keep reading</p>
          <ul className="mt-4 border-t border-ink/15">
            {others.map((p) => (
              <li key={p.slug} className="border-b border-ink/15">
                <Link href={`/journal/${p.slug}`} className="group flex items-center justify-between gap-6 py-6">
                  <span className="display text-3xl">
                    <span className="ul">{p.title}</span>
                  </span>
                  <span aria-hidden>→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </>
  );
}
