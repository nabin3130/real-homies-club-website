import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

const siteName = "real homies club";
const siteUrl = "https://real-homies-club.vercel.app";
const siteDescription =
  "Conversations, interviews, and stories about the people shaping Web3 and beyond.";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/real-homies-logo.png`,
  email: "hello@realhomies.club",
  sameAs: [
    "https://www.tiktok.com/@realhomiesclub",
    "https://www.youtube.com/@realhomiesclub",
    "https://www.instagram.com/realhomiesclub",
    "https://x.com/real_BD_2025",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: siteName,
    description: siteDescription,
    type: "website",
    siteName,
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
