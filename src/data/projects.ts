import type {
  FeaturedProject,
  PortfolioProject,
  SupportingProject,
} from "@/types/portfolio"

export const featuredProjects = [
  {
    id: "hh-hub",
    slug: "hh-hub",
    name: "H+H Hub",
    resumeName: "H+H Hub — Operations Management Platform",
    type: "AI-assisted food-operations prototype",
    kind: "operations-platform",
    lifecycle: "ongoing",
    period: {
      start: "2026",
      end: null,
      label: "2026 – Present",
    },
    featured: true,
    caseStudyHref: "/work/hh-hub",
    statement: {
      text: "A personal project exploring production planning, recipe costing, inventory, wholesale, consignment, market-event sales, and operational tasks.",
      evidence: ["candidate-brief", "repository"],
    },
    summary: {
      text: "A role-aware operations prototype with linked workflows for inventory, costing, purchasing, customer records, and B2B consignment.",
      evidence: ["candidate-brief", "repository"],
    },
    technologies: [
      { name: "Next.js 16.2.10", evidence: ["repository"] },
      { name: "React 19.2.4", evidence: ["repository"] },
      { name: "TypeScript", evidence: ["repository"] },
      { name: "Tailwind CSS 4", evidence: ["repository"] },
      { name: "FastAPI 0.110.0", evidence: ["repository"] },
      { name: "Python", evidence: ["resume", "repository"] },
      { name: "SQLAlchemy 2", evidence: ["repository"] },
      { name: "Supabase", evidence: ["resume", "repository"] },
      { name: "PostgreSQL", evidence: ["resume", "repository"] },
      { name: "SQLite", evidence: ["repository"] },
      { name: "IndexedDB", evidence: ["repository"] },
      { name: "Vercel", evidence: ["resume", "repository", "deployment"] },
    ],
    metrics: [
      { value: "10", label: "verified user-facing routes", evidence: ["repository"] },
      { value: "33", label: "backend unit-test methods", evidence: ["repository"] },
    ],
    repository: {
      href: "https://github.com/Aaron840588/food-operations-erp-demo",
      label: "food-operations-erp-demo",
      visibility: "public",
      defaultBranch: "main",
      primaryLanguage: "TypeScript",
      sourceAvailableForReview: true,
      proprietary: true,
      openSource: false,
      licenseClassification: "Other / NOASSERTION",
      licenseLabel: "Proprietary / not open source",
      evidence: ["repository"],
    },
    demoStatus: {
      availability: "maintenance",
      label: "Deployment under maintenance",
      detail: "The hosted frontend responded, but its public API health endpoint returned HTTP 503 on July 15, 2026. The repository remains available while hosted login is unavailable.",
      verifiedAt: "2026-07-15",
      evidence: ["deployment"],
    },
    liveDemo: undefined,
    media: [
      {
        src: "/projects/hh-hub/dashboard.png",
        alt: "H+H Hub synthetic local demo dashboard showing its guided portfolio tour and the connected inventory, production, costing, wholesale, consignment, access-control, and offline-resilience workflows.",
        caption: "Sanitized local demo dashboard after health, authentication, and synthetic-data checks passed.",
        width: 1280,
        height: 720,
        kind: "interface-screenshot",
        evidence: ["repository"],
      },
      {
        src: "/projects/hh-hub/fifo-inventory.png",
        alt: "H+H Hub FIFO inventory view showing synthetic ingredient batches, batch codes, available quantities, expiry dates, and health status.",
        caption: "Synthetic FIFO batch directory connecting ingredient lots with expiry-aware stock handling.",
        width: 1280,
        height: 720,
        kind: "interface-screenshot",
        evidence: ["repository"],
      },
      {
        src: "/projects/hh-hub/consignment.png",
        alt: "H+H Hub consignment view focused on Demo Retail Partner A with synthetic shipment, settlement, sell-through, and wholesale details.",
        caption: "Synthetic consignment workflow for dispatch history, sell-through, collections, and settlement state.",
        width: 1280,
        height: 720,
        kind: "interface-screenshot",
        evidence: ["repository"],
      },
    ],
    caseStudy: {
      operationalContext: {
        text: "The verified application brings production, inventory, costing, purchasing, reseller, consignment, market-event, cleaning, maintenance, and administrative workflows into one role-aware system.",
        evidence: ["repository"],
      },
      problem: {
        text: "Food operations require interconnected planning, stock, costing, sales, and maintenance workflows to apply consistent business rules without exposing restricted financial information to every role.",
        evidence: ["repository"],
      },
      systemResponse: {
        text: "The prototype combines a Next.js frontend and FastAPI backend with recursive costing and production logic, expiry-aware FIFO inventory, role boundaries, bounded synthetic demo data, and guarded offline mutation replay.",
        evidence: ["repository"],
      },
      usersAndRoles: [
        {
          text: "Owner workflows include recipes, costing, financial administration, settings, and broader operational controls.",
          evidence: ["repository"],
        },
        {
          text: "Staff workflows expose day-to-day operational functions while tested endpoints redact restricted financial fields.",
          evidence: ["repository"],
        },
        {
          text: "Demo roles use synthetic records and bounded operations; some administration and configuration mutations are intentionally blocked.",
          evidence: ["repository"],
        },
      ],
      keyWorkflows: [
        {
          text: "Recursive recipe costing and production bill-of-material expansion with circular-reference detection.",
          evidence: ["repository"],
        },
        {
          text: "Production forecasting, production targets, ingredient shopping checklists, scaled recipe sheets, and completion flows.",
          evidence: ["repository"],
        },
        {
          text: "Expiry-aware FIFO ingredient-batch deduction, stock forecasting, warehouses, and an inventory audit ledger.",
          evidence: ["repository"],
        },
        {
          text: "Wholesale ordering, discount tiers, consignment delivery and settlement, and market-event sales and reconciliation.",
          evidence: ["repository"],
        },
        {
          text: "Cleaning checklists, maintenance-asset status, role-aware dashboards, and administrative settings.",
          evidence: ["repository"],
        },
      ],
      responsibilities: [
        {
          text: "Defined the operating workflows and used AI-assisted coding tools to turn them into a working portfolio prototype.",
          evidence: ["candidate-brief", "repository"],
        },
        {
          text: "Reviewed the code and data structure, tested the main workflows, and documented the deployment limits shown in this case study.",
          evidence: ["candidate-brief", "repository", "deployment"],
        },
      ],
      technicalImplementation: [
        {
          text: "Next.js App Router frontend with React, TypeScript, Tailwind CSS, Recharts, and Lucide React.",
          evidence: ["repository"],
        },
        {
          text: "FastAPI backend with Pydantic, SQLAlchemy, PostgreSQL, and SQLite support for local development.",
          evidence: ["repository"],
        },
        {
          text: "Vercel monorepo routing sends API requests to the FastAPI serverless entry and other paths to the Next.js frontend.",
          evidence: ["repository", "deployment"],
        },
        {
          text: "IndexedDB stores eligible failed writes for replay; wholesale checkout and market-event sales are excluded to avoid duplicate financial submissions.",
          evidence: ["repository"],
        },
      ],
      testingAndReliability: [
        {
          text: "The current public head passed its GitHub Actions quality gate for frontend install, audit, lint, type-check, build, and Python compilation/tests.",
          evidence: ["repository"],
        },
        {
          text: "The repository contains 33 backend unittest methods covering authentication, financial validity, authorization, reseller stock, and market-event transaction integrity.",
          evidence: ["repository"],
        },
        {
          text: "An isolated frontend check passed install, TypeScript checking, and production build; ESLint exited successfully with 44 warnings.",
          evidence: ["repository"],
        },
        {
          text: "The deployed frontend and login page returned HTTP 200, while /api/health returned HTTP 503 on July 15, 2026.",
          evidence: ["deployment"],
        },
      ],
      challengesAndTradeoffs: [
        {
          text: "Financial mutations are deliberately excluded from generic offline replay to reduce duplicate-submission risk.",
          evidence: ["repository"],
        },
        {
          text: "The owner demo role exposes broader workflows, but sensitive administration and configuration mutations remain restricted.",
          evidence: ["repository"],
        },
        {
          text: "The public deployment is not presented as a working end-to-end demo while its backend health check is failing.",
          evidence: ["deployment"],
        },
      ],
      lessonsLearned: [
        {
          text: "Recursive business structures need explicit circular-reference protection and reusable calculations, not only a visually connected interface.",
          evidence: ["repository"],
        },
        {
          text: "Offline resilience needs different rules for replayable operational writes and financial mutations that could create duplicate submissions.",
          evidence: ["repository"],
        },
        {
          text: "A credible portfolio sandbox needs synthetic records, bounded operations, visible role boundaries, and tests that prove redaction behavior.",
          evidence: ["repository"],
        },
      ],
      contentWarnings: [
        {
          text: "Screens on this page were freshly captured from a sanitized local demo after local health and authentication checks passed. The separate public deployment remains under maintenance because its API health endpoint returned HTTP 503.",
          evidence: ["repository", "deployment"],
        },
      ],
    },
    evidence: [
      {
        id: "portfolio-brief",
        kind: "candidate-brief",
        label: "Candidate-provided portfolio brief",
        verifiedAt: "2026-07-17",
      },
      {
        id: "latest-resume",
        kind: "resume",
        label: "Aaron Tagapan resume",
        verifiedAt: "2026-07-15",
      },
      {
        id: "hh-public-repository",
        kind: "repository",
        label: "Aaron840588/food-operations-erp-demo",
        href: "https://github.com/Aaron840588/food-operations-erp-demo",
        verifiedAt: "2026-07-15",
      },
      {
        id: "hh-public-deployment",
        kind: "deployment",
        label: "Food Operations ERP public deployment",
        href: "https://food-operations-erp-demo.vercel.app",
        verifiedAt: "2026-07-15",
        note: "Frontend HTTP 200; API health HTTP 503.",
      },
    ],
  },
  {
    id: "pet-care-crm",
    slug: "pet-care-crm",
    name: "Kat's Pet-Care CRM",
    resumeName: "Cloud Business Management Platform",
    type: "AI-assisted pet-care operations prototype",
    kind: "business-management-platform",
    lifecycle: "completed",
    period: {
      start: "2026",
      end: "2026",
      label: "2026",
    },
    featured: true,
    caseStudyHref: "/work/pet-care-crm",
    statement: {
      text: "A personal project connecting pet-care clients, visits, keys, billing, earnings, errands, and customer updates.",
      evidence: ["candidate-brief", "repository"],
    },
    summary: {
      text: "A responsive operations CRM prototype with client and pet records, scheduling, billing, key handovers, earnings summaries, errands, and visit report cards.",
      evidence: ["candidate-brief", "repository"],
    },
    technologies: [
      { name: "React 19.2.4", evidence: ["resume", "repository"] },
      { name: "Vite 8", evidence: ["resume", "repository"] },
      { name: "JavaScript", evidence: ["resume", "repository"] },
      { name: "Responsive CSS", evidence: ["repository"] },
      { name: "Firebase 12", evidence: ["resume", "repository"] },
      { name: "Firestore", evidence: ["resume", "repository"] },
      { name: "Firebase Authentication", evidence: ["repository"] },
      { name: "html-to-image", evidence: ["repository"] },
      { name: "Progressive Web App files", evidence: ["repository"] },
      { name: "Vercel", evidence: ["resume", "deployment"] },
    ],
    metrics: [
      { value: "11", label: "verified application views", evidence: ["repository"] },
      { value: "16/16", label: "passing helper tests", evidence: ["repository"] },
    ],
    repository: {
      href: "https://github.com/Aaron840588/pet-care-crm-demo",
      label: "pet-care-crm-demo",
      visibility: "public",
      defaultBranch: "master",
      primaryLanguage: "JavaScript",
      sourceAvailableForReview: true,
      proprietary: true,
      openSource: false,
      licenseClassification: "Other / NOASSERTION",
      licenseLabel: "Proprietary / not open source",
      evidence: ["repository"],
    },
    demoStatus: {
      availability: "verified-live",
      label: "Live public demo",
      detail: "The public deployment and required assets returned HTTP 200, and an interactive smoke test verified that the demo launches into the application. Not every view was exhaustively retested.",
      verifiedAt: "2026-07-15",
      evidence: ["deployment"],
    },
    liveDemo: {
      href: "https://pet-care-crm-demo.vercel.app",
      label: "Open live demo",
      accessNote: "No login required · Opens in demo mode",
      verifiedAt: "2026-07-15",
      evidence: ["deployment"],
    },
    media: [
      {
        src: "/projects/pet-care-crm/dashboard.png",
        alt: "Pet Care CRM public demo dashboard with synthetic operational data and navigation for clients, scheduling, billing, keys, and reports.",
        caption: "Public demo dashboard using synthetic in-memory records.",
        width: 1280,
        height: 720,
        kind: "interface-screenshot",
        evidence: ["deployment"],
      },
      {
        src: "/projects/pet-care-crm/clients.png",
        alt: "Pet Care CRM client directory showing fictional client and pet records, booking totals, and key status.",
        caption: "Fictional client and pet records with booking and key-status context.",
        width: 1280,
        height: 720,
        kind: "interface-screenshot",
        evidence: ["deployment"],
      },
      {
        src: "/projects/pet-care-crm/invoice-builder.png",
        alt: "Mobile Pet Care CRM invoice builder with schedule import, client selection, and print, save, and share actions.",
        caption: "Mobile invoice builder with booking-to-invoice workflow.",
        width: 639,
        height: 642,
        kind: "interface-screenshot",
        evidence: ["deployment"],
      },
    ],
    caseStudy: {
      operationalContext: {
        text: "The application supports a solo pet-care operator managing clients, pets, visits, keys, errands, invoices, earnings, and customer-facing updates from desktop and mobile views.",
        evidence: ["repository"],
      },
      problem: {
        text: "Daily pet-care work requires client, pet, visit, key, billing, and communication records to stay connected across scheduling and service delivery.",
        evidence: ["repository"],
      },
      systemResponse: {
        text: "The prototype links eleven lazy-loaded operational views, with a synthetic in-memory public demo and a separate Firebase-backed setup for non-demo deployments.",
        evidence: ["repository", "deployment"],
      },
      usersAndRoles: [
        {
          text: "The primary workflow is organized for a solo pet-care operator managing service delivery and administration.",
          evidence: ["repository"],
        },
        {
          text: "Public visitors enter a one-click demo that uses seeded in-memory records and bypasses Firebase initialization.",
          evidence: ["repository", "deployment"],
        },
        {
          text: "Non-demo deployments have a Firebase email/password authentication path and Firestore synchronization code.",
          evidence: ["repository"],
        },
      ],
      keyWorkflows: [
        { text: "Client and pet profiles with care notes, medications, and key status.", evidence: ["repository"] },
        { text: "Single- and multi-day visit scheduling with services, charges, discounts, and calendar export.", evidence: ["repository"] },
        { text: "Key handover tracking across pending, received, returned, and no-key states.", evidence: ["repository"] },
        { text: "Booking and errand import into invoice creation, payment state, tips, and balance tracking.", evidence: ["repository"] },
        { text: "Earnings summaries and monthly or client breakdowns.", evidence: ["repository"] },
        { text: "Visit report cards with task, condition, mood, photo, PNG save, and share workflows.", evidence: ["repository"] },
      ],
      responsibilities: [
        {
          text: "Mapped the scheduling, billing, client-record, and key-handling workflows for a solo pet-care operator.",
          evidence: ["candidate-brief", "repository"],
        },
        {
          text: "Used AI-assisted coding tools to assemble and iterate the responsive application.",
          evidence: ["candidate-brief", "repository"],
        },
        {
          text: "Tested the main flows and prepared a synthetic public demo that stays separate from Firebase initialization.",
          evidence: ["candidate-brief", "repository", "deployment"],
        },
      ],
      technicalImplementation: [
        {
          text: "React 19 and Vite 8 single-page application using JavaScript, responsive CSS, lazy-loaded views, and Lucide React.",
          evidence: ["repository"],
        },
        {
          text: "Firebase 12 Firestore and Authentication code supports non-demo deployments with persistent Firestore local cache.",
          evidence: ["repository"],
        },
        {
          text: "html-to-image supports invoice and report-card PNG capture with Web Share or download fallback.",
          evidence: ["repository"],
        },
        {
          text: "PWA manifest, icons, and service-worker files are present; the public demo deliberately disables service-worker registration and notifications.",
          evidence: ["repository"],
        },
      ],
      testingAndReliability: [
        {
          text: "The isolated project passed ESLint without reported warnings and completed a Vite production build.",
          evidence: ["repository"],
        },
        {
          text: "Sixteen of sixteen Node tests passed across booking order, invoice balance filtering, HTML escaping, calendar export, key status, own-pet status, and non-consecutive schedule dates.",
          evidence: ["repository"],
        },
        {
          text: "The deployment, main bundles, manifest, logo, and demo-login bundle returned HTTP 200; a smoke test confirmed the demo launches.",
          evidence: ["deployment"],
        },
      ],
      challengesAndTradeoffs: [
        {
          text: "Core demo records reset on refresh, while custom service configuration persists in localStorage until Reset Demo is used.",
          evidence: ["repository"],
        },
        {
          text: "The public demo disables service-worker and Firebase offline behavior to keep the portfolio sandbox isolated.",
          evidence: ["repository"],
        },
        {
          text: "The repository has no public CI workflow, so lint, build, and tests were verified in an isolated local copy rather than claimed as CI/CD.",
          evidence: ["repository"],
        },
      ],
      lessonsLearned: [
        {
          text: "Public portfolio demos are safer when synthetic in-memory state is separated from production authentication and database initialization.",
          evidence: ["repository"],
        },
        {
          text: "Scheduling, billing, key tracking, and visit reporting become more useful when they share the same client and service context.",
          evidence: ["repository"],
        },
        {
          text: "Mobile workflows benefit from focused actions and shareable outputs because service work happens away from a desk.",
          evidence: ["repository"],
        },
      ],
      contentWarnings: [
        {
          text: "The display label Kat's Pet-Care CRM comes from the portfolio brief and is not presented as a verified legal business or client identity. Screens shown here are freshly reviewed public-demo captures with fictional data.",
          evidence: ["repository"],
        },
      ],
    },
    evidence: [
      {
        id: "portfolio-brief",
        kind: "candidate-brief",
        label: "Candidate-provided portfolio brief",
        verifiedAt: "2026-07-17",
      },
      {
        id: "latest-resume",
        kind: "resume",
        label: "Aaron Tagapan resume",
        verifiedAt: "2026-07-15",
      },
      {
        id: "pet-crm-public-repository",
        kind: "repository",
        label: "Aaron840588/pet-care-crm-demo",
        href: "https://github.com/Aaron840588/pet-care-crm-demo",
        verifiedAt: "2026-07-15",
      },
      {
        id: "pet-crm-public-deployment",
        kind: "deployment",
        label: "Pet Care CRM public demo",
        href: "https://pet-care-crm-demo.vercel.app",
        verifiedAt: "2026-07-15",
        note: "Public demo launch verified; individual workflows were not exhaustively retested.",
      },
    ],
  },
] as const satisfies readonly FeaturedProject[]

export const additionalProjects = [
  {
    id: "ai-automation-workflow-suite",
    slug: "ai-automation-workflow-suite",
    name: "AI Automation & Workflow Suite",
    resumeName: "AI Automation & Workflow Suite",
    type: "AI workflow automation project",
    kind: "automation-suite",
    lifecycle: "completed",
    period: { start: "2026", end: "2026", label: "2026" },
    featured: false,
    caseStudyHref: undefined,
    statement: {
      text: "A personal AI-workflow experiment covering structured data extraction, transcription processing, natural-language understanding, and business automation.",
      evidence: ["candidate-brief", "resume"],
    },
    summary: {
      text: "Explored with Python, Google ADK, Gemini API, and MCP.",
      evidence: ["candidate-brief", "resume"],
    },
    technologies: [
      { name: "Python", evidence: ["resume"] },
      { name: "Google ADK", evidence: ["resume"] },
      { name: "Gemini API", evidence: ["resume"] },
      { name: "Model Context Protocol (MCP)", evidence: ["resume"] },
    ],
    metrics: [],
    repository: undefined,
    demoStatus: {
      availability: "not-provided",
      label: "No public demo listed",
      detail: "The resume provides no repository or deployment URL for this project.",
      evidence: ["resume"],
    },
    liveDemo: undefined,
    media: [],
    caseStudy: undefined,
    evidence: [
      {
        id: "portfolio-brief",
        kind: "candidate-brief",
        label: "Candidate-provided portfolio brief",
        verifiedAt: "2026-07-17",
      },
      { id: "latest-resume", kind: "resume", label: "Aaron Tagapan resume", verifiedAt: "2026-07-15" },
    ],
  },
  {
    id: "kapit-bisig-ok-calamba",
    slug: "kapit-bisig-ok-calamba",
    name: "Kapit-Bisig / OK! Calamba",
    resumeName: "Kapit-Bisig / OK! Calamba – Capstone volunteer platform",
    type: "Capstone volunteer platform",
    kind: "capstone",
    lifecycle: "completed",
    period: { start: "2024", end: "2026", label: "2024 – 2026" },
    featured: false,
    caseStudyHref: undefined,
    statement: {
      text: "An LGU volunteer-management capstone centered on systems analysis, event workflows, and functional documentation.",
      evidence: ["resume"],
    },
    summary: {
      text: "Led systems analysis, event workflows, and functional documentation while collaborating with the development team throughout planning.",
      evidence: ["resume"],
    },
    technologies: [
      { name: "Laravel/PHP", evidence: ["resume"] },
      { name: "SQLite", evidence: ["resume"] },
      { name: "Blade", evidence: ["resume"] },
      { name: "Bootstrap 5", evidence: ["resume"] },
    ],
    metrics: [],
    repository: undefined,
    demoStatus: {
      availability: "not-provided",
      label: "No public demo listed",
      detail: "The resume provides no repository or deployment URL for this capstone.",
      evidence: ["resume"],
    },
    liveDemo: undefined,
    media: [],
    caseStudy: undefined,
    evidence: [
      { id: "latest-resume", kind: "resume", label: "Aaron Tagapan resume", verifiedAt: "2026-07-15" },
    ],
  },
] as const satisfies readonly SupportingProject[]

export const projects = [
  ...featuredProjects,
  ...additionalProjects,
] as const satisfies readonly PortfolioProject[]

export const hhHubProject = featuredProjects[0]
export const petCareCrmProject = featuredProjects[1]
