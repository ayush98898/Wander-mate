// All copy and facts below come from the original WanderMate Wix site.

export const site = {
  name: "WanderMate",
  tagline: "Cultural & heritage journeys through Varanasi",
  description:
    "Bespoke cultural and heritage tours of Varanasi (Kashi) — ghats, temples, Ganga Aarti, silk weavers, food walks and the hidden lanes of the world's oldest living city.",
  // Set NEXT_PUBLIC_SITE_URL to the production domain when deploying.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  whatsapp: "919214313559",
  phoneDisplay: "+91 92143 13559",
  instagram: "https://www.instagram.com/wandermate.official",
  instagramHandle: "@wandermate.official",
  devDeepawaliUrl: "https://dev-deepawali-2026.vercel.app/",
  rating: { score: 4.9, count: 121 },
};

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { href: "/packages", label: "Packages" },
  { href: "/banaras-unfiltered", label: "Solo Series" },
  { href: "/experiences", label: "Experiences" },
  { href: "/plan", label: "Plan your trip" },
  { href: "/journal", label: "Journal" },
  { href: "/about", label: "About" },
];

export const whyKashi = [
  "Varanasi isn't just a destination; it's an immersive experience in one of the world's oldest continuously inhabited cities, where life, death, and profound spirituality exist side-by-side along the sacred Ganges River.",
  "While the iconic, mesmerizing Ganga Aarti and the historic ghats rightfully draw millions, the city's true magic often lies just off the main paths. Visitors should come to explore the labyrinthine alleys that reveal a wealth of hidden history, deep-cut folklore, and vibrant local art.",
  "From discovering lesser-known, ancient temples tucked away from the crowds to connecting with generations of skilled local artisans, Varanasi offers a soul-stirring, layered journey that deeply rewards those willing to wander its hidden trails.",
];

export const pillars = [
  {
    title: "Local Support",
    body: "A Kashi companion on the ground and on WhatsApp, from pickup to farewell.",
  },
  {
    title: "Curated Stays",
    body: "Hand-picked heritage and premium properties close to the ghats and Kashi Vishwanath.",
  },
  {
    title: "Custom Planning",
    body: "Every itinerary is shaped around what you want to see, feel and focus on.",
  },
  {
    title: "Expert Guide",
    body: "Guides who know the city's character — its stories, not just its monuments.",
  },
  {
    title: "Timeless Memories",
    body: "Optional photography and videography so you can be present while we capture it.",
  },
];

export type Tier = {
  id: "classic" | "premium" | "luxury";
  name: string;
  bestFor: string;
  image: string;
  features: string[];
};

export const tiers: Tier[] = [
  {
    id: "classic",
    name: "Classic",
    bestFor: "Budget friendly — ideal for solo backpackers",
    image: "/images/stairs-sunset.jpg",
    features: [
      "Clean, well-located stays near the ghats",
      "Shared boat ride & Ganga Aarti",
      "Local guide for the old city",
      "Station / airport transfers",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    bestFor: "Hassle-free travel with premium hospitality",
    image: "/images/golden-boats.jpg",
    features: [
      "3-star premium hotels like Dev Residency",
      "Private sunrise boat & premium Aarti seating",
      "Expert guide, food walk & silk walk",
      "Private AC vehicle throughout",
    ],
  },
  {
    id: "luxury",
    name: "Luxury",
    bestFor:
      "A serene spiritual journey with premium hospitality and complete privacy",
    image: "/images/hero-ghats.jpg",
    features: [
      "Heritage & luxury riverside stays",
      "Private rituals, VIP Sugam Darshan",
      "Rooftop Satvik dining over the Aarti",
      "Personal photographer & chauffeur",
    ],
  },
];

export const durations = [1, 2, 3, 4, 5, 6].map((n) => ({
  nights: n,
  label: `${n} Night${n > 1 ? "s" : ""} ${n + 1} Days`,
  code: `${n}N${n + 1}D`,
}));

export const circuits = [
  {
    name: "The Spiritual Triangle",
    route: "Kashi + Ayodhya + Prayagraj",
    image: "/images/temple-white.jpg",
    body: "Three of India's holiest cities in one journey — Kashi Vishwanath, Ram Janmabhoomi and the Sangam at Prayagraj.",
  },
  {
    name: "Kashi + Ayodhya",
    route: "Kashi + Ayodhya",
    image: "/images/aarti-priest.jpg",
    body: "The city of Shiva and the city of Ram — temples, ghats and the evening Aarti on two sacred rivers.",
  },
  {
    name: "Kashi",
    route: "Varanasi only",
    image: "/images/ghats-lamps.jpg",
    body: "Go deep on one city — ghats, lanes, weavers, food and the river at every hour of the day.",
  },
];

export const experiences = [
  {
    slug: "ganga-aarti",
    title: "Ganga Aarti",
    kicker: "Premium riverside seating",
    image: "/images/aarti-night.jpg",
    body: "Reserved premium seats right next to the main ceremony at Dashashwamedh Ghat, then float traditional diyas on the river and share kulhad chai as the crowds disperse.",
  },
  {
    slug: "sunrise-boat",
    title: "Sunrise Boat Ride",
    kicker: "Private, for your group only",
    image: "/images/sunrise-boats.jpg",
    body: "From Panchaganga past the painted ghats of Bundi Parkota, Manikarnika, Lalita, Dashashwamedh, Kedar and Harishchandra — watching the city wake from the middle of the river.",
  },
  {
    slug: "silk-walk",
    title: "Silk Walk",
    kicker: "Madanpura weaver quarters",
    image: "/images/ghat-temple.jpg",
    body: "Walk lanes where every household runs a handloom. Meet master weavers whose families have made Banarasi silk for 15 to 20 generations, and buy at source — no middlemen, no showrooms.",
  },
  {
    slug: "food-walk",
    title: "Varanasi Food Walk",
    kicker: "6–8 dishes, each with its story",
    image: "/images/ghats-evening.jpg",
    body: "Tamatar chaat, aloo tikki, Banarasi paan, thandai, kachori sabzi, jalebi and palangtod mithai in season — with the story of every vendor, dish and street.",
  },
  {
    slug: "temple-circuit",
    title: "Temple Circuit & Sugam Darshan",
    kicker: "Before the crowds gather",
    image: "/images/young-priests.jpg",
    body: "Kashi Vishwanath, Annapurna and Vishalakshi — one of the 51 Shakti Peethas — at 4:30 AM, plus Kaal Bhairav, Durga Kund, Tulsi Manas and Sankat Mochan. Skip the queue with VIP Sugam Darshan.",
  },
  {
    slug: "soul-portrait",
    title: "Soul Portrait",
    kicker: "Photography & videography",
    image: "/images/portrait.jpg",
    body: "A photographer who knows where the light falls on the ghats, so you can stay present while your journey is captured.",
  },
  {
    slug: "subah-e-banaras",
    title: "Subah-e-Banaras",
    kicker: "Assi Ghat at dawn",
    image: "/images/fog-boats.jpg",
    body: "Yoga, Vedic chanting and morning ragas at Assi, then a quiet walk north past Tulsi and Chet Singh ghats, an ancient akhada, and a farewell chai by the river.",
  },
  {
    slug: "ramnagar-fort",
    title: "Ramnagar Fort",
    kicker: "Royal museum walk",
    image: "/images/golden-boats.jpg",
    body: "Cross the river to the 18th-century seat of the Kashi Naresh — vintage cars, palanquins, weapons and an astronomical clock.",
  },
];

export const testimonials = [
  {
    title: "Felt like family",
    quote:
      "I cannot thank this team enough for making my Kashi trip so special. From the very beginning, they didn't treat me like just another traveler — they treated me like family. Their professionalism, kindness, and personal touch turned a beautiful pilgrimage into an unforgettable memory.",
    name: "Shivani Mishra",
    place: "Kerala",
  },
  {
    title: "Great Food Walk Experience",
    quote:
      "Ritesh was polite, professional and very helpful and had lots of options and flexibility to make a bespoke itinerary for us. We had a good coverage for the temples we wanted darshan in and also a memorable food walk of chaat, kachori, paan and lassi. He delivered what he promised.",
    name: "Vidya Akkireddy",
    place: "Delhi",
  },
  {
    title: "Amazing hospitality",
    quote:
      "Ritesh was the best — helped out in everything from temple visits to food walk to taking us to good eating joints and shopping. Very friendly and kind, will go out of his way to help. He's like a younger brother now.",
    name: "Mr. Vihaan",
    place: "Delhi",
  },
  {
    title: "Great Experience",
    quote:
      "I had recently visited Varanasi (Kashi) and had a great experience with the team. Excellent interaction and all the facilities provided by the WanderMate team are amazing. I'll definitely suggest everyone.",
    name: "Bratai Kundu",
    place: "Delhi",
  },
  {
    title: "Great trip arranged by host",
    quote:
      "Very well arranged trip, ready to adjust as per your convenience. Add on boat rides and a personal photographer.",
    name: "Tripadvisor traveller",
    place: "Delhi",
  },
];

export const team = [
  {
    name: "Ayush Singh",
    role: "Co-founder",
    image: "/images/team-ayush.jpg",
    position: "50% 30%",
    bio: "An IIT Delhi alumnus with a meticulous eye for premium aesthetics, Ayush architects the digital and visual experience — the booking systems, concierge tools and storytelling that let travellers experience the authentic soul of Varanasi with zero friction.",
  },
  {
    name: "Ritesh Singh",
    role: "Co-founder & Logistics Head",
    image: "/images/team-ritesh.jpg",
    position: "50% 35%",
    bio: "The operational force behind every trip. Ritesh curates our trusted network of local partners, private chauffeurs and expert guides, so every itinerary flows and you never have to think about the details.",
  },
  {
    name: "Santosh",
    role: "Varanasi Expert & Guide",
    image: "/images/team-santosh.jpg",
    position: "50% 70%",
    bio: "Santosh brings the ancient stories of Varanasi to life. His profound local knowledge and access let our guests experience the raw, spiritual beauty of Banaras far beyond the typical tourist trail.",
  },
];

export const hotels = [
  {
    name: "Hotel Dev Residency",
    image: "/images/hotel-dev.jpg",
    body: "A 3-star hotel near the railway station and very close to Kashi Vishwanath Temple, with the ghats a short ride away.",
  },
  {
    name: "Hotel Ganesha Palace",
    image: "/images/hotel-ganesha.jpg",
    body: "A family-owned landmark built in 1916 by a Bengali saint and a traveller's lodge since 1938 — Indo-Saracenic architecture, a pure-vegetarian kitchen and quiet, personal service.",
  },
  {
    name: "Hotel Elegance Inn",
    image: "/images/hotel-elegance.jpg",
    body: "Conveniently near the railway station and a short distance from Kashi Vishwanath Temple and the ghats.",
  },
];
