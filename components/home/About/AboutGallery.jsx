"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const ABOUT_IMAGES = [
  "/images/about/about1.jpg",
  "/images/about/about2.jpg",
  "/images/about/about3.jpg",
  "/images/about/about4.jpg",
  "/images/about/about5.jpg",
  "/images/about/about6.jpg",
];

// Seconds each picture stays fully on screen before the next slides in.
const INTERVAL = 0.5;
// Length of the slide transition, in seconds.
const TRANSITION = 0.5;
// Slow zoom while a picture is on screen (1 = none).
const DRIFT_SCALE = 1.06;

const COUNT = ABOUT_IMAGES.length;

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Slow zoom on the picture currently on screen.
function driftImage(img) {
  if (!img || prefersReducedMotion()) return;
  gsap.to(img, {
    scale: DRIFT_SCALE,
    duration: INTERVAL + TRANSITION,
    ease: "none",
    overwrite: "auto",
  });
}

/*
 * Premium auto-advancing slider: the next picture wipes in from the side
 * while settling from a slight zoom, and the outgoing one slides away
 * underneath (parallax). Pauses on hover and while off screen. Swipe
 * (touch) or drag (mouse) and the dots move between pictures.
 */
export default function AboutGallery() {
  const rootRef = useRef(null);
  const slideRefs = useRef([]);
  const imgRefs = useRef([]);
  const activeRef = useRef(0);
  const busyRef = useRef(false);
  const timerRef = useRef(null);
  const pausedRef = useRef({ hover: false, offscreen: true, hidden: false });
  const dragX = useRef(null);

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(true);
  // Bumped when a slide-in finishes (and on resume): starts the countdown.
  const [settled, setSettled] = useState(0);

  const isPaused = () => {
    const p = pausedRef.current;
    return p.hover || p.offscreen || p.hidden;
  };

  const goTo = useCallback((nextIndex, direction = 1) => {
    const from = activeRef.current;
    const to = (nextIndex + COUNT) % COUNT;
    if (to === from || busyRef.current) return;
    busyRef.current = true;

    const out = slideRefs.current[from];
    const inc = slideRefs.current[to];
    const outImg = imgRefs.current[from];
    const incImg = imgRefs.current[to];
    const dir = direction >= 0 ? 1 : -1;

    activeRef.current = to;
    setActive(to);

    const done = () => {
      gsap.set(out, { zIndex: 0, autoAlpha: 0, xPercent: 0 });
      gsap.set(outImg, { xPercent: 0, scale: 1 });
      gsap.set(inc, { zIndex: 1 });
      busyRef.current = false;
      setSettled((n) => n + 1);
    };

    gsap.set(inc, { zIndex: 2, autoAlpha: 1 });

    if (prefersReducedMotion()) {
      gsap.fromTo(
        inc,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: "power1.inOut", onComplete: done }
      );
      return;
    }

    const tl = gsap.timeline({
      defaults: { duration: TRANSITION, ease: "power3.inOut" },
      onComplete: done,
    });
    tl.fromTo(
      inc,
      {
        clipPath:
          dir > 0 ? "inset(0% 0% 0% 100%)" : "inset(0% 100% 0% 0%)",
      },
      { clipPath: "inset(0% 0% 0% 0%)" },
      0
    )
      .fromTo(
        incImg,
        { scale: 1.12, xPercent: 8 * dir },
        { scale: 1, xPercent: 0 },
        0
      )
      .to(outImg, { xPercent: -14 * dir }, 0)
      .to(out, { xPercent: -5 * dir }, 0)
      .add(() => driftImage(imgRefs.current[to]), TRANSITION * 0.7);
  }, []);

  // Auto-advance. The countdown starts once a picture has fully slid in,
  // so each one is on screen for INTERVAL seconds.
  const schedule = useCallback(() => {
    clearTimeout(timerRef.current);
    if (isPaused()) return;
    timerRef.current = setTimeout(() => {
      goTo(activeRef.current + 1, 1);
    }, INTERVAL * 1000);
  }, [goTo]);

  useEffect(() => {
    schedule();
    return () => clearTimeout(timerRef.current);
  }, [settled, paused, schedule]);

  const updatePause = (key, value) => {
    const wasPaused = isPaused();
    pausedRef.current[key] = value;
    setPaused(isPaused());
    if (wasPaused && !isPaused()) setSettled((n) => n + 1);
    const img = imgRefs.current[activeRef.current];
    if (isPaused()) gsap.getTweensOf(img).forEach((t) => t.pause());
    else gsap.getTweensOf(img).forEach((t) => t.resume());
  };

  // Initial state, plus pausing while off screen or in a background tab.
  useGSAP(
    () => {
      slideRefs.current.forEach((el, i) =>
        gsap.set(el, { zIndex: i === 0 ? 1 : 0, autoAlpha: i === 0 ? 1 : 0 })
      );
      driftImage(imgRefs.current[0]);

      const io = new IntersectionObserver(
        ([entry]) => updatePause("offscreen", !entry.isIntersecting),
        { threshold: 0.25 }
      );
      io.observe(rootRef.current);
      const onVisibility = () => updatePause("hidden", document.hidden);
      document.addEventListener("visibilitychange", onVisibility);
      return () => {
        io.disconnect();
        document.removeEventListener("visibilitychange", onVisibility);
      };
    },
    { scope: rootRef }
  );

  const prev = () => goTo(activeRef.current - 1, -1);
  const next = () => goTo(activeRef.current + 1, 1);

  // Swipe (touch) or drag (mouse) sideways to change picture.
  const onPointerDown = (e) => {
    if (e.target.closest("button")) return;
    dragX.current = e.clientX;
  };
  const onPointerUp = (e) => {
    if (dragX.current == null) return;
    const dx = e.clientX - dragX.current;
    dragX.current = null;
    if (Math.abs(dx) < 40) return;
    if (dx < 0) next();
    else prev();
  };

  return (
    <section
      ref={rootRef}
      aria-roledescription="carousel"
      aria-label="Life at LoveSquad"
      className="relative w-full"
      onMouseEnter={() => updatePause("hover", true)}
      onMouseLeave={() => updatePause("hover", false)}
    >
      <div
        className="relative w-full cursor-grab select-none overflow-hidden bg-[#151515] active:cursor-grabbing"
        style={{ height: "var(--about-gallery-h)", touchAction: "pan-y" }}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (dragX.current = null)}
      >
        {ABOUT_IMAGES.map((src, i) => (
          <div
            key={src}
            ref={(el) => (slideRefs.current[i] = el)}
            className="absolute inset-0 overflow-hidden will-change-transform"
            style={{ visibility: i === 0 ? "visible" : "hidden" }}
            aria-hidden={i !== active}
          >
            <div
              ref={(el) => (imgRefs.current[i] = el)}
              className="absolute inset-0 will-change-transform"
            >
              <Image
                src={src}
                alt={`Life at LoveSquad, photo ${i + 1} of ${COUNT}`}
                fill
                sizes="100vw"
                priority={i === 0}
                draggable={false}
                className="pointer-events-none select-none object-cover"
              />
            </div>
          </div>
        ))}

        {/* Soft shade so the dots stay visible on bright photos */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-20 bg-gradient-to-t from-black/45 to-transparent" />

        {/* Dot indicators, on the bottom of the picture */}
        <div className="absolute inset-x-0 bottom-2 z-[4] flex justify-center sm:bottom-4">
          {ABOUT_IMAGES.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => goTo(i, i > activeRef.current ? 1 : -1)}
              aria-label={`Show photo ${i + 1}`}
              aria-current={i === active}
              className="group flex h-6 w-3 items-center justify-center"
            >
              <span
                className={`block h-2 w-2 rounded-full transition-all duration-300 ease-out ${
                  i === active
                    ? "scale-125 bg-[#ED4823]"
                    : "bg-[#F4EBDC]/55 group-hover:bg-[#F4EBDC]/90"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
