import { about } from "@/data/about";
import SecondaryButton from "@/components/ui/buttons/SecondaryButton";

export default function AboutContent() {
  return (
    <div className="mb-[4px] grid w-full grid-cols-1 gap-4 lg:grid-cols-12 lg:items-start lg:gap-12">
      {/* LEFT COLUMN */}
      <div className="flex flex-col lg:col-span-5 xl:col-span-4">
        {/* Description */}
        <p
          className="text-[13px] leading-[18px] text-[#575656] sm:text-[16px] sm:leading-[22px] md:text-[17px] md:leading-[24px] lg:text-[18px] lg:leading-[26px]"
          style={{ fontWeight: 400 }}
        >
          {about.description}
        </p>

        {/* Anchor Scripture */}
        <p
          className="mt-2 text-[13px] leading-[18px] uppercase text-[#575656] sm:mt-6 sm:text-[16px] sm:leading-[22px] md:text-[17px] md:leading-[24px] lg:text-[18px] lg:leading-[26px]"
          style={{ fontWeight: 500 }}
        >
          {about.scripture}
        </p>
      </div>

      {/* RIGHT COLUMN */}
      <div className="flex flex-col items-start lg:col-span-7 lg:items-end xl:col-span-8">
        <h2
          className="heading-font text-left text-[18px] leading-[22px] uppercase font-black lg:text-right sm:text-[28px] sm:leading-[32px] md:text-[32px] md:leading-[36px] lg:text-[36px] lg:leading-[40px]"
          style={{ letterSpacing: "0px" }}
        >
          <div className="text-[#575656]">NUNC CONDIMENTUM</div>

          <div>
            <span className="text-[#ED4823]">SAPIEN</span>
            <span className="text-[#575656]"> IPSUM, AC </span>
            <span className="text-[#ED4823]">TINCIDUNT</span>
          </div>

          <div>
            <span className="text-[#ED4823]">LOREM LACINIA</span>
            <span className="text-[#575656]"> VEL.</span>
          </div>
        </h2>

        {/* Button Wrapper */}
        <div className="mt-2 sm:mt-8 lg:mt-10">
          <SecondaryButton href="/about">{about.button}</SecondaryButton>
        </div>
      </div>
    </div>
  );
}