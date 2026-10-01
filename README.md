# WanderMate

Website for **WanderMate**: cultural and heritage journeys through Varanasi (Kashi).
Content, photography and team details come from the original Wix site.

Built with Next.js 16 (App Router), Tailwind CSS v4, GSAP (ScrollTrigger, SplitText) and
Motion. The visual direction is referenced from Black Tomato and derived from the
`ui-ux-pro-max` skill; see `design-system/wandermate/MASTER.md`. Two components come
from [21st.dev](https://21st.dev): the Scroll Gallery ("One day in Kashi") and the
Marquee (reviews).

## Pages

| Route | What it is |
| --- | --- |
| `/` | Home: hero with a "feel × length" search, manifesto, feeling finder, horizontal journey rail, "One day in Kashi", cinematic experience list, how it works, reviews, team, journal |
| `/journeys`, `/journeys/[slug]` | Journeys (Banaras Unfiltered, Kashi Classic / Premium / In Private, Spiritual Triangle, Kashi & Ayodhya) |
| `/experiences` | Experiences ordered by hour of day |
| `/plan` | 5-step planner that sends a summary on WhatsApp (accepts `?feeling=`, `?nights=`, `?journey=`, `?experience=`) |
| `/journal`, `/journal/[slug]` | Journal |
| `/about` | Story, team, approach |

Old URLs (`/packages`, `/banaras-unfiltered`, `/enquire`) redirect to their new homes.

## Editing content

All copy lives in `src/lib/`:

- `content.ts`: contact details, feelings, experiences, reviews, team, hotels
- `journeys.ts`: journeys and sample itineraries
- `solo.ts`: Banaras Unfiltered itinerary, inclusions and **departure dates** (update these regularly)
- `journal.ts`: journal posts

Images are in `public/images/`.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

Set `NEXT_PUBLIC_SITE_URL` to the production domain when deploying. It is used for
the sitemap and social preview images.
