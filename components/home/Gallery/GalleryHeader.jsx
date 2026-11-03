
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
      <h2
        className="
          heading-font
          w-full
          max-w-[1000px]
          text-center
          text-balance
          uppercase
          text-[#575656]

          text-[22px]        {/* Reduced from 26px */}
          leading-[26px]     {/* Reduced from 27px */}
          tracking-[-0.03em]
          font-bold

          sm:max-w-[650px]
          sm:text-[32px]
          sm:leading-[34px]

          md:text-[36px]
          md:leading-[36px]

          lg:text-[42px]
          lg:leading-[40px]
        "
      >
        NUNC CONDIMENTUM <span className="text-[#ED4823]">SAPIEN</span> IPSUM,
        AC <span className="text-[#ED4823]">TINCIDUNT LOREM</span>{" "}
        <span className="text-[#ED4823]">LACINIA</span> VEL.
      </h2>

    </div>
  );
}