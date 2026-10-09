import type { Metadata, Viewport } from "next";
import {
  Cormorant_Garamond,
  Jost,
  Noto_Sans_Javanese,
  Noto_Serif_Kannada,
  Noto_Serif_Khmer,
  Noto_Serif_Oriya,
  Noto_Serif_Sinhala,
  Noto_Serif_Tamil,
  Noto_Serif_Tibetan,
  Tiro_Devanagari_Hindi,
} from "next/font/google";

import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { WhatsAppFab } from "@/components/site/whatsapp-fab";
import { site } from "@/lib/content";
import { JsonLd, organization, website } from "@/lib/seo";

import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const tiro = Tiro_Devanagari_Hindi({
  variable: "--font-tiro",
  subsets: ["devanagari"],
  weight: "400",
  display: "swap",
});

// Local scripts for destination plates — not preloaded, they sit below the fold.
const kannada = Noto_Serif_Kannada({ variable: "--font-kannada", subsets: ["kannada"], weight: "400", preload: false });
const tamil = Noto_Serif_Tamil({ variable: "--font-tamil", subsets: ["tamil"], weight: "400", preload: false });
const oriya = Noto_Serif_Oriya({ variable: "--font-oriya", subsets: ["oriya"], weight: "400", preload: false });
const sinhala = Noto_Serif_Sinhala({ variable: "--font-sinhala", subsets: ["sinhala"], weight: "400", preload: false });
const tibetan = Noto_Serif_Tibetan({ variable: "--font-tibetan", subsets: ["tibetan"], weight: "400", preload: false });
const khmer = Noto_Serif_Khmer({ variable: "--font-khmer", subsets: ["khmer"], weight: "400", preload: false });
const javanese = Noto_Sans_Javanese({ variable: "--font-javanese", subsets: ["javanese"], weight: "400", preload: false });
const scripts = [kannada, tamil, oriya, sinhala, tibetan, khmer, javanese].map((f) => f.variable).join(" ");

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "WanderMate — Heritage & Cultural Journeys, India & Beyond",
    template: "%s — WanderMate",
  },
  description:
    "Heritage and cultural journeys led by local people — temples, rituals, crafts and festivals, from Kashi and Amritsar to Kyoto, Petra and Angkor.",
  keywords: [
    "heritage travel",
    "cultural journeys",
    "living traditions",
    "India heritage tours",
    "Varanasi heritage tour",
    "Kyoto temples tour",
    "Angkor Wat private tour",
    "Petra and Wadi Rum journey",
  ],
  openGraph: {
    type: "website",
    siteName: "WanderMate",
    title: "WanderMate — Feel the centuries",
    description: site.description,
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title: "WanderMate — Feel the centuries", description: site.description },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  icons: { icon: "/images/logo-mark.png", apple: "/images/logo-mark.png" },
  formatDetection: { telephone: false },
  category: "travel",
};

export const viewport: Viewport = {
  themeColor: "#072268",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} ${tiro.variable} ${scripts}`}
    >
      <body className="min-h-svh">
        <JsonLd data={[organization(), website()]} />
        <a
          href="#main"
          className="label sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[80] focus:bg-ink focus:px-4 focus:py-3 focus:text-bone"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
