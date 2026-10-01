import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { posts } from "@/lib/journal";

export const metadata: Metadata = {
  title: "Journal",
  description: "Stories, guides and reflections on travelling through Varanasi from the WanderMate team.",
};

export default function JournalPage() {
  return (
    <>
      <PageHero
        image="/images/ghats-panorama.jpg"
        label="The WanderMate journal"
        title={
          <>
            Notes from <em>the ghats.</em>
          </>
        }
      />
      <section className="py-24 md:py-32">
        <div className="wrap">
          <ol className="border-t border-ink/15">
            {posts.map((p, i) => (
              <Reveal key={p.slug}>
                <li className="border-b border-ink/15">
                  <Link href={`/journal/${p.slug}`} className="group grid gap-6 py-10 md:grid-cols-12 md:items-center md:py-14">
                    <span className="label text-smoke md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
                    <div className="md:col-span-6">
                      <h2 className="display text-4xl leading-[1] md:text-6xl">
                        <span className="ul">{p.title}</span>
                      </h2>
                      <p className="mt-4 max-w-xl text-smoke">{p.excerpt}</p>
                      <p className="label mt-4 text-smoke">{p.readTime}</p>
                    </div>
                    <div className="relative aspect-[4/3] overflow-hidden bg-stone md:col-span-4 md:col-start-9">
                      <Image
                        src={p.image}
                        alt=""
                        fill
                        sizes="(min-width:768px) 30vw, 100vw"
                        className="object-cover transition-transform duration-[1.4s] ease-[var(--ease-expo)] group-hover:scale-[1.05]"
                      />
                    </div>
                  </Link>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
