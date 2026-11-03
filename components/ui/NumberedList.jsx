/*
 * Standard numbered list (01, 02 …): a title and text per item, with a
 * thin rule between items. Used by What to Expect, Careers, etc.
 * `tone="dark"` for dark (bg-ink) sections.
 */
export default function NumberedList({ items, tone = "cream" }) {
  const dark = tone === "dark";
  return (
    <ol className="flex flex-col">
      {items.map((item, i) => (
        <li
          key={i}
          className={`py-6 first:pt-0 last:pb-0 ${
            i !== items.length - 1 ? `border-b ${dark ? "border-[#3B3B3B]" : "border-[#9B9B9B]"}` : ""
          }`}
        >
          <div className="flex items-start gap-3">
            <span className="heading-font pt-1 text-[12px] font-bold leading-none text-[#ED4823] sm:text-[14px]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3
              className="heading-font font-bold uppercase leading-[0.9] tracking-[-0.02em]"
              style={{ fontSize: "clamp(26px, 6vw, 40px)" }}
            >
              {item.title}
            </h3>
          </div>
          <p
            className={`mt-3 max-w-[600px] text-[15px] leading-[24px] lg:text-[16px] ${
              dark ? "text-[#F9E9D3]/80" : "text-[#575656]"
            }`}
          >
            {item.text}
          </p>
        </li>
      ))}
    </ol>
  );
}
