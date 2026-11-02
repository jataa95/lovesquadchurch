"use client";

import { useEffect, useRef } from "react";
import { hero } from "@/data/hero";

// Full-bleed, muted, looping background video for the homepage hero.
// The poster image shows while the video loads, and instead of the video
// for visitors who have reduced motion turned on.
export default function HeroBackgroundVideo() {
  const videoRef = useRef(null);
  const { src, poster } = hero.backgroundVideo ?? {};

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // React does not always render the `muted` attribute on the server,
    // and browsers (iOS Safari especially) only autoplay muted video.
    video.muted = true;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      video.pause();
    } else {
      video.play().catch(() => {
        // Autoplay blocked (e.g. low-power mode): the poster stays visible.
      });
    }
  }, []);

  if (!src) return null;

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 h-full w-full object-cover"
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
