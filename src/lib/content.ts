// Copy and facts come from the original WanderMate Wix site unless noted.

export const site = {
  name: "WanderMate",
  tagline: "Heritage and cultural journeys, from Kashi to Angkor",
  description:
    "Story-led heritage and cultural journeys led by local people: Kashi first, then Braj, Rishikesh and Rajputana, and beyond India to Nepal, Sri Lanka, Bhutan, Angkor, Java and Bali.",
  // Set NEXT_PUBLIC_SITE_URL to the production domain when deploying.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  whatsapp: "919214313559",
  phoneDisplay: "+91 92143 13559",
  instagram: "https://www.instagram.com/wandermate.official",
  instagramHandle: "@wandermate.official",
  devDeepawaliUrl: "https://dev-deepawali-2026.vercel.app/",
  rating: { score: 4.9, count: 121 },
  coordinates: "25.3176° N · 82.9739° E",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { href: "/destinations", label: "Destinations", image: "/images/temple-white.jpg" },
  { href: "/journeys", label: "Journeys", image: "/images/hero-ghats.jpg" },
  { href: "/experiences", label: "Experiences", image: "/images/aarti-night.jpg" },
  { href: "/journeys/banaras-unfiltered", label: "Solo Series", image: "/images/holi.jpg" },
  { href: "/journal", label: "Journal", image: "/images/priest-river.jpg" },
  { href: "/about", label: "About", image: "/images/group.jpg" },
  { href: "/plan", label: "Plan a journey", image: "/images/river-clouds.jpg" },
];

/* ---------- Feelings: the way travellers discover journeys ---------- */

export type FeelingId = "awe" | "devotion" | "curiosity" | "stillness" | "indulgence";

export const feelings: {
  id: FeelingId;
  label: string;
  line: string;
  image: string;
}[] = [
  {
    id: "awe",
    label: "Awe",
    line: "A thousand lamps on the river, and a city that has never once gone dark.",
    image: "/images/aarti-priest.jpg",
  },
  {
    id: "devotion",
    label: "Devotion",
    line: "Darshan before dawn at Kashi Vishwanath, and the temples most pilgrims miss.",
    image: "/images/young-priests.jpg",
  },
  {
    id: "curiosity",
    label: "Curiosity",
    line: "Weavers' lanes, street-side kitchens and stories passed down for twenty generations.",
    image: "/images/ghat-temple.jpg",
  },
  {
    id: "stillness",
    label: "Stillness",
    line: "Mist on the Ganga at first light, from the middle of the river, with no one else around.",
    image: "/images/fog-boats.jpg",
  },
  {
    id: "indulgence",
    label: "Indulgence",
    line: "A private Satvik feast on a rooftop above the evening Aarti.",
    image: "/images/ghats-lamps.jpg",
  },
];

/* ---------- Experiences ---------- */

export type Experience = {
  slug: string;
  title: string;
  kicker: string;
  time: string;
  duration: string;
  image: string;
  feelings: FeelingId[];
  body: string;
};

export const experiences: Experience[] = [
  {
    slug: "temple-circuit",
    title: "Temple Circuit & Sugam Darshan",
    kicker: "Before the crowds gather",
    time: "04:30",
    duration: "3 hrs",
    image: "/images/young-priests.jpg",
    feelings: ["devotion", "awe"],
    body: "Kashi Vishwanath, Annapurna and Vishalakshi — one of the 51 Shakti Peethas — before dawn, plus Kaal Bhairav, Durga Kund, Tulsi Manas and Sankat Mochan. Skip the queue with VIP Sugam Darshan.",
  },
  {
    slug: "sunrise-boat",
    title: "Private Sunrise Boat",
    kicker: "For your group only",
    time: "06:00",
    duration: "2 hrs",
    image: "/images/sunrise-boats.jpg",
    feelings: ["stillness", "awe"],
    body: "From Panchaganga past the painted ghats of Bundi Parkota, Manikarnika, Lalita, Dashashwamedh, Kedar and Harishchandra — watching the city wake from the middle of the river.",
  },
  {
    slug: "subah-e-banaras",
    title: "Subah-e-Banaras",
    kicker: "Assi Ghat at dawn",
    time: "05:30",
    duration: "2 hrs",
    image: "/images/fog-boats.jpg",
    feelings: ["stillness", "devotion"],
    body: "Yoga, Vedic chanting and morning ragas at Assi, then a quiet walk north past Tulsi and Chet Singh ghats, an ancient akhada, and a farewell chai by the river.",
  },
  {
    slug: "silk-walk",
    title: "The Silk Walk",
    kicker: "Madanpura weaver quarters",
    time: "11:00",
    duration: "3 hrs",
    image: "/images/ghat-temple.jpg",
    feelings: ["curiosity"],
    body: "Lanes where every household runs a handloom. Meet master weavers whose families have made Banarasi silk for 15 to 20 generations, and buy at source — no middlemen, no showrooms.",
  },
  {
    slug: "ganga-aarti",
    title: "Ganga Aarti, Front Row",
    kicker: "Premium riverside seating",
    time: "18:30",
    duration: "2 hrs",
    image: "/images/aarti-night.jpg",
    feelings: ["awe", "devotion"],
    body: "Reserved seats beside the main ceremony at Dashashwamedh Ghat, then float diyas on the river and share kulhad chai as the crowds disperse.",
  },
  {
    slug: "food-walk",
    title: "Night Food Walk",
    kicker: "6–8 dishes, each with its story",
    time: "21:00",
    duration: "2.5 hrs",
    image: "/images/ghats-evening.jpg",
    feelings: ["curiosity", "indulgence"],
    body: "Tamatar chaat, aloo tikki, Banarasi paan, thandai, kachori sabzi, jalebi and palangtod mithai in season — with the story of every vendor, dish and street.",
  },
  {
    slug: "soul-portrait",
    title: "Soul Portrait",
    kicker: "Photography & film",
    time: "Any hour",
    duration: "Flexible",
    image: "/images/portrait.jpg",
    feelings: ["indulgence", "awe"],
    body: "A photographer who knows where the light falls on the ghats, so you can stay present while your journey is captured.",
  },
  {
    slug: "ramnagar-fort",
    title: "Ramnagar Fort",
    kicker: "The royal museum",
    time: "15:00",
    duration: "2 hrs",
    image: "/images/golden-boats.jpg",
    feelings: ["curiosity"],
    body: "Cross the river to the seat of the Kashi Naresh for a guided walk through the fort and its royal museum.",
  },
];

/* ---------- Approach (Why WanderMate) ---------- */

export const approach = [
  {
    title: "A conversation first",
    body: "Message us on WhatsApp. A Kashi companion listens to what you want to see, feel and focus on — usually replying within two hours.",
  },
  {
    title: "Designed around you",
    body: "Custom planning, curated stays near the ghats and Kashi Vishwanath, and the right guide for your interests. Never a fixed coach tour.",
  },
  {
    title: "Local roots on the ground",
    body: "Expert guides, private chauffeurs and trusted local partners — with support from pickup to the farewell chai.",
  },
  {
    title: "Memories that last",
    body: "Optional photography and film, and a handwritten note from your companion to take home.",
  },
];

export const whyKashi = [
  "Varanasi isn't just a destination; it's an immersive experience in one of the world's oldest continuously inhabited cities, where life, death, and profound spirituality exist side-by-side along the sacred Ganges.",
  "While the Ganga Aarti and the historic ghats rightfully draw millions, the city's true magic lies just off the main paths — in labyrinthine alleys that reveal hidden history, deep-cut folklore and vibrant local art.",
];

export const testimonials = [
  {
    quote:
      "They didn't treat me like just another traveller — they treated me like family. Their professionalism, kindness and personal touch turned a beautiful pilgrimage into an unforgettable memory.",
    name: "Shivani Mishra",
    place: "Kerala",
  },
  {
    quote:
      "Lots of options and flexibility to make a bespoke itinerary for us. Good coverage of the temples we wanted darshan in, and a memorable food walk of chaat, kachori, paan and lassi. He delivered what he promised.",
    name: "Vidya Akkireddy",
    place: "Delhi",
  },
  {
    quote:
      "Helped out in everything from temple visits to the food walk to good eating joints and shopping. Very friendly and kind — he's like a younger brother now.",
    name: "Mr. Vihaan",
    place: "Delhi",
  },
  {
    quote:
      "A great experience with the team. Excellent interaction, and all the facilities provided by the WanderMate team are amazing. I'll definitely suggest everyone.",
    name: "Bratai Kundu",
    place: "Delhi",
  },
  {
    quote: "Very well arranged trip, ready to adjust as per your convenience. Add on boat rides and a personal photographer.",
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
    bio: "An IIT Delhi alumnus with a meticulous eye for premium aesthetics, Ayush architects the digital and visual experience — the booking systems, concierge tools and storytelling that let travellers experience the soul of Varanasi with zero friction.",
  },
  {
    name: "Ritesh Singh",
    role: "Co-founder · Logistics",
    image: "/images/team-ritesh.jpg",
    position: "50% 35%",
    bio: "The operational force behind every trip. Ritesh curates the network of local partners, private chauffeurs and expert guides, so every itinerary flows and you never have to think about the details.",
  },
  {
    name: "Santosh",
    role: "Varanasi expert · Guide",
    image: "/images/team-santosh.jpg",
    position: "50% 70%",
    bio: "Santosh brings the ancient stories of Varanasi to life. His local knowledge and access let guests experience the raw, spiritual beauty of Banaras far beyond the tourist trail.",
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
    body: "A family-owned landmark built in 1916 and a traveller's lodge since 1938 — Indo-Saracenic architecture, a pure-vegetarian kitchen and quiet, personal service.",
  },
  {
    name: "Hotel Elegance Inn",
    image: "/images/hotel-elegance.jpg",
    body: "Conveniently near the railway station and a short distance from Kashi Vishwanath Temple and the ghats.",
  },
];
