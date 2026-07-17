import type { Profile } from "@/types/portfolio"

export const profile = {
  name: "Aaron Tagapan",
  resumeName: "AARON TAGAPAN",
  initials: "AT",
  professionalLabel: "IT Operations · Systems · Business Technology",
  heroHeadline: {
    text: "Information Systems graduate focused on operations and support.",
    evidence: ["candidate-brief", "resume"],
  },
  professionalSummary: {
    text: "BS Information Systems graduate with experience in MIS documentation, process analysis, QA/UAT, and technical support. Completed a 486-hour MIS internship at Gardenia Bakeries Philippines. Uses AI-assisted coding tools to prototype personal projects around inventory, scheduling, billing, and workflow automation. Seeking entry-level roles in IT operations, application support, systems analysis, QA/UAT, and business technology.",
    evidence: ["candidate-brief", "resume"],
  },
  about: {
    text: "I’m a recent Information Systems graduate with internship experience in documentation, process analysis, QA, and UAT. I also use AI-assisted coding tools to prototype workflow ideas, including the two personal projects shown here.",
    evidence: ["candidate-brief", "resume"],
  },
  availability: {
    text: "Open to entry-level opportunities in IT operations, application support, systems analysis, cloud support, QA, and business technology.",
    evidence: ["candidate-brief", "resume"],
  },
  location: "Los Baños, Laguna, Philippines",
  email: "aarontagapan@gmail.com",
  phone: "0945 170 8774",
  links: [
    {
      kind: "email",
      label: "Email",
      value: "aarontagapan@gmail.com",
      href: "mailto:aarontagapan@gmail.com",
      external: false,
    },
    {
      kind: "phone",
      label: "Phone",
      value: "0945 170 8774",
      href: "tel:09451708774",
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
