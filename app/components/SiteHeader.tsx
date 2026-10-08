import Link from "next/link";
import { MobileMenu } from "./MobileMenu";

export function SiteHeader({ home = false }: { home?: boolean }) {
  const items = [
    { label: "What We Do", href: "#what-we-do" },
    { label: "Work", href: "#work" },
    { label: "Conversations", href: "#conversations" },
    { label: "Contact", href: "#contact" },
  ].map((item) => ({ ...item, href: `${home ? "" : "/"}${item.href}` }));

  return (
    <header className="nav-wrap logo-site-header">
      <a href={home ? "#home" : "/#home"} className="brand" aria-label="real homies club home">
        <img src="/real-homies-logo.png" alt="" className="brand-mark" />
        <span>real homies club</span>
      </a>
      <nav className="nav-links" aria-label="Main navigation">
        {items.map(({ label, href }) => <a key={label} href={href}>{label}</a>)}
      </nav>
      <div className="logo-header-actions">
        <MobileMenu items={items} />
        <Link className="button button-primary logo-feature-cta logo-header-cta" href="/PlaceYourLogo">Place Your Logo</Link>
      </div>
    </header>
  );
}
