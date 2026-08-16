"use client";

import TestimonialCard from "./TestimonialCard";

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

/*
 * Duplicate the complete sequence so the marquee
 * can loop continuously.
 */
const items = [...testimonials, ...testimonials];

export default function TestimonialsGrid() {
  return (
    <section className="w-full overflow-hidden bg-[#080808] py-4 sm:py-6 md:py-8 lg:py-10">
      {/* =====================================================
          TOP ROW - MOVES LEFT
      ====================================================== */}
      <div className="testimonial-marquee">
        <div className="testimonial-track testimonial-track-top">
          {items.map((item, index) => (
            <TestimonialCard
              key={`top-${item.id}-${index}`}
              testimonial={item}
            />
          ))}
        </div>
      </div>

      {/* =====================================================
          BOTTOM ROW - MOVES RIGHT
      ====================================================== */}
      <div className="testimonial-marquee mt-3 sm:mt-4 md:mt-6 lg:mt-8">
        <div className="testimonial-track testimonial-track-bottom">
          {items
            .slice()
            .reverse()
            .map((item, index) => (
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
