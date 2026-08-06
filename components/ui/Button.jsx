export default function Button({
  children,
  variant = "primary",
}) {
  const styles = {
    primary:
      "bg-[#F04A23] text-white hover:bg-[#d93d19]",

    secondary:
      "bg-white text-black hover:bg-gray-100",
  };

  return (
    <button
      className={`
        inline-flex
        items-center
        gap-3
        rounded-full
        px-8
        py-4
        font-medium
        transition-all
        duration-300
        ${styles[variant]}
      `}
    >
      {children}

      <span>↗</span>
    </button>
  );
}