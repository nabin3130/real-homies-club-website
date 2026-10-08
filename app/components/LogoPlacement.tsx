"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { LogoPreview } from "./LogoPreview";

type Panel = "closed" | "payment" | "qa";
type Method = "Stripe" | "Link" | "Crypto";
type MockState = "idle" | "pending" | "failed";
const development = process.env.NODE_ENV === "development";
const formats = ["image/png", "image/jpeg", "image/svg+xml"];

export function LogoPlacement() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [logo, setLogo] = useState<File | null>(null);
  const [src, setSrc] = useState<string | null>(null);
  const [method, setMethod] = useState<Method | "">("");
  const [panel, setPanel] = useState<Panel>("closed");
  const [mockState, setMockState] = useState<MockState>("idle");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const help = useRef<HTMLButtonElement>(null);
  const confirmed = useRef<HTMLButtonElement>(null);
  const uploadSequence = useRef(0);
  const objectUrl = useRef<string | null>(null);

  useEffect(() => () => {
    uploadSequence.current++;
    if (objectUrl.current) URL.revokeObjectURL(objectUrl.current);
  }, []);
  useEffect(() => { if (panel !== "closed") heading.current?.focus(); }, [panel]);

  function closePanel() {
    setPanel("closed");
    (panel === "qa" ? help : confirmed).current?.focus();
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
          <fieldset>
            <legend>Choose your payment option</legend>
            <div className="logo-payment-options">
              {(["Stripe", "Link", "Crypto"] as const).map((option) => (
                <label key={option}><input type="radio" name="payment" value={option} required checked={method === option} onChange={() => setMethod(option)} />{option}</label>
              ))}
            </div>
          </fieldset>
          <p className="logo-error" id="logo-error" role="alert">{error}</p>
          <button ref={confirmed} className="button button-primary" type="submit" disabled={loading}>Confirmed</button>
          <p className="logo-note">Opens the payment panel. No payment is collected.</p>
        </form>
        {panel !== "closed" && (
          <aside id="logo-shared-panel" className="logo-shared-panel" aria-labelledby="logo-panel-title" onKeyDown={(event) => { if (event.key === "Escape") closePanel(); }}>
            <div className="logo-panel-heading">
              <h2 ref={heading} tabIndex={-1} id="logo-panel-title">{panel === "qa" ? "Q&A" : "Payment"}</h2>
              <button type="button" className="logo-icon-button" aria-label="Close panel" onClick={closePanel}>×</button>
            </div>
            {panel === "qa" ? (
              <><p className="logo-status">Temporary content</p><p>Questions and answers will appear here once the content is approved.</p></>
            ) : (
              <>
                <p className="section-label">STEP 2 · {method}</p>
                <p className="logo-status">{development ? "Development mock · No real payment" : "Payments are not available yet"}</p>
                {development ? (
                  <>
                    <p>Preview payment states using the controls below. They do not process or verify a transaction.</p>
                    <p role="status">{mockState === "pending" ? "Mock payment pending" : mockState === "failed" ? "Mock payment failed" : "Mock payment not started"}</p>
                    <div className="logo-mock-controls">
                      <button type="button" className="button" onClick={() => setMockState("pending")}>Preview pending</button>
                      <button type="button" className="button" onClick={() => setMockState("failed")}>Preview failure</button>
                      <button type="button" className="button button-primary" onClick={() => router.push("/AfterConfirmation?preview=mock")}>Preview confirmation layout</button>
                    </div>
                  </>
                ) : <p>Payment processing has not been connected.</p>}
              </>
            )}
          </aside>
        )}
      </div>
    </section>
  );
}
