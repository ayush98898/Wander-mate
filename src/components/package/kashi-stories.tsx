import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { readTime, type Post } from "@/lib/journal";

/**
 * Stories from the Journal, laid out like a magazine spread: one lead story with a
 * tall photograph, and two more stacked beside it. No cards — photographs, type and
 * hairlines only.
 */
export function KashiStories({ stories }: { stories: Post[] }) {
  const [lead, ...rest] = stories;
  if (!lead) return null;

  return (
    <div className="grid gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-16">
      <Link href={`/journal/${lead.slug}`} className="group block">
        <div className="relative aspect-[4/5] overflow-hidden bg-ink sm:aspect-[5/4] lg:aspect-[4/5]">
          <Image
            src={lead.image}
            alt={lead.imageAlt}
            fill
            sizes="(min-width:1024px) 55vw, 100vw"
            style={{ objectPosition: lead.imagePosition }}
            className="object-cover transition-transform duration-[1.6s] ease-[var(--ease-expo)] group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-bone md:p-10">
            <p className="label text-bone/75">
              {lead.category} · {readTime(lead)}
            </p>
            <h3 className="display mt-4 max-w-xl text-[clamp(2.1rem,4vw,3.6rem)] leading-[1.02] text-balance">{lead.title}</h3>
            <p className="mt-4 hidden max-w-lg leading-relaxed text-bone/80 sm:block">{lead.excerpt}</p>
            <span className="label mt-6 inline-flex items-center gap-3 border-b border-bone/40 pb-1 transition-colors group-hover:border-bone">
              Read the story <ArrowUpRight aria-hidden className="size-4" />
            </span>
          </div>
        </div>
      </Link>

      <ol className="flex flex-col">
        {rest.map((p, n) => (
          <li key={p.slug} className="border-t border-ink/15 last:border-b">
            <Link href={`/journal/${p.slug}`} className="group grid grid-cols-[minmax(0,1fr)_7.5rem] items-start gap-5 py-7 sm:grid-cols-[minmax(0,1fr)_11rem] lg:grid-cols-1 lg:gap-6 lg:py-8">
              <div className="relative aspect-[4/3] overflow-hidden bg-ink max-lg:order-2 lg:aspect-[16/9]">
                <Image
                  src={p.image}
                  alt={p.imageAlt}
                  fill
                  sizes="(min-width:1024px) 38vw, 11rem"
                  style={{ objectPosition: p.imagePosition }}
                  className="object-cover transition-transform duration-[1.6s] ease-[var(--ease-expo)] group-hover:scale-[1.05]"
                />
              </div>
              <div className="min-w-0">
                <p className="label text-ochre">
                  <span className="text-smoke tabular-nums">{String(n + 2).padStart(2, "0")}</span>
                  <span className="mx-2 text-ink/25">/</span>
                  {p.category}
                </p>
                <h3 className="display mt-3 text-[1.75rem] leading-[1.08] text-balance decoration-ochre/60 decoration-1 underline-offset-[6px] group-hover:underline md:text-3xl">
                  {p.title}
                </h3>
                <p className="label mt-3 text-smoke">{readTime(p)}</p>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
