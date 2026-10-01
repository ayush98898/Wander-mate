import type { Metadata, Viewport } from "next";
import { Manrope, Playfair_Display, Tiro_Devanagari_Hindi } from "next/font/google";

import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { WhatsAppFab } from "@/components/site/whatsapp-fab";
import { site } from "@/lib/content";

import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
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
    default: "WanderMate — Cultural & Heritage Tours in Varanasi",
    template: "%s | WanderMate",
  },
  description: site.description,
  keywords: [
    "Varanasi tour packages",
    "Kashi heritage tour",
    "Banaras cultural tour",
    "Ganga Aarti",
    "Varanasi solo trip",
    "Kashi Ayodhya Prayagraj",
  ],
  openGraph: {
    type: "website",
    siteName: "WanderMate",
    title: "WanderMate — Cultural & Heritage Tours in Varanasi",
    description: site.description,
    images: [{ url: "/images/hero-ghats.jpg", width: 1600, height: 1066 }],
    locale: "en_IN",
  },
  icons: { icon: "/images/logo-mark.png" },
};

export const viewport: Viewport = {
  themeColor: "#120d0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${manrope.variable} ${tiro.variable}`}
    >
      <body className="min-h-svh">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
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
