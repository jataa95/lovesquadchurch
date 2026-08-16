import Image from "next/image";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsHeader() {
  return (
    <div className="relative z-10 -mt-8 mb-[16px] flex items-center gap-[10px] sm:-mt-12 sm:mb-[20px] sm:gap-[12px] md:-mt-16 md:mb-[24px] md:gap-[14px] lg:gap-[16px]">
      {/* =========================================
          ICON
      ========================================== */}
      <Image
        src="/icons/stories-icon.svg"
        alt="Stories Icon"
        width={80}
        height={60}
        className="h-[44px] w-[58px] shrink-0 object-contain sm:h-[50px] sm:w-[66px] md:h-[55px] md:w-[73px] lg:h-[60px] lg:w-[80px]"
      />

      {/* =========================================
          HEADING
      ========================================== */}
      <div className="leading-none">
        {/* TOP TITLE */}
        <h2
          className="heading-font text-[34px] uppercase leading-[34px] text-[#F9E9D3] sm:text-[42px] sm:leading-[42px] md:text-[50px] md:leading-[50px] lg:text-[60px] lg:leading-[60px]"
          style={{
            fontWeight: 900,
            letterSpacing: "0px",
          }}
        >
          {testimonials.titleTop}
        </h2>

        {/* BOTTOM TITLE */}
        <h2
          className="heading-font text-[34px] uppercase leading-[34px] text-[#ED4823] sm:text-[42px] sm:leading-[42px] md:text-[50px] md:leading-[50px] lg:text-[60px] lg:leading-[60px]"
          style={{
            fontWeight: 900,
            letterSpacing: "0px",
          }}
        >
          {testimonials.titleBottom}
        </h2>
      </div>
    </div>
  );
}