import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { profile } from "@/data/profile";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Résumé",
  description:
    "View or download Aaron Tagapan’s résumé covering IT operations, systems, business analysis, QA/UAT, cloud platforms, and AI-assisted personal projects.",
  path: "/resume",
});

export default function ResumePage() {
  return (
    <>
      <main id="main-content" className="shell pb-24 pt-28 sm:pt-36">
        <Link className="link text-[0.95rem] text-ink-2" href="/">
          Back to portfolio
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-12">
          <aside aria-label="Résumé actions" className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <h1 className="text-[clamp(2.6rem,6vw,4rem)] font-semibold">Aaron Tagapan</h1>
              <p className="mt-3 text-ink-2">{profile.professionalLabel.replaceAll(" · ", ", ")}</p>
              <p className="text-mute">{profile.location}</p>
              <p className="mt-6 text-ink-2">{profile.about.text}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a className="btn btn-primary" href={profile.resume.fileHref} download>
                  Download PDF
                </a>
                <a className="btn btn-ghost" href={profile.resume.fileHref} target="_blank" rel="noreferrer">
                  Open PDF
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
              <p className="mt-6">
                <a className="link" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </p>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <div className="overflow-hidden rounded-2xl border border-line-2 bg-panel">
              <object
                data={profile.resume.fileHref}
                type="application/pdf"
                aria-label="Aaron Tagapan résumé PDF"
                className="block h-[80svh] min-h-[32rem] w-full"
              >
                <div className="grid h-full place-items-center p-10 text-center">
                  <div>
                    <p className="text-ink-2">Your browser cannot display the embedded PDF.</p>
                    <a className="btn btn-ghost mt-5" href={profile.resume.fileHref}>
                      Open the résumé PDF
                    </a>
                  </div>
                </div>
              </object>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
