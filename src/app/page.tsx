import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/site/reveal";
import { testimonials } from "@/lib/content";
import { getDestination } from "@/lib/destinations";

const kashiTrips = getDestination("kashi")!.trips.slice(0, 3);
const review = testimonials[0];

/** Quiet text link: tracked caps over a hairline. */
function TextLink({ href, children, light }: { href: string; children: React.ReactNode; light?: boolean }) {
  return (
    <Link
      href={href}
      className={`label inline-block border-b pb-1.5 transition-colors ${
        light ? "border-bone/60 hover:border-bone" : "border-ink/40 hover:border-ink"
      }`}
    >
      {children}
    </Link>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-svh items-center justify-center overflow-hidden bg-ink text-center text-bone">
        <Image
          src="/images/hero-ghats.jpg"
          alt="The ghats of Varanasi from above, boats gathered on the Ganga"
          fill
          priority
          sizes="100vw"
          className="animate-kenburns -z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-ink/40" />
        <div className="wrap flex flex-col items-center gap-8 pt-16">
          <p className="label text-bone/85">Heritage &amp; cultural journeys</p>
          <h1 className="display max-w-4xl text-[clamp(3.25rem,9vw,8rem)]">Feel the centuries</h1>
          <TextLink href="/plan" light>
            Start planning
          </TextLink>
        </div>
      </section>

      {/* Intro */}
      <section className="py-28 md:py-40">
        <Reveal className="wrap mx-auto flex max-w-3xl flex-col items-center gap-10 text-center">
          <p className="display text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.2]">
            Private journeys to the places where India&rsquo;s stories still live, led by the people who keep them.
          </p>
          <TextLink href="/about">Our approach</TextLink>
        </Reveal>
      </section>

      {/* Journeys */}
      <section className="pb-28 md:pb-40">
        <div className="wrap">
          <div className="mb-10 flex items-baseline justify-between gap-6 md:mb-14">
            <h2 className="display text-[clamp(2.25rem,4.5vw,3.75rem)]">Journeys in Kashi</h2>
            <TextLink href="/journeys">View all</TextLink>
          </div>
          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {kashiTrips.map((t, i) => (
              <Reveal key={t.slug} delay={i * 0.08}>
                <Link href={t.href ?? `/plan?trip=${t.slug}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-ink">
                    <Image
                      src={t.image!}
                      alt=""
                      fill
                      sizes="(min-width:768px) 31vw, 100vw"
                      className="object-cover transition-transform duration-[1.4s] ease-[var(--ease-expo)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <h3 className="display mt-6 text-[2rem]">{t.name}</h3>
                  <p className="label mt-3 text-smoke">
                    {t.duration} · {t.format}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond Kashi */}
      <section className="relative isolate flex min-h-[85svh] items-center justify-center overflow-hidden text-center text-bone">
        <Image src="/images/ghats-lamps.jpg" alt="" fill sizes="100vw" className="-z-20 object-cover" />
        <div className="absolute inset-0 -z-10 bg-ink/45" />
        <Reveal className="wrap flex max-w-4xl flex-col items-center gap-8">
          <p className="label text-bone/85">Beyond Kashi</p>
          <p className="display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.08]">
            From Braj and Rajputana to Kathmandu, Angkor and Bali
          </p>
          <TextLink href="/destinations" light>
            Explore destinations
          </TextLink>
        </Reveal>
      </section>

      {/* One voice */}
      <section className="py-28 md:py-40">
        <Reveal className="wrap mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
          <blockquote className="display text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.25] italic">
            &ldquo;{review.quote}&rdquo;
          </blockquote>
          <p className="label text-smoke">
            {review.name}, {review.place}
          </p>
        </Reveal>
      </section>
    </>
  );
}
