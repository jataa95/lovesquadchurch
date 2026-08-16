"use client";

export default function VisitOnlineButton({
  href = "#online",
  children = "ONLINE",
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
          text-[#ED4823]
          transition-colors
          duration-300
          group-hover:text-[#4A4A4A]
        "
        style={{
          fontSize: "clamp(26px, 2.5vw, 34px)",
          fontWeight: 400,
          lineHeight: "1",
        }}
      >
        (
      </span>

      {/* ONLINE / GLOBE ICON */}
      <span
        className="
          h-[24px]
          w-[24px]
          shrink-0
          bg-[#4A4A4A]
          transition-colors
          duration-300

          group-hover:bg-[#ED4823]

          sm:h-[26px]
          sm:w-[26px]

          md:h-[30px]
          md:w-[30px]

          lg:h-[32px]
          lg:w-[32px]
        "
        style={{
          WebkitMaskImage: "url('/images/visit/VisitOnlineButton.svg')",
          maskImage: "url('/images/visit/VisitOnlineButton.svg')",
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
          whitespace-nowrap
          uppercase
          text-[#4A4A4A]
          transition-colors
          duration-300
          group-hover:text-[#ED4823]
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
          text-[#ED4823]
          transition-colors
          duration-300
          group-hover:text-[#4A4A4A]
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
