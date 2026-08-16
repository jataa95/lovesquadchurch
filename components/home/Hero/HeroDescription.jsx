import { hero } from "@/data/hero";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";

export default function HeroDescription() {
  return (
    <div
      className="
        w-full
        max-w-[420px]
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
          text-[16px]
          leading-[24px]

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

      {/* CTA */}
      <div
        className="
          mt-8

          sm:mt-10

          lg:mt-12
        "
      >
        <PrimaryButton href="/visit">{hero.button}</PrimaryButton>
      </div>
    </div>
  );
}
