import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { HeaderNavigation } from "@/components/navigation/HeaderNavigation";
import { ScrollProgress } from "@/components/navigation/ScrollProgress";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { getSiteUrl, siteDescription, siteName } from "@/lib/metadata";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <MotionProvider>
          <ScrollProgress />
          <HeaderNavigation />
          {children}
        </MotionProvider>
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
