import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

const siteName = "real homies club";
const siteUrl = "https://rea1homies.com";
const siteTitle = "real homies club | people behind tech";
const siteDescription =
  "Real conversations with the people building what's next.";
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
        url: "/social-preview.png",
        width: 1734,
        height: 907,
        alt: "real homies club — people behind web3",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/social-preview.png"],
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
