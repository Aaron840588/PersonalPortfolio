import Link from "next/link";
import { HeroScene } from "@/components/hero/HeroScene";
import { ProjectFeature } from "@/components/projects/ProjectFeature";
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
              <dt className="font-semibold text-ink">Dean’s Lister</dt>
              <dd className="text-mute">BS Information Systems, 2026</dd>
            </div>
          </dl>
        </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" aria-labelledby="work-heading" className="shell scroll-mt-24 pb-24 pt-16 sm:pb-32 lg:pt-4">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 id="work-heading" className="text-[clamp(2.4rem,5.5vw,4.25rem)] font-semibold">
              Selected work
            </h2>
            <p className="mt-4 text-[1.1rem] text-ink-2">
              Two personal prototypes for real operating problems, built with AI-assisted coding
              and reviewed, tested and documented by me.
            </p>
          </div>
          <nav aria-label="Jump to a project" className="flex flex-wrap gap-2">
            {featuredProjects.map((project) => (
              <a
                key={project.id}
                href={`#${project.id}`}
                className="rounded-full border border-line px-4 py-2 text-[0.92rem] text-ink-2 transition-colors hover:border-signal hover:text-ink"
              >
                {project.name}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-16 grid gap-28 sm:gap-36">
          {featuredProjects.map((project, index) => (
            <ProjectFeature key={project.id} project={project} index={index + 1} />
          ))}
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        aria-labelledby="experience-heading"
        className="scroll-mt-24 border-y border-line bg-night-2 py-24 sm:py-32"
      >
        <div className="shell grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="experience-heading" className="text-[clamp(2.2rem,4.5vw,3.5rem)] font-semibold">
              MIS internship
            </h2>
            <p className="mt-4 text-ink-2">
              Functional specifications, process analysis, QA testing and UAT inside an
              enterprise MIS team.
            </p>
          </div>

          <article className="relative rounded-3xl border border-line bg-panel/60 p-7 sm:p-10 lg:col-span-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-ink-2">{primaryExperience.organization}</p>
                <h3 className="mt-1 text-[1.9rem] font-semibold">{primaryExperience.role}</h3>
                <p className="mt-1 text-mute">
                  {primaryExperience.department}, {primaryExperience.location}
                </p>
              </div>
              <div className="text-right text-[0.92rem]">
                <p className="text-ink">{primaryExperience.period.label}</p>
                <p className="text-spark">{primaryExperience.hours} hours</p>
              </div>
            </div>
            <p className="mt-8 text-[1.08rem] text-ink">{primaryExperience.summary.text}</p>
            <ul className="claim-list mt-6">
              {primaryExperience.highlights.map((highlight) => (
                <li key={highlight.text}>{highlight.text}</li>
              ))}
            </ul>
            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Focus areas">
              {primaryExperience.focusAreas.map((area) => (
                <li key={area} className="rounded-full bg-line/70 px-3 py-1 text-[0.82rem] text-ink-2">
                  {area}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" aria-labelledby="skills-heading" className="shell scroll-mt-24 py-24 sm:py-32">
        <div className="max-w-2xl">
          <h2 id="skills-heading" className="text-[clamp(2.2rem,4.5vw,3.5rem)] font-semibold">
            Skills and tools
          </h2>
          <p className="mt-4 text-ink-2">
            What I have used for support, documentation, testing, systems work and personal
            prototypes.
          </p>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
          {capabilityGroups.map((group) => (
            <article key={group.title} className="bg-night p-7 sm:p-9">
              <h3 className="text-[1.45rem] font-semibold">{group.title}</h3>
              <p className="mt-1 text-[0.95rem] text-mute">{group.note}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-line-2 px-3 py-1.5 text-[0.9rem] text-ink-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-20 grid gap-14 lg:grid-cols-2">
          <div>
            <h3 className="text-[1.6rem] font-semibold">Education</h3>
            <ol className="mt-6 grid gap-6 border-l border-line-2 pl-6">
              {education.map((item) => (
                <li key={item.id} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[1.86rem] top-2 size-2.5 rotate-45 border border-signal bg-night"
                  />
                  <p className="text-[0.9rem] text-mute">{item.period.label}</p>
                  <p className="mt-1 font-display text-[1.2rem] font-semibold">{item.qualification}</p>
                  <p className="text-ink-2">{item.institution}</p>
                  {item.recognition ? <p className="mt-1 text-[0.92rem] text-spark">{item.recognition}</p> : null}
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="text-[1.6rem] font-semibold">Training</h3>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {credentials.map((item) => (
                <li key={item.id} className="flex items-baseline justify-between gap-4 py-3">
                  <span>
                    <span className="text-ink">{item.title}</span>
                    <span className="block text-[0.88rem] text-mute">{item.provider}</span>
                  </span>
                  <span className="text-[0.88rem] text-mute tabular-nums">{item.year}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer id="contact" aria-labelledby="contact-heading" className="relative overflow-hidden border-t border-line">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 h-[70%] bg-[radial-gradient(50%_70%_at_50%_100%,rgba(61,107,255,0.18),transparent_70%)]"
        />
        <div className="shell py-24 sm:py-36">
          <h2
            id="contact-heading"
            className="max-w-4xl text-[clamp(2.4rem,6vw,4.75rem)] font-semibold leading-[1]"
          >
            Hiring for IT operations or systems support?
          </h2>
          <p className="mt-6 max-w-xl text-[1.1rem] text-ink-2">{profile.availability.text}</p>
          <a
            href={`mailto:${profile.email}`}
            className="group mt-10 inline-flex items-center gap-3 font-display text-[clamp(1.3rem,3.6vw,2.4rem)] font-semibold text-signal"
          >
            <span className="border-b border-signal/40 pb-1 transition-colors group-hover:border-signal">
              {profile.email}
            </span>
          </a>
          <nav aria-label="Contact references" className="mt-12 flex flex-wrap gap-3">
            <a className="btn btn-ghost" href="https://www.linkedin.com/in/aaron-tagapan1" {...external}>
              LinkedIn
              <NewTab />
            </a>
            <a className="btn btn-ghost" href="https://github.com/Aaron840588" {...external}>
              GitHub
              <NewTab />
            </a>
            <Link className="btn btn-ghost" href="/resume">
              Résumé
            </Link>
          </nav>
          <div className="mt-24 flex flex-wrap justify-between gap-4 border-t border-line pt-6 text-[0.9rem] text-mute">
            <p>Aaron Tagapan, {profile.location}</p>
            <p>Built with Next.js, React Three Fiber and Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
