import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/projects/CaseStudyPage";
import { hhHubProject, petCareCrmProject } from "@/data/projects";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "H+H Hub case study",
  description:
    "A repository-backed case study of H+H Hub, Aaron Tagapan's food-operations platform spanning inventory, production planning, recursive costing, role access, wholesale, and consignment.",
  path: "/work/hh-hub",
});

export default function HhHubCaseStudyPage() {
  return <CaseStudyPage project={hhHubProject} nextProject={petCareCrmProject} />;
}
