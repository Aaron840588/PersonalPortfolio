import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import { HeaderNavigation } from "@/components/navigation/HeaderNavigation";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { getSiteUrl, siteDescription, siteName } from "@/lib/metadata";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#070a12",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: siteName,
    template: "%s | Aaron Tagapan",
  },
  description: siteDescription,
  applicationName: "Aaron Tagapan Portfolio",
  authors: [{ name: "Aaron Tagapan" }],
  creator: "Aaron Tagapan",
  keywords: [
    "Aaron Tagapan",
    "IT operations",
    "application support",
    "systems analysis",
    "business technology",
    "QA UAT",
    "cloud support",
    "Information Systems Philippines",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    title: siteName,
    description: siteDescription,
    siteName: "Aaron Tagapan Portfolio",
    firstName: "Aaron",
    lastName: "Tagapan",
    locale: "en_PH",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aaron Tagapan",
  url: getSiteUrl(),
  email: "mailto:aarontagapan@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/aaron-tagapan1",
    "https://github.com/Aaron840588",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "National University – Laguna",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Los Baños",
    addressRegion: "Laguna",
    addressCountry: "PH",
  },
  knowsAbout: [
    "IT operations",
    "systems analysis",
    "application support",
    "quality assurance",
    "user acceptance testing",
    "cloud platforms",
    "business workflow automation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${hanken.variable}`}
    >
      <body>
        <a
          className="fixed left-4 top-4 z-[70] -translate-y-24 rounded-full bg-ink px-4 py-2 font-semibold text-night focus:translate-y-0"
          href="#main-content"
        >
          Skip to main content
        </a>
        <SmoothScroll />
        <HeaderNavigation />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}
