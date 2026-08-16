"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SecondaryButton, TertiaryButton } from "@/components/ui/buttons";

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

export default function LoveSpotTestimonials() {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  const [cardOffset, setCardOffset] = useState(0);

  const offsetRef = useRef(0);
  const touchStartY = useRef(0);

  /* =====================================================
     HORIZONTAL WHEEL SCROLL
  ===================================================== */

  useEffect(() => {
    const handleWheel = (event) => {
      const viewport = viewportRef.current;
      const track = trackRef.current;

      if (!viewport || !track) return;

      const rect = viewport.getBoundingClientRect();
      const activationPoint = 120;

      const isInPosition =
        rect.top <= activationPoint && rect.bottom >= activationPoint;

      if (!isInPosition) return;

      const viewportWidth = viewport.clientWidth;
      const trackWidth = track.scrollWidth;
      const maxOffset = Math.max(trackWidth - viewportWidth, 0);
      const currentOffset = offsetRef.current;

      /* SCROLL DOWN */
      if (event.deltaY > 0) {
        if (currentOffset < maxOffset) {
          event.preventDefault();

          const speed = 1.1;
          const nextOffset = Math.min(
            currentOffset + event.deltaY * speed,
            maxOffset
          );

          offsetRef.current = nextOffset;
          setCardOffset(nextOffset);
          return;
        }
        return;
      }

      /* SCROLL UP */
      if (event.deltaY < 0) {
        if (currentOffset > 0) {
          event.preventDefault();

          const speed = 1.1;
          const nextOffset = Math.max(currentOffset + event.deltaY * speed, 0);

          offsetRef.current = nextOffset;
          setCardOffset(nextOffset);
          return;
        }
        return;
      }
    };

    window.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  /* =====================================================
     TOUCH SUPPORT
  ===================================================== */

  const handleTouchStart = (event) => {
    touchStartY.current = event.touches[0].clientY;
  };

  const handleTouchMove = (event) => {
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!viewport || !track) return;

    const rect = viewport.getBoundingClientRect();
    const activationPoint = 120;

    const isInPosition =
      rect.top <= activationPoint && rect.bottom >= activationPoint;

    if (!isInPosition) return;

    const currentY = event.touches[0].clientY;
    const deltaY = touchStartY.current - currentY;
    const viewportWidth = viewport.clientWidth;
    const trackWidth = track.scrollWidth;
    const maxOffset = Math.max(trackWidth - viewportWidth, 0);
    const currentOffset = offsetRef.current;

    /* SWIPE UP */
    if (deltaY > 0 && currentOffset < maxOffset) {
      event.preventDefault();

      const nextOffset = Math.min(currentOffset + deltaY, maxOffset);
      offsetRef.current = nextOffset;
      setCardOffset(nextOffset);
      touchStartY.current = currentY;
      return;
    }

    /* SWIPE DOWN */
    if (deltaY < 0 && currentOffset > 0) {
      event.preventDefault();

      const nextOffset = Math.max(currentOffset + deltaY, 0);
      offsetRef.current = nextOffset;
      setCardOffset(nextOffset);
      touchStartY.current = currentY;
    }
  };

  return (
    <section
      id="lovespot-testimonials"
      className="relative w-full overflow-hidden bg-[#0B0B0B]"
    >
      {/* =================================================
          MAIN SECTION WRAPPER
      ================================================== */}
      <div className="relative mx-auto w-full max-w-[1440px] px-[18px] py-[32px] sm:px-[24px] md:px-[32px] md:pb-[60px]">
        {/* =================================================
            HEADING
        ================================================== */}
        <div className="absolute left-[18px] top-[28px] z-30 w-[calc(100%-36px)] sm:left-[24px] sm:top-[32px] sm:w-[calc(100%-48px)] md:left-[32px] md:top-[32px] md:w-[900px]">
          <h2
            className="heading-font uppercase font-bold leading-[0.85] tracking-[-0.045em] text-[#F4EBDC]"
            style={{ fontSize: "clamp(22px, 3vw, 32px)" }}
          >
            <span className="block">SAPIEN IPSUM, AC TINCIDUNT</span>
            <span className="block text-[#ED4823]">LOREM LACINIA VEL.</span>
          </h2>
        </div>

        {/* =================================================
            TESTIMONIAL AREA
        ================================================== */}
        <div className="relative mt-[105px] min-h-[520px] sm:mt-[100px] sm:min-h-[500px] md:mt-[73px] md:min-h-[370px]">
          {/* SKIP BUTTON */}
          <div className="absolute right-0 top-[-42px] z-50 sm:right-[4px] md:right-[20px] md:top-[-45px]">
            <TertiaryButton href="#lovespot-faqs">SKIP</TertiaryButton>
          </div>

          {/* LOVESQUAD GRAPHIC & MARQUEE */}
          <div className="absolute left-0 top-0 z-30 md:top-[95px]">
            <div className="w-[95px] sm:w-[115px] md:w-[150px]">
              <Image
                src="/images/about/lovesquad-graphic-cream.svg"
                alt="LoveSquad"
                width={180}
                height={180}
                priority
                className="block h-auto w-full object-contain"
              />

              {/* MARQUEE CONTAINER */}
              <div className="mt-[6px] w-full overflow-hidden sm:mt-[8px]">
                <div className="flex w-max animate-[marquee_14s_linear_infinite] [will-change:transform]">
                  <div
                    className="shrink-0 whitespace-nowrap heading-font uppercase text-[#ED4823]"
                    style={{ fontSize: "10px", lineHeight: "9px" }}
                  >
                    LOVE IS US • LOVESQUAD CHURCH • LOVE IS US • LOVESQUAD CHURCH • LOVE IS US • LOVESQUAD CHURCH •
                  </div>
                  <div
                    className="shrink-0 whitespace-nowrap heading-font uppercase text-[#ED4823]"
                    style={{ fontSize: "10px", lineHeight: "9px" }}
                  >
                    LOVE IS US • LOVESQUAD CHURCH • LOVE IS US • LOVESQUAD CHURCH • LOVE IS US • LOVESQUAD CHURCH •
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              CARD AREA
          ================================================== */}
          <div className="absolute right-0 top-[72px] w-[calc(100%-112px)] sm:top-[80px] sm:w-[calc(100%-135px)] md:top-0 md:w-[75%]">
            {/* CARD VIEWPORT */}
            <div
              ref={viewportRef}
              id="lovespot-card-viewport"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              className="h-[300px] w-full overflow-hidden sm:h-[310px] md:h-[300px]"
              style={{ touchAction: "pan-y" }}
            >
              {/* CARD TRACK */}
              <div
                ref={trackRef}
                className="flex w-max gap-[12px] sm:gap-[16px]"
                style={{
                  transform: `translate3d(-${cardOffset}px, 0, 0)`,
                  transition: "transform 0.05s linear",
                  willChange: "transform",
                }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.name}
                    className="relative h-[300px] w-[calc(100vw-130px)] min-w-[calc(100vw-130px)] shrink-0 sm:h-[310px] sm:w-[500px] sm:min-w-[500px] md:h-[300px] md:w-[600px] md:min-w-[600px]"
                  >
                    <TestimonialCard
                      text={testimonial.text}
                      name={testimonial.name}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* ACTION BUTTON */}
            <div className="mt-[14px] flex justify-start">
              <SecondaryButton href="/testimonials" className="!mt-0">
                GO TO TESTIMONIALS
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   TESTIMONIAL CARD
===================================================== */

function TestimonialCard({ text, name }) {
  return (
    <div className="relative h-full w-full overflow-hidden border border-[#575656] bg-[#0B0B0B]">
      {/* TOP LEFT CORNER */}
      <Image
        src="/images/lovespot/top-left.svg"
        alt=""
        width={70}
        height={70}
        className="pointer-events-none absolute left-[12px] top-[12px] z-30 h-[52px] w-[52px] object-contain sm:left-[16px] sm:top-[16px] sm:h-[60px] sm:w-[60px] md:left-[18px] md:top-[18px] md:h-[70px] md:w-[70px]"
      />

      {/* BOTTOM RIGHT CORNER */}
      <Image
        src="/images/lovespot/bottom-right.svg"
        alt=""
        width={70}
        height={70}
        className="pointer-events-none absolute bottom-[12px] right-[12px] z-30 h-[52px] w-[52px] object-contain sm:bottom-[16px] sm:right-[16px] sm:h-[60px] sm:w-[60px] md:bottom-[18px] md:right-[18px] md:h-[70px] md:w-[70px]"
      />

      {/* CARD CONTENT */}
      <div className="flex h-full w-full flex-col justify-between overflow-hidden px-[28px] py-[32px] sm:px-[42px] sm:py-[40px] md:px-[58px] md:py-[48px]">
        {/* TESTIMONIAL */}
        <div className="max-w-[590px]">
          <p
            className="ml-[8px] text-[#F4EBDC] sm:ml-[10px] md:ml-[12px]"
            style={{
              marginTop: "16px",
              fontSize: "clamp(13px, 1.3vw, 15px)",
              lineHeight: "1.4",
              fontWeight: 300,
            }}
          >
            {text}
          </p>
        </div>

        {/* AUTHOR */}
        <div className="flex shrink-0 items-center gap-[9px] sm:gap-[12px]">
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
  );
}