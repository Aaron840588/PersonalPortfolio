import type {
  CredentialEntry,
  EducationEntry,
} from "@/types/portfolio"

const resumeEvidence = [
  {
    id: "latest-resume",
    kind: "resume" as const,
    label: "Aaron Tagapan resume",
    verifiedAt: "2026-07-15",
  },
]

export const education = [
  {
    id: "bs-information-systems",
    qualification: "Bachelor of Science in Information Systems",
    institution: "National University – Laguna",
    period: {
      start: "2022",
      end: "2026",
      label: "2022 – 2026",
    },
    recognition: "Dean's Lister (Multiple Semesters)",
    evidence: resumeEvidence,
  },
  {
    id: "tvl-ict",
    qualification: "TVL – ICT Strand (Senior High School)",
    institution: "STI College Calamba",
    period: {
      start: "2019",
      end: "2021",
      label: "2019 – 2021",
    },
    recognition: undefined,
    evidence: resumeEvidence,
  },
] as const satisfies readonly EducationEntry[]

export const credentials = [
  {
    id: "google-agent-fundamentals",
    provider: "Google Cloud Skills Boost",
    title: "Agent Fundamentals",
    year: 2026,
    category: "Certification and training",
    evidence: resumeEvidence,
  },
  {
    id: "google-adk",
    provider: "Google Cloud Skills Boost",
    title: "Google ADK",
    year: 2026,
    category: "Certification and training",
    evidence: resumeEvidence,
  },
  {
    id: "google-mlops-generative-ai",
    provider: "Google Cloud Skills Boost",
    title: "MLOps for Generative AI",
    year: 2026,
    category: "Certification and training",
    evidence: resumeEvidence,
  },
  {
    id: "anthropic-mcp-introduction",
    provider: "Anthropic",
    title: "MCP Introduction",
    year: 2026,
    category: "Certification and training",
    evidence: resumeEvidence,
  },
  {
    id: "anthropic-ai-fluency-framework",
    provider: "Anthropic",
    title: "AI Fluency Framework",
    year: 2026,
    category: "Certification and training",
    evidence: resumeEvidence,
  },
  {
    id: "aws-prompt-engineering",
    provider: "AWS",
    title: "Foundations of Prompt Engineering",
    year: 2026,
    category: "Certification and training",
    evidence: resumeEvidence,
  },
  {
    id: "microsoft-generative-ai-code-camp",
    provider: "Microsoft",
    title: "Generative AI Code Camp",
    year: 2025,
    category: "Certification and training",
    evidence: resumeEvidence,
  },
] as const satisfies readonly CredentialEntry[]

export const certificationsAndTraining = credentials
