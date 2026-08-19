"use client";

import Image from "next/image";

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
  return (
    <div className="w-full bg-[#080808] clear-both">
      <section 
        style={{ display: "block", position: "relative", width: "100%" }}
        className="bg-[#080808]"
      >
        <div
          style={{ display: "block", width: "100%", maxWidth: "1440px", margin: "0 auto" }}
          className="
            px-[16px]
            pt-[100px]
            pb-[40px]
            sm:px-[24px]
            sm:pb-[44px]
            md:px-[32px]
            md:pb-[48px]
            lg:pt-[160px]
          "
        >
          {/* =========================================
              HERO SECTION
          ========================================== */}
          <div
            style={{ display: "block", width: "100%" }}
            className="
              mb-[16px]
              sm:mb-[28px]
              md:mb-[32px]
            "
          >
            <p
              className="
                heading-font
                uppercase
                font-medium
                tracking-[-0.02em]
                text-[#F4EBDC]
                leading-none
                text-[22px]
                text-center
                sm:text-[26px]
                md:text-[32px]
                lg:text-left
              "
            >
              OUR AMAZING
            </p>

            <h1
              className="
                heading-font
                mt-[0px]
                uppercase
                font-bold
                tracking-[-0.04em]
                text-[#ED4823]
                text-center
                leading-none
                whitespace-nowrap
                text-[52px]
                sm:text-[80px]
                md:text-[110px]
                lg:text-[130px]
                sm:mt-[10px]
                md:mt-[12px]
                lg:text-left
              "
            >
              STORIES
            </h1>
          </div>

          {/* =========================================
              VERTICAL STACKED TESTIMONIALS
          ========================================== */}
          <div style={{ display: "block", width: "100%", position: "relative" }}>
            {testimonials.map((testimonial, index) => (
              <article
                key={testimonial.id}
                style={{ 
                  display: "flex", 
                  width: "100%", 
                  top: `${120 + index * 30}px`,
                  zIndex: index + 1 
                }}
                className="
                  group
                  sticky
                  mb-[10px]
                  flex-col
                  overflow-hidden
                  bg-[#171515]
                  md:flex-row
                  shadow-2xl
                "
              >
                {/* PERSON IMAGE */}
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
                    sizes="(max-width: 768px) 100vw, 35vw"
                  />
                </div>

                {/* TESTIMONIAL CONTENT */}
                <div
                  className="
                    relative
                    flex
                    min-h-[300px]
                    w-full
                    shrink-0
                    flex-col
                    items-center
                    justify-center
                    text-center
                    bg-[#ED4823]
                    px-[28px]
                    py-[40px]
                    sm:min-h-[340px]
                    sm:px-[40px]
                    sm:py-[48px]
                    md:h-[560px]
                    md:min-h-0
                    md:w-[65%]
                    md:items-start
                    md:text-left
                    md:px-[72px]
                    md:py-[56px]
                  "
                >
                  {/* TOP RIGHT CORNER GRAPHIC */}
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

                  {/* TESTIMONIAL TEXT */}
                  <p
                    className="
                      body-font
                      w-full
                      max-w-[680px]
                      text-[#F4EBDC]
                      text-[16px]
                      sm:text-[18px]
                      md:text-[20px]
                      leading-[1.4]
                    "
                  >
                    {testimonial.text}
                  </p>

                  {/* NAME */}
                  <h2
                    className="
                      heading-font
                      mt-[28px]
                      uppercase
                      font-bold
                      tracking-[-0.025em]
                      text-[#F4EBDC]
                      text-[18px]
                      sm:text-[21px]
                      md:text-[24px]
                      leading-[1.1]
                      sm:mt-[32px]
                      md:mt-[40px]
                    "
                  >
                    {testimonial.name}
                  </h2>

                  {/* BOTTOM LEFT CORNER GRAPHIC */}
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
            style={{ display: "block", width: "100%" }}
            className="
              mt-[32px]
              overflow-hidden
              sm:mt-[40px]
              md:mt-[48px]
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
                  text-[12px]
                  sm:text-[14px]
                  md:text-[16px]
                  leading-[16px]
                  sm:pr-[50px]
                  md:pr-[60px]
                "
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
                  text-[12px]
                  sm:text-[14px]
                  md:text-[16px]
                  leading-[16px]
                  sm:pr-[50px]
                  md:pr-[60px]
                "
              >
                LOVE IS US • LOVESQUAD CHURCH • LOVE IS US • LOVESQUAD CHURCH •
                LOVE IS US • LOVESQUAD CHURCH • LOVE IS US • LOVESQUAD CHURCH
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}