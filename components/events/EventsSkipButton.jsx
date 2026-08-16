// components/events/EventsSkipButton.jsx
import { ArrowDown } from "lucide-react";

export default function EventsSkipButton({
  onClick,
  children = "SKIP DOWN",
  className = "",
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group inline-flex items-center gap-2 transition-all duration-300 ${className}`}
    >
      {/* Left Bracket */}
      <span
        className="heading-font uppercase text-[#ED4823] transition-colors duration-300"
        style={{
          fontSize: "24px",
          fontWeight: 700,
          lineHeight: "20px",
          letterSpacing: "-0.02em",
        }}
      >
        {"["}
      </span>

      {/* Label Text */}
      <span
        className="heading-font uppercase text-[#4A4A4A] transition-colors duration-300 group-hover:text-[#ED4823]"
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
        className="text-[#4A4A4A] transition-all duration-300 group-hover:translate-y-0.5 group-hover:text-[#ED4823]"
      />

      {/* Right Bracket */}
      <span
        className="heading-font uppercase text-[#ED4823] transition-colors duration-300"
        style={{
          fontSize: "24px",
          fontWeight: 700,
          lineHeight: "20px",
          letterSpacing: "-0.02em",
        }}
      >
        {"]"}
      </span>
    </button>
  );
}
