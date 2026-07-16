import type { Profile } from "@/types/portfolio"

export const profile = {
  name: "Aaron Tagapan",
  resumeName: "AARON TAGAPAN",
  initials: "AT",
  professionalLabel: "IT Operations · Systems · Business Technology",
  heroHeadline: {
    text: "I make operational systems easier to understand and support.",
    evidence: ["candidate-brief", "resume"],
  },
  professionalSummary: {
    text: "BS Information Systems graduate with a foundation in IT operations, systems administration, software development, and AI workflow automation. Completed a 486-hour MIS internship at Gardenia Bakeries Philippines supporting enterprise documentation, QA testing, process analysis, and system improvements. Hands-on experience developing SaaS applications, CRM platforms, and AI-powered automation solutions using Python, Google ADK, Gemini API, MCP, and cloud-based application platforms. Seeking opportunities in IT operations, technical support, systems analysis, application support, and business technology roles.",
    evidence: ["resume"],
  },
  about: {
    text: "I am an Information Systems graduate interested in the point where technology, people, and everyday operations meet. My experience ranges from enterprise documentation and testing at Gardenia to building systems for inventory, scheduling, billing, customer management, and AI-assisted workflows.",
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
