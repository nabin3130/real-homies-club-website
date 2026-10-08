"use client";

import { useEffect, useRef, useState } from "react";
import { LogoPreview } from "./LogoPreview";

type Panel = "closed" | "payment" | "qa";
type Method = "Stripe" | "Link" | "Crypto";
const faqs = [
  {
    question: "Where will my logo appear?",
    answer: "Your logo will appear in the upper-left corner of the video, inside a square placement area. Your logo's original proportions will be preserved."
  },
  {
    question: "Who watches your videos?",
    answer: "Our TikTok audience is primarily in Southeast Asia, with viewers also in Australia and Nigeria. Our YouTube audience is primarily in South Korea."
  },
  {
    question: "How much does it cost?",
    answer: "It costs $10 USD as a one-time payment for one logo in one video. The same video will be cross-posted to TikTok, YouTube, and Instagram."
  },
  {
    question: "When will my logo be placed?",
    answer: "Your logo will be assigned to the next video after your payment is confirmed. The exact posting date and time are not guaranteed in advance."
  },
  {
    question: "Can I choose the video?",
    answer: "No. Your logo will be assigned to the next video; you cannot choose a specific video."
  },
  {
    question: "Which logo file formats are accepted?",
    answer: "PNG, JPEG, and SVG are accepted."
  },
  {
    question: "Can I get a refund?",
    answer: "No refunds are offered, except where required by law."
  }
];
const productSummary = "One logo in one video, cross-posted to TikTok, YouTube, and Instagram.";
const formats = ["image/png", "image/jpeg", "image/svg+xml"];

export function LogoPlacement() {
  const [email, setEmail] = useState("");
  const [logo, setLogo] = useState<File | null>(null);
  const [src, setSrc] = useState<string | null>(null);
  const [method, setMethod] = useState<Method | "">("");
  const [panel, setPanel] = useState<Panel>("closed");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const help = useRef<HTMLButtonElement>(null);
  const continueButton = useRef<HTMLButtonElement>(null);
  const uploadSequence = useRef(0);
  const objectUrl = useRef<string | null>(null);

  useEffect(() => () => {
    uploadSequence.current++;
    if (objectUrl.current) URL.revokeObjectURL(objectUrl.current);
  }, []);
  useEffect(() => { if (panel !== "closed") heading.current?.focus(); }, [panel]);

  function closePanel() {
    setPanel("closed");
    (panel === "qa" ? help : continueButton).current?.focus();
  }

  async function upload(file?: File) {
    if (!file) return;
    const sequence = ++uploadSequence.current;
    setError("");
    if (!formats.includes(file.type)) {
      setError("Choose a PNG, SVG, or JPEG image.");
      setLoading(false);
      return;
    }
    setLoading(true);
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.src = url;
    try {
      await image.decode();
      if (!image.naturalWidth || !image.naturalHeight) throw new Error("Empty image");
      if (sequence !== uploadSequence.current) { URL.revokeObjectURL(url); return; }
      if (objectUrl.current) URL.revokeObjectURL(objectUrl.current);
      objectUrl.current = url;
      setLogo(file);
      setSrc(url);
    } catch {
      URL.revokeObjectURL(url);
      if (sequence === uploadSequence.current) setError("This image could not be previewed. Choose another file.");
    } finally {
      if (sequence === uploadSequence.current) setLoading(false);
    }
  }

  return (
    <section className="section-shell logo-placement">
      <h1>Place Your Logo</h1>
      <div className={`logo-layout ${panel !== "closed" ? "logo-layout-open" : ""}`}>
        <LogoPreview src={src} />
        <form className="logo-form" onSubmit={(event) => {
          event.preventDefault();
          if (!logo || loading) { setError("Choose a usable logo image before continuing."); return; }
          setError("");
          setPanel("payment");
        }}>
          <div className="logo-form-heading">
            <p className="section-label">STEP 1</p>
            <button ref={help} type="button" className="logo-icon-button" aria-label="Open Q&A" aria-expanded={panel === "qa"} aria-controls="logo-shared-panel" onClick={() => setPanel("qa")}>?</button>
          </div>
          <label htmlFor="logo-email">Type your email</label>
          <input id="logo-email" type="email" autoComplete="email" required value={email} onChange={(event) => setEmail(event.target.value)} />
          <label htmlFor="logo-upload">Insert Your Logo</label>
          <input id="logo-upload" type="file" accept="image/png,image/svg+xml,image/jpeg,.png,.svg,.jpg,.jpeg" aria-describedby="logo-upload-note logo-error" onChange={(event) => { void upload(event.target.files?.[0]); }} />
          <p className="logo-note" id="logo-upload-note">PNG, SVG, or JPEG{logo ? ` · ${logo.name}` : ""}{loading ? " · Preparing preview…" : ""}</p>
          <div className="logo-price">
            <p><strong>$10 USD</strong> — one-time payment</p>
            <p className="logo-note">{productSummary}</p>
          </div>
          <fieldset>
            <legend>Choose your payment option</legend>
            <div className="logo-payment-options">
              {(["Stripe", "Link", "Crypto"] as const).map((option) => (
                <label key={option}><input type="radio" name="payment" value={option} required checked={method === option} onChange={() => setMethod(option)} />{option}</label>
              ))}
            </div>
          </fieldset>
          <p className="logo-error" id="logo-error" role="alert">{error}</p>
          <button ref={continueButton} className="button button-primary logo-feature-cta" type="submit" disabled={loading}>Continue to Payment</button>
          <p className="logo-note">Opens the payment panel. No payment is collected.</p>
        </form>
        {panel !== "closed" && (
          <aside id="logo-shared-panel" className="logo-shared-panel" aria-labelledby="logo-panel-title" onKeyDown={(event) => { if (event.key === "Escape") closePanel(); }}>
            <div className="logo-panel-heading">
              <h2 ref={heading} tabIndex={-1} id="logo-panel-title">{panel === "qa" ? "Q&A" : "Payment"}</h2>
              <button type="button" className="logo-icon-button" aria-label="Close panel" onClick={closePanel}>×</button>
            </div>
            {panel === "qa" ? (
              <div className="logo-faqs">
                {faqs.map(({ question, answer }) => (
                  <details key={question} className="logo-faq">
                    <summary>{question}</summary>
                    <p>{answer}</p>
                  </details>
                ))}
              </div>
            ) : (
              <>
                <p className="section-label">STEP 2 · {method}</p>
                <div className="logo-price">
                  <p><strong>Total: $10 USD</strong></p>
                  <p className="logo-note">One-time payment. {productSummary}</p>
                </div>
                <p className="logo-status">Demo only · No live payments</p>
                {method === "Crypto" ? (
                  <>
                    <dl className="logo-crypto-details">
                      <div><dt>Amount</dt><dd>10 USDT</dd></div>
                      <div><dt>Network</dt><dd>TRON / TRC-20</dd></div>
                      <div><dt>Address placeholder</dt><dd><code>T...f4a1</code></dd></div>
                    </dl>
                    <p className="logo-status" role="status">Payment Pending</p>
                    <p className="logo-note">Demo only. No live payments. The address is a placeholder. Do not send funds. No transaction is being verified.</p>
                  </>
                ) : <p className="logo-note">{method} checkout is not connected. No payment will be collected.</p>}
              </>
            )}
          </aside>
        )}
      </div>
    </section>
  );
}
