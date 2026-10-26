import type { Post } from "@/lib/journal";

const guide: Post = {
  slug: "how-to-reach-varanasi",
  published: "2026-11-05",
  updated: "2026-10-26",
  title: "How to reach Varanasi: flights, trains, roads and the last mile to the ghats",
  seo: {
    title: "How to Reach Varanasi: Flights, Trains, Roads & Ghats",
    description:
      "How to reach Varanasi by air, rail and road: the airport and which station to choose, journey times from Delhi, Kolkata and Prayagraj, airport taxi fares and the last mile to the ghats.",
    keywords: ["how to reach Varanasi", "Varanasi airport to ghats", "Delhi to Varanasi train", "Varanasi railway station", "Varanasi by road"],
  },
  answer:
    "Varanasi's Lal Bahadur Shastri International Airport is about 26 km from the ghats, a drive of 45 to 90 minutes, with direct flights from most Indian cities. By rail, Varanasi Junction is the main station; the Vande Bharat from New Delhi takes about eight hours. By road, Prayagraj is about three hours away. Cars cannot enter the old city, so the last stretch to the ghats is on foot or by cycle-rickshaw.",
  takeaways: [
    "Airport about 26 km from the ghats",
    "Delhi to Varanasi: about 8 hours by Vande Bharat",
    "Train tickets open 60 days ahead",
    "Cars stop at Godowlia; walk the last stretch",
  ],
  excerpt:
    "Every road into Kashi ends at a barrier near Godowlia, where the cars stop and the lanes begin. How to get to Varanasi by air, rail and road, which of its stations to choose, what the airport taxi should cost, and how to manage the last mile with luggage.",
  category: "Guides",
  region: "India",
  place: "Varanasi",
  destination: "kashi",
  tours: ["kashi-in-four-days", "dev-deepawali-2026", "kashi-premium"],
  image: "/images/ghats-panorama.jpg",
  imageAlt: "The ghats of Varanasi stretching along the curve of the Ganga in hazy golden light, with small boats on the river",
  facts: [
    { k: "Airport", v: "Lal Bahadur Shastri (VNS)" },
    { k: "Airport to ghats", v: "About 26 km, 45–90 min" },
    { k: "Main station", v: "Varanasi Junction (BSB)" },
    { k: "Delhi by train", v: "About 8 hours (Vande Bharat)" },
    { k: "Train booking", v: "Opens 60 days ahead" },
  ],
  body: [
    {
      t: "p",
      text: "However you arrive in Varanasi, the journey ends the same way. The taxi slows in a tide of rickshaws, cows and scooters near Godowlia crossing, the driver points ahead, and you step out into the noise with your bags. From here the city narrows into lanes too tight for any car, and the river is a ten-minute walk away, down steps worn smooth by pilgrims for longer than anyone can say.",
    },
    {
      t: "p",
      text: "Getting to **Varanasi** has never been easier: an international airport, a station served by some of India's fastest trains, and expressways that have cut road times sharply. But the city has several stations, the airport is a long way out, and the old town around the ghats is closed to traffic. This guide explains how to reach Kashi by air, rail and road, which station to choose, what you should pay, and how to manage the last mile, especially during the great festivals.",
    },
    { t: "h", text: "By air" },
    {
      t: "p",
      text: "**Lal Bahadur Shastri International Airport** (VNS), at Babatpur, is about **26 kilometres** north-west of the ghats. It has direct flights from Delhi, Mumbai, Bengaluru, Kolkata, Hyderabad, Chennai and other Indian cities, and a small number of international routes, mainly to the Gulf. For most travellers from abroad, the simplest route is via Delhi or Mumbai.",
    },
    {
      t: "table",
      caption: "Flight times to Varanasi",
      head: ["From", "Flight time", "Notes"],
      rows: [
        ["Delhi", "About 1 hr 20 min", "Many flights a day; the busiest route"],
        ["Mumbai", "About 2 hr 15 min", "Several daily non-stops"],
        ["Bengaluru", "About 2 hr 30 min", "Daily non-stops"],
        ["Kolkata", "About 1 hr 15 min", "Daily non-stops"],
        ["Hyderabad, Chennai", "About 2 hr to 2 hr 30 min", "Non-stop or via Delhi"],
      ],
      note: "Approximate block times; schedules change with each season, so check with the airlines.",
    },
    {
      t: "p",
      text: "From the airport, the drive to the ghats takes **45 to 90 minutes**, depending on traffic through the city. Use the **prepaid taxi counter** in the arrivals hall or an app cab; a sedan to the Godowlia area costs roughly **₹800 to ₹1,300**, with a surcharge late at night. App cabs work but can involve a wait at busy times.",
    },
    { t: "h", text: "By train" },
    {
      t: "p",
      text: "Varanasi is one of the best-connected cities on Indian Railways, but it has several stations, and choosing the right one saves time.",
    },
    {
      t: "table",
      caption: "Varanasi's railway stations",
      head: ["Station", "Code", "Distance to the ghats", "Use it for"],
      rows: [
        ["Varanasi Junction (Cantt)", "BSB", "About 5–6 km", "The main station; Vande Bharat and most express trains"],
        ["Banaras (formerly Manduadih)", "BSBS", "About 4–7 km", "Many trains from the west and south; modern station"],
        ["Pt. Deen Dayal Upadhyaya Jn (Mughalsarai)", "DDU", "About 17 km", "Trains from Kolkata and the east that bypass the city"],
        ["Varanasi City and Kashi", "BCY, KEI", "Within the city", "A handful of local and regional trains"],
      ],
      note: "Distances are approximate road distances to the Dashashwamedh area. Allow extra time from DDU, which is across the river.",
    },
    {
      t: "h3",
      text: "From Delhi",
    },
    {
      t: "p",
      text: "The **Vande Bharat Express** from New Delhi takes about **eight hours**, by day, with chair-car seating; it stops at Kanpur and Prayagraj. Several overnight trains take 10 to 13 hours, which saves a night's hotel. A sleeper Vande Bharat on the Delhi–Varanasi route has been reported for late 2026; check the railway's announcements before relying on it.",
    },
    {
      t: "h3",
      text: "From Kolkata and the east",
    },
    {
      t: "p",
      text: "Overnight trains from Howrah or Sealdah take roughly **10 to 14 hours**; many arrive at DDU rather than Varanasi Junction, so check which station your train uses. From Gaya, for [Bodh Gaya](/journal/bodh-gaya-mahabodhi-temple-guide), trains take about 3.5 to 5 hours.",
    },
    {
      t: "tip",
      kind: "know",
      title: "Book 60 days ahead",
      text: "Indian Railways opens reservations **60 days** before the date of travel. For trains around Diwali, Dev Deepawali, Holi and the winter holidays, the good classes on popular trains can fill on the first morning. Book as soon as the window opens, through the IRCTC website or app.",
    },
    { t: "h", text: "By road" },
    {
      t: "table",
      caption: "Road distances to Varanasi",
      head: ["From", "Distance", "Typical drive"],
      rows: [
        ["Prayagraj", "About 120 km", "About 3 hours"],
        ["Ayodhya", "About 200 km", "About 4 hours"],
        ["Bodh Gaya", "About 250 km", "5 to 6 hours"],
        ["Lucknow", "About 320 km", "5 to 6 hours"],
        ["Khajuraho", "About 400 km", "8 to 9 hours"],
        ["Delhi", "About 820 km", "12 to 14 hours via the expressways"],
      ],
      note: "Times depend heavily on traffic at the edges of each city. Night driving on highways is best avoided.",
    },
    {
      t: "p",
      text: "Road travel makes most sense for the circuits around Varanasi: Prayagraj and the Sangam, Ayodhya, Bodh Gaya and Sarnath. A private car with a driver is the comfortable way; Uttar Pradesh state buses run to all these cities and are cheap, if slow.",
    },
    { t: "h", text: "The last mile: into the old city" },
    {
      t: "p",
      text: "The heart of Varanasi, the lanes around the ghats and the Kashi Vishwanath temple, is closed to cars and most autos. Taxis usually stop at or near **Godowlia crossing**, or at Assi for the southern ghats, and the rest is on foot, by cycle-rickshaw or by e-rickshaw where they are allowed. With luggage, this is the part that catches people out.",
    },
    {
      t: "img",
      src: "/images/packages/ganga-waterfront.jpg",
      alt: "Ahilyabai Ghat and the neighbouring ghats in Varanasi seen from a boat on the Ganga, with temples, umbrellas and moored boats along the steps",
      caption: "Ahilyabai Ghat and its neighbours near Dashashwamedh, seen from the river. Many riverside hotels can only be reached on foot through the lanes behind.",
    },
    {
      t: "list",
      ordered: true,
      items: [
        "**Ask your hotel exactly where the car can stop**, and whether someone will meet you there; most riverside guesthouses send a porter.",
        "**Pack light.** A backpack or a small case with good wheels is far easier on the lanes and ghat steps than a large suitcase.",
        "**Save the hotel on a map app** before you arrive; the lanes are a maze, and many addresses are given by the nearest ghat.",
        "**Consider arriving by boat.** For hotels right on the ghats, a short boat ride from Assi or Dashashwamedh can be the easiest way in.",
      ],
    },
    {
      t: "tip",
      kind: "local",
      text: "If your hotel is on the ghats and you arrive after dark, ask it to send someone to Godowlia or Dashashwamedh to walk you in. The lanes are safe, but at night they all look alike, and following someone who knows them is the best first introduction to Kashi.",
    },
    {
      t: "h3",
      text: "Getting around once you are there",
    },
    {
      t: "p",
      text: "Within the city, **e-rickshaws** and autos cover the roads, and app cabs reach most areas outside the old town. Along the river, the easiest way between distant ghats is often a boat. An urban **ropeway** from Varanasi Junction to Godowlia, with stops at Kashi Vidyapeeth and Rathyatra, is nearing completion; reports in autumn 2026 pointed to an opening around **24 November**, which would make the station-to-old-city trip a matter of minutes.",
    },
    { t: "h", text: "Arriving at festival time" },
    {
      t: "p",
      text: "On the biggest days, especially **Dev Deepawali** on **24 November 2026**, roads into the ghat area are closed from the afternoon, flights and trains are full, and taxi fares rise. Arrive at least a day early, ideally in the morning, and plan to stay put on the festival evening. Our [Dev Deepawali 2026 guide](/journal/dev-deepawali-2026-varanasi-guide) explains the day, and our [Dev Deepawali journey](/packages/dev-deepawali-2026) includes pickup from the airport or station and every transfer.",
    },
    {
      t: "quote",
      text: "In Kashi, the journey is not over when the car stops. It is over when you reach the river.",
    },
    {
      t: "tip",
      kind: "avoid",
      title: "Touts at the station and airport",
      text: "Drivers and touts may tell you your hotel has closed, burned down or moved, and offer to take you somewhere 'better'. It is almost never true. Use the prepaid counter or an app cab, and call your hotel if in doubt.",
    },
    { t: "h", text: "Planning the rest of your trip" },
    {
      t: "p",
      text: "Once you know how you are arriving, read our guides to [how many days to spend in Varanasi](/journal/how-many-days-in-varanasi) and [the best time to visit](/journal/best-time-to-visit-varanasi). Our [Kashi in Four Days](/packages/kashi-in-four-days) journey includes pickup and drop at the airport or station and an AC cab for all four days, so the last mile is ours to worry about. See all our journeys in [Kashi](/destinations/kashi).",
    },
  ],
  faqs: [
    { q: "How far is Varanasi airport from the ghats?", a: "About 26 km. The drive takes 45 to 90 minutes depending on traffic, and a prepaid or app taxi costs roughly ₹800 to ₹1,300 to the Godowlia area." },
    { q: "Which railway station is best for Varanasi?", a: "Varanasi Junction (BSB, also called Cantt) is the main station and closest for most hotels. Banaras station (formerly Manduadih) is also convenient. Pt. Deen Dayal Upadhyaya Junction (Mughalsarai) is about 17 km away across the river." },
    { q: "How long is the train from Delhi to Varanasi?", a: "About eight hours on the Vande Bharat Express, by day. Overnight trains take about 10 to 13 hours." },
    { q: "Can cars go to the ghats in Varanasi?", a: "No. Cars stop near Godowlia crossing or at Assi, and the lanes around the ghats are walked, or covered by cycle-rickshaw. Ask your hotel where to stop and whether it can send a porter." },
    { q: "How early should I book trains to Varanasi?", a: "Reservations open 60 days before travel. For festival dates such as Diwali and Dev Deepawali, book on the day the window opens." },
  ],
  sources: [
    { name: "Airports Authority of India: Varanasi airport", url: "https://www.aai.aero/en/airports/varanasi" },
    { name: "IRCTC: train reservations", url: "https://www.irctc.co.in/" },
    { name: "Wikipedia: Kashi ropeway", url: "https://en.wikipedia.org/wiki/Kashi_ropeway" },
    { name: "Shri Kashi Vishwanath Temple Trust: general information", url: "https://shrikashivishwanath.org/general/information" },
  ],
};

export default guide;
