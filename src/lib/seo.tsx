/*
 * Search and sharing: one place for canonical URLs, Open Graph / X cards and
 * schema.org structured data (JSON-LD).
 *
 * Every page builds its metadata with `pageMeta`, so each one gets a canonical
 * URL and a complete social card. Share images come from the route's
 * `opengraph-image.tsx` (see src/lib/og.tsx) — file-based images win over
 * anything set here, so `pageMeta` only sets an image where a route has none.
 */

import type { Metadata } from "next";

import { site } from "@/lib/content";

/** Absolute URL on the site (site.url comes from NEXT_PUBLIC_SITE_URL). */
export const abs = (path = "/") => new URL(path, site.url).toString();

export const ORG_ID = abs("/#organization");

const SUFFIX = " — WanderMate";
/** Trim to a word boundary so search results don't cut it mid-word. */
const clamp = (text: string, max: number) =>
  text.length <= max ? text : text.slice(0, text.lastIndexOf(" ", max - 1)).replace(/[,;:—–-]\s*$/, "") + "…";
export const SITE_ID = abs("/#website");

export function pageMeta({
  title,
  absolute,
  description,
  path,
  image,
  type = "website",
}: {
  title: string;
  /** Use the title as-is, without the " — WanderMate" suffix. */
  absolute?: boolean;
  description: string;
  path: string;
  /** Only for routes without their own opengraph-image file. */
  image?: string;
  type?: "website" | "article";
}): Metadata {
  const images = image ? [{ url: image }] : undefined;
  // Search results show ~60 characters of a title: keep the brand suffix only when it fits.
  const whole = absolute || title.length + SUFFIX.length > 60;
  description = clamp(description, 160);
  return {
    title: whole ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: { type, title, description, url: path, siteName: site.name, locale: "en_IN", ...(images && { images }) },
    twitter: { card: "summary_large_image", title, description, ...(images && { images }) },
  };
}

/** A JSON-LD script tag. `<` is escaped so text can never close the tag. */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

/** schema.org BreadcrumbList from [name, path] pairs (Home is added first). */
export function breadcrumbs(trail: [string, string][]) {
  const items: [string, string][] = [["Home", "/"], ...trail];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, path], i) => ({ "@type": "ListItem", position: i + 1, name, item: abs(path) })),
  };
}

/** "INR 8,999" or "₹3,499" → { price: "8999", priceCurrency: "INR" }. */
export function parsePrice(text?: string) {
  const n = text?.replace(/[^\d.]/g, "");
  return n ? { price: n, priceCurrency: "INR" } : undefined;
}

/** The business itself — referenced by @id from every other entity. */
export function organization() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": ORG_ID,
    name: site.name,
    url: abs("/"),
    logo: abs("/images/logo-mark.png"),
    image: abs("/images/hero-ghats.jpg"),
    description: site.description,
    slogan: "Feel the centuries.",
    telephone: `+${site.whatsapp}`,
    address: { "@type": "PostalAddress", addressLocality: "Varanasi", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
    geo: { "@type": "GeoCoordinates", latitude: 25.3176, longitude: 82.9739 },
    areaServed: ["India", "Nepal", "Sri Lanka", "Bhutan", "Cambodia", "Indonesia", "Japan", "Türkiye", "Jordan", "Egypt", "Morocco", "Uzbekistan", "Peru", "Greece", "Italy", "Thailand"],
    knowsAbout: ["Heritage travel", "Cultural tourism", "Varanasi", "Ganga Aarti", "Pilgrimage tours", "Festivals of India"],
    founder: [
      { "@type": "Person", name: "Ayush Singh" },
      { "@type": "Person", name: "Ritesh Singh" },
      { "@type": "Person", name: "Vineet" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${site.whatsapp}`,
      contactType: "reservations",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [site.instagram],
  };
}

export function website() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SITE_ID,
    url: abs("/"),
    name: site.name,
    description: site.tagline,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-IN",
  };
}
