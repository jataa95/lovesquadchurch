"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import TestimonialCard from "./TestimonialCard";

gsap.registerPlugin(useGSAP);

// Seconds for each row to travel one full set of cards.
const TOP_DURATION = 40;
const BOTTOM_DURATION = 46;

const testimonials = [
  {
    id: 1,
    name: "PRECIOUS RAMAH",
    text: "Lorem Ipsum Cos An Bewebruhn Lorem Ipsum Cos An Bewebruhn. Lorem Ipsum Cos An Bewebruhn Lorem Ipsum Cos An Bewebruhn.",
    variant: "orange",
    rotation: "-5deg",
  },
  {
    id: 2,
    name: "PRECIOUS RAMAH",
    text: "Lorem Ipsum Cos An Bewebruhn Lorem Ipsum Cos An Bewebruhn. Lorem Ipsum Cos An Bewebruhn Lorem Ipsum Cos An Bewebruhn.",
    variant: "cream",
    rotation: "5deg",
  },
  {
    id: 3,
    name: "PRECIOUS RAMAH",
    text: "Lorem Ipsum Cos An Bewebruhn Lorem Ipsum Cos An Bewebruhn. Lorem Ipsum Cos An Bewebruhn Lorem Ipsum Cos An Bewebruhn.",
    variant: "orange",
    rotation: "-5deg",
  },
  {
    id: 4,
    name: "PRECIOUS RAMAH",
    text: "Lorem Ipsum Cos An Bewebruhn Lorem Ipsum Cos An Bewebruhn. Lorem Ipsum Cos An Bewebruhn Lorem Ipsum Cos An Bewebruhn.",
    variant: "cream",
    rotation: "5deg",
  },
  {
    id: 5,
    name: "PRECIOUS RAMAH",
    text: "Lorem Ipsum Cos An Bewebruhn Lorem Ipsum Cos An Bewebruhn. Lorem Ipsum Cos An Bewebruhn Lorem Ipsum Cos An Bewebruhn.",
    variant: "orange",
    rotation: "-5deg",
  },
  {
    id: 6,
    name: "PRECIOUS RAMAH",
    text: "Lorem Ipsum Cos An Bewebruhn Lorem Ipsum Cos An Bewebruhn. Lorem Ipsum Cos An Bewebruhn Lorem Ipsum Cos An Bewebruhn.",
    variant: "cream",
    rotation: "5deg",
  },
];

// Each row holds the cards twice, so moving it by half its width loops
// seamlessly.
const items = [...testimonials, ...testimonials];
const reversed = items.slice().reverse();

/*
 * Two rows of cards drifting in opposite directions (top row left, bottom
 * row right). Hovering eases both rows to a stop; leaving eases them
 * back up to speed.
 */
export default function TestimonialsGrid() {
  const rootRef = useRef(null);
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const top = gsap.fromTo(
          topRef.current,
          { xPercent: 0 },
          { xPercent: -50, duration: TOP_DURATION, ease: "none", repeat: -1 }
        );
        const bottom = gsap.fromTo(
          bottomRef.current,
          { xPercent: -50 },
          { xPercent: 0, duration: BOTTOM_DURATION, ease: "none", repeat: -1 }
        );
        // Start the bottom row part-way through so the two rows' cards
        // don't line up.
        bottom.progress(0.37);
        const tweens = [top, bottom];

        const ease = (to) =>
          tweens.forEach((t) =>
            gsap.to(t, { timeScale: to, duration: 0.8, ease: "power2.out" })
          );
        const slow = () => ease(0);
        const resume = () => ease(1);

        const el = rootRef.current;
        el.addEventListener("mouseenter", slow);
        el.addEventListener("mouseleave", resume);
        return () => {
          el.removeEventListener("mouseenter", slow);
          el.removeEventListener("mouseleave", resume);
        };
      });
      return () => mm.revert();
    },
    { scope: rootRef }
  );

  return (
    <section
      ref={rootRef}
      className="w-full overflow-hidden bg-[#080808] py-1 sm:py-2"
    >
      {/* TOP ROW: flows left */}
      <div className="testimonial-marquee">
        <div ref={topRef} className="testimonial-track">
          {items.map((item, index) => (
            <TestimonialCard key={`top-${item.id}-${index}`} testimonial={item} />
          ))}
        </div>
      </div>

      {/* BOTTOM ROW: flows right */}
      <div className="testimonial-marquee">
        <div ref={bottomRef} className="testimonial-track">
          {reversed.map((item, index) => (
            <TestimonialCard
              key={`bottom-${item.id}-${index}`}
              testimonial={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
