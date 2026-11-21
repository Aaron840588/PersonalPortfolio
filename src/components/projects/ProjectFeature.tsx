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

export function ProjectFeature({ project, index }: ProjectFeatureProps) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.4 });
  const flip = index % 2 === 0 ? -1 : 1;

  const rotateX = useTransform(progress, [0, 1], [32, 0]);
  const rotateY = useTransform(progress, [0, 1], [flip * -14, 0]);
  const scale = useTransform(progress, [0, 1], [0.86, 1]);
  const y = useTransform(progress, [0, 1], [80, 0]);
  const backY = useTransform(progress, [0, 1], [40, -28]);
  const backRotate = useTransform(progress, [0, 1], [flip * -2, flip * -7]);
  const glow = useTransform(progress, [0, 1], [0, 0.55]);

  const [hero, ...rest] = project.media;
  const back = rest.find((m) => m.width >= m.height);

  return (
    <article
      ref={ref}
      id={project.id}
      className="grid scroll-mt-28 grid-cols-[minmax(0,1fr)] gap-10 border-t border-line pt-12 lg:grid-cols-12 lg:gap-12 lg:pt-16"
    >
      <header className="lg:col-span-12 flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
        <div className="max-w-2xl">
          <p className="text-mute text-[0.95rem]">
            {project.type}, {project.period.label}
          </p>
          <h3 className="mt-2 text-[clamp(2.2rem,5vw,3.6rem)] font-semibold">
            <Link href={project.caseStudyHref} className="hover:text-signal transition-colors">
              {project.name}
            </Link>
          </h3>
          <p className="mt-4 text-[1.15rem] leading-relaxed text-ink-2">{project.statement.text}</p>
        </div>
        {project.liveDemo ? (
          <p className="flex items-center gap-2.5 text-[0.92rem] text-ink-2">
            <span className="live-dot" aria-hidden="true" />
            {project.liveDemo.accessNote}
          </p>
        ) : null}
      </header>

      <div className="lg:col-span-12 [perspective:1600px]">
        <Link
          href={project.caseStudyHref}
          className="group relative block"
        >
          <span className="sr-only">Read the {project.name} case study: </span>
          {back ? (
            <motion.div
              aria-hidden="true"
              style={reduce ? undefined : { y: backY, rotate: backRotate }}
              className={`absolute top-[6%] hidden w-[46%] overflow-hidden rounded-xl border border-line-2 opacity-70 shadow-2xl md:block ${
                flip > 0 ? "right-[-2%]" : "left-[-2%]"
              }`}
            >
              <Image src={back.src} alt="" width={back.width} height={back.height} sizes="40vw" quality={75} />
            </motion.div>
          ) : null}

          <motion.div
            style={reduce ? undefined : { rotateX, rotateY, scale, y, transformStyle: "preserve-3d" }}
            className="relative mx-auto w-full max-w-[64rem] origin-bottom"
          >
            <motion.div
              aria-hidden="true"
              style={reduce ? { opacity: 0.5 } : { opacity: glow }}
              className="absolute -inset-x-[8%] -bottom-[14%] top-[30%] -z-10 rounded-[50%] bg-signal-deep/50 blur-[90px]"
            />
            <div className="overflow-hidden rounded-2xl border border-line-2 bg-panel shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)]">
              <div className="flex h-9 items-center gap-1.5 border-b border-line px-4" aria-hidden="true">
                <span className="size-2.5 rounded-full bg-line-2" />
                <span className="size-2.5 rounded-full bg-line-2" />
                <span className="size-2.5 rounded-full bg-line-2" />
                <span className="ml-3 min-w-0 truncate text-[0.75rem] text-mute">
                  {project.liveDemo?.href.replace("https://", "") ?? project.repository.label}
                </span>
              </div>
              <Image
                src={hero.src}
                alt={hero.alt}
                width={hero.width}
                height={hero.height}
                sizes="(max-width: 64rem) calc(100vw - 2rem), 64rem"
                quality={80}
                preload={index === 1}
                className="block w-full transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.015]"
              />
            </div>
          </motion.div>
        </Link>
      </div>

      <dl className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
        {[
          ["Problem", project.caseStudy.problem.text],
          ["Approach", project.caseStudy.systemResponse.text],
          ["My role", project.caseStudy.responsibilities[0].text],
        ].map(([term, detail]) => (
          <div key={term}>
            <dt className="font-display text-[1.05rem] font-semibold text-ink">{term}</dt>
            <dd className="mt-2 text-[0.97rem] leading-relaxed text-ink-2">{detail}</dd>
          </div>
        ))}
      </dl>

      <div className="flex flex-col gap-6 lg:col-span-4 lg:items-end">
        <ul className="flex flex-wrap gap-2 lg:justify-end" aria-label={`${project.name} technologies`}>
          {project.technologies.slice(0, 6).map((technology) => (
            <li
              key={technology.name}
              className="rounded-full border border-line px-3 py-1 text-[0.82rem] text-ink-2"
            >
              {technology.name}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap items-center gap-3 lg:justify-end">
          <Link className="btn btn-primary" href={project.caseStudyHref}>
            Read case study
          </Link>
          {project.liveDemo ? (
            <a className="btn btn-ghost" href={project.liveDemo.href} target="_blank" rel="noreferrer">
              {project.liveDemo.label} <ExternalMark />
            </a>
          ) : null}
          <a
            className="link inline-flex items-center gap-1.5 whitespace-nowrap px-1 text-[0.95rem]"
            href={project.repository.href}
            target="_blank"
            rel="noreferrer"
          >
            View repository <ExternalMark />
          </a>
        </div>
      </div>
    </article>
  );
}
