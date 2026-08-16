"use client";

import Image from "next/image";

export default function TestimonialCard({
  testimonial,
  className = "",
}) {
  if (!testimonial) return null;

  const {
    name,
    text,
    variant = "orange",
    rotation = "0deg",
  } = testimonial;

  const isOrange = variant === "orange";

  return (
    <article
      className={`testimonial-card relative h-[200px] w-[285px] shrink-0 overflow-hidden rounded-[18px] sm:h-[215px] sm:w-[315px] sm:rounded-[19px] md:h-[220px] md:w-[340px] md:rounded-[20px] lg:h-[240px] lg:w-[370px] xl:h-[260px] xl:w-[400px] ${className}`}
      style={{
        transform: `rotate(${rotation})`,
      }}
    >
      {/* =====================================================
          CARD
      ====================================================== */}

      <div
        className={`relative flex h-full w-full flex-col justify-between p-[14px] sm:p-[16px] ${
          isOrange
            ? "bg-[#F04423] text-[#F5EBDC]"
            : "bg-[#F5EBDC] text-[#F04423]"
        }`}
      >
        {/* =================================================
            TOP RIGHT CORNER GRAPHIC
        ================================================== */}

        <Image
          src={
            isOrange
              ? "/images/testimonials/top-right.svg"
              : "/images/testimonials/top-right (1).svg"
          }
          alt=""
          width={60}
          height={60}
          className="pointer-events-none absolute right-[12px] top-[12px] z-10 h-[30px] w-[30px] object-contain sm:right-[14px] sm:top-[14px] sm:h-[33px] sm:w-[33px] md:right-[16px] md:top-[16px] md:h-[36px] md:w-[36px]"
        />

        {/* =================================================
            BOTTOM LEFT CORNER GRAPHIC
        ================================================== */}

        <Image
          src={
            isOrange
              ? "/images/testimonials/bottom-left.svg"
              : "/images/testimonials/bottom-left (1).svg"
          }
          alt=""
          width={60}
          height={60}
          className="pointer-events-none absolute bottom-[12px] left-[12px] z-10 h-[30px] w-[30px] object-contain sm:bottom-[14px] sm:left-[14px] sm:h-[33px] sm:w-[33px] md:bottom-[16px] md:left-[16px] md:h-[36px] md:w-[36px]"
        />

        {/* =================================================
            TESTIMONIAL TEXT
        ================================================== */}

        <p className="body-font ml-[18px] mt-[20px] max-w-[220px] text-[12px] leading-[18px] sm:ml-[20px] sm:mt-[22px] sm:max-w-[235px] sm:text-[13px] sm:leading-[19px] md:ml-[24px] md:mt-[24px] md:max-w-[250px] md:text-[14px] md:leading-[21px]">
          {text}
        </p>

        {/* =================================================
            NAME
        ================================================== */}

        <h3 className="heading-font mb-[18px] ml-[18px] text-[14px] font-bold uppercase leading-none tracking-[-0.025em] sm:mb-[20px] sm:ml-[20px] sm:text-[15px] md:mb-[24px] md:ml-[24px] md:text-[17px]">
          {name}
        </h3>
      </div>
    </article>
  );
}