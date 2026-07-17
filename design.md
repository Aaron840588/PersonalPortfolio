# Design — Aaron Tagapan Portfolio

A locked design system for this app. Every page redesign reads this file before
emitting code. Do not regenerate per page—extend or amend it intentionally.

## Genre

Editorial. The portfolio should read like a considered working document: direct,
source-backed, quiet, and specific to Aaron’s operational systems work.
Copy must distinguish formal internship experience from AI-assisted personal
projects and must not position Aaron as a software engineer or developer.

## Macrostructure family

- Marketing pages: **Split Studio** — alternating claim and proof, with real project captures.
- App/product case studies: **Workbench** — compact masthead, guided screenshot tour, ruled ledgers.
- Content pages: **Long Document** — continuous reading rhythm and document-first actions.

## Theme

Catalog **Atelier**, adapted by explicit user approval for a technical portfolio:
Newsreader replaces the catalog display face while the warm-paper, graphite, and
restrained warm-accent discipline remains.

- `--color-paper` oklch(95% 0.018 65)
- `--color-paper-2` oklch(91% 0.022 65)
- `--color-ink` oklch(21% 0.018 35)
- `--color-ink-2` oklch(32% 0.020 35)
- `--color-muted` oklch(40% 0.020 35)
- `--color-rule` oklch(77% 0.025 65)
- `--color-accent` oklch(39% 0.120 25)
- `--color-focus` oklch(47% 0.180 25)
- Axes: light / roman-serif / warm

## Typography

- Display: Newsreader, variable weight 400, roman only.
- Body: IBM Plex Sans, variable weight 425 with 600 for emphasis.
- Mono/outlier: IBM Plex Mono, weights 400 and 500, metadata and captions only.
- Display tracking: -0.035em.
- Type scale anchors: `--text-base = 1.0625rem` and `--text-display = clamp(2.75rem, 7vw, 4.75rem)`.
- No italic headings, decorative all-caps sections, or fourth font family.

## Spacing

4-point named scale. `tokens.css` is canonical. Layout code uses named spacing
tokens; section rhythm deliberately varies instead of repeating one padded block.
The editorial shell caps at 96rem so 1440p displays use their width without
stretching reading measures beyond 62ch.

## Motion

- Stance: static-first.
- Content is fully visible at first paint; there are no scroll-triggered reveals.
- Motion is limited to short color and pressed-state transitions on controls.
- Reduced-motion collapses all nonessential transition duration.

## Microinteractions stance

- Silent success; no decorative toast or celebration.
- Hover states run only on hover-capable pointers.
- Focus appears instantly with a high-contrast ring.
- Pressed states move by one pixel at most.

## CTA voice

- Primary: compact graphite/oxblood fill, square geometry, short verb-led copy.
- Secondary: typographic link with a fine underline; never a second filled button.
- Every clickable label remains on one line.

## Navigation and footer

- Navigation: **N9 Edge-aligned minimal** — wordmark left, one contact action right.
- Footer: **Ft6 Direct close** — availability and contact first, with no faux-letter salutation or link columns.

## Per-page allowances

- Homepage may use the project screenshots as its only visual enrichment.
- Case studies use real screenshots without fabricated browser or device chrome.
- Résumé is typography and the real PDF only.

## What pages MUST share

- Wordmark, warm paper, graphite ink, and oxblood placement under 5% per viewport.
- Newsreader + IBM Plex pairing and the same typographic action language.
- Square, fine-rule geometry and visible focus treatment.
- N9 navigation and Ft6 closing voice.

## What pages MAY differ on

- Homepage alternates text and proof; case studies sequence screenshots; résumé reads as a document.
- Section spacing may change with content density.
- Only case studies may use an in-page sticky action rail, offset below the global header.

## Exports

`tokens.css` is the source of truth. The mappings below are portable copies.

### tokens.css

```css
:root {
  --color-paper: oklch(95% 0.018 65);
  --color-paper-2: oklch(91% 0.022 65);
  --color-paper-3: oklch(87% 0.024 65);
  --color-ink: oklch(21% 0.018 35);
  --color-ink-2: oklch(32% 0.020 35);
  --color-rule: oklch(77% 0.025 65);
  --color-accent: oklch(39% 0.120 25);
  --color-accent-ink: oklch(97% 0.015 65);
  --color-focus: oklch(47% 0.180 25);
  --font-display: "Newsreader", serif;
  --font-body: "IBM Plex Sans", sans-serif;
  --font-outlier: "IBM Plex Mono", monospace;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  --space-xl: 3rem;
  --text-base: 1.0625rem;
  --text-md: 1.3125rem;
  --text-display: clamp(2.75rem, 7vw, 4.75rem);
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --dur-short: 220ms;
  --radius-card: 0;
  --radius-pill: 999px;
  --radius-input: 0;
}
```

### Tailwind v4 `@theme`

```css
@theme {
  --color-paper: oklch(95% 0.018 65);
  --color-paper-2: oklch(91% 0.022 65);
  --color-paper-3: oklch(87% 0.024 65);
  --color-ink: oklch(21% 0.018 35);
  --color-ink-2: oklch(32% 0.020 35);
  --color-rule: oklch(77% 0.025 65);
  --color-accent: oklch(39% 0.120 25);
  --font-display: "Newsreader", serif;
  --font-body: "IBM Plex Sans", sans-serif;
  --font-outlier: "IBM Plex Mono", monospace;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  --text-base: 1.0625rem;
  --text-md: 1.3125rem;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --radius-card: 0;
}
```

### DTCG `tokens.json`

```json
{
  "$schema": "https://design-tokens.github.io/community-group/format/",
  "color": {
    "paper": { "$value": "oklch(95% 0.018 65)", "$type": "color" },
    "ink": { "$value": "oklch(21% 0.018 35)", "$type": "color" },
    "accent": { "$value": "oklch(39% 0.120 25)", "$type": "color" }
  },
  "font": {
    "display": { "$value": "Newsreader, serif", "$type": "fontFamily" },
    "body": { "$value": "IBM Plex Sans, sans-serif", "$type": "fontFamily" },
    "outlier": { "$value": "IBM Plex Mono, monospace", "$type": "fontFamily" }
  },
  "space": {
    "sm": { "$value": "1rem", "$type": "dimension" },
    "md": { "$value": "1.5rem", "$type": "dimension" },
    "lg": { "$value": "2rem", "$type": "dimension" }
  },
  "duration": {
    "micro": { "$value": "120ms", "$type": "duration" },
    "short": { "$value": "220ms", "$type": "duration" },
    "long": { "$value": "420ms", "$type": "duration" }
  }
}
```

### shadcn/ui CSS variables

```css
:root {
  --background: 95% 0.018 65;
  --foreground: 21% 0.018 35;
  --card: 91% 0.022 65;
  --card-foreground: 21% 0.018 35;
  --primary: 39% 0.120 25;
  --primary-foreground: 97% 0.015 65;
  --secondary: 87% 0.024 65;
  --secondary-foreground: 32% 0.020 35;
  --muted: 77% 0.025 65;
  --muted-foreground: 40% 0.020 35;
  --border: 77% 0.025 65;
  --input: 77% 0.025 65;
  --ring: 47% 0.180 25;
  --radius: 0;
}
```
