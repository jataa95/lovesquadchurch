export default function TwoColumn({
  left,
  right,
  leftWidth = "330px",
  rightWidth = "760px",
  gap = "120px",
  align = "start",
}) {
  return (
    <div
      className="flex justify-between"
      style={{
        alignItems: align,
        gap,
      }}
    >
      <div
        style={{
          width: leftWidth,
        }}
      >
        {left}
      </div>

      <div
        style={{
          width: rightWidth,
        }}
      >
        {right}
      </div>
    </div>
  );
}