import { loveSpots } from "@/data/lovespots";
import SecondaryButton from "@/components/ui/buttons/SecondaryButton";

export default function LoveSpotsContent() {
  return (
    <div className="flex flex-col items-center text-center gap-4 sm:gap-6 md:flex-row md:items-end md:justify-between md:text-left">
      {/* LEFT COLUMN: Heading + Paragraph */}
      <div className="w-full max-w-[720px] flex flex-col items-center md:items-start">
        <h3
          className="heading-font text-[16px] uppercase leading-[20px] text-[#575656] sm:text-[22px] sm:leading-[26px] md:text-[28px] md:leading-[32px]"
          style={{
            fontWeight: 900,
            letterSpacing: "0px",
            marginBottom: "8px",
          }}
        >
          {loveSpots.heading}
        </h3>

        <p
          className="max-w-[660px] text-[12px] leading-[16px] text-[#575656] sm:text-[14px] sm:leading-[19px] md:text-[15px] md:leading-[21px]"
          style={{
            fontWeight: 400,
            whiteSpace: "pre-line",
          }}
        >
          {loveSpots.description}
        </p>
      </div>

      {/* RIGHT COLUMN: Button */}
      <div className="self-center md:self-end md:shrink-0">
        <SecondaryButton href="/lovespot">{loveSpots.button}</SecondaryButton>
      </div>
    </div>
  );
}