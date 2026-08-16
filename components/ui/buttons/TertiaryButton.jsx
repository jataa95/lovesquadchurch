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
          group-hover:text-[#F4EBDC]
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
          text-[#F4EBDC]
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

      {/* Down Arrow */}
      <ArrowDown
        size={24}
        className="
          text-[#F4EBDC]
          transition-all
          duration-300
          group-hover:text-[#ED4823]
          group-hover:translate-y-0.5
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
          group-hover:text-[#F4EBDC]
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