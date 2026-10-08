"use client";

import { useEffect, useState, type CSSProperties } from "react";

const colors = ["#7C3AED", "#ef8dc8", "#f3cf45", "#c84b22", "#34a98a", "#5597e7"];

export function ConfirmationConfetti() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const stopIfReduced = () => { if (preference.matches) setVisible(false); };
    stopIfReduced();
    preference.addEventListener("change", stopIfReduced);
    const timer = window.setTimeout(() => setVisible(false), 4000);
    return () => {
      window.clearTimeout(timer);
      preference.removeEventListener("change", stopIfReduced);
    };
  }, []);

  if (!visible) return null;
  return (
    <div className="confirmation-confetti" aria-hidden="true">
      {Array.from({ length: 48 }, (_, index) => (
        <span key={index} style={{
          left: `${(index * 37) % 100}%`,
          backgroundColor: colors[index % colors.length],
          borderRadius: index % 3 === 0 ? "50%" : "2px",
          "--confetti-delay": `${(index % 6) * 0.04}s`,
          "--confetti-drift": `${((index * 29) % 160) - 80}px`,
          "--confetti-turn": `${index % 2 ? 540 : -540}deg`,
        } as CSSProperties} />
      ))}
    </div>
  );
}
