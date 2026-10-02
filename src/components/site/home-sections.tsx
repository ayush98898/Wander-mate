import Link from "next/link";

import { Reveal } from "@/components/site/reveal";
import { festivals } from "@/lib/destinations";

/* ---------- Five ways to travel (blueprint §3: the product ladder) ---------- */

const ladder = [
  { name: "Experiences", what: "A single moment, sold alone or added to any trip.", eg: "Sunrise boat · Silk Walk · Ramayana Ballet", href: "/experiences" },
  { name: "City journeys", what: "One place, 2 to 5 nights, private or as a Solo Series.", eg: "Banaras Unfiltered · Udaipur", href: "/journeys" },
  { name: "Circuits", what: "Several places joined into one journey, 3 to 9 nights.", eg: "Spiritual Triangle · Kashi to Kathmandu", href: "/destinations" },
  { name: "Festivals", what: "Dated specials with a fixed number of places.", eg: "Dev Deepawali · Esala Perahera", href: "#festivals" },
  { name: "Bespoke", what: "Fully private, any length, any mix of the above.", eg: "Kashi in Private · Java to Bali", href: "/plan" },
];

export function WaysToTravel() {
  return (
    <ol className="grid border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-5">
      {ladder.map((l) => (
        <li key={l.name} className="border-b border-ink/15 lg:border-r lg:border-b-0 lg:last:border-r-0">
          <Link href={l.href} className="group flex h-full flex-col gap-6 py-8 pr-6 lg:min-h-[19rem] lg:px-6 lg:first:pl-0">
            <h3 className="display text-4xl">
              <span className="ul">{l.name}</span>
            </h3>
            <p className="text-sm leading-relaxed text-ink-2">{l.what}</p>
            <p className="label mt-auto text-ochre">{l.eg}</p>
          </Link>
        </li>
      ))}
    </ol>
  );
}

/* ---------- Festival calendar strip (blueprint §8) ---------- */

export function FestivalStrip() {
  return (
    <div className="no-scrollbar -mx-5 overflow-x-auto px-5 md:-mx-10 md:px-10">
      <ol className="flex min-w-max gap-0 border-t border-bone/20">
        {festivals.map((f) => (
          <li key={f.name} className="w-[15rem] shrink-0 border-r border-bone/15 md:w-[17rem]">
            <Link href={`/destinations/${f.dest}`} className="group block px-5 py-8 first:pl-0">
              <p className="label text-ochre-lit">{f.month}</p>
              <p className="display mt-6 text-3xl leading-[1.02] text-bone md:text-4xl">
                <span className="ul">{f.name}</span>
              </p>
              <p className="label mt-4 text-bone/50">{f.place}</p>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ---------- Tiers (blueprint §7) ---------- */

const tiers = [
  { name: "Solo Series", who: "Independent travellers on fixed dates", stay: "3-star, twin share", guide: "One guide for the group", from: "INR 8,999 · 2N" },
  { name: "Classic", who: "Families and backpackers on a budget", stay: "Clean hotels near the sites", guide: "Local guide for key sites", from: "On request" },
  { name: "Premium", who: "Families who want comfort", stay: "3-star premium stays", guide: "Expert guide throughout", from: "On request" },
  { name: "Private", who: "Travellers who want complete privacy", stay: "Heritage and luxury stays", guide: "Senior expert, private", from: "On request" },
];

export function Tiers() {
  return (
    <div className="grid gap-px bg-ink/12 sm:grid-cols-2 lg:grid-cols-4">
      {tiers.map((t, i) => (
        <Reveal key={t.name} delay={i * 0.06} className="flex flex-col bg-bone p-7">
          <h3 className="display text-4xl">{t.name}</h3>
          <p className="mt-3 text-sm text-ink-2">{t.who}</p>
          <dl className="mt-6 space-y-3 border-t border-ink/12 pt-5 text-sm">
            <div>
              <dt className="label text-smoke">Stay</dt>
              <dd className="mt-1">{t.stay}</dd>
            </div>
            <div>
              <dt className="label text-smoke">Guide</dt>
              <dd className="mt-1">{t.guide}</dd>
            </div>
            <div>
              <dt className="label text-smoke">From</dt>
              <dd className="mt-1">{t.from}</dd>
            </div>
          </dl>
        </Reveal>
      ))}
    </div>
  );
}
