import Image from "next/image";
import { loveSpots } from "@/data/lovespots";

export default function LoveSpotsHeader() {
  return (
    <div className="relative z-10 -mt-8 mb-[16px] flex items-center gap-[10px] sm:-mt-12 sm:mb-[20px] sm:gap-[12px] md:-mt-16 md:mb-[24px] md:gap-[14px] lg:gap-[16px]">
      {/* ICON */}
      <Image
        src={loveSpots.icon}
        alt="LoveSpot Icon"
        width={96}
        height={80}
        className="h-[54px] w-[65px] shrink-0 object-contain sm:h-[62px] sm:w-[74px] md:h-[70px] md:w-[84px] lg:h-[80px] lg:w-[96px]"
      />

      {/* HEADING */}
      <div className="leading-none">
        {/* TOP TITLE */}
        <h2
          className="heading-font text-[34px] uppercase leading-[34px] text-[#575656] sm:text-[42px] sm:leading-[42px] md:text-[50px] md:leading-[50px] lg:text-[60px] lg:leading-[60px]"
          style={{
            fontWeight: 900,
            letterSpacing: "0px",
          }}
        >
          {loveSpots.titleTop}
        </h2>

        {/* BOTTOM TITLE */}
        <h2
          className="heading-font text-[34px] uppercase leading-[34px] text-[#ED4823] sm:text-[42px] sm:leading-[42px] md:text-[50px] md:leading-[50px] lg:text-[60px] lg:leading-[60px]"
          style={{
            fontWeight: 900,
            letterSpacing: "0px",
          }}
        >
          {loveSpots.titleBottom}
        </h2>
      </div>
    </div>
  );
}