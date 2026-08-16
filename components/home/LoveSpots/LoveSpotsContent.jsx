import { loveSpots } from "@/data/lovespots";
import SecondaryButton from "@/components/ui/buttons/SecondaryButton";

export default function LoveSpotsContent() {
  return (
    <div className="-mt-2 flex flex-col items-start gap-4 sm:gap-5 md:flex-row md:items-end md:justify-between md:gap-6">
      {/* ================================
          LEFT COLUMN
      ================================= */}
      <div className="w-full max-w-[760px]">
        <h3
          className="heading-font text-[24px] uppercase leading-[28px] text-[#575656] sm:text-[28px] sm:leading-[32px] md:text-[32px] md:leading-[36px] lg:text-[36px] lg:leading-[40px]"
          style={{
            fontWeight: 900,
            letterSpacing: "0px",
            marginBottom: "8px",
          }}
        >
          {loveSpots.heading}
        </h3>

        <p
          className="max-w-[680px] text-[15px] leading-[18px] text-[#575656] sm:text-[16px] sm:leading-[19px] md:text-[17px] md:leading-[20px] lg:text-[18px]"
          style={{
            fontWeight: 300,
            whiteSpace: "pre-line",
          }}
        >
          {loveSpots.description}
        </p>
      </div>

      {/* ================================
          RIGHT COLUMN — BUTTON
      ================================= */}
      <div className="self-start md:shrink-0 md:self-end">
        <SecondaryButton href="/lovespot">
          {loveSpots.button}
        </SecondaryButton>
      </div>
    </div>
  );
}