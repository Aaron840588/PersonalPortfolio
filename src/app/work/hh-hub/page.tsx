import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/projects/CaseStudyPage";
import { hhHubProject, petCareCrmProject } from "@/data/projects";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "H+H Hub case study",
  description:
    "A case study of Aaron Tagapan’s AI-assisted food-operations prototype spanning inventory, production planning, costing, role access, wholesale, and consignment.",
  path: "/work/hh-hub",
});

export default function HhHubCaseStudyPage() {
  return <CaseStudyPage project={hhHubProject} nextProject={petCareCrmProject} />;
}
