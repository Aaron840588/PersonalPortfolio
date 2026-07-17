import Link from "next/link";
import { ProjectFeature } from "@/components/projects/ProjectFeature";
import { education } from "@/data/credentials";
import { primaryExperience } from "@/data/experience";
import { profile } from "@/data/profile";
import { featuredProjects } from "@/data/projects";

const capabilityGroups = [
  {
    title: "IT operations",
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
    title: "Systems and cloud",
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
    title: "Business systems",
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
    title: "AI-assisted prototyping",
    items: [
      "AI-assisted coding",
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "Workflow automation",
    ],
  },
] as const;

export default function Home() {
  return (
    <main id="main-content" className="home-page">
      <section className="home-hero shell" aria-labelledby="hero-title">
        <aside className="home-hero__identity" aria-label="Profile at a glance">
          <p className="home-hero__role">{profile.professionalLabel}</p>
          <dl className="home-hero__facts">
            <div>
              <dt>Status</dt>
              <dd>Open to entry-level opportunities</dd>
            </div>
            <div>
              <dt>Based in</dt>
              <dd>Los Baños, Laguna</dd>
            </div>
            <div>
              <dt>Experience</dt>
              <dd>486-hour MIS internship</dd>
            </div>
            <div>
              <dt>Education</dt>
              <dd>BS Information Systems · 2026</dd>
            </div>
          </dl>
        </aside>

        <div className="home-hero__body">
          <h1 id="hero-title">{profile.heroHeadline.text}</h1>
          <p className="home-hero__summary">{profile.about.text}</p>
          <div className="home-hero__actions" aria-label="Portfolio actions">
            <a className="action action--primary" href="#work">
              View selected work
            </a>
            <Link className="text-action" href={profile.resume.pageHref}>
              Read résumé <span aria-hidden="true">→</span>
            </Link>
          </div>
          <nav className="home-hero__references" aria-label="Professional profiles">
            <a
              href="https://github.com/Aaron840588"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              href="https://www.linkedin.com/in/aaron-tagapan1"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <span aria-hidden="true">↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </nav>
        </div>
      </section>

      <section id="work" className="home-work shell" aria-labelledby="work-heading">
        <header className="chapter-heading">
          <h2 id="work-heading">Selected work</h2>
          <p>Two personal projects · 2026</p>
        </header>
        <div className="project-list">
          {featuredProjects.map((project, index) => (
            <ProjectFeature key={project.id} project={project} index={index + 1} />
          ))}
        </div>
      </section>

      <section
        id="experience"
        className="experience-section shell"
        aria-labelledby="experience-heading"
      >
        <header className="experience-section__heading">
          <h2 id="experience-heading">MIS internship</h2>
          <p>
            Documentation, analysis, and validation inside a working MIS team.
          </p>
        </header>

        <article className="experience-record">
          <div className="experience-record__meta">
            <p>{primaryExperience.period.label}</p>
            <p>{primaryExperience.location}</p>
            <p>{primaryExperience.hours} hours</p>
          </div>
          <div className="experience-record__body">
            <p className="experience-record__organization">
              {primaryExperience.organization}
            </p>
            <h3>{primaryExperience.role}</h3>
            <p className="experience-record__department">
              {primaryExperience.department}
            </p>
            <p className="experience-record__summary">
              {primaryExperience.summary.text}
            </p>
            <ul className="experience-points">
              {primaryExperience.highlights.map((highlight) => (
                <li key={highlight.text}>{highlight.text}</li>
              ))}
            </ul>
          </div>
        </article>
      </section>

      <section id="skills" className="background-section" aria-labelledby="skills-heading">
        <div className="shell background-section__inner">
          <header className="background-section__heading">
            <h2 id="skills-heading">Skills and tools</h2>
            <p>
              Tools I have used for support, documentation, testing, systems work,
              and personal prototypes.
            </p>
          </header>

          <div className="background-section__grid">
            <div className="capability-index" aria-label="Capabilities">
              {capabilityGroups.map((group) => (
                <article className="capability-row" key={group.title}>
                  <h3>{group.title}</h3>
                  <p>{group.items.join(" · ")}</p>
                </article>
              ))}
            </div>

            <div className="education-block">
              <h3>Education</h3>
              <div className="education-list">
                {education.map((item) => (
                  <article className="education-row" key={item.id}>
                    <p>{item.period.label}</p>
                    <div>
                      <h4>{item.qualification}</h4>
                      <p>{item.institution}</p>
                      {item.recognition ? <small>{item.recognition}</small> : null}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="letter-close shell" aria-labelledby="contact-heading">
        <div className="letter-close__body">
          <p className="letter-close__salutation">Availability</p>
          <h2 id="contact-heading">
            Open to entry-level IT operations and systems support roles.
          </h2>
          <p>{profile.availability.text}</p>
          <a className="letter-close__email" href={`mailto:${profile.email}`}>
            {profile.email} <span aria-hidden="true">↗</span>
          </a>
          <nav className="letter-close__references" aria-label="Contact references">
            <a
              href="https://www.linkedin.com/in/aaron-tagapan1"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <span aria-hidden="true">↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              href="https://github.com/Aaron840588"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <Link href="/resume">
              Résumé <span aria-hidden="true">→</span>
            </Link>
          </nav>
        </div>
        <div className="letter-close__signoff">
          <p>Contact</p>
          <p className="letter-close__name">Aaron Tagapan</p>
          <p>Los Baños, Laguna · 2026</p>
        </div>
      </footer>
    </main>
  );
}
