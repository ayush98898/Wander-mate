// "Banaras Unfiltered" — WanderMate Solo Series, from the original site.

export const solo = {
  name: "Banaras Unfiltered",
  series: "WanderMate Solo Series",
  format: "2N · 3D small group",
  price: "INR 8,999",
  priceNote: "All inclusive, per person",
  schedule: "Fri to Sun",
  groupSize: "4–8 independent travellers",
  lede: "Three days to understand a city that has been burning for five thousand years.",
  quote:
    "Varanasi does not welcome you gently. It arrives all at once — the fire, the river, the sound of a thousand years happening simultaneously.",
  intro: [
    "Most solo travellers arrive and figure it out alone. They book a random boat, follow a crowd to the Aarti, eat wherever the menu is in English. They leave having seen the surface of a city that runs ten fathoms deep.",
    "The Banaras Unfiltered weekend is built differently. A small group of 4–8 independent travellers, departing every Friday, with a guide who has spent years learning not this city's monuments — but its character.",
    "You share a cab, a boat, a table. You split the cost six ways. You meet the kind of travellers you'd want to meet anyway. And you see the Varanasi that most visitors never find.",
  ],
  departures: [{ dates: "2–4 October 2026", spots: 8 }],
};

export type Stop = { time?: string; title: string; points: string[] };
export type Day = { day: number; title: string; image: string; stops: Stop[] };

export const itinerary: Day[] = [
  {
    day: 1,
    title: "Arrival, Central Old City & Ganga Aarti",
    image: "/images/aarti-night.jpg",
    stops: [
      {
        title: "Arrival & Check-in",
        points: [
          "Private AC pickup from the airport or railway station, with packaged water.",
          "Check-in at a premium property (Dev Residency or similar).",
          "Welcome kit — welcome drink, handwritten city note and printed itinerary booklet.",
          "Briefing with your Kashi companion.",
        ],
      },
      {
        title: "Rest & Unwind",
        points: ["Quick rest at the property — no rush, no itinerary."],
      },
      {
        title: "The Ganga Aarti — Premium Riverside Experience",
        points: [
          "Head to the ghats with your local companion.",
          "Reserved premium seats right next to the main Aarti at Dashashwamedh Ghat.",
          "Float diyas on the river and enjoy kulhad chai as the crowds disperse.",
        ],
      },
      {
        title: "Night Street Food Walk — Chowk & Old City",
        points: [
          "Tamatar chaat, aloo tikki, Banarasi paan, gol-gappe, thandai, palangtod mithai (seasonal) and Banarasi sweets.",
          "Each dish with its full story — the vendor, the history, the craft.",
          "Hidden bylanes and lit temples — the completely different energy of old Kashi at night.",
        ],
      },
      {
        title: "Darshan at Kaal Bhairav",
        points: [
          "Kaal Bhairav — the fierce guardian deity of Kashi.",
          "Mrityunjay Mahadev — the Shiva who conquers death, with the ancient Dhanvantari healing well.",
        ],
      },
    ],
  },
  {
    day: 2,
    title: "Pre-dawn River, North City Temples & Manikarnika",
    image: "/images/sunrise-boats.jpg",
    stops: [
      {
        time: "4:30 AM",
        title: "Temple Circuit — North & Central",
        points: [
          "Kashi Vishwanath — VIP darshan before the crowds. The Jyotirlinga, the golden spire.",
          "Annapurna Temple — goddess of nourishment, right beside KV and almost always missed.",
          "Vishalakshi Temple — one of India's 51 Shakti Peethas, the eye of Sati.",
        ],
      },
      {
        title: "Banarasi Breakfast & Private Boat Ride",
        points: [
          "Kachori sabzi, jalebi and chai at an iconic old-city shop.",
          "Private boat from Panchaganga → Bundi Parkota (painted ghats) → Manikarnika → Lalita → Dashashwamedh → Kedar → Harishchandra (route depends on season).",
        ],
      },
      { title: "Lunch & Rest", points: ["Back to the property for genuine rest."] },
      {
        title: "Silk Walk — Madanpura Weaver Colony (optional)",
        points: [
          "The Madanpura and Lallapura weaver quarters, where every household runs a handloom.",
          "Watch weavers at pit looms and jacquard looms; meet families weaving for 15–20 generations.",
          "Dyeing, warp setting, zari work and finishing — then buy at source, no middlemen.",
        ],
      },
      {
        title: "Evening Temple Tour & BHU",
        points: [
          "Durga Kund — the iconic red temple and its sacred tank.",
          "Tulsi Manas — white marble, where Tulsidas wrote the Ramcharitmanas.",
          "Sankat Mochan Hanuman — founded by Tulsidas, alive with devotion and music.",
          "BHU campus and the New Vishwanath Temple.",
        ],
      },
    ],
  },
  {
    day: 3,
    title: "Morning Ghats, Street Food & Farewell",
    image: "/images/fog-boats.jpg",
    stops: [
      {
        title: "Final Morning Ghat Walk",
        points: [
          "Assi Ghat at dawn — Subah-e-Banaras, yoga and Vedic chanting by the river.",
          "North past Tulsi and Chet Singh ghats; an ancient akhada and the history of the ghats.",
          "A farewell chai at a heritage ghat — one last sit with the river.",
        ],
      },
      {
        title: "Farewell Food Walk — Assi & Lanka",
        points: [
          "Kachori sabzi, jalebi, kulhad chai and lassi — the definitive Banarasi morning.",
          "A short drive to Ramnagar Fort, if time allows.",
        ],
      },
      {
        title: "Checkout & Departure",
        points: [
          "Private AC transfer to the airport or railway station.",
          "A parting handwritten note from your Kashi companion.",
        ],
      },
    ],
  },
];

export const inclusions = [
  { title: "2 Nights Accommodation", body: "Twin sharing (same gender) in 3-star premium hotels like Dev Residency or similar." },
  { title: "All Transfers", body: "All local transportation, including railway pickup and drop." },
  { title: "Expert Guide — Full 3 Days", body: "A friendly guide who narrates every detail of Kashi." },
  { title: "Ganga Boat Ride", body: "Private morning boat ride for your group only." },
  { title: "Breakfast & Dinner", body: "At good restaurants and famous local spots." },
  { title: "Varanasi Food Walk", body: "6–8 local foods with deep stories behind them." },
  { title: "Silk Walk", body: "Pre-arranged in Madanpura. Real home, real craft, no showroom." },
  { title: "VIP Sugam Darshan", body: "Skip the queue and do darshan without any hassle." },
  { title: "Photography & Videography", body: "We capture the memories of your trip." },
  { title: "Ramnagar Fort (optional)", body: "Fort entry and a guided walk through the royal museum." },
];

export const exclusions = [
  "Train / flight tickets",
  "Personal shopping",
  "Travel insurance",
  "Any personal expenses",
  "Anything not mentioned in inclusions",
];
