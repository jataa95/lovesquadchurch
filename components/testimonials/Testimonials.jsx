"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    id: 1,
    name: "PRECIOUS RAMAH",
    image: "/images/testimonials/testimonial-1.jpg",
    text: "Lorem Ipsum Cos An Bewebruhn Lorem Ipsum Cos An Bewebruhn. Lorem Ipsum Cos An Bewebruhn Lorem Ipsum Cos An Bewebruhn.",
  },
  {
    id: 2,
    name: "JOHN DOE",
    image: "/images/testimonials/testimonial-2.jpg",
    text: "Lorem Ipsum Cos An Bewebruhn Lorem Ipsum Cos An Bewebruhn. Lorem Ipsum Cos An Bewebruhn Lorem Ipsum Cos An Bewebruhn.",
  },
  {
    id: 3,
    name: "JANE DOE",
    image: "/images/testimonials/testimonial-3.jpg",
    text: "Lorem Ipsum Cos An Bewebruhn Lorem Ipsum Cos An Bewebruhn. Lorem Ipsum Cos An Bewebruhn Lorem Ipsum Cos An Bewebruhn.",
  },
  {
    id: 4,
    name: "DAVID JOHN",
    image: "/images/testimonials/testimonial-4.jpg",
    text: "Lorem Ipsum Cos An Bewebruhn Lorem Ipsum Cos An Bewebruhn. Lorem Ipsum Cos An Bewebruhn Lorem Ipsum Cos An Bewebruhn.",
  },
  {
    id: 5,
    name: "MARY JAMES",
    image: "/images/testimonials/testimonial-5.jpg",
    text: "Lorem Ipsum Cos An Bewebruhn Lorem Ipsum Cos An Bewebruhn. Lorem Ipsum Cos An Bewebruhn Lorem Ipsum Cos An Bewebruhn.",
  },
];

export default function Testimonials() {
  const carouselRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const isCardFullyVisible = () => {
      const rect = carousel.getBoundingClientRect();

      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    };

    const handleWheel = (event) => {
      if (!isCardFullyVisible()) return;

      const maxScroll = carousel.scrollWidth - carousel.clientWidth;

      const currentScroll = carousel.scrollLeft;

      /*
       * SCROLL DOWN
       */
      if (event.deltaY > 0) {
        if (currentScroll < maxScroll - 2) {
          event.preventDefault();

          carousel.scrollLeft = Math.min(
            currentScroll + event.deltaY,
            maxScroll,
          );

          return;
        }

        return;
      }

      /*
       * SCROLL UP
       */
      if (event.deltaY < 0) {
        if (currentScroll > 2) {
          event.preventDefault();

          carousel.scrollLeft = Math.max(currentScroll + event.deltaY, 0);

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

  return (
    <section
      ref={sectionRef}
      className="
        w-full
        overflow-hidden
        bg-[#080808]
      "
    >
      {/* =========================================
          HERO CONTENT
      ========================================== */}

      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-[16px]
          pt-[24px]
          pb-[40px]

          sm:px-[24px]
          sm:pt-[28px]
          sm:pb-[44px]

          md:px-[32px]
          md:pt-[32px]
          md:pb-[48px]
        "
      >
        {/* =========================================
            HEADING
        ========================================== */}

        <div
          className="
            mb-[18px]
            mt-[16px]

            sm:mb-[20px]

            md:mb-[2px]
          "
        >
          <p
            className="
              heading-font
              mb-[-6px]
              uppercase
              font-medium
              leading-none
              text-[#F4EBDC]

              sm:mb-[-10px]

              md:mb-[-18px]
            "
            style={{
              fontSize: "clamp(28px, 6vw, 64px)",
              letterSpacing: "-0.02em",
            }}
          >
            OUR AMAZING
          </p>

          <h1
            className="
              heading-font
              uppercase
              font-bold
              leading-none
              tracking-[-0.055em]
              text-[#ED4823]
              whitespace-nowrap
            "
            style={{
              fontSize: "clamp(64px, 16vw, 200px)",
            }}
          >
            STORIES
          </h1>
        </div>

        {/* =========================================
            TESTIMONIAL CAROUSEL
        ========================================== */}

        <div
          ref={carouselRef}
          className="
            flex
            w-full
            min-w-0
            gap-[16px]
            overflow-x-auto
            overflow-y-hidden
            pb-[8px]
            scrollbar-hide

            sm:gap-[20px]

            md:gap-[24px]
          "
          style={{
            scrollBehavior: "auto",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="
                group
                relative
                flex
                w-full
                min-w-full
                shrink-0
                flex-col
                overflow-hidden
                bg-[#171515]

                md:flex-row
              "
            >
              {/* =========================================
                  PERSON IMAGE
              ========================================== */}

              <div
                className="
                  relative
                  h-[260px]
                  w-full
                  shrink-0
                  overflow-hidden
                  bg-[#111111]

                  sm:h-[320px]

                  md:h-[560px]
                  md:w-[35%]
                "
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-[1.02]
                  "
                  sizes="100vwmd:35vw"
                />
              </div>

              {/* =========================================
                  TESTIMONIAL CONTENT
              ========================================== */}

              <div
                className="
                  relative
                  flex
                  min-h-[300px]
                  w-full
                  shrink-0
                  flex-col
                  justify-center
                  bg-[#ED4823]
                  px-[28px]
                  py-[40px]

                  sm:min-h-[340px]
                  sm:px-[40px]
                  sm:py-[48px]

                  md:h-[560px]
                  md:min-h-0
                  md:w-[65%]
                  md:px-[72px]
                  md:py-[56px]
                "
              >
                {/* =========================================
                    TOP RIGHT CORNER GRAPHIC
                ========================================== */}

                <Image
                  src="/images/testimonials/top-right.svg"
                  alt=""
                  width={80}
                  height={80}
                  className="
                    pointer-events-none
                    absolute
                    right-[16px]
                    top-[16px]
                    h-[42px]
                    w-[42px]
                    object-contain

                    sm:right-[24px]
                    sm:top-[24px]
                    sm:h-[50px]
                    sm:w-[50px]

                    md:right-[32px]
                    md:top-[32px]
                    md:h-[60px]
                    md:w-[60px]
                  "
                />

                {/* =========================================
                    TESTIMONIAL TEXT
                ========================================== */}

                <p
                  className="
                    body-font
                    w-full
                    max-w-[680px]
                    text-[#F4EBDC]
                  "
                  style={{
                    fontSize: "clamp(16px, 2vw, 20px)",
                    lineHeight: "1.4",
                  }}
                >
                  {testimonial.text}
                </p>

                {/* =========================================
                    NAME
                ========================================== */}

                <h2
                  className="
                    heading-font
                    mt-[28px]
                    uppercase
                    font-bold
                    tracking-[-0.025em]
                    text-[#F4EBDC]

                    sm:mt-[32px]

                    md:mt-[40px]
                  "
                  style={{
                    fontSize: "clamp(18px, 2.2vw, 24px)",
                    lineHeight: "1.1",
                  }}
                >
                  {testimonial.name}
                </h2>

                {/* =========================================
                    BOTTOM LEFT CORNER GRAPHIC
                ========================================== */}

                <Image
                  src="/images/testimonials/bottom-left.svg"
                  alt=""
                  width={120}
                  height={120}
                  className="
                    pointer-events-none
                    absolute
                    bottom-[16px]
                    left-[16px]
                    h-[42px]
                    w-[42px]
                    object-contain

                    sm:bottom-[24px]
                    sm:left-[24px]
                    sm:h-[50px]
                    sm:w-[50px]

                    md:bottom-[32px]
                    md:left-[32px]
                    md:h-[60px]
                    md:w-[60px]
                  "
                />
              </div>
            </article>
          ))}
        </div>

        {/* =========================================
            CONTINUOUS BOTTOM MARQUEE
        ========================================== */}

        <div
          className="
            mt-[20px]
            w-full
            overflow-hidden

            sm:mt-[24px]

            md:mt-[28px]
          "
        >
          <div className="flex w-max animate-testimonial-marquee">
            <p
              className="
                heading-font
                shrink-0
                whitespace-nowrap
                uppercase
                pr-[40px]
                text-[#ED4823]

                sm:pr-[50px]

                md:pr-[60px]
              "
              style={{
                fontSize: "clamp(11px, 1.5vw, 16px)",
                lineHeight: "16px",
              }}
            >
              LOVE IS US • LOVESQUAD CHURCH • LOVE IS US • LOVESQUAD CHURCH •
              LOVE IS US • LOVESQUAD CHURCH • LOVE IS US • LOVESQUAD CHURCH
            </p>

            <p
              className="
                heading-font
                shrink-0
                whitespace-nowrap
                uppercase
                pr-[40px]
                text-[#ED4823]

                sm:pr-[50px]

                md:pr-[60px]
              "
              style={{
                fontSize: "clamp(11px, 1.5vw, 16px)",
                lineHeight: "16px",
              }}
            >
              LOVE IS US • LOVESQUAD CHURCH • LOVE IS US • LOVESQUAD CHURCH •
              LOVE IS US • LOVESQUAD CHURCH • LOVE IS US • LOVESQUAD CHURCH
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
