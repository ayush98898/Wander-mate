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
};

/** One place on the journey line, in the order you reach it. `key` marks the highlights. */
export type Place = { day: number; name: string; note: string; key?: boolean };

export type MonthInfo = {
  m: string;
  /** Typical daytime high / night low, °C. */
  hi: number;
  lo: number;
  sky: "clear" | "fog" | "hot" | "rain";
  verdict: "Best" | "Good" | "Hot" | "Monsoon";
  festival?: string;
};

export type StayTier = {
  name: string;
  line: string;
  features: string[];
  /** Real partner hotels for this tier (leave empty until confirmed). */
  hotels: { name: string; image: string }[];
};

export type Review = { quote: string; name: string; from: string; trip: string };
export type Faq = { q: string; a: string; icon: "users" | "phone" | "shirt" | "waves" | "wallet" | "plus" };

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
  /** Every place the journey covers, drawn as one line on the page. */
  places?: Place[];
  included: string[];
  excluded: string[];
  stays: StayTier[];
  vehicles: { name: string; seats: string }[];
  goodFor: string[];
  months: MonthInfo[];
  reviews: Review[];
  faqs: Faq[];
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
    places: [
      { day: 1, name: "Dashashwamedh Ghat", note: "Aarti from your boat", key: true },
      { day: 2, name: "Assi Ghat", note: "Sunrise boat sets off" },
      { day: 2, name: "Kashi Vishwanath", note: "The Jyotirlinga", key: true },
      { day: 2, name: "Sankat Mochan", note: "Founded by Tulsidas" },
      { day: 2, name: "Durga Temple", note: "Durga Kund" },
      { day: 3, name: "Sarnath", note: "Where the Buddha first taught", key: true },
      { day: 3, name: "Markandey Mahadev", note: "Where the Gomti meets the Ganga" },
      { day: 3, name: "The old city", note: "The galis, on foot" },
      { day: 4, name: "Ramnagar Fort", note: "The Maharaja's museum", key: true },
      { day: 4, name: "BHU & New Vishwanath", note: "A campus temple in marble" },
      { day: 4, name: "Bharat Mata Mandir", note: "India carved in marble" },
    ],
    included: [
      "3 nights near the ghats",
      "AC cab, days 2 to 4",
      "Private Aarti boat",
      "Sunrise boat ride",
      "All sightseeing in the plan",
    ],
    excluded: ["Meals", "Entry tickets", "Tips & personal spends", "Flights or trains"],
    stays: [
      {
        name: "Budget",
        line: "Simple, clean and close to it all.",
        features: ["Private room, attached bath", "Near the ghats or old city", "For backpackers & long stays"],
        hotels: [],
      },
      {
        name: "3-star",
        line: "Comfort without fuss, near Vishwanath.",
        features: ["Air-conditioned rooms", "Short ride to the ghats", "Hotels we work with today"],
        hotels: [
          { name: "Hotel Dev Residency", image: "/images/hotel-dev.jpg" },
          { name: "Hotel Ganesha Palace", image: "/images/hotel-ganesha.jpg" },
          { name: "Hotel Elegance Inn", image: "/images/hotel-elegance.jpg" },
        ],
      },
      {
        name: "4–5 star",
        line: "A riverside palace or a 5-star room.",
        features: ["River views on request", "Heritage or modern luxury", "For occasions worth marking"],
        hotels: [],
      },
    ],
    vehicles: [
      { name: "Sedan", seats: "Up to 4" },
      { name: "Innova Crysta", seats: "Up to 6" },
      { name: "Tempo Traveller", seats: "Up to 12" },
    ],
    goodFor: ["Families with elders", "Children", "First visits", "Slow travellers"],
    months: [
      { m: "Jan", hi: 22, lo: 8, sky: "fog", verdict: "Good", festival: "Makar Sankranti" },
      { m: "Feb", hi: 26, lo: 11, sky: "clear", verdict: "Best", festival: "Mahashivratri" },
      { m: "Mar", hi: 32, lo: 16, sky: "clear", verdict: "Best", festival: "Holi" },
      { m: "Apr", hi: 38, lo: 22, sky: "hot", verdict: "Hot" },
      { m: "May", hi: 40, lo: 26, sky: "hot", verdict: "Hot" },
      { m: "Jun", hi: 38, lo: 28, sky: "hot", verdict: "Hot", festival: "Ganga Dussehra" },
      { m: "Jul", hi: 33, lo: 27, sky: "rain", verdict: "Monsoon", festival: "Sawan" },
      { m: "Aug", hi: 32, lo: 26, sky: "rain", verdict: "Monsoon" },
      { m: "Sep", hi: 32, lo: 25, sky: "rain", verdict: "Monsoon", festival: "Ramnagar Ramlila" },
      { m: "Oct", hi: 32, lo: 20, sky: "clear", verdict: "Best", festival: "Diwali" },
      { m: "Nov", hi: 28, lo: 14, sky: "clear", verdict: "Best", festival: "Dev Deepawali" },
      { m: "Dec", hi: 23, lo: 9, sky: "fog", verdict: "Good" },
    ],
    reviews: [
      {
        quote: "They didn't treat me like just another traveller — they treated me like family.",
        name: "Shivani Mishra",
        from: "Jaipur",
        trip: "Luxury package",
      },
      {
        quote: "Helped out in everything, from temple visits to the food walk to good eating joints and shopping.",
        name: "Navdeep",
        from: "Delhi",
        trip: "Luxury package",
      },
      {
        quote: "A great trip, well planned over 3 days — always around with practical tips and advice.",
        name: "Ashish Garg",
        from: "Delhi",
        trip: "Luxury package",
      },
      {
        quote: "Banaras ghumo toh bas inke saath ghumo. Maza aa gaya.",
        name: "Amit Goel",
        from: "Jaipur",
        trip: "Luxury package",
      },
    ],
    faqs: [
      {
        q: "Is it comfortable for elders?",
        a: "Yes — only one early start, and the cab takes you door to door wherever cars can go. Some ghat steps and old-city lanes are unavoidable; tell us about mobility needs and we plan around them.",
        icon: "users",
      },
      {
        q: "Can I carry my phone into Kashi Vishwanath?",
        a: "No. Phones, bags and leather items are not allowed inside; lockers are available near the gates, and we'll guide you through.",
        icon: "phone",
      },
      {
        q: "What should we wear?",
        a: "Modest, comfortable clothes for temples — shoulders and knees covered — and shoes that slip off easily.",
        icon: "shirt",
      },
      {
        q: "What if the river is too high?",
        a: "In the monsoon, boats can be stopped for safety. If that happens we rework the day, and you watch the Aarti from the ghat steps or a rooftop.",
        icon: "waves",
      },
      {
        q: "How do booking and payment work?",
        a: "Share your dates and we send a tailored quote within 24 hours. A 50% advance confirms the booking; the balance is due 7 days before travel.",
        icon: "wallet",
      },
      {
        q: "Can we add days or experiences?",
        a: "Of course — a photography session, a day in Prayagraj, Ayodhya or Vindhyachal, or another night. Ask, and we'll build it in.",
        icon: "plus",
      },
    ],
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
