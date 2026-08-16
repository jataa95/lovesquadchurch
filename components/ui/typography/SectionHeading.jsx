export default function SectionHeading({
  children,
  className = "",
  color = "#575656",
  align = "left",
}) {
  return (
    <h2
      className={`heading-font uppercase ${className}`}
      style={{
        color,
        fontSize: "64px",
        fontWeight: 900,
        lineHeight: "64px",
        letterSpacing: "0px",
        textAlign: align,
      }}
    >
      {children}
    </h2>
  );
}
