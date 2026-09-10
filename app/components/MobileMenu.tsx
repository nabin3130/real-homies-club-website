"use client";

import { useEffect, useRef } from "react";

type NavigationItem = {
  label: string;
  href: string;
};

type MobileMenuProps = {
  items: NavigationItem[];
};

export function MobileMenu({ items }: MobileMenuProps) {
  const menuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const closeMenu = () => menuRef.current?.removeAttribute("open");
    const handlePointerDown = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) closeMenu();
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const closeMenu = () => menuRef.current?.removeAttribute("open");

  return (
    <details className="mobile-menu" ref={menuRef}>
      <summary aria-label="Open navigation">
        <span className="menu-line" />
        <span className="menu-line" />
        <span className="menu-line" />
      </summary>

      <nav className="mobile-menu-links" aria-label="Mobile navigation">
        {items.map(({ label, href }) => (
          <a key={label} href={href} onClick={closeMenu}>
            {label}
          </a>
        ))}
      </nav>
    </details>
  );
}
