export type EvidenceKind =
  | "resume"
  | "repository"
  | "deployment"
  | "candidate-brief"

export interface EvidenceReference {
  readonly id: string
  readonly kind: EvidenceKind
  readonly label: string
  readonly href?: string
  readonly verifiedAt?: string
  readonly note?: string
}

export interface SourcedClaim {
  readonly text: string
  readonly evidence: readonly EvidenceKind[]
}

export interface DateRange {
  readonly start: string
  readonly end: string | null
  readonly label: string
}

export type ContactLinkKind = "email" | "phone" | "linkedin" | "github"

export interface ContactLink {
  readonly kind: ContactLinkKind
  readonly label: string
  readonly value: string
  readonly href: string
  readonly external: boolean
}

export interface Profile {
  readonly name: string
  readonly resumeName: string
  readonly initials: string
  readonly professionalLabel: string
  readonly heroHeadline: SourcedClaim
  readonly professionalSummary: SourcedClaim
  readonly about: SourcedClaim
  readonly availability: SourcedClaim
  readonly location: string
  readonly email: string
  readonly phone: string
  readonly links: readonly ContactLink[]
  readonly targetRoles: readonly string[]
  readonly targetRolesEvidence: readonly EvidenceKind[]
  readonly resume: {
    readonly pageHref: "/resume"
    readonly fileHref: string
    readonly fileName: string
  }
  readonly evidence: readonly EvidenceReference[]
}

export interface ExperienceEntry {
  readonly id: string
  readonly role: string
  readonly department: string
  readonly organization: string
  readonly location: string
  readonly type: "Internship"
  readonly hours: number
  readonly period: DateRange
  readonly summary: SourcedClaim
  readonly highlights: readonly SourcedClaim[]
  readonly focusAreas: readonly string[]
  readonly evidence: readonly EvidenceReference[]
}

export interface EducationEntry {
  readonly id: string
  readonly qualification: string
  readonly institution: string
  readonly location?: string
  readonly period: DateRange
  readonly recognition?: string
  readonly evidence: readonly EvidenceReference[]
}

export interface CredentialEntry {
  readonly id: string
  readonly provider: string
  readonly title: string
  readonly year: number
  readonly category: "Certification and training"
  readonly evidence: readonly EvidenceReference[]
}

export type ProjectKind =
  | "operations-platform"
  | "business-management-platform"
  | "automation-suite"
  | "capstone"

export type ProjectLifecycle = "ongoing" | "completed"

export interface TechnologyItem {
  readonly name: string
  readonly evidence: readonly EvidenceKind[]
}

export interface ProjectMetric {
  readonly value: string
  readonly label: string
  readonly evidence: readonly EvidenceKind[]
}

export interface ProjectMedia {
  readonly src: string
  readonly alt: string
  readonly caption: string
  readonly kind: "interface-screenshot" | "system-diagram"
  readonly evidence: readonly EvidenceKind[]
}

export interface RepositoryInfo {
  readonly href: string
  readonly label: string
  readonly visibility: "public"
  readonly defaultBranch: "main" | "master"
  readonly primaryLanguage: "TypeScript" | "JavaScript"
  readonly sourceAvailableForReview: true
  readonly proprietary: true
  readonly openSource: false
  readonly licenseClassification: "Other / NOASSERTION"
  readonly licenseLabel: "Proprietary / not open source"
  readonly evidence: readonly EvidenceKind[]
}

export type DemoAvailability = "verified-live" | "maintenance" | "not-provided"

export interface DemoStatus {
  readonly availability: DemoAvailability
  readonly label: string
  readonly detail: string
  readonly verifiedAt?: string
  readonly evidence: readonly EvidenceKind[]
}

export interface LiveDemo {
  readonly href: string
  readonly label: string
  readonly accessNote: string
  readonly verifiedAt: string
  readonly evidence: readonly EvidenceKind[]
}

export interface ProjectCaseStudy {
  readonly operationalContext: SourcedClaim
  readonly problem: SourcedClaim
  readonly systemResponse: SourcedClaim
  readonly usersAndRoles: readonly SourcedClaim[]
  readonly keyWorkflows: readonly SourcedClaim[]
  readonly responsibilities: readonly SourcedClaim[]
  readonly technicalImplementation: readonly SourcedClaim[]
  readonly testingAndReliability: readonly SourcedClaim[]
  readonly challengesAndTradeoffs: readonly SourcedClaim[]
  readonly lessonsLearned: readonly SourcedClaim[]
  readonly contentWarnings: readonly SourcedClaim[]
}

export interface ProjectBase {
  readonly id: string
  readonly slug: string
  readonly name: string
  readonly resumeName: string
  readonly type: string
  readonly kind: ProjectKind
  readonly lifecycle: ProjectLifecycle
  readonly period: DateRange
  readonly statement: SourcedClaim
  readonly summary: SourcedClaim
  readonly technologies: readonly TechnologyItem[]
  readonly metrics: readonly ProjectMetric[]
  readonly evidence: readonly EvidenceReference[]
}

export interface FeaturedProject extends ProjectBase {
  readonly featured: true
  readonly caseStudyHref: `/work/${string}`
  readonly repository: RepositoryInfo
  readonly demoStatus: DemoStatus
  readonly liveDemo: LiveDemo | undefined
  readonly media: readonly ProjectMedia[]
  readonly caseStudy: ProjectCaseStudy
}

export interface SupportingProject extends ProjectBase {
  readonly featured: false
  readonly caseStudyHref: undefined
  readonly repository: undefined
  readonly demoStatus: DemoStatus
  readonly liveDemo: undefined
  readonly media: readonly []
  readonly caseStudy: undefined
}

export type PortfolioProject = FeaturedProject | SupportingProject
