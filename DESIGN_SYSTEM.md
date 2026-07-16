# Design system

## Direction

The portfolio is a quiet, dark editorial site. Hierarchy comes from typography, whitespace, alignment, thin rules, and real project screenshots. Decoration never competes with the work.

## Color

```css
:root {
  --background: #0b0b0c;
  --surface: #111113;
  --surface-subtle: #151517;
  --text-primary: #f5f5f4;
  --text-secondary: #a3a3a3;
  --text-muted: #737373;
  --border: rgba(255, 255, 255, 0.08);
  --border-strong: rgba(255, 255, 255, 0.14);
  --accent: #d6e89a;
  --accent-ink: #11130a;
}
```

- `--background` is the continuous page canvas.
- Surfaces are reserved for navigation, media, and genuinely grouped controls. Sections normally remain on the canvas.
- Primary, secondary, and muted text must not receive additional opacity.
- Accent is limited to the progress line, availability dot, focus ring, primary action, and occasional hover state.
- Status meaning always includes text; color is never the only signal.

## Typography

- Primary: Geist Sans via `next/font`.
- Metadata only: Geist Mono, used for short labels, dates, and technology lines.
- One H1 per route. Paragraphs never use all caps or mono.

```css
:root {
  --type-display: clamp(2.75rem, 6vw, 4.5rem);
  --type-section: clamp(1.875rem, 3.5vw, 2.75rem);
  --type-heading: clamp(1.35rem, 2vw, 1.75rem);
  --type-body-lg: clamp(1.0625rem, 1vw + 0.85rem, 1.1875rem);
  --type-body: 1rem;
  --type-small: 0.875rem;
  --type-meta: 0.75rem;
}
```

| Style | Weight | Line height | Tracking | Measure |
| --- | ---: | ---: | ---: | ---: |
| H1 | 560 | 1.02 | `-0.045em` | 14ch |
| H2 | 560 | 1.08 | `-0.035em` | 22ch |
| H3 | 570 | 1.2 | `-0.02em` | 36ch |
| Large body | 400 | 1.6 | normal | 60ch |
| Body | 400 | 1.65 | normal | 68ch |
| Mono metadata | 500 | 1.4 | `0.08em` | Short labels only |

## Layout and spacing

```css
:root {
  --shell: 72.5rem; /* 1160px */
  --gutter: clamp(1.25rem, 4vw, 2.5rem);
  --section-space: clamp(4.5rem, 8vw, 7rem);
  --reading-measure: 42rem;
}

.shell {
  width: min(100%, calc(var(--shell) + 2 * var(--gutter)));
  margin-inline: auto;
  padding-inline: var(--gutter);
}
```

- Use a 12-column desktop grid only when it clarifies alignment.
- The hero copy stays within roughly 760px.
- Project screenshots may use the full shell width and must remain visually dominant.
- Major sections are separated by whitespace and a 1px rule, not cards.
- Body copy stays between 55ch and 68ch.

## Rules, radii, and depth

- Standard divider: `1px solid var(--border)`.
- Emphasized divider: `1px solid var(--border-strong)`.
- Controls and screenshots use a 4px to 6px radius.
- Screenshots may use a subtle `0 16px 48px rgba(0, 0, 0, 0.18)` shadow only when separation is needed.
- Navigation and ordinary content do not use heavy shadows.

## Navigation and buttons

- Navigation is a plain wordmark plus Work, Experience, Skills, and Resume.
- The desktop header uses one thin bottom rule. The mobile menu is a simple vertical list with the same information order.
- Controls are at least 44px high and retain a visible keyboard focus state.
- Primary buttons use the accent background and dark text; one primary action is enough in a group.
- Secondary buttons use transparent backgrounds, `--border-strong`, and primary text.
- Hover is limited to a small color or border change. Buttons do not lift, scale, glow, or cast large shadows.
- External links use descriptive text. Icons are optional and never replace labels.

```css
:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 4px;
}
```

## Project screenshots

- Use only real, sanitized screenshots from verified demos.
- Present each screenshot at its native or 16:9 aspect ratio with `object-fit: contain` when the complete workflow matters.
- Use a thin border, small radius, and neutral surface. Do not add fake browser chrome, device frames, perspective, layered transforms, or decorative overlays.
- Captions are optional, short, and placed below the image in muted text.
- Reserve dimensions to prevent layout shift and supply accurate responsive `sizes`.
- Review every image at full resolution for personal data, customer records, notifications, browser UI, or credentials.

## Breakpoints

| Width | Behavior |
| --- | --- |
| 320-767px | One column; 20px gutter; stacked actions and project details; full-width screenshots; simple menu disclosure. |
| 768-1023px | 32px gutter; two columns only where both remain readable; project screenshots still lead each feature. |
| 1024-1279px | Full navigation; 12-column alignment; project detail grids may use three columns. |
| 1280px and above | Hold the 1160px shell and add outer whitespace; never stretch prose or screenshots beyond the shell. |

Required visual checks: 360, 390, 768, 1024, 1280, 1440, and 1600px.

## Motion

- Section entry: opacity `0 -> 1` and `translateY(12px) -> 0`, 400-450ms, once per section.
- Image reveal may use the same restrained transition.
- Link and navigation transitions use 160-200ms color or border changes.
- The page-progress indicator is a 2px transform-based line.
- No continuous or idle motion.

With `prefers-reduced-motion: reduce`, disable reveal translation, progress animation, smooth scrolling, and nonessential transitions. All content remains visible and complete without animation.

## Accessibility

- Preserve the skip link, semantic landmarks, heading order, descriptive image alt text, and logical DOM order.
- Interactive targets are at least 44 by 44px and do not rely on hover.
- Mobile navigation supports Escape, focus return, and body-scroll locking.
- Text, focus, and status contrast must meet WCAG AA; retest whenever tokens change.
- Layout must reflow without horizontal scrolling at 320px and remain usable at 200% zoom.
- Links must remain identifiable without color alone.

## Prohibited effects

Do not use bright neon, gradients, glows, glassmorphism, heavy shadows, large rounded cards, decorative grid backgrounds, floating nodes, system diagrams, parallax, 3D screenshot transforms, sticky scroll storytelling, oversized badges, skill pills, animated connectors, autoplay, multiple accent colors, or repeated dashboard-like panels.

Before release, ask whether each element improves clarity, hierarchy, or credibility. If it does not, remove it.
