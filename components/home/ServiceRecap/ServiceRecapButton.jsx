import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ServiceRecapButton({ href = "#", children }) {
  return (
    <Link
      href={href}
      className="
        group
        flex
        w-fit
        items-center
        gap-2
        mt-[24px]
        sm:mt-[36px]
        md:mt-[48px]
        lg:mt-[60px]
      "
    >
      {/* Left Bracket */}
      <span
        className="
          text-[#ED4823]
          transition-colors
          duration-300
          group-hover:text-[#575656]
        "
      >
        {"{"}
      </span>

      {/* Text */}
      <span
        className="
          heading-font
          text-[12px]
          font-semibold
          uppercase
          tracking-wide
          text-[#575656]
          sm:text-[13px]
          md:text-[14px]
        "
      >
        {children}
      </span>

      {/* Arrow */}
      <ArrowUpRight
        size={14}
        className="
          shrink-0
          text-[#ED4823]
          transition-all
          duration-300
          group-hover:translate-x-0.5
          group-hover:-translate-y-0.5
          group-hover:text-[#575656]
        "
      />

      {/* Right Bracket */}
      <span
        className="
          text-[#ED4823]
          transition-colors
          duration-300
          group-hover:text-[#575656]
        "
      >
        {"}"}
      </span>
    </Link>
  );
}
