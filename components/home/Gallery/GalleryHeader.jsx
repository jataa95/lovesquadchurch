
export default function GalleryHeader() {
  return (
    <div
      className="
        flex
        justify-center
      "
    >
      {/* =========================================
          HEADING
      ========================================== */}
      <h2 className="w-full max-w-[1000px] text-balance text-center heading-font text-[26px] font-bold uppercase leading-[1.05] tracking-[-0.03em] text-[#4A4A4A] sm:text-[34px] lg:text-[42px] xl:text-[48px]">
        NUNC CONDIMENTUM <span className="text-[#ED4823]">SAPIEN</span> IPSUM,
        AC <span className="text-[#ED4823]">TINCIDUNT LOREM</span>{" "}
        <span className="text-[#ED4823]">LACINIA</span> VEL.
      </h2>

    </div>
  );
}