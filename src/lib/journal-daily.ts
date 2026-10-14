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
import g_best_time_to_visit_varanasi from "@/content/guides/best-time-to-visit-varanasi";
import g_dev_deepawali_2026_varanasi_guide from "@/content/guides/dev-deepawali-2026-varanasi-guide";
import g_durga_puja_kolkata_2026_guide from "@/content/guides/durga-puja-kolkata-2026-guide";
import g_ganga_aarti_timings_varanasi from "@/content/guides/ganga-aarti-timings-varanasi";
import g_how_many_days_in_varanasi from "@/content/guides/how-many-days-in-varanasi";
import g_kashi_vishwanath_darshan_guide from "@/content/guides/kashi-vishwanath-darshan-guide";
import g_kyoto_autumn_leaves_guide from "@/content/guides/kyoto-autumn-leaves-guide";
import g_manikarnika_ghat_what_to_know from "@/content/guides/manikarnika-ghat-what-to-know";
import g_sarnath_from_varanasi from "@/content/guides/sarnath-from-varanasi";
import g_varanasi_street_food_guide from "@/content/guides/varanasi-street-food-guide";

export const dailyPosts: Post[] = [
  g_best_time_to_visit_varanasi, g_dev_deepawali_2026_varanasi_guide, g_durga_puja_kolkata_2026_guide, g_ganga_aarti_timings_varanasi, g_how_many_days_in_varanasi, g_kashi_vishwanath_darshan_guide, g_kyoto_autumn_leaves_guide, g_manikarnika_ghat_what_to_know, g_sarnath_from_varanasi, g_varanasi_street_food_guide,
  /* ---------------- Week of 9 October 2026 ---------------- */

  /* ---------------- Week of 16 October 2026 ---------------- */

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
  {
    slug: "pushkar-fair-2026-guide",
    published: "2026-10-24",
    title: "Pushkar Fair 2026: dates, the Kartik dip and how to visit",
    seo: {
      title: "Pushkar Fair 2026: Dates, Kartik Snan & Travel Tips",
      description:
        "Pushkar Fair 2026 runs about 17 to 24 November, ending with the holy dip on Kartik Purnima. When to go, the Brahma temple, etiquette and where to stand.",
      keywords: ["Pushkar Fair 2026", "Pushkar Camel Fair dates", "Pushkar Mela 2026", "Kartik Purnima Pushkar", "Brahma temple Pushkar"],
    },
    answer:
      "The Pushkar Fair in Rajasthan is expected to run from about 17 to 24 November 2026, ending on Kartik Purnima, Tuesday 24 November, when pilgrims bathe in Pushkar Lake. The camel and livestock trading comes in the first days; the holy dips build from Dev Uthani Ekadashi to the full moon. Confirm the official schedule with Rajasthan Tourism before you book.",
    excerpt: "A desert town of 52 ghats, the one great temple to Brahma, and in November, camels as far as you can see.",
    category: "Festivals",
    region: "India",
    place: "Pushkar",
    destination: "rajputana",
    image: "/images/destinations/rajputana.jpg",
    imageAlt: "The forts and palaces of Rajasthan",
    facts: [
      { k: "Fair 2026", v: "About 17 – 24 November" },
      { k: "Kartik Purnima", v: "Tuesday 24 November 2026" },
      { k: "Ghats on the lake", v: "52" },
      { k: "From Ajmer", v: "About 15 km" },
    ],
    body: [
      {
        t: "p",
        text: "For most of the year Pushkar is a small, quiet pilgrim town on the edge of the Thar, built around a lake. For a week or so in the Hindu month of Kartik it becomes one of the largest gatherings in India: herders arrive from across Rajasthan with their camels, horses and cattle, and pilgrims come to bathe in the lake on the full moon. The two halves of the fair, the market and the pilgrimage, run side by side, and the best visits make room for both.",
      },
      { t: "h", text: "Pushkar Fair 2026 dates" },
      {
        t: "p",
        text: "The fair follows the lunar calendar, so its dates move each year. In 2026 it is expected to run from about 17 to 24 November, with some listings extending it to the 25th. Kartik Purnima, the full moon that closes it, falls on Tuesday 24 November. The local administration and Rajasthan Tourism set the official programme each year, and they can move: in 2023 the fair was brought forward by almost a week because of state elections. Treat these dates as a guide and check before you book anything that cannot be changed.",
      },
      {
        t: "p",
        text: "The same full moon is Dev Deepawali in Varanasi, when the ghats of Kashi are lit with lamps. It is one night, celebrated in two holy towns a thousand kilometres apart.",
      },
      { t: "h", text: "The camel fair and the holy dip" },
      {
        t: "p",
        text: "The trading comes first. In the opening days the dunes west of town fill with camps, and the buying and selling of camels and livestock is at its height; this is when photographers come for the light on the sand. As the week goes on the trade thins out and the pilgrims arrive. The bathing season runs for five days from Dev Uthani Ekadashi to Kartik Purnima, when Brahma is said to have performed his yajna at Pushkar, and the dip on the full moon is held to be the most auspicious of all.",
      },
      {
        t: "quote",
        text: "Come early for the camels, stay late for the moon.",
      },
      { t: "h", text: "The lake and the Brahma temple" },
      {
        t: "p",
        text: "Pushkar Lake is ringed by 52 ghats, each with its own story. Legend says the lake formed where a lotus fell from Brahma's hand, and the town keeps one of the very few temples in India dedicated to him, the Jagatpita Brahma Mandir. The present building is usually dated to the fourteenth century, on a site much older. On the hills above stand the temples of Savitri, reached by a long climb of steps or by ropeway, and Gayatri; Savitri is best at sunrise, with the whole town below.",
      },
      { t: "h", text: "Etiquette on the ghats and in the temples" },
      {
        t: "p",
        text: "Shoes come off before the ghats and in the temples, and leather belts and bags are left outside the Brahma temple. Cover shoulders and knees. Photography is not allowed inside the sanctum, and many pilgrims would rather not be photographed while they bathe, so ask first. You may be offered flowers on the ghats and then asked for a large donation; politely decline unless you wish to give. Pushkar is a holy town, and meat, eggs and alcohol are not served.",
      },
      { t: "h", text: "Where to stay and how to get there" },
      {
        t: "p",
        text: "Pushkar is about 15 kilometres from Ajmer, which has the nearest major railway station, and around three hours by road from Jaipur, the nearest large airport. During the fair the town fills completely: hotels and the tented camps that spring up on its edge sell out months ahead and cost far more than usual. If you cannot find a room, staying in Ajmer and driving in each morning works well.",
      },
      { t: "h", text: "How to plan a visit" },
      {
        t: "p",
        text: "Three nights is enough to see both halves of the fair. Arrive in the first days for the camps and the trading, walk the ghats at dawn and at the evening aarti, and stay for the full moon if you want to see the pilgrimage at its height, accepting that it is the most crowded day. WanderMate plans private journeys to Rajasthan on request, and Pushkar can be added to a route through Jaipur, Jodhpur and Udaipur.",
      },
    ],
    faqs: [
      { q: "When is the Pushkar Fair in 2026?", a: "From about 17 to 24 November 2026, ending on Kartik Purnima, 24 November. Confirm the official programme with Rajasthan Tourism." },
      { q: "When is the best time to see the camels?", a: "The first few days of the fair, when the livestock trading is at its height. By the full moon most herders have left." },
      { q: "Why do pilgrims bathe in Pushkar Lake on Kartik Purnima?", a: "Brahma is said to have performed his yajna at Pushkar from Kartik Ekadashi to the full moon, so a dip on Kartik Purnima is held to be the most auspicious of the year." },
      { q: "How do I get to Pushkar?", a: "Take a train to Ajmer, about 15 km away, or fly to Jaipur and drive around three hours." },
    ],
    sources: [
      { name: "Incredible India: Pushkar Camel Fair", url: "https://incredibleindia.gov.in/en/festivals-and-events/pushkar-camel-fair" },
      { name: "Wikipedia: Pushkar Fair", url: "https://en.wikipedia.org/wiki/Pushkar_Fair" },
      { name: "Wikipedia: Pushkar", url: "https://en.wikipedia.org/wiki/Pushkar" },
      { name: "Hindutone: Pushkar Fair 2026", url: "https://hindutone.com/festivals/pushkar-fair-2026/" },
    ],
  },
];
