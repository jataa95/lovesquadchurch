"use client";

import Image from "next/image";

export default function VisitInPersonButton({
  href = "#in-person",
  children = "IN PERSON",
}) {
  return (
    <a
      href={href}
      className="
        group
        inline-flex
        items-center
        gap-[5px]
        transition-all
        duration-300

        sm:gap-[6px]
        md:gap-[8px]
      "
    >
      {/* LEFT BRACKET */}
      <span
        className="
          heading-font
          text-[#4A4A4A]
          transition-colors
          duration-300
          group-hover:text-[#ED4823]
        "
        style={{
          fontSize: "clamp(26px, 2.5vw, 34px)",
          fontWeight: 400,
          lineHeight: "1",
        }}
      >
        (
      </span>

      {/* LOCATION ICON */}
      <Image
        src="/images/visit/VisitInPersonButton.svg"
        alt=""
        width={32}
        height={32}
        className="
          h-[24px]
          w-[24px]
          shrink-0
          object-contain
          transition-all
          duration-300
          group-hover:grayscale

          sm:h-[26px]
          sm:w-[26px]

          md:h-[30px]
          md:w-[30px]

          lg:h-[32px]
          lg:w-[32px]
        "
      />

      {/* TEXT */}
      <span
        className="
          heading-font
          whitespace-nowrap
          uppercase
          text-[#ED4823]
          transition-colors
          duration-300
          group-hover:text-[#4A4A4A]
        "
        style={{
          fontSize: "clamp(15px, 1.5vw, 20px)",
          fontWeight: 700,
          lineHeight: "1",
          letterSpacing: "-0.02em",
        }}
      >
        {children}
      </span>

      {/* RIGHT BRACKET */}
      <span
        className="
          heading-font
          text-[#4A4A4A]
          transition-colors
          duration-300
          group-hover:text-[#ED4823]
        "
        style={{
          fontSize: "clamp(26px, 2.5vw, 34px)",
          fontWeight: 400,
          lineHeight: "1",
        }}
      >
        )
      </span>
    </a>
  );
}