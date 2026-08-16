export default function Section({
  children,
  background = "#FFFFFF",
  pt = "120px",
  pb = "120px",
  className = "",
}) {
  return (
    <section
      className={className}
      style={{
        background,
        paddingTop: pt,
        paddingBottom: pb,
      }}
    >
      {children}
    </section>
  );
}
