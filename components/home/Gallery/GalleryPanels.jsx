"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { galleryPanels } from "@/data/gallery";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const pad = (n) => String(n).padStart(2, "0");

/*
 * Expanding photo panels.
 * Desktop: a row of 7 tall strips; hovering (or focusing) a strip widens
 * it to show the full photo and its caption while the others narrow.
 * Phones/tablets: the strips stack as bands; tapping one opens it.
 * One panel is always open. Strips rise in one by one on first view.
 */
export default function GalleryPanels() {
  const rootRef = useRef(null);
  const [open, setOpen] = useState(0);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-panel]", {
          y: 60,
          autoAlpha: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: rootRef.current, start: "top 80%" },
        });
      });
      return () => mm.revert();
    },
    { scope: rootRef }
  );

  return (
    <div
      ref={rootRef}
      className="flex h-[720px] flex-col gap-2 sm:h-[820px] lg:h-[560px] lg:flex-row lg:gap-2.5"
    >
      {galleryPanels.map((p, i) => {
        const isOpen = i === open;
        return (
          <button
            key={p.src}
            type="button"
            data-panel
            aria-expanded={isOpen}
            aria-label={`${p.theme}: ${p.title}`}
            onMouseEnter={() => setOpen(i)}
            onFocus={() => setOpen(i)}
            onClick={() => setOpen(i)}
            className={`group relative min-h-0 min-w-0 cursor-pointer overflow-hidden bg-[#151515] text-left transition-[flex-grow] duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ED4823] ${
              isOpen ? "grow-[6] lg:grow-[5]" : "grow"
            } basis-0`}
          >
            <Image
              src={p.src}
              alt=""
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className={`object-cover transition-[transform,opacity] duration-[900ms] ease-out ${
                isOpen ? "scale-100 opacity-100" : "scale-110 opacity-75"
              }`}
            />

            {/* Darkening for legibility */}
            <span
              className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
                isOpen
                  ? "bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-100"
                  : "bg-black/30 opacity-100"
              }`}
            />

            {/* Closed label: vertical on desktop, horizontal on phones */}
            <span
              className={`heading-font pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[12px] font-bold uppercase tracking-[0.18em] text-[#F5EBDD] transition-opacity duration-300 lg:bottom-5 lg:left-1/2 lg:top-auto lg:-translate-x-1/2 lg:translate-y-0 lg:rotate-180 lg:whitespace-nowrap lg:[writing-mode:vertical-rl] ${
                isOpen ? "opacity-0" : "opacity-100 delay-200"
              }`}
            >
              {pad(i + 1)} · {p.theme}
            </span>

            {/* Open caption */}
            <span
              className={`pointer-events-none absolute inset-x-0 bottom-0 block p-5 transition-all duration-500 sm:p-7 ${
                isOpen
                  ? "translate-y-0 opacity-100 delay-300"
                  : "translate-y-6 opacity-0"
              }`}
            >
              <span className="heading-font block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ED4823] sm:text-[12px]">
                {pad(i + 1)} · {p.theme}
              </span>
              <span className="heading-font mt-2 block max-w-[440px] text-[24px] font-bold uppercase leading-[1.05] text-[#F5EBDD] sm:text-[30px] lg:text-[34px]">
                {p.title}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
