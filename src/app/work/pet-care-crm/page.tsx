import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/projects/CaseStudyPage";
import { hhHubProject, petCareCrmProject } from "@/data/projects";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Kat's Pet-Care CRM case study",
  description:
    "A case study of Aaron Tagapan’s AI-assisted pet-care operations prototype for client records, scheduling, key handovers, invoices, earnings, and visit reporting.",
  path: "/work/pet-care-crm",
});

export default function PetCareCrmCaseStudyPage() {
  return <CaseStudyPage project={petCareCrmProject} nextProject={hhHubProject} />;
}
