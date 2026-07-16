# Portfolio redesign validation report

Validated **July 15, 2026 (Asia/Manila)**.

## Outcome

The portfolio was fully redesigned around a quiet, minimalist editorial system. The new production build passes lint, strict TypeScript checking, dependency audit, static production generation, HTTP route checks, responsive browser checks, interaction checks, reduced-motion checks, and final production-console review.

No deployment, GitHub push, external message, or account change was performed.

## What changed

### Removed

- Animated hero system map and floating visual nodes.
- Decorative system architecture diagrams on both case studies.
- Evidence band, professional-domain index, additional-work block, repeated about positioning, and oversized contact treatment.
- Fake browser chrome, screenshot dots, glow, gradients, glass effects, shadows, decorative grids, and large rounded cards.
- Numeric mobile-navigation labels, active-section tracking, most icons, skill pills, metric-heavy project rails, and repeated project explanations.
- Unused `SystemsVisual`, `SystemOverview`, `CopyEmail`, and capability-data modules.
- Direct Tailwind CSS, Tailwind PostCSS plugin, and project PostCSS configuration; the finished design uses plain CSS.

### Simplified

- Navigation now contains Work, Experience, Skills, Contact, and Résumé.
- The homepage is organized around hero, selected work, experience, capabilities, education, and a restrained contact strip.
- Capabilities are concise categorized text lists instead of pills or cards.
- Gardenia is presented as one readable stacked experience record.
- The footer contains only identity and location.

### Redesigned

- Softer neutral palette: `#0b0b0c`, `#111113`, `#151517`, restrained off-white text, thin translucent rules, and sparse `#d6e89a` accents.
- Geist Sans with Geist Mono reserved for short metadata.
- A centered 1160px content shell with generous whitespace and consistent alignment.
- Large real project screenshots followed by Problem, What I built, My role, technologies, and project links.
- Five-part case studies: introduction, overview, workflows, implementation, and reflection/next project.
- Portrait Pet-Care CRM invoice imagery now preserves its source aspect ratio.
- Résumé, social-preview image, favicon, and Apple icon now use the same quiet visual system.

### Motion retained

- Soft 10px fade-up for selected content and screenshot entry.
- Thin scroll-progress line.
- Small link/color transitions.
- Minimal mobile-navigation transition.

No parallax, scaling stories, sticky storytelling, continuous decorative motion, 3D layers, or page-transition effects remain.

## Build validation

| Check | Result |
| --- | --- |
| `npm install` / dependency pruning | Passed |
| `npm run lint` | Passed — 0 errors and 0 warnings |
| `npx tsc --noEmit` | Passed |
| `npm audit --omit=dev` | Passed — 0 vulnerabilities |
| `npm run build` | Passed |
| `git diff --check` | Passed |
| Placeholder/prohibited-style scan | Passed |

Next.js 16.2.10 statically generated:

- `/`
- `/work/hh-hub`
- `/work/pet-care-crm`
- `/resume`
- `/opengraph-image`
- `/icon`
- `/apple-icon`
- `/robots.txt`
- `/sitemap.xml`

## Responsive browser validation

Every main route was checked at 360px, 768px, and 1280px. The homepage received additional checks at 390px, 1024px, and 1440px.

- No horizontal overflow was detected on any tested route or width.
- Every route contains exactly one H1 and one main landmark.
- Desktop navigation appears from 1024px; the mobile menu appears below that breakpoint.
- Homepage buttons remain at least 48px high.
- Project detail columns collapse to a single readable column on small screens.
- Case-study facts, workflow columns, galleries, and résumé actions reflow without clipping.
- The résumé page contains one PDF object, one download action, and a full-width mobile fallback layout.
- Desktop and mobile visual inspection found no spacing, typography, screenshot, alignment, or clipping defects after the final adjustments.

## Interaction and accessibility checks

- The mobile menu opens with the correct expanded state, locks body scrolling, and makes the background main content inert and hidden from assistive technology.
- Escape closes the menu, removes the lock/inert state, and returns focus to the menu trigger.
- A skip link, visible 2px focus outline, semantic headings, descriptive image alternatives, captions, and explicit navigation labels are present.
- The final production browser console returned no errors or warnings across the homepage, both case studies, and résumé page.

## Reduced motion

With `prefers-reduced-motion: reduce` emulated:

- The media query matched.
- Smooth scrolling changed to `auto`.
- The progress indicator was hidden.
- Navigation transitions collapsed to effectively immediate timing.
- The H1 remained visible.
- No motion-enhanced node remained hidden at zero opacity.

## Production HTTP checks

| Route or asset | Status | Content type |
| --- | ---: | --- |
| `/` | 200 | `text/html` |
| `/work/hh-hub` | 200 | `text/html` |
| `/work/pet-care-crm` | 200 | `text/html` |
| `/resume` | 200 | `text/html` |
| `/resume/Aaron_Tagapan_Resume.pdf` | 200 | `application/pdf` |
| `/sitemap.xml` | 200 | `application/xml` |
| `/robots.txt` | 200 | `text/plain` |
| `/opengraph-image` | 200 | `image/png` |
| `/icon` | 200 | `image/png` |
| `/apple-icon` | 200 | `image/png` |

The server-rendered homepage contains the final headline, both projects, Gardenia experience, and JSON-LD. It contains no TOEIC claim, phone number, removed systems-map copy, or stale scaffold icon reference.

## Content and evidence boundaries

- The source résumé remains a one-page US Letter PDF with SHA-256 `0e5cf6a3ad42f67fa360861d424159d47cfd9115658845136576a8c1f3732a2a`.
- TOEIC remains omitted because the supplied résumé contains no verified score or test date.
- The phone number remains in the downloadable résumé but is not duplicated in homepage HTML.
- H+H remains marked under maintenance with no live-demo action because its hosted API returned HTTP 503 during the July 15 review.
- The Pet-Care CRM live demo remains explicitly described as synthetic and in-memory.
- No private source, credentials, production customer information, or unreviewed historical screenshots were added.

## Final design review

The requested ten-question design test was applied to every route. The final result uses no visual element solely for decoration, contains no card-heavy dashboard composition, reserves the accent for focus/status/progress states, makes project screenshots the dominant imagery, and presents the core profile in a recruiter-scannable sequence.

## External actions

None performed. The redesigned production build is running locally at `http://localhost:3000`; it was not deployed or pushed.
