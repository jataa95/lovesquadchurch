"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

/*
 * GSAP scroll reveal for the homepage hero.
 *
 * ScrollTrigger pins the hero for REVEAL_DISTANCE of scrolling and scrubs
 * one timeline with it, so the reveal plays forwards when scrolling down
 * and in reverse when scrolling back up. SplitText splits the headings into
 * masked characters/lines that rise into place.
 *
 * Content pieces are found by their data-hero="…" attributes:
 *   tag, title, subtitle, desc-text, desc-cta,
 *   latest-title, latest-cta, latest-card
 */

// How long the hero stays pinned while the content builds in.
const REVEAL_DISTANCE = "+=110%";
// Seconds of lag between the scrollbar and the animation (smoothness).
const SCRUB = 1.2;
// Delay before the "Scroll" cue appears, so the video plays on its own first.
const CUE_DELAY_MS = 2500;

export function HeroStage({ background, children }) {
  const stageRef = useRef(null);
  const [cueReady, setCueReady] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setCueReady(true), CUE_DELAY_MS);
    return () => clearTimeout(id);
  }, []);

  useGSAP(
    () => {
      const q = gsap.utils.selector(stageRef);
      const content = q('[data-hero="content"]');
      const mm = gsap.matchMedia();

      // Visitors who prefer reduced motion get everything straight away.
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(content, { autoAlpha: 1 });
        gsap.set(q('[data-hero="shade"]'), { opacity: 0.55 });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        let cancelled = false;
        let tl;
        const splits = [];

        // Split text only once the web fonts are in, so the
        // characters and lines are measured with the real font.
        document.fonts.ready.then(() => {
          if (cancelled) return;

          const split = (selector, vars) => {
            const el = q(selector)[0];
            if (!el) return null;
            const s = SplitText.create(el, vars);
            splits.push(s);
            return s;
          };

          const tag = split('[data-hero="tag"]', {
            type: "chars",
            mask: "chars",
            charsClass: "hero-char",
          });
          const title = split('[data-hero="title"]', {
            type: "chars",
            mask: "chars",
            charsClass: "hero-title-char",
          });
          const subtitle = split('[data-hero="subtitle"]', {
            type: "chars",
            mask: "chars",
            charsClass: "hero-char",
          });
          const desc = split('[data-hero="desc-text"]', {
            type: "lines",
            mask: "lines",
            linesClass: "hero-line",
          });
          const latest = split('[data-hero="latest-title"]', {
            type: "chars",
            mask: "chars",
            charsClass: "hero-char",
          });

          tl = gsap.timeline({
            defaults: { ease: "power3.out" },
            scrollTrigger: {
              trigger: stageRef.current,
              start: "top top",
              end: REVEAL_DISTANCE,
              pin: true,
              // Measure this pin before the scroll effects further down,
              // which are created earlier (before the fonts load).
              refreshPriority: 1,
              scrub: SCRUB,
              anticipatePin: 1,
            },
          });

          // The video settles and darkens as the content arrives.
          tl.fromTo(
            q('[data-hero="bg"]'),
            { scale: 1.12 },
            { scale: 1, ease: "none", duration: 2.4 },
            0
          )
            .fromTo(
              q('[data-hero="shade"]'),
              { opacity: 0.12 },
              { opacity: 0.58, ease: "power1.inOut", duration: 1.1 },
              0
            )
            .to(
              q('[data-hero="cue"]'),
              { autoAlpha: 0, y: 24, duration: 0.35, ease: "power2.in" },
              0
            );

          // "WELCOME HOME!": characters rise from their masks.
          if (tag)
            tl.from(
              tag.chars,
              { yPercent: 110, duration: 0.6, stagger: 0.025 },
              0.15
            );

          // "LOVESQUAD": the signature moment. Each letter rises and
          // un-stretches out of its slot, staggered from the centre.
          if (title)
            tl.from(
              title.chars,
              {
                yPercent: 170,
                scaleY: 1.35,
                rotate: 4,
                transformOrigin: "50% 100%",
                duration: 1,
                ease: "expo.out",
                stagger: { each: 0.06, from: "center" },
              },
              0.3
            );

          // "CHURCH": letters rise while the tracking tightens.
          if (subtitle)
            tl.from(
              subtitle.chars,
              { yPercent: 110, duration: 0.6, stagger: 0.04 },
              1.0
            ).fromTo(
              q('[data-hero="subtitle"]'),
              { letterSpacing: "0.6em" },
              { letterSpacing: "-0.02em", duration: 0.9, ease: "power2.out" },
              1.0
            );

          // Description lines slide up from their masks, then the button.
          if (desc)
            tl.from(
              desc.lines,
              { yPercent: 105, duration: 0.7, stagger: 0.12 },
              1.35
            );
          tl.fromTo(
            q('[data-hero="desc-cta"]'),
            { autoAlpha: 0, y: 24 },
            { autoAlpha: 1, y: 0, duration: 0.6 },
            1.6
          );

          // Latest message: heading, card wipe-in with the thumbnail
          // settling inside it, then the button.
          if (latest)
            tl.from(
              latest.chars,
              { yPercent: 110, duration: 0.6, stagger: 0.02 },
              1.5
            );
          tl.fromTo(
            q('[data-hero="latest-card"]'),
            { clipPath: "inset(100% 0% 0% 0% round 24px)" },
            {
              clipPath: "inset(0% 0% 0% 0% round 24px)",
              duration: 0.9,
              ease: "power4.inOut",
            },
            1.65
          )
            .from(
              q('[data-hero="latest-card"] img'),
              { scale: 1.35, duration: 1.1, ease: "power3.out" },
              1.65
            )
            .fromTo(
              q('[data-hero="latest-cta"]'),
              { autoAlpha: 0, y: 20 },
              { autoAlpha: 1, y: 0, duration: 0.6 },
              1.9
            )
            // A short hold with everything in place before the hero scrolls on.
            .to({}, { duration: 0.35 });

          // Starting states are set; now it is safe to show the content.
          gsap.set(content, { autoAlpha: 1 });

          // The pin just added scroll space above everything else, so put
          // the scroll animations back in page order and re-measure them.
          ScrollTrigger.sort();
          ScrollTrigger.refresh();
        });

        return () => {
          cancelled = true;
          tl?.scrollTrigger?.kill();
          tl?.kill();
          splits.forEach((s) => s.revert());
        };
      });

      return () => mm.revert();
    },
    { scope: stageRef }
  );

  return (
    <section
      ref={stageRef}
      className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-[#111111]"
    >
      {/* Background video and texture */}
      <div data-hero="bg" className="absolute inset-0 will-change-transform">
        {background}
      </div>

      {/* Darkens as the content arrives, for readability */}
      <div
        data-hero="shade"
        className="absolute inset-0 bg-black"
        style={{ opacity: 0.12 }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

      {/* Hidden until GSAP has set the starting states (no flash) */}
      <div
        data-hero="content"
        className="invisible relative z-10 flex flex-1 flex-col"
      >
        {children}
      </div>

      {/* Scroll cue: sits at the bottom of the screen (not of the section,
          which can be taller on short screens). Fades in after a delay and
          scrubs out on scroll. */}
      <div
        className={`pointer-events-none absolute inset-x-0 top-[calc(100dvh-94px)] z-20 flex justify-center transition-opacity duration-1000 motion-reduce:hidden sm:top-[calc(100dvh-102px)] ${
          cueReady ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      >
        <div data-hero="cue" className="flex flex-col items-center gap-3">
          <span className="heading-font text-[11px] uppercase tracking-[0.3em] text-[#F4EBDC]/80 sm:text-[12px]">
            Scroll
          </span>
          <span className="relative block h-10 w-px overflow-hidden bg-[#F4EBDC]/20">
            <span className="hero-scroll-cue absolute left-0 top-0 block h-1/2 w-px bg-[#ED4823]" />
          </span>
        </div>
      </div>
    </section>
  );
}
