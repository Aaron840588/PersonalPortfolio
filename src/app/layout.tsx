import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Newsreader } from "next/font/google";
import { HeaderNavigation } from "@/components/navigation/HeaderNavigation";
import { getSiteUrl, siteDescription, siteName } from "@/lib/metadata";
import "../../tokens.css";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: "variable",
  style: "normal",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: "variable",
  style: "normal",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: "normal",
  display: "swap",
});

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
      className={`${newsreader.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <HeaderNavigation />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
