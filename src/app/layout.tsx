import type { Metadata, Viewport } from "next";
import {
  Host_Grotesk,
  Instrument_Serif,
  JetBrains_Mono,
  Tiro_Devanagari_Hindi,
} from "next/font/google";

import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { WhatsAppFab } from "@/components/site/whatsapp-fab";
import { site } from "@/lib/content";

import "./globals.css";

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const host = Host_Grotesk({
  variable: "--font-host",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const tiro = Tiro_Devanagari_Hindi({
  variable: "--font-tiro",
  subsets: ["devanagari"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "WanderMate — Private Cultural & Heritage Journeys in Varanasi",
    template: "%s — WanderMate",
  },
  description: site.description,
  keywords: [
    "Varanasi heritage tour",
    "Kashi cultural journey",
    "luxury Varanasi travel",
    "Ganga Aarti",
    "Banaras private tour",
    "Kashi Ayodhya Prayagraj",
  ],
  openGraph: {
    type: "website",
    siteName: "WanderMate",
    title: "WanderMate — Feel the centuries",
    description: site.description,
    images: [{ url: "/images/hero-ghats.jpg", width: 1600, height: 1066 }],
    locale: "en_IN",
  },
  icons: { icon: "/images/logo-mark.png" },
};

export const viewport: Viewport = {
  themeColor: "#100e0b",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${instrument.variable} ${host.variable} ${jetbrains.variable} ${tiro.variable}`}
    >
      <body className="min-h-svh">
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
