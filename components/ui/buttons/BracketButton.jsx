import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

/*
 * The site's one button style: { LABEL ↗ }
 *
 * - tone="dark": grey text, for the cream background (SecondaryButton).
 * - tone="light": cream text, for dark backgrounds (PrimaryButton).
 * - Links to a section on the same page (href="#…") get a down arrow,
 *   other links an up-right arrow. `icon` swaps in another icon;
 *   `arrow={false}` hides it.
 * - Without href (e.g. onClick) it renders a <button>.
 */
const TONES = {
  dark: { text: "text-[#575656]", bracketHover: "group-hover:text-[#575656]" },
  light: { text: "text-[#F9E9D3]", bracketHover: "group-hover:text-[#F9E9D3]" },
};

export default function BracketButton({
  href,
  onClick,
  children,
  tone = "dark",
  icon: Icon,
  arrow = true,
  className = "",
  type = "button",
  ...rest
}) {
  const { text, bracketHover } = TONES[tone] ?? TONES.dark;
  const inPage = typeof href === "string" && href.startsWith("#");
  const Arrow = Icon ?? (inPage ? ArrowDown : ArrowUpRight);
  const nudge = Icon
    ? ""
    : inPage
      ? "group-hover:translate-y-0.5"
      : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5";

  // Brackets are a touch larger than the label and centred on it.
  const bracket = `heading-font font-bold leading-none tracking-[-0.02em] text-[#ED4823] transition-colors duration-300 ${bracketHover}
    text-[18px] sm:text-[20px] md:text-[24px] -translate-y-[0.06em]`;

  const content = (
    <>
      <span className={bracket}>{"{"}</span>
      <span
        className={`heading-font font-bold uppercase leading-none tracking-[-0.02em] ${text} transition-colors duration-300 group-hover:text-[#ED4823]
          text-[14px] sm:text-[16px] md:text-[20px]`}
      >
        {children}
      </span>
      {arrow && (
        <Arrow
          aria-hidden="true"
          className={`${text} h-4 w-4 transition-all duration-300 group-hover:text-[#ED4823] ${nudge} sm:h-5 sm:w-5 md:h-6 md:w-6`}
        />
      )}
      <span className={bracket}>{"}"}</span>
    </>
  );

  const cls = `group inline-flex items-center gap-1 sm:gap-1.5 md:gap-2 transition-all duration-300 ${className}`;

  return href ? (
    <Link href={href} onClick={onClick} className={cls} {...rest}>
      {content}
    </Link>
  ) : (
    <button type={type} onClick={onClick} className={cls} {...rest}>
      {content}
    </button>
  );
}
