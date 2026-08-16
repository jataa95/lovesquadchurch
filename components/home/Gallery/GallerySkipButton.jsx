"use client";

import { ArrowDown } from "lucide-react";

export default function GallerySkipButton() {
  return (
    <a
      href="#homepage-bottom"
      className="group inline-flex items-center gap-[5px] sm:gap-[6px] md:gap-[8px] cursor-pointer select-none"
    >
      {/* LEFT BRACKET */}
      <span className="heading-font text-[18px] font-bold leading-[18px] text-[#ED4823] sm:text-[20px] sm:leading-[20px] md:text-[24px] md:leading-[20px]">
        [
      </span>

      {/* TEXT */}
      <span className="heading-font text-[14px] font-bold leading-[18px] text-[#4A4A4A] transition-colors duration-300 group-hover:text-[#ED4823] sm:text-[16px] sm:leading-[20px] md:text-[20px] md:leading-[20px]">
        SKIP DOWN
      </span>

      {/* ARROW */}
      <ArrowDown
        className="h-[18px] w-[18px] text-[#4A4A4A] transition-all duration-300 group-hover:translate-y-[4px] group-hover:text-[#ED4823] sm:h-[20px] sm:w-[20px] md:h-[24px] md:w-[24px]"
        strokeWidth={2}
      />

      {/* RIGHT BRACKET */}
      <span className="heading-font text-[18px] font-bold leading-[18px] text-[#ED4823] sm:text-[20px] sm:leading-[20px] md:text-[24px] md:leading-[20px]">
        ]
      </span>
    </a>
  );
}
