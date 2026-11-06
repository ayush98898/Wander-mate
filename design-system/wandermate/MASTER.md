# WanderMate — Design System (v2)

Source of truth for the site's visual language. Reference: Black Tomato
(cinematic, feeling-led luxury travel). Decisions were derived from the
`ui-ux-pro-max` skill database and adapted for a heritage & culture brand.

## Derivation (ui-ux-pro-max)

| Concern | Query / domain | Result used |
| --- | --- | --- |
| Page pattern | `storytelling immersive travel` · landing | **Scroll-Triggered Storytelling** + **Horizontal Scroll Journey** — chapters with distinct colour, CTA at end of chapters, full reading order kept under reduced motion |
| Style | `editorial luxury minimal magazine` · style | **Minimalism & Swiss** — grid-based, 0 radius, no shadows, one accent, high contrast |
| Colour | `luxury travel hotel` · color | **Hospitality navy + gold** → accent `#A16207` (contrast-adjusted gold). Navy swapped for warm ink to suit heritage |
| Type | `luxury editorial travel elegant` · typography | **Minimalist Monochrome Editorial** triple stack (display serif · body · mono labels). Generic Playfair/Inter replaced with less common faces from the `google-fonts` domain |
| Motion | `text reveal split headline`, `horizontal scroll pin gallery` · gsap | SplitText chars `expo.out` stagger 0.015 for short headlines; subtle scroll reveal `y:12, 0.35s`; scrub-pinned sections ≤ 2 per page |

## Tokens

| Token | Value | Use |
| --- | --- | --- |
| `ink` | `#100E0B` | Text, dark chapters |
| `bone` | `#F2EEE6` | Page background |
| `paper` | `#FAF8F3` | Raised surfaces |
| `stone` | `#D9D1C2` | Hairlines, muted fills |
| `smoke` | `#6A6358` | Secondary text (5.3:1 on bone) |
| `ochre` | `#A16207` | Single accent on light |
| `ochre-lit` | `#D9A441` | Accent on dark |
| `river` | `#16211F` | Storytelling chapter colour |

Radius **0** everywhere (buttons are rectangles, images are full-bleed).
Shadows: none. Borders: 1px hairlines at `ink/12`.

## Typography

- **Display — Instrument Serif** (400, italic). Heroes 9–14vw, `leading-[0.88]`, `tracking-[-0.02em]`. Italic used for the emotional word in each headline.
- **UI / body — Host Grotesk** (300–600). 16–18px body, line-height 1.6.
- **Labels — JetBrains Mono** 11–12px, uppercase, `tracking-[0.18em]` for tags, durations, dates, coordinates.

## Motion

- Headline reveal: GSAP SplitText (lines/words), `expo.out`, 0.9s.
- Section reveal: opacity + 12–16px rise, 0.6s, once.
- Pins: home uses two — the horizontal journey track and the "one day in Kashi" scroll gallery.
- `prefers-reduced-motion`: all splits/pins disabled; horizontal track becomes a native scroll row.

## Components

Menu overlay · Split headline · Feeling finder · Journey track (horizontal pin) ·
Cinematic list (hover-reveal full-bleed rows) · Scroll Gallery (21st.dev) ·
Marquee reviews (21st.dev) · Multi-step planner.
