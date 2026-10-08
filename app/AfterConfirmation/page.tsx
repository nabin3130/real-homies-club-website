import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Logo Placement Confirmation",
  alternates: { canonical: "/AfterConfirmation" },
  robots: { index: false, follow: false },
};

export default async function AfterConfirmationPage({ searchParams }: { searchParams: Promise<{ preview?: string }> }) {
  const params = await searchParams;
  const mock = process.env.NODE_ENV === "development" && params.preview === "mock";
  return (
    <main>
      <SiteHeader />
      <section className="section-shell logo-confirmation">
        {mock ? <>
          <p className="section-label">DEVELOPMENT MOCK · LAYOUT PREVIEW</p>
          <h1>Logo placement confirmation</h1>
          <p>No payment has been processed or verified.</p>
          <p>Placement date and time are not set.</p>
        </> : <>
          <h1>Confirmation unavailable</h1>
          <p>No verified payment record is available.</p>
        </>}
      </section>
    </main>
  );
}
