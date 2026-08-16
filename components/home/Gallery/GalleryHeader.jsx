import GallerySkipButton from "@/components/home/Gallery/GallerySkipButton";

export default function GalleryHeader() {
  return (
    <div
      className="
        flex
        flex-col
        items-start
        gap-[12px]

        sm:gap-[16px]

        md:flex-row
        md:items-end
        md:justify-between
        md:gap-[20px]
      "
    >
      {/* =========================================
          HEADING
      ========================================== */}
      <h2
        className="
          heading-font
          w-full
          max-w-[620px]
          uppercase
          text-[#575656]

          text-[26px]
          leading-[27px]
          tracking-[-0.03em]
          font-extrabold

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

      {/* =========================================
          SKIP BUTTON
      ========================================== */}
      <div
        className="
          shrink-0
          self-start

          md:self-auto
        "
      >
        <GallerySkipButton />
      </div>
    </div>
  );
}
