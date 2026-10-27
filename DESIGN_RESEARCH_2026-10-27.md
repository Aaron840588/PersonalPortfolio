# Portfolio design and stack review — 27 October 2026

The brief is an employer-facing portfolio with a distinctive hero, restrained animation, fast access to project evidence, and current compatible tooling. Research included GitHub repository metadata, project descriptions, source structure and primary framework documentation. Creation dates and latest push dates were checked separately with GitHub's API. A recent push does not make an old repository newly created.

## Recent repositories

| Reference | Created | Latest push checked | What it contributes to this review |
| --- | --- | --- | --- |
| [UsmanAli309/Usman-portfolio-nextjs](https://github.com/UsmanAli309/Usman-portfolio-nextjs) | 19 Oct 2026 | 19 Oct 2026 | A genuinely recent Next/React/TypeScript portfolio reference. Custom visuals can support project discovery; its small age and popularity do not establish production quality. No declared license: inspiration only. |
| [ellaheKhawari/ellahe-portfolio](https://github.com/ellaheKhawari/ellahe-portfolio) | 15 Sep 2026 | 21 Oct 2026 | Recent portfolio combining scroll motion and WebGL. Useful as an interaction reference, but GPU scenes are not necessary to explain Aaron's systems work. License marked NOASSERTION: no source copied. |
| [AliAskariGithub/Portfolio-Template-02](https://github.com/AliAskariGithub/Portfolio-Template-02) | 7 Sep 2026 | 7 Sep 2026 | Project hierarchy and simple transitions are more relevant here than template testimonials. No fabricated testimonials or copied implementation. |
| [codebucks27/Nextjs-Developer-Portfolio](https://github.com/codebucks27/Nextjs-Developer-Portfolio) | 14 Jul 2026 | 6 Oct 2026 | Editorial typography, whitespace and a deliberate hero interaction. GPL-3.0: no code copied. Location/weather and token-count widgets would distract from this candidate's evidence and add unnecessary services. |

## Established motion references with recent activity

- [Codrops ConnectedGrid](https://github.com/codrops/ConnectedGrid): created 30 Aug 2023, pushed 20 Oct 2026; MIT. Reference for connecting related visual elements through scroll progression.
- [Codrops OnScrollColumnsRows](https://github.com/codrops/OnScrollColumnsRows): created 15 Aug 2023, pushed 22 Oct 2026; MIT. Reference for controlled sequencing rather than making visitors wait for content.
- [Codrops Creative Hub](https://tympanus.net/codrops/hub/): current interaction experiments helped identify techniques; the portfolio does not reproduce an entire demo or adopt scroll locking.
- [Next.js 16.4 announcement](https://nextjs.org/blog): the October release confirms the current framework line and React 19.3 support. Installed registry versions and dependency peers were checked independently.

## Implemented direction

Use an ivory canvas, deep green ink, a contrasting dark project workbench, large mixed-serif typography and real sanitized interface previews. The hero gives the candidate's focus and experience before inviting exploration. A native-radio selector connects each preview to its workflow diagram and case study, with no hydration requirement for that control.

The workbench settles once, its diagram draws briefly, project frames gain a small scroll reveal where supported, and links retain clear hover/focus states. Native scrolling remains intact. Reduced-motion removes entrances; unsupported scroll timelines simply leave the content visible. No auto-playing video, cursor effects, fabricated metrics, visitor tracking, weather widget or heavy 3D runtime is required for this design.

## Compatible current stack

- Next.js 16.4.3, React/React DOM 19.3.1, TypeScript 6.0.3, Node 24 LTS.
- Playwright 1.64.1 and Axe 4.14.0 for desktop/mobile, accessibility and interaction checks.
- ESLint 9.39.5 with Next's 16.4.3 configuration. ESLint 10 and TypeScript 7 were evaluated, but current bundled lint plugins declare narrower supported peers. This repository uses the newest compatible set rather than suppressing peer conflicts.
- Server-rendered App Router pages, optimized images/fonts, design tokens, CSS and the Web Animations API. Animation libraries are not needed for the implemented effect.
- Lockfile refreshed; dependency audit clean at the local verification checkpoint. Deployment assets and browser behavior must still be verified independently after publishing.

This document supersedes earlier palette/hero notes where they differ. These references informed original composition and implementation; no third-party portfolio source was copied.
