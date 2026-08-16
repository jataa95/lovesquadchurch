import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import SectionTag from "@/components/ui/SectionTag";
import { hero } from "@/data/hero";

export default function HeroContent() {
  return (
    <div
      className="
        w-full
        max-w-[320px]

        sm:max-w-[400px]

        md:max-w-[500px]

        lg:max-w-[600px]

        xl:max-w-xl
      "
    >
      {/* =========================================
          SECTION TAG
      ========================================== */}
      <SectionTag>{hero.tag}</SectionTag>

      {/* =========================================
          DESCRIPTION
      ========================================== */}
      <p
        className="
          mt-5
          text-[16px]
          leading-[24px]
          text-gray-300

          sm:mt-6
          sm:text-[17px]
          sm:leading-[26px]

          md:mt-7
          md:text-[18px]
          md:leading-[28px]

          lg:mt-8
          lg:text-lg
          lg:leading-8
        "
      >
        {hero.description}
      </p>

      {/* =========================================
          CTA
      ========================================== */}
      <div
        className="
          mt-7

          sm:mt-8

          md:mt-9

          lg:mt-10
        "
      >
        <PrimaryButton href="/visit">{hero.button}</PrimaryButton>
      </div>
    </div>
  );
}
