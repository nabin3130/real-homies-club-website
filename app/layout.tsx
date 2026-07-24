import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

const siteName = "real homies club";
const siteDescription =
  "Conversations, interviews, and stories about the people shaping Web3 and beyond.";

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,

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
    icon: "/favicon.ico",
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
      <body>{children}</body>
    </html>
  );
}