import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/data/profile";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Résumé",
  description:
    "View or download Aaron Tagapan's résumé covering IT operations, systems, business analysis, QA/UAT, cloud platforms, and technical projects.",
  path: "/resume",
});

export default function ResumePage() {
  return (
    <main id="main-content" className="resume-page">
      <div className="shell resume-page__shell">
        <Link className="back-link" href="/">
          <span aria-hidden="true">←</span> Portfolio index
        </Link>

        <div className="resume-layout">
          <aside className="resume-rail" aria-label="Résumé actions">
            <p className="resume-rail__edition">Résumé · 2026</p>
            <p className="resume-rail__role">{profile.professionalLabel}</p>
            <p>{profile.location}</p>
            <div className="resume-rail__actions">
              <a
                className="action action--primary"
                href={profile.resume.fileHref}
                download
              >
                Download PDF
              </a>
              <a
                className="text-action"
                href={profile.resume.fileHref}
                target="_blank"
                rel="noreferrer"
              >
                Open PDF <span aria-hidden="true">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
            <p className="resume-rail__contact">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </p>
          </aside>

          <article className="resume-document" aria-labelledby="resume-title">
            <header className="resume-document__heading">
              <h1 id="resume-title">Aaron Tagapan</h1>
              <p>{profile.about.text}</p>
            </header>

            <div className="resume-frame">
              <object
                data={profile.resume.fileHref}
                type="application/pdf"
                aria-label="Aaron Tagapan résumé PDF"
              >
                <div className="resume-frame__fallback">
                  <p>Your browser cannot display the embedded PDF.</p>
                  <a className="text-action" href={profile.resume.fileHref}>
                    Open the résumé PDF <span aria-hidden="true">→</span>
                  </a>
                </div>
              </object>
            </div>
          </article>
        </div>
      </div>

      <footer className="route-footer shell">
        <p>Yours,</p>
        <p className="route-footer__name">Aaron</p>
        <p>Los Baños, Laguna · 2026</p>
      </footer>
    </main>
  );
}
