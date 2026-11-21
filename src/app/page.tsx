import Link from "next/link";
import { HeroScene } from "@/components/hero/HeroScene";
import { ProjectFeature } from "@/components/projects/ProjectFeature";
import { SectionHeading } from "@/components/ui/LayerMark";
import { credentials, education } from "@/data/credentials";
import { primaryExperience } from "@/data/experience";
import { profile } from "@/data/profile";
import { featuredProjects } from "@/data/projects";

const capabilityGroups = [
  {
    title: "IT operations",
    note: "Keeping machines and users running.",
    items: ["Windows 10/11", "Hardware diagnostics", "Driver management", "VirtualBox", "Linux fundamentals", "PC assembly"],
  },
  {
    title: "Systems and cloud",
    note: "Where the data lives and ships.",
    items: ["Supabase", "Firebase", "Vercel", "PostgreSQL", "REST APIs", "GitHub"],
  },
  {
    title: "Business systems",
    note: "Turning how work happens into specs.",
    items: ["Requirements", "Process flows", "Functional specifications", "UAT", "QA", "Data modeling"],
  },
  {
    title: "AI-assisted prototyping",
    note: "Building working tools to test ideas.",
    items: ["AI-assisted coding", "Next.js", "React", "TypeScript", "Python", "Workflow automation"],
  },
] as const;

const external = { target: "_blank", rel: "noreferrer" } as const;

function NewTab() {
  return <span className="sr-only"> (opens in a new tab)</span>;
}

export default function Home() {
  return (
    <main id="main-content">
      {/* Hero */}
      <section
        aria-labelledby="hero-title"
        className="relative isolate lg:h-[160svh]"
      >
        <div className="relative flex min-h-[100svh] flex-col overflow-hidden lg:sticky lg:top-0 lg:h-svh">
        <div className="relative mt-16 h-[40svh] w-full lg:absolute lg:inset-0 lg:mt-0 lg:h-auto">
          <HeroScene />
        </div>

        <div className="hero-exit shell relative flex flex-1 flex-col justify-end pb-10 lg:justify-center lg:pb-0 lg:pt-24">
          <div className="max-w-[44rem]">
            <p className="hero-fade flex items-center gap-2.5 text-[0.95rem] text-ink-2">
              <span className="live-dot" aria-hidden="true" />
              Open to entry-level IT and systems support roles
            </p>
            <h1
              id="hero-title"
              className="mt-6 text-[clamp(2.75rem,6.6vw,5.4rem)] font-semibold leading-[0.95] tracking-[-0.045em]"
            >
              <span className="hero-line"><span>People, process</span></span>
              <span className="hero-line"><span>and the systems</span></span>
              <span className="hero-line"><span>between them.</span></span>
            </h1>
            <p className="hero-fade mt-7 max-w-[34rem] text-[1.15rem] leading-relaxed text-ink-2">
              I’m Aaron Tagapan, an Information Systems graduate. I turn requirements into
              working tools through process analysis, documentation, testing and prototypes.
            </p>
            <div className="hero-fade mt-9 flex flex-wrap items-center gap-3">
              <a className="btn btn-primary" href="#work">
                View selected work
              </a>
              <Link className="btn btn-ghost" href={profile.resume.pageHref}>
                Read résumé
              </Link>
            </div>
          </div>

          <dl className="hero-fade mt-14 grid max-w-[40rem] grid-cols-1 gap-4 border-t border-line pt-6 text-[0.92rem] sm:grid-cols-3 lg:mt-20">
            <div>
              <dt className="font-semibold text-ink">486-hour internship</dt>
              <dd className="text-mute">MIS, Gardenia Philippines</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">2 live demos</dt>
              <dd className="text-mute">No login required</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">BS Information Systems</dt>
              <dd className="text-mute">National University, 2026</dd>
            </div>
          </dl>
        </div>
        </div>
      </section>

      {/* Work: the systems layer */}
      <section id="work" aria-labelledby="work-heading" className="shell scroll-mt-24 pb-28 pt-16 sm:pb-36 lg:pt-6">
        <SectionHeading
          id="work-heading"
          layer="systems"
          title="Selected work"
          intro="Two personal prototypes for real operating problems. I mapped the workflows, built them with AI-assisted coding, then tested and documented them."
        />
        <nav aria-label="Jump to a project" className="mt-8 flex flex-wrap gap-x-6 gap-y-2 md:ml-[25%] md:pl-2">
          {featuredProjects.map((project, index) => (
            <a
              key={project.id}
              href={`#${project.id}`}
              className="group inline-flex items-baseline gap-2 text-[0.98rem] text-ink-2 transition-colors hover:text-ink"
            >
              <span className="text-[0.82rem] tabular-nums text-mute">Fig. {index + 1}</span>
              <span className="border-b border-line-2 pb-0.5 transition-colors group-hover:border-spark">
                {project.name}
              </span>
            </a>
          ))}
        </nav>
        <div className="mt-20 grid gap-32 sm:gap-40">
          {featuredProjects.map((project, index) => (
            <ProjectFeature key={project.id} project={project} index={index + 1} />
          ))}
        </div>
      </section>

      {/* Experience: the process layer */}
      <section id="experience" aria-labelledby="experience-heading" className="shell scroll-mt-24 pb-28 sm:pb-36">
        <SectionHeading
          id="experience-heading"
          layer="process"
          title="MIS internship"
          intro="Requirements, process analysis, QA testing and UAT inside an enterprise MIS team."
        />
        <article className="mt-14 grid gap-8 md:grid-cols-12">
          <dl className="grid content-start gap-5 text-[0.95rem] md:col-span-3">
            <div>
              <dt className="text-mute">Period</dt>
              <dd className="text-ink">{primaryExperience.period.label}</dd>
            </div>
            <div>
              <dt className="text-mute">Time on site</dt>
              <dd className="tabular-nums text-ink">{primaryExperience.hours} hours</dd>
            </div>
            <div>
              <dt className="text-mute">Location</dt>
              <dd className="text-ink">{primaryExperience.location}</dd>
            </div>
          </dl>
          <div className="md:col-span-9">
            <h3 className="text-[clamp(1.7rem,3vw,2.3rem)] font-semibold leading-tight">
              {primaryExperience.role}
            </h3>
            <p className="mt-1 text-[1.05rem] text-ink-2">
              {primaryExperience.department}, {primaryExperience.organization}
            </p>
            <p className="mt-8 max-w-[40rem] text-[1.1rem] leading-relaxed text-ink">
              {primaryExperience.summary.text}
            </p>
            <ol className="mt-10 grid border-t border-line">
              {primaryExperience.highlights.map((highlight, index) => (
                <li
                  key={highlight.text}
                  className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-2 border-b border-line py-5 text-ink-2"
                >
                  <span className="pt-0.5 text-[0.85rem] tabular-nums text-mute">{index + 1}</span>
                  <span className="max-w-[44rem] leading-relaxed">{highlight.text}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-[0.95rem] text-mute">
              Focus areas: {primaryExperience.focusAreas.join(", ")}.
            </p>
          </div>
        </article>
      </section>

      {/* Skills */}
      <section id="skills" aria-labelledby="skills-heading" className="shell scroll-mt-24 pb-28 sm:pb-36">
        <SectionHeading
          id="skills-heading"
          title="Skills and tools"
          intro="What I have used for support, documentation, testing, systems work and personal prototypes."
        />
        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {capabilityGroups.map((group) => (
            <article key={group.title} className="border-t border-line-2 pt-5">
              <h3 className="text-[1.2rem] font-semibold">{group.title}</h3>
              <p className="mt-1 text-[0.92rem] text-mute">{group.note}</p>
              <ul className="mt-5 grid gap-2 text-[0.98rem] text-ink-2">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-24 grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <h3 className="text-[1.45rem] font-semibold">Education</h3>
            <ol className="mt-6 grid gap-8">
              {education.map((item) => (
                <li key={item.id} className="grid gap-1">
                  <p className="text-[0.9rem] tabular-nums text-mute">{item.period.label}</p>
                  <p className="font-display text-[1.15rem] font-semibold leading-snug">{item.qualification}</p>
                  <p className="text-ink-2">{item.institution}</p>
                  {item.recognition ? <p className="text-[0.95rem] text-spark">{item.recognition}</p> : null}
                </li>
              ))}
            </ol>
          </div>
          <div className="md:col-span-7">
            <h3 className="text-[1.45rem] font-semibold">Training</h3>
            <table className="mt-6 w-full text-left text-[0.97rem]">
              <caption className="sr-only">Certifications and training</caption>
              <thead className="sr-only">
                <tr>
                  <th scope="col">Course</th>
                  <th scope="col">Provider</th>
                  <th scope="col">Year</th>
                </tr>
              </thead>
              <tbody className="border-t border-line">
                {credentials.map((item) => (
                  <tr key={item.id} className="border-b border-line">
                    <td className="py-3 pr-4 text-ink">{item.title}</td>
                    <td className="hidden py-3 pr-4 text-mute sm:table-cell">{item.provider}</td>
                    <td className="py-3 text-right tabular-nums text-mute">{item.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact: the people layer */}
      <footer id="contact" aria-labelledby="contact-heading" className="shell pb-10">
        <SectionHeading id="contact-heading" layer="people" title="Hiring for IT operations or systems support?" />
        <div className="mt-10 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-9 md:col-start-4">
            <p className="max-w-[36rem] text-[1.1rem] text-ink-2">{profile.availability.text}</p>
            <a
              href={`mailto:${profile.email}`}
              className="group mt-10 inline-block font-display text-[clamp(1.35rem,4.2vw,3rem)] font-semibold tracking-[-0.03em] text-ink"
            >
              <span className="bg-[linear-gradient(var(--color-spark),var(--color-spark))] bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-500 ease-[var(--ease-out-expo)] group-hover:bg-[length:100%_2px] group-focus-visible:bg-[length:100%_2px]">
                {profile.email}
              </span>
            </a>
            <nav aria-label="Contact references" className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[1rem]">
              <a className="link" href="https://www.linkedin.com/in/aaron-tagapan1" {...external}>
                LinkedIn
                <NewTab />
              </a>
              <a className="link" href="https://github.com/Aaron840588" {...external}>
                GitHub
                <NewTab />
              </a>
              <Link className="link" href="/resume">
                Résumé
              </Link>
            </nav>
          </div>
        </div>
        <div className="mt-28 flex flex-wrap justify-between gap-4 border-t border-line pt-6 text-[0.88rem] text-mute">
          <p>Aaron Tagapan, {profile.location}</p>
          <p>Designed and built in 2026</p>
        </div>
      </footer>
    </main>
  );
}
