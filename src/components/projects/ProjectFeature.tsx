"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import type { FeaturedProject } from "@/types/portfolio";

type ProjectFeatureProps = {
  project: FeaturedProject;
  index: number;
};

function ExternalMark() {
  return (
    <>
      <svg aria-hidden="true" viewBox="0 0 12 12" className="size-3" fill="none">
        <path d="M3.5 2.5h6v6M9.5 2.5l-7 7" stroke="currentColor" strokeWidth="1.4" />
      </svg>
      <span className="sr-only"> (opens in a new tab)</span>
    </>
  );
}

/** Corner registration ticks, as on a sheet in a drawing set. */
function RegistrationTicks() {
  const tick = "absolute size-3 border-ink-2/70";
  return (
    <span aria-hidden="true" className="pointer-events-none absolute -inset-2">
      <span className={`${tick} left-0 top-0 border-l border-t`} />
      <span className={`${tick} right-0 top-0 border-r border-t`} />
      <span className={`${tick} bottom-0 left-0 border-b border-l`} />
      <span className={`${tick} bottom-0 right-0 border-b border-r`} />
    </span>
  );
}

export function ProjectFeature({ project, index }: ProjectFeatureProps) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.4 });
  const flip = index % 2 === 0 ? -1 : 1;

  const rotateX = useTransform(progress, [0, 1], [14, 0]);
  const rotateY = useTransform(progress, [0, 1], [flip * -6, 0]);
  const scale = useTransform(progress, [0, 1], [0.94, 1]);
  const y = useTransform(progress, [0, 1], [48, 0]);
  const backY = useTransform(progress, [0, 1], [36, -24]);

  const [hero, ...rest] = project.media;
  const back = rest.find((m) => m.width >= m.height);
  const host = project.liveDemo?.href.replace("https://", "") ?? project.repository.label;

  return (
    <article ref={ref} id={project.id} className="grid scroll-mt-28 grid-cols-[minmax(0,1fr)] gap-12">
      <header className="grid gap-6 md:grid-cols-12">
        <p className="text-[0.9rem] text-mute md:col-span-3">
          <span className="tabular-nums text-ink-2">Fig. {index}</span>
          <span className="block">{project.type}</span>
          <span className="block tabular-nums">{project.period.label}</span>
        </p>
        <div className="md:col-span-9">
          <h3 className="text-[clamp(2.4rem,5.4vw,4.2rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
            <Link href={project.caseStudyHref} className="transition-colors hover:text-ink-2">
              {project.name}
            </Link>
          </h3>
          <p className="mt-5 max-w-[40rem] text-[1.15rem] leading-relaxed text-ink-2">{project.statement.text}</p>
        </div>
      </header>

      <figure className="[perspective:1800px]">
        <Link href={project.caseStudyHref} className="group relative block">
          <span className="sr-only">Read the {project.name} case study: </span>
          {back ? (
            <motion.div
              aria-hidden="true"
              style={reduce ? undefined : { y: backY }}
              className={`absolute top-[8%] hidden w-[42%] border border-line-2 bg-night opacity-60 md:block ${
                flip > 0 ? "-right-[3%]" : "-left-[3%]"
              }`}
            >
              <Image src={back.src} alt="" width={back.width} height={back.height} sizes="40vw" quality={75} />
            </motion.div>
          ) : null}

          <motion.div
            style={reduce ? undefined : { rotateX, rotateY, scale, y, transformStyle: "preserve-3d" }}
            className="relative mx-auto w-full max-w-[66rem] origin-bottom"
          >
            <RegistrationTicks />
            <div className="overflow-hidden border border-line-2 bg-panel">
              <Image
                src={hero.src}
                alt={hero.alt}
                width={hero.width}
                height={hero.height}
                sizes="(max-width: 66rem) calc(100vw - 2rem), 66rem"
                quality={80}
                preload={index === 1}
                className="block w-full transition-[filter] duration-500 group-hover:brightness-110"
              />
            </div>
          </motion.div>
        </Link>
        <figcaption className="mx-auto mt-5 flex max-w-[66rem] flex-wrap justify-between gap-x-6 gap-y-1 text-[0.9rem] text-mute">
          <span>
            <span className="tabular-nums text-ink-2">Fig. {index}.</span> {hero.caption}
          </span>
          <span className="min-w-0 truncate">{host}</span>
        </figcaption>
      </figure>

      <div className="grid gap-10 md:grid-cols-12">
        <dl className="grid gap-8 sm:grid-cols-3 md:col-span-9 md:col-start-4">
          {[
            ["Problem", project.caseStudy.problem.text],
            ["Approach", project.caseStudy.systemResponse.text],
            ["My role", project.caseStudy.responsibilities[0].text],
          ].map(([term, detail]) => (
            <div key={term} className="border-t border-line pt-4">
              <dt className="font-semibold text-ink">{term}</dt>
              <dd className="mt-2 text-[0.96rem] leading-relaxed text-ink-2">{detail}</dd>
            </div>
          ))}
        </dl>

        <div className="grid gap-6 md:col-span-9 md:col-start-4">
          <p className="text-[0.95rem] text-mute">
            Built with{" "}
            <span className="text-ink-2">
              {project.technologies
                .slice(0, 6)
                .map((technology) => technology.name)
                .join(", ")}
            </span>
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link className="btn btn-primary" href={project.caseStudyHref}>
              Read case study
            </Link>
            {project.liveDemo ? (
              <a className="link inline-flex items-center gap-1.5 whitespace-nowrap" href={project.liveDemo.href} target="_blank" rel="noreferrer">
                {project.liveDemo.label} <ExternalMark />
              </a>
            ) : null}
            <a
              className="link inline-flex items-center gap-1.5 whitespace-nowrap"
              href={project.repository.href}
              target="_blank"
              rel="noreferrer"
            >
              View repository <ExternalMark />
            </a>
            {project.liveDemo ? (
              <span className="flex items-center gap-2 text-[0.9rem] text-mute">
                <span className="live-dot" aria-hidden="true" />
                {project.liveDemo.accessNote.split(" · ")[0]}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
