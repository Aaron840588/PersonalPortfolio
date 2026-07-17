# Aaron Tagapan Portfolio

An editorial portfolio for Aaron Tagapan, a BS Information Systems graduate
focused on IT operations, systems, application support, QA/UAT, and business
technology.

The interface uses a warm-paper canvas, graphite typography, restrained
oxblood actions, real project screenshots, and deliberately varied editorial
layouts. It avoids gradients, glass effects, decorative dashboards, generic
card grids, and motion-heavy presentation.

## Deployment

The current production site is hosted on Vercel at
[personal-portfolio-alpha-silk-12.vercel.app](https://personal-portfolio-alpha-silk-12.vercel.app/).

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Portfolio overview, selected work, experience, capabilities, and contact |
| `/work/hh-hub` | H+H Hub case study |
| `/work/pet-care-crm` | Kat's Pet-Care CRM case study |
| `/resume` | Embedded résumé with open and download actions |
| `/opengraph-image` | Generated social-sharing image |
| `/sitemap.xml` | Generated sitemap |
| `/robots.txt` | Generated crawler policy |

## Stack

- Next.js 16.2.10 App Router
- React and React DOM 19.2.7
- Strict TypeScript and ESLint
- Newsreader, IBM Plex Sans, and IBM Plex Mono through `next/font`
- Authored global CSS and project-level design tokens

The portfolio has no database, CMS, analytics SDK, form backend, or runtime
dependency on either featured project's backend. The production interface does
not ship a general animation library or icon library.

## Design system

- `design.md` is the app-wide Hallmark design contract.
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

Content is fully visible at first paint. Motion is limited to short hover and
pressed-state transitions; `prefers-reduced-motion` collapses those durations
and disables smooth scrolling.

## Featured demo caveats

### H+H Hub

The case study uses reviewed screenshots from a sanitized local demo. On July
15, 2026, the public frontend responded but its API health endpoint returned
HTTP 503 and login failed. The portfolio therefore marks the demo as under
maintenance and does not offer a misleading live-demo action.

### Kat's Pet-Care CRM

The public synthetic demo was verified to launch. Core demo records are in
memory and reset on refresh; custom service configuration can remain in local
storage until the demo's Reset Demo action is used. Not every workflow was
exhaustively retested.

Never add production credentials, private customer records, or unreviewed
historical screenshots to this portfolio.
