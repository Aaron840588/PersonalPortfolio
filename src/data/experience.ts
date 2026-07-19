import type { ExperienceEntry } from "@/types/portfolio"

export const experience = [
  {
    id: "gardenia-business-analyst-intern",
    role: "Business Analyst Intern",
    department: "MIS Department",
    organization: "Gardenia Bakeries Philippines, Inc.",
    location: "Biñan, Laguna",
    type: "Internship",
    hours: 486,
    period: {
      start: "2025-12",
      end: "2026-03",
      label: "December 2025 – March 2026",
    },
    summary: {
      text: "Supported enterprise documentation, process analysis, QA testing, and UAT within Gardenia’s MIS department.",
      evidence: ["resume"],
    },
    highlights: [
      {
        text: "Developed Functional Specification Documents (FSDs) for enterprise system enhancement projects by documenting business requirements, user stories, acceptance criteria, process flows, and system workflows.",
        evidence: ["resume"],
      },
      {
        text: "Analyzed existing business processes and translated stakeholder requirements into functional specifications for a Document Management System (DMS) integrated with Oracle E-Business Suite metadata.",
        evidence: ["resume"],
      },
      {
        text: "Supported QA testing and User Acceptance Testing (UAT) by creating test scenarios, validating OCR document extraction, documenting issues, and collaborating with technical and business stakeholders.",
        evidence: ["resume"],
      },
    ],
    focusAreas: [
      "Enterprise applications",
      "Requirements",
      "Process analysis",
      "Functional documentation",
      "QA and UAT",
      "Stakeholder collaboration",
    ],
    evidence: [
      {
        id: "latest-resume",
        kind: "resume",
        label: "Aaron Tagapan resume",
        verifiedAt: "2026-07-15",
      },
    ],
  },
] as const satisfies readonly ExperienceEntry[]

export const primaryExperience = experience[0]
