// Provisional demo sizing; final sample asset and placement dimensions remain U03.
export const previewPlacement = { left: 6, top: 4, width: 28 };

export function LogoPreview({ src }: { src: string | null }) {
  return (
    <section className="logo-preview-section" aria-label="Logo preview">
      <p className="section-label">LOGO PREVIEW</p>
      <div className="logo-preview">
        <img className="logo-preview-background" src="/logo-placement-sample.jpg" alt="Sample interview video still" />
        <div className="logo-preview-overlay" style={{ left: `${previewPlacement.left}%`, top: `${previewPlacement.top}%`, width: `${previewPlacement.width}%` }}>
          {src ? <img className="logo-preview-image" src={src} alt="Your uploaded logo" /> : <span>Your logo</span>}
        </div>
      </div>
      <p className="logo-note">Sample preview · Upper-left square placement. Your logo keeps its original proportions.</p>
    </section>
  );
}
