/*
 * One block of visit details: a small orange label, then rows of 2–3
 * columns (first left, middle centred, last right), with a rule below.
 * Pass `rows` for the columns, or `children` for free content.
 */
export default function VisitDetail({ label, rows, children, tone = "cream" }) {
  const dark = tone === "dark";
  return (
    <div className={`border-b py-5 first:pt-0 ${dark ? "border-[#3B3B3B]" : "border-[#9B9B9B]"}`}>
      <p className="heading-font text-[12px] font-semibold uppercase tracking-[0.22em] text-[#ED4823] sm:text-[13px]">
        {label}
      </p>
      {rows && (
        <div
          className={`heading-font mt-2 grid gap-x-2 font-bold uppercase leading-[1.1] tracking-[-0.015em] ${
            dark ? "text-[#F9E9D3]" : "text-[#4A4A4A]"
          } ${rows[0].length === 3 ? "grid-cols-3" : "grid-cols-2"}`}
          style={{ fontSize: "clamp(18px, 2.4vw, 30px)" }}
        >
          {rows.map((row) =>
            row.map((cell, i) => (
              <span
                key={`${row[0]}-${i}`}
                className={
                  i === row.length - 1 ? "text-right" : i === 0 ? "text-left" : "text-center"
                }
              >
                {cell}
              </span>
            ))
          )}
        </div>
      )}
      {children && <div className="mt-2">{children}</div>}
    </div>
  );
}
