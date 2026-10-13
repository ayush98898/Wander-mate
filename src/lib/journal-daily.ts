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
  /* ---------------- Week of 16 October 2026 ---------------- */
  {
    slug: "durga-puja-kolkata-2026-guide",
    published: "2026-10-16",
    title: "Durga Puja in Kolkata 2026: dates, pandals and how to see it",
    seo: {
      title: "Durga Puja Kolkata 2026: Dates, Pandals & Tips",
      description:
        "Durga Puja 2026 in Kolkata runs from about 17 to 21 October. The days, the pandals worth queueing for, when to go out and how to see Sindoor Khela.",
      keywords: ["Durga Puja 2026 Kolkata", "Kolkata pandal hopping", "Durga Puja dates 2026", "Sindoor Khela 2026", "Kumartuli Park"],
    },
    answer:
      "Durga Puja 2026 in Kolkata runs from about Saptami on 17–18 October to Bijoya Dashami on 21 October, when Sindoor Khela is held. Go out on Shashthi or Saptami, when the queues are shorter, and walk the old north Kolkata pujas around Bagbazar and Kumartuli. Durga Puja of Kolkata has been on UNESCO's list of intangible heritage since 2021.",
    excerpt: "For five days each autumn, Kolkata becomes one long walk from pandal to pandal. Here is how to time it and where to go.",
    category: "Festivals",
    region: "India",
    place: "Kolkata",
    destination: "kolkata",
    tours: ["durga-puja-in-kolkata", "old-calcutta"],
    image: "/images/destinations/kolkata.jpg",
    imageAlt: "Kolkata during the festival season",
    facts: [
      { k: "2026 dates", v: "About 17–21 October" },
      { k: "Sindoor Khela", v: "Bijoya Dashami, 21 October" },
      { k: "Best days to go out", v: "Shashthi and Saptami" },
      { k: "UNESCO", v: "Intangible heritage since 2021" },
    ],
    body: [
      { t: "h", text: "When is Durga Puja in 2026?" },
      {
        t: "p",
        text: "Durga Puja follows the lunar calendar, and Bengali almanacs and pan-Indian calendars count the days slightly differently. For 2026, most Kolkata listings place Maha Saptami on 17 or 18 October, Ashtami on 18 or 19, Navami on 19 or 20, and Bijoya Dashami on Wednesday 21 October. Confirm the exact days with a Bengali panjika or your puja committee before you book.",
      },
      { t: "h", text: "What happens on each day" },
      {
        t: "p",
        text: "On Shashthi the goddess is unveiled. Saptami begins with the bathing of a banana plant, the kola bou, in the Ganga at dawn. Ashtami is the most devout day, with pushpanjali, the offering of flowers, in the morning and the Sandhi Puja at the hinge of Ashtami and Navami. Navami brings feasting. On Dashami, married women smear one another with vermilion in Sindoor Khela, and the idols are carried to the river for immersion.",
      },
      { t: "h", text: "Which pandals to see" },
      {
        t: "p",
        text: "Start in the north, where Kolkata's oldest community pujas keep the traditional image: Bagbazar, Kumartuli Park and the College Square puja by the lake. The old family pujas of the great houses, such as Sovabazar Rajbari, show how the festival looked two centuries ago. For the spectacular theme pandals, which recreate anything from temples to forests, head to Suruchi Sangha, Dum Dum Park Tarun Sangha or Mohammad Ali Park.",
      },
      {
        t: "quote",
        text: "Pick one neighbourhood a night and walk it. Kolkata's Pujo is best on foot.",
      },
      { t: "h", text: "How to go pandal hopping" },
      {
        t: "p",
        text: "Go out on Shashthi or Saptami: by Ashtami the queues at the famous pandals can run for hours. The city stays up all night, and late night and very early morning are the calmest times. Use the Metro where you can, wear comfortable shoes, carry water and small change, and pace yourself; trying to see everything in one night is the most common mistake.",
      },
      { t: "h", text: "Where to watch the immersion" },
      {
        t: "p",
        text: "On Dashami and the days after, processions carry the idols to the ghats for immersion. Bagbazar Ghat and Prinsep Ghat are the best-known places to watch, and they fill early. It is a moving, noisy farewell; keep to the edges and follow police directions.",
      },
      { t: "h", text: "Before you go" },
      {
        t: "p",
        text: "Hotels fill months ahead, so book early. Dress modestly for the family pujas. And spend an hour in Kumartuli, the potters' quarter, where the idols are made: in the days before the festival you can watch the last ones being painted. We plan private Durga Puja journeys to Kolkata on request.",
      },
    ],
    faqs: [
      { q: "When is Durga Puja 2026 in Kolkata?", a: "From about Saptami on 17–18 October to Bijoya Dashami on 21 October. Check a Bengali panjika for the exact days." },
      { q: "Which is the best day to see Durga Puja pandals?", a: "Shashthi or Saptami, before the Ashtami crowds. Late night and early morning are the calmest times on any day." },
      { q: "When is Sindoor Khela in 2026?", a: "On Bijoya Dashami, Wednesday 21 October 2026, before the idols are taken for immersion." },
      { q: "Is Durga Puja a UNESCO heritage?", a: "Yes. Durga Puja in Kolkata was added to UNESCO's Representative List of the Intangible Cultural Heritage of Humanity in 2021." },
    ],
    sources: [
      { name: "Hindutone: Durga Puja 2026 dates in Kolkata", url: "https://hindutone.com/festivals/durga-puja-2026-dates-kolkata-mahalaya-to-sindoor-khela/" },
      { name: "Publicholidays.in: Durga Puja 2026", url: "https://publicholidays.in/durga-puja/" },
      { name: "UNESCO: Durga Puja in Kolkata", url: "https://ich.unesco.org/en/RL/durga-puja-in-kolkata-01503" },
    ],
  },

  {
    slug: "kyoto-autumn-leaves-guide",
    published: "2026-10-17",
    title: "Kyoto's autumn leaves: when they peak and where to see them",
    seo: {
      title: "Kyoto Autumn Leaves 2026: Peak Dates & Best Spots",
      description:
        "Kyoto's autumn colour peaks from late November into early December. The 2026 forecast, the best temples for maples and how to see them without the crowds.",
      keywords: ["Kyoto autumn leaves 2026", "Kyoto momiji", "Kyoto koyo forecast", "Tofukuji autumn", "Eikando illumination"],
    },
    answer:
      "Kyoto's autumn leaves usually peak from late November to early December. The first 2026 forecast puts yellow ginkgo at its best around 27 November and red maples around 11 December, later than average. Tofuku-ji, Eikan-do and Arashiyama are the classic places to see them; go at opening time on a weekday, and check each temple's site for evening illuminations.",
    excerpt: "For a few weeks each year, Kyoto's temple gardens turn red and gold. Here is when to go, and how to see them before the crowds arrive.",
    category: "Guides",
    region: "World",
    place: "Kyoto",
    destination: "kyoto",
    tours: ["temples-of-kyoto", "the-craft-of-kyoto"],
    image: "/images/destinations/kyoto.jpg",
    imageAlt: "A temple in Kyoto",
    facts: [
      { k: "Usual peak", v: "Late November to early December" },
      { k: "2026 forecast", v: "Ginkgo ~27 Nov, maples ~11 Dec" },
      { k: "Classic spots", v: "Tofuku-ji, Eikan-do, Arashiyama" },
      { k: "Beat the crowds", v: "Arrive at opening, on a weekday" },
    ],
    body: [
      { t: "h", text: "When do Kyoto's leaves turn?" },
      {
        t: "p",
        text: "The Japanese call it koyo, the turning of the leaves, and in Kyoto it usually runs from mid-November, when the hills begin to change, to the first week of December, when the city's maples are at their deepest red. The exact timing depends on the cold. The first forecast for 2026 from the Japan Meteorological Corporation expects a late season, with Kyoto's ginkgo at its best around 27 November and its maples around 11 December. Forecasts are updated through the autumn, so check again before you book.",
      },
      { t: "h", text: "Where to see them" },
      {
        t: "p",
        text: "Tofuku-ji in the south-east of the city is famous for the Tsutenkyo, a wooden covered bridge over a valley filled with some 2,000 maples. Eikan-do, at the foot of the eastern hills, is known as the temple of maples and opens in the evening during the season for illuminations. In the west, Arashiyama combines bamboo, temples and the hills along the Hozu river, and in the north the moss and maples of temples around Ohara and Takao are quieter.",
      },
      {
        t: "quote",
        text: "In Kyoto the leaves are a pilgrimage. Arrive before the gates open.",
      },
      { t: "h", text: "How to avoid the crowds" },
      {
        t: "p",
        text: "Autumn is Kyoto's busiest season, and the famous temples are crowded by mid-morning. Be at the gate when it opens, choose weekdays, and visit the best-known places first, leaving smaller temples for the afternoon. Many temples charge a separate seasonal fee for special gardens or illuminations, and evening entry is often by timed ticket.",
      },
      { t: "h", text: "How to see them respectfully" },
      {
        t: "p",
        text: "Stay on the paths, never shake branches or pick leaves, and keep tripods out of busy temple grounds unless they are allowed. Temples are places of worship first: walk quietly, and take off your shoes where asked.",
      },
      { t: "h", text: "Planning a trip" },
      {
        t: "p",
        text: "Hotels in Kyoto fill early for late November, and prices rise; book months ahead, or stay in Osaka and travel in by train. Combine the leaves with Nara, an hour away, whose temples and deer park also glow in autumn. We plan private journeys to Kyoto and Nara on request.",
      },
    ],
    faqs: [
      { q: "When is the best time to see autumn leaves in Kyoto?", a: "Usually from late November to early December. The 2026 forecast expects a late season, with maples at their best around 11 December." },
      { q: "Where is the best place to see autumn leaves in Kyoto?", a: "Tofuku-ji and its Tsutenkyo bridge, Eikan-do with its evening illuminations, and Arashiyama are the classics; Ohara and Takao are quieter." },
      { q: "How do I avoid the crowds in Kyoto in autumn?", a: "Arrive when temples open, travel on weekdays, and see the most famous places first thing in the morning." },
    ],
    sources: [
      { name: "Nippon.com: Japan's autumn foliage forecast 2026", url: "https://www.nippon.com/en/japan-data/h02888/japan%E2%80%99s-autumn-foliage-forecast-2026-peak-times-for-red-and-yellow-leaves.html" },
      { name: "Time Out Tokyo: first official 2026 forecast", url: "https://www.timeout.com/tokyo/news/heres-the-first-official-2026-forecast-for-autumn-leaves-in-japan-090426" },
      { name: "Watabi: Kyoto autumn foliage guide", url: "https://watabi.org/en/articles/kyoto-autumn-foliage-guide" },
    ],
  },

  {
    slug: "manikarnika-ghat-what-to-know",
    published: "2026-10-18",
    title: "Manikarnika Ghat: what to know before you go",
    seo: {
      title: "Manikarnika Ghat Varanasi: Etiquette & What to Know",
      description:
        "Manikarnika is Varanasi's great cremation ghat, where fires burn day and night. Why it matters, how to watch respectfully, photography and the scams to avoid.",
      keywords: ["Manikarnika Ghat", "Manikarnika Ghat etiquette", "Varanasi cremation ghat", "Manikarnika photography", "Varanasi burning ghat"],
    },
    answer:
      "Manikarnika Ghat is Varanasi's main cremation ground, where pyres burn day and night. Hindus believe that to be cremated here brings moksha, release from rebirth. Visitors may watch quietly from a distance or from a boat, but should never photograph the dead or the mourners, should dress modestly, and should politely refuse anyone who asks for money for wood.",
    excerpt: "The fires of Manikarnika are the most moving sight in Varanasi. Here is what they mean, and how to be a respectful witness.",
    category: "Guides",
    region: "India",
    place: "Varanasi",
    destination: "kashi",
    tours: ["kashi-in-four-days", "banaras-unfiltered", "kashi-premium"],
    image: "/images/ghats-mono.jpg",
    imageAlt: "The ghats and temples of Varanasi from the river",
    facts: [
      { k: "What it is", v: "Varanasi's main cremation ghat" },
      { k: "Belief", v: "Cremation here brings moksha" },
      { k: "Photography", v: "Never of the dead or mourners" },
      { k: "Best way to see it", v: "Quietly, from a boat" },
    ],
    body: [
      { t: "h", text: "Why Manikarnika matters" },
      {
        t: "p",
        text: "Kashi has long been called the city where death is not feared, and Manikarnika is the reason. Hindus believe that to die in Kashi and be cremated here brings moksha, freedom from the cycle of rebirth, and families bring their dead from across India. The pyres burn day and night; tradition says the fire has not gone out for centuries.",
      },
      {
        t: "p",
        text: "The name comes from a legend that an earring, a manikarnika, fell here, from Shiva or from the goddess. Above the ghat is a small sacred tank, the Manikarnika Kund, said to have been dug by Vishnu at the beginning of time.",
      },
      { t: "h", text: "Who works at the ghat" },
      {
        t: "p",
        text: "The cremations are carried out by the Dom community, who have tended the fires of Manikarnika for generations. They keep the sacred flame from which the pyres are lit, build the pyres and manage the wood. Families bring the body down through the lanes on a bamboo stretcher, chanting, and dip it in the Ganga before it is placed on the pyre.",
      },
      {
        t: "quote",
        text: "You are a guest at the most private moment in a family's life. Watch as you would wish to be watched.",
      },
      { t: "h", text: "How to watch respectfully" },
      {
        t: "p",
        text: "It is acceptable to watch, quietly and at a distance. The best way for most visitors is from a boat on the river, which keeps you out of the way of the families and the work. On the ghat itself, stand aside, keep your voice low, dress modestly and do not touch anything. Women in grieving families traditionally stay away from the pyres, so you will see mostly men.",
      },
      { t: "h", text: "Can you take photographs?" },
      {
        t: "p",
        text: "Do not photograph or film the cremations, the bodies or the mourners. It is deeply hurtful to families, and many people at the ghat will stop you. A distant photograph of the riverfront from a boat is another matter; if in doubt, keep the camera down.",
      },
      { t: "h", text: "Scams to avoid" },
      {
        t: "p",
        text: "Visitors are often approached by men who offer to explain the ghat, lead them to a building above it and then ask for a large donation for wood for the poor or the dying. Politely decline. If you want to understand Manikarnika, go with a guide you trust, or simply sit in a boat and watch.",
      },
    ],
    faqs: [
      { q: "Can tourists visit Manikarnika Ghat?", a: "Yes, but quietly and at a distance. Watching from a boat on the river is the most respectful way for most visitors." },
      { q: "Is photography allowed at Manikarnika Ghat?", a: "Do not photograph the cremations, the dead or the mourners. It is hurtful to families and you will be stopped." },
      { q: "Why do people come to Manikarnika to be cremated?", a: "Hindus believe that cremation at Manikarnika in Kashi brings moksha, release from the cycle of rebirth." },
      { q: "Should I give money for wood at Manikarnika?", a: "Politely decline anyone who approaches you for a wood donation. It is a well-known scam aimed at visitors." },
    ],
    sources: [
      { name: "Lonely Planet: Manikarnika Ghat", url: "https://www.lonelyplanet.com/pois/1321849" },
      { name: "Wikipedia: Manikarnika Ghat", url: "https://en.wikipedia.org/wiki/Manikarnika_Ghat" },
    ],
  },

  {
    slug: "loy-krathong-yi-peng-2026-guide",
    published: "2026-10-19",
    title: "Loy Krathong and Yi Peng 2026: dates and how to see them",
    seo: {
      title: "Loy Krathong & Yi Peng 2026: Dates & Where to Go",
      description:
        "Loy Krathong falls on the full moon of 24 November 2026, with Chiang Mai's Yi Peng lanterns on 24–25 November. What each festival is and how to see it well.",
      keywords: ["Loy Krathong 2026", "Yi Peng 2026", "Chiang Mai lantern festival", "Thailand festival November", "Loy Krathong date"],
    },
    answer:
      "Loy Krathong falls on the full moon of the twelfth Thai month: Tuesday 24 November 2026, though some listings give the 25th. People float krathongs, small boats of banana leaf, flowers and candles, on rivers and ponds across Thailand. In Chiang Mai, the Yi Peng festival of sky lanterns runs on 24–25 November 2026. Book Chiang Mai rooms and lantern events early.",
    excerpt: "On the November full moon, Thailand sets little boats of light on its rivers, and Chiang Mai fills its sky with lanterns.",
    category: "Festivals",
    region: "World",
    place: "Chiang Mai",
    destination: "thailand",
    tours: ["yi-peng-and-loy-krathong", "temples-of-chiang-mai", "ancient-capitals"],
    image: "/images/destinations/thailand.jpg",
    imageAlt: "A temple in Thailand",
    facts: [
      { k: "Loy Krathong", v: "Full moon, 24 November 2026" },
      { k: "Yi Peng (Chiang Mai)", v: "24–25 November 2026" },
      { k: "What you float", v: "A krathong of leaf, flowers and a candle" },
      { k: "Book", v: "Months ahead for Chiang Mai" },
    ],
    body: [
      { t: "h", text: "When are Loy Krathong and Yi Peng in 2026?" },
      {
        t: "p",
        text: "Loy Krathong is held on the full moon of the twelfth month of the Thai lunar calendar, which in 2026 falls on Tuesday 24 November; a few listings give the 25th, so confirm closer to the date. In Chiang Mai and the old Lanna kingdom of the north, Loy Krathong coincides with Yi Peng, the festival of sky lanterns, which is set for 24 and 25 November 2026.",
      },
      {
        t: "p",
        text: "The same full moon is Kartik Purnima in India, the night of Dev Deepawali in Varanasi, when every ghat is lit with lamps. Two of Asia's great festivals of light fall on the same night this year.",
      },
      { t: "h", text: "What happens at Loy Krathong" },
      {
        t: "p",
        text: "A krathong is a small float, traditionally made from a slice of banana trunk wrapped in banana leaf, decorated with flowers and carrying a candle and incense. After dark, people set them on rivers, canals and lakes to thank the water spirits and let go of misfortune, and many make a wish as theirs drifts away. Choose one made of natural materials, not foam.",
      },
      { t: "h", text: "What happens at Yi Peng" },
      {
        t: "p",
        text: "In Chiang Mai, the old city is hung with paper lanterns, temples are lit with candles, and on the festival nights thousands of khom loi, sky lanterns, are released. Releasing lanterns in the city is regulated and limited to set times and places, for safety and because of the airport, so join an organised event or a temple ceremony rather than releasing one anywhere.",
      },
      {
        t: "quote",
        text: "Float a krathong on the river, then look up. Chiang Mai does both on the same night.",
      },
      { t: "h", text: "How to plan the trip" },
      {
        t: "p",
        text: "This is one of the busiest weeks of the year in northern Thailand. Book flights and hotels in Chiang Mai months ahead, and book ticketed lantern events as soon as they are announced; many sell out. Sukhothai, the old capital, holds its own beautiful Loy Krathong among its ruins and is quieter. We plan private journeys to Thailand's ancient capitals and Chiang Mai on request.",
      },
    ],
    faqs: [
      { q: "When is Loy Krathong 2026?", a: "On the full moon of 24 November 2026, though some listings give the 25th. Confirm closer to the date." },
      { q: "When is the Chiang Mai lantern festival in 2026?", a: "Yi Peng is set for 24–25 November 2026, the same nights as Loy Krathong." },
      { q: "Can you release a sky lantern anywhere in Chiang Mai?", a: "No. Lantern releases are regulated and limited to set times and places; join an organised event or temple ceremony." },
    ],
    sources: [
      { name: "Two Wandering Soles: Loy Krathong & Yi Peng 2026", url: "https://www.twowanderingsoles.com/blog/thailand-lantern-festival-loy-krathong-yi-peng" },
      { name: "Umetravel: Thailand lantern festivals 2026", url: "https://www.umetravel.com/thailand/guide/history-culture_loy-krathong-festival/" },
    ],
  },

  {
    slug: "taj-mahal-tickets-timings-guide",
    published: "2026-10-20",
    title: "Taj Mahal: tickets, timings and the best time to visit",
    seo: {
      title: "Taj Mahal Tickets & Timings 2026: Complete Guide",
      description:
        "The Taj Mahal opens from sunrise to sunset and is closed on Fridays. Ticket prices, the mausoleum ticket, full-moon night viewing and the best time to go.",
      keywords: ["Taj Mahal tickets", "Taj Mahal timings", "Taj Mahal closed Friday", "Taj Mahal night viewing", "best time to visit Taj Mahal"],
    },
    answer:
      "The Taj Mahal opens from about sunrise to sunset every day except Friday, when it is closed. Foreign visitors pay about ₹1,100 plus ₹200 to enter the main mausoleum; Indian visitors pay much less, and children under 15 enter free. Night viewing is held on the full moon and two nights either side, with tickets booked online a day ahead. Go at sunrise.",
    excerpt: "The most famous building in India is best seen at first light. Here is what you need to know before you go.",
    category: "Guides",
    region: "India",
    place: "Agra",
    destination: "agra",
    tours: ["taj-at-first-light", "mughal-heartland", "marble-and-memory"],
    image: "/images/destinations/agra.jpg",
    imageAlt: "The Taj Mahal in Agra",
    facts: [
      { k: "Open", v: "Sunrise to sunset" },
      { k: "Closed", v: "Every Friday" },
      { k: "Foreign visitors", v: "About ₹1,100 + ₹200 mausoleum" },
      { k: "Best time", v: "Sunrise, October to March" },
    ],
    body: [
      { t: "h", text: "Opening hours and the Friday closure" },
      {
        t: "p",
        text: "The Taj Mahal is open from about 30 minutes before sunrise to 30 minutes before sunset. It is closed to visitors every Friday, when the mosque in the complex is used for prayers. Plan your Agra day around that, and check the Archaeological Survey of India's notices before you go, as hours shift slightly with the season.",
      },
      { t: "h", text: "Tickets" },
      {
        t: "p",
        text: "Foreign visitors pay about ₹1,100 for entry, and a further ₹200 for the main mausoleum, where the tombs of Mumtaz Mahal and Shah Jahan lie. Indian citizens and visitors from SAARC and BIMSTEC countries pay much lower fees, and children under 15 enter free. Buy tickets online through the official ASI site or at the counters; online tickets help you skip a queue. Prices change, so check the official site.",
      },
      { t: "h", text: "Night viewing on the full moon" },
      {
        t: "p",
        text: "On the night of the full moon and the two nights before and after, except Fridays and during Ramadan, the Taj Mahal opens for night viewing in small groups between about 8:30 PM and 12:30 AM. Numbers are limited, and tickets must be bought online at least a day ahead. You see the Taj from a platform rather than up close, but the white marble in moonlight is unforgettable.",
      },
      {
        t: "quote",
        text: "Be at the gate before sunrise. The marble changes colour every few minutes.",
      },
      { t: "h", text: "The best time to visit" },
      {
        t: "p",
        text: "Sunrise is best: the light is soft, the marble turns from grey to pink to white, and the crowds are thinnest. October to March brings the most comfortable weather; winter mornings can be foggy. Avoid weekends and Indian public holidays if you can.",
      },
      { t: "h", text: "What you can't take in" },
      {
        t: "p",
        text: "Large bags, food, tripods, drones and many electronic items are not allowed, and there are lockers near the gates. Carry little: your ticket, ID, water and a phone or camera. Shoe covers are given with the mausoleum ticket, or you remove your shoes before stepping on the marble platform.",
      },
      { t: "h", text: "Beyond the Taj" },
      {
        t: "p",
        text: "Give Agra a full day: Agra Fort, the tomb known as the Baby Taj, and the view of the Taj at sunset from Mehtab Bagh across the river. Fatehpur Sikri, Akbar's abandoned capital, is an hour away. We plan private journeys to Agra and the Mughal heartland on request.",
      },
    ],
    faqs: [
      { q: "Is the Taj Mahal open on Fridays?", a: "No. It is closed to visitors every Friday." },
      { q: "How much is the Taj Mahal ticket for foreigners?", a: "About ₹1,100, plus ₹200 to enter the main mausoleum. Check the official ASI site, as prices change." },
      { q: "Can you visit the Taj Mahal at night?", a: "Yes, on the full moon and two nights either side, except Fridays and Ramadan. Tickets are limited and booked online a day ahead." },
      { q: "What is the best time to visit the Taj Mahal?", a: "At sunrise, between October and March, on a weekday." },
    ],
    sources: [
      { name: "Archaeological Survey of India: online tickets", url: "https://asi.payumoney.com" },
      { name: "Tourscanner: Taj Mahal tickets and timings", url: "https://tourscanner.com/blog/taj-mahal-tickets-price-timings/" },
      { name: "Travel India Smart: Taj Mahal entrance fees", url: "https://www.travelindiasmart.com/taj_entrance_fee.php" },
    ],
  },

  {
    slug: "tihar-nepal-2026-guide",
    published: "2026-10-21",
    title: "Tihar in Nepal: the five days of the festival of lights",
    seo: {
      title: "Tihar 2026 in Nepal: Dates & the Five Days Explained",
      description:
        "Tihar, Nepal's festival of lights, runs about 7–11 November 2026. Crows, dogs, cows, the goddess Laxmi and brothers each have a day. How to see it in Kathmandu.",
      keywords: ["Tihar 2026", "Tihar festival Nepal", "Kukur Tihar", "Laxmi Puja Nepal 2026", "Bhai Tika 2026"],
    },
    answer:
      "Tihar, Nepal's five-day festival of lights, runs from about 7 to 11 November 2026. Each day honours someone: crows on Kaag Tihar, dogs on Kukur Tihar, cows and the goddess Laxmi on the third day, oxen and Govardhan on the fourth, and brothers on Bhai Tika. In Kathmandu, houses glow with oil lamps and groups sing deusi and bhailo door to door.",
    excerpt: "Nepal's Diwali lasts five days and honours crows, dogs, cows, the goddess of wealth and brothers in turn.",
    category: "Festivals",
    region: "World",
    place: "Kathmandu",
    destination: "nepal",
    tours: ["kathmandu-valley-heritage", "kashi-to-kathmandu"],
    image: "/images/destinations/nepal.jpg",
    imageAlt: "A temple in the Kathmandu Valley",
    facts: [
      { k: "2026 dates", v: "About 7–11 November" },
      { k: "Kukur Tihar", v: "Dogs are garlanded and fed" },
      { k: "Laxmi Puja", v: "About 8 November" },
      { k: "Last day", v: "Bhai Tika, for brothers" },
    ],
    body: [
      { t: "h", text: "When is Tihar in 2026?" },
      {
        t: "p",
        text: "Tihar follows the lunar calendar and falls at the same time as Diwali in India. In 2026 it runs from about Saturday 7 to Wednesday 11 November. Sources differ by a day on which festival falls on which day, and Nepal's official calendar sets the auspicious times, so check a Nepali patro before planning around a particular day.",
      },
      { t: "h", text: "The five days" },
      {
        t: "p",
        text: "On Kaag Tihar, crows, seen as messengers, are fed first thing in the morning. On Kukur Tihar, every dog, pet or stray, is garlanded with marigolds, given a red tika and fed well; it is the most photographed day of the festival. On the third day, cows are honoured in the morning, and in the evening families worship Laxmi, the goddess of wealth, and light lamps to guide her into their homes.",
      },
      {
        t: "p",
        text: "The fourth day honours oxen and, for many families, Govardhan; for the Newar community of the Kathmandu Valley it is also Mha Puja, worship of the self, and the start of their new year. On the fifth day, Bhai Tika, sisters give their brothers a tika of seven colours and garlands of makhamali flowers, and pray for their long life.",
      },
      {
        t: "quote",
        text: "In Kathmandu during Tihar, the dogs wear marigolds and the houses wear light.",
      },
      { t: "h", text: "Deusi and bhailo" },
      {
        t: "p",
        text: "In the evenings, groups of young people go from house to house singing bhailo and deusi songs, and are given food or money in return. In Kathmandu's old neighbourhoods, the lanes are lit with oil lamps and marigold garlands, and the squares around Durbar Square are lively until late.",
      },
      { t: "h", text: "How to see Tihar" },
      {
        t: "p",
        text: "Stay in or near the old city of Kathmandu or Patan, where the lamps and decorations are richest, and walk the lanes after dusk on Laxmi Puja. Ask before photographing rituals in homes. Many shops and offices close for part of the festival, and transport is busy as people travel home, so book ahead. We plan private journeys to the Kathmandu Valley on request, including from Varanasi.",
      },
    ],
    faqs: [
      { q: "When is Tihar in 2026?", a: "From about 7 to 11 November 2026, at the same time as Diwali in India. Check a Nepali patro for the exact days." },
      { q: "What is Kukur Tihar?", a: "The day of Tihar when dogs are honoured with marigold garlands, a red tika and a good meal." },
      { q: "Is Tihar the same as Diwali?", a: "They fall at the same time and both worship Laxmi with lamps, but Tihar lasts five days and honours crows, dogs, cows, oxen and brothers in turn." },
    ],
    sources: [
      { name: "Nepal Hiking Team: Tihar 2026", url: "https://www.nepalhikingteam.com/tihar-festival" },
      { name: "Best Heritage Tour: Kukur Tihar", url: "https://www.bestheritagetour.com/blog/kukur-tihar-celebration" },
      { name: "Office Holidays: Laxmi Puja in Nepal 2026", url: "https://www.officeholidays.com/holidays/nepal/laxmi-puja" },
    ],
  },

  {
    slug: "varanasi-sunrise-boat-ride-guide",
    published: "2026-10-22",
    title: "A sunrise boat ride in Varanasi: routes, prices and tips",
    seo: {
      title: "Varanasi Sunrise Boat Ride: Route, Price & Tips",
      description:
        "A sunrise boat ride is the essential Varanasi experience. When to go, the route past the ghats, what rowing and private boats cost, and how to choose a boat.",
      keywords: ["Varanasi sunrise boat ride", "Varanasi boat ride price", "Ganga boat ride Varanasi", "morning boat ride Varanasi", "Varanasi ghats by boat"],
    },
    answer:
      "Take the boat about half an hour before sunrise, from Assi or Dashashwamedh, and drift past the ghats as the city bathes and prays. A private rowing boat costs roughly ₹400 an hour, shared seats less and motor boats more; agree the price, route and time before boarding. Allow 60 to 90 minutes, and wear a warm layer in winter.",
    excerpt: "If you do one thing in Varanasi, take a boat on the Ganga at dawn. Here is how to do it well.",
    category: "Guides",
    region: "India",
    place: "Varanasi",
    destination: "kashi",
    tours: ["kashi-in-four-days", "banaras-unfiltered", "kashi-premium"],
    image: "/images/sunrise-boats.jpg",
    imageAlt: "Boats on the Ganga at sunrise in Varanasi",
    facts: [
      { k: "When", v: "About 30 minutes before sunrise" },
      { k: "Where from", v: "Assi or Dashashwamedh" },
      { k: "Private rowing boat", v: "Roughly ₹400 an hour" },
      { k: "How long", v: "60–90 minutes" },
    ],
    body: [
      { t: "h", text: "Why go at sunrise" },
      {
        t: "p",
        text: "The ghats of Varanasi face east, across the river, so the sun rises straight onto them. At dawn the city comes down to the water: people bathe and pray, priests chant, wrestlers train and the light turns the old palaces gold. Seen from the river, it is the clearest picture of how Kashi lives.",
      },
      { t: "h", text: "The route" },
      {
        t: "p",
        text: "Most morning boats leave from Assi Ghat in the south or Dashashwamedh in the middle of the riverfront. From Assi, you drift north past Tulsi, Chet Singh and the painted ghats to Dashashwamedh, and on to Manikarnika, the cremation ghat; from Dashashwamedh you can go either way. A longer ride continues north to Panchaganga. Tell the boatman what you want to see before you set off.",
      },
      {
        t: "quote",
        text: "Ask the boatman to stop rowing for a minute at Manikarnika. Let the river carry you past.",
      },
      { t: "h", text: "What it costs" },
      {
        t: "p",
        text: "Prices are agreed on the spot and rise in the festival season. As a rough guide, a private rowing boat costs about ₹400 an hour, a seat on a shared boat less, and a private motor boat several times more. Agree the price, the route and the length of the ride before you step aboard, and pay at the end.",
      },
      { t: "h", text: "Rowing boat or motor boat?" },
      {
        t: "p",
        text: "A wooden rowing boat is quiet and slow, which suits the hour; you hear the bells and the chanting instead of an engine. A motor boat covers more of the riverfront in less time and is useful for larger groups or a longer route. Whichever you choose, ask for life jackets.",
      },
      { t: "h", text: "Tips" },
      {
        t: "p",
        text: "Check the sunrise time the night before and be at the ghat half an hour early. In December and January, take a warm jacket and expect fog, which is beautiful in its own way. Do not photograph the cremations at Manikarnika. Float a diya if you like, and keep the river clean: take any plastic back with you. During the monsoon, from about July to September, boats may be suspended when the river is high.",
      },
      { t: "h", text: "If you'd like it arranged" },
      {
        t: "p",
        text: "Every WanderMate journey in Varanasi includes a private boat at dawn with a companion who knows the stories of each ghat; on Kashi in Four Days you go out on the river twice.",
      },
    ],
    faqs: [
      { q: "How much does a boat ride cost in Varanasi?", a: "Roughly ₹400 an hour for a private rowing boat, less for a shared seat and more for a motor boat. Agree the price before boarding." },
      { q: "What time should I take a sunrise boat in Varanasi?", a: "About 30 minutes before sunrise, so you are on the water as the light comes up. Check the sunrise time the night before." },
      { q: "Where do sunrise boats leave from in Varanasi?", a: "Most leave from Assi Ghat or Dashashwamedh Ghat." },
      { q: "Can you take a boat ride in Varanasi during the monsoon?", a: "Often not. When the Ganga is high, usually July to September, boat services may be suspended." },
    ],
    sources: [
      { name: "GoWithGuide: Varanasi ghat tour costs", url: "https://gowithguide.com/blog/varanasi-ghat-tour-guide-sunrise-boat-river-walk-aarti-costs-itinerary-6238" },
      { name: "Adventurous Miriam: Why you should do a Varanasi boat ride", url: "https://adventurousmiriam.com/varanasi-boat-ride/" },
    ],
  },
  {
    slug: "angkor-wat-sunrise-tickets-guide",
    published: "2026-10-23",
    title: "Angkor Wat at sunrise: tickets, timings and what to wear",
    seo: {
      title: "Angkor Wat Sunrise Guide: Tickets, Times & Dress",
      description:
        "Angkor Wat opens at 5 AM for sunrise. What the Angkor Pass costs in 2026, the best spot by the reflecting pools, the dress code and the best months to go.",
      keywords: ["Angkor Wat sunrise", "Angkor Pass price 2026", "Angkor Wat tickets", "Angkor Wat dress code", "best time to visit Angkor Wat"],
    },
    answer:
      "Angkor Wat opens at 5 AM so visitors can watch the sun rise behind its towers from the reflecting pools by the western entrance. In 2026 the Angkor Pass costs US$37 for one day, US$62 for three days and US$72 for seven, sold only by Angkor Enterprise. Cover shoulders and knees, and visit from November to March, in the dry season.",
    excerpt: "The sun comes up behind five stone towers, and the pools in front catch it twice. Here is how to be there for it.",
    category: "Guides",
    region: "World",
    place: "Siem Reap",
    destination: "cambodia",
    tours: ["angkor-in-depth", "beyond-angkor", "angkor-and-phnom-penh"],
    image: "/images/destinations/cambodia.jpg",
    imageAlt: "The temples of Angkor in Cambodia",
    facts: [
      { k: "Opens for sunrise", v: "5 AM" },
      { k: "Angkor Pass 2026", v: "US$37 / 62 / 72 (1, 3, 7 days)" },
      { k: "Dress code", v: "Shoulders and knees covered" },
      { k: "Best months", v: "November to March" },
    ],
    body: [
      { t: "h", text: "Why sunrise at Angkor Wat" },
      {
        t: "p",
        text: "Angkor Wat, built in the early twelfth century for King Suryavarman II and dedicated to Vishnu, is the largest religious monument in the world. Unusually for a Khmer temple, it faces west, so at dawn the sun rises behind its five lotus-bud towers. Watching the sky change colour behind them, reflected in the pools in front, is the most famous moment in Cambodia.",
      },
      { t: "h", text: "Tickets: the Angkor Pass" },
      {
        t: "p",
        text: "You need an Angkor Pass for every temple in the park. In 2026 it costs US$37 for one day, US$62 for three days and US$72 for seven days, and children under 12 enter free with a passport. Passes are sold only by the government's Angkor Enterprise, at the official ticket centre in Siem Reap or online; your photograph is printed on the pass and checked at the temples, so do not buy from anyone else. Most guides say a three-day pass can be used on any three days within a week, but check the validity when you buy.",
      },
      { t: "h", text: "Opening times" },
      {
        t: "p",
        text: "Angkor Wat opens at 5 AM for sunrise and closes at about 6 PM; most other temples in the park open from about 7:30 AM. Sunrise itself falls between about 5:30 and 6:30 AM depending on the month. Buy your pass the afternoon before: a pass bought after about 5 PM is valid for that evening's sunset and the next day.",
      },
      {
        t: "quote",
        text: "Arrive in the dark. The best of sunrise at Angkor is the half hour before the sun.",
      },
      { t: "h", text: "Where to stand" },
      {
        t: "p",
        text: "Walk through the western entrance and along the causeway to the two pools in front of the temple. The pool on the left, in the north, is the classic view and the most crowded; the one on the right is quieter. Be there by about 4:45 AM to get a place at the water's edge, and bring a torch for the causeway. In November and December the pools may be covered with lotus.",
      },
      { t: "h", text: "What to wear" },
      {
        t: "p",
        text: "Angkor is a sacred site and the dress code is enforced: shoulders and knees must be covered, for men and women. Light, loose cotton is best, with good shoes for steep stone steps. The highest level of Angkor Wat, the Bakan, has its own rules and is sometimes closed on Buddhist holy days, so check on the day.",
      },
      { t: "h", text: "When to go" },
      {
        t: "p",
        text: "The dry season, from November to March, brings the clearest skies and the most comfortable heat. December and January are the busiest months; November and February balance good weather with fewer people. From April to May the heat is intense, and from June to October the rains bring green landscapes, fewer visitors and some cloudy dawns.",
      },
      { t: "h", text: "After sunrise" },
      {
        t: "p",
        text: "Most visitors leave Angkor Wat for breakfast right after sunrise; stay instead, and you will have its galleries and their bas-reliefs of the Ramayana and the Churning of the Ocean of Milk almost to yourself. Then go on to the faces of the Bayon and the trees of Ta Prohm. We plan private journeys to Angkor on request, and our story on the epics carved in its stone is a good read before you go.",
      },
    ],
    faqs: [
      { q: "What time does Angkor Wat open for sunrise?", a: "At 5 AM. Arrive by about 4:45 AM for a place at the reflecting pools." },
      { q: "How much is the Angkor Pass in 2026?", a: "US$37 for one day, US$62 for three days and US$72 for seven days. Buy it only from Angkor Enterprise." },
      { q: "What is the dress code at Angkor Wat?", a: "Shoulders and knees must be covered, for men and women. It is enforced at the temples." },
      { q: "When is the best time to visit Angkor Wat?", a: "November to March, the dry season. November and February are less crowded than December and January." },
    ],
    sources: [
      { name: "Angkor Enterprise: official Angkor Pass", url: "https://www.angkorenterprise.gov.kh" },
      { name: "Hello Angkor: Angkor ticket prices 2026", url: "https://helloangkor.com/angkor-ticket-prices/" },
      { name: "Adventures Cambodia: Angkor Wat tickets", url: "https://adventurescambodia.com/blog/angkor-wat-tickets/" },
      { name: "UNESCO: Angkor", url: "https://whc.unesco.org/en/list/668" },
    ],
  },
];
