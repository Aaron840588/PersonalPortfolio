import Link from "next/link";
import type { FeaturedProject, SourcedClaim } from "@/types/portfolio";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { ProjectMedia } from "./ProjectMedia";

type CaseStudyPageProps = {
  project: FeaturedProject;
  nextProject: FeaturedProject;
};

function ClaimList({ claims }: { claims: readonly SourcedClaim[] }) {
  return (
    <ul className="claim-list">
      {claims.map((claim) => (
        <li key={claim.text}>{claim.text}</li>
      ))}
    </ul>
  );
}

const tourTitles = {
  "hh-hub": ["Operating map", "Inventory control", "Consignment workflow"],
  "pet-care-crm": ["Daily workspace", "Connected records", "Mobile billing"],
} as const;

export function CaseStudyPage({ project, nextProject }: CaseStudyPageProps) {
  const programmingLanguages = new Set(["JavaScript", "Python", "TypeScript"]);
  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.name,
    description: project.summary.text,
    codeRepository: project.repository.href,
    programmingLanguage: project.technologies
      .map((technology) => technology.name)
      .filter((technology) => programmingLanguages.has(technology)),
    author: {
      "@type": "Person",
      name: "Aaron Tagapan",
    },
  };

  const projectTourTitles = tourTitles[project.id as keyof typeof tourTitles];

  const ext = { target: "_blank", rel: "noreferrer" } as const;
  const newTab = <span className="sr-only"> (opens in a new tab)</span>;

  const sections = [
    {
      id: "workflow",
      title: "How the system is used",
      intro: "Operational roles and the workflows they move through.",
      rows: [
        ["Users and roles", project.caseStudy.usersAndRoles],
        ["Key workflows", project.caseStudy.keyWorkflows],
      ],
    },
    {
      id: "implementation",
      title: "Implementation and checks",
      intro: "The tools, technical choices and verification behind the demo.",
      rows: [
        ["Technical setup", project.caseStudy.technicalImplementation],
        ["Checks and known behavior", project.caseStudy.testingAndReliability],
      ],
    },
    {
      id: "reflection",
      title: "Limits and lessons",
      intro: "What was traded off, and what I would carry into the next system.",
      rows: [
        ["Challenges and tradeoffs", project.caseStudy.challengesAndTradeoffs],
        ["Lessons learned", project.caseStudy.lessonsLearned],
      ],
    },
  ] as const;

  return (
    <>
      <main id="main-content">
        <section aria-labelledby="case-title" className="relative isolate overflow-hidden pt-28 sm:pt-36">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[radial-gradient(55%_60%_at_80%_0%,rgba(61,107,255,0.18),transparent_70%)]"
          />
          <div className="shell">
            <Link className="link text-[0.95rem] text-ink-2" href="/#work">
              Back to selected work
            </Link>
            <div className="mt-10 grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="text-mute">
                  {project.type}, {project.period.label}
                </p>
                <h1 id="case-title" className="mt-3 text-[clamp(3rem,8vw,6rem)] font-semibold leading-[0.95] tracking-[-0.045em]">
                  {project.name}
                </h1>
                <p className="mt-6 max-w-2xl text-[1.2rem] leading-relaxed text-ink-2">{project.statement.text}</p>
              </div>
              <div className="flex flex-col justify-end gap-6 lg:col-span-5">
                <p className="text-ink-2">{project.summary.text}</p>
                <div className="flex flex-wrap gap-3">
                  {project.liveDemo ? (
                    <a className="btn btn-primary" href={project.liveDemo.href} {...ext}>
                      {project.id === "hh-hub" ? project.liveDemo.label : "Open public demo"}
                      {newTab}
                    </a>
                  ) : null}
                  <a className="btn btn-ghost" href={project.repository.href} {...ext}>
                    View repository
                    {newTab}
                  </a>
                </div>
                <p className="flex gap-3 rounded-2xl border border-line bg-panel/60 p-4 text-[0.93rem] text-ink-2">
                  <span className="live-dot mt-2 shrink-0" aria-hidden="true" />
                  <span>
                    <strong className="text-ink">{project.demoStatus.label}.</strong> {project.demoStatus.detail}
                  </span>
                </p>
              </div>
            </div>

            <dl className="mt-14 grid gap-6 border-y border-line py-6 text-[0.95rem] sm:grid-cols-3">
              <div>
                <dt className="text-mute">Period</dt>
                <dd className="text-ink">{project.period.label}</dd>
              </div>
              <div>
                <dt className="text-mute">Repository</dt>
                <dd className="text-ink">{project.repository.licenseLabel}</dd>
              </div>
              <div>
                <dt className="text-mute">Stack</dt>
                <dd className="text-ink">
                  {project.technologies.slice(0, 4).map((t) => t.name).join(", ")}
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section aria-labelledby="tour-heading" className="shell py-20 sm:py-28">
          <div className="max-w-2xl">
            <h2 id="tour-heading" className="text-[clamp(2rem,4.5vw,3.25rem)] font-semibold">
              A short project tour
            </h2>
            <p className="mt-3 text-ink-2">
              {project.id === "hh-hub"
                ? project.demoStatus.availability === "maintenance"
                  ? "Three sanitized local-demo screens; the hosted backend is under maintenance."
                  : "Three sanitized screens from H+H. Explore the original interface through its isolated fictional demo."
                : "Three screens from the synthetic public demo."}
            </p>
          </div>
          <ol className="mt-14 grid gap-20">
            {project.media.map((media, index) => (
              <li key={media.src} className="grid gap-6 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-3">
                  <p className="text-[0.9rem] text-signal">Screen {index + 1} of {project.media.length}</p>
                  <h3 className="mt-1 text-[1.5rem] font-semibold">{projectTourTitles[index]}</h3>
                </div>
                <div className="lg:col-span-9">
                  <ProjectMedia media={media} priority={index === 0} linkToSource />
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="brief-heading" className="border-y border-line bg-night-2 py-20 sm:py-28">
          <div className="shell grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 id="brief-heading" className="text-[clamp(2rem,4.5vw,3.25rem)] font-semibold">
                Project brief
              </h2>
              <div className="mt-6 grid gap-5 text-[1.08rem] leading-relaxed text-ink-2">
                <p className="text-ink">{project.caseStudy.problem.text}</p>
                <p>{project.caseStudy.systemResponse.text}</p>
                <p>{project.caseStudy.operationalContext.text}</p>
              </div>
            </div>
            <div className="rounded-3xl border border-line bg-panel/60 p-7 lg:col-span-5">
              <h3 className="text-[1.4rem] font-semibold">My role</h3>
              <div className="mt-5">
                <ClaimList claims={project.caseStudy.responsibilities} />
              </div>
            </div>
          </div>
        </section>

        {sections.map((section) => (
          <section key={section.id} aria-labelledby={`${section.id}-heading`} className="shell py-20 sm:py-24">
            <div className="max-w-2xl">
              <h2 id={`${section.id}-heading`} className="text-[clamp(2rem,4.5vw,3.25rem)] font-semibold">
                {section.title}
              </h2>
              <p className="mt-3 text-ink-2">{section.intro}</p>
            </div>
            <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-2">
              {section.rows.map(([title, claims]) => (
                <article key={title} className="bg-night p-7 sm:p-9">
                  <h3 className="text-[1.3rem] font-semibold">{title}</h3>
                  <div className="mt-5">
                    <ClaimList claims={claims} />
                  </div>
                </article>
              ))}
            </div>
            {section.id === "implementation" ? (
              <ul className="mt-8 flex flex-wrap gap-2" aria-label="Key technologies">
                {project.technologies.map((t) => (
                  <li key={t.name} className="rounded-full border border-line px-3 py-1 text-[0.85rem] text-ink-2">
                    {t.name}
                  </li>
                ))}
              </ul>
            ) : null}
            {section.id === "reflection"
              ? project.caseStudy.contentWarnings.map((warning) => (
                  <p key={warning.text} className="mt-8 max-w-3xl text-[0.92rem] text-mute">
                    <strong className="text-ink-2">Note.</strong> {warning.text}
                  </p>
                ))
              : null}
          </section>
        ))}

        <section aria-labelledby="next-project-heading" className="border-t border-line">
          <Link
            href={nextProject.caseStudyHref}
            className="shell group flex flex-wrap items-end justify-between gap-6 py-20 sm:py-28"
          >
            <span>
              <span className="block text-mute">Next case study</span>
              <span
                id="next-project-heading"
                role="heading"
                aria-level={2}
                className="mt-2 block font-display text-[clamp(2.6rem,7vw,5.5rem)] font-semibold leading-none tracking-[-0.04em] transition-colors group-hover:text-signal"
              >
                {nextProject.name}
              </span>
            </span>
            <span className="btn btn-ghost">Read case study</span>
          </Link>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </main>
      <SiteFooter />
    </>
  );
}
