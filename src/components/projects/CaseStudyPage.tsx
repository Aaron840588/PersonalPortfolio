import Link from "next/link";
import type { FeaturedProject, SourcedClaim } from "@/types/portfolio";
import { ProjectMedia } from "./ProjectMedia";

type CaseStudyPageProps = {
  project: FeaturedProject;
  nextProject: FeaturedProject;
};

function ClaimList({ claims }: { claims: readonly SourcedClaim[] }) {
  return (
    <ul className="case-list">
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
  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.name,
    description: project.summary.text,
    codeRepository: project.repository.href,
    programmingLanguage: project.technologies.map((technology) => technology.name),
    author: {
      "@type": "Person",
      name: "Aaron Tagapan",
    },
  };

  const projectTourTitles = tourTitles[project.id as keyof typeof tourTitles];

  return (
    <main id="main-content" className="case-study">
      <section className="case-masthead shell" aria-labelledby="case-title">
        <Link className="back-link" href="/#work">
          <span aria-hidden="true">←</span> Selected work
        </Link>

        <div className="case-masthead__grid">
          <div className="case-masthead__title">
            <p className="case-provenance">
              {project.type} · {project.period.label}
            </p>
            <h1 id="case-title">{project.name}</h1>
            <p className="case-masthead__statement">{project.statement.text}</p>
          </div>

          <div className="case-masthead__brief">
            <p>{project.summary.text}</p>
            <div className="case-masthead__actions">
              {project.liveDemo ? (
                <a
                  className="action action--primary"
                  href={project.liveDemo.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open public demo <span aria-hidden="true">↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : (
                <a
                  className="action action--primary"
                  href={project.repository.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Review source <span aria-hidden="true">↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              )}
              {project.liveDemo ? (
                <a
                  className="text-action"
                  href={project.repository.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Review source <span aria-hidden="true">↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : null}
            </div>
            <p className={`project-status project-status--${project.demoStatus.availability}`}>
              <span className="project-status__mark" aria-hidden="true" />
              <span>
                <strong>{project.demoStatus.label}.</strong> {project.demoStatus.detail}
              </span>
            </p>
          </div>
        </div>

        <dl className="case-facts">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <dt>{metric.value}</dt>
              <dd>{metric.label}</dd>
            </div>
          ))}
          <div>
            <dt>{project.lifecycle}</dt>
            <dd>project status</dd>
          </div>
          <div>
            <dt>Public review</dt>
            <dd>{project.repository.licenseLabel}</dd>
          </div>
        </dl>
      </section>

      <section className="case-tour shell" aria-labelledby="tour-heading">
        <header className="case-section-heading">
          <h2 id="tour-heading">A guided product tour</h2>
          <p>Three real views from the reviewed demo environment.</p>
        </header>

        <ol className="workbench-tour">
          {project.media.map((media, index) => (
            <li className="workbench-step" key={media.src}>
              <div className="workbench-step__annotation">
                <p>Frame {String(index + 1).padStart(2, "0")}</p>
                <h3>{projectTourTitles[index]}</h3>
              </div>
              <ProjectMedia
                media={media}
                priority={index === 0}
                sizes="(max-width: 59.99rem) calc(100vw - 2rem), 70vw"
                className={media.height > media.width ? "project-media--portrait" : undefined}
                linkToSource
              />
            </li>
          ))}
        </ol>
      </section>

      <aside className="case-action-rail" aria-label={`${project.name} project action`}>
        <div className="shell case-action-rail__inner">
          <p>
            {project.liveDemo
              ? "The public demo is available without a login."
              : "The hosted demo is under maintenance; the repository remains available."}
          </p>
          <a
            href={project.liveDemo?.href ?? project.repository.href}
            target="_blank"
            rel="noreferrer"
          >
            {project.liveDemo ? "Open demo" : "Review source"} {" "}
            <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </aside>

      <section className="case-content shell" aria-labelledby="brief-heading">
        <header className="case-section-heading">
          <h2 id="brief-heading">The operating brief</h2>
        </header>
        <div className="case-brief">
          <div className="case-brief__lead">
            <p>{project.caseStudy.problem.text}</p>
            <p>{project.caseStudy.systemResponse.text}</p>
            <p>{project.caseStudy.operationalContext.text}</p>
          </div>
          <div className="case-brief__role">
            <h3>My role</h3>
            <ClaimList claims={project.caseStudy.responsibilities} />
          </div>
        </div>
      </section>

      <section className="case-content shell" aria-labelledby="workflow-heading">
        <header className="case-section-heading">
          <h2 id="workflow-heading">How the system is used</h2>
          <p>Operational roles and the workflows they move through.</p>
        </header>
        <div className="case-ledger">
          <article className="case-ledger__row">
            <h3>Users and roles</h3>
            <ClaimList claims={project.caseStudy.usersAndRoles} />
          </article>
          <article className="case-ledger__row">
            <h3>Key workflows</h3>
            <ClaimList claims={project.caseStudy.keyWorkflows} />
          </article>
        </div>
      </section>

      <section className="case-content shell" aria-labelledby="engineering-heading">
        <header className="case-section-heading">
          <h2 id="engineering-heading">Engineering and reliability</h2>
          <p>Implementation decisions tied to how the system behaves.</p>
        </header>
        <div className="case-ledger">
          <article className="case-ledger__row">
            <h3>Technical implementation</h3>
            <ClaimList claims={project.caseStudy.technicalImplementation} />
          </article>
          <article className="case-ledger__row">
            <h3>Testing and reliability</h3>
            <ClaimList claims={project.caseStudy.testingAndReliability} />
          </article>
          <article className="case-ledger__row case-ledger__row--compact">
            <h3>Key technologies</h3>
            <p>
              {project.technologies.map((technology) => technology.name).join(" · ")}
            </p>
          </article>
        </div>
      </section>

      <section className="case-content case-content--last shell" aria-labelledby="reflection-heading">
        <header className="case-section-heading">
          <h2 id="reflection-heading">Limits and lessons</h2>
        </header>
        <div className="case-ledger">
          <article className="case-ledger__row">
            <h3>Challenges and tradeoffs</h3>
            <ClaimList claims={project.caseStudy.challengesAndTradeoffs} />
          </article>
          <article className="case-ledger__row">
            <h3>Lessons learned</h3>
            <ClaimList claims={project.caseStudy.lessonsLearned} />
          </article>
        </div>
        {project.caseStudy.contentWarnings.map((warning) => (
          <p className="evidence-note" key={warning.text}>
            <strong>Evidence boundary.</strong> {warning.text}
          </p>
        ))}
      </section>

      <section className="case-next" aria-labelledby="next-project-heading">
        <div className="shell case-next__inner">
          <p>Continue with</p>
          <h2 id="next-project-heading">
            <Link href={nextProject.caseStudyHref}>{nextProject.name}</Link>
          </h2>
          <Link className="text-action" href={nextProject.caseStudyHref}>
            Next case study <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <footer className="route-footer shell">
        <p>Yours,</p>
        <p className="route-footer__name">Aaron</p>
        <p>
          <a href="mailto:aarontagapan@gmail.com">aarontagapan@gmail.com</a>
        </p>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareJsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </main>
  );
}
