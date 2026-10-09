/*
 * Daily guides for the Journal: practical, question-led pieces written for what
 * travellers search for and what AI answer engines quote. Each carries a
 * `published` date and goes live on that day (see journal.ts).
 *
 * Shape of a guide: an `answer` that settles the question in a few lines, short
 * sections under plain headings, an `faqs` list, and the `sources` behind the facts.
 * Times, fees and festival dates change: keep them hedged ("about", "check on the day")
 * and set `updated` when a guide is revised.
 */

import type { Post } from "@/lib/journal";

export const dailyPosts: Post[] = [
  /* ---------------- Week of 9 October 2026 ---------------- */
  {
    slug: "dev-deepawali-2026-varanasi-guide",
    published: "2026-10-09",
    title: "Dev Deepawali 2026 in Varanasi: date, timings and the best way to see it",
    seo: {
      title: "Dev Deepawali 2026 Varanasi: Date, Time & Where to Watch",
      description:
        "Dev Deepawali 2026 falls on Tuesday 24 November in Varanasi. When the lamps are lit, where to watch from, boats, crowds and how to plan the night.",
      keywords: ["Dev Deepawali 2026", "Dev Diwali Varanasi 2026 date", "Dev Deepawali boat booking", "Kartik Purnima Varanasi", "Varanasi November"],
    },
    answer:
      "Dev Deepawali 2026 falls on Tuesday 24 November, the full moon of Kartik. The lamps are lit at dusk, from roughly 5 PM, and the ghats stay lit for two to three hours. The best view is from a boat on the river; book it, your hotel and your train or flight weeks ahead, because it is one of the busiest nights of the year in Varanasi.",
    excerpt: "On the full moon of Kartik, Varanasi lights a lamp on every step of its riverfront. Here is how to plan the night, from the date to the best seat on the water.",
    category: "Guides",
    region: "India",
    place: "Varanasi",
    destination: "kashi",
    tours: ["dev-deepawali-2026", "kashi-in-four-days", "kashi-premium"],
    image: "/images/dev-deepawali/fireworks.jpg",
    imageAlt: "Fireworks over the lit ghats of Varanasi on Dev Deepawali",
    facts: [
      { k: "Date", v: "Tuesday 24 November 2026" },
      { k: "Lunar day", v: "Kartik Purnima, the full moon of Kartik" },
      { k: "Lamps lit", v: "At dusk, from about 5 PM" },
      { k: "Best view", v: "From a boat on the Ganga" },
    ],
    body: [
      { t: "h", text: "When is Dev Deepawali in 2026?" },
      {
        t: "p",
        text: "Dev Deepawali, the Diwali of the gods, is celebrated on Kartik Purnima, the full moon about two weeks after Diwali. In 2026 that is Tuesday 24 November. Diwali itself falls on 8 November, and 2026 has an extra lunar month, which is why both festivals arrive later than they did last year.",
      },
      {
        t: "p",
        text: "Because the date follows the lunar calendar, a few listings online disagree by a day. The 24th is the date given by most panchang calculations; it is worth confirming against a local panchang before you book anything that cannot move.",
      },
      { t: "h", text: "What happens on the night" },
      {
        t: "p",
        text: "As the sun goes down, earthen lamps are set out along the steps of the ghats, from Assi in the south to Raj Ghat in the north, until the whole crescent of the riverfront is a single line of light. The evening Ganga Aarti at Dashashwamedh is the grandest of the year, and there are fireworks over the water. Belief holds that on this night the gods descend to bathe in the Ganga.",
      },
      {
        t: "quote",
        text: "The lamps are lit at dusk and burn for two to three hours. Be in place by half past four.",
      },
      { t: "h", text: "Where to watch from" },
      {
        t: "p",
        text: "A boat gives the view that the photographs promise: every ghat at once, reflected in the river. Boats for the evening fill weeks in advance, and prices rise sharply close to the date. Insist on a licensed boat with life jackets, and agree the boarding point and time in writing.",
      },
      {
        t: "p",
        text: "If you would rather stay on land, a rooftop café or guesthouse on the ghats is the next best thing. Dashashwamedh is the most crowded; Assi and the ghats around Raj Ghat are easier to move through. Wherever you stand, expect the steps to be packed from late afternoon.",
      },
      {
        t: "p",
        text: "Across the river at Ramnagar Fort, the Akashganga festival adds music, Kathak and fireworks to the day for guests with passes. Our own Dev Deepawali journey combines it with a four-hour private cruise past all 84 ghats.",
      },
      { t: "h", text: "Getting around on the day" },
      {
        t: "p",
        text: "Roads near the ghats are closed to vehicles from the afternoon, so cars drop you at points such as Godowlia, Lanka or Raj Ghat and you walk the rest. Allow far more time than you think you need, wear shoes with grip for the steps, carry small change, water and a warm layer for the river, and agree a meeting point with your group in case you are separated.",
      },
      { t: "h", text: "How to plan the trip" },
      {
        t: "p",
        text: "Arrive at least a day early. The evening before is quieter and lets you see the city before the crowds, and the morning after is beautiful at Assi Ghat. Hotels near the ghats sell out first, so book your stay, your boat and your train or flight as soon as your dates are fixed.",
      },
    ],
    faqs: [
      {
        q: "What is the date of Dev Deepawali 2026?",
        a: "Tuesday 24 November 2026, on Kartik Purnima. Check a local panchang before booking, as a few listings give the 25th.",
      },
      {
        q: "What time are the lamps lit on Dev Deepawali?",
        a: "At dusk, from about 5 PM, and they burn for two to three hours. Aim to be on your boat or at your spot on the ghats by 4:30 PM.",
      },
      {
        q: "Is it better to watch Dev Deepawali from a boat or the ghats?",
        a: "A boat shows the whole lit riverfront at once and keeps you out of the crush on the steps. Book a licensed boat with life jackets well in advance.",
      },
      {
        q: "How far ahead should I book for Dev Deepawali?",
        a: "As early as you can: boats, ghat-side hotels and trains to Varanasi fill weeks ahead, and prices rise close to the date.",
      },
    ],
    sources: [
      { name: "Hindutone: Dev Deepawali on 24 November 2026", url: "https://hindutone.com/festivals/diwali-2026/varanasi-diwali-2026-dev-deepawali-the-divine-festival-of-lights/" },
      { name: "Wikipedia: Dev Deepavali (Varanasi)", url: "https://en.wikipedia.org/wiki/Dev_Deepavali_(Varanasi)" },
      { name: "Zingbus: Varanasi in November", url: "https://www.zingbus.com/blog/?p=1691" },
    ],
  },

  {
    slug: "best-time-to-visit-varanasi",
    published: "2026-10-10",
    title: "The best time to visit Varanasi, month by month",
    seo: {
      title: "Best Time to Visit Varanasi: A Month-by-Month Guide",
      description:
        "October to March is the best time to visit Varanasi. What each month is like, from winter fog and Dev Deepawali to May heat and monsoon floods on the ghats.",
      keywords: ["best time to visit Varanasi", "Varanasi weather by month", "Varanasi in winter", "Varanasi monsoon", "when to go to Varanasi"],
    },
    answer:
      "The best time to visit Varanasi is from October to March, when days are mild and dry. November to February is the most comfortable and the busiest, with Dev Deepawali in November. April to June is very hot, with May highs above 40°C, and July to September is the monsoon, when the Ganga can flood the ghats and boat rides are suspended.",
    excerpt: "Varanasi changes completely with the seasons. Here is what each part of the year is really like, and which months suit which kind of trip.",
    category: "Guides",
    region: "India",
    place: "Varanasi",
    destination: "kashi",
    image: "/images/fog-boats.jpg",
    imageAlt: "Boats in the winter mist on the Ganga",
    facts: [
      { k: "Best months", v: "October to March" },
      { k: "Peak season", v: "November to February" },
      { k: "Hottest", v: "May and June, often above 40°C" },
      { k: "Monsoon", v: "July to September" },
    ],
    body: [
      { t: "h", text: "October and November: the city comes alive" },
      {
        t: "p",
        text: "The monsoon water has drawn back from the steps, the air is clear and the evenings are warm. This is also the festival season: Navratri and Dussehra in October, Diwali and then Dev Deepawali on the full moon of Kartik in November. If you want to see Varanasi at its most luminous, this is the time, and you should book early.",
      },
      { t: "h", text: "December to February: fog, fires and malaiyo" },
      {
        t: "p",
        text: "Winter brings cool, sunny days, cold nights that can drop below 10°C, and mornings when fog lies thick on the river. The fog makes for some of the most beautiful boat rides of the year, and it is the season of malaiyo, the saffron milk foam sold only on winter mornings. Pack a warm jacket for the river at dawn, and allow for delayed trains and flights on foggy days.",
      },
      { t: "h", text: "March: the last comfortable month" },
      {
        t: "p",
        text: "Days warm up quickly through March. Holi usually falls this month, and it is celebrated in Varanasi with enormous energy; it is a joyful but chaotic time to visit, best with a local companion.",
      },
      { t: "h", text: "April to June: the heat" },
      {
        t: "p",
        text: "This is the hardest season for travel. Temperatures climb towards the mid-40s in May and June. If you do come, keep to the ghats at dawn and after sunset, and rest through the middle of the day. Hotel prices are at their lowest.",
      },
      { t: "h", text: "July to September: the monsoon" },
      {
        t: "p",
        text: "July and August are the wettest months. As the Ganga rises, it can cover the lower steps and, in heavy years, all 84 ghats; in August 2024 boat services were suspended for weeks. The evening Aarti moves to higher ground when the water is up. The city is green and quiet, but plans built around the river may not be possible, so check the water level before you go.",
      },
      { t: "h", text: "So when should you go?" },
      {
        t: "p",
        text: "For a first visit, choose November or February: comfortable weather, the river at its best and a full calendar of rituals. For Dev Deepawali, plan around 24 November 2026. For quiet and low prices, the edges of the season, early October and March, are a good compromise.",
      },
    ],
    faqs: [
      { q: "Which is the best month to visit Varanasi?", a: "November and February are the most comfortable, with mild days and clear evenings. November also has Dev Deepawali." },
      { q: "Is Varanasi too cold in December and January?", a: "Days are pleasant, but nights can fall below 10°C and mornings are often foggy. Bring a warm layer for dawn on the river." },
      { q: "Can you take a boat ride in Varanasi during the monsoon?", a: "Often not. When the Ganga rises in July to September, boat services are suspended for safety, sometimes for weeks." },
      { q: "When is it too hot to visit Varanasi?", a: "May and June, when highs are often above 40°C. If you go, plan your sightseeing for dawn and after sunset." },
    ],
    sources: [
      { name: "Weather2Travel: Varanasi climate by month", url: "https://weather2travel.com/india/varanasi/climate/?Units=0" },
      { name: "EaseWeather: Best time to travel to Varanasi", url: "https://www.easeweather.com/asia/india/uttar-pradesh/varanasi/best-time" },
      { name: "The News Mill: Varanasi boat services suspended (2024)", url: "https://thenewsmill.com/2024/09/varanasi-boatmen-suffer-as-boat-services-remain-suspended/" },
    ],
  },

  {
    slug: "kashi-vishwanath-darshan-guide",
    published: "2026-10-11",
    title: "Kashi Vishwanath darshan: timings, Sugam Darshan and what to carry",
    seo: {
      title: "Kashi Vishwanath Darshan Guide: Timings, Tickets, Tips",
      description:
        "How to visit Kashi Vishwanath Temple: aarti times, Sugam Darshan tickets, what you can't carry, the quietest hours and how the corridor works.",
      keywords: ["Kashi Vishwanath darshan", "Kashi Vishwanath timings", "Sugam Darshan Kashi Vishwanath", "Mangala Aarti Varanasi", "Kashi Vishwanath corridor"],
    },
    answer:
      "Kashi Vishwanath Temple is open from before dawn until late evening, with darshan paused during each aarti. The Mangala Aarti is at about 3 AM and must be booked ahead. Sugam Darshan, the paid fast-track entry, costs about ₹250–300 and is booked on the temple trust's website. Phones, bags and leather are not allowed inside; use the lockers at the gates.",
    excerpt: "The golden-spired temple of Shiva is the heart of Kashi. A practical guide to darshan: when to go, how the tickets work and what to leave behind.",
    category: "Guides",
    region: "India",
    place: "Varanasi",
    destination: "kashi",
    image: "/images/young-priests.jpg",
    imageAlt: "Young priests in Varanasi",
    facts: [
      { k: "Mangala Aarti", v: "About 3–4 AM (booked ahead)" },
      { k: "Sugam Darshan", v: "About ₹250–300 per person" },
      { k: "Not allowed", v: "Phones, bags, leather, electronics" },
      { k: "Quietest", v: "Weekday mornings, soon after opening" },
    ],
    body: [
      { t: "h", text: "Why this temple matters" },
      {
        t: "p",
        text: "Kashi Vishwanath is one of the twelve Jyotirlingas of Shiva and the spiritual centre of Varanasi. The present temple was built in 1780 by Ahilyabai Holkar, the Maratha queen of Indore, and in the 1830s Maharaja Ranjit Singh gave gold to plate its domes. Since 2021, the Kashi Vishwanath Dham corridor has opened a wide passage from the temple down to the Ganga.",
      },
      { t: "h", text: "Timings and the daily aartis" },
      {
        t: "p",
        text: "The temple opens in the early hours and closes late at night. Five aartis punctuate the day, starting with the Mangala Aarti at about 3 AM, and darshan stops while each one is performed. The Mangala Aarti is the most moving and the most sought after: it has a limited number of tickets and must be booked in advance. Timings shift slightly with the season and on festival days, so check the temple trust's website the day before.",
      },
      { t: "h", text: "Sugam Darshan: the fast-track entry" },
      {
        t: "p",
        text: "Sugam Darshan is a paid entry that takes you through a shorter queue. It costs about ₹250 to ₹300 per person, depending on the option, and is booked through the Shri Kashi Vishwanath Temple Trust's official website. It is not available during the aartis or on major festival days, when everyone joins the main line.",
      },
      { t: "h", text: "What you can't take in" },
      {
        t: "p",
        text: "Mobile phones, cameras, smartwatches, bags and leather items are not allowed inside. Free lockers are available near the gates. Carry only what you need: your ID, a little cash for offerings and your Sugam Darshan confirmation.",
      },
      { t: "h", text: "When to go" },
      {
        t: "p",
        text: "Weekday mornings, soon after the temple opens, are usually the quietest. Mondays, and Mondays in the month of Shravan above all, are the busiest days of the year, along with Mahashivratri. Dress modestly, with shoulders and knees covered, and wear shoes you can slip off easily.",
      },
      { t: "h", text: "Around the temple" },
      {
        t: "p",
        text: "Two shrines beside Vishwanath are almost always missed: Annapurna, the goddess of food, whose golden idol is shown only around Diwali, and Vishalakshi, one of the 51 Shakti Peethas, a short walk away. Allow time for both.",
      },
    ],
    faqs: [
      { q: "What time does Kashi Vishwanath Temple open?", a: "In the early hours, before the Mangala Aarti at about 3 AM, and it closes late at night. Darshan pauses during each of the five daily aartis." },
      { q: "How much is Sugam Darshan at Kashi Vishwanath?", a: "About ₹250 to ₹300 per person, depending on the option. Book it on the temple trust's official website." },
      { q: "Can I take my phone into Kashi Vishwanath?", a: "No. Phones, cameras, bags and leather items are not allowed; use the free lockers near the gates." },
      { q: "What is the best time for Kashi Vishwanath darshan?", a: "Weekday mornings soon after opening are usually quietest. Avoid Mondays in Shravan and Mahashivratri if you dislike crowds." },
    ],
    sources: [
      { name: "Shri Kashi Vishwanath Temple Trust (official)", url: "https://shrikashivishwanath.org" },
      { name: "Goodreturns: Kashi Vishwanath darshan update, 2026", url: "https://www.goodreturns.in/news/new-year-2026-temple-darshan-updates-kashi-vishwanath-mahakaleshwar-banke-bihari-ram-mandir-timings-1478656.html" },
      { name: "Yatradham: Kashi Vishwanath temple timings", url: "https://blog.yatradham.org/kashi-vishwanath-temple-timings/" },
    ],
  },

  {
    slug: "ganga-aarti-timings-varanasi",
    published: "2026-10-12",
    title: "Ganga Aarti in Varanasi: timings, where to sit and Dashashwamedh or Assi",
    seo: {
      title: "Ganga Aarti Varanasi Timings & Best Place to Watch",
      description:
        "The evening Ganga Aarti at Dashashwamedh starts around sunset, about 6 PM in winter and 7 PM in summer, and lasts 45 minutes. Where to sit and when to arrive.",
      keywords: ["Ganga Aarti timings Varanasi", "Dashashwamedh Ghat Aarti time", "Assi Ghat morning aarti", "Ganga Aarti boat", "Varanasi evening aarti"],
    },
    answer:
      "The evening Ganga Aarti at Dashashwamedh Ghat begins just after sunset, at about 6 PM in winter and 7 PM in summer, and lasts around 45 minutes. Arrive 45 to 90 minutes early for a good place on the steps, or watch from a boat moored in front of the ghat. Assi Ghat holds a quieter morning ritual, Subah-e-Banaras, before sunrise.",
    excerpt: "Every evening, priests at Dashashwamedh raise great tiered lamps to the river. Here is how to time it, where to sit, and when Assi is the better choice.",
    category: "Guides",
    region: "India",
    place: "Varanasi",
    destination: "kashi",
    tours: ["banaras-unfiltered", "kashi-in-four-days", "kashi-premium"],
    image: "/images/aarti-priest.jpg",
    imageAlt: "A priest raises a brass lamp during the Ganga Aarti",
    facts: [
      { k: "Winter start", v: "About 6 PM (October–March)" },
      { k: "Summer start", v: "About 7 PM (April–September)" },
      { k: "Length", v: "About 45 minutes" },
      { k: "Arrive", v: "45–90 minutes early" },
    ],
    body: [
      { t: "h", text: "When does the Ganga Aarti start?" },
      {
        t: "p",
        text: "The evening Aarti at Dashashwamedh is tied to sunset rather than the clock. In the cooler months, roughly October to March, it begins at about 6 PM, sometimes a little earlier in December; from April to September it moves to about 7 PM. It lasts around 45 minutes. On Tuesdays and on festival days, especially Dev Deepawali, it runs longer and draws far bigger crowds.",
      },
      { t: "h", text: "Where to sit" },
      {
        t: "p",
        text: "There are three ways to watch. On the steps of Dashashwamedh you are close to the priests and the sound of the bells, but you need to arrive early: the best places go 45 to 90 minutes before the start. From a boat moored in front of the ghat you see the whole line of priests and the lamps reflected in the water, without the crush. And from a reserved seat beside the platform, which we arrange on our journeys, you are close enough to feel the heat of the lamps.",
      },
      {
        t: "quote",
        text: "Watch one evening from the steps and one from the water. They are two different ceremonies.",
      },
      { t: "h", text: "Dashashwamedh or Assi?" },
      {
        t: "p",
        text: "Dashashwamedh holds the grand evening Aarti, with a line of young priests in silk moving in unison. Assi Ghat, at the southern end of the riverfront, has a smaller evening Aarti and is best known for Subah-e-Banaras, a morning programme of chanting, music and yoga that begins before sunrise. If you can, see the evening Aarti at Dashashwamedh and the morning at Assi.",
      },
      { t: "h", text: "Tips for the evening" },
      {
        t: "p",
        text: "Keep your belongings close in the crowd. Photography is allowed from the steps and boats, but put the phone down for a few minutes; the Aarti is a prayer, not a show. Afterwards, buy a leaf-boat diya from the children on the steps and set it on the river. During the monsoon, when the river is high, the Aarti moves to higher ground and boats may not be allowed out.",
      },
    ],
    faqs: [
      { q: "What time is the Ganga Aarti in Varanasi?", a: "Just after sunset: about 6 PM from October to March and about 7 PM from April to September. It lasts around 45 minutes." },
      { q: "Which ghat has the best Ganga Aarti?", a: "Dashashwamedh holds the grandest evening Aarti. Assi Ghat is quieter and known for the Subah-e-Banaras morning programme." },
      { q: "How early should I arrive for the Ganga Aarti?", a: "45 to 90 minutes before the start for a good place on the steps; earlier on Tuesdays and festival days." },
      { q: "Is it better to watch the Ganga Aarti from a boat?", a: "A boat gives you the whole line of priests and the reflections without the crowd; the steps put you closer to the sound. Both are worth doing." },
    ],
    sources: [
      { name: "Wikipedia: Dashashwamedh Ghat", url: "https://en.wikipedia.org/wiki/Dashashwamedh_Ghat" },
      { name: "TravelTriangle: Dashashwamedh Ghat timings", url: "https://traveltriangle.com/blog/dashashwamedh-ghat/" },
      { name: "Varanasi Guru: Ganga Aarti timing by month", url: "https://www.varanasiguru.com/?p=15582" },
    ],
  },

  {
    slug: "how-many-days-in-varanasi",
    published: "2026-10-13",
    title: "How many days in Varanasi? One, two and three-day plans",
    seo: {
      title: "How Many Days in Varanasi? 1, 2 & 3-Day Itineraries",
      description:
        "Two to three days is the right length for Varanasi. Day-by-day plans for one, two and three days: the Aarti, a dawn boat, the temples, the lanes and Sarnath.",
      keywords: ["how many days in Varanasi", "Varanasi itinerary 2 days", "Varanasi 3 day itinerary", "one day in Varanasi", "Varanasi trip plan"],
    },
    answer:
      "Plan two to three days in Varanasi. One day covers the evening Ganga Aarti and a sunrise boat ride; two days add Kashi Vishwanath, the old city's lanes and a food walk; three days let you add Sarnath, Ramnagar Fort and the Madanpura silk weavers at an unhurried pace.",
    excerpt: "Varanasi rewards slowness, but most travellers have a weekend. Here is how to spend one, two or three days without rushing the river.",
    category: "Guides",
    region: "India",
    place: "Varanasi",
    destination: "kashi",
    tours: ["kashi-in-four-days", "banaras-unfiltered", "kashi-premium"],
    image: "/images/hero-ghats.jpg",
    imageAlt: "The ghats of Varanasi along the Ganga",
    facts: [
      { k: "Ideal stay", v: "2–3 days" },
      { k: "Must do", v: "Evening Aarti and a dawn boat" },
      { k: "Day trips", v: "Sarnath (about 10 km), Ramnagar Fort" },
      { k: "Best base", v: "Near the ghats, between Assi and Dashashwamedh" },
    ],
    body: [
      { t: "h", text: "If you have one day" },
      {
        t: "p",
        text: "Start before sunrise with a boat from Assi or Dashashwamedh, drifting north past the ghats as the city bathes and prays; pass Manikarnika, the cremation ghat, quietly. Have breakfast of kachori, sabzi and jalebi in the old city. Spend the afternoon in the lanes around Kashi Vishwanath and, if you can, take darshan. In the evening, watch the Ganga Aarti at Dashashwamedh.",
      },
      { t: "h", text: "If you have two days" },
      {
        t: "p",
        text: "Keep day one as above, but move the temple to the second morning, as early as possible, when the queues are shortest; add Annapurna and Vishalakshi beside it. Spend the afternoon in Madanpura, where families have woven silk for generations, and the evening on a food walk through Chowk and Godowlia: tamatar chaat, Banarasi paan and lassi in a clay cup.",
      },
      { t: "h", text: "If you have three days" },
      {
        t: "p",
        text: "Use the third day for what lies around the city. Sarnath, about ten kilometres away, is where the Buddha gave his first sermon; give it a morning, and note that its museum is closed on Fridays. Across the river, Ramnagar Fort holds the Maharaja of Banaras's museum. Finish at Assi Ghat for Subah-e-Banaras the next morning, or at the Durga Kund and Sankat Mochan temples in the south of the city.",
      },
      {
        t: "quote",
        text: "See the river twice: once at dawn from the water, once at dusk from the steps.",
      },
      { t: "h", text: "Where to stay" },
      {
        t: "p",
        text: "Stay near the ghats, anywhere between Assi and Dashashwamedh, so that the river is a short walk at dawn. The lanes are narrow and cars cannot reach many hotels, so travel light or arrange a porter.",
      },
      { t: "h", text: "If you'd like it planned for you" },
      {
        t: "p",
        text: "Our Kashi in Four Days journey follows the three-day plan with a slower pace and a private car, and Banaras Unfiltered fits the two-day plan into a weekend for solo travellers.",
      },
    ],
    faqs: [
      { q: "Is one day enough for Varanasi?", a: "One day covers the essentials, a dawn boat and the evening Aarti, but two to three days let you see the temples, lanes and Sarnath without rushing." },
      { q: "Is it worth going to Sarnath from Varanasi?", a: "Yes. It is about 10 km away, where the Buddha gave his first sermon; allow half a day and avoid Fridays, when the museum is closed." },
      { q: "Where should I stay in Varanasi?", a: "Near the ghats, between Assi and Dashashwamedh, so you can walk to the river at dawn." },
    ],
    sources: [
      { name: "Incredible India: Sarnath Museum", url: "https://www.incredibleindia.gov.in/en/uttar-pradesh/varanasi/sarnath-museum" },
      { name: "Wikipedia: Sarnath", url: "https://en.wikipedia.org/wiki/Sarnath" },
    ],
  },

  {
    slug: "sarnath-from-varanasi",
    published: "2026-10-14",
    title: "Sarnath from Varanasi: where the Buddha first taught",
    seo: {
      title: "Sarnath Day Trip from Varanasi: What to See & Know",
      description:
        "Sarnath is about 10 km from Varanasi, where the Buddha gave his first sermon. The Dhamek Stupa, Ashoka's lion capital, the museum (closed Fridays) and tips.",
      keywords: ["Sarnath from Varanasi", "Sarnath day trip", "Dhamek Stupa", "Sarnath museum timings", "Ashoka lion capital"],
    },
    answer:
      "Sarnath is about 10 km north-east of Varanasi, a 30 to 45-minute drive. It is where the Buddha gave his first sermon after his enlightenment. See the Dhamek Stupa, the ruins of the deer park, the Mulagandha Kuti Vihara and the Archaeological Museum, home of Ashoka's Lion Capital, India's national emblem. The museum is closed on Fridays; allow half a day.",
    excerpt: "A short drive from the ghats, a quiet green park marks the place where the Buddha first turned the wheel of Dharma.",
    category: "Guides",
    region: "India",
    place: "Sarnath",
    destination: "kashi",
    tours: ["kashi-in-four-days", "kashi-premium", "kashi-luxury"],
    image: "/images/packages/sarnath.jpg",
    imageAlt: "The Dhamek Stupa at Sarnath",
    facts: [
      { k: "Distance", v: "About 10 km from Varanasi" },
      { k: "Time needed", v: "Half a day" },
      { k: "Museum", v: "Closed on Fridays" },
      { k: "Don't miss", v: "Ashoka's Lion Capital" },
    ],
    body: [
      { t: "h", text: "Why Sarnath matters" },
      {
        t: "p",
        text: "After his enlightenment at Bodh Gaya, the Buddha walked to a deer park at Sarnath to find five companions who had once practised austerities with him. Here he gave his first sermon, setting out the Middle Way and the Four Noble Truths, an event Buddhists call the turning of the wheel of Dharma. The first sangha, the community of monks, began here, and Sarnath is one of the four great places of Buddhist pilgrimage.",
      },
      { t: "h", text: "What to see" },
      {
        t: "p",
        text: "The Dhamek Stupa, a great cylinder of stone and brick, marks the traditional site of the sermon; its present form dates largely from the Gupta period, built over older Mauryan foundations. Around it lie the excavated ruins of monasteries and the stump of Ashoka's pillar. Nearby, the Mulagandha Kuti Vihara, a modern temple, is decorated with murals of the Buddha's life, and in its garden grows a Bodhi tree said to come from the sacred tree at Anuradhapura in Sri Lanka, itself grown from the tree at Bodh Gaya.",
      },
      {
        t: "p",
        text: "Leave time for the Archaeological Museum. Its treasure is the Lion Capital that Ashoka raised on a pillar here in the third century BCE: four lions back to back, now the State Emblem of India. The museum is closed on Fridays, and tickets are bought online by scanning a QR code at the gate.",
      },
      {
        t: "quote",
        text: "Ten kilometres from the noise of the ghats, Sarnath is the quietest place in Varanasi.",
      },
      { t: "h", text: "How to plan the visit" },
      {
        t: "p",
        text: "Sarnath is 30 to 45 minutes by car from the ghats, depending on traffic. Go in the morning, when the park is cool and calm, and be back in the city for lunch. Entry fees for the archaeological park and museum are modest; check the current fee at the gate, as listed prices vary.",
      },
    ],
    faqs: [
      { q: "How far is Sarnath from Varanasi?", a: "About 10 km, a 30 to 45-minute drive from the ghats depending on traffic." },
      { q: "Is Sarnath Museum open on Fridays?", a: "No. The Archaeological Museum at Sarnath is closed on Fridays." },
      { q: "What is Sarnath famous for?", a: "It is where the Buddha gave his first sermon. It is also home to the Dhamek Stupa and Ashoka's Lion Capital, India's national emblem." },
      { q: "How much time do I need in Sarnath?", a: "Half a day is enough for the stupa, the ruins, the Mulagandha Kuti Vihara and the museum." },
    ],
    sources: [
      { name: "Wikipedia: Sarnath", url: "https://en.wikipedia.org/wiki/Sarnath" },
      { name: "Incredible India: Sarnath Museum", url: "https://www.incredibleindia.gov.in/en/uttar-pradesh/varanasi/sarnath-museum" },
      { name: "Live History India: Sarnath, where Buddha spoke", url: "https://livehistoryindia.com/story/monuments/sarnath" },
    ],
  },

  {
    slug: "varanasi-street-food-guide",
    published: "2026-10-15",
    title: "What to eat in Varanasi: a street-food guide, morning to night",
    seo: {
      title: "Varanasi Street Food: What to Eat and Where",
      description:
        "Kachori sabzi at breakfast, tamatar chaat at dusk, lassi in a clay cup and malaiyo in winter: a local guide to Varanasi street food and where to find it.",
      keywords: ["Varanasi street food", "what to eat in Varanasi", "tamatar chaat Varanasi", "malaiyo Varanasi", "Kachori Gali", "Banarasi food"],
    },
    answer:
      "Start the day with kachori sabzi and jalebi, eat tamatar chaat in the evening around Godowlia, drink lassi from a clay kulhad, finish with Banarasi paan, and in winter look for malaiyo, a saffron milk foam sold only on cold mornings. Most of Varanasi's street food is vegetarian; go early for breakfast and in the evening for chaat.",
    excerpt: "Varanasi eats by the clock: hot kachori at dawn, chaat at dusk, malaiyo only on winter mornings. Here is the day, dish by dish.",
    category: "Guides",
    region: "India",
    place: "Varanasi",
    destination: "kashi",
    tours: ["banaras-unfiltered", "kashi-premium", "kashi-in-four-days"],
    image: "/images/packages/old-city-lane.jpg",
    imageAlt: "A lane in the old city of Varanasi",
    facts: [
      { k: "Breakfast", v: "Kachori sabzi and jalebi" },
      { k: "Evening", v: "Tamatar chaat around Godowlia" },
      { k: "Winter only", v: "Malaiyo, on cold mornings" },
      { k: "Carry", v: "Small change; many stalls take cash only" },
    ],
    body: [
      { t: "h", text: "Morning: kachori, sabzi and jalebi" },
      {
        t: "p",
        text: "Banaras starts the day with kachori sabzi: small fried breads served with a spicy potato and chickpea curry, eaten standing at a counter with a hot jalebi to follow. It is sold all over the old city from early morning and is usually gone by late morning, so go early.",
      },
      {
        t: "p",
        text: "In winter, look for malaiyo, perhaps the most Banarasi thing you can eat: milk boiled, left out overnight under the open sky, then whipped into a light saffron foam and served in a clay cup with pistachios. It appears only on cold mornings, roughly from November to February, and vanishes as the day warms up.",
      },
      { t: "h", text: "Afternoon: lassi in a kulhad" },
      {
        t: "p",
        text: "Lassi in Varanasi is thick enough to eat with a spoon, topped with a layer of cream and served in a kulhad, a clay cup you throw away after. The little shops in the lanes near Manikarnika serve dozens of flavours; the plain sweet lassi is still the best.",
      },
      { t: "h", text: "Evening: tamatar chaat" },
      {
        t: "p",
        text: "As the light goes, the chaat shops around Godowlia and Dashashwamedh Road fill up. Order tamatar chaat, a dish you will not find outside Banaras: tomatoes and potatoes cooked down with spices, served hot in a leaf bowl with a sweet syrup and crisp namkeen on top. Follow it with palak patta chaat, crisp-fried spinach leaves with yoghurt and chutney, and golgappe.",
      },
      {
        t: "quote",
        text: "Eat breakfast early and chaat late. Banaras keeps its own hours.",
      },
      { t: "h", text: "After dinner: paan and thandai" },
      {
        t: "p",
        text: "End the night with a Banarasi paan, a betel leaf folded around sweet and fragrant fillings, which has had its own GI tag since 2023. Thandai, milk with nuts, fennel and saffron, is the city's festival drink; it is everywhere at Holi and Shivratri.",
      },
      { t: "h", text: "A few tips" },
      {
        t: "p",
        text: "Most street food in Varanasi is vegetarian, and much of it is cooked without onion or garlic near the temples. Eat where it is busy and freshly fried, carry small change for the stalls in the lanes, and pace yourself: the best way to eat here is a little, often, with someone who knows which counter to stop at.",
      },
    ],
    faqs: [
      { q: "What is the most famous food in Varanasi?", a: "Kachori sabzi with jalebi for breakfast, tamatar chaat in the evening, lassi in a clay cup and Banarasi paan. In winter, malaiyo." },
      { q: "When can you get malaiyo in Varanasi?", a: "Only on cold winter mornings, roughly November to February. It is sold early and is gone by late morning." },
      { q: "Is Varanasi street food vegetarian?", a: "Mostly, yes. Much of it near the temples is also made without onion or garlic." },
      { q: "Where should I eat chaat in Varanasi?", a: "Around Godowlia and Dashashwamedh Road in the evening, when the chaat shops are at their busiest." },
    ],
    sources: [
      { name: "Outlook Traveller: Varanasi, a gastronomic trail", url: "https://www.outlooktraveller.com/experiences/food-and-drink/varanasi-a-gastronomic-trail" },
      { name: "Business Today: Banarasi paan gets GI tag (2023)", url: "https://businesstoday.in/industry/agriculture/story/banarasi-langda-mango-banarasi-paan-are-latest-entrants-to-gi-tag-club-375981-2023-04-04" },
    ],
  },
];
