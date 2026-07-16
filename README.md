# Aaron Tagapan Portfolio

A minimalist editorial portfolio for Aaron Tagapan, a BS Information Systems graduate focused on IT operations, systems, application support, QA/UAT, and business technology.

The interface is intentionally quiet: a soft dark-neutral palette, restrained type scale, generous whitespace, thin rules, concise content, and large verified project screenshots. It avoids decorative diagrams, gradients, glass effects, card-heavy layouts, and continuous motion.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Portfolio overview, experience, selected work, skills, and contact links |
| `/work/hh-hub` | H+H Hub case study |
| `/work/pet-care-crm` | Kat's Pet-Care CRM case study |
| `/resume` | Embedded résumé with open and download actions |
| `/opengraph-image` | Generated social-sharing image |
| `/sitemap.xml` | Generated sitemap |
| `/robots.txt` | Generated crawler policy |

## Stack

- Next.js 16 App Router, React 19, and strict TypeScript
- Plain global CSS with custom properties and responsive media queries
- Geist Sans and Geist Mono through `next/font`
- Motion for restrained entry reveals and the thin reading-progress indicator
- Lucide React for the mobile navigation controls
- ESLint with the Next.js Core Web Vitals and TypeScript rules

Tailwind CSS and `@tailwindcss/postcss` are not direct dependencies. The redesign uses authored CSS rather than a utility framework or project-specific PostCSS plugin.

The portfolio has no database, CMS, analytics SDK, form backend, or dependency on either featured project's backend.

## Run locally

Requirements: Node.js 20.9 or newer and npm.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

On Windows PowerShell, use the command shims if script execution blocks `npm` or `npx`:

```powershell
npm.cmd ci
npm.cmd run dev
```

## Validate and build

```bash
npm run lint
npx tsc --noEmit
npm audit --omit=dev
npm run build
npm run start
```

PowerShell equivalents:

```powershell
npm.cmd run lint
npx.cmd tsc --noEmit
npm.cmd audit --omit=dev
npm.cmd run build
npm.cmd run start
```

`NEXT_PUBLIC_SITE_URL` is optional locally and defaults to `http://localhost:3000`. Set it to the final HTTPS origin before any future deployment so canonical URLs, social metadata, structured data, the sitemap, and robots output use the correct domain.

## Source integrity

- Identity, education, internship, training, and personal claims are grounded in the supplied and independently checked résumé.
- Project implementation claims are limited to reviewed repository and deployment evidence.
- Screenshots use synthetic or otherwise reviewed data and are stored under `public/projects/`.
- Unsupported outcomes, metrics, credential identifiers, private-client details, and an unverified TOEIC result are omitted.
- Both featured public repositories are presented as proprietary and not open source.
- Factual content is centralized in `src/data/`; update `CONTENT_SOURCE.md` before publishing a changed claim.

Supporting records:

- `CONTENT_SOURCE.md` — claim and source ledger
- `RESEARCH.md` — technical and portfolio research
- `PORTFOLIO_STRATEGY.md` — content and presentation decisions
- `DESIGN_SYSTEM.md` — current visual rules
- `VALIDATION_REPORT.md` — build and browser QA evidence

## Accessibility and motion

The site targets WCAG 2.2 AA and includes semantic landmarks, one H1 per route, sequential headings, a skip link, visible keyboard focus, descriptive links and image text, 44px-or-larger primary targets, and narrow-width reflow.

The mobile menu traps focus, supports Escape, restores focus to its trigger, locks page scrolling, and makes background content inert while open.

Motion is limited to:

- a soft 10px fade-up when selected content enters the viewport;
- subtle link and navigation transitions; and
- a thin page-progress indicator.

With `prefers-reduced-motion: reduce`, reveal content renders statically, transitions become immediate, smooth scrolling is disabled, and the progress indicator is hidden. No content depends on animation completing.

## Featured demo caveats

### H+H Hub

The case study uses freshly reviewed screenshots from a sanitized local demo. On July 15, 2026, the public frontend responded but its API health endpoint returned HTTP 503 and login failed. The portfolio therefore marks the public demo as under maintenance and does not offer a misleading live-demo action.

### Kat's Pet-Care CRM

The public synthetic demo was verified to launch. Core demo records are in memory and reset on refresh; custom service configuration can remain in local storage until the demo's Reset Demo action is used. Not every workflow was exhaustively retested.

Never add production credentials, private customer records, or unreviewed historical screenshots to this portfolio.

## Deployment status

This project is local only. The redesign has not been pushed, published, or deployed, and no external account or production environment has been modified.
