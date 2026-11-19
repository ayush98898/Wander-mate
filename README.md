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
| `/destinations`, `/destinations/[slug]` | 8 Indian regions and 5 international destinations (Nepal, Sri Lanka, Bhutan, Angkor, Java & Bali), each with 3–4 journeys and 2–3 experiences |
| `/journeys`, `/journeys/[slug]` | Every journey, grouped by destination; full pages for the Kashi journeys |
| `/experiences` | Experiences ordered by hour of day |
| `/plan` | 5-step planner that sends a summary on WhatsApp (accepts `?feeling=`, `?nights=`, `?journey=`, `?experience=`) |
| `/journal`, `/journal/[slug]` | Journal |
| `/about` | Story, team, approach |

Old URLs (`/packages`, `/banaras-unfiltered`, `/enquire`) redirect to their new homes.

## Editing content

All copy lives in `src/lib/`:

- `content.ts`: contact details, feelings, experiences, reviews, team, hotels
- `destinations.ts`: destinations, their journeys and experiences, featured journeys, festival calendar
- `journeys.ts`: full Kashi journey pages and sample itineraries
- `solo.ts`: Banaras Unfiltered itinerary, inclusions and **departure dates** (update these regularly)
- `journal.ts`: journal posts

Images are in `public/images/`. Destinations without our own photography show a designed plate
(the place name in its own script); add `image` to a destination or trip in `destinations.ts`
to replace it with a photo.

The business plan behind the catalogue is in `docs/BLUEPRINT.md`.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

Set `NEXT_PUBLIC_SITE_URL` to the production domain when deploying. It is used for
the sitemap and social preview images.
