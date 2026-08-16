export default function Label({
  children,
  className = "",
  color = "#575656",
}) {
  return (
    <p
      className={`uppercase ${className}`}
      style={{
        color,
        fontSize: "20px",
        fontWeight: 900,
        lineHeight: "30px",
        letterSpacing: "0px",
      }}
    >
      {children}
    </p>
  );
}