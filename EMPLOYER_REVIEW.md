# Employer portfolio review — October 22, 2026

## Verdict
The revised portfolio is suitable for presenting entry-level IT / systems experience with clear prototype boundaries. Do not describe both project demos as fully working: H+H currently fails after entry. Changes are prepared on a review branch; production has not been replaced.

## Changes
- Replaced the paragraph-length hero with a concise, two-line headline and a direct introduction.
- Moved the introduction ahead of profile facts on mobile; added Work, Experience and Résumé navigation.
- Added brief staggered hero motion, one-time scroll entrances and a restrained screenshot hover zoom. No animation dependency, scroll hijacking or looping decorations. Full text contrast throughout; reduced-motion and no-JavaScript fallbacks.
- Restored 17px body / 13px metadata text, repaired an undefined image-focus token and corrected the two-item case-study facts grid.
- Removed misleading H+H demo actions and unsupported current test claims.
- Updated Next.js and its ESLint configuration from 16.2.10 to 16.4.2, refreshed compatible dependencies, removed the obsolete PostCSS override.
- Replaced machine-specific screenshot output paths with Playwright-managed outputs. Expanded browser coverage.

## Verified portfolio checks
- ESLint, TypeScript and production build pass.
- 28 Playwright checks pass across desktop and mobile Chromium.
- Axe reports no violations on the four main pages (embedded PDF excluded).
- Local route links, anchors, screenshots, PDF response, canonical metadata, 404 handling and security headers checked.
- All four pages checked for horizontal reflow at 320, 375, 768, 1280, 2048 and 2560px.
- Keyboard skip-link behavior and reduced-motion / JavaScript-disabled content checked.
- Production dependency audit: zero reported vulnerabilities. Full audit: five high-severity findings in the development-only braces / micromatch / fast-glob / Next ESLint dependency chain. The suggested automatic fix would downgrade Next ESLint to v14; it was not applied.

## Live projects
### H+H Hub — release blocker for the live-demo button
The public login page loads. Owner View briefly opens the dashboard, then returns to login. `/api/health` returned HTTP 503 with a database-connection failure. The response also exposes internal database connection details; the backend should return a generic public error and retain details in private logs. Repair and verify backend connectivity before restoring the portfolio demo button. No database settings or credentials were changed in this review.

The separate H+H review branch now replaces the nonfunctional guest entry with a maintenance page, redacts database errors, updates dependencies and corrects lint issues. All 152 backend tests pass against isolated SQLite; eight frontend regressions, lint, typecheck and production build pass. The maintenance page was checked at 375px and 1280px. Production dependencies audit clean. Database connectivity and genuine server-authorized guest access remain deployment blockers. These fixes are not deployed yet.

### Pet-Care CRM — workflow fixes prepared
The separate Pet-Care review branch fixes invoice save/reset state, client autofill, repeated AM/PM labels, modal keyboard focus and demo reset behavior. Demo mode is enabled by default, initializes no Firebase connection, registers no push notifications and resets service settings with the rest of the session. Public branding and backup/storage descriptions now match sandbox behavior.

ESLint passes, all 16 Node helper tests and six desktop/mobile browser tests pass, and the production build passes. The full dependency audit reports zero vulnerabilities. Browser coverage includes all 11 screens, invoice creation/reset, service changes discarded on refresh and no Firebase requests. The large JavaScript bundle warning remains. The live deployment has not been replaced; local fixes must be reviewed and deployed before its behavior matches this branch.

## Résumé and content
The one-page résumé was rebuilt and visually checked. Project descriptions now use the same AI-assisted prototype positioning as the website; unsupported SaaS, architecture and client deployment claims were removed. Original contact details, internship dates, education and 486-hour duration were retained. The revised PDF is included in this branch.

Personal identity and employment claims were checked for consistency with the supplied repository résumé, not independently verified with employers or institutions. No outcomes, commercial usage, qualifications or metrics were invented.

GitHub links responded successfully. LinkedIn returned HTTP 999 to automated access, so public visitor access remains unverified. Mail links were inspected; no emails were sent.

## Remaining release decisions
1. Review and merge the portfolio and demo branches to deploy through the existing integrations.
2. Restore H+H database connectivity and authenticated guest access before re-enabling the portfolio demo action. No hosting credentials or connected infrastructure tools were available for this repair.
3. Recheck the deployed versions after merging. The local test results above do not certify deployment health.

Browser coverage is Chromium only; Safari, Firefox, real devices and assistive-technology user testing remain outside this pass. Automated checks do not establish that every possible interaction is defect-free. LinkedIn visitor access remains unverified because it blocks automated requests.

## Deeper privacy audit — October 22

A follow-up inspection found exposed API/login credentials in Pet Care's public import script/history, historical invoice captures with a payment number, and a bundled staff payroll workbook in H+H's public source. Sanitization is prepared in the separate project PRs, but provider credential revocation and Git-history remediation remain required. Do not describe the projects as leak-free. The revised public resume removes the phone number at the owner's request; the live PDF will retain it until deployment.

The follow-up checks pass: 28 portfolio browser checks, 16 Pet Care production-preview browser checks plus 16 helper tests, and 156 H+H backend tests plus eight frontend tests. H+H Python dependencies now audit clean. Live H+H remains unavailable; live Pet Care booking/image-export observations require deployment and retesting. A local detailed report records scope and limitations without credential values.
