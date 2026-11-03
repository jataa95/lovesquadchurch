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
 * - With `divider`, the orange line (vertical beside the content on
 *   desktop, horizontal under the heading on phones) grows from 0 to
 *   100% as the section scrolls through, and shrinks back on the way up.
 */
export default function AboutSplitSection({
  id,
  tone = "cream",
  icon,
  iconAlt = "",
  heading,
  aside,
  divider = true,
  children,
}) {
  const rootRef = useRef(null);
  const dark = tone === "dark";

  useGSAP(
    () => {
      if (!divider) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const scrub = {
          trigger: rootRef.current,
          start: "top 75%",
          end: "bottom 75%",
          scrub: 0.6,
        };
        gsap.fromTo(
          "[data-divider-v]",
          { scaleY: 0 },
          { scaleY: 1, ease: "none", scrollTrigger: scrub }
        );
        gsap.fromTo(
          "[data-divider-h]",
          { scaleX: 0 },
          { scaleX: 1, ease: "none", scrollTrigger: { ...scrub } }
        );
      });
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
              <div className="flex items-start gap-3 sm:gap-4 lg:gap-5">
                {icon && (
                  <Image
                    src={icon}
                    alt={iconAlt}
                    width={64}
                    height={64}
                    className="mt-1 h-auto w-[30px] shrink-0 object-contain sm:w-[44px] lg:w-[56px]"
                  />
                )}
                <h2 className="heading-font text-[34px] font-bold uppercase leading-[0.9] tracking-[-0.05em] sm:text-[52px] lg:text-[48px] xl:text-[60px]">
                  {heading}
                </h2>
              </div>
              <div
                {...(divider ? { "data-divider-h": "" } : {})}
                className="mt-4 h-[2px] w-full origin-left bg-[#ED4823] lg:hidden"
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
