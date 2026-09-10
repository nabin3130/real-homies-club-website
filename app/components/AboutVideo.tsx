"use client";

import { useEffect, useRef } from "react";

export function AboutVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncPlayback = () => {
      const video = videoRef.current;
      if (!video) return;

      if (reducedMotion.matches) {
        video.pause();
        video.currentTime = 0;
        return;
      }

      void video.play().catch(() => {
        // Some browsers may defer autoplay until their media policy allows it.
      });
    };

    syncPlayback();
    reducedMotion.addEventListener("change", syncPlayback);

    return () => reducedMotion.removeEventListener("change", syncPlayback);
  }, []);

  return (
    <div className="about-video-wrap" aria-hidden="true">
      <video
        ref={videoRef}
        className="about-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        controls={false}
        disablePictureInPicture
        tabIndex={-1}
      >
        <source src="/real-homies-club-about-interviews.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
