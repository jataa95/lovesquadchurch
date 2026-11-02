import Link from "next/link";
import { ArrowDown } from "lucide-react";

// tone="light" (default): cream text, for dark backgrounds.
// tone="dark": grey text, for the cream page background.
const TONES = {
  light: { text: "text-[#F4EBDC]", bracketHover: "group-hover:text-[#F4EBDC]" },
  dark: { text: "text-[#575656]", bracketHover: "group-hover:text-[#575656]" },
};

export default function TertiaryButton({
  href = "#",
  children,
  className = "",
  tone = "light",
  onClick,
}) {
  const { text, bracketHover } = TONES[tone] ?? TONES.light;

  const bracket = `
    heading-font
    text-[18px]
    font-bold
    uppercase
    leading-none
    tracking-[-0.02em]
    text-[#ED4823]
    transition-colors
    duration-300
    ${bracketHover}
    sm:text-[24px]
  `;

  return (
    <Link
      href={href}
      onClick={onClick}
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
      <span className={bracket}>{"{"}</span>

      {/* Text */}
      <span
        className={`
          heading-font
          text-[14px]
          font-bold
          uppercase
          leading-none
          tracking-[-0.02em]
          ${text}
          transition-colors
          duration-300
          group-hover:text-[#ED4823]
          sm:text-[20px]
        `}
      >
        {children}
      </span>

      {/* Down Arrow */}
      <ArrowDown
        className={`
          h-4
          w-4
          ${text}
          transition-all
          duration-300
          group-hover:translate-y-0.5
          group-hover:text-[#ED4823]
          sm:h-6
          sm:w-6
        `}
      />

      {/* Right Bracket */}
      <span className={bracket}>{"}"}</span>
    </Link>
  );
}
