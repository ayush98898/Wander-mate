// Travel journal entries from the original site.

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "guide-to-luxury-travel-in-varanasi",
    title: "WanderMate Varanasi: Our Guide to Luxury Travel",
    excerpt:
      "We create bespoke luxury experiences for those who seek more than just the iconic sights of the oldest living city in the world.",
    image: "/images/priest-river.jpg",
    readTime: "3 min read",
    body: [
      "We create bespoke luxury experiences for those who seek more than just the iconic sights of the oldest living city in the world.",
      "In Varanasi, luxury isn't just about the thread count of your linens; it's about the exclusivity of your access and the depth of your connection.",
      "For some, luxury is the profound silence of a private sunrise boat journey on the Ganges, watching the city wake up from the middle of the river while the crowds remain on the shore.",
      "For others, it's the sensory indulgence of a private Satvik feast prepared by a master chef on a secluded rooftop, overlooking the flickering lamps of the evening Aarti.",
    ],
  },
  {
    slug: "the-pursuit-of-feeling",
    title: "The Pursuit of Feeling: WanderMate Varanasi",
    excerpt:
      "Travel has always been about more than just checking a destination off a list. In a city as visceral and ancient as Varanasi, travel is about feeling somewhere else.",
    image: "/images/ghat-temple.jpg",
    readTime: "2 min read",
    body: [
      "Travel has always been about more than just checking a destination off a list.",
      "In a city as visceral and ancient as Varanasi, travel — breathless, beautiful, and raw — is about feeling somewhere else. It is an emotional high, a spiritual resonance that stays with you for the rest of your life.",
    ],
  },
  {
    slug: "what-we-do-and-why",
    title: "What we do and why we do it",
    excerpt:
      "Since our founding, WanderMate has been dedicated to one singular mission: crafting remarkable, tailor-made journeys through the heart of Varanasi.",
    image: "/images/boats-above.jpg",
    readTime: "2 min read",
    body: [
      "Since our founding, WanderMate has been dedicated to one singular mission: crafting remarkable, tailor-made journeys through the heart of Varanasi for families, couples, and private groups from across the globe.",
      "WanderMate was built on a shared passion for exploration and a deep appreciation for the rich heritage of Varanasi. Our team bridges the gap between traditional local knowledge and modern convenience.",
      "We understand that travelling is more than just visiting a destination; it's about immersing yourself in the stories, the culture, and the energy of the city.",
    ],
  },
];
