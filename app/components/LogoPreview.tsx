import type { CSSProperties } from "react";

// Illustrative only. These values do not define the final video placement.
export const previewPlacement = { x: 50, y: 50, width: 36 };

type Placement = typeof previewPlacement;
export function LogoPreview({ src, placement = previewPlacement }: { src: string | null; placement?: Placement }) {
  const style = {
    left: `${placement.x}%`, top: `${placement.y}%`, width: `${placement.width}%`,
  } satisfies CSSProperties;
  return (
    <section className="logo-preview-section" aria-label="Logo preview">
      <p className="section-label">LOGO PREVIEW</p>
      <div className="logo-preview">
        {src ? <img className="logo-preview-image" src={src} alt="Your uploaded logo" style={style} /> : <span>Your logo preview</span>}
      </div>
      <p className="logo-note">9:16 preview · Illustrative placement. Final position is to be confirmed.</p>
    </section>
  );
}
