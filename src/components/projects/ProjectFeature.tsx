import Link from "next/link";
import type { FeaturedProject } from "@/types/portfolio";
import { ProjectMedia } from "./ProjectMedia";

type ProjectFeatureProps = {
  project: FeaturedProject;
  index: number;
};

export function ProjectFeature({ project, index }: ProjectFeatureProps) {
  const indexLabel = String(index).padStart(2, "0");

  return (
    <article
      id={project.id}
      className={`project-feature project-feature--${index % 2 === 0 ? "reverse" : "forward"}`}
    >
      <div className="project-feature__intro">
        <p className="project-feature__index">
          {indexLabel} · {project.type} · {project.period.label}
        </p>
        <h3>
          <Link href={project.caseStudyHref}>{project.name}</Link>
        </h3>
        <p className="project-feature__statement">{project.statement.text}</p>
      </div>

      <Link
        className="project-feature__media"
        href={project.caseStudyHref}
        aria-label={`Read the ${project.name} case study`}
      >
        <ProjectMedia
          media={project.media[0]}
          priority={index === 1}
          sizes="(max-width: 59.99rem) calc(100vw - 2rem), (max-width: 99.99rem) 58vw, 56rem"
        />
      </Link>

      <div className="project-feature__details">
        <dl className="project-feature__ledger">
          <div>
            <dt>Problem</dt>
            <dd>{project.caseStudy.problem.text}</dd>
          </div>
          <div>
            <dt>Built</dt>
            <dd>{project.caseStudy.systemResponse.text}</dd>
          </div>
          <div>
            <dt>Role</dt>
            <dd>{project.caseStudy.responsibilities[0].text}</dd>
          </div>
        </dl>

        <p className="project-feature__technologies">
          {project.technologies
            .slice(0, 6)
            .map((technology) => technology.name)
            .join(" · ")}
        </p>

        <div className="project-feature__actions">
          <Link className="action action--primary" href={project.caseStudyHref}>
            Read case study
          </Link>
          <a href={project.repository.href} target="_blank" rel="noreferrer">
            Review source <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          {project.liveDemo ? (
            <a href={project.liveDemo.href} target="_blank" rel="noreferrer">
              Open demo <span aria-hidden="true">↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : (
            <span className="project-feature__status">
              Demo under maintenance
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
