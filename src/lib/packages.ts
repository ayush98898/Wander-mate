/*
 * Tour packages — one entry per program, rendered by /packages/[slug].
 *
 * The page is visual-first: keep text short (a few words per stop), and let
 * photos, icons and the interactive pieces carry the story. `kind` switches
 * the layout between a multi-day journey and a single-day program.
 */

export type Moment = "dawn" | "morning" | "afternoon" | "evening" | "night";
export type StopIcon = "boat" | "temple" | "walk" | "stupa" | "fort" | "car" | "hotel" | "flame" | "museum" | "campus";

export type Stop = { title: string; note?: string; when: Moment; icon: StopIcon };

export type PackageDay = {
  n: number;
  /** Two- to four-word name for the day. */
  title: string;
  /** One short line. */
  line: string;
  image: string;
  imageAlt: string;
  position?: string;
  stops: Stop[];
  /** Active hours for the rhythm chart, 24h clock, e.g. [[5.5, 9], [15, 19]]. */
  hours: [number, number][];
};

export type Place = { name: string; km: number; bearing: number; note: string };

export type TourPackage = {
  slug: string;
  kind: "multi-day" | "day";
  name: string;
  /** e.g. "3 nights · 4 days" */
  length: string;
  tagline: string;
  hero: { image: string; alt: string; position?: string };
  stats: { value: string; label: string; icon: "moon" | "car" | "boat" | "landmark" | "clock" | "users" }[];
  days: PackageDay[];
  /** The river route for the boat ride, south to north. */
  ghats?: string[];
  /** Places beyond the city, plotted on the mini map relative to the ghats. */
  beyond?: Place[];
  included: string[];
  excluded: string[];
  stays: string[];
  vehicles: { name: string; seats: string }[];
  goodFor: string[];
  closing: { image: string; alt: string; line: string };
};

export const packages: TourPackage[] = [
  {
    slug: "kashi-in-four-days",
    kind: "multi-day",
    name: "Kashi in Four Days",
    length: "3 nights · 4 days",
    tagline: "The river twice, the temples, Sarnath and Ramnagar — at a pace the whole family can keep.",
    hero: { image: "/images/hero-ghats.jpg", alt: "The ghats of Varanasi from above, boats gathered on the Ganga" },
    stats: [
      { value: "3", label: "nights near the ghats", icon: "moon" },
      { value: "3", label: "days with an AC cab", icon: "car" },
      { value: "2", label: "private boat rides", icon: "boat" },
      { value: "12", label: "temples, ghats & sites", icon: "landmark" },
    ],
    days: [
      {
        n: 1,
        title: "Fire on the water",
        line: "Arrive, settle in, and watch the Aarti from your own boat.",
        image: "/images/premium/stock/day1-aarti-priest.jpg",
        imageAlt: "A priest raises the brass Aarti lamp at Dashashwamedh Ghat",
        position: "50% 30%",
        stops: [
          { title: "Arrival & check-in", note: "Hotel near the ghats", when: "afternoon", icon: "hotel" },
          { title: "Private Aarti boat", note: "Dashashwamedh Ghat", when: "evening", icon: "boat" },
          { title: "The Ganga Aarti", note: "From the water", when: "evening", icon: "flame" },
        ],
        hours: [[15, 20]],
      },
      {
        n: 2,
        title: "The river wakes",
        line: "Sunrise past the ghats, then the great temples of Kashi.",
        image: "/images/sunrise-boats.jpg",
        imageAlt: "Boats on the Ganga at sunrise",
        stops: [
          { title: "Sunrise boat ride", note: "Assi to Raj Ghat", when: "dawn", icon: "boat" },
          { title: "Kashi Vishwanath", note: "The Jyotirlinga", when: "morning", icon: "temple" },
          { title: "Sankat Mochan", note: "Founded by Tulsidas", when: "afternoon", icon: "temple" },
          { title: "Durga Temple", note: "Durga Kund", when: "afternoon", icon: "temple" },
        ],
        hours: [
          [5.5, 11],
          [15, 18.5],
        ],
      },
      {
        n: 3,
        title: "Where the Buddha taught",
        line: "Sarnath, a riverside Shiva temple, and the old city on foot.",
        image: "/images/packages/sarnath.jpg",
        imageAlt: "A temple tower among palm trees at Sarnath",
        position: "50% 35%",
        stops: [
          { title: "Sarnath", note: "Dhamek Stupa & museum", when: "morning", icon: "stupa" },
          { title: "Markandey Mahadev", note: "Where the Gomti meets the Ganga", when: "afternoon", icon: "temple" },
          { title: "Old city walk", note: "The galis of Banaras", when: "evening", icon: "walk" },
        ],
        hours: [
          [9, 14],
          [16.5, 19.5],
        ],
      },
      {
        n: 4,
        title: "Across the river",
        line: "A Maharaja's fort, a great university, and India in marble.",
        image: "/images/packages/ganga-waterfront.jpg",
        imageAlt: "The waterfront of Varanasi seen from the Ganga",
        stops: [
          { title: "Ramnagar Fort", note: "The Maharaja's museum", when: "morning", icon: "fort" },
          { title: "BHU & New Vishwanath", note: "A campus temple in marble", when: "morning", icon: "campus" },
          { title: "Bharat Mata Mandir", note: "A relief map of India", when: "afternoon", icon: "museum" },
          { title: "Departure", note: "Onward journey", when: "afternoon", icon: "car" },
        ],
        hours: [[9, 15]],
      },
    ],
    ghats: [
      "Assi",
      "Tulsi",
      "Harishchandra",
      "Kedar",
      "Dashashwamedh",
      "Manikarnika",
      "Scindia",
      "Panchaganga",
      "Raj Ghat",
    ],
    beyond: [
      { name: "Sarnath", km: 10, bearing: 20, note: "Day 3" },
      { name: "Markandey Mahadev", km: 30, bearing: 60, note: "Day 3" },
      { name: "Ramnagar Fort", km: 6, bearing: 165, note: "Day 4" },
      { name: "BHU", km: 4, bearing: 205, note: "Day 4" },
    ],
    included: [
      "3 nights near the ghats",
      "AC cab, days 2 to 4",
      "Private Aarti boat",
      "Sunrise boat ride",
      "All sightseeing in the plan",
    ],
    excluded: ["Meals", "Entry tickets", "Tips & personal spends", "Flights or trains"],
    stays: ["Budget", "3-star", "4–5 star"],
    vehicles: [
      { name: "Sedan", seats: "Up to 4" },
      { name: "Innova Crysta", seats: "Up to 6" },
      { name: "Tempo Traveller", seats: "Up to 12" },
    ],
    goodFor: ["Families with elders", "Children", "First visits", "Slow travellers"],
    closing: {
      image: "/images/premium/stock/band-dev-deepawali.jpg",
      alt: "Fireworks over the Ganga",
      line: "Four days. One river. A city older than history.",
    },
  },
];

export function getPackage(slug: string) {
  return packages.find((p) => p.slug === slug);
}
