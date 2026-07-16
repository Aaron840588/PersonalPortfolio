# Portfolio research

Research and access date: **July 15, 2026 (Asia/Manila)**

This document records the evidence used to shape Aaron Tagapan's portfolio. Technical decisions favor first-party documentation and web standards. Hiring research is treated as directional rather than as a universal law.

## Sources reviewed

### Framework and implementation

- [Next.js App Router documentation](https://nextjs.org/docs/app) and [Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components), updated March 2026: App Router pages and layouts are Server Components by default; interactive behavior should use small Client Component boundaries.
- [Next.js metadata and Open Graph guidance](https://nextjs.org/docs/app/getting-started/metadata-and-og-images), updated February 2026: use the Metadata API and file-based metadata for titles, descriptions, canonical URLs, social images, robots, and sitemaps.
- [Next.js image guidance](https://nextjs.org/docs/app/getting-started/images) and [`next/image` reference](https://nextjs.org/docs/app/api-reference/components/image), updated March 2026: preserve dimensions, provide accurate `sizes`, lazy-load below-fold media, and prioritize only a confirmed LCP image. In Next.js 16, `priority` is deprecated in favor of the current preload/fetch-priority guidance.
- [Next.js font guidance](https://nextjs.org/docs/app/getting-started/fonts), updated February 2026: `next/font` self-hosts font assets and avoids a runtime request to a third party; variable fonts are preferred.
- [Next.js 16.2 release](https://nextjs.org/blog/next-16-2), published March 18, 2026, and the [Next.js news index](https://nextjs.org/blog): 16.2 was the stable release line found during research; late-June 16.3 material was still identified as preview material.
- [React 19.2 release](https://react.dev/blog/2025/10/01/react-19-2), published October 1, 2025, and the React [`<ViewTransition>` reference](https://react.dev/reference/react/ViewTransition): React 19.2 is stable, but the View Transition component remains Canary and is not a core dependency for this site.
- [Motion for React](https://motion.dev/docs/react), [reduced-motion hook](https://motion.dev/docs/react-use-reduced-motion), [MotionConfig](https://motion.dev/docs/react-motion-config), and [bundle-size guidance](https://motion.dev/docs/react-reduce-bundle-size): motion should be progressive, respect the user's operating-system setting, and use only the features the site needs.

### Accessibility, browser support, and performance

- [WCAG 2.2](https://www.w3.org/TR/WCAG22/), W3C Recommendation published October 5, 2023, plus the WAI explanations for [non-text contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html), [focus not obscured](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html), [target size](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html), [reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html), [link purpose](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html), and [status messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html).
- [WAI-ARIA disclosure navigation example](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/): ordinary site navigation is not an ARIA application menu; a mobile navigation disclosure should use a button, `aria-expanded`, semantic links, Escape behavior, and sensible focus handling.
- MDN on [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API), [`prefers-reduced-motion`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion), [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/backdrop-filter), the [View Transition API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API), and [CSS scroll timelines](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/animation-timeline/scroll): Intersection Observer and reduced-motion queries are mature; backdrop filtering and view transitions need visual fallbacks; CSS scroll timelines still have limited availability.
- web.dev on [Core Web Vitals](https://web.dev/articles/vitals), [optimizing LCP](https://web.dev/articles/optimize-lcp), and [optimizing CLS](https://web.dev/articles/optimize-cls): field targets are LCP at or below 2.5 seconds, INP at or below 200 milliseconds, and CLS at or below 0.1 at the 75th percentile. Lighthouse is lab evidence and cannot by itself establish field INP.

### Search and structured data

- [Google structured-data policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies), updated January 6, 2026: structured data must be visible, accurate, and representative; markup does not guarantee a rich result.
- [Google snippet guidance](https://developers.google.com/search/docs/appearance/snippet) and [sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview): write descriptive page metadata and provide crawlable routes, while avoiding indexing guarantees.
- Schema.org [`Person`](https://schema.org/Person), [`CreativeWork`](https://schema.org/CreativeWork), and [`SoftwareSourceCode`](https://schema.org/SoftwareSourceCode): use a small truthful JSON-LD graph for Aaron and the selected work, including repository links only where verified.

### Recruiter and reading behavior

- [Nielsen Norman Group, *User Experience Careers*, second edition](https://www.nngroup.com/reports/user-experience-careers/) reports 693 survey responses, 17 interviews, and hiring-participant preferences for understandable process, business context, reasons, outcomes, organization, and writing. The study was conducted in 2019, used a convenience sample, and focused on UX; this portfolio transfers the communication pattern, not a claim about all IT recruiters.
- [Nielsen Norman Group on web-reading patterns](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/) finds several scanning patterns and recommends useful headings, concise groups, descriptive links, and important information early. The F-pattern is not universal.
- [LinkedIn's skills-first hiring analysis](https://www.linkedin.com/business/talent/blog/talent-acquisition/business-case-for-skills-first-hiring), published July 21, 2025, supports making role-relevant skills explicit. Its platform data is observational and LinkedIn-specific, so it is not treated as causal proof.

## Useful principles

1. Lead with role fit and operational value before framework names.
2. Put Aaron's Gardenia MIS internship before the project gallery because it is the only verified professional-experience entry.
3. Make exact, searchable skills visible, then connect each skill to evidence from the internship or a project.
4. Structure case studies as operational context, problem, constraints, system response, contribution, verification, and lessons—not as feature or logo walls.
5. Use real, sanitized application captures with captions that explain the workflow shown.
6. Keep factual content server-rendered. Add client-side code only for navigation state, disclosure behavior, copy confirmation, and restrained reveals.
7. Make every route useful without animation, hover, or JavaScript-enhanced storytelling.
8. Treat the brief's 30-second comprehension goal as an internal usability test, not a scientific recruiter threshold.

## Rejected trends and claims

| Rejected approach | Reason | Replacement |
| --- | --- | --- |
| A universal "six-second recruiter scan" claim | No sufficiently current, general evidence reviewed supports an exact universal duration. | Front-load identity and test comprehension with real reviewers. |
| Developer-first hero or technology-logo cloud | Misstates Aaron's target role and weakens operational evidence. | IT Operations, Systems, and Business Technology first; tools later. |
| Bento-card repetition, glass everywhere, glow, code wallpaper, or faux terminal | Decorative sameness competes with the evidence and can reduce legibility. | One editorial canvas, ruled sections, deliberate media frames, restrained accent. |
| Invented metrics or production-scale outcomes | The resume supplies no user, revenue, savings, performance, uptime, or adoption figures. | Verified scope, workflows, testing evidence, and candid limitations. |
| Fake product UI or AI-generated screenshots | It cannot prove implemented work and may expose the site to factual error. | Fresh screenshots from synthetic demo data or clearly labeled diagrams. |
| CSS scroll timelines or React View Transitions as a foundation | Browser/API maturity is not yet sufficient for a core experience. | Motion/CSS progressive enhancement with a static fallback. |
| Continuous parallax, pointer chasing, or ambient animation | Adds vestibular and performance risk without strengthening the case study. | One-time opacity/transform reveals and small state transitions. |
| Automatic animation carousels | They hide evidence and create control, focus, and timing burdens. | Stacked screenshots or a user-controlled semantic gallery. |
| Unmeasured Lighthouse or Core Web Vitals claims | A build or lab run is not proof of real-user field performance. | Publish measurements only after testing; otherwise document targets. |

## Accessibility findings

- Target WCAG 2.2 AA. Use at least 4.5:1 contrast for normal text and 3:1 for meaningful controls and graphics. The selected palette exceeds those floors on the main canvas.
- Preserve one logical H1, semantic landmarks, sequential headings, descriptive links, a skip link, visible focus, and keyboard-reachable controls.
- WCAG 2.2 AA permits a 24 CSS-pixel minimum target in many cases; this design uses approximately 44–48 CSS pixels for primary actions and mobile navigation for comfort.
- At 320 CSS pixels of content width, the page must reflow without two-dimensional scrolling except for genuinely essential content.
- Mobile navigation uses disclosure semantics rather than `role="menu"`. Escape closes it and focus returns to the trigger.
- Copy-email confirmation is a status update and should be announced without unexpectedly moving focus.
- `prefers-reduced-motion: reduce` removes reveal travel, connector drawing, pointer response, screenshot scaling, sticky transitions, and animated progress. All content remains visible.
- Decorative connectors and grid marks are hidden from assistive technology; meaningful system labels remain semantic text.

## Performance findings

- Keep pages and factual sections as Server Components; isolate only necessary interaction.
- Use `next/image` with intrinsic dimensions or stable aspect-ratio containers and accurate responsive `sizes`.
- Do not lazy-load the actual LCP image; lazy-load below-fold case-study screenshots.
- Use `next/font` for Geist Sans and Geist Mono to avoid third-party font requests and reduce layout shift.
- Animate only `opacity` and `transform` where possible. Avoid filters, large blurs, and layout-heavy scroll listeners.
- Use native Intersection Observer for active-section and reveal state. Do not poll scroll position for every component.
- Prevent CLS by reserving image dimensions and avoiding late insertion above existing content.
- Measure production behavior before reporting performance. Assess both desktop and mobile and distinguish lab tools from field data.

## Influence on the final design

Research produced the **Operations Ledger** direction: an editorial dark canvas with a systems-map motif, visible role language, early Gardenia evidence, two detailed operational case studies, restrained lime emphasis, and short factual captions. The implementation is server-first, uses narrow interactive islands, provides static fallbacks for every enhanced effect, and treats SEO and accessibility as part of the content architecture rather than a finishing layer.

Evidence-specific publishing decisions are documented in [CONTENT_SOURCE.md](./CONTENT_SOURCE.md). The audience, hierarchy, and project narrative are documented in [PORTFOLIO_STRATEGY.md](./PORTFOLIO_STRATEGY.md).
