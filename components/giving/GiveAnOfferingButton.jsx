"use client";

export default function GiveAnOfferingButton({
  href = "#offering",
  children = "GIVE AN OFFERING",
}) {
  return (
    <a
      href={href}
      className="
        group
        inline-flex
        items-center
        gap-[6px]
        sm:gap-[8px]
        transition-all
        duration-300
      "
    >
      {/* LEFT BRACKET */}
      <span
        className="
          heading-font
          text-[#ED4823]
          transition-colors
          duration-300
          group-hover:text-[#4A4A4A]
        "
        style={{
          fontSize: "clamp(28px, 3vw, 34px)",
          fontWeight: 400,
          lineHeight: "20px",
        }}
      >
        (
      </span>

      {/* GIVING ICON */}
      <span
        className="
          h-[26px]
          w-[26px]
          shrink-0
          bg-[#4A4A4A]
          transition-colors
          duration-300
          sm:h-[30px]
          sm:w-[30px]
          lg:h-[32px]
          lg:w-[32px]
          group-hover:bg-[#ED4823]
        "
        style={{
          WebkitMaskImage: "url('/images/giving/giving.svg')",
          maskImage: "url('/images/giving/giving.svg')",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
          WebkitMaskSize: "contain",
          maskSize: "contain",
        }}
      />

      {/* TEXT */}
      <span
        className="
          heading-font
          uppercase
          text-[#4A4A4A]
          transition-colors
          duration-300
          group-hover:text-[#ED4823]
        "
        style={{
          fontSize: "clamp(15px, 2vw, 20px)",
          fontWeight: 700,
          lineHeight: "20px",
          letterSpacing: "-0.02em",
        }}
      >
        {children}
      </span>

      {/* RIGHT BRACKET */}
      <span
        className="
          heading-font
          text-[#ED4823]
          transition-colors
          duration-300
          group-hover:text-[#4A4A4A]
        "
        style={{
          fontSize: "clamp(28px, 3vw, 34px)",
          fontWeight: 400,
          lineHeight: "20px",
        }}
      >
        )
      </span>
    </a>
  );
}
