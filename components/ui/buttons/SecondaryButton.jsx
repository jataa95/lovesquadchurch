import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function SecondaryButton({
  href = "#",
  children,
  className = "",
}) {
  // Links to a section on the same page point down; others point out.
  const inPage = href.startsWith("#");
  const Arrow = inPage ? ArrowDown : ArrowUpRight;
  return (
    <Link
      href={href}
      className={`
        group
        inline-flex
        items-center
        gap-1 sm:gap-1.5 md:gap-2
        transition-all
        duration-300
        ${className}
      `}
    >
      {/* Left Bracket */}
      <span
        className="
          heading-font
          uppercase
          text-[#ED4823]
          transition-colors
          duration-300
          group-hover:text-[#575656]

          text-[18px] sm:text-[20px] md:text-[24px]
          leading-none
          font-bold
          tracking-[-0.02em]
          -translate-y-[0.06em]
        "
      >
        {"{"}
      </span>

      {/* Text */}
      <span
        className="
          heading-font
          uppercase
          text-[#575656]
          transition-colors
          duration-300
          group-hover:text-[#ED4823]

          text-[14px] leading-[16px]
          sm:text-[16px] sm:leading-[18px]
          md:text-[20px] md:leading-[20px]
          font-bold
          tracking-[-0.02em]
        "
      >
        {children}
      </span>

      {/* Arrow */}
      <Arrow
        className={`
          text-[#575656]
          transition-all
          duration-300
          group-hover:text-[#ED4823]
          ${inPage ? "group-hover:translate-y-0.5" : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"}

          h-4 w-4
          sm:h-5 sm:w-5
          md:h-6 md:w-6
        `}
      />

      {/* Right Bracket */}
      <span
        className="
          heading-font
          uppercase
          text-[#ED4823]
          transition-colors
          duration-300
          group-hover:text-[#575656]

          text-[18px] sm:text-[20px] md:text-[24px]
          leading-none
          font-bold
          tracking-[-0.02em]
          -translate-y-[0.06em]
        "
      >
        {"}"}
      </span>
    </Link>
  );
}