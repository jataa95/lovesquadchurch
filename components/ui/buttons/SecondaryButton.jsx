import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function SecondaryButton({
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
        gap-2
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
        "
        style={{
          fontSize: "24px",
          fontWeight: 700,
          lineHeight: "20px",
          letterSpacing: "-0.02em",
        }}
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
        "
        style={{
          fontSize: "20px",
          fontWeight: 700,
          lineHeight: "20px",
          letterSpacing: "-0.02em",
        }}
      >
        {children}
      </span>

      {/* Arrow */}
      <ArrowUpRight
        size={24}
        className="
          text-[#575656]
          transition-all
          duration-300
          group-hover:text-[#ED4823]
          group-hover:translate-x-0.5
          group-hover:-translate-y-0.5
        "
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
        "
        style={{
          fontSize: "24px",
          fontWeight: 700,
          lineHeight: "20px",
          letterSpacing: "-0.02em",
        }}
      >
        {"}"}
      </span>
    </Link>
  );
}