import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";
import { ConfirmationConfetti } from "../components/ConfirmationConfetti";
import { getPublicationDate, formatPublicationDate } from "../lib/publicationSchedule";
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
  const publicationDate = preview ? getPublicationDate(new Date()) : null;
  return (
    <main>
      <SiteHeader />
      {preview && <ConfirmationConfetti />}
      <section className="section-shell logo-confirmation">
        {preview ? (
          <>
            <span className="confirmation-preview-badge">Preview Mode</span>
            <h1>🎉 You&apos;re In!</h1>
            <h2 className="confirmation-subheadline">Your Logo Is on Its Way!</h2>
            <p>Thank you for supporting real homies club!</p>
            <p>Your logo will be featured in our upcoming Wednesday video, shared across TikTok, YouTube, and Instagram.</p>
            <section className="confirmation-schedule" aria-labelledby="publication-heading">
              <h2 id="publication-heading">Scheduled Publication</h2>
              <time dateTime={publicationDate!}>{formatPublicationDate(publicationDate!)}</time>
              <p>Your logo is scheduled to appear in our Wednesday video.</p>
              <span className="confirmation-timezone">Asia/Seoul · Sample schedule</span>
            </section>
            <section className="confirmation-order" aria-labelledby="order-heading">
              <h2 id="order-heading">Order Summary</h2>
              <dl>
                <div><dt>Logo Placement</dt><dd>1 video</dd></div>
                <div><dt>Platforms</dt><dd>TikTok · YouTube · Instagram</dd></div>
                <div><dt>Total</dt><dd>$10 USD</dd></div>
                <div><dt>Payment Status</dt><dd><span className="confirmation-status">Confirmed</span><span className="confirmation-sample">Sample</span></dd></div>
              </dl>
              <p className="confirmation-demo-note">Sample order only. No payment, email, or placement booking.</p>
            </section>
            <a href="/" className="button logo-feature-cta confirmation-home">Back to Home</a>
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
