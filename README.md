# Aaron Tagapan Portfolio

A dark, 3D portfolio for Aaron Tagapan, a BS Information Systems graduate
focused on IT operations, systems, application support, QA/UAT, and business
technology.

The hero is a live WebGL technical drawing: an exploded isometric view of three
drafting planes (people, process, systems). It inks itself in once, then one
request at a time traces a route from a person, through a process, into a
system and back. On desktop the hero pins while the layers pull apart as you
scroll. Project screenshots flatten from a slight 3D tilt as they scroll into
view.

## Stack

- Next.js 16 (App Router, static output), React 19, TypeScript
- Tailwind CSS v4 (`@theme` tokens in `src/app/globals.css`)
- three.js with React Three Fiber (orthographic, no post-processing), in
  `src/components/hero/`
- Motion for scroll-linked transforms, Lenis for smooth wheel scrolling
- CSS scroll-driven animations (`animation-timeline`) for the hero exit
- Playwright and axe-core for end-to-end and accessibility checks

The 3D scene loads after first paint, pauses when off-screen, renders a
single static frame for reduced-motion users, and is skipped when WebGL is
unavailable. Lenis is disabled for touch devices and reduced motion.

## Local development and checks

Use Node.js 24 and npm.

```sh
npm ci
npm run dev
# Full production validation:
npx playwright install chromium
npm run check
```

## Deployment

The current production site is hosted on Vercel at
[aarontagapan.vercel.app](https://aarontagapan.vercel.app/).

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Portfolio overview, selected work, experience, capabilities, and contact |
| `/work/hh-hub` | H+H Hub case study |
| `/work/pet-care-crm` | Pet-Care CRM case study |
| `/resume` | Embedded résumé with open and download actions |
| `/opengraph-image` | Generated social-sharing image |
| `/sitemap.xml` | Generated sitemap |
| `/robots.txt` | Generated crawler policy |

## Design system

- Tokens live in the `@theme` block of `src/app/globals.css`: navy-black
  ground, off-white ink, and amber as the single accent for live states.
- Bricolage Grotesque (display) and Hanken Grotesk (text) through `next/font`.
- The visual language is a technical drawing set: hairline rules, registration
  ticks, numbered figures, and three layer marks (people ring, process diamond,
  systems block) that tie sections back to the hero drawing.
- `DESIGN_SYSTEM.md`, `design.md` and the `DESIGN_RESEARCH*.md` files record
  earlier iterations and are kept for history; this README and the code take
  precedence.

The layout is validated from 320 to 2560 CSS pixels.

## Source integrity

- Identity, education, internship, training, and personal claims are grounded
  in the supplied and independently checked résumé.
- Project implementation claims are limited to reviewed repository and
  deployment evidence.
- Screenshots use synthetic or otherwise reviewed data under `public/projects/`.
- Unsupported outcomes, metrics, credential identifiers, private-client
  details, and an unverified TOEIC result remain omitted.
- Both featured public repositories are presented as proprietary and not open
  source.

Supporting records:

- `CONTENT_SOURCE.md` — claim and source ledger
- `RESEARCH.md` — technical and portfolio research
- `PORTFOLIO_STRATEGY.md` — content and presentation decisions
- `VALIDATION_REPORT.md` — current build and browser QA evidence

## Accessibility and motion

The site targets WCAG 2.2 AA with semantic landmarks, one H1 per route,
sequential headings, a skip link, visible keyboard focus, descriptive links and
image alternatives, 24px-or-larger tap targets, and 320px reflow.

Motion is limited to one orchestrated hero (the drawing inks in, a single
request traces its route, the layers separate on scroll), scroll-linked project
figures, and small hover states. Reduced-motion users get a still drawing and
native scrolling; content is readable without JavaScript.

## Featured demo caveats

### H+H Hub

The public link opens the original H+H interface backed by isolated fictional data and the existing ERP business handlers. Stock, costing, sales, consignment and production stay connected. Changes reset on refresh. Google Sheets accounts, push delivery and private uploads are intentionally unavailable; no private production database is connected.

### Pet-Care CRM

The demo uses fictional in-memory records. Records and service settings reset on refresh. Local production tests cover core CRUD workflows, booking calendars, invoice/report exports and backup downloads. No Firebase or Gemini calls occur during the tested demo flows. Browser/device permission flows are not exhaustively certified.

## Release evidence — November 21, 2026

Lint, TypeScript, production build, `npm audit` and 34 desktop/mobile Chromium
checks (including axe) pass. A separate audit covered every route at 320, 375,
390, 414, 768, 1024 and 1440px for overflow, clipped text, tap-target size,
console errors, failed requests and broken links or anchors, plus a tap-through
of every navigation path on a phone and a desktop viewport.

The résumé PDF is the owner-supplied November 2026 version and includes the
owner's phone number by their choice. "Dean's Lister" appears only in the PDF,
not in the site text. Historical privacy findings in the demo repositories still
require provider credential rotation and separate history remediation.

Never add production credentials, private customer records, or unreviewed
historical screenshots to this portfolio.
