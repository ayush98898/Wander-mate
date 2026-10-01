import type { FeelingId } from "@/lib/content";

/*
 * Destination catalogue — from docs/BLUEPRINT.md (sections 4 and 5) plus the
 * international extension. Kashi trips link to full journey pages; every other
 * trip is planned on request until its region opens.
 */

export type Format = "Solo Series" | "Private" | "Circuit" | "Festival";

export type Trip = {
  slug: string;
  name: string;
  format: Format;
  duration: string;
  summary: string;
  highlights: string[];
  feelings: FeelingId[];
  /** Full journey page, when one exists. */
  href?: string;
  /** Our own photograph for this trip, when we have one. */
  image?: string;
  price?: string;
};

export type DestinationExperience = {
  name: string;
  line: string;
  feeling: FeelingId;
};

export type Script = "deva" | "kannada" | "tamil" | "oriya" | "sinhala" | "tibetan" | "khmer" | "javanese";

export type Destination = {
  slug: string;
  name: string;
  country: string;
  group: "india" | "beyond";
  status: "Now" | "Opening 2027" | "Coming later" | "On request";
  hub: string;
  places: string[];
  /** The place name in its own script, shown large on the plate. */
  native: string;
  script: Script;
  coords: string;
  line: string;
  season: string;
  /** Photography we own; destinations without it get a designed plate. */
  image?: string;
  /** Plate tone index (see DestinationPlate). */
  tone: number;
  trips: Trip[];
  experiences: DestinationExperience[];
};

export const destinations: Destination[] = [
  /* ---------------- India · Wave 1 ---------------- */
  {
    slug: "kashi",
    name: "Kashi",
    country: "India",
    group: "india",
    status: "Now",
    hub: "Varanasi",
    places: ["Sarnath", "Ramnagar", "Chunar", "Prayagraj", "Ayodhya"],
    native: "काशी",
    script: "deva",
    coords: "25.32° N · 82.97° E",
    line: "The world's oldest living city, where life and death meet on the Ganga.",
    season: "Oct – Mar · Dev Deepawali in Nov",
    image: "/images/hero-ghats.jpg",
    tone: 0,
    trips: [
      {
        slug: "banaras-unfiltered",
        name: "Banaras Unfiltered",
        format: "Solo Series",
        duration: "2N · 3D",
        price: "INR 8,999",
        summary: "A small-group weekend for independent travellers, departing every Friday.",
        highlights: ["Front-row Ganga Aarti", "Pre-dawn temple circuit", "Silk walk and two food walks"],
        feelings: ["curiosity", "awe"],
        href: "/journeys/banaras-unfiltered",
        image: "/images/holi.jpg",
      },
      {
        slug: "kashi-premium",
        name: "Kashi Premium",
        format: "Private",
        duration: "2 – 4N",
        summary: "Premium stays, a private boat at sunrise and front-row seats at the Aarti.",
        highlights: ["Sugam Darshan", "Private sunrise boat", "Expert guide throughout"],
        feelings: ["devotion", "awe"],
        href: "/journeys/kashi-premium",
        image: "/images/golden-boats.jpg",
      },
      {
        slug: "kashi-luxury",
        name: "Kashi in Private",
        format: "Private",
        duration: "3 – 5N",
        summary: "A serene spiritual journey with complete privacy and a rooftop Satvik feast.",
        highlights: ["Private rituals", "Rooftop dinner above the Aarti", "Personal photographer"],
        feelings: ["stillness", "indulgence"],
        href: "/journeys/kashi-luxury",
        image: "/images/sunrise-boats.jpg",
      },
      {
        slug: "spiritual-triangle",
        name: "The Spiritual Triangle",
        format: "Circuit",
        duration: "4 – 6N",
        summary: "Kashi, Ayodhya and Prayagraj joined in one seamless pilgrimage.",
        highlights: ["Kashi Vishwanath", "Ayodhya on the Saryu", "Triveni Sangam"],
        feelings: ["devotion"],
        href: "/journeys/spiritual-triangle",
        image: "/images/aarti-priest.jpg",
      },
    ],
    experiences: [
      { name: "Private sunrise boat", line: "Panchaganga to Harishchandra as the city wakes.", feeling: "stillness" },
      { name: "Ganga Aarti, front row", line: "Reserved seats at Dashashwamedh, then diyas on the river.", feeling: "awe" },
      { name: "The Silk Walk", line: "Madanpura's weavers, 15 to 20 generations at the loom.", feeling: "curiosity" },
    ],
  },

  /* ---------------- India · Wave 2 ---------------- */
  {
    slug: "braj",
    name: "Braj",
    country: "India",
    group: "india",
    status: "Opening 2027",
    hub: "Mathura",
    places: ["Vrindavan", "Barsana", "Govardhan", "Gokul"],
    native: "ब्रज",
    script: "deva",
    coords: "27.49° N · 77.67° E",
    line: "Krishna's land, where the temples sing and Holi lasts a week.",
    season: "Oct – Mar · Holi in Feb or Mar",
    tone: 1,
    trips: [
      {
        slug: "braj-holi-unfiltered",
        name: "Braj Holi Unfiltered",
        format: "Solo Series",
        duration: "3N",
        summary: "The colour of Braj with a small group of independent travellers.",
        highlights: ["Lathmar Holi in Barsana", "Phoolon wali Holi in Vrindavan", "Braj food walk"],
        feelings: ["curiosity", "awe"],
      },
      {
        slug: "vrindavan-family-darshan",
        name: "Vrindavan Family Darshan",
        format: "Private",
        duration: "2 – 3N",
        summary: "An elder-friendly pilgrimage through the temples of Mathura and Vrindavan.",
        highlights: ["Banke Bihari", "Prem Mandir at dusk", "Govardhan parikrama by vehicle"],
        feelings: ["devotion"],
      },
      {
        slug: "janmashtami-in-braj",
        name: "Janmashtami in Braj",
        format: "Festival",
        duration: "2N",
        summary: "Krishna's birthday at midnight, in the city where it is celebrated most.",
        highlights: ["Midnight celebrations in Mathura", "Vrindavan temple decorations", "Yamuna aarti"],
        feelings: ["awe", "devotion"],
      },
    ],
    experiences: [
      { name: "Mangala aarti at dawn", line: "The first darshan of the day in Vrindavan.", feeling: "devotion" },
      { name: "Yamuna aarti", line: "Evening lamps at Vishram Ghat, Mathura.", feeling: "awe" },
      { name: "Sanjhi paper art", line: "Vrindavan's stencil-cut temple art, with an artist.", feeling: "curiosity" },
    ],
  },
  {
    slug: "rishikesh",
    name: "Rishikesh",
    country: "India",
    group: "india",
    status: "Opening 2027",
    hub: "Rishikesh",
    places: ["Haridwar", "Devprayag"],
    native: "ऋषिकेश",
    script: "deva",
    coords: "30.09° N · 78.27° E",
    line: "Where the Ganga leaves the mountains, and the mind slows down.",
    season: "Mar – May · Sep – Nov",
    tone: 2,
    trips: [
      {
        slug: "ganga-stillness",
        name: "Ganga Stillness",
        format: "Private",
        duration: "3 – 4N",
        summary: "Yoga, meditation and evening aarti on a quieter stretch of the river.",
        highlights: ["Sunrise yoga with a teacher", "Vashishtha Gufa meditation", "Parmarth Niketan aarti"],
        feelings: ["stillness"],
      },
      {
        slug: "haridwar-rishikesh-darshan",
        name: "Haridwar & Rishikesh Darshan",
        format: "Private",
        duration: "2 – 3N",
        summary: "The great aarti at Har Ki Pauri and the temples above the river.",
        highlights: ["Har Ki Pauri aarti", "Mansa Devi by ropeway", "Neelkanth Mahadev"],
        feelings: ["devotion", "awe"],
      },
      {
        slug: "ganga-source-to-kashi",
        name: "The Ganga, Source to Kashi",
        format: "Circuit",
        duration: "7N",
        summary: "Follow the river from the Himalayan confluence to the ghats of Kashi.",
        highlights: ["Devprayag confluence", "Rishikesh and Haridwar", "Varanasi to finish"],
        feelings: ["awe", "stillness"],
      },
    ],
    experiences: [
      { name: "Riverside aarti", line: "Evening ceremony at Parmarth Niketan.", feeling: "awe" },
      { name: "Sunrise yoga", line: "A private class on the banks of the Ganga.", feeling: "stillness" },
      { name: "Devprayag confluence", line: "Where the Bhagirathi and Alaknanda become the Ganga.", feeling: "stillness" },
    ],
  },
  {
    slug: "rajputana",
    name: "Rajputana",
    country: "India",
    group: "india",
    status: "Opening 2027",
    hub: "Udaipur",
    places: ["Jodhpur", "Jaipur", "Kumbhalgarh", "Ranakpur"],
    native: "उदयपुर",
    script: "deva",
    coords: "24.58° N · 73.71° E",
    line: "Forts, palaces and the crafts that built them.",
    season: "Oct – Mar",
    tone: 3,
    trips: [
      {
        slug: "rajputana-in-private",
        name: "Rajputana in Private",
        format: "Circuit",
        duration: "7 – 9N",
        summary: "Udaipur, Jodhpur and Jaipur with a private historian and heritage stays.",
        highlights: ["City Palace and Lake Pichola", "Ranakpur Jain temple", "Mehrangarh and Amber forts"],
        feelings: ["awe", "indulgence"],
      },
      {
        slug: "udaipur-lakes-and-palaces",
        name: "Udaipur: Lakes & Palaces",
        format: "Private",
        duration: "3N",
        summary: "The city of lakes at an unhurried pace, from the water and from its palaces.",
        highlights: ["Boat on Lake Pichola", "City Palace", "Folk dance at Bagore ki Haveli"],
        feelings: ["stillness", "indulgence"],
      },
      {
        slug: "jaipur-crafts-trail",
        name: "Jaipur Crafts Trail",
        format: "Private",
        duration: "2 – 3N",
        summary: "The workshops behind the Pink City's textiles and pottery.",
        highlights: ["Block printing in Bagru", "Blue pottery studio", "Amber Fort"],
        feelings: ["curiosity"],
      },
      {
        slug: "jodhpur-unfiltered",
        name: "Jodhpur Unfiltered",
        format: "Solo Series",
        duration: "3N",
        summary: "The blue city, its stepwells and the fort above it, with a small group.",
        highlights: ["Mehrangarh Fort", "Blue-city lanes", "Toorji ka Jhalra stepwell"],
        feelings: ["curiosity", "awe"],
      },
    ],
    experiences: [
      { name: "Block printing in Bagru", line: "Carve, dye and print with a family of printers.", feeling: "curiosity" },
      { name: "Evening on Lake Pichola", line: "The palaces lit up from the water.", feeling: "indulgence" },
      { name: "Stepwells of Jodhpur", line: "A walk through the city's water architecture.", feeling: "curiosity" },
    ],
  },

  /* ---------------- India · Wave 3 ---------------- */
  {
    slug: "khajuraho",
    name: "Khajuraho & Orchha",
    country: "India",
    group: "india",
    status: "Coming later",
    hub: "Khajuraho",
    places: ["Orchha", "Gwalior"],
    native: "खजुराहो",
    script: "deva",
    coords: "24.85° N · 79.93° E",
    line: "A thousand years of stories carved in sandstone.",
    season: "Oct – Mar · Dance festival in Feb",
    tone: 4,
    trips: [
      {
        slug: "stone-and-sculpture",
        name: "Stone & Sculpture",
        format: "Circuit",
        duration: "3 – 4N",
        summary: "The temple art of Bundelkhand with an art historian.",
        highlights: ["Khajuraho Western Group", "Orchha's cenotaphs", "Gwalior Fort"],
        feelings: ["awe", "curiosity"],
      },
      {
        slug: "khajuraho-dance-festival",
        name: "Khajuraho Dance Festival",
        format: "Festival",
        duration: "3N",
        summary: "India's classical dance forms performed against the temples.",
        highlights: ["Evening performances", "Temple walks by day", "Orchha add-on"],
        feelings: ["awe", "indulgence"],
      },
      {
        slug: "orchha-river-town",
        name: "Orchha, River Town",
        format: "Private",
        duration: "2N",
        summary: "A quiet medieval capital on the Betwa.",
        highlights: ["Chhatris at sunset", "Ram Raja temple aarti", "Jahangir Mahal"],
        feelings: ["stillness"],
      },
    ],
    experiences: [
      { name: "Sculpture walk", line: "Read the temple walls with an art historian.", feeling: "curiosity" },
      { name: "Betwa at sunset", line: "The royal cenotaphs from the riverbank.", feeling: "stillness" },
    ],
  },
  {
    slug: "hampi",
    name: "Hampi",
    country: "India",
    group: "india",
    status: "Coming later",
    hub: "Hampi",
    places: ["Badami", "Aihole", "Pattadakal"],
    native: "ಹಂಪಿ",
    script: "kannada",
    coords: "15.33° N · 76.46° E",
    line: "The ruined capital of Vijayanagara, scattered among the boulders.",
    season: "Nov – Feb",
    tone: 5,
    trips: [
      {
        slug: "hampi-unfiltered",
        name: "Hampi Unfiltered",
        format: "Solo Series",
        duration: "3N",
        summary: "Ruins, river and boulders with a small group of independent travellers.",
        highlights: ["Virupaksha temple", "Vittala's stone chariot", "Sunrise on Matanga Hill"],
        feelings: ["curiosity", "awe"],
      },
      {
        slug: "cradle-of-temple-architecture",
        name: "Cradle of Temple Architecture",
        format: "Circuit",
        duration: "5N",
        summary: "Hampi with the early Chalukya temples of Badami, Aihole and Pattadakal.",
        highlights: ["Badami cave temples", "Aihole", "Pattadakal"],
        feelings: ["curiosity"],
      },
      {
        slug: "hampi-in-private",
        name: "Hampi in Private",
        format: "Private",
        duration: "3N",
        summary: "The ruins at their quietest hours, with a private guide.",
        highlights: ["Early access walks", "Royal Enclosure", "Riverside lunch"],
        feelings: ["stillness", "indulgence"],
      },
    ],
    experiences: [
      { name: "Coracle on the Tungabhadra", line: "A round reed boat between the boulders.", feeling: "stillness" },
      { name: "Sunrise on Matanga Hill", line: "The whole ruined city in first light.", feeling: "awe" },
    ],
  },
  {
    slug: "temple-country",
    name: "Temple Country",
    country: "India",
    group: "india",
    status: "Coming later",
    hub: "Madurai",
    places: ["Thanjavur", "Kumbakonam", "Rameswaram", "Swamimalai"],
    native: "மதுரை",
    script: "tamil",
    coords: "9.93° N · 78.12° E",
    line: "Living temples where the rituals have run for a thousand years.",
    season: "Nov – Feb",
    tone: 6,
    trips: [
      {
        slug: "temple-country",
        name: "Temple Country",
        format: "Circuit",
        duration: "5 – 6N",
        summary: "Madurai, Thanjavur, Kumbakonam and Rameswaram in one journey.",
        highlights: ["Meenakshi Amman temple", "Brihadeeswarar, Thanjavur", "Rameswaram's corridors"],
        feelings: ["devotion", "awe"],
      },
      {
        slug: "madurai-and-rameswaram",
        name: "Madurai & Rameswaram",
        format: "Private",
        duration: "3N",
        summary: "A family pilgrimage to two of the south's great temples.",
        highlights: ["Meenakshi Amman", "Ramanathaswamy temple", "Dhanushkodi"],
        feelings: ["devotion"],
      },
      {
        slug: "chola-heritage-trail",
        name: "Chola Heritage Trail",
        format: "Private",
        duration: "4N",
        summary: "The Great Living Chola Temples and the bronze-casters of Swamimalai.",
        highlights: ["Gangaikonda Cholapuram", "Darasuram", "Swamimalai bronze workshops"],
        feelings: ["curiosity", "awe"],
      },
    ],
    experiences: [
      { name: "Palliyarai night ceremony", line: "Meenakshi temple's closing ritual of the day.", feeling: "devotion" },
      { name: "Bronze casting", line: "Lost-wax casting with a Swamimalai family.", feeling: "curiosity" },
      { name: "Bharatanatyam evening", line: "A private recital in Thanjavur.", feeling: "indulgence" },
    ],
  },
  {
    slug: "odisha",
    name: "Odisha",
    country: "India",
    group: "india",
    status: "Coming later",
    hub: "Puri",
    places: ["Konark", "Bhubaneswar", "Raghurajpur", "Pipli"],
    native: "ପୁରୀ",
    script: "oriya",
    coords: "19.81° N · 85.83° E",
    line: "Jagannath, the Sun Temple and a village of painters.",
    season: "Oct – Mar · Rath Yatra in Jun or Jul",
    tone: 7,
    trips: [
      {
        slug: "jagannath-darshan",
        name: "Jagannath Darshan",
        format: "Private",
        duration: "2 – 3N",
        summary: "Puri and Konark for families. Jagannath temple entry is for Hindu travellers.",
        highlights: ["Jagannath temple", "Konark Sun Temple", "Puri beach at dawn"],
        feelings: ["devotion"],
      },
      {
        slug: "rath-yatra",
        name: "Rath Yatra",
        format: "Festival",
        duration: "3N",
        summary: "The chariot festival of Jagannath, with a place to watch it well.",
        highlights: ["The chariot procession", "Festival-day planning", "Konark add-on"],
        feelings: ["awe", "devotion"],
      },
      {
        slug: "odisha-temples-and-crafts",
        name: "Temples & Crafts of Odisha",
        format: "Private",
        duration: "4N",
        summary: "Bhubaneswar's temples, Konark and the craft villages around them.",
        highlights: ["Mukteswar temple", "Raghurajpur painters", "Pipli applique"],
        feelings: ["curiosity"],
      },
    ],
    experiences: [
      { name: "Pattachitra in Raghurajpur", line: "Paint with a family of chitrakars.", feeling: "curiosity" },
      { name: "Konark at sunrise", line: "The Sun Temple when the sun reaches it.", feeling: "awe" },
    ],
  },

  /* ---------------- Beyond India ---------------- */
  {
    slug: "nepal",
    name: "Kathmandu & Lumbini",
    country: "Nepal",
    group: "beyond",
    status: "On request",
    hub: "Kathmandu",
    places: ["Patan", "Bhaktapur", "Lumbini"],
    native: "काठमाडौं",
    script: "deva",
    coords: "27.72° N · 85.32° E",
    line: "Pagoda temples, Newar craft and the birthplace of the Buddha.",
    season: "Oct – Apr",
    tone: 8,
    trips: [
      {
        slug: "kathmandu-valley-heritage",
        name: "Kathmandu Valley Heritage",
        format: "Private",
        duration: "4N",
        summary: "Three royal cities and the valley's great shrines.",
        highlights: ["Durbar Squares of Kathmandu, Patan and Bhaktapur", "Pashupatinath", "Boudhanath stupa"],
        feelings: ["awe", "curiosity"],
      },
      {
        slug: "kashi-to-kathmandu",
        name: "Kashi to Kathmandu",
        format: "Circuit",
        duration: "6 – 7N",
        summary: "From Kashi Vishwanath to Pashupatinath, with Lumbini on the way.",
        highlights: ["Varanasi", "Lumbini", "Pashupatinath"],
        feelings: ["devotion"],
      },
      {
        slug: "footsteps-of-the-buddha",
        name: "Footsteps of the Buddha",
        format: "Circuit",
        duration: "5N",
        summary: "Where the Buddha taught, passed away and was born.",
        highlights: ["Sarnath", "Kushinagar", "Lumbini"],
        feelings: ["stillness", "devotion"],
      },
    ],
    experiences: [
      { name: "Aarti on the Bagmati", line: "The evening ceremony at Pashupatinath.", feeling: "awe" },
      { name: "Newari feast in Patan", line: "A traditional meal in a courtyard home.", feeling: "indulgence" },
      { name: "Bhaktapur's potters", line: "Throw a pot in Pottery Square.", feeling: "curiosity" },
    ],
  },
  {
    slug: "sri-lanka",
    name: "Sri Lanka",
    country: "Sri Lanka",
    group: "beyond",
    status: "On request",
    hub: "Kandy",
    places: ["Anuradhapura", "Polonnaruwa", "Sigiriya", "Nuwara Eliya"],
    native: "ලංකා",
    script: "sinhala",
    coords: "7.29° N · 80.63° E",
    line: "The Ramayana's island, and two thousand years of Buddhist kingdoms.",
    season: "Dec – Apr · Esala Perahera in Jul or Aug",
    tone: 9,
    trips: [
      {
        slug: "ramayana-trail",
        name: "The Ramayana Trail",
        format: "Circuit",
        duration: "6N",
        summary: "The places Sri Lankan tradition links to the Ramayana.",
        highlights: ["Seetha Amman temple, Nuwara Eliya", "Ravana Falls", "Munneswaram temple"],
        feelings: ["devotion", "curiosity"],
      },
      {
        slug: "cultural-triangle",
        name: "The Cultural Triangle",
        format: "Circuit",
        duration: "5N",
        summary: "The ancient capitals and rock temples of the island's heart.",
        highlights: ["Anuradhapura", "Sigiriya", "Dambulla cave temples"],
        feelings: ["awe", "curiosity"],
      },
      {
        slug: "esala-perahera",
        name: "Kandy Esala Perahera",
        format: "Festival",
        duration: "3N",
        summary: "The great procession of the Sacred Tooth Relic through Kandy.",
        highlights: ["Night processions", "Temple of the Tooth", "Kandy lake walk"],
        feelings: ["awe"],
      },
    ],
    experiences: [
      { name: "Evening puja in Kandy", line: "At the Temple of the Sacred Tooth Relic.", feeling: "devotion" },
      { name: "Sigiriya, early", line: "Climb the rock fortress before the heat.", feeling: "awe" },
      { name: "A morning with a tea planter", line: "From leaf to cup in the hill country.", feeling: "curiosity" },
    ],
  },
  {
    slug: "bhutan",
    name: "Bhutan",
    country: "Bhutan",
    group: "beyond",
    status: "On request",
    hub: "Paro",
    places: ["Thimphu", "Punakha"],
    native: "འབྲུག",
    script: "tibetan",
    coords: "27.43° N · 89.42° E",
    line: "Dzongs, prayer flags and festivals of masked dances.",
    season: "Mar – May · Sep – Nov",
    tone: 10,
    trips: [
      {
        slug: "dzongs-and-valleys",
        name: "Dzongs & Valleys",
        format: "Private",
        duration: "5N",
        summary: "Paro, Thimphu and Punakha, over the Dochula pass.",
        highlights: ["Punakha Dzong", "Dochula pass", "Thimphu"],
        feelings: ["awe", "stillness"],
      },
      {
        slug: "tshechu-festival",
        name: "Tshechu Festival",
        format: "Festival",
        duration: "5N",
        summary: "Masked cham dances in a dzong courtyard, as they have been for centuries.",
        highlights: ["Festival days at the dzong", "Paro valley", "Thimphu"],
        feelings: ["awe", "curiosity"],
      },
      {
        slug: "bhutan-in-stillness",
        name: "Bhutan in Stillness",
        format: "Private",
        duration: "4N",
        summary: "A slow, private journey with a farmhouse stay.",
        highlights: ["Tiger's Nest", "Farmhouse night", "Hot stone bath"],
        feelings: ["stillness", "indulgence"],
      },
    ],
    experiences: [
      { name: "Tiger's Nest", line: "The hike to Paro Taktsang on its cliff.", feeling: "awe" },
      { name: "Archery with locals", line: "Bhutan's national sport, on a village range.", feeling: "curiosity" },
      { name: "Hot stone bath", line: "A traditional bath in a farmhouse.", feeling: "stillness" },
    ],
  },
  {
    slug: "cambodia",
    name: "Angkor",
    country: "Cambodia",
    group: "beyond",
    status: "On request",
    hub: "Siem Reap",
    places: ["Angkor", "Beng Mealea", "Koh Ker", "Phnom Penh"],
    native: "អង្គរ",
    script: "khmer",
    coords: "13.36° N · 103.86° E",
    line: "The largest religious monument on earth, and Hindu epics carved in stone.",
    season: "Nov – Mar",
    tone: 11,
    trips: [
      {
        slug: "angkor-in-depth",
        name: "Angkor in Depth",
        format: "Private",
        duration: "4N",
        summary: "The great temples with an expert, at the hours they are quietest.",
        highlights: ["Angkor Wat", "Bayon, Angkor Thom", "Ta Prohm and Banteay Srei"],
        feelings: ["awe", "curiosity"],
      },
      {
        slug: "beyond-angkor",
        name: "Beyond Angkor",
        format: "Private",
        duration: "3N",
        summary: "The jungle temples further out, and the river of a thousand lingas.",
        highlights: ["Beng Mealea", "Koh Ker", "Kbal Spean"],
        feelings: ["curiosity", "stillness"],
      },
      {
        slug: "angkor-and-phnom-penh",
        name: "Angkor & Phnom Penh",
        format: "Circuit",
        duration: "6N",
        summary: "Siem Reap's temples with the capital's royal palace and museum.",
        highlights: ["Angkor Wat", "Royal Palace and Silver Pagoda", "National Museum"],
        feelings: ["awe"],
      },
    ],
    experiences: [
      { name: "Angkor Wat at sunrise", line: "The towers against first light.", feeling: "awe" },
      { name: "The Churning of the Ocean", line: "Angkor Wat's great bas-relief, with an expert.", feeling: "curiosity" },
      { name: "Apsara dance", line: "Classical Khmer dance in Siem Reap.", feeling: "indulgence" },
    ],
  },
  {
    slug: "java-bali",
    name: "Java & Bali",
    country: "Indonesia",
    group: "beyond",
    status: "On request",
    hub: "Yogyakarta",
    places: ["Borobudur", "Prambanan", "Ubud"],
    native: "ꦗꦮ",
    script: "javanese",
    coords: "7.80° S · 110.36° E",
    line: "Borobudur, Prambanan and the Ramayana danced under the stars.",
    season: "Apr – Oct",
    tone: 12,
    trips: [
      {
        slug: "borobudur-and-prambanan",
        name: "Borobudur & Prambanan",
        format: "Private",
        duration: "4N",
        summary: "Java's great Buddhist and Hindu monuments from Yogyakarta.",
        highlights: ["Borobudur", "Prambanan", "Yogyakarta Kraton"],
        feelings: ["awe", "curiosity"],
      },
      {
        slug: "bali-temples-and-terraces",
        name: "Bali: Temples & Terraces",
        format: "Private",
        duration: "5N",
        summary: "Bali's water temples and rice terraces, away from the beaches.",
        highlights: ["Tirta Empul", "Besakih", "Jatiluwih rice terraces"],
        feelings: ["stillness", "devotion"],
      },
      {
        slug: "java-to-bali",
        name: "Java to Bali",
        format: "Circuit",
        duration: "8N",
        summary: "Two islands, one thread: the Hindu-Buddhist heritage of the archipelago.",
        highlights: ["Borobudur and Prambanan", "Ubud", "Bali's water temples"],
        feelings: ["awe", "indulgence"],
      },
    ],
    experiences: [
      { name: "Ramayana Ballet", line: "Open-air performance with Prambanan behind the stage.", feeling: "awe" },
      { name: "Batik in Yogyakarta", line: "Wax-resist dyeing with a batik master.", feeling: "curiosity" },
      { name: "Tirta Empul", line: "The water purification ritual at a spring temple.", feeling: "devotion" },
    ],
  },
];

export const india = destinations.filter((d) => d.group === "india");
export const beyond = destinations.filter((d) => d.group === "beyond");

export function getDestination(slug: string) {
  return destinations.find((d) => d.slug === slug);
}

export type TripWithPlace = Trip & { destination: Destination };

export const allTrips: TripWithPlace[] = destinations.flatMap((d) =>
  d.trips.map((t) => ({ ...t, destination: d })),
);

export function tripHref(t: TripWithPlace) {
  return t.href ?? `/destinations/${t.destination.slug}#${t.slug}`;
}

/** A hand-picked spread across India and beyond for the home page rail. */
export const featuredTripSlugs = [
  "banaras-unfiltered",
  "spiritual-triangle",
  "braj-holi-unfiltered",
  "rajputana-in-private",
  "kathmandu-valley-heritage",
  "ramayana-trail",
  "angkor-in-depth",
  "borobudur-and-prambanan",
];

/** Festivals that recur through the year, across destinations. */
export const festivals = [
  { month: "Jan", name: "Magh Mela", place: "Prayagraj", dest: "kashi" },
  { month: "Feb", name: "Khajuraho Dance Festival", place: "Khajuraho", dest: "khajuraho" },
  { month: "Mar", name: "Holi in Braj", place: "Barsana · Vrindavan", dest: "braj" },
  { month: "Spring", name: "Paro Tshechu", place: "Bhutan", dest: "bhutan" },
  { month: "Jun – Jul", name: "Rath Yatra", place: "Puri", dest: "odisha" },
  { month: "Jul – Aug", name: "Esala Perahera", place: "Kandy", dest: "sri-lanka" },
  { month: "Aug – Sep", name: "Janmashtami", place: "Mathura · Vrindavan", dest: "braj" },
  { month: "Nov", name: "Dev Deepawali", place: "Varanasi", dest: "kashi" },
];
