import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";
import { LogoPlacement } from "../components/LogoPlacement";

export const metadata: Metadata = {
  title: "Place Your Logo",
  alternates: { canonical: "/PlaceYourLogo" },
  robots: { index: false, follow: false },
};

export default function PlaceYourLogoPage() {
  return <main><SiteHeader /><LogoPlacement /></main>;
}
