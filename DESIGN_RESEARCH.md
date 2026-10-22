# Portfolio design research — 22 October 2026

## Recommendation

Evolve the existing editorial design. Its warm paper background, oxblood accent, serif display face and clear case studies already give Aaron a coherent visual identity. The weaker part was the hero: a long introduction beside a largely repetitive profile ledger, with little that demonstrated the systems thinking in its headline. The redesign gives that space a useful job through an illustrated project workflow.

This is a design judgment based on the site's content and the references below, not a claim that a visual style guarantees interviews. Aaron is applying for entry-level IT and systems roles. The site should make his background, internship, project scope and contact options immediately understandable, while presenting the projects honestly as AI-assisted personal prototypes.

## References evaluated

| Reference | What is useful here | What we did with it |
| --- | --- | --- |
| [Brittany Chiang's current portfolio](https://brittanychiang.com/) and [v4 repository](https://github.com/bchiang7/v4) | Clear role positioning, experience chronology, direct project evidence and a readily available résumé. The older v4 source uses staged hero entrances with a reduced-motion alternative. | Keep prominent work/résumé actions and readable project explanations. Do not copy the signature navy/teal presentation or the full-viewport hero. The v4 repository is an older Gatsby implementation, not the source of the current live design. |
| [Nim repository](https://github.com/ibelick/nim), [live example](https://nim-fawn.vercel.app/) and [page source](https://github.com/ibelick/nim/blob/main/app/page.tsx) | Compact content hierarchy, small project previews and carefully spaced experience records. Source review shows section staggering, blur entrances, magnetic social links and video dialogs. | Borrow the discipline of concise introductory copy and obvious project entry points. Avoid blurred text, magnetic targets and autoplay video here. The reference's video previews did not play in the audit browser; that is a reminder to keep static project evidence available. |
| [Paco Coursey](https://paco.me/) and [Redesign 2021](https://paco.me/writing/redesign-2021) | Typographic restraint and short descriptions linking directly to real work. | Keep the warm typographic identity and reduce repeated introduction content. Do not replace Aaron's case studies with an overly sparse link page; he needs room to explain his contribution. |
| [Carbon motion guidelines](https://www.carbondesignsystem.com/building-blocks/foundations/motion/overview) | A distinction between subtle, task-oriented movement and occasional expressive moments; timing and easing should support what the user is doing. | Give the hero one expressive connection-drawing sequence. Keep link responses short and predictable. Retain normal scrolling. |
| [Motion repository](https://github.com/motiondivision/motion) and [scroll documentation](https://motion.dev/docs/react-scroll-animations) | Clear separation of scroll-triggered and scroll-linked animation, including once-only viewport entrances. | Existing IntersectionObserver/Web Animations entrances already cover this portfolio's needs. No new animation dependency is necessary for the current scope. Motion remains a reasonable option if future interactions require coordinated layouts or complex gestures. |
| [Motion Primitives repository](https://github.com/ibelick/motion-primitives) | Reusable small interactions for React interfaces. | Reference for interaction scale, not a wholesale component import. The open repository's MIT license and the separate Pro product's license should not be confused. |
| [Josh W. Comeau on reduced motion](https://www.joshwcomeau.com/react/prefers-reduced-motion/) | Motion is an enhancement, with the visitor's preference respected from the start. | Put new animation rules inside `prefers-reduced-motion: no-preference`. Keep all text readable before animation and without JavaScript. |
| [MDN: animation-timeline](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/animation-timeline) | Native scroll timelines are useful but still have compatibility limitations. | Avoid making navigation or content availability depend on scroll timelines. No scroll scrubbing or pinned storytelling is needed to understand these two projects. |

All new component markup and styling are original to this change. No reference repository was installed, forked or copied into the application. Brittany's repository explicitly requests attribution when reusing its design/code; this implementation uses the research principles rather than reproducing that site.

## Design applied

- **Hero:** a shorter introduction, an explicit entry-level availability line, and two clear actions. Location and education remain visible in the hero footer. The mobile layout keeps the introduction and actions first.
- **Signature illustration:** a compact, interactive workflow study. Pet-care connects client/pet records, bookings, invoices and visit reports. Food operations connects recipes, stock, production, costing and orders. These are simplified relationship diagrams, not live telemetry or claims about deployed service health.
- **Native interaction:** a labeled radio group selects a project. Arrow keys work naturally, selection has both color and underline/weight cues, and the matching case-study link is available. The hidden panel is excluded from focus and the accessibility tree. Both panels occupy a shared grid area to avoid height shifts.
- **Motion:** connection strokes draw over 1.6 seconds and nodes settle over 600 milliseconds. Motion runs on initial display or a deliberate project switch, then stops. There are no recurring pulses, particles, typewriter loops, cursor followers, scroll hijacking or loading gates.
- **Project discovery:** a compact jump list exposes both projects before the detailed case-study entries. Links keep normal anchor behavior and browser history.
- **Microinteractions:** small directional arrow movement reinforces link destinations. Existing project-image hover and once-only scroll entrances remain.
- **Performance:** static server-rendered HTML and inline SVG; CSS handles the new interaction and animation. No new package, video, image download, API call, tracking service or client-side state was added.

## Scope and validation

The résumé, contact details, case-study claims and demo maintenance status are preserved. This change does not resolve or conceal the separate demo credential/history issues documented in the privacy audit, and does not change production aliases.

Validation includes production compilation, lint/type checks, accessibility scans on all four pages, six viewport widths from 320 to 2560 pixels, local links, screenshots, keyboard operation, layout stability, reduced motion and JavaScript-disabled operation. The completed local run passed lint, TypeScript, production build and all 34 desktop/mobile Chromium checks. Screenshots were reviewed at desktop and mobile sizes. Firefox, Safari and physical-device testing were not part of this run.
