> Current design/stack review: [27 October research](DESIGN_RESEARCH_2026-10-27.md). It supersedes earlier palette and hero notes.

# Aaron Tagapan Portfolio

An editorial portfolio for Aaron Tagapan, a BS Information Systems graduate
focused on IT operations, systems, application support, QA/UAT, and business
technology.

The interface uses a warm-paper canvas, graphite typography, restrained
oxblood actions, real project screenshots, and deliberately varied editorial
layouts. It avoids gradients, glass effects, decorative dashboards, generic
card grids, and motion-heavy presentation.

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

## Stack

- Next.js 16.4.2 App Router
- React and React DOM 19.2.7
- Strict TypeScript and ESLint
- Newsreader, IBM Plex Sans, and IBM Plex Mono through `next/font`
- Authored global CSS and project-level design tokens

The portfolio has no database, CMS, analytics SDK, form backend, or runtime
dependency on either featured project's backend. The production interface does
not ship a general animation library or icon library.

## Design system

- `DESIGN_RESEARCH.md` records the October 22 redesign and reference comparisons.
- `design.md` records the original editorial design contract; the newer research and implementation take precedence for hero motion.
- `tokens.css` is the canonical token source.
- `DESIGN_SYSTEM.md` explains the implementation rules.
- The content shell grows to 96rem on large displays, while prose remains
  capped at 62ch for readability.
- Body copy starts at 17px; metadata starts at 13px.

The layout is validated at 320, 375, 768, 1280, 2048, and 2560 CSS pixels. A
true 2560×1440 viewport intentionally keeps an editorial margin around the
1536px canvas rather than stretching text across the monitor.

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
image alternatives, 44px-or-larger control targets, and 320px reflow.

Content stays at full contrast. The homepage uses a short hero entrance and one-time scroll entrances, plus restrained image hover motion. Reduced-motion disables entrances and smooth scrolling; content is usable without JavaScript.

## Featured demo caveats

### H+H Hub

The public link opens the original H+H interface backed by isolated fictional data and the existing ERP business handlers. Stock, costing, sales, consignment and production stay connected. Changes reset on refresh. Google Sheets accounts, push delivery and private uploads are intentionally unavailable; no private production database is connected.

### Pet-Care CRM

The demo uses fictional in-memory records. Records and service settings reset on refresh. Local production tests cover core CRUD workflows, booking calendars, invoice/report exports and backup downloads. No Firebase or Gemini calls occur during the tested demo flows. Browser/device permission flows are not exhaustively certified.

## Release evidence — October 22, 2026

Production build, lint, TypeScript and 34 desktop/mobile Chromium checks pass. The hero includes a native-radio project workflow selector, a brief SVG connection animation, reduced-motion handling, and JavaScript-disabled support. A project jump list leads directly to both case studies. No animation dependency or third-party runtime service was added.

The public résumé omits the phone number and retains professional email and city. See `VALIDATION_REPORT.md` and `RELEASE_NOTES.md` for scope and deployment verification. Historical privacy findings in the demo repositories still require provider credential rotation and separate history remediation; publishing these fixes does not erase earlier commits.

Never add production credentials, private customer records, or unreviewed
historical screenshots to this portfolio.
