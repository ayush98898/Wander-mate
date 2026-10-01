import Link from "next/link";

import { InstagramIcon, Lotus, WhatsAppIcon } from "@/components/site/icons";
import { Logo } from "@/components/site/logo";
import { site, whatsappLink } from "@/lib/content";

const columns = [
  {
    title: "Journeys",
    links: [
      { href: "/packages", label: "Varanasi packages" },
      { href: "/banaras-unfiltered", label: "Banaras Unfiltered — Solo" },
      { href: "/packages#circuits", label: "The Spiritual Triangle" },
      { href: "/plan", label: "Plan your own trip" },
    ],
  },
  {
    title: "Discover",
    links: [
      { href: "/experiences", label: "Experiences" },
      { href: "/journal", label: "Travel journal" },
      { href: "/about", label: "About us" },
      { href: "/enquire", label: "Enquire" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-night text-parchment/80">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 bottom-0 select-none font-deva text-[16rem] leading-none text-white/[0.03] sm:text-[22rem]"
      >
        काशी
      </div>

      <div className="container-x relative py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-parchment/60">
              Local roots, modern ease. Bespoke cultural and heritage journeys through
              Varanasi for families, couples and private groups.
            </p>
            <p className="mt-6 max-w-xs font-display text-lg italic leading-snug text-parchment/90">
              “Varanasi is older than history, older than tradition, older even than
              legend.”
              <span className="mt-1 block font-sans text-xs not-italic tracking-widest text-parchment/50 uppercase">
                Mark Twain
              </span>
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h2 className="eyebrow text-marigold">{col.title}</h2>
              <ul className="mt-5 space-y-3 text-sm">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="link-underline hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="eyebrow text-marigold">Talk to us</h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href={whatsappLink("Namaste WanderMate! I'd like to plan a trip to Varanasi.")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 hover:text-white"
                >
                  <WhatsAppIcon className="size-5 text-[#25D366]" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 hover:text-white"
                >
                  <InstagramIcon className="size-5" />
                  {site.instagramHandle}
                </a>
              </li>
              <li className="text-parchment/60">Varanasi, Uttar Pradesh, India</li>
            </ul>
          </div>
        </div>

        <div className="ornament mt-16">
          <Lotus className="h-5 w-8" />
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 text-xs text-parchment/45 sm:flex-row">
          <p>© {new Date().getFullYear()} WanderMate. All rights reserved.</p>
          <p>Designed by Ayush Singh</p>
        </div>
      </div>
    </footer>
  );
}
