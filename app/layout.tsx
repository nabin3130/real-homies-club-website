import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

const siteName = "real homies club";
const siteUrl = "https://real-homies-club.vercel.app";
const siteTitle = "real homies club | Web3 Media & Events";
const siteDescription =
  "real homies club is an independent Web3 media and event studio covering conferences, communities, founders, builders, and ecosystem teams through interviews and social content.";
const organizationId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: siteName,
      url: siteUrl,
      logo: `${siteUrl}/real-homies-logo.png`,
      email: "hello@realhomies.club",
      description: siteDescription,
      sameAs: [
        "https://www.tiktok.com/@realhomiesclub",
        "https://www.youtube.com/@realhomiesclub",
        "https://www.instagram.com/realhomiesclub",
        "https://x.com/real_BD_2025",
      ],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: siteName,
      url: siteUrl,
      description: siteDescription,
      publisher: { "@id": organizationId },
      inLanguage: "en",
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    type: "website",
    siteName,
    locale: "en_US",
    images: [
      {
        url: "/real-homies-logo.png",
        width: 1082,
        height: 1082,
        alt: "real homies club logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/real-homies-logo.png"],
  },

  robots: {
    index: process.env.VERCEL_ENV === "production",
    follow: process.env.VERCEL_ENV === "production",
  },

  icons: {
    icon: "/icon.png",
  },
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
