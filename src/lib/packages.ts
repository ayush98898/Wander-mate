/*
 * Tour packages — one entry per program, rendered by /packages/[slug].
 *
 * The page is visual-first: keep text short (a few words per stop), and let
 * photos, icons and the interactive pieces carry the story. `kind` switches
 * the layout between a multi-day journey and a single-day program.
 */

export type StopIcon = "boat" | "temple" | "walk" | "stupa" | "fort" | "car" | "hotel" | "flame" | "museum" | "campus" | "music" | "cup" | "craft" | "sparkle";

/** One stop in the day, in the order you reach it, with a line or two of detail. */
export type Stop = { title: string; note: string; icon: StopIcon };

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

export type StayTier = {
  name: string;
  line: string;
  features: string[];
  /** Real partner hotels for this tier (leave empty until confirmed). */
  hotels: { name: string; image: string }[];
  /** A mood photograph for a tier with no named hotels yet. */
  image?: string;
  /** Set the tier on navy, as the top of the range. */
  featured?: boolean;
  /** Small line above the name (defaults to "Chosen for your dates"). */
  kicker?: string;
};

/** A feature band: one big photograph and what the experience holds. */
export type Feature = { kicker: string; title: string; italic: string; line: string; items: string[]; image: string; alt: string };

export type Review = { quote: string; name: string; from: string; trip: string };
export type Faq = { q: string; a: string; icon: "users" | "phone" | "shirt" | "waves" | "wallet" | "plus" };

export type TourPackage = {
  slug: string;
  /** Search title (complete, under 60 characters) and description (under 160) — the words people type. */
  seo: { title: string; description: string };
  kind: "multi-day" | "day";
  name: string;
  /** e.g. "3 nights · 4 days" */
  length: string;
  tagline: string;
  hero: { image: string; alt: string; position?: string };
  /** A short muted loop for the hero, shown instead of the photographs (poster = hero.image). */
  heroVideo?: string;
  stats: { value: string; label: string; icon: "moon" | "car" | "boat" | "landmark" | "clock" | "users" | "wallet" | "calendar" }[];
  days: PackageDay[];
  /** The boat ride, ghat by ghat in the order you pass them (drawn bottom to top). */
  river?: { ghats: string[]; kicker: string; note: string; caption: string; title?: [string, string] };
  /** Feature bands between the river and the days (e.g. a festival, a cruise). */
  features?: Feature[];
  included: string[];
  excluded: string[];
  stays: StayTier[];
  /** Private trips: vehicle choices for the trip builder. */
  vehicles?: { name: string; seats: string }[];
  /** Fixed-date group trips: a per-person price and departures, booked by the seat. */
  booking?: {
    price: string;
    per: string;
    group: string;
    departures: { dates: string; days: string; seats?: number }[];
    /** Price tiers to choose between; the first is the default and sets `price`. */
    tiers?: { name: string; price: string; line: string }[];
    /** Line under the seat counter (rooms, payment terms). */
    note?: string;
    /** Small line above the section title. */
    kicker?: string;
  };
  goodFor: string[];
  /** Guest words for this trip; the section is left out when there are none. */
  reviews?: Review[];
  faqs: Faq[];
  /** Heritage Store shelf to show (a destination slug in src/lib/store.ts). */
  shop?: string;
  /** Booking terms, word for word, shown folded under the FAQs. */
  terms?: { title: string; content: string }[];
  /** Journal stories to read before the trip (post slugs), lead story first. */
  stories?: string[];
  closing: { image: string; alt: string; line: string };
};

export const packages: TourPackage[] = [
  {
    slug: "kashi-in-four-days",
    seo: {
      title: "Varanasi 3 Nights 4 Days Tour Package | WanderMate",
      description:
        "A private 4-day Varanasi tour: Ganga Aarti from your own boat, sunrise boat ride, Kashi Vishwanath, Sarnath and Ramnagar Fort. Hotel and AC cab included.",
    },
    kind: "multi-day",
    name: "Kashi in Four Days",
    length: "3 nights · 4 days",
    tagline: "The river twice, the temples, Sarnath and Ramnagar — at a pace the whole family can keep.",
    hero: { image: "/images/hero-ghats.jpg", alt: "The ghats of Varanasi from above, boats gathered on the Ganga" },
    stats: [
      { value: "3", label: "nights near the ghats", icon: "moon" },
      { value: "4", label: "days with an AC cab", icon: "car" },
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
          { title: "Pickup & check in", note: "We meet you at the airport or railway station and drive you to your hotel. Rest — the afternoon is yours.", icon: "car" },
          { title: "Down to Dashashwamedh Ghat", note: "Late afternoon, your cab takes you to the old city; the last stretch is on foot through the lanes to the river.", icon: "walk" },
          { title: "Private Aarti boat", note: "Step aboard your own boat and take a front-row place on the water, facing the ghat.", icon: "boat" },
          { title: "The Ganga Aarti", note: "Priests in saffron raise brass lamps to the river, with conch, bells and chant — about 45 minutes.", icon: "flame" },
          { title: "Back to the hotel", note: "Your cab drives you back through the evening crowds. Dinner on your own, overnight at the hotel.", icon: "hotel" },
        ],
      },
      {
        n: 2,
        title: "The river wakes",
        line: "Sunrise past the ghats, then the great temples of Kashi.",
        image: "/images/sunrise-boats.jpg",
        imageAlt: "Boats on the Ganga at sunrise",
        stops: [
          { title: "Sunrise boat ride", note: "Before dawn, board at Assi Ghat and drift north past the bathing ghats and the burning ghat to Raj Ghat, about 1½ hours.", icon: "boat" },
          { title: "Breakfast & rest", note: "Back to the hotel for breakfast and a quiet hour.", icon: "hotel" },
          { title: "Kashi Vishwanath", note: "Darshan at the golden-spired Jyotirlinga of Shiva. Phones and bags stay outside; we help with the lockers.", icon: "temple" },
          { title: "Sankat Mochan", note: "The Hanuman temple founded by the poet-saint Tulsidas, known for its laddoo offerings and resident monkeys.", icon: "temple" },
          { title: "Durga Temple", note: "Five minutes away: the red-stone temple of the goddess beside the old Durga Kund tank.", icon: "temple" },
          { title: "Evening at leisure", note: "Wander the ghats on your own or rest. Overnight at the hotel.", icon: "hotel" },
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
          { title: "Sarnath", note: "A short drive out of the city to where the Buddha gave his first sermon: the Dhamek Stupa, Mulagandha Kuti Vihar and the museum with the Lion Capital (museum shut on Fridays).", icon: "stupa" },
          { title: "Markandey Mahadev", note: "On to Kaithi, an old Shiva temple where the Gomti river meets the Ganga — quiet and rarely crowded.", icon: "temple" },
          { title: "Rest at the hotel", note: "Drive back and take a break before the evening.", icon: "hotel" },
          { title: "Old city walk", note: "On foot through the galis behind the ghats: hidden shrines, old havelis, silk weavers and the best sweet shops.", icon: "walk" },
        ],
      },
      {
        n: 4,
        title: "Across the river",
        line: "A Maharaja's fort, a great university, and India in marble.",
        image: "/images/packages/ganga-waterfront.jpg",
        imageAlt: "The waterfront of Varanasi seen from the Ganga",
        stops: [
          { title: "Check out", note: "After breakfast, check out and load your bags into the cab.", icon: "hotel" },
          { title: "Ramnagar Fort", note: "Cross the river to the Maharaja of Benares' 18th-century sandstone fort, with its museum of vintage cars, palanquins and arms.", icon: "fort" },
          { title: "BHU & New Vishwanath", note: "Through the leafy Banaras Hindu University campus to its tall white-marble Shiva temple.", icon: "campus" },
          { title: "Bharat Mata Mandir", note: "A temple to Mother India, with an undivided India carved in marble relief on the floor.", icon: "museum" },
          { title: "Drop-off", note: "To the airport or railway station, in good time for your onward journey.", icon: "car" },
        ],
      },
    ],
    river: {
      ghats: ["Assi", "Tulsi", "Harishchandra", "Kedar", "Dashashwamedh", "Manikarnika", "Scindia", "Panchaganga", "Raj Ghat"],
      kicker: "Day 2 · Sunrise boat",
      note: "Scroll, and the boat moves north with the light.",
      caption: "South → North · first light",
    },
    included: [
      "3 nights near the ghats",
      "AC cab all 4 days, with pickup & drop",
      "Private Aarti boat",
      "Sunrise boat ride",
      "All sightseeing in the plan",
    ],
    excluded: ["Meals", "Entry tickets", "Tips & personal spends", "Flights or trains"],
    stays: [
      {
        name: "Premium",
        line: "3-star comfort without fuss, near Vishwanath.",
        features: ["Air-conditioned rooms", "Short ride to the ghats", "Hotels we work with today"],
        hotels: [
          { name: "Hotel Dev Residency", image: "/images/hotel-dev.jpg" },
          { name: "Hotel Ganesha Palace", image: "/images/hotel-ganesha.jpg" },
          { name: "Hotel Elegance Inn", image: "/images/hotel-elegance.jpg" },
        ],
      },
      {
        name: "Luxury",
        line: "A riverside palace or a 5-star room.",
        image: "/images/ghats-lamps.jpg",
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
    reviews: [
      {
        quote: "They didn’t treat me like just another traveller — they treated me like family.",
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
    shop: "kashi",
    stories: ["the-ganga-aarti-explained", "kashi-city-of-light", "dev-deepawali"],
    closing: {
      image: "/images/golden-boats.jpg",
      alt: "Boats on the Ganga in a golden morning haze",
      line: "Four days. One river. A city older than history.",
    },
  },
  {
    slug: "banaras-unfiltered",
    seo: {
      title: "Varanasi Solo Group Tour, 2N3D | WanderMate",
      description:
        "A small-group weekend in Varanasi for solo travellers: front-row Ganga Aarti, VIP darshan, a private boat, food and silk walks. INR 8,999 all-inclusive.",
    },
    kind: "multi-day",
    name: "Banaras Unfiltered",
    length: "2 nights · 3 days",
    tagline: "Three days to understand a city that has been burning for five thousand years — with a small group, and a guide who knows its character.",
    hero: { image: "/images/aarti-night.jpg", alt: "The Ganga Aarti at night in Varanasi" },
    stats: [
      { value: "8,999", label: "INR per person, all-inclusive", icon: "wallet" },
      { value: "4–8", label: "travellers in a group", icon: "users" },
      { value: "Fri–Sun", label: "every weekend", icon: "calendar" },
      { value: "1", label: "private boat for your group", icon: "boat" },
    ],
    days: [
      {
        n: 1,
        title: "Fire and the old city",
        line: "Arrive, sit beside the Aarti, then the old city after dark.",
        image: "/images/aarti-night.jpg",
        imageAlt: "Priests perform the Ganga Aarti at night",
        stops: [
          { title: "Pickup & check in", note: "Private AC pickup from the airport or station, a welcome kit and a briefing with your Kashi companion at Dev Residency or similar.", icon: "car" },
          { title: "Rest & unwind", note: "Time at the hotel — no rush, no itinerary.", icon: "hotel" },
          { title: "The Ganga Aarti, front row", note: "Reserved seats beside the main Aarti at Dashashwamedh; float diyas and share kulhad chai as the crowds thin.", icon: "flame" },
          { title: "Night food walk", note: "Chowk and the old city — tamatar chaat, aloo tikki, Banarasi paan and thandai, each with the vendor's story.", icon: "walk" },
          { title: "Kaal Bhairav darshan", note: "The fierce guardian of Kashi, then Mrityunjay Mahadev and the ancient Dhanvantari well.", icon: "temple" },
        ],
      },
      {
        n: 2,
        title: "The river at first light",
        line: "Darshan before dawn, your own boat past Manikarnika, and the weavers' lanes.",
        image: "/images/sunrise-boats.jpg",
        imageAlt: "Boats on the Ganga at sunrise",
        stops: [
          { title: "VIP darshan before dawn", note: "Kashi Vishwanath before the crowds, then Annapurna and Vishalakshi — one of the 51 Shakti Peethas.", icon: "temple" },
          { title: "Banarasi breakfast", note: "Kachori sabzi, jalebi and chai at an old-city institution.", icon: "walk" },
          { title: "Private boat ride", note: "Your group's own boat from Panchaganga, past the painted ghats and Manikarnika, to Harishchandra.", icon: "boat" },
          { title: "Lunch & rest", note: "Back to the hotel for a proper rest.", icon: "hotel" },
          { title: "Silk walk, Madanpura", note: "Weaver homes where families have worked the loom for 15–20 generations — watch, then buy at source.", icon: "walk" },
          { title: "Evening temples & BHU", note: "Durga Kund, Tulsi Manas where the Ramcharitmanas was written, Sankat Mochan and the New Vishwanath Temple.", icon: "temple" },
        ],
      },
      {
        n: 3,
        title: "Farewell to the ghats",
        line: "Subah-e-Banaras at Assi, one last food walk, and home.",
        image: "/images/fog-boats.jpg",
        imageAlt: "Boats in the morning mist on the Ganga",
        stops: [
          { title: "Morning at Assi Ghat", note: "Subah-e-Banaras — yoga and Vedic chanting — then north past Tulsi and Chet Singh ghats, and a farewell chai by the river.", icon: "walk" },
          { title: "Farewell food walk", note: "Assi and Lanka: kachori, jalebi, kulhad chai and lassi — the definitive Banarasi morning.", icon: "walk" },
          { title: "Ramnagar Fort", note: "A short drive to the Maharaja's fort and museum, if time allows.", icon: "fort" },
          { title: "Drop-off", note: "Private AC transfer to the airport or station, with a parting handwritten note from your companion.", icon: "car" },
        ],
      },
    ],
    river: {
      ghats: ["Panchaganga", "Bundi Parkota", "Manikarnika", "Lalita", "Dashashwamedh", "Kedar", "Harishchandra"],
      kicker: "Day 2 · Your private boat",
      note: "Scroll, and the boat drifts downriver past the burning ghat. The route shifts with the season.",
      caption: "North → South · after breakfast",
    },
    included: [
      "2 nights, twin sharing (same gender)",
      "All transfers, incl. station pickup",
      "An expert guide for all 3 days",
      "Private boat for your group",
      "Breakfast & dinner",
      "Food walk & silk walk",
      "VIP Sugam Darshan",
      "Photos & video of your trip",
    ],
    excluded: ["Train or flight tickets", "Personal shopping", "Travel insurance", "Personal expenses"],
    stays: [
      {
        name: "3-star premium",
        line: "Twin sharing with a traveller of the same gender, close to the old city.",
        features: ["Air-conditioned rooms", "Welcome kit on arrival", "Dev Residency or similar"],
        hotels: [
          { name: "Hotel Dev Residency", image: "/images/hotel-dev.jpg" },
          { name: "Hotel Ganesha Palace", image: "/images/hotel-ganesha.jpg" },
          { name: "Hotel Elegance Inn", image: "/images/hotel-elegance.jpg" },
        ],
      },
    ],
    booking: {
      price: "INR 8,999",
      per: "per person, all-inclusive",
      group: "4–8 travellers",
      departures: [{ dates: "6–8 November 2026", days: "Fri – Sun", seats: 8 }],
      note: "Rooms are twin sharing with a traveller of the same gender. Travelling with a friend? Book two seats and mention it in your message.",
      kicker: "Small group · fixed dates",
    },
    goodFor: ["Solo travellers", "First visits", "Food lovers", "Small groups"],
    faqs: [
      {
        q: "Who travels on Banaras Unfiltered?",
        a: "Independent travellers — 4 to 8 in a group. You share the cab, the boat and the table, and the kind of people you'd want to meet anyway.",
        icon: "users",
      },
      {
        q: "Do I share a room?",
        a: "Yes. Rooms are twin sharing with a traveller of the same gender, in a 3-star premium hotel such as Dev Residency.",
        icon: "plus",
      },
      {
        q: "What does INR 8,999 cover?",
        a: "Two nights' stay, every transfer including station pickup, a guide for all three days, your group's private boat, breakfasts and dinners, the food and silk walks and VIP Sugam Darshan. Travel to Varanasi is not included.",
        icon: "wallet",
      },
      {
        q: "Can I carry my phone into Kashi Vishwanath?",
        a: "No. Phones, bags and leather items are not allowed inside; lockers are available near the gates, and we'll guide you through.",
        icon: "phone",
      },
      {
        q: "What should I wear?",
        a: "Modest, comfortable clothes for temples — shoulders and knees covered — and shoes that slip off easily.",
        icon: "shirt",
      },
      {
        q: "When is the next departure?",
        a: "6–8 November 2026, Friday to Sunday. Reserve a seat on WhatsApp and we confirm it with you directly.",
        icon: "waves",
      },
    ],
    stories: ["the-ganga-aarti-explained", "kashi-city-of-light", "dev-deepawali"],
    closing: {
      image: "/images/ghats-evening.jpg",
      alt: "The ghats of Varanasi at dusk",
      line: "Come on your own. Leave with a city — and the people you met in it.",
    },
  },
  {
    slug: "dev-deepawali-2026",
    seo: {
      title: "Dev Deepawali 2026 Varanasi Tour Package | WanderMate",
      description:
        "Dev Deepawali in Varanasi, 23–25 Nov 2026: Akashganga at Ramnagar Fort and a 4-hour private cruise past all 84 lit ghats. From ₹39,999, all-inclusive.",
    },
    kind: "multi-day",
    name: "Dev Deepawali 2026",
    length: "2 nights · 3 days",
    tagline: "One night a year the gods come down to bathe in the Ganga, and Kashi lights a lamp on every step to greet them.",
    hero: { image: "/images/dev-deepawali/fireworks.jpg", alt: "Fireworks over the lit ghats of Varanasi on Dev Deepawali" },
    heroVideo: "/videos/dev-deepawali.mp4",
    stats: [
      { value: "39,999", label: "INR per person, all-inclusive", icon: "wallet" },
      { value: "23–25", label: "November 2026", icon: "calendar" },
      { value: "4 hrs", label: "private cruise on the Ganga", icon: "boat" },
      { value: "84", label: "ghats lit with diyas", icon: "landmark" },
    ],
    features: [
      {
        kicker: "Day 2 · Ramnagar Fort",
        title: "Akashganga,",
        italic: "inside the fort.",
        line: "A seven-hour festival in the Maharaja's fort across the river, open only to guests with a pass.",
        items: [
          "Exclusive QR-based entry",
          "Ramnagar Fort museum walk",
          "Handicraft workshop & cultural exhibition",
          "Banaras hi-tea",
          "Classical music & Kathak",
          "Lanterns & fireworks",
          "A professional event photographer",
          "Security & event management",
          "A curated return gift",
        ],
        image: "/images/dev-deepawali/akashganga-kathak.jpg",
        alt: "Kathak dancers on the Akashganga stage at Ramnagar Fort",
      },
      {
        kicker: "Day 2 · 4-hour private cruise",
        title: "On the Ganga,",
        italic: "under a sky of fire.",
        line: "Board at 4:30 PM, watch the ghats glow at golden hour, and stay on the water until the last of the 84 is lit.",
        items: [
          "Private ghat boarding",
          "QR-based fast boarding",
          "Comfortable seating",
          "On-board washroom",
          "Refreshments",
          "Dedicated medical support",
          "A guide & storyteller",
          "The full 84-ghat view",
        ],
        image: "/images/dev-deepawali/fireworks.jpg",
        alt: "Fireworks over the lit ghats, seen from the river",
      },
    ],
    days: [
      {
        n: 1,
        title: "Old Kashi after dark",
        line: "Arrive, settle in, then the old city's lanes and the evening Aarti.",
        image: "/images/aarti-night.jpg",
        imageAlt: "The Ganga Aarti at night in Varanasi",
        stops: [
          { title: "Pickup & check in", note: "From the airport or railway station to your hotel, with a welcome kit and a briefing from your Kashi companion.", icon: "car" },
          { title: "Night food walk", note: "Chowk and the old city's lanes after dark, one stall and one story at a time.", icon: "walk" },
          { title: "The Ganga Aarti", note: "Premium riverside seating for the evening Aarti.", icon: "flame" },
          { title: "Diyas & kulhad chai", note: "Float a diya on the river, then chai in a clay cup as the crowds thin.", icon: "cup" },
        ],
      },
      {
        n: 2,
        title: "The night of lamps",
        line: "Akashganga at Ramnagar Fort by day, all 84 ghats lit from the river by night.",
        image: "/images/dev-deepawali/ramnagar-fort.jpg",
        imageAlt: "Ramnagar Fort on the Ganga, seen from above",
        stops: [
          { title: "Across to Ramnagar Fort", note: "Leave mid-morning for the Maharaja's fort on the far bank.", icon: "car" },
          { title: "Akashganga begins", note: "Exclusive QR-based entry to the festival inside the fort.", icon: "fort" },
          { title: "The fort museum", note: "A walk through the royal museum of the Kashi Naresh.", icon: "museum" },
          { title: "Craft workshop", note: "Weaving, zardozi and a cultural exhibition, with the makers.", icon: "craft" },
          { title: "Banaras hi-tea", note: "An afternoon spread of Banarasi sweets and savouries.", icon: "cup" },
          { title: "Classical music & Kathak", note: "Musicians of the Banaras gharana, then Kathak in the courtyard.", icon: "music" },
          { title: "Lanterns & fireworks", note: "Sky lanterns and a fireworks celebration before you head to the river.", icon: "sparkle" },
          { title: "The Dev Deepawali cruise", note: "Board your private boat at 4:30 PM. The ghats begin to glow at golden hour; by nightfall all 84 are one line of fire. Back at the fort by 8:30 PM.", icon: "boat" },
          { title: "Dinner at the fort", note: "Festival-night dinner at Ramnagar Fort: a Banarasi buffet, or fine dining on Luxury. At the hotel by 11 PM.", icon: "fort" },
        ],
      },
      {
        n: 3,
        title: "Blessings & farewell",
        line: "Assi at first light, the university town, and home.",
        image: "/images/sunrise-boats.jpg",
        imageAlt: "Boats on the Ganga at sunrise",
        stops: [
          { title: "Morning at Assi Ghat", note: "Subah-e-Banaras, a ghat walk with heritage stories, and a farewell chai by the river.", icon: "walk" },
          { title: "Banarasi breakfast", note: "Kachori, jalebi and chai at an old favourite.", icon: "cup" },
          { title: "BHU & New Vishwanath", note: "The university's campus and its marble Vishwanath temple.", icon: "campus" },
          { title: "Drop-off", note: "To the airport or railway station.", icon: "car" },
        ],
      },
    ],
    included: [
      "2 nights' accommodation",
      "Airport or station pickup & private transport",
      "WanderMate guide (personal guide on Luxury)",
      "Akashganga: a 7-hour festival experience",
      "4-hour Dev Deepawali Ganga cruise",
      "Breakfast & curated Banarasi experiences",
      "24×7 support on the trip",
      "Entry fees, permits & logistics",
    ],
    excluded: [
      "Airfare or train fare",
      "Some lunches",
      "Alcoholic drinks",
      "Travel insurance",
      "Camera fees where charged",
      "Early check-in or late check-out",
      "Personal expenses",
    ],
    stays: [
      {
        name: "Premium",
        kicker: "₹39,999 per person",
        line: "A premium 3-star hotel, with everything you need for the festival and nothing you don't.",
        features: ["Premium 3-star hotel", "Private sedan transfers", "A WanderMate guide", "Festival-night dinner at the fort"],
        hotels: [],
        image: "/images/dev-deepawali/river-aerial.jpg",
      },
      {
        name: "Luxury",
        kicker: "₹59,999 per person",
        line: "A 5-star stay and a guide of your own, for a Dev Deepawali that runs entirely at your pace.",
        features: ["5-star hotel", "Luxury vehicle or SUV", "A dedicated personal guide", "Fine dining at Ramnagar Fort"],
        hotels: [],
        image: "/images/golden-boats.jpg",
        featured: true,
      },
    ],
    booking: {
      price: "INR 39,999",
      per: "per person, GST included",
      group: "Limited seats",
      kicker: "One night a year · limited seats",
      departures: [{ dates: "23–25 November 2026", days: "Mon – Wed" }],
      tiers: [
        { name: "Premium", price: "INR 39,999", line: "3-star hotel · sedan · WanderMate guide" },
        { name: "Luxury", price: "INR 59,999", line: "5-star hotel · SUV · personal guide · fort fine dining" },
      ],
      note: "Pay 50% to confirm your seat and the rest 15 days before travel. Bookings are non-refundable, so we suggest travel insurance.",
    },
    goodFor: ["Couples", "Families", "Festival travellers", "First visits"],
    faqs: [
      {
        q: "When is Dev Deepawali in 2026?",
        a: "On Kartik Purnima, Tuesday 24 November 2026. The journey runs from 23 to 25 November, so you are in Kashi for the evening before, the festival itself and the morning after.",
        icon: "waves",
      },
      {
        q: "What is the difference between Premium and Luxury?",
        a: "Premium (₹39,999) has a 3-star hotel, a private sedan, a WanderMate guide and the festival-night dinner. Luxury (₹59,999) has a 5-star hotel, a luxury vehicle or SUV, a dedicated personal guide and fine dining at Ramnagar Fort. Both include Akashganga and the cruise.",
        icon: "wallet",
      },
      {
        q: "How do I book?",
        a: "Message us on WhatsApp, Instagram or this site. We can adjust your arrival time, stay length or add experiences. Pay 50% to confirm; the balance is due 15 days before travel.",
        icon: "phone",
      },
      {
        q: "Can I cancel or change my dates?",
        a: "No. Akashganga seats, cruise places and hotel rooms are held for you on a fixed festival date, so bookings are non-refundable and can't move to another date. Name changes may be possible up to 7 days before.",
        icon: "plus",
      },
      {
        q: "What should I carry?",
        a: "A government photo ID for every guest: hotels require it, and the festival and cruise may ask for it. A warm layer helps on the river at night in late November.",
        icon: "shirt",
      },
      {
        q: "Will it be crowded?",
        a: "Dev Deepawali is one of the busiest nights in Varanasi. That is why the evening is spent on your own boat and inside the fort, with entry passes and transfers arranged by us. Boarding times are fixed, so please follow your guide.",
        icon: "users",
      },
    ],
    terms: [
      {
        title: "Booking & payment",
        content:
          "A confirmed booking with WanderMate requires a 50% advance payment at the time of reservation. The remaining 50% balance must be paid no later than 15 days prior to the travel date, or as otherwise communicated by WanderMate at the time of booking. Bookings are confirmed only after the advance payment is realised, and remain subject to availability of Akashganga festival seats, cruise capacity, and hotel rooms. Given the highly limited nature of Akashganga seats and Dev Deepawali cruise capacity, early booking is strongly recommended. If the balance payment is not received by the due date, WanderMate reserves the right to cancel the booking, in which case the advance paid shall stand forfeited as per the cancellation policy below.",
      },
      {
        title: "Pricing",
        content:
          "The package is priced at ₹39,999 per person for the Premium tier and ₹59,999 per person for the Luxury tier, fully inclusive of GST and all applicable government taxes. There are no hidden charges beyond what is explicitly listed under Exclusions. Prices are subject to change for new bookings made closer to the event date, depending on Akashganga and hotel availability.",
      },
      {
        title: "Cancellation & refund",
        content:
          "This is a strict no-refund booking, owing to the fixed, festival-dated nature of the package and the limited third-party allocations it depends on — Akashganga festival seats, cruise capacity, and hotel block bookings. Once the 50% advance is paid, no cancellation, refund, or partial refund of the advance will be processed under any circumstances, including but not limited to a change in travel plans, illness, visa issues, or personal emergencies. If the balance 50% has also been paid, the full amount remains non-refundable. WanderMate strongly recommends that guests purchase independent travel insurance to cover any unforeseen circumstances.",
      },
      {
        title: "Rescheduling",
        content:
          "Because Dev Deepawali is a fixed annual date tied to the lunar calendar, rescheduling to an alternate date is not possible within the same booking. Name changes or guest substitutions may be considered on a case-by-case basis, subject to approval, and must be requested at least 7 days prior to the event date.",
      },
      {
        title: "Force majeure",
        content:
          "WanderMate is not liable for cancellations, delays, or itinerary changes caused by circumstances beyond its reasonable control, including but not limited to natural calamities, government restrictions, political disturbances, extreme weather, or partner and vendor cancellations. In such cases, WanderMate will make reasonable efforts to offer an alternative experience of comparable value, though no cash refund will be issued.",
      },
      {
        title: "Itinerary changes",
        content:
          "The itinerary, including timings, sequence of activities, and specific inclusions, may be modified by WanderMate or its partners — Akashganga and the partner hotels — due to operational, safety, weather, or crowd-related reasons. Any such change will be communicated to guests at the earliest opportunity, and WanderMate will ensure that the overall experience and value remain consistent with what was originally promised.",
      },
      {
        title: "Guest conduct & safety",
        content:
          "Guests are expected to follow the timing and instructions provided by WanderMate guides and Akashganga staff, particularly around boarding times for the cruise and entry to the festival, both of which are time-critical and cannot be relaxed once missed. WanderMate is not responsible for guests missing scheduled activities due to late arrival at designated meeting points. Guests with medical conditions are advised to inform WanderMate at the time of booking so that appropriate arrangements can be made in advance.",
      },
      {
        title: "Identification",
        content:
          "Valid government-issued photo identification is mandatory for hotel check-in and may be required for entry to the Akashganga festival and cruise. WanderMate is not responsible for denial of entry due to a guest's failure to carry valid identification.",
      },
      {
        title: "Liability",
        content:
          "WanderMate acts as a facilitator, coordinating accommodation, transport, guide services, and third-party experiences including the Akashganga festival and cruise. WanderMate is not liable for the independent acts, omissions, or service quality of third-party vendors, although all partners are vetted and selected for reliability. Travel is undertaken at the guest's own risk, and WanderMate recommends comprehensive travel insurance for all guests.",
      },
    ],
    stories: ["dev-deepawali", "the-ganga-aarti-explained", "kashi-city-of-light"],
    closing: {
      image: "/images/dev-deepawali/sparklers.jpg",
      alt: "Guests with sparklers on Dev Deepawali night",
      line: "One night a year, Kashi lights a lamp for every god. Be on the river when it does.",
    },
  },
];

/** A package name split for display: the last word or two set in italic ("Kashi in *Four Days*"). */
export function splitName(name: string): [string, string] {
  const words = name.split(" ");
  const n = words.length > 2 ? 2 : 1;
  return [words.slice(0, -n).join(" "), words.slice(-n).join(" ")];
}

export function getPackage(slug: string) {
  return packages.find((p) => p.slug === slug);
}
