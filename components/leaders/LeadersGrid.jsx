"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Container from "@/components/ui/Container";
import { leaders } from "@/data/leaders";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/*
 * Leaders: photo, position and name for each person, Senior Pastor first.
 *
 * Desktop (1024px+): one horizontal row. The row pins in place and glides
 * sideways as you scroll down (and back when scrolling up), with each
 * person's details under their photo and a thin orange progress line.
 * Phones/tablets: the Senior Pastor centred on top, the others in a grid
 * (2 columns on tablets, 1 on phones).
 */
export default function LeadersGrid() {
  const [featured, ...rest] = leaders.people;
  const rootRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const q = gsap.utils.selector(rootRef);
        const pin = q("[data-leaders-pin]")[0];
        const viewport = q("[data-leaders-viewport]")[0];
        const track = q("[data-leaders-track]")[0];
        const progress = q("[data-leaders-progress]")[0];
        const distance = () => Math.max(0, track.scrollWidth - viewport.clientWidth);
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pin,
            // Pin with the row centred in the space below the navbar.
            start: () => {
              const nav =
                parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--nav-h")) || 0;
              return `center ${Math.round((window.innerHeight + nav) / 2)}`;
            },
            end: () => `+=${distance()}`,
            pin: true,
            scrub: reduce ? true : 1,
            invalidateOnRefresh: true,
          },
        });
        tl.to(track, { x: () => -distance(), ease: "none" }, 0).fromTo(
          progress,
          { scaleX: 0 },
          { scaleX: 1, ease: "none" },
          0
        );
      });
      return () => mm.revert();
    },
    { scope: rootRef }
  );

  return (
    <section ref={rootRef} id="leaders" className="section-pb">
      {/* ---------- Desktop: pinned horizontal row ---------- */}
      <div data-leaders-pin className="hidden lg:block lg:py-6">
        <Container>
          <div data-leaders-viewport className="overflow-hidden">
            <ul data-leaders-track className="flex w-max gap-8 will-change-transform">
              {leaders.people.map((person, i) => (
                <li
                  key={i}
                  // Photo height fits the screen (navbar + details + room).
                  className="w-[calc(min(56vh,460px)*0.8)] shrink-0"
                >
                  <Card person={person} featured={i === 0} align="left" />
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 h-[2px] w-full bg-[#575656]/20">
            <div data-leaders-progress className="h-full w-full origin-left scale-x-0 bg-[#ED4823]" />
          </div>
        </Container>
      </div>

      {/* ---------- Phones / tablets: stacked ---------- */}
      <div className="lg:hidden">
        <Container>
          <div className="mx-auto w-full max-w-[340px] sm:max-w-[400px]">
            <Card person={featured} featured />
          </div>
          <ul className="mt-14 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2">
            {rest.map((person, i) => (
              <li key={i}>
                <Card person={person} />
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
}

function Card({ person, featured = false, align = "center" }) {
  return (
    <div
      className={`group flex flex-col ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      }`}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#171515]">
        <Image
          src={person.photo}
          alt={`${person.name}, ${person.role}`}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <p className="heading-font mt-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#ED4823] sm:text-[13px]">
        {person.role}
      </p>
      <h3
        className="heading-font mt-1.5 font-bold uppercase leading-none tracking-[-0.02em] text-[#4A4A4A]"
        style={{ fontSize: featured ? "clamp(26px, 2.4vw, 34px)" : "clamp(20px, 1.8vw, 26px)" }}
      >
        {person.name}
      </h3>
    </div>
  );
}
