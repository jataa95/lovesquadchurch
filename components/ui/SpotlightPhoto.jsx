"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

/*
 * Full-bleed black and white photo background with a mouse effect, used
 * by the footer and the menu overlay. Place it as the first child of a
 * `relative isolate overflow-hidden` container: it listens to the mouse
 * over that container.
 *
 * Desktop: a soft spotlight follows the cursor and lifts the darkness
 * off the photo; the photo drifts slightly against the mouse (parallax).
 * Off for touch screens and reduced motion.
 */
export default function SpotlightPhoto({ src, priority = false }) {
  const rootRef = useRef(null);

  useGSAP(
    () => {
      const container = rootRef.current?.parentElement;
      if (!container) return;
      const mm = gsap.matchMedia();
      mm.add(
        "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
        () => {
          const q = gsap.utils.selector(rootRef);
          const photo = q("[data-spot-photo]");
          const light = q("[data-spot-light]");
          const px = gsap.quickTo(photo, "x", { duration: 1.2, ease: "power3.out" });
          const py = gsap.quickTo(photo, "y", { duration: 1.2, ease: "power3.out" });
          const pos = { x: 50, y: 50 };
          const paint = () =>
            light.forEach((el) => {
              el.style.setProperty("--mx", `${pos.x}%`);
              el.style.setProperty("--my", `${pos.y}%`);
            });

          const onMove = (e) => {
            const r = container.getBoundingClientRect();
            const nx = (e.clientX - r.left) / r.width - 0.5;
            const ny = (e.clientY - r.top) / r.height - 0.5;
            px(nx * -40);
            py(ny * -24);
            gsap.to(pos, {
              x: (nx + 0.5) * 100,
              y: (ny + 0.5) * 100,
              duration: 0.6,
              ease: "power3.out",
              overwrite: true,
              onUpdate: paint,
            });
            gsap.to(light, { opacity: 1, duration: 0.6, overwrite: "auto" });
          };
          const onLeave = () => {
            gsap.to(light, { opacity: 0, duration: 0.8, overwrite: "auto" });
            px(0);
            py(0);
          };

          container.addEventListener("mousemove", onMove);
          container.addEventListener("mouseleave", onLeave);
          return () => {
            container.removeEventListener("mousemove", onMove);
            container.removeEventListener("mouseleave", onLeave);
          };
        }
      );
      return () => mm.revert();
    },
    { scope: rootRef }
  );

  return (
    <div ref={rootRef} aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      {/* Photo, slightly oversized for the parallax */}
      <div data-spot-photo className="absolute -inset-10 will-change-transform">
        <Image src={src} alt="" fill sizes="100vw" priority={priority} className="object-cover" />
      </div>
      {/* Darkening */}
      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />
      {/* Spotlight */}
      <div
        data-spot-light
        className="absolute inset-0 opacity-0 mix-blend-soft-light"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.55), transparent 70%)",
        }}
      />
      <div
        data-spot-light
        className="absolute inset-0 opacity-0"
        style={{
          background:
            "radial-gradient(260px circle at var(--mx, 50%) var(--my, 50%), rgba(237,72,35,0.14), transparent 70%)",
        }}
      />
    </div>
  );
}
