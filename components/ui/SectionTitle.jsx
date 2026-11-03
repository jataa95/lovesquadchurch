/*
 * The site's standard section heading: a grey (or cream on dark) line and
 * an orange line, bold, tight letter spacing. Same size as the headings in
 * the split sections (About, First-timers, …).
 *
 *   <SectionTitle top="OUR" accent="STORIES" />
 */
export default function SectionTitle({
  top,
  accent,
  align = "center",
  tone = "cream",
  as: Tag = "h2",
  className = "",
}) {
  return (
    <Tag
      className={`heading-font text-[40px] font-bold uppercase leading-[0.9] tracking-[-0.05em] sm:text-[60px] xl:text-[66px] ${
        tone === "dark" ? "text-[#F9E9D3]" : "text-[#4A4A4A]"
      } ${align === "center" ? "text-center" : "text-left"} ${className}`}
    >
      {top && <span className="block">{top}</span>}
      {accent && <span className="block text-[#ED4823]">{accent}</span>}
    </Tag>
  );
}
