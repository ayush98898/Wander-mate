import Link from "next/link";

import { InstagramIcon, WhatsAppIcon } from "@/components/site/icons";
import { Btn } from "@/components/site/ui";
import { site, whatsappLink } from "@/lib/content";
import { journeys } from "@/lib/journeys";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-bone">
      <div className="wrap pt-20 md:pt-28">
        <div className="grid gap-10 border-b border-bone/12 pb-16 md:grid-cols-[1.4fr_1fr] md:items-end">
          <p className="display max-w-3xl text-5xl md:text-7xl">
            Every journey begins with <em>a conversation.</em>
          </p>
          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <Btn href="/plan" variant="light">
              Plan a journey
            </Btn>
            <Btn href={whatsappLink("Namaste WanderMate! I'd like to plan a journey.")} variant="line-light">
              WhatsApp us
            </Btn>
          </div>
        </div>

        <div className="grid gap-10 py-14 text-sm sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="label text-bone/45">Journeys</p>
            <ul className="mt-5 space-y-2.5">
              {journeys.slice(0, 5).map((j) => (
                <li key={j.slug}>
                  <Link href={`/journeys/${j.slug}`} className="ul">
                    {j.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label text-bone/45">Discover</p>
            <ul className="mt-5 space-y-2.5">
              {[
                ["/experiences", "Experiences"],
                ["/journal", "Journal"],
                ["/about", "About WanderMate"],
                ["/plan", "Plan a journey"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="ul">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label text-bone/45">Contact</p>
            <ul className="mt-5 space-y-2.5">
              <li>
                <a
                  href={whatsappLink("Namaste WanderMate!")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-ochre-lit"
                >
                  <WhatsAppIcon className="size-4" /> {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-ochre-lit"
                >
                  <InstagramIcon className="size-4" /> {site.instagramHandle}
                </a>
              </li>
              <li className="text-bone/55">Varanasi, Uttar Pradesh, India</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="wrap flex flex-col gap-2 border-t border-bone/12 py-6 text-bone/45 sm:flex-row sm:justify-between">
        <p className="label">© {new Date().getFullYear()} WanderMate</p>
        <p className="label">Designed by Ayush Singh</p>
      </div>
    </footer>
  );
}
