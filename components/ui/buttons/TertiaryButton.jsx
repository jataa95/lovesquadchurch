import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function TertiaryButton({
  href = "#",
  children,
  className = "",
}) {
  return (
    <Link
      href={href}
      className={`
        group
        inline-flex
        items-center
        gap-1
        transition-all
        duration-300
        sm:gap-2
        ${className}
      `}
    >
      {/* Left Bracket */}
      <span
        className="
          heading-font
          text-[18px]
          font-bold
          uppercase
          leading-none
          tracking-[-0.02em]
          text-[#ED4823]
          transition-colors
          duration-300
          group-hover:text-[#F4EBDC]

          sm:text-[24px]
        "
      >
        {"{"}
      </span>

      {/* Text */}
      <span
        className="
          heading-font
          text-[14px]
          font-bold
          uppercase
          leading-none
          tracking-[-0.02em]
          text-[#F4EBDC]
          transition-colors
          duration-300
          group-hover:text-[#ED4823]

          sm:text-[20px]
        "
      >
        {children}
      </span>

      {/* Down Arrow */}
      <ArrowDown
        className="
          h-4
          w-4
          text-[#F4EBDC]
          transition-all
          duration-300
          group-hover:translate-y-0.5
          group-hover:text-[#ED4823]

          sm:h-6
          sm:w-6
        "
      />

      {/* Right Bracket */}
      <span
        className="
          heading-font
          text-[18px]
          font-bold
          uppercase
          leading-none
          tracking-[-0.02em]
          text-[#ED4823]
          transition-colors
          duration-300
          group-hover:text-[#F4EBDC]

          sm:text-[24px]
        "
      >
        {"}"}
      </span>
    </Link>
  );
}