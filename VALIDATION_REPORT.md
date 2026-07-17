# Portfolio validation report

Validated **July 17, 2026 (Asia/Manila)**.

## Outcome

The portfolio passes production build, strict TypeScript, ESLint, dependency
audit, route health, responsive browser, image, landmark, heading, overflow,
clipping, contrast, and Hallmark's 58-gate slop test.

The 1440p audit identified and corrected three issues:

1. A 1312px shell left excessive dead space on true 2560×1440 displays.
2. Body, supporting, and metadata text remained at 16px, 14px, and 12px.
3. The first project screenshot could become LCP without being preloaded.

The final shell is 1536px, body text is 17px, supporting text is 15px,
metadata is 13px, muted text is darker, and deterministic LCP images preload.

## Engineering changes

- Removed the client-side motion provider, scroll listener, static reveal
  wrapper, `motion`, and unused `lucide-react` dependency.
- Removed the first-paint fade so text is fully opaque immediately.
- Capped responsive image `sizes` on large displays to avoid oversized image
  requests.
- Updated React and React DOM from 19.2.4 to 19.2.7.
- Kept Next.js at the current installed 16.2.10 release.
- Left major upgrades to ESLint 10, TypeScript 7, and Node type definitions 26
  out of scope because they require migration work.

## Hallmark final pass

- Result: **58 / 58 gates passed** for the editorial genre.
- The homepage, case studies, and résumé use three distinct macrostructures:
  Split Studio, Workbench, and Long Document.
- The Atelier palette, typography, spacing, motion, and layering remain locked
  in named tokens.
- The mono outlier is limited to no more than two roles per page; screenshot
  captions use the body face.
- Link underline offset is fixed at 2px, matching the decorative-text gate.
- Standalone Open Graph and app-icon routes consume one named image-response
  token module instead of declaring local palette and font values.

## Automated checks

| Check | Result |
| --- | --- |
| `npx.cmd next typegen` | Passed |
| `npx.cmd tsc --noEmit` | Passed |
| `npm.cmd run lint` | Passed |
| `npm.cmd audit --omit=dev` | Passed — 0 vulnerabilities |
| `npm.cmd run build` | Passed — 11 static pages generated |
| `git diff --check` | Passed |

## Production HTTP checks

All returned HTTP 200 with the expected content type:

- `/`
- `/work/hh-hub`
- `/work/pet-care-crm`
- `/resume`
- `/resume/Aaron_Tagapan_Resume.pdf`
- `/sitemap.xml`
- `/robots.txt`
- `/opengraph-image`
- `/icon`
- `/apple-icon`

## Browser matrix

Every main route was checked at 320, 375, 414, 768, 1280, 2048, and 2560 CSS
pixels: 28 route/viewport combinations.

- No horizontal overflow.
- No clipped headings, paragraphs, labels, or actions.
- No off-screen controls.
- No broken loaded images.
- Exactly one H1 and one main landmark per route.
- Three guided-tour frames on each case study.
- One PDF object on the résumé route.
- The homepage preloads its first project image; each case study preloads its
  first tour image.
- A fresh runtime console check returned no warnings or errors after the LCP fix.
- At 1280×800, the headline, context, and primary action all remain above the
  fold.

The true 2560px viewport uses a 1536px shell with about 505px of outer space per
side after the browser scrollbar. A common Windows 125%-scaled 1440p setup is
represented by a 2048px CSS viewport and uses about 248px per side. Both are
intentional and readable.

## Contrast

Calculated WCAG contrast ratios for the final OKLCH tokens:

| Pair | Ratio |
| --- | ---: |
| Paper / ink | 15.34:1 |
| Paper / secondary ink | 11.02:1 |
| Paper / muted text | 8.01:1 |
| Oxblood / action text | 9.33:1 |
| Focus / paper | 6.47:1 |

Primary-action focus uses a paper inner outline plus the focus color, preserving
contrast against the oxblood fill.

## Accessibility and content boundaries

- Heading order on the homepage is sequential from H1 through H4.
- Skip link points to the unique `#main-content` target.
- Real screenshot dimensions and descriptive alternatives are present.
- Coarse-pointer actions use the 46px control target.
- Reduced motion disables smooth scrolling and collapses transition duration.
- H+H remains marked under maintenance with no live-demo action.
- Kat's Pet-Care CRM remains labeled as a synthetic, resettable public demo.
- No private source, credentials, production customer information, or unsupported
  outcome claims were added.

## External actions

The validated changes are published through GitHub `main` and the linked Vercel
production project at <https://personal-portfolio-alpha-silk-12.vercel.app/>.
