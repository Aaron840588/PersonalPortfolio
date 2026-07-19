import type { Profile } from "@/types/portfolio"

export const profile = {
  name: "Aaron Tagapan",
  resumeName: "AARON TAGAPAN",
  initials: "AT",
  professionalLabel: "IT Operations · Systems · Business Technology",
  heroHeadline: {
    text: "Information Systems graduate with internship experience in requirements documentation and QA/UAT.",
    evidence: ["candidate-brief", "resume"],
  },
  professionalSummary: {
    text: "BS Information Systems graduate with a foundation in IT operations and technical support, plus internship experience in functional documentation, process analysis, QA, and UAT. Completed a 486-hour MIS internship at Gardenia Bakeries Philippines. Uses AI-assisted coding tools to prototype personal projects around inventory, scheduling, billing, and workflow automation.",
    evidence: ["candidate-brief", "resume"],
  },
  about: {
    text: "During a 486-hour MIS internship at Gardenia, I developed functional specifications and supported process analysis, QA testing, and UAT. The projects below are AI-assisted prototypes I used to practice mapping operational workflows.",
    evidence: ["candidate-brief", "resume"],
  },
  availability: {
    text: "Open to entry-level roles in IT operations, technical or application support, systems analysis, QA/UAT, and business technology.",
    evidence: ["candidate-brief", "resume"],
  },
  location: "Los Baños, Laguna, Philippines",
  email: "aarontagapan@gmail.com",
  links: [
    {
      kind: "email",
      label: "Email",
      value: "aarontagapan@gmail.com",
      href: "mailto:aarontagapan@gmail.com",
      external: false,
    },
    {
      kind: "linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/aaron-tagapan1",
      href: "https://www.linkedin.com/in/aaron-tagapan1",
      external: true,
    },
    {
      kind: "github",
      label: "GitHub",
      value: "github.com/Aaron840588",
      href: "https://github.com/Aaron840588",
      external: true,
    },
  ],
  targetRoles: [
    "IT Operations",
    "Application Support",
    "Technical Support",
    "Service Desk",
    "Systems Administration",
    "Cloud Support",
    "Infrastructure Support",
    "Systems Analysis",
    "MIS",
    "Enterprise Applications",
    "QA and UAT",
    "Business Technology",
    "Technology Associate programs",
    "Graduate technology programs",
    "Entry-level AI automation roles",
  ],
  targetRolesEvidence: ["candidate-brief", "resume"],
  resume: {
    pageHref: "/resume",
    fileHref: "/resume/Aaron_Tagapan_Resume.pdf",
    fileName: "Aaron_Tagapan_Resume.pdf",
  },
  evidence: [
    {
      id: "latest-resume",
      kind: "resume",
      label: "Aaron Tagapan resume",
      verifiedAt: "2026-07-15",
      note: "Primary source for identity, contact details, education, experience, projects, skills, and training.",
    },
    {
      id: "portfolio-brief",
      kind: "candidate-brief",
      label: "Candidate-provided portfolio brief",
      verifiedAt: "2026-07-15",
      note: "Primary source for intended role positioning, target roles, and availability language.",
    },
  ],
} as const satisfies Profile

export const contactLinks = profile.links
export const targetRoles = profile.targetRoles
