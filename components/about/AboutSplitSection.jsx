"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Container from "@/components/ui/Container";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/*
 * Shared layout for the About page sections (Values, Statements of Faith,
 * Vision & Mission, Leaders), so their heading blocks all behave the same:
 *
 * - Desktop: two columns. The heading block (left, 5/12) sticks at the
 *   same spot under the navbar (--sticky-top) while the content on the
 *   right scrolls past.
 * - Phones/tablets: the heading sticks right under the navbar on a solid
 *   band (so content slides under it), with an orange rule below.
 * - Same section padding as the rest of the site (section-py).
 * - Orange lines grow from 0 to 100% as the section scrolls through and
 *   shrink back on the way up: on phones/tablets the line under every
 *   heading (all sections, so they behave the same); on desktop the
 *   vertical line beside the content (sections with `divider`).
 */
export default function AboutSplitSection({
  id,
  tone = "cream",
  icon,
  iconAlt = "",
  // Intrinsic size of the icon file, so wide icons keep their shape.
  iconWidth = 64,
  iconHeight = 64,
  // Centre the heading (and icon) within its column.
  centerHeading = false,
  // Centre the heading (and icon) on phones/tablets only.
  centerOnMobile = false,
  heading,
  aside,
  divider = true,
  children,
}) {
  const rootRef = useRef(null);
  const dark = tone === "dark";

  useGSAP(
    () => {
      const scrub = () => ({
        trigger: rootRef.current,
        start: "top 75%",
        end: "bottom 75%",
        scrub: 0.6,
      });
      const mm = gsap.matchMedia();
      // Phones/tablets: every section's line under the heading.
      mm.add("(max-width: 1023px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          "[data-divider-h]",
          { scaleX: 0 },
          { scaleX: 1, ease: "none", scrollTrigger: scrub() }
        );
      });
      // Desktop: the vertical line beside the content.
      if (divider) {
        mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
          gsap.fromTo(
            "[data-divider-v]",
            { scaleY: 0 },
            { scaleY: 1, ease: "none", scrollTrigger: scrub() }
          );
        });
      }
      return () => mm.revert();
    },
    { scope: rootRef, dependencies: [divider] }
  );
  const band = dark ? "bg-ink" : "bg-cream";

  return (
    <section
      ref={rootRef}
      id={id}
      className={`relative w-full scroll-mt-[var(--nav-h)] section-py ${band} ${
        dark ? "text-[#F4EBDC]" : "text-[#4A4A4A]"
      }`}
    >
      <Container>
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Heading block. On phones the wrapper is display:contents so the
              sticky heading's containing block is the whole section column
              (otherwise it would have no room to stick). */}
          <div className="contents lg:col-span-5 lg:block">
            <div
              className={`sticky top-(--nav-h) z-20 -mx-6 px-6 pb-4 pt-3 ${band} lg:top-(--sticky-top) lg:mx-0 lg:bg-transparent lg:bg-none lg:px-0 lg:pb-0 lg:pt-0`}
            >
              <div
                className={`flex gap-3 sm:gap-4 lg:gap-5 ${
                  centerHeading
                    ? "flex-col items-center text-center"
                    : centerOnMobile
                      ? "flex-col items-center text-center lg:flex-row lg:items-start lg:text-left"
                      : "items-start"
                }`}
              >
                {icon && (
                  <Image
                    src={icon}
                    alt={iconAlt}
                    width={iconWidth}
                    height={iconHeight}
                    // Same height for every section icon: 30 / 44 / 56px.
                    className="mt-1 h-[30px] w-auto shrink-0 object-contain sm:h-[44px] lg:h-[56px]"
                  />
                )}
                <h2 className="heading-font text-[40px] font-bold uppercase leading-[0.9] tracking-[-0.05em] sm:text-[60px] lg:text-[52px] xl:text-[66px]">
                  {heading}
                </h2>
              </div>
              <div
                data-divider-h
                className={`mt-4 h-[2px] w-full bg-[#ED4823] lg:hidden ${
                  centerHeading || centerOnMobile ? "origin-center" : "origin-left"
                }`}
              />

              {aside && <div className="mt-8 hidden lg:block">{aside}</div>}
            </div>
          </div>

          {/* Content */}
          <div className={`relative lg:col-span-7 ${divider ? "lg:pl-10" : ""}`}>
            {divider && (
              <span
                data-divider-v
                aria-hidden="true"
                className="absolute left-0 top-0 hidden h-full w-[2px] origin-top bg-[#ED4823] lg:block"
              />
            )}
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}
