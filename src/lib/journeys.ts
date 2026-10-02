import type { FeelingId } from "@/lib/content";
import { itinerary as soloItinerary, solo } from "@/lib/solo";

export type JourneyDay = { title: string; image: string; points: string[] };

export type Journey = {
  slug: string;
  name: string;
  /** Short category line, e.g. "Solo series". */
  kind: string;
  duration: string;
  price?: string;
  priceNote?: string;
  route: string;
  image: string;
  feelings: FeelingId[];
  summary: string;
  highlights: string[];
  /** Sample day-by-day outline. Every private journey is tailored. */
  days?: JourneyDay[];
  external?: string;
};

export const journeys: Journey[] = [
  {
    slug: "banaras-unfiltered",
    name: "Banaras Unfiltered",
    kind: "Solo series · small group",
    duration: "2 nights · 3 days",
    price: solo.price,
    priceNote: solo.priceNote,
    route: "Varanasi",
    image: "/images/holi.jpg",
    feelings: ["curiosity", "awe"],
    summary: solo.lede,
    highlights: [
      "4–8 independent travellers, departing every Friday",
      "Front-row Ganga Aarti and a private sunrise boat",
      "Pre-dawn temple circuit with Sugam Darshan",
      "Silk walk and two food walks",
    ],
    days: soloItinerary.map((d) => ({
      title: d.title,
      image: d.image,
      points: d.stops.map((s) => s.title),
    })),
  },
  {
    slug: "kashi-classic",
    name: "Kashi Classic",
    kind: "Private journey",
    duration: "1 – 7 days",
    route: "Varanasi",
    image: "/images/stairs-sunset.jpg",
    feelings: ["curiosity"],
    summary:
      "Budget-friendly and ideal for solo backpackers — the essential Kashi, with a local guide who knows the old city's lanes.",
    highlights: [
      "Clean, well-located stays near the ghats",
      "Ganga Aarti and a boat ride on the river",
      "Guided walk through the old city",
      "Station and airport transfers",
    ],
  },
  {
    slug: "kashi-premium",
    name: "Wandermate Premium",
    kind: "Private journey",
    duration: "2 nights, 3 days",
    route: "Varanasi",
    image: "/images/golden-boats.jpg",
    feelings: ["devotion", "awe"],
    summary:
      "Hassle-free travel with premium hospitality — premium stays, a private boat at sunrise and front-row seats at the Aarti.",
    highlights: [
      "3-star premium hotels such as Dev Residency",
      "Private sunrise boat and premium Aarti seating",
      "Expert guide, food walk and silk walk",
      "Private AC vehicle throughout",
    ],
    days: [
      {
        title: "Arrival & the evening Aarti",
        image: "/images/aarti-night.jpg",
        points: ["Private pickup and check-in", "Premium Ganga Aarti seating", "Night food walk through Chowk"],
      },
      {
        title: "Temples at dawn, the river and the looms",
        image: "/images/sunrise-boats.jpg",
        points: ["Temple circuit with Sugam Darshan", "Private sunrise boat", "Madanpura silk walk"],
      },
      {
        title: "Assi at first light & farewell",
        image: "/images/fog-boats.jpg",
        points: ["Subah-e-Banaras at Assi Ghat", "Farewell breakfast walk", "Private transfer onward"],
      },
    ],
  },
  {
    slug: "kashi-luxury",
    name: "Kashi in Private",
    kind: "Luxury journey",
    duration: "1 – 7 days",
    route: "Varanasi",
    image: "/images/hero-ghats.jpg",
    feelings: ["stillness", "indulgence"],
    summary:
      "A serene spiritual journey with premium hospitality and complete privacy — luxury measured in access and depth of connection.",
    highlights: [
      "A private sunrise boat while the crowds stay on shore",
      "A private Satvik feast on a rooftop above the Aarti",
      "VIP Sugam Darshan and private rituals",
      "Personal photographer and chauffeur",
    ],
  },
  {
    slug: "spiritual-triangle",
    name: "The Spiritual Triangle",
    kind: "Pilgrim circuit",
    duration: "Multi-city",
    route: "Kashi · Ayodhya · Prayagraj",
    image: "/images/temple-white.jpg",
    feelings: ["devotion"],
    summary:
      "Three of India's holiest cities joined in one seamless journey, with transfers, stays and darshan arranged end to end.",
    highlights: [
      "Kashi Vishwanath and the ghats of Varanasi",
      "Ayodhya and the banks of the Saryu",
      "The Triveni Sangam at Prayagraj",
      "One companion across all three cities",
    ],
  },
  {
    slug: "kashi-ayodhya",
    name: "Kashi & Ayodhya",
    kind: "Pilgrim circuit",
    duration: "Multi-city",
    route: "Kashi · Ayodhya",
    image: "/images/aarti-priest.jpg",
    feelings: ["devotion", "awe"],
    summary: "The city of Shiva and the city of Ram — temples, ghats and the evening Aarti on two sacred rivers.",
    highlights: [
      "Ganga Aarti in Kashi",
      "Darshan in Ayodhya",
      "Private transfers between cities",
      "Curated stays in both",
    ],
  },
  {
    slug: "dev-deepawali-2026",
    name: "Dev Deepawali 2026",
    kind: "Festival · bookings open",
    duration: "Seasonal",
    route: "Varanasi",
    image: "/images/diya.jpg",
    feelings: ["awe", "indulgence"],
    summary:
      "The night the gods are said to descend to the ghats, lit by countless diyas. Bookings are open for 2026.",
    highlights: ["Ghat-side viewing", "Festival-night planning", "Limited availability"],
    external: "https://dev-deepawali-2026.vercel.app/",
  },
];

export function getJourney(slug: string) {
  return journeys.find((j) => j.slug === slug);
}
