// Wandermate Premium 2N3D — "Varanasi, the eternal experience".
// Transcribed from the Premium 2N3D brochure (PDF). Keep in step with it.

export const premium = {
  name: "Wandermate Premium",
  tagline: "First encounter with Kashi",
  duration: "2 nights · 3 days",
  intro:
    "Our most popular choice: a deeper, more personalised journey through Varanasi's spiritual and cultural layers. You stay in a boutique heritage property, travel in semi-private arrangements, and get access to experiences not available in standard tours.",
  facts: [
    { k: "Length", v: "2 nights, 3 days" },
    { k: "Stay", v: "Boutique heritage hotel" },
    { k: "On the river", v: "Private wooden boat" },
    { k: "Food", v: "Three food walks" },
    { k: "With you", v: "A Kashi companion" },
  ],
};

export const whyVaranasi = {
  text: "Varanasi, also known as Kashi or Banaras, is one of the world's oldest living cities, stretching along the sacred Ganges for over 3,000 years. Every dawn, thousands of pilgrims descend the ghats to bathe in the holy river. Every dusk, the sky erupts in the golden flames of the Ganga Aarti. This is a city where every stone, every alley and every ritual carries the weight of millennia.",
  stats: [
    { n: "84", l: "sacred ghats" },
    { n: "3,000+", l: "years of continuous civilisation" },
    { n: "23,000+", l: "temples" },
    { n: "1 of 12", l: "Jyotirlingas" },
  ],
};

export const founders = [
  {
    name: "Vineet",
    role: "Co-founder",
    image: "/images/premium/f1.jpg",
    quote: [
      "For me, Kashi isn't a destination you check off a list — it's a city you have to feel. Growing up around this ancient energy, I watched too many travellers get overwhelmed by the chaos, missing the subtle magic that makes Varanasi so profound.",
      "When I curated our Premium package, I designed it exactly how I would host my own closest friends. To me, success is that moment when Kashi stops feeling foreign, and starts feeling like a piece of who you are.",
    ],
  },
  {
    name: "Ritesh Singh",
    role: "Co-founder",
    image: "/images/premium/f2.jpg",
    quote: [
      "When Ayush and I started Wandermate, we had one clear goal: to stop people from just sightseeing in Varanasi and actually help them experience it.",
      "Premium is all about exclusive access and unhurried moments — taking care of the logistics so perfectly that your mind is completely free to wander. We didn't build this to run standard tours; we built it to give you a profound, effortless connection to the city we love.",
    ],
  },
];

export type Moment = {
  time?: string;
  title: string;
  points: string[];
  optional?: boolean;
  image?: { src: string; alt: string; position?: string };
};
export type Day = { n: number; title: string; image: string; alt: string; position?: string; moments: Moment[] };

export const days: Day[] = [
  {
    n: 1,
    title: "Arrival, the central old city & Ganga Aarti",
    image: "/images/premium/stock/day1-aarti-priest.jpg",
    alt: "A priest in saffron raises the brass Aarti lamp at Dashashwamedh Ghat",
    position: "50% 30%",
    moments: [
      {
        title: "Arrival & check-in",
        points: [
          "Private AC pickup from the airport or railway station, with a greeting from your driver and bottled water",
          "Check-in at a premium property or boutique hotel",
          "Welcome kit: welcome drink, a handwritten city note and a printed itinerary booklet",
          "A briefing with your Kashi companion about the days ahead",
        ],
      },
      {
        title: "Rest & unwind",
        points: ["A quiet rest at the property — no rush, no itinerary", "Optional light room service or a short nap"],
      },
      {
        time: "Evening",
        title: "The Ganga Aarti, premium riverside",
        image: { src: "/images/premium/stock/aarti-flame.jpg", alt: "The tiered Aarti flame raised into the night", position: "50% 25%" },
        points: [
          "Head to the ghats with your local companion",
          "Disembark at Dashashwamedh Ghat and take reserved premium seats right next to the main ceremony",
          "Float traditional diyas on the river and share kulhad chai as the crowds disperse",
        ],
      },
      {
        time: "Night",
        title: "Street food walk — Chowk & the old city",
        image: { src: "/images/premium/stock/food-tikki.jpg", alt: "Aloo tikki crisping on a street-side tawa" },
        points: [
          "Tamatar chaat, aloo tikki, Banarasi paan, gol-gappe, thandai, palangtod mithai (seasonal) and Banarasi sweets",
          "Each dish with its full story — the vendor, the history, the craft behind it",
          "Hidden bylanes, lit temples and the completely different energy of old Kashi at night",
        ],
      },
      {
        title: "Darshan at Kaal Bhairav",
        points: [
          "Kaal Bhairav — the fierce guardian deity of the city, offered liquor as prasad",
          "Mrityunjay Mahadev — the Shiva who conquers death, with the ancient Dhanvantari healing well inside",
          "Back to the property to rest — early start tomorrow",
        ],
      },
    ],
  },
  {
    n: 2,
    title: "Pre-dawn river, north city temples & Manikarnika",
    image: "/images/premium/stock/day2-vishwanath.jpg",
    alt: "The golden spire of Kashi Vishwanath",
    position: "50% 35%",
    moments: [
      {
        time: "4:30 am",
        title: "Temple circuit — north & central",
        points: [
          "Kashi Vishwanath — VIP darshan before the crowds gather; the Jyotirlinga and its golden spire",
          "Annapurna — goddess of nourishment, right beside Vishwanath and almost always missed",
          "Vishalakshi — 250 metres away, one of India's 51 Shakti Peethas, the eye of Sati",
        ],
      },
      {
        time: "Morning",
        title: "Banarasi breakfast & your private boat",
        image: { src: "/images/premium/stock/food-jalebi.jpg", alt: "Jalebi frying in a wide iron pan" },
        points: [
          "Kachori sabzi, jalebi and chai at an iconic old-city shop — with the story of the shop, the dish and the street",
          "Board your private boat at Panchaganga Ghat",
        ],
      },
      {
        title: "Lunch & rest",
        points: ["Back to the property for genuine rest"],
      },
      {
        time: "Afternoon",
        title: "The silk walk — Madanpura weavers",
        optional: true,
        points: [
          "The Madanpura and Lallapura weaver quarters, where every household runs a handloom",
          "Karkhanas with pit looms and jacquard looms at work; master weavers 15 to 20 generations deep",
          "The full process — thread dyeing, warp setting, zari work and finishing",
          "Buy directly from the weavers at source prices, then explore pure silk, brocade, tissue and georgette",
        ],
      },
      {
        time: "Evening",
        title: "South Kashi temples & BHU",
        points: [
          "Durga Kund — the iconic red temple and its sacred tank",
          "Tulsi Manas — white marble, where Tulsidas wrote the Ramcharitmanas",
          "Sankat Mochan Hanuman — founded by Tulsidas, alive with devotion and music",
          "New Vishwanath Temple and a walk through the BHU campus, one of India's most beautiful",
        ],
      },
    ],
  },
  {
    n: 3,
    title: "Morning ghats, street food & farewell",
    image: "/images/premium/stock/day3-boats.jpg",
    alt: "Wooden boats moored below the ghats in clear morning light",
    position: "50% 55%",
    moments: [
      {
        time: "First light",
        title: "The final ghat walk",
        points: [
          "Assi Ghat for Subah-e-Banaras — yoga, Vedic chanting at the river",
          "North through Tulsi Ghat and past Chet Singh Ghat, quieter and more contemplative at dawn",
          "An ancient akhada and the history of the ghats",
          "A farewell chai at a heritage ghat — one last sit with the river",
        ],
      },
      {
        title: "Farewell breakfast — Assi & Lanka",
        points: [
          "Kachori sabzi, jalebi, kulhad chai and lassi — the definitive Banarasi morning",
          "Final stories and reflections about the city from your companion",
        ],
      },
      {
        title: "Checkout & departure",
        points: [
          "Private AC transfer to the airport or railway station",
          "A parting handwritten note from your Kashi companion, and a surprise gift",
        ],
      },
    ],
  },
];

/** Day 2's boat, ghat by ghat, from Panchaganga and back. */
export const boatRoute = [
  "Panchaganga",
  "Bundi Parkota",
  "Manikarnika",
  "Lalita",
  "Dashashwamedh",
  "Kedar",
  "Harishchandra",
  "Panchaganga",
];

export const inclusions = [
  {
    title: "Stay",
    items: [
      "2 nights at a curated boutique heritage property or premium haveli",
      "Daily breakfast",
      "Welcome drink and a cold towel on arrival",
    ],
  },
  {
    title: "Transfers",
    items: [
      "Private AC pickup and drop, airport or railway station",
      "All local transfers in a private AC vehicle — or an auto where cars can't go",
      "A personalised pre-trip call to understand your preferences",
    ],
  },
  {
    title: "On the river",
    items: ["A private wooden boat for every ghat experience — never shared", "Diyas floated on the river after the Aarti"],
  },
  {
    title: "Temples",
    items: [
      "Kashi Vishwanath with VIP darshan facilitation",
      "Annapurna, Vishalakshi and Kaal Bhairav",
      "Mrityunjay Mahadev with the story of the Dhanvantari well",
      "Durga, Tulsi Manas, Sankat Mochan and New Vishwanath",
    ],
  },
  {
    title: "Walks",
    items: [
      "Old-city heritage walk — Vishwanath Gali, Alamgir Mosque, Thatheri Bazaar",
      "A sensory walk through the deeper old-city lanes",
      "A working Banarasi silk karkhana with a handloom demonstration",
    ],
  },
  {
    title: "Food",
    items: [
      "Night street food walk with a local food storyteller",
      "Morning food walk around Chowk and old Banaras",
      "Farewell breakfast of kachori sabzi and lassi at Assi and Lanka",
    ],
  },
  {
    title: "Support",
    items: ["A personal Kashi companion throughout", "24/7 WhatsApp support for your whole stay"],
  },
  {
    title: "Little things",
    items: [
      "Wandermate welcome kit with a handwritten city note",
      "A printed, personalised itinerary booklet",
      "A Sanskrit shloka handwritten for you on handmade paper",
    ],
  },
];

export const exclusions = [
  "Flights or trains to and from Varanasi",
  "Lunches and dinners, apart from the three food walks",
  "Personal shopping and souvenirs",
  "Anything not listed as included",
];

export const stays = [
  { name: "Hotel Elegance Inn", image: "/images/hotel-elegance.jpg" },
  { name: "Hotel Ganesha Palace", image: "/images/hotel-ganesha.jpg" },
];

export const addOns = [
  {
    name: "Photography session",
    price: "₹3,499",
    unit: "per session",
    text: "A 2–3 hour professional shoot at iconic ghats. An edited gallery of 50+ images within 48 hours.",
  },
  {
    name: "Day trip: Vindhyachal",
    price: "₹2,999",
    unit: "per car",
    text: "Vindhyavasini Devi Temple and the surrounding circuit. Half or full day.",
  },
  {
    name: "Day trip: Prayagraj",
    price: "₹3,499",
    unit: "per car",
    text: "A full day by private car: Triveni Sangam, Allahabad Fort and Anand Bhawan.",
  },
  {
    name: "Day trip: Ayodhya",
    price: "₹6,499",
    unit: "per car",
    text: "A full private day: Ram Janmabhoomi, Hanuman Garhi and the Saryu Aarti.",
  },
  {
    name: "Pujas & rituals",
    price: "On request",
    unit: "",
    text: "Mangala Aarti, Kaal Bhairav puja, Sankalp Aarti, Rudrabhishek and other pujas.",
  },
  {
    name: "Classical music evening",
    price: "On request",
    unit: "",
    text: "A private 90-minute performance — sarangi, tabla or sitar — on a boat or in a heritage setting.",
  },
];

export const places = [
  {
    title: "Temples",
    items: [
      "Kashi Vishwanath",
      "Annapurna",
      "Vishalakshi",
      "Kaal Bhairav",
      "Mrityunjay Mahadev",
      "Durga Kund",
      "Tulsi Manas",
      "Sankat Mochan Hanuman",
      "New Vishwanath",
    ],
  },
  {
    title: "Ghats",
    items: [
      "Dashashwamedh",
      "Assi",
      "Panchaganga",
      "Tulsi",
      "Chet Singh",
      "Bundi Parkota",
      "Manikarnika",
      "Lalita",
      "Kedar",
      "Harishchandra",
    ],
  },
  {
    title: "Neighbourhoods",
    items: [
      "Chowk",
      "The central old city",
      "Madanpura weavers",
      "Lallapura weavers",
      "BHU campus",
      "Lanka",
      "An ancient akhada",
    ],
  },
];

export const dayTrips = [
  {
    name: "Vindhyachal",
    km: 70,
    items: ["Vindhyavasini Devi — a powerful Shakti Peetha", "Ashtabhuja Temple & Kali Khoh", "Ganges-side ghats and a boat ritual"],
  },
  {
    name: "Prayagraj",
    km: 125,
    items: [
      "Triveni Sangam — Ganga, Yamuna & Saraswati",
      "Anand Bhawan, the Nehru family home",
      "Akbar's 16th-century Allahabad Fort",
      "The 'lying down' Hanuman",
    ],
  },
  {
    name: "Ayodhya",
    km: 200,
    items: [
      "Ram Janmabhoomi",
      "Hanuman Garhi — the 76-step fort temple",
      "Kanak Bhawan, the golden crown temple",
      "The Saryu evening Aarti",
      "Nageshwarnath Temple & Mani Parvat",
    ],
  },
];

export const booking = [
  {
    title: "Enquire",
    text: "WhatsApp +91 92143 13559, Instagram, or wandermate.in — with your dates, group size and package.",
  },
  { title: "Customise", text: "A tailored itinerary and quote within 24 hours. We refine it until it's right." },
  { title: "Confirm", text: "A 50% advance confirms your booking. The balance is due 7 days before travel." },
  { title: "Travel", text: "We handle everything from here. Arrive in Varanasi and let us take care of you." },
  { title: "Share", text: "We'd love your review and photos — tag @wandermate.in on Instagram." },
];

export const reviews = [
  {
    quote:
      "I cannot thank this team enough for making my Kashi trip so special. From the very beginning, they didn't treat me like just another traveller — they treated me like family.",
    name: "Shivani Mishra",
    meta: "Jaipur · Luxury",
  },
  {
    quote:
      "Amazing hospitality. Ritesh was the best — helped out with everything from temple visits to the food walk, good eating joints and shopping. He's like a younger brother now.",
    name: "Navdeep",
    meta: "Delhi · Luxury",
  },
  {
    quote:
      "It was a great trip and well planned 3 days by Ritesh. He was always around to assist and guide with practical tips and advice.",
    name: "Ashish Garg",
    meta: "Delhi · Luxury",
  },
  {
    quote: "Banaras ghumo toh bas inke saath ghumo. Maza aa gaya. Best.",
    name: "Amit Goel",
    meta: "Jaipur · Luxury",
  },
  {
    quote:
      "A great experience with the team. Excellent interaction, and all the facilities provided by the Wandermate team are amazing. I'll definitely suggest everyone.",
    name: "Bratati Kundu",
    meta: "Delhi · Premium",
  },
];

export const contact = {
  phones: ["+91 92143 13559", "+91 84004 37772", "+91 80819 53302"],
  email: "info@wandermate.in",
  web: "wandermate.in",
  instagram: "wandermate.in",
  address: "First floor, B27/92-13, Durgakund Road, Jawahar Nagar Colony, Bhelupur, Varanasi, Uttar Pradesh 221005",
};

/** Full-width photo breaks between chapters. */
export const bands = {
  aarti: {
    src: "/images/premium/stock/band-aarti-fan.jpg",
    alt: "A priest raises the yak-tail fan during the evening Ganga Aarti",
    position: "50% 22%",
    line: "Every dusk, the sky erupts in the golden flames of the Ganga Aarti.",
    caption: "The evening Aarti, Dashashwamedh Ghat",
  },
  deepawali: {
    src: "/images/premium/stock/band-dev-deepawali.jpg",
    alt: "Fireworks over the Ganga on Dev Deepawali",
    position: "50% 30%",
    line: "Kashi is not just a city. It is an experience that lives within you.",
    caption: "Dev Deepawali on the Ganga",
  },
};
