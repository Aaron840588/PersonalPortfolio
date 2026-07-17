# Design system

The canonical design contract is `design.md`; the canonical implementation
tokens are in `tokens.css`. This file is the concise engineering reference.

## Direction

The portfolio is a warm, editorial working document. Hierarchy comes from
typography, whitespace, alignment, fine rules, and real project evidence.
Decoration never competes with the work.

## Color

- Paper: `oklch(95% 0.018 65)`
- Secondary paper: `oklch(91% 0.022 65)`
- Ink: `oklch(21% 0.018 35)`
- Secondary ink: `oklch(32% 0.020 35)`
- Muted text: `oklch(40% 0.020 35)`
- Rule: `oklch(77% 0.025 65)`
- Oxblood action: `oklch(39% 0.120 25)`

Accent is reserved for primary actions, focus, status marks, and fine
underlines. Status meaning always includes text.

## Typography

- Newsreader: display headings and project names, weight 400.
- IBM Plex Sans: body and interface copy, variable weight 425 with 600 for
  emphasis.
- IBM Plex Mono: dates, provenance, and compact technical metadata only.
  Screenshot captions stay in IBM Plex Sans so the outlier face remains rare.
- Body copy starts at 17px; supporting copy at 15px; metadata at 13px.
- Display text caps at 76px.
- Reading measure caps at 62ch.

No italic headings, decorative all-caps section system, or fourth font family.

## Layout

- Shell: `min(100%, 96rem)` with responsive named gutters.
- Mobile: one column and source-order reading flow.
- Desktop: asymmetric Split Studio features and Workbench case studies.
- 2048–2560px: preserve a centered 1536px editorial canvas; do not stretch
  paragraphs to the monitor edges.
- Project images remain visually dominant and use explicit intrinsic sizes.

Homepage projects use title → statement → screenshot → evidence in DOM order.
Desktop grid areas may alternate visually without changing that order.

## Interaction

- Controls are at least 46px high; coarse-pointer text actions receive the same
  minimum target.
- Focus uses a 2px high-contrast ring.
- Links remain identifiable through underlines or explicit action styling.
- Pressed states move by one pixel at most.
- Hover styles run only on hover-capable pointers.

## Motion and performance

- Content is fully visible at first paint.
- No universal reveal, scroll-progress listener, parallax, or idle animation.
- Only short color and pressed-state CSS transitions remain.
- Reduced motion disables smooth scrolling and collapses transition duration.
- The first homepage project image and first case-study image are preloaded as
  deterministic LCP candidates.
- Responsive image `sizes` values are capped at the maximum rendered canvas
  width to avoid oversized downloads on 1440p monitors.

## Project media

- Use only real, reviewed screenshots.
- Keep a thin rule and square geometry; do not add fake browser or device chrome.
- Preserve source aspect ratios and dimensions.
- Provide a full-size source link where small screens make details difficult to
  inspect.

## Route families

- Homepage: Split Studio
- Case studies: Workbench
- Résumé: Long Document
- Header: N9 edge-aligned minimal
- Footer: Ft6 letter close

## Prohibited effects

No gradients, glassmorphism, glow, heavy shadows, large rounded cards,
decorative grids, floating nodes, 3D screenshots, autoplay, skill pills, or
generic dashboard compositions.
