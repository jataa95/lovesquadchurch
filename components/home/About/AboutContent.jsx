import { about } from "@/data/about";
import SecondaryButton from "@/components/ui/buttons/SecondaryButton";

export default function AboutContent() {
  return (
    <div className="justify-center grid w-full grid-cols-1 gap-4 lg:grid-cols-12 lg:items-start lg:gap-12">
      {/* LEFT COLUMN */}
      <div className="flex flex-col lg:col-span-5 xl:col-span-4">
        {/* Description */}
        <p
          className="text-[15px] leading-[24px] lg:text-[16px] text-[#575656]"
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
      <div className="flex flex-col items-end lg:col-span-7 lg:items-end lg:flex-col xl:col-span-8">
        <h2
          className="text-left lg:text-right heading-font text-[26px] font-bold uppercase leading-[1.05] tracking-[-0.03em] text-[#4A4A4A] sm:text-[34px] lg:text-[42px] xl:text-[48px]"
        >
          {/* Line 1 */}
          <div>NUNC CONDIMENTUM</div>

          {/* Line 2: Horizontal flow on mobile, wrapping smoothly */}
          <div className="flex flex-wrap gap-x-1.5 lg:justify-end">
            <span className="text-[#ED4823]">SAPIEN</span>
            <span className="text-[#575656]">IPSUM, AC</span>
            <span className="text-[#ED4823]">TINCIDUNT</span>
          </div>

          {/* Line 3 */}
          <div className="flex flex-wrap gap-x-1.5 lg:justify-end">
            <span className="text-[#ED4823]">LOREM LACINIA</span>
            <span className="text-[#575656]">VEL.</span>
          </div>
        </h2>

        {/* Button Wrapper */}
        <div className="mt-4 sm:mt-8 lg:mt-10">
          <SecondaryButton href="/about">{about.button}</SecondaryButton>
        </div>
      </div>
    </div>
  );
}