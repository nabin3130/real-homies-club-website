import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";
import { isConfirmationPreviewEnabled } from "../lib/confirmationPreview";

export const metadata: Metadata = {
  title: "Logo Placement Confirmation",
  alternates: { canonical: "/AfterConfirmation" },
  robots: { index: false, follow: false },
};

// Live payments are disabled. Without a verified server record, fail closed.
export default async function AfterConfirmationPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  // This renders a demonstration only; it never grants verified-payment access.
  const preview = isConfirmationPreviewEnabled() && params.preview === "1";
  return (
    <main>
      <SiteHeader />
      <section className="section-shell logo-confirmation">
        {preview ? (
          <>
            <p className="section-label logo-status">Preview / Demo Mode</p>
            <h1>Logo Placement Confirmation Preview</h1>
            <p>This is a demonstration of the confirmation page. No payment has been verified.</p>
            <p>No payment record has been created, no email has been sent, and no logo placement has been scheduled.</p>
            <p>In the live flow, confirmation requires a verified payment record. Placement details will appear when a schedule is available.</p>
          </>
        ) : (
          <>
            <h1>Confirmation unavailable</h1>
            <p>No verified payment record is available.</p>
          </>
        )}
      </section>
    </main>
  );
}
