# Content source and claim ledger

Last reconciled: **July 17, 2026 (Asia/Manila)**

This file is the publishing boundary for the portfolio. It separates identity and career facts from repository evidence, time-sensitive deployment checks, and design language. If a claim is not supported here, it should not appear on the site without a new verification pass.

## Current positioning directive

Aaron does not want the portfolio to present him as a software engineer or
developer. His formal positioning is Information Systems, IT operations,
application support, systems analysis, QA/UAT, and business technology. The two
featured applications are AI-assisted personal projects: describe his role as
defining workflows, iterating with coding tools, reviewing the implementation,
testing the result, and documenting limits. Do not imply unaided authorship or
software-development employment.

## Evidence hierarchy

Use the strongest relevant source, in this order:

1. **Resume source** — identity, contact information, education, internship, stated project summaries, training, and dates.
2. **Repository source** — implemented routes, code paths, dependencies, tests, CI, demo safeguards, and repository licensing.
3. **Deployment source** — current public reachability and actual demo behavior. This evidence is time-sensitive.
4. **User brief** — desired presentation, audience, display labels, and design intent. It is not proof of implementation or business outcomes.

For factual data, use these states:

```ts
type EvidenceSource = "resume" | "repository" | "deployment" | "user-brief";
type VerificationState = "verified" | "time-sensitive" | "pending" | "omitted";
```

`pending` and `omitted` facts do not render as portfolio claims. A time-sensitive fact includes its verification date.

## Primary artifacts

| Artifact | Verification | Use |
| --- | --- | --- |
| `Tagapan, Aaron Resume.pdf` | One-page source audited with three PDF extraction libraries and a visual render. SHA-256: `0e5cf6a3ad42f67fa360861d424159d47cfd9115658845136576a8c1f3732a2a`. | Authority for personal, internship, education, training, and resume-level project statements. |
| [Aaron840588 GitHub profile](https://github.com/Aaron840588) | Public profile and anonymous API reviewed July 15, 2026; related private repository identities were also located through the user-connected GitHub integration. | General GitHub destination and repository identity verification. |
| [Food Operations ERP Demo repository](https://github.com/Aaron840588/food-operations-erp-demo) | Public repository, current head and quality workflow reviewed July 15, 2026. | H+H implementation evidence. |
| [Pet Care CRM Demo repository](https://github.com/Aaron840588/pet-care-crm-demo) | Public repository, local build/test copy, and public deployment reviewed July 15, 2026. | Pet-care implementation and demo evidence. |
| `Aaron840588/H-H` (private) | Repository identity and selected package/README context located through the connected GitHub integration July 15, 2026. | Context cross-check only; no private source or assets are copied into this portfolio. |
| `Aaron840588/kat-petsitting-crm` (private) | Repository identity and selected package/README context located through the connected GitHub integration July 15, 2026. | Context cross-check only; no private source or assets are copied into this portfolio. |

The public project repositories contain source for portfolio review, but their restrictive license-review files do **not** grant an open-source reuse license. Present both as **proprietary / not open source**. Public visibility is not permission to copy, modify, redistribute, or host the code.

The two related private repositories were used only to confirm context the user explicitly placed in scope. Public repository evidence, the supplied résumé, and sanitized public or isolated-demo captures remain the publishing sources for the website.

## Identity and positioning

### Verified for publication

- **Name:** Aaron Tagapan
- **Professional direction:** IT Operations · Systems Administration · Business Technology · AI Automation
- **Homepage positioning:** IT Operations · Systems · Business Technology
- **Location:** Los Baños, Laguna, Philippines
- **Education status:** BS Information Systems graduate
- **Email:** `aarontagapan@gmail.com`
- **LinkedIn:** `https://www.linkedin.com/in/aaron-tagapan1`
- **GitHub:** `https://github.com/Aaron840588`

The local-format phone number exists in the resume. It is intentionally not duplicated in the public page or this ledger; the resume is the contact source for recruiters who need it. Do not silently convert it to an international format.

### Positioning limits

- Lead with operations, support, systems analysis, application testing, documentation, data, and cloud platforms.
- Programming and frameworks are supporting capabilities, not Aaron's professional title.
- Do not title Aaron as Senior, Expert, Software Architect, AI Engineer, Cloud Engineer, Full-Stack Engineer, or an experienced systems administrator.
- Do not describe him as a current student or upcoming graduate; the verified resume says graduate.

## Professional experience

### Gardenia Bakeries Philippines, Inc.

| Field | Verified value |
| --- | --- |
| Role | Business Analyst Intern — MIS Department |
| Location | Biñan, Laguna |
| Dates | December 2025–March 2026 |
| Duration | 486 hours |
| Evidence | Resume |

Publishable scope:

- Developed Functional Specification Documents for enterprise enhancement projects, covering business requirements, user stories, acceptance criteria, process flows, and system workflows.
- Translated stakeholder requirements into functional specifications for a Document Management System integrated with Oracle E-Business Suite metadata.
- Supported QA and UAT with test scenarios, OCR extraction validation, issue documentation, and collaboration with technical and business stakeholders.

Do not add a team size, production outcome, efficiency percentage, promotion, employment conversion, or any dates outside the verified internship range.

## Project claim ledger

### H+H Hub / Food Operations ERP Demo

#### Identity

- Resume title: **H+H Hub — Operations Management Platform**
- Portfolio positioning: **Food operations and ERP platform**
- Resume status: **2026–Present**
- Repository: `https://github.com/Aaron840588/food-operations-erp-demo`
- Repository status: public source for portfolio review; proprietary / not open source

#### Verified technology

The resume verifies Next.js, FastAPI, Supabase/PostgreSQL, and Vercel. The public repository additionally verifies:

- Next.js 16.2.10 App Router
- React 19.2.4
- TypeScript
- Tailwind CSS 4
- FastAPI 0.110.0
- Python
- Pydantic 2
- SQLAlchemy 2
- PostgreSQL driver with SQLite local-development support
- IndexedDB-based failed-write queue
- Vercel monorepo routing
- GitHub Actions quality gate

#### Verified implementation scope

- Role-aware owner and staff boundaries, including tested financial-data redaction.
- Dashboard, inventory, production planning, recipes/costing, reseller ordering, consignment, market events, operational tasks, and settings routes.
- Recursive costing with memoization and circular-reference detection.
- Recursive production bill-of-material expansion.
- Expiry-aware FIFO ingredient deduction.
- Wholesale and consignment workflows.
- IndexedDB replay for general failed writes, with reseller checkout and market-sale mutations excluded to prevent duplicate financial submissions.
- Synthetic demo seeding and bounded demo operations.

Bounded verification facts from July 15, 2026:

- The production frontend build passed and enumerated 10 user-facing routes.
- The repository contains 33 backend `unittest` methods.
- The public GitHub Actions quality gate passed at the audited head.
- Local ESLint exited successfully with 44 warnings; therefore, do not claim zero-warning lint.

#### Deployment status — must remain explicit

The public frontend and login page returned HTTP 200 on July 15, 2026, but `https://food-operations-erp-demo.vercel.app/api/health` returned **HTTP 503** with a database-connectivity error. An interactive login check also showed `API Request failed`.

Portfolio rule:

- Do not call this a working live demo while the health endpoint or login is failing.
- Hide the live-demo CTA or label the deployment **under maintenance**; keep the repository link.
- Recheck `/api/health`, login, and at least one authenticated workflow before changing that status.
- Never show or request production credentials.

#### Omit or qualify

- Omit the supplied "more than 30 spreadsheets" origin statement and approximate database-table count until independent documentation supports them.
- Do not claim sub-5ms performance, scheduled resets, production scale, real user counts, uptime, revenue, savings, or measured business outcomes.
- Do not claim the `swr` package is used; the repository uses custom cache/fallback behavior.
- Describe the owner demo role as exposing broader workflows, not unrestricted full access.
- The resume's wording that Aaron architected and deployed the platform is superseded for portfolio positioning by the current user directive above. Do not use **Software Architect**, software engineer, or developer as his title, and do not imply unaided implementation.

### Pet Care CRM / Cloud Business Management Platform

#### Identity

- Resume title: **Cloud Business Management Platform**
- Public repository title: **Pet Care Operations CRM — Public Portfolio Demo Sandbox**
- User-brief display label: **Kat's Pet-Care CRM**
- Date: **2026**
- Repository: `https://github.com/Aaron840588/pet-care-crm-demo`
- Live demo: `https://pet-care-crm-demo.vercel.app`
- Repository status: public source for portfolio review; proprietary / not open source

The label "Kat's Pet-Care CRM" comes from the user's direct brief, not from the resume or public repository. It may be used as the requested case-study display label, but it must not be expanded into an unverified legal business name, client testimonial, or identifiable customer story.

#### Verified technology

- React 19.2.4
- Vite 8
- JavaScript and responsive CSS
- Firebase 12 Firestore/Auth code path for non-demo deployments
- Persistent Firestore local cache in the non-demo code path
- `html-to-image` for invoice and report-card image capture
- PWA manifest and service-worker files
- Lucide React

Declared OCR and QR packages are not enough by themselves to prove those capabilities are active in the public demo. Do not feature them without route-level verification.

#### Verified implementation scope

- One-click public demo launcher and a separate production-mode Firebase authentication path.
- Dashboard, clients and pets, errands, scheduling, own-pet records, key handovers, invoice builder and records, earnings, visit report cards, and settings/backup views.
- Multi-day scheduling, booking-to-invoice flows, per-day charges and discounts, `.ics` export, and image-based invoice/report-card sharing.
- Public demo mode defaults to in-memory synthetic records and bypasses Firebase initialization.
- The non-demo architecture implements Firestore listeners and persistent local cache.

Bounded verification facts from July 15, 2026:

- `npm ci`, ESLint, and the Vite production build passed in an isolated copy.
- All 16 repository tests passed.
- No GitHub Actions workflow exists; do not claim CI/CD testing.
- The project is JavaScript; do not claim TypeScript or a TypeScript check.
- The public demo launched successfully in the main interactive smoke test. This did not exhaustively verify every view.

#### Demo behavior

- It is safe to show a **Live demo** CTA with the qualified note **No login required · Opens in public demo mode**.
- Core demo records are in-memory and reset on refresh.
- Custom service configuration persists in `localStorage`; the explicit **Reset Demo** action clears that configuration. Do not claim that absolutely all information resets merely on refresh.
- The public demo disables service-worker registration and notifications. Describe offline/PWA behavior as the production architecture, not as the public demo's active mode.
- Never configure or expose production Firebase credentials in this portfolio.

#### Screenshot privacy

The source repository includes historical QA screenshots with real-looking names, contact details, and payment text. The repository's blanket statement that all screenshots are synthetic is therefore not sufficient evidence.

Publishing rules:

1. Prefer fresh captures from the current public demo using synthetic records.
2. Review every selected image at full resolution for names, phone numbers, addresses, email, payment details, customer notes, faces, browser chrome, notifications, and hidden overlays.
3. Redact or reject anything uncertain; never use blur so weakly that text remains recoverable.
4. Keep uncropped originals outside the public directory if they contain anything sensitive.
5. Use neutral captions such as "Synthetic public-demo records" where context helps.

The three current files under `public/projects/pet-care-crm/` were manually reviewed on July 15, 2026 and show generic demo labels and placeholder phone numbers. Replacement images must undergo the same review. Historical `qa/` and `verification-screens/` repository images are not pre-approved for reuse.

### Additional work

These entries are resume-backed summaries only unless a later repository audit adds evidence.

#### AI Automation & Workflow Suite

- Date: 2026
- Technology: Python, Google ADK, Gemini API, MCP
- Safe scope: modular agents and workflows for structured data extraction, transcription processing, natural-language understanding, and business workflow automation.

#### Kapit-Bisig / OK! Calamba

- Type: capstone volunteer platform, not employment or client work
- Dates: 2024–2026
- Technology: Laravel/PHP, SQLite, Blade, Bootstrap 5
- Safe scope: systems analysis, event workflows, functional documentation, and collaboration with the development team during planning.

The resume presents "Kapit-Bisig / OK! Calamba" as one combined label. Do not infer whether those are alternate names, phases, or separate initiatives.

## Education and professional development

### Education

- Bachelor of Science in Information Systems, National University – Laguna, 2022–2026
- Dean's Lister (Multiple Semesters); no GPA or exact semester list is supplied
- TVL – ICT Strand (Senior High School), STI College Calamba, 2019–2021

### Certifications & Training

- Google Cloud Skills Boost: Agent Fundamentals, Google ADK, MLOps for Generative AI (2026)
- Anthropic: MCP Introduction, AI Fluency Framework (2026)
- AWS: Foundations of Prompt Engineering (2026)
- Microsoft: Generative AI Code Camp (2025)

Keep the combined heading **Certifications & Training**. No credential IDs, issue months, certificate links, or expiration dates were verified.

## Deliberate omissions

- **TOEIC:** the brief requests a TOEIC score, but the verified resume contains no TOEIC result or test date. Omit TOEIC completely—no guessed score, empty row, or "available on request" label. Add it only after a verifiable source is supplied.
- Employment beyond the Gardenia internship.
- Graduation month or conferral date, GPA, and exact Dean's List semesters.
- Private client identity, testimonials, references, user counts, revenue, savings, percentage improvements, uptime, awards, stars, team sizes, or production-scale claims.
- Personal photo, birth date, age, street address, languages, interests, and hobbies.
- Any screenshot constructed from imagination or populated with private data.
- Any guessed demo URL, credential, automatic-login behavior, or deployment status.

## Update protocol

Before publishing a new factual claim:

1. Add the exact source and access date to this ledger.
2. Distinguish code-path evidence from verified live behavior.
3. Recheck time-sensitive URLs and demo instructions.
4. Confirm that screenshot and contact details are safe for public distribution.
5. Prefer omission over a caveat if the claim cannot be verified cleanly.
