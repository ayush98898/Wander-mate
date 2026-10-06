/*
 * The WanderMate Heritage Store — the signature crafts of each place we travel.
 *
 * To open a shelf for a new place, add an entry to `shelves` keyed by the
 * destination slug (see src/lib/destinations.ts). The first craft leads, large;
 * keep to three. Package pages pick a shelf with their `shop` field.
 */

import { whatsappLink } from "@/lib/content";

export const store = {
  name: "WanderMate Heritage Store",
  // TODO: replace with the heritage store's own address once it is live.
  url: whatsappLink("Namaste WanderMate! I'd like to see the Heritage Store."),
};

export type Craft = {
  name: string;
  /** One line on what it is and why it matters. */
  line: string;
  /** What you can buy, a few words. */
  range: string;
  /** A short mark of provenance, e.g. "GI-tagged". */
  mark?: string;
  image: string;
  alt: string;
  position?: string;
};

export type Shelf = { place: string; crafts: Craft[] };

export const shelves: Record<string, Shelf> = {
  kashi: {
    place: "Kashi",
    crafts: [
      {
        name: "Banarasi silk",
        line: "Silk and real zari woven on handlooms in the lanes of Kashi — a single saree can take weeks on the loom.",
        range: "Sarees · dupattas · stoles",
        mark: "GI-tagged",
        image: "/images/store/banarasi-silk.jpg",
        alt: "Royal blue and gold silk, folded in soft waves",
        position: "40% 50%",
      },
      {
        name: "Rudraksha",
        line: "The seeds sacred to Shiva, strung by hand in the city of Shiva.",
        range: "Malas · bracelets",
        image: "/images/store/rudraksha.jpg",
        alt: "Strings of rudraksha beads capped in gold",
      },
      {
        name: "Kashi brass",
        line: "Diyas, aarti lamps and puja vessels from the old metalworkers' lanes of Thatheri Bazaar.",
        range: "Diyas · aarti lamps · puja sets",
        image: "/images/store/brass-diya.jpg",
        alt: "A lit brass diya on an engraved silver plate",
        position: "62% 55%",
      },
    ],
  },
};

export function getShelf(slug?: string) {
  return slug ? shelves[slug] : undefined;
}
