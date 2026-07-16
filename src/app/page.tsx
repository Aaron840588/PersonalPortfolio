import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectFeature } from "@/components/projects/ProjectFeature";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { education } from "@/data/credentials";
import { primaryExperience } from "@/data/experience";
import { profile } from "@/data/profile";
import { featuredProjects } from "@/data/projects";

const capabilityGroups = [
  {
    title: "IT Operations",
    items: [
      "Windows 10/11",
      "Hardware diagnostics",
      "Driver management",
      "VirtualBox",
      "Linux fundamentals",
      "PC assembly",
    ],
  },
  {
    title: "Systems & Cloud",
    items: [
      "Supabase",
      "Firebase",
      "Vercel",
      "PostgreSQL",
      "REST APIs",
      "GitHub",
    ],
  },
  {
    title: "Business Systems",
    items: [
      "Requirements",
      "Process flows",
      "Functional specifications",
      "UAT",
      "QA",
      "Data modeling",
    ],
  },
  {
    title: "Development",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "AI workflow automation",
    ],
  },
] as const;

export default function Home() {
  return (
    <main id="main-content">
      <section className="home-hero shell" aria-labelledby="hero-title">
        <div className="home-hero__intro">
          <p className="home-hero__name">Aaron Tagapan</p>
          <p className="home-hero__label mono">{profile.professionalLabel}</p>
          <h1 id="hero-title">{profile.heroHeadline.text}</h1>
          <p className="home-hero__summary">
            Information Systems graduate with practical experience in enterprise
            documentation, application testing, cloud platforms, databases, and
            operational software.
          </p>
          <div className="home-hero__actions">
            <a className="button button--primary" href="#work">
              View work
            </a>
            <a
              className="button button--secondary"
              href={profile.resume.fileHref}
              download
            >
              Download résumé
            </a>
          </div>
          <nav className="home-hero__links" aria-label="Professional links">
            <a
              href="https://github.com/Aaron840588"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/aaron-tagapan1"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>

        <div className="home-hero__meta" aria-label="Professional summary">
          <p>
            <span className="status-dot" aria-hidden="true" />
            Open to entry-level opportunities
          </p>
          <p>Los Baños, Laguna</p>
          <p>486-hour MIS internship</p>
          <p>BS Information Systems · 2026</p>
        </div>
      </section>

      <section id="work" className="section shell" aria-labelledby="work-heading">
        <SectionHeader
          eyebrow="Selected work"
          title="Systems built around real operational needs."
          description="Two project case studies spanning inventory, production, customer records, scheduling, billing, and day-to-day business workflows."
          titleId="work-heading"
        />
        <div className="project-list">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.id}>
              <ProjectFeature project={project} index={index + 1} />
            </Reveal>
          ))}
        </div>
      </section>

      <section
        id="experience"
        className="section shell"
        aria-labelledby="experience-heading"
      >
        <SectionHeader
          eyebrow="Experience"
          title="Enterprise analysis grounded in documentation and validation."
          titleId="experience-heading"
        />
        <Reveal className="experience-entry">
          <div className="experience-entry__meta mono">
            <p>{primaryExperience.period.label}</p>
            <p>{primaryExperience.location}</p>
            <p>{primaryExperience.hours} hours</p>
          </div>
          <div className="experience-entry__body">
            <p className="experience-entry__organization">
              {primaryExperience.organization}
            </p>
            <h3>{primaryExperience.role}</h3>
            <p className="experience-entry__department">
              {primaryExperience.department}
            </p>
            <p className="experience-entry__summary">
              {primaryExperience.summary.text}
            </p>
            <ul className="experience-points">
              {primaryExperience.highlights.map((highlight) => (
                <li key={highlight.text}>{highlight.text}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <section id="skills" className="section shell" aria-labelledby="skills-heading">
        <SectionHeader
          eyebrow="Capabilities"
          title="A practical toolkit for supporting systems and the people using them."
          titleId="skills-heading"
        />
        <div className="capability-list">
          {capabilityGroups.map((group) => (
            <article className="capability-row" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.items.join(", ")}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell" aria-labelledby="education-heading">
        <SectionHeader
          eyebrow="Education"
          title="Information Systems foundations."
          titleId="education-heading"
        />
        <div className="education-list">
          {education.map((item) => (
            <article className="education-row" key={item.id}>
              <p className="mono">{item.period.label}</p>
              <div>
                <h3>{item.qualification}</h3>
                <p>{item.institution}</p>
                {item.recognition ? <small>{item.recognition}</small> : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-strip" aria-labelledby="contact-heading">
        <div className="shell contact-strip__inner">
          <div>
            <p className="eyebrow mono">Contact</p>
            <h2 id="contact-heading">
              Open to roles where systems meet day-to-day operations.
            </h2>
            <p>
              IT operations, application support, systems analysis, cloud
              support, QA/UAT, and business technology.
            </p>
          </div>
          <div className="contact-strip__links">
            <a href="mailto:aarontagapan@gmail.com">
              aarontagapan@gmail.com <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/aaron-tagapan1"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://github.com/Aaron840588"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <Link href="/resume">
              View résumé <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell">
          <p>© 2026 Aaron Tagapan</p>
          <p>Los Baños, Laguna, Philippines</p>
        </div>
      </footer>
    </main>
  );
}
