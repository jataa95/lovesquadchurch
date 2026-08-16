import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function PrimaryButton({
  href = "#",
  children,
  className = "",
  icon = null,
}) {
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
          group-hover:text-[#F4EBDC]

          text-[18px] leading-[16px]
          sm:text-[20px] sm:leading-[18px]
          md:text-[24px] md:leading-[20px]
          font-bold
          tracking-[-0.02em]
        "
      >
        {"{"}
      </span>

      {/* Text */}
      <span
        className="
          heading-font
          uppercase
          text-[#F4EBDC]
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

      {/* Icon */}
      {icon ? (
        <span
          className="
            flex
            items-center
            justify-center
            text-[#F4EBDC]
            transition-all
            duration-300
            group-hover:text-[#ED4823]
          "
        >
          {icon}
        </span>
      ) : (
        <ArrowUpRight
          className="
            text-[#F4EBDC]
            transition-all
            duration-300
            group-hover:text-[#ED4823]
            group-hover:translate-x-0.5
            group-hover:-translate-y-0.5

            h-4 w-4
            sm:h-5 sm:w-5
            md:h-6 md:w-6
          "
        />
      )}

      {/* Right Bracket */}
      <span
        className="
          heading-font
          uppercase
          text-[#ED4823]
          transition-colors
          duration-300
          group-hover:text-[#F4EBDC]

          text-[18px] leading-[16px]
          sm:text-[20px] sm:leading-[18px]
          md:text-[24px] md:leading-[20px]
          font-bold
          tracking-[-0.02em]
        "
      >
        {"}"}
      </span>
    </Link>
  );
}