import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Résumé",
  description:
    "View or download Aaron Tagapan's résumé covering IT operations, systems, business analysis, QA/UAT, cloud platforms, and technical projects.",
  path: "/resume",
});

export default function ResumePage() {
  return (
    <main id="main-content" className="page-shell resume-page">
      <div className="shell">
        <Link className="back-link" href="/">
          <span aria-hidden="true">←</span> Back to portfolio
        </Link>
        <div className="resume-page__heading">
          <div>
            <p className="eyebrow mono">Résumé / 2026</p>
            <h1>Aaron Tagapan</h1>
            <p>
              BS Information Systems graduate focused on IT operations,
              application support, systems analysis, QA/UAT, and business
              technology.
            </p>
          </div>
          <div className="button-row">
            <a
              className="button button--primary"
              href="/resume/Aaron_Tagapan_Resume.pdf"
              download
            >
              Download PDF
            </a>
            <a
              className="button button--secondary"
              href="/resume/Aaron_Tagapan_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Open résumé <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="resume-frame">
          <object
            data="/resume/Aaron_Tagapan_Resume.pdf"
            type="application/pdf"
            aria-label="Aaron Tagapan résumé PDF"
          >
            <div className="resume-frame__fallback">
              <p>Your browser cannot display the embedded PDF.</p>
              <a className="text-link" href="/resume/Aaron_Tagapan_Resume.pdf">
                Open the résumé PDF
              </a>
            </div>
          </object>
        </div>
      </div>
    </main>
  );
}
