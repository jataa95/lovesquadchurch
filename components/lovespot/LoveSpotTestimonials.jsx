"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Container from "@/components/ui/Container";

const testimonials = [
  {
    text: "Condimentum Ultricies, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci. Cras Aliquet Sem Consectetur Condimentum Ultricies, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
    name: "PRECIOUS RAMAH",
  },
  {
    text: "Cras Aliquet Sem Consectetur Condimentum Ultricies, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci. Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
    name: "DAVID OLADELE",
  },
  {
    text: "Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci. Cras Aliquet Sem Consectetur Condimentum Ultricies, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
    name: "ESTHER ADEBAYO",
  },
];

/*
 * LoveSpot testimonies: centred sticky heading, then cards that pin under
 * it and stack on top of each other as you scroll.
 */
export default function LoveSpotTestimonials() {
  const sectionRef = useRef(null);
  const headRef = useRef(null);

  // Cards pin just below the sticky heading: keep --testi-head equal to
  // the heading's height (it changes with screen width).
  useEffect(() => {
    const head = headRef.current;
    const section = sectionRef.current;
    if (!head || !section) return;
    const set = () =>
      section.style.setProperty("--testi-head", `${head.offsetHeight + 12}px`);
    set();
    const ro = new ResizeObserver(set);
    ro.observe(head);
    return () => ro.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="lovespot-testimonials"
      className="relative w-full bg-ink section-py text-[#F4EBDC] [--testi-head:130px]"
    >
      <Container>
        {/* Sticky, centred heading */}
        <div
          ref={headRef}
          className="sticky top-(--nav-h) z-40 -mx-6 bg-ink px-6 pb-6 pt-3 text-center lg:mx-0 lg:px-0"
        >
          <h2
            className="heading-font font-bold uppercase leading-[0.9] tracking-[-0.045em]"
            style={{ fontSize: "clamp(30px, 4.4vw, 60px)" }}
          >
            <span className="block">SAPIEN IPSUM, AC TINCIDUNT</span>
            <span className="block text-[#ED4823]">LOREM LACINIA VEL.</span>
          </h2>
        </div>

        {/* Stacking cards */}
        <div className="mx-auto mt-6 flex max-w-[960px] flex-col gap-5 sm:gap-6 lg:mt-10 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              index={index}
              text={testimonial.text}
              name={testimonial.name}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function TestimonialCard({ index, text, name }) {
  return (
    <div
      className="sticky w-full border border-[#3B3B3B] bg-[#0E0E0E] p-2 shadow-2xl sm:p-3 lg:p-4"
      // Cards pin just under the sticky heading and stack as you scroll.
      style={{
        zIndex: index + 10,
        top: `calc(var(--nav-h) + var(--testi-head) + ${index * 12}px)`,
      }}
    >
      <div className="relative h-full w-full overflow-hidden border border-[#575656] bg-[#0E0E0E] px-[36px] py-[36px] sm:px-[48px] sm:py-[44px] lg:px-[64px] lg:py-[52px]">
        {/* TOP LEFT CORNER */}
        <Image
          src="/images/lovespot/top-left.svg"
          alt=""
          width={70}
          height={70}
          className="pointer-events-none absolute left-[12px] top-[12px] z-30 h-[52px] w-[52px] object-contain sm:left-[16px] sm:top-[16px] sm:h-[60px] sm:w-[60px] lg:left-[18px] lg:top-[18px] lg:h-[70px] lg:w-[70px]"
        />

        {/* BOTTOM RIGHT CORNER */}
        <Image
          src="/images/lovespot/bottom-right.svg"
          alt=""
          width={70}
          height={70}
          className="pointer-events-none absolute bottom-[12px] right-[12px] z-30 h-[52px] w-[52px] object-contain sm:bottom-[16px] sm:right-[16px] sm:h-[60px] sm:w-[60px] lg:bottom-[18px] lg:right-[18px] lg:h-[70px] lg:w-[70px]"
        />

        {/* CARD CONTENT */}
        <div className="flex h-full w-full flex-col justify-between overflow-hidden pl-[10px]">
          {/* TESTIMONIAL */}
          <div className="max-w-[900px]">
            <p
              className="text-[#F4EBDC]"
              style={{
                marginTop: "8px",
                fontSize: "clamp(13px, 1.3vw, 17px)",
                lineHeight: "1.5",
                fontWeight: 300,
              }}
            >
              {text}
            </p>
          </div>

          {/* AUTHOR */}
          <div className="mt-8 flex shrink-0 items-center gap-[9px] sm:gap-[12px]">
            <div className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full border border-[#F4EBDC] sm:h-[28px] sm:w-[28px]">
              <div className="h-[6px] w-[6px] rounded-full bg-[#F4EBDC] sm:h-[7px] sm:w-[7px]" />
            </div>

            <span
              className="heading-font whitespace-nowrap uppercase font-bold text-[#F4EBDC]"
              style={{
                fontSize: "clamp(12px, 1.2vw, 14px)",
                lineHeight: "18px",
              }}
            >
              {name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}