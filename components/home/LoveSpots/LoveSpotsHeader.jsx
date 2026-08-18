import Image from "next/image";
import { loveSpots } from "@/data/lovespots";

export default function LoveSpotsHeader() {
  return (
    <div className="flex items-start gap-2 sm:gap-2">
      {/* Icon */}
      <Image
        src={loveSpots.icon || "/icons/lovespot.svg"}
        alt="Love Spots Icon"
        width={96}
        height={80}
        className="
          h-[30px]
          w-[36px]
          shrink-0
          object-contain
          sm:h-[44px]
          sm:w-[50px]
          md:h-[56px]
          md:w-[64px]
        "
      />

      {/* Multiline Header */}
      <h2
        className="
          heading-font
          flex
          flex-col
          uppercase
          text-[22px]
          leading-[1.05]

          sm:text-[36px]
          md:text-[40px]
          lg:text-[48px]
        "
        style={{
          fontWeight: 900,
          letterSpacing: "0px",
        }}
      >
        <span className="text-[#575656]">{loveSpots.titleTop}</span>
        <span className="text-[#ED4823]">{loveSpots.titleBottom}</span>
      </h2>
    </div>
  );
}