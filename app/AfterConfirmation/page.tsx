import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Logo Placement Confirmation",
  alternates: { canonical: "/AfterConfirmation" },
  robots: { index: false, follow: false },
};

// Live payments are disabled. Without a verified server record, fail closed.
export default function AfterConfirmationPage() {
  return (
    <main>
      <SiteHeader />
      <section className="section-shell logo-confirmation">
        <h1>Confirmation unavailable</h1>
        <p>No verified payment record is available.</p>
      </section>
    </main>
  );
}
