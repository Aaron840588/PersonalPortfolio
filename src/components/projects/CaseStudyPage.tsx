import Link from "next/link";
import type { FeaturedProject, SourcedClaim } from "@/types/portfolio";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
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

  return (
    <main id="main-content" className="case-study">
      <section className="case-intro shell">
        <Link className="back-link" href="/#work">
          <span aria-hidden="true">←</span> Back to selected work
        </Link>

        <div className="case-intro__grid">
          <div>
            <p className="eyebrow mono">
              Case study / {project.type} / {project.period.label}
            </p>
            <h1>{project.name}</h1>
            <p className="case-intro__statement">{project.statement.text}</p>
          </div>
          <div className="case-intro__summary">
            <p>{project.summary.text}</p>
            <nav className="case-intro__links" aria-label={`${project.name} project links`}>
              {project.liveDemo ? (
                <a href={project.liveDemo.href} target="_blank" rel="noreferrer">
                  Live demo <span aria-hidden="true">↗</span>
                </a>
              ) : null}
              <a href={project.repository.href} target="_blank" rel="noreferrer">
                GitHub repository <span aria-hidden="true">↗</span>
              </a>
            </nav>
            <p className={`demo-note demo-note--${project.demoStatus.availability}`}>
              <span className="status-dot" aria-hidden="true" />
              <span>
                <strong>{project.demoStatus.label}.</strong>{" "}
                {project.demoStatus.detail}
              </span>
            </p>
          </div>
        </div>

        <Reveal>
          <ProjectMedia
            media={project.media[0]}
            priority
            sizes="(max-width: 1199px) calc(100vw - 2rem), 1160px"
            className="project-media--hero"
          />
        </Reveal>

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

      <section className="case-section shell" aria-labelledby="overview-heading">
        <SectionHeader
          eyebrow="Overview"
          title="From operational problem to working system."
          titleId="overview-heading"
        />
        <dl className="case-summary-grid">
          <div>
            <dt>Problem</dt>
            <dd>{project.caseStudy.problem.text}</dd>
          </div>
          <div>
            <dt>What I built</dt>
            <dd>{project.caseStudy.systemResponse.text}</dd>
          </div>
          <div>
            <dt>My role</dt>
            <dd>{project.caseStudy.responsibilities[0].text}</dd>
          </div>
        </dl>
        <p className="case-context">{project.caseStudy.operationalContext.text}</p>
      </section>

      <section className="case-section shell" aria-labelledby="workflows-heading">
        <SectionHeader
          eyebrow="Selected workflows"
          title="The system in practice."
          titleId="workflows-heading"
        />
        <div className="case-two-column">
          <div>
            <h3>Users and roles</h3>
            <ClaimList claims={project.caseStudy.usersAndRoles} />
          </div>
          <div>
            <h3>Key workflows</h3>
            <ClaimList claims={project.caseStudy.keyWorkflows} />
          </div>
        </div>
      </section>

      {project.media.length > 1 ? (
        <section className="case-section shell" aria-labelledby="screens-heading">
          <SectionHeader
            eyebrow="Interface"
            title="Selected views from the synthetic demo."
            titleId="screens-heading"
          />
          <div className="media-gallery">
            {project.media.slice(1).map((media) => (
              <Reveal key={media.src}>
                <ProjectMedia media={media} sizes="(max-width: 767px) 100vw, 50vw" />
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}

      <section className="case-section shell" aria-labelledby="implementation-heading">
        <SectionHeader
          eyebrow="Implementation"
          title="Technical choices tied to reliability."
          titleId="implementation-heading"
        />
        <div className="case-two-column">
          <div>
            <h3>Technical implementation</h3>
            <ClaimList claims={project.caseStudy.technicalImplementation} />
          </div>
          <div>
            <h3>Testing and reliability</h3>
            <ClaimList claims={project.caseStudy.testingAndReliability} />
          </div>
        </div>
        <div className="technology-line">
          <h3>Key technologies</h3>
          <p>
            {project.technologies.map((technology) => technology.name).join(", ")}
          </p>
        </div>
      </section>

      <section className="case-section shell" aria-labelledby="reflection-heading">
        <SectionHeader
          eyebrow="Reflection"
          title="Tradeoffs, limits, and lessons."
          titleId="reflection-heading"
        />
        <div className="case-two-column">
          <div>
            <h3>Challenges and tradeoffs</h3>
            <ClaimList claims={project.caseStudy.challengesAndTradeoffs} />
          </div>
          <div>
            <h3>Lessons learned</h3>
            <ClaimList claims={project.caseStudy.lessonsLearned} />
          </div>
        </div>
        {project.caseStudy.contentWarnings.map((warning) => (
          <p className="source-note" key={warning.text}>
            <strong>Evidence boundary:</strong> {warning.text}
          </p>
        ))}
      </section>

      <section className="case-next">
        <div className="shell case-next__inner">
          <div>
            <p className="eyebrow mono">Next case study</p>
            <h2>{nextProject.name}</h2>
          </div>
          <Link href={nextProject.caseStudyHref}>
            Read case study <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareJsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </main>
  );
}
