export default function BodyText({
  children,
  className = "",
  color = "#575656",
}) {
  return (
    <p
      className={className}
      style={{
        color,
        fontSize: "20px",
        fontWeight: 400,
        lineHeight: "30px",
        letterSpacing: "0px",
      }}
    >
      {children}
    </p>
  );
}
