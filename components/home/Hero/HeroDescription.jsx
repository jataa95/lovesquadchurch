import { hero } from "@/data/hero";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";

export default function HeroDescription() {
  return (
    <div
      className="
        w-full
        max-w-[420px]
        mx-auto sm:mx-0       {/* Centers container block on mobile */}
        mt-8
        sm:mt-10
        lg:mt-0
      "
    >
      {/* Description */}
      <p
        className="
          body-font
          text-[#F4EBDC]/85
          text-center sm:text-left   {/* Center text on mobile only */}
          text-[12px]
          leading-[16px]

          sm:text-[17px]
          sm:leading-[26px]

          lg:text-[20px]
          lg:leading-[30px]
        "
        style={{
          fontWeight: 300,
          letterSpacing: "-0.01em",
        }}
      >
        {hero.description}
      </p>

      {/* CTA Wrapper */}
      <div
        className="
          mt-6 sm:mt-10 lg:mt-12      {/* Slightly reduced mobile top margin */}
          flex justify-center sm:block  {/* Center-aligns button wrapper on mobile */}
        "
      >
        <div className="scale-90 origin-center sm:scale-100"> {/* Shrinks button size on mobile */}
          <PrimaryButton href="/visit">{hero.button}</PrimaryButton>
        </div>
      </div>
    </div>
  );
}