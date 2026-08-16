export default function SectionTag({ children }) {
  return (
    <p className="mb-5 inline-block rounded-full border border-[#F04A23]/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-[#F04A23]">
      {children}
    </p>
  );
}