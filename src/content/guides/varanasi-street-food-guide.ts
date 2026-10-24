import type { Post } from "@/lib/journal";

const guide: Post = {
  slug: "varanasi-street-food-guide",
  published: "2026-10-15",
  updated: "2026-10-14",
  title: "What to eat in Varanasi: a street-food guide from dawn to midnight",
  seo: {
    title: "Varanasi Street Food: What to Eat and Where",
    description:
      "Kachori sabzi at dawn, tamatar chaat at dusk, lassi in a clay cup, malaiyo in winter and Banarasi paan: a local guide to Varanasi street food, hour by hour.",
    keywords: ["Varanasi street food", "what to eat in Varanasi", "tamatar chaat Varanasi", "malaiyo Varanasi", "Kachori Gali Varanasi"],
  },
  answer:
    "Varanasi eats by the clock. Start with kachori sabzi and hot jalebi, eaten before 10 AM. In winter, look for malaiyo, a saffron milk foam sold only on cold mornings. Drink lassi from a clay kulhad, eat tamatar chaat around Godowlia in the evening, and finish with a Banarasi paan, which has a GI tag. Almost all of it is vegetarian.",
  takeaways: [
    "Breakfast early: kachori sabzi and jalebi",
    "Chaat after 5 PM around Godowlia",
    "Malaiyo only on winter mornings",
    "Mostly vegetarian, often without onion or garlic",
  ],
  excerpt:
    "Banaras keeps its own hours, and so does its food: kachori at dawn, lassi at noon, chaat at dusk, paan at midnight and malaiyo only when the nights are cold. Here is the day, dish by dish, and how to eat it like someone who lives here.",
  category: "Guides",
  region: "India",
  place: "Varanasi",
  destination: "kashi",
  tours: ["banaras-unfiltered", "kashi-premium", "kashi-in-four-days"],
  image: "/images/packages/old-city-lane.jpg",
  imageAlt: "A lane in the old city of Varanasi",
  facts: [
    { k: "Breakfast", v: "Kachori sabzi and jalebi, before 10 AM" },
    { k: "Evening", v: "Tamatar chaat around Godowlia" },
    { k: "Winter only", v: "Malaiyo, roughly Nov–Feb" },
    { k: "GI-tagged", v: "Banarasi paan (2023)" },
    { k: "Carry", v: "Small notes; many stalls are cash or UPI only" },
  ],
  body: [
    {
      t: "p",
      text: "In Varanasi, food is a matter of timing. The kachori counters in the old city are crowded at seven in the morning and shuttered by eleven. The chaat shops of Godowlia light their stoves as the Aarti ends. The man with the brass pot of malaiyo appears on the corner only on cold mornings, and only until the sun warms the foam. Miss the hour and you miss the dish.",
    },
    {
      t: "p",
      text: "This is a city of pilgrims and priests, and its food reflects it: almost entirely vegetarian, often made without onion or garlic near the temples, rich with ghee, milk and sugar, and eaten standing up. Below is a day of eating in Banaras, from the first kachori to the last paan, with the names of the dishes you should ask for and the places locals send you.",
    },
    { t: "h", text: "The day at a glance" },
    {
      t: "table",
      caption: "What to eat, and when",
      head: ["Time", "Eat or drink", "Where to look"],
      rows: [
        ["6–10 AM", "Kachori sabzi, jalebi, chai", "Kachori Gali and the lanes of Chowk and Thatheri Bazaar"],
        ["7–10 AM (winter)", "Malaiyo; choora matar", "Street vendors in the old city around Chowk and Godowlia"],
        ["Late morning to afternoon", "Lassi in a kulhad, thandai", "Lassi shops in the lanes near the ghats; Lanka near BHU"],
        ["5–10 PM", "Tamatar chaat, palak patta chaat, golgappe", "Godowlia and the road to Dashashwamedh"],
        ["Evening", "Baati chokha, sweets: lal peda, launglata", "Sweet shops across the city"],
        ["After dinner", "Banarasi paan", "Paan counters on every main street"],
      ],
    },
    { t: "h", text: "Morning: kachori, sabzi and jalebi" },
    {
      t: "p",
      text: "Banaras begins the day with **kachori sabzi**. The Banarasi kachori is not the round, stuffed pastry of Rajasthan: it is a small puffed bread, often filled with a thin layer of spiced lentil, fried in batches and served with a sharp, peppery curry of potato and sometimes pumpkin or chickpea. You eat it standing at the counter from a leaf plate, and then, because everyone does, you follow it with a hot **jalebi**, coiled straight from the oil into the syrup.",
    },
    {
      t: "p",
      text: "An entire lane near Chowk, known simply as **Kachori Gali**, has given itself over to the dish for generations, and the shops of Thatheri Bazaar nearby are just as famous; **Ram Bhandar** there is one of the best-known names in the city. Go early. By late morning the kachori is finished for the day and the counters are being washed down.",
    },
    {
      t: "img",
      src: "/images/journal/jalebi-frying.jpg",
      alt: "Jalebi coils frying in a wide iron pan of oil",
      caption: "Jalebi is piped straight into hot oil, fried crisp and dropped into syrup; in Banaras it follows kachori at breakfast.",
      credit: "Photo: Pexels",
    },
    { t: "h", text: "Winter mornings: malaiyo and choora matar" },
    {
      t: "p",
      text: "If you visit between about November and February, the most Banarasi thing you can eat is **malaiyo**. Milk is boiled, sweetened and left out overnight under the open winter sky; the dew, they say, is what gives it its lightness. At dawn it is churned by hand into a cloud of froth, scented with saffron and cardamom and scattered with pistachio, and served in a small clay cup. It tastes of almost nothing and of everything, and it dissolves the moment it touches your tongue.",
    },
    {
      t: "tip",
      kind: "local",
      text: "Malaiyo melts as the day warms, so it is sold only in the early morning and vanishes by about ten. Look for a vendor with a large brass or steel pot and a crowd of office-goers around him in the lanes of Chowk and Godowlia, and eat it standing, straight away.",
    },
    {
      t: "p",
      text: "Winter also brings **choora matar**, flattened rice tossed with fresh green peas, ghee, ginger and spices, a warm, savoury breakfast that appears with the new peas and disappears when they do.",
    },
    { t: "h", text: "Afternoon: lassi, thandai and the clay cup" },
    {
      t: "p",
      text: "Lassi in Varanasi is thick enough to eat with a spoon, crowned with a layer of clotted cream, malai, and served in a **kulhad**, an unglazed clay cup you break after drinking. The tiny lassi shops in the lanes above the ghats serve dozens of flavours, from banana and pomegranate to chocolate, and **Blue Lassi**, in the lanes near Manikarnika, is the best known to travellers. Near Banaras Hindu University, the lassi shops at **Lanka** are where students go. The plain sweet lassi is still the best.",
    },
    {
      t: "p",
      text: "**Thandai** is the city's festival drink: cold milk blended with almonds, fennel, rose, pepper and saffron. It is everywhere at Holi and Mahashivratri, sometimes with bhang, a preparation of cannabis that is sold legally from licensed government shops in Uttar Pradesh. If you are offered bhang thandai, know what you are drinking: it is far stronger than people expect and takes hours to wear off.",
    },
    { t: "h", text: "Evening: tamatar chaat and the chaat shops of Godowlia" },
    {
      t: "p",
      text: "As the light goes, the chaat shops around **Godowlia** and the road down to Dashashwamedh fill up. The dish to order is **tamatar chaat**, which you will not find outside Banaras: tomatoes and potatoes cooked down with ginger, green chilli and a secret mix of spices into a soft mash, served hot in a leaf bowl with a thin sweet syrup and a handful of crisp namkeen on top. **Kashi Chaat Bhandar** at Godowlia is the most famous place to try it, and it is crowded every evening.",
    },
    {
      t: "list",
      items: [
        "**Palak patta chaat**: whole spinach leaves fried crisp in gram-flour batter, topped with yoghurt and chutneys.",
        "**Golgappe**: hollow puris filled with spiced water, eaten in one bite; ask for the sweet and the sour waters.",
        "**Aloo tikki**: potato patties fried on a flat iron griddle until a crust forms, with chickpeas and chutney.",
        "**Dahi chaat**: crisp papdi under cool yoghurt, tamarind and mint.",
      ],
    },
    {
      t: "quote",
      text: "Eat breakfast early and chaat late. Banaras keeps its own hours.",
    },
    { t: "h", text: "Sweets: lal peda, launglata and more" },
    {
      t: "p",
      text: "Varanasi's sweet shops are an institution. **Lal peda**, made from milk cooked slowly until it caramelises to a deep reddish brown, is the sweet families take home from Kashi. **Launglata** is a crisp parcel of pastry filled with khoya and sealed with a single clove, fried and dipped in syrup. **Rabri**, thickened milk with layers of cream, is eaten with jalebi or on its own. In summer, look for **kulfi**, and in late May and June the city's own **Langda mango**, which received a GI tag in 2023.",
    },
    { t: "h", text: "After dinner: Banarasi paan" },
    {
      t: "p",
      text: "End the night with a **Banarasi paan**: a betel leaf, here usually the soft Maghai leaf, folded around slaked lime, catechu, areca nut and sweet, fragrant fillings such as gulkand and fennel, and pinned with a clove. The craft of paan in the city is old enough to have its own songs, and in 2023 Banarasi paan was given a **Geographical Indication** tag. Ask for a meetha paan, a sweet one, if it is your first; you chew it slowly and do not swallow the whole thing at once.",
    },
    {
      t: "tip",
      kind: "know",
      title: "Shops change",
      text: "The old city has changed a great deal in recent years, and some well-known shops have moved or closed with road-widening and the temple corridor. The dishes stay the same; if a famous name is gone, ask the nearest shopkeeper where people go now.",
    },
    { t: "h", text: "How to eat street food safely" },
    {
      t: "list",
      ordered: true,
      items: [
        "**Eat where it is busy.** A crowd means the food is fresh and turning over fast.",
        "**Choose it hot.** Food fried or boiled in front of you is safest; be more careful with cut fruit and chutneys left out in the heat.",
        "**Mind the water.** Golgappe water is the riskiest dish on the street; if your stomach is new to India, try it later in the trip.",
        "**Carry small notes.** Many stalls take UPI, but cash is still easiest for a few kachoris.",
        "**Go slowly.** The best way to eat in Banaras is a little, often, over several days.",
      ],
    },
    {
      t: "tip",
      kind: "avoid",
      title: "Bhang on an empty stomach",
      text: "Bhang lassi and bhang thandai are sold openly in Varanasi, and travellers regularly underestimate them. If you try it, have a small amount, after food, at your hotel, and not before a boat ride or a train.",
    },
    { t: "h", text: "Eating your way through a stay" },
    {
      t: "p",
      text: "Food fits naturally into the rhythm of a visit: kachori after a [sunrise boat ride](/journal/varanasi-sunrise-boat-ride-guide), lassi in the lanes after [Kashi Vishwanath](/journal/kashi-vishwanath-darshan-guide), chaat after the [Ganga Aarti](/journal/ganga-aarti-timings-varanasi). If you are coming in winter, plan at least one early morning for malaiyo; our guide to [the best time to visit Varanasi](/journal/best-time-to-visit-varanasi) explains when it is in season.",
    },
    {
      t: "p",
      text: "On [Banaras Unfiltered](/packages/banaras-unfiltered) and [Kashi in Four Days](/packages/kashi-in-four-days), a food walk through the old city with someone who grew up eating there is part of the journey.",
    },
  ],
  faqs: [
    { q: "What is the most famous food in Varanasi?", a: "Kachori sabzi with jalebi for breakfast, tamatar chaat in the evening, lassi in a clay cup and Banarasi paan. In winter, malaiyo." },
    { q: "When can you get malaiyo in Varanasi?", a: "Only on cold winter mornings, roughly November to February. It is sold early and is gone by about 10 AM." },
    { q: "Where can I eat tamatar chaat in Varanasi?", a: "Around Godowlia in the evening; Kashi Chaat Bhandar at Godowlia is the best-known shop and is busy every night." },
    { q: "Is Varanasi street food vegetarian?", a: "Almost entirely. Much of it near the temples is also made without onion or garlic." },
    { q: "Is Banarasi paan GI-tagged?", a: "Yes. Banarasi paan received a Geographical Indication tag in 2023, along with the Banarasi Langda mango." },
  ],
  sources: [
    { name: "Outlook Traveller: Varanasi, a gastronomic trail", url: "https://www.outlooktraveller.com/explore/food-and-drink/varanasi-a-gastronomic-trail" },
    { name: "Business Today: Banarasi paan and Langda mango get GI tags (2023)", url: "https://businesstoday.in/industry/agriculture/story/banarasi-langda-mango-banarasi-paan-are-latest-entrants-to-gi-tag-club-375981-2023-04-04" },
    { name: "Faraway Worlds: food in Varanasi", url: "https://www.farawayworlds.com/food/food-in-varanasi" },
    { name: "National Herald: iconic Varanasi shops demolished", url: "https://www.nationalheraldindia.com/amp/story/national/demolition-of-iconic-shops-in-varanasi-evokes-strong-emotions-from-locals" },
  ],
};

export default guide;
