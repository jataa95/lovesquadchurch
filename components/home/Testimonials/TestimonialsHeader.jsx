import { testimonials } from "@/data/testimonials";

export default function TestimonialsHeader() {
  return (
    <div className="relative z-10 flex items-start gap-[4px] sm:gap-[12px] md:gap-[14px] lg:gap-[6px]">
      {/* =========================================
          HEADING
      ========================================== */}
      <div className="leading-none">
        {/* TOP TITLE */}
        <h2
          className="heading-font text-[28px] uppercase leading-[30px] text-[#F9E9D3] sm:text-[42px] sm:leading-[42px] md:text-[50px] md:leading-[50px] lg:text-[60px] lg:leading-[60px]"
          style={{
            fontWeight: 500,
            letterSpacing: "0px",
          }}
        >
          {testimonials.titleTop}
        </h2>

        {/* BOTTOM TITLE */}
        <h2
          className="heading-font text-[28px] uppercase leading-[30px] text-[#ED4823] sm:text-[42px] sm:leading-[42px] md:text-[50px] md:leading-[50px] lg:text-[60px] lg:leading-[60px]"
          style={{
            fontWeight: 500,
            letterSpacing: "0px",
          }}
        >
          {testimonials.titleBottom}
        </h2>
      </div>
    </div>
  );
}
