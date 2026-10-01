# WanderMate

Website for **WanderMate**: cultural and heritage journeys through Varanasi (Kashi).
Content, photography and team details come from the original Wix site.

Built with Next.js 16 (App Router), Tailwind CSS v4, Motion and GSAP, plus two
components from [21st.dev](https://21st.dev): a scroll-pinned image gallery and an
accessible marquee.

## Pages

| Route | What it is |
| --- | --- |
| `/` | Home: hero, Why Kashi, Solo Series feature, pinned experiences gallery, packages, why us, reviews, team, journal |
| `/packages` | Classic / Premium / Luxury tiers, a duration grid (1N2D to 6N7D) and pilgrim circuits (Spiritual Triangle) |
| `/banaras-unfiltered` | The 2N/3D solo small-group weekend: itinerary, stays, inclusions, departures, booking |
| `/experiences` | Signature experiences (Aarti, sunrise boat, silk walk, food walk and more) |
| `/plan` | Trip builder: pick a style, days, people and experiences, then send the plan on WhatsApp |
| `/enquire` | Enquiry form (same fields as the Wix form); submits via WhatsApp |
| `/journal`, `/journal/[slug]` | Travel journal |
| `/about` | Story and team |

## Editing content

All copy lives in `src/lib/`:

- `content.ts`: contact details, nav, packages, experiences, reviews, team, hotels
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
