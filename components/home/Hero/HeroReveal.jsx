"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

/*
 * Scroll-driven hero reveal.
 *
 * The hero is pinned for REVEAL_VH of scrolling. While pinned, scroll
 * progress (0 → 1, smoothed with a spring) drives every piece of content
 * in. Because it is tied to scroll position, scrolling back up plays the
 * whole thing in reverse.
 */

// How far (in viewport heights) the visitor scrolls while the hero builds in.
const REVEAL_VH = 100;
// Delay before the "Scroll" cue appears, so the video plays on its own first.
const CUE_DELAY_MS = 2500;

const RevealContext = createContext(null);

function useRevealProgress() {
  return useContext(RevealContext);
}

/* ------------------------------------------------------------------ */
/* Stage: pinning, background treatment, scroll cue                    */
/* ------------------------------------------------------------------ */

export function HeroStage({ background, children }) {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.5,
  });

  // With reduced motion everything is simply shown.
  const done = useMotionValue(1);
  const progress = reduceMotion ? done : smooth;

  // Video: starts brighter and slightly zoomed, settles as content arrives.
  const videoScale = useTransform(progress, [0, 0.6], [1.08, 1]);
  const shade = useTransform(progress, [0, 0.5], [0.15, 0.55]);

  // Scroll cue: fades in after a delay, fades out on the first scroll.
  const [cueReady, setCueReady] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setCueReady(true), CUE_DELAY_MS);
    return () => clearTimeout(id);
  }, []);
  const cueOpacity = useTransform(progress, [0, 0.12], [1, 0]);

  return (
    <RevealContext.Provider value={progress}>
      <section
        ref={sectionRef}
        className="relative bg-[#111111]"
        style={
          reduceMotion
            ? undefined
            : { height: `calc(100dvh + ${REVEAL_VH}vh)` }
        }
      >
        <div
          className={
            reduceMotion
              ? "relative min-h-[100dvh] overflow-hidden"
              : "sticky top-0 h-[100dvh] overflow-hidden"
          }
        >
          {/* Background video and texture */}
          <motion.div
            className="absolute inset-0"
            style={{ scale: videoScale }}
          >
            {background}
          </motion.div>

          {/* Darkens as the content comes in, for readability */}
          <motion.div
            className="absolute inset-0 bg-black"
            style={{ opacity: shade }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

          {children}

          {/* Scroll cue */}
          {!reduceMotion && (
            <div
              className={`pointer-events-none absolute inset-x-0 bottom-6 z-20 flex justify-center transition-opacity duration-1000 sm:bottom-8 ${
                cueReady ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden="true"
            >
              <motion.div
                className="flex flex-col items-center gap-3"
                style={{ opacity: cueOpacity }}
              >
                <span className="heading-font text-[11px] uppercase tracking-[0.3em] text-[#F4EBDC]/80 sm:text-[12px]">
                  Scroll
                </span>
                <span className="relative block h-10 w-px overflow-hidden bg-[#F4EBDC]/20">
                  <span className="hero-scroll-cue absolute left-0 top-0 block h-1/2 w-px bg-[#ED4823]" />
                </span>
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </RevealContext.Provider>
  );
}

/* ------------------------------------------------------------------ */
/* Reveal: fade + rise + un-blur between two points of the progress    */
/* ------------------------------------------------------------------ */

export function Reveal({
  start,
  end,
  y = 28,
  blur = 10,
  className = "",
  children,
}) {
  const progress = useRevealProgress();
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const ty = useTransform(progress, [start, end], [y, 0]);
  const filter = useTransform(
    progress,
    [start, end],
    [`blur(${blur}px)`, "blur(0px)"]
  );
  // Fully hidden content can't be clicked or tabbed to.
  const visibility = useTransform(progress, (v) =>
    v <= start + 0.001 ? "hidden" : "visible"
  );

  return (
    <motion.div
      className={className}
      style={{ opacity, y: ty, filter, visibility }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* RevealLetters: each letter rises out of a mask, staggered           */
/* ------------------------------------------------------------------ */

function Letter({ char, start, end }) {
  const progress = useRevealProgress();
  const y = useTransform(progress, [start, end], ["160%", "0%"]);
  const rotate = useTransform(progress, [start, end], [8, 0]);
  return (
    <motion.span
      className="inline-block origin-bottom-left will-change-transform"
      style={{ y, rotate }}
    >
      {char}
    </motion.span>
  );
}

export function RevealLetters({ text, start, end, overlap = 0.55 }) {
  const chars = Array.from(text);
  // Each letter animates over `slot`; consecutive letters overlap.
  const span = end - start;
  const slot = span / (1 + (chars.length - 1) * (1 - overlap));
  const step = slot * (1 - overlap);

  return (
    // Padding gives the Q's tail room inside the mask; the negative
    // margin cancels it out so the layout does not move.
    <span
      aria-hidden="true"
      className="-mb-[0.18em] inline-block overflow-hidden pb-[0.18em] align-bottom"
    >
      {chars.map((char, i) => (
        <Letter
          key={i}
          char={char}
          start={start + i * step}
          end={start + i * step + slot}
        />
      ))}
    </span>
  );
}
