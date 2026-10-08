/*
 * The Journal — heritage, culture and tradition, from Kashi outward.
 *
 * To publish a story, add a Post below. `body` is a list of blocks
 * (paragraphs, headings, pull quotes, images); read time is worked out
 * from the word count. Link `destination` to a destination slug to end
 * the story with an invitation to travel there.
 */

export const categories = ["Heritage", "Tradition", "Festivals", "Culture", "Notes from WanderMate"] as const;
export type Category = (typeof categories)[number];

export type Region = "India" | "World";

export type Block =
  | { t: "p"; text: string }
  | { t: "h"; text: string }
  | { t: "quote"; text: string; cite?: string }
  | { t: "img"; src: string; alt: string; caption?: string };

export type Post = {
  slug: string;
  title: string;
  /** One or two sentences — used as the standfirst and in listings. */
  excerpt: string;
  category: Category;
  region: Region;
  place: string;
  /** Destination slug, for the "travel there" invitation at the end. */
  destination?: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  /** "At a glance" facts shown beside the story. */
  facts?: { k: string; v: string }[];
  /**
   * Search: a title written for what people type (under 60 characters), a
   * description (under 155) and a few keywords. The on-page title stays as written.
   */
  seo?: { title: string; description: string; keywords: string[] };
  /** Tours to suggest, by trip slug in src/lib/destinations.ts (first three of the destination otherwise). */
  tours?: string[];
  /** Short notes stay out of search until they're expanded into full stories. */
  index?: boolean;
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "the-ganga-aarti-explained",
    seo: {
      title: "Ganga Aarti in Varanasi: Meaning, Ritual & How to Watch",
      description:
        "What happens at the evening Ganga Aarti at Dashashwamedh Ghat, step by step — what it means, how long it lasts, and the best way to watch it.",
      keywords: ["Ganga Aarti", "Varanasi", "Dashashwamedh Ghat", "Ganga Aarti timing", "Subah-e-Banaras"],
    },
    tours: ["kashi-in-four-days", "banaras-unfiltered", "kashi-premium"],
    title: "The Ganga Aarti, explained",
    excerpt:
      "Every evening at Dashashwamedh Ghat, priests offer fire, incense and song to a river they revere as a goddess. Here is what you are watching, and how to watch it well.",
    category: "Tradition",
    region: "India",
    place: "Varanasi",
    destination: "kashi",
    image: "/images/premium/stock/band-aarti-fan.jpg",
    imageAlt: "A priest raises the yak-tail fan during the evening Ganga Aarti",
    imagePosition: "50% 22%",
    facts: [
      { k: "Where", v: "Dashashwamedh Ghat, Varanasi" },
      { k: "When", v: "Every evening, beginning around sunset" },
      { k: "Lasts", v: "About 45 minutes" },
      { k: "At dawn", v: "Subah-e-Banaras at Assi Ghat" },
    ],
    body: [
      {
        t: "p",
        text: "Aarti is one of the oldest gestures in Hindu worship: a flame is waved in slow circles before the divine, as an offering of light. In most temples it is performed for an image of a deity. On the ghats of Varanasi, it is performed for the river itself — for Ganga, who is worshipped as a goddess and a mother.",
      },
      {
        t: "p",
        text: "As the sun goes down, a row of young priests takes its place on wooden platforms at the water's edge. They move in unison, to the sound of bells, conch shells and devotional song, offering each element in turn.",
      },
      { t: "h", text: "What happens, step by step" },
      {
        t: "p",
        text: "The ceremony opens with the blowing of the conch. Incense is offered first, its smoke drawn in wide arcs over the river. Then come the lamps — heavy brass stands with many tiers of flame, lifted and turned so that the fire seems to pour through the dusk. Flowers are offered, and the yak-tail whisk and fans are waved, as one would honour a royal guest.",
      },
      {
        t: "quote",
        text: "The offering is not made to the crowd on the steps. It is made to the river — the crowd is simply allowed to watch.",
      },
      {
        t: "p",
        text: "Through all of it, the priests face the water. When the final lamps have been offered, many in the crowd float small leaf-cups of flowers and a single diya onto the river, so that the Ganga carries their prayer downstream.",
      },
      { t: "h", text: "How to watch it well" },
      {
        t: "p",
        text: "Arrive early — the steps fill quickly, especially at weekends and in the festival season. Watching from a boat gives you the whole sweep of the ceremony and the lit city behind it; watching from the steps puts you among the people who come here every night. Dress modestly, keep flash photography off, and stay until the end, when the lamps are offered to the river and the crowd slowly disperses into the lanes.",
      },
      {
        t: "p",
        text: "If the evening Aarti is theatre, the dawn ceremony at Assi Ghat, Subah-e-Banaras, is its quieter sibling: chanting, music and yoga as the light comes up over the far bank.",
      },
    ],
  },
  {
    slug: "dev-deepawali",
    seo: {
      title: "Dev Deepawali in Varanasi: The Festival of Lamps Explained",
      description:
        "Dev Deepawali lights the ghats of Varanasi on Kartik Purnima, about two weeks after Diwali. What it means, when it falls and how to see it.",
      keywords: ["Dev Deepawali", "Varanasi", "Kartik Purnima", "Dev Diwali", "festival of lamps"],
    },
    tours: ["dev-deepawali-2026", "kashi-premium", "kashi-in-four-days"],
    title: "Dev Deepawali: the night the gods come down to the ghats",
    excerpt:
      "Fifteen days after Diwali, on the full moon of Kartik, Varanasi lights its riverfront with lamps — for the gods, who are said to descend to bathe in the Ganga.",
    category: "Festivals",
    region: "India",
    place: "Varanasi",
    destination: "kashi",
    image: "/images/premium/stock/band-dev-deepawali.jpg",
    imageAlt: "Fireworks over the Ganga on Dev Deepawali",
    imagePosition: "50% 30%",
    facts: [
      { k: "When", v: "Kartik Purnima — the full moon of Kartik, usually in November" },
      { k: "Where", v: "The ghats of Varanasi, Raj Ghat to Assi" },
      { k: "Also called", v: "Tripurari Purnima" },
      { k: "Plan", v: "Boats and riverside rooms book out months ahead" },
    ],
    body: [
      {
        t: "p",
        text: "Diwali is the festival of lights for people. Dev Deepawali — the Diwali of the gods — is the one Varanasi keeps for the divine. It falls on Kartik Purnima, the full moon about two weeks after Diwali, when the gods are believed to descend to the earth to bathe in the Ganga.",
      },
      {
        t: "p",
        text: "The festival is also linked to Shiva's victory over the demon Tripurasura, which is why the day is called Tripurari Purnima. In Shiva's own city, that victory is celebrated on the river.",
      },
      { t: "h", text: "A city of lamps" },
      {
        t: "p",
        text: "By dusk, volunteers have set out clay diyas along the steps of the ghats — lakhs of small flames, ghat after ghat, until the whole crescent of the riverfront is outlined in light. The evening Aarti is performed on a grand scale, and fireworks open over the water.",
      },
      {
        t: "quote",
        text: "From the middle of the river, the city looks less lit than alive — every step of every ghat breathing with flame.",
      },
      { t: "h", text: "How to see it" },
      {
        t: "p",
        text: "The best view is from a boat, but the river is crowded and boats are booked weeks or months in advance. If you prefer the steps, choose a ghat away from Dashashwamedh and arrive in the afternoon. The days before the full moon bring the Ganga Mahotsav, a festival of music and dance on the ghats — a gentler way into the celebrations.",
      },
    ],
  },
  {
    slug: "kashi-city-of-light",
    seo: {
      title: "Why Varanasi Is Called Kashi, the City of Light",
      description:
        "Kashi, Varanasi, Banaras: where the city\u2019s three names come from, why it is called the City of Light, and how its ghats face the river.",
      keywords: ["Kashi", "Varanasi", "Banaras", "City of Light", "Kashi Vishwanath"],
    },
    tours: ["kashi-in-four-days", "kashi-premium", "banaras-unfiltered"],
    title: "Why Kashi is called the City of Light",
    excerpt:
      "Varanasi has three names and a reputation older than history. A short introduction to the city we call home.",
    category: "Heritage",
    region: "India",
    place: "Varanasi",
    destination: "kashi",
    image: "/images/hero-ghats.jpg",
    imageAlt: "The ghats of Varanasi from above, boats gathered on the Ganga",
    facts: [
      { k: "Names", v: "Kashi, Varanasi, Banaras" },
      { k: "Sits between", v: "The Varuna and Assi rivers" },
      { k: "Ghats", v: "Some 84 along the western bank" },
      { k: "Temple", v: "Kashi Vishwanath, one of the twelve Jyotirlingas" },
    ],
    body: [
      {
        t: "p",
        text: "The oldest of the city's names, Kashi, is usually traced to a root meaning \"to shine\". Kashi is the luminous one — the city of light. Varanasi, its official name, describes its place on the map: the land between two small rivers, the Varuna to the north and the Assi to the south. Banaras is the name most of its people use every day.",
      },
      {
        t: "quote",
        text: "Benares is older than history, older than tradition, older even than legend, and looks twice as old as all of them put together.",
        cite: "Mark Twain, Following the Equator (1897)",
      },
      { t: "h", text: "Shiva's city" },
      {
        t: "p",
        text: "For Hindus, Kashi is the city of Shiva, who is said never to leave it. At its heart is the Kashi Vishwanath temple, one of the twelve Jyotirlingas — the shrines where Shiva is worshipped as a column of light. Many believe that to die in Kashi is to be released from the cycle of rebirth, which is why the cremation fires at Manikarnika Ghat are never allowed to go out.",
      },
      { t: "h", text: "A city that faces the river" },
      {
        t: "p",
        text: "Along the western bank, stone steps called ghats descend into the Ganga — some 84 of them, built over centuries by kings, merchants and holy men. People come to them to bathe, to pray, to wash, to do yoga, to play cricket and to say goodbye. Few places hold so much of life in so little space.",
      },
      {
        t: "p",
        text: "Behind the ghats lie the galis, lanes too narrow for cars, where temples are tucked between houses and the city's weavers, sweet-makers and musicians keep traditions that are centuries old. To understand Kashi, you walk.",
      },
    ],
  },
  {
    slug: "langar-the-kitchen-that-feeds-everyone",
    seo: {
      title: "Langar at the Golden Temple, Amritsar: The Free Kitchen",
      description:
        "At the Golden Temple in Amritsar, langar feeds tens of thousands a day, free, all seated together. How it began with Guru Nanak, and what to know.",
      keywords: ["Langar", "Golden Temple", "Amritsar", "Harmandir Sahib", "Sikh community kitchen"],
    },
    title: "Langar: the kitchen that feeds everyone",
    excerpt:
      "At the Golden Temple in Amritsar, a free kitchen serves tens of thousands of people a day, all seated together on the floor. It began with Guru Nanak.",
    category: "Tradition",
    region: "India",
    place: "Amritsar",
    destination: "amritsar",
    image: "/images/destinations/amritsar.jpg",
    imageAlt: "The Golden Temple in Amritsar across its sacred pool at night",
    facts: [
      { k: "Where", v: "Harmandir Sahib, Amritsar" },
      { k: "Serves", v: "Tens of thousands a day; more on festival days" },
      { k: "Cost", v: "Free, to anyone" },
      { k: "Etiquette", v: "Cover your head, remove your shoes" },
    ],
    body: [
      {
        t: "p",
        text: "Langar is the Sikh community kitchen, and its rule is simple: anyone may eat, and everyone eats together. The tradition began with Guru Nanak, the first Sikh Guru, in the fifteenth and sixteenth centuries, as a direct challenge to the divisions of caste, creed and status.",
      },
      {
        t: "p",
        text: "The third Guru, Guru Amar Das, made it a principle that visitors should eat in the langar before meeting him — kings included. Sitting in a row on the floor, called pangat, everyone is served the same food in the same way.",
      },
      { t: "h", text: "Inside the kitchen" },
      {
        t: "p",
        text: "At the Harmandir Sahib — the Golden Temple — the langar runs day and night and feeds tens of thousands of people every day. Most of the work is done by volunteers performing seva, selfless service: rolling rotis, stirring vast cauldrons of dal, chopping vegetables, washing steel plates by the thousand.",
      },
      {
        t: "quote",
        text: "You are handed a plate, you sit where there is space, and someone you will never meet fills it. Then, if you wish, you take your turn serving.",
      },
      { t: "h", text: "If you go" },
      {
        t: "p",
        text: "Cover your head — scarves are provided — and leave your shoes at the counter. Accept food with both hands, eat what you take, and stay a while afterwards to help. Many visitors say an hour of seva in the kitchen was the part of Amritsar they remember most.",
      },
    ],
  },
  {
    slug: "under-the-bodhi-tree",
    seo: {
      title: "The Bodhi Tree at Bodh Gaya: Where the Buddha Awoke",
      description:
        "The sacred fig at the Mahabodhi Temple marks where Siddhartha became the Buddha. Its story, its journey to Sri Lanka and back, and when to go.",
      keywords: ["Bodhi Tree", "Bodh Gaya", "Mahabodhi Temple", "Buddhist pilgrimage", "Bihar"],
    },
    title: "Under the Bodhi Tree",
    excerpt:
      "In Bodh Gaya, a fig tree marks the place where Siddhartha Gautama became the Buddha. Its story travels to Sri Lanka and back.",
    category: "Heritage",
    region: "India",
    place: "Bodh Gaya",
    destination: "bodh-gaya",
    image: "/images/destinations/bodh-gaya.jpg",
    imageAlt: "The Mahabodhi Temple in Bodh Gaya among green trees",
    facts: [
      { k: "Where", v: "Mahabodhi Temple, Bodh Gaya, Bihar" },
      { k: "UNESCO", v: "World Heritage Site since 2002" },
      { k: "The tree", v: "A sacred fig, Ficus religiosa" },
      { k: "Best time", v: "October to March" },
    ],
    body: [
      {
        t: "p",
        text: "Some two and a half thousand years ago, a wandering prince named Siddhartha Gautama sat down beneath a fig tree near the river Niranjana and resolved not to rise until he understood the cause of suffering. When he rose, he was the Buddha — the awakened one. The tree became the Bodhi Tree, the tree of awakening, and the village became Bodh Gaya.",
      },
      { t: "h", text: "A tree with a long journey" },
      {
        t: "p",
        text: "In the third century BCE, the emperor Ashoka built a shrine at the site. Tradition holds that his daughter, Sanghamitta, carried a sapling of the tree to Sri Lanka, where it was planted at Anuradhapura and still grows. The tree that stands in Bodh Gaya today is believed to descend, through cuttings, from that same lineage — a pilgrimage of a tree, returning home.",
      },
      {
        t: "p",
        text: "Beside it rises the Mahabodhi Temple, a brick tower whose present form dates largely from the fifth and sixth centuries CE. Under the tree lies the Vajrasana, the diamond throne, marking the place where the Buddha sat.",
      },
      {
        t: "quote",
        text: "Monks from Thailand, Tibet, Japan and Sri Lanka sit side by side in the same courtyard. It may be the most quietly international place in India.",
      },
      { t: "h", text: "If you go" },
      {
        t: "p",
        text: "Come at dawn, when monks begin their circumambulations and the chanting starts, or at dusk, when butter lamps are lit. Around the town, Buddhist nations have built their own monasteries, each in its own style — a walk between them is a short tour of Asia.",
      },
    ],
  },
  {
    slug: "angkor-the-epics-in-stone",
    seo: {
      title: "Angkor Wat Carvings: The Ramayana & Mahabharata in Stone",
      description:
        "Angkor Wat was built for Vishnu in the 12th century. How to read its galleries: the Ramayana, the Mahabharata and the churning of the ocean.",
      keywords: ["Angkor Wat", "Angkor Wat carvings", "Ramayana", "Churning of the Ocean of Milk", "Cambodia"],
    },
    title: "Angkor: the Indian epics in stone",
    excerpt:
      "The largest religious monument on earth was built for Vishnu. Its galleries carve the Ramayana, the Mahabharata and the churning of the ocean into sandstone.",
    category: "Heritage",
    region: "World",
    place: "Siem Reap, Cambodia",
    destination: "cambodia",
    image: "/images/destinations/cambodia.jpg",
    imageAlt: "The towers of Angkor Wat at the end of its long causeway",
    facts: [
      { k: "Built", v: "Early 12th century, under Suryavarman II" },
      { k: "Dedicated to", v: "Vishnu; later a Buddhist temple" },
      { k: "UNESCO", v: "World Heritage Site since 1992" },
      { k: "Best time", v: "November to March" },
    ],
    body: [
      {
        t: "p",
        text: "In the early twelfth century, the Khmer king Suryavarman II built a temple-mountain for Vishnu at the heart of his capital. Angkor Wat is a model of the Hindu cosmos in stone: its five towers stand for the peaks of Mount Meru, home of the gods, and its great moat for the oceans around the world.",
      },
      {
        t: "p",
        text: "Unusually, the temple faces west — the direction associated with Vishnu. Over the centuries it became a Buddhist temple, and it has never been entirely abandoned.",
      },
      { t: "h", text: "Reading the galleries" },
      {
        t: "p",
        text: "Its outer galleries hold some of the longest continuous bas-reliefs anywhere. On the west side, the armies of the Mahabharata meet at Kurukshetra and Rama's army fights for Lanka. On the east, gods and demons haul on the serpent Vasuki to churn the ocean of milk for the nectar of immortality — the Samudra Manthan, carved across tens of metres of stone.",
      },
      {
        t: "quote",
        text: "For a traveller from India, Angkor is a strange homecoming: stories you grew up with, told in a language you have never heard.",
      },
      { t: "h", text: "If you go" },
      {
        t: "p",
        text: "Arrive before dawn to watch the towers emerge against the sky, then walk the galleries in the cooler morning. Give the wider park more than a day: Bayon's smiling faces and Ta Prohm's tree-wrapped ruins are a different Angkor altogether.",
      },
    ],
  },
  {
    slug: "fushimi-inari-a-thousand-gates",
    seo: {
      title: "Fushimi Inari Shrine, Kyoto: The Story of the Torii Gates",
      description:
        "Why thousands of vermilion torii climb Mount Inari in Kyoto, who gives them, and the foxes that guard Inari, the kami of rice. Plus when to walk it.",
      keywords: ["Fushimi Inari", "Kyoto", "torii gates", "Inari", "Shinto shrine"],
    },
    title: "Fushimi Inari: a mountain of gates",
    excerpt:
      "Thousands of vermilion torii climb a hillside in Kyoto, each one given by a person or a business. An introduction to Inari, the kami of rice.",
    category: "Culture",
    region: "World",
    place: "Kyoto, Japan",
    destination: "kyoto",
    image: "/images/destinations/kyoto.jpg",
    imageAlt: "Two visitors walk through a tunnel of vermilion torii gates at Fushimi Inari",
    facts: [
      { k: "What", v: "Head shrine of Inari, the kami of rice and prosperity" },
      { k: "Founded", v: "711 CE" },
      { k: "The walk", v: "Two to three hours to the summit and back" },
      { k: "Best time", v: "Early morning, any season" },
    ],
    body: [
      {
        t: "p",
        text: "In Shinto, Japan's native faith, kami are the spirits of nature, places and ancestors. Inari is the kami of rice — and so of harvest, prosperity and, in modern Japan, of business. Fushimi Inari Taisha, in the south of Kyoto, is the most important of the many thousands of Inari shrines across the country, and was founded in 711.",
      },
      { t: "h", text: "Why the gates?" },
      {
        t: "p",
        text: "A torii marks the passage from the everyday world into a sacred one. At Fushimi Inari, thousands of them line the paths up Mount Inari, so close together in places that they form tunnels of vermilion. Each one is a gift, donated by an individual or a company in gratitude or hope; turn around as you climb, and you will see the donor's name and the date painted on the back.",
      },
      {
        t: "quote",
        text: "Walking up, you see only the gates. Walking down, you see the names — a mountain of thanks.",
      },
      { t: "h", text: "The foxes" },
      {
        t: "p",
        text: "Stone foxes, kitsune, guard the shrine. They are Inari's messengers, and many hold a key in their mouths — the key to the rice granary. Small fox-shaped votive plaques, painted with faces by visitors, hang in clusters along the way.",
      },
      {
        t: "p",
        text: "Go early. The lower gates are crowded by mid-morning, but the higher you climb, the quieter it becomes — and the city opens out below you through the trees.",
      },
    ],
  },
  {
    slug: "petra-the-city-the-nabataeans-carved",
    seo: {
      title: "Petra, Jordan: The Nabataean City & the Treasury Story",
      description:
        "How the Nabataeans grew rich on the incense trade and carved Petra into rose-red cliffs — and why the Treasury was never a treasury at all.",
      keywords: ["Petra", "Jordan", "Nabataeans", "Al-Khazneh", "The Siq"],
    },
    title: "Petra: the city the Nabataeans carved",
    excerpt:
      "A desert people grew rich on the incense trade and carved their capital into rose-red cliffs. The building everyone calls the Treasury was never a treasury at all.",
    category: "Heritage",
    region: "World",
    place: "Petra, Jordan",
    destination: "jordan",
    image: "/images/destinations/jordan.jpg",
    imageAlt: "The carved facade of Al-Khazneh, the Treasury, at Petra",
    facts: [
      { k: "Who", v: "The Nabataeans" },
      { k: "Flourished", v: "Around the 1st century BCE to the 1st century CE" },
      { k: "UNESCO", v: "World Heritage Site since 1985" },
      { k: "Way in", v: "The Siq, a narrow gorge on foot" },
    ],
    body: [
      {
        t: "p",
        text: "Two thousand years ago, the Nabataeans controlled the caravan routes that carried incense, myrrh and spices from Arabia to the Mediterranean. They grew rich, and they built their capital not out of stone, but into it — carving temples, tombs and halls into the soft, rose-coloured sandstone of southern Jordan.",
      },
      { t: "h", text: "The approach" },
      {
        t: "p",
        text: "You enter as travellers always have: through the Siq, a winding gorge more than a kilometre long, its walls so high that the sky narrows to a ribbon. At its end, the gorge opens onto Al-Khazneh, the Treasury — a facade of columns and statues cut straight out of the cliff.",
      },
      {
        t: "quote",
        text: "Local legend said the urn on its summit held a pharaoh's gold. It was almost certainly a royal tomb.",
      },
      {
        t: "p",
        text: "The Nabataeans were also master engineers of water, channelling rare desert rain through cisterns and conduits to sustain a city of thousands. Petra declined after trade routes shifted, and was little known in Europe until the Swiss traveller Johann Ludwig Burckhardt reached it in 1812.",
      },
      { t: "h", text: "If you go" },
      {
        t: "p",
        text: "Enter at opening time to have the Siq almost to yourself, and save energy for the climb of around 800 steps to Ad Deir, the Monastery, which is larger than the Treasury and far quieter. Stay at least two days; Petra is a city, not a single monument.",
      },
    ],
  },

  /* ---------------- Notes from WanderMate ---------------- */
  {
    slug: "guide-to-luxury-travel-in-varanasi",
    seo: {
      title: "Luxury Travel in Varanasi: Our Guide",
      description:
        "How WanderMate shapes private, luxury journeys in Varanasi — beyond the iconic sights of the oldest living city in the world.",
      keywords: ["luxury travel Varanasi", "private Varanasi tour"],
    },
    tours: ["kashi-luxury", "kashi-premium", "kashi-in-four-days"],
    index: false,
    title: "Our guide to luxury travel in Varanasi",
    excerpt:
      "We create bespoke luxury experiences for those who seek more than just the iconic sights of the oldest living city in the world.",
    category: "Notes from WanderMate",
    region: "India",
    place: "Varanasi",
    destination: "kashi",
    image: "/images/priest-river.jpg",
    imageAlt: "A priest at the edge of the Ganga at dawn",
    body: [
      {
        t: "p",
        text: "We create bespoke luxury experiences for those who seek more than just the iconic sights of the oldest living city in the world.",
      },
      {
        t: "p",
        text: "In Varanasi, luxury isn't just about the thread count of your linens; it's about the exclusivity of your access and the depth of your connection.",
      },
      {
        t: "p",
        text: "For some, luxury is the profound silence of a private sunrise boat journey on the Ganges, watching the city wake up from the middle of the river while the crowds remain on the shore.",
      },
      {
        t: "p",
        text: "For others, it's the sensory indulgence of a private Satvik feast on a secluded rooftop, overlooking the flickering lamps of the evening Aarti.",
      },
    ],
  },
  {
    slug: "the-pursuit-of-feeling",
    seo: {
      title: "The Pursuit of Feeling",
      description:
        "Travel is about more than checking a destination off a list. In a city as ancient as Varanasi, it is about feeling somewhere else.",
      keywords: ["Varanasi travel"],
    },
    index: false,
    title: "The pursuit of feeling",
    excerpt:
      "Travel has always been about more than checking a destination off a list. In a city as visceral and ancient as Varanasi, travel is about feeling somewhere else.",
    category: "Notes from WanderMate",
    region: "India",
    place: "Varanasi",
    image: "/images/ghat-temple.jpg",
    imageAlt: "A temple rising above the ghats of Varanasi",
    body: [
      { t: "p", text: "Travel has always been about more than just checking a destination off a list." },
      {
        t: "p",
        text: "In a city as visceral and ancient as Varanasi, travel — breathless, beautiful, and raw — is about feeling somewhere else. It is an emotional high, a spiritual resonance that stays with you for the rest of your life.",
      },
    ],
  },
  {
    slug: "what-we-do-and-why",
    seo: {
      title: "What We Do, and Why",
      description:
        "WanderMate crafts tailor-made journeys through the heart of Varanasi for families, couples and private groups from across the world.",
      keywords: ["WanderMate", "Varanasi tours"],
    },
    index: false,
    title: "What we do, and why we do it",
    excerpt:
      "Since our founding, WanderMate has had one mission: crafting remarkable, tailor-made journeys through the heart of Varanasi.",
    category: "Notes from WanderMate",
    region: "India",
    place: "Varanasi",
    image: "/images/boats-above.jpg",
    imageAlt: "Boats on the Ganga seen from above",
    body: [
      {
        t: "p",
        text: "Since our founding, WanderMate has been dedicated to one mission: crafting remarkable, tailor-made journeys through the heart of Varanasi for families, couples and private groups from across the globe.",
      },
      {
        t: "p",
        text: "WanderMate was built on a shared passion for exploration and a deep appreciation for the heritage of Varanasi. Our team bridges traditional local knowledge and modern convenience.",
      },
      {
        t: "p",
        text: "We understand that travelling is more than visiting a destination; it's about immersing yourself in the stories, the culture and the energy of the city.",
      },
    ],
  },
];

/** Words from traditions around the world, explained in a line. */
export const glossary = [
  { word: "Aarti", lang: "Sanskrit", meaning: "An offering of light, a flame waved in circles before the divine." },
  { word: "Ghat", lang: "Hindi", meaning: "Stone steps leading down to a river, for bathing, prayer and ritual." },
  { word: "Darshan", lang: "Sanskrit", meaning: "To see and be seen by the divine, the heart of a temple visit." },
  { word: "Seva", lang: "Punjabi", meaning: "Selfless service, such as cooking or serving in the langar." },
  { word: "Kami", lang: "Japanese", meaning: "The spirits of nature, places and ancestors in Shinto." },
  { word: "Torii", lang: "Japanese", meaning: "A gate marking the passage into sacred ground." },
  { word: "Sema", lang: "Turkish", meaning: "The whirling ceremony of the Mevlevi dervishes, followers of Rumi." },
  { word: "Tshechu", lang: "Dzongkha", meaning: "A Bhutanese festival of masked dances honouring Guru Rinpoche." },
];

const WPM = 200;

export function readTime(p: Post) {
  const words = p.body.reduce((n, b) => n + ("text" in b ? b.text.split(/\s+/).length : 0), 0);
  return `${Math.max(1, Math.ceil(words / WPM))} min read`;
}

/** Words in a story, for structured data. */
export function wordCount(p: Post) {
  return p.body.reduce((n, b) => n + ("text" in b ? b.text.split(/\s+/).length : 0), 0);
}

/** A heading's anchor, e.g. "How to watch it well" → "how-to-watch-it-well". */
export function headingId(text: string) {
  return text.toLowerCase().replace(/[’']/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
