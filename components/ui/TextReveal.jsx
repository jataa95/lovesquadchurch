"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

/*
 * Site-wide reveal for headings and text, mounted once in the layout.
 *
 * Headings (h1, h2, h3) get one of four styles, chosen per section so
 * neighbouring sections feel different:
 *   0 "mask"  – lines rise out of a mask
 *   1 "flip"  – letters flip up in 3D
 *   2 "blur"  – words sharpen in from a blur
 *   3 "slide" – words slide in from the left
 * Body text (p) rises in softly line by line.
 *
 * Each element animates once, when it scrolls into view. Parts of the
 * site that already have their own animation are left alone (see SKIP),
 * as is everything for visitors who prefer reduced motion.
 */

const SKIP = [
  "[data-hero]", // homepage hero
  "[data-hero-content]", // About hero
  "[data-collage-text]", // homepage About collage
  "[data-panel]", // gallery panels
  "[data-story-caption]", // video testimony caption
  "[data-no-reveal]",
  "footer",
  "[role=dialog]",
].join(",");

const START = "top 88%";

const HEADING_STYLES = [
  // 0: lines rise from a mask
  (el) =>
    SplitText.create(el, {
      type: "lines",
      mask: "lines",
      autoSplit: true,
      onSplit: (self) =>
        gsap.from(self.lines, {
          yPercent: 110,
          duration: 1,
          ease: "expo.out",
          stagger: 0.1,
          scrollTrigger: { trigger: el, start: START, once: true },
        }),
    }),
  // 1: letters flip up
  (el) => {
    gsap.set(el, { perspective: 800 });
    return SplitText.create(el, {
      type: "words,chars",
      autoSplit: true,
      onSplit: (self) =>
        gsap.from(self.chars, {
          rotateX: -90,
          yPercent: 30,
          opacity: 0,
          transformOrigin: "50% 100%",
          duration: 0.8,
          ease: "back.out(1.6)",
          stagger: 0.025,
          scrollTrigger: { trigger: el, start: START, once: true },
        }),
    });
  },
  // 2: words sharpen in from a blur
  (el) =>
    SplitText.create(el, {
      type: "words",
      autoSplit: true,
      onSplit: (self) =>
        gsap.from(self.words, {
          opacity: 0,
          filter: "blur(12px)",
          y: 16,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.07,
          scrollTrigger: { trigger: el, start: START, once: true },
        }),
    }),
  // 3: words slide in from the left
  (el) =>
    SplitText.create(el, {
      type: "words",
      autoSplit: true,
      onSplit: (self) =>
        gsap.from(self.words, {
          opacity: 0,
          x: -40,
          duration: 0.8,
          ease: "power4.out",
          stagger: 0.06,
          scrollTrigger: { trigger: el, start: START, once: true },
        }),
    }),
];

const revealText = (el) =>
  SplitText.create(el, {
    type: "lines",
    autoSplit: true,
    onSplit: (self) =>
      gsap.from(self.lines, {
        opacity: 0,
        y: 18,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.06,
        scrollTrigger: { trigger: el, start: START, once: true },
      }),
  });

export default function TextReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    const splits = [];

    const run = () => {
      if (cancelled) return;
      const main = document.querySelector("main");
      if (!main) return;

      // Group text into blocks so neighbouring blocks get different heading
      // styles: the outermost <section> it sits in, or (for text outside
      // any section) its own header/article/parent container.
      const blockIndex = new Map();
      const blockOf = (el) => {
        let outer = null;
        for (let s = el.closest("section"); s; s = s.parentElement?.closest("section")) outer = s;
        return outer || el.parentElement.closest("header, article") || el.parentElement;
      };

      main.querySelectorAll("h1, h2, h3, p").forEach((el) => {
        if (el.closest(SKIP) || el.dataset.revealed) return;
        if (!el.textContent.trim()) return;
        const block = blockOf(el);
        if (!blockIndex.has(block)) blockIndex.set(block, blockIndex.size);
        const headingStyle =
          HEADING_STYLES[blockIndex.get(block) % HEADING_STYLES.length];
        el.dataset.revealed = "1";
        splits.push(el.tagName === "P" ? revealText(el) : headingStyle(el));
      });

      ScrollTrigger.refresh();
    };

    // Split with the real fonts, after the page's own scripts have set up.
    const id = setTimeout(() => document.fonts.ready.then(run), 50);

    return () => {
      cancelled = true;
      clearTimeout(id);
      splits.forEach((s) => s.revert());
      document
        .querySelectorAll("[data-revealed]")
        .forEach((el) => delete el.dataset.revealed);
    };
  }, [pathname]);

  return null;
}
