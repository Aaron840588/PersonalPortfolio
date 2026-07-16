import Link from "next/link";
import type { FeaturedProject } from "@/types/portfolio";
import { ProjectMedia } from "./ProjectMedia";

type ProjectFeatureProps = {
  project: FeaturedProject;
  index: number;
};

export function ProjectFeature({ project, index }: ProjectFeatureProps) {
  return (
    <article className="project">
      <header className="project__header">
        <div>
          <p className="eyebrow mono">
            {String(index).padStart(2, "0")} / {project.type} / {project.period.label}
          </p>
          <h3>{project.name}</h3>
        </div>
        <p>{project.statement.text}</p>
      </header>

      <Link className="project__media-link" href={project.caseStudyHref}>
        <ProjectMedia
          media={project.media[0]}
          sizes="(max-width: 1199px) calc(100vw - 2rem), 1160px"
        />
      </Link>

      <dl className="project__details">
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

      <div className="project__footer">
        <p className="project__technologies">
          <span>Key technologies</span>
          {project.technologies
            .slice(0, 6)
            .map((technology) => technology.name)
            .join(", ")}
        </p>
        <nav className="project__links" aria-label={`${project.name} links`}>
          {project.liveDemo ? (
            <a href={project.liveDemo.href} target="_blank" rel="noreferrer">
              Live demo <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <span className="project__status">
              <span className="status-dot" aria-hidden="true" />
              Live demo under maintenance
            </span>
          )}
          <a href={project.repository.href} target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <Link href={project.caseStudyHref}>
            Case study <span aria-hidden="true">→</span>
          </Link>
        </nav>
      </div>
    </article>
  );
}
