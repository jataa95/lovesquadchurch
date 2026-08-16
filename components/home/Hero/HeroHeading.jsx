import { hero } from "@/data/hero";

export default function HeroHeading() {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        text-left
        mt-[5px]

        sm:mt-[10px]
        md:mt-[15px]
        lg:mt-[20px]
      "
    >
      {/* WELCOME HOME */}
      <p
        className="
          heading-font
          uppercase
          text-[#F5EBDD]

          text-[20px]
          leading-[26px]

          sm:text-[24px]
          sm:leading-[30px]

          md:text-[28px]
          md:leading-[36px]

          lg:text-[32px]
          lg:leading-[40px]
        "
        style={{
          fontWeight: 500,
          letterSpacing: "-0.02em",
        }}
      >
        {hero.tag}
      </p>

      {/* LOVESQUAD */}
      <h1
        className="
          heading-font
          select-none
          uppercase
          text-[#F5EBDD]

          mt-[10px]
          mb-[18px]

          text-[72px]
          leading-[0.8]
          tracking-[-0.06em]

          sm:mt-[14px]
          sm:mb-[22px]
          sm:text-[100px]

          md:mt-[18px]
          md:mb-[28px]
          md:text-[135px]

          lg:mt-[20px]
          lg:mb-[32px]
          lg:text-[170px]

          xl:text-[200px]
        "
        style={{
          fontWeight: 700,
        }}
      >
        {hero.title}
      </h1>

      {/* CHURCH */}
      <p
        className="
          heading-font
          uppercase
          text-[#F5EBDD]

          text-[20px]
          leading-[26px]

          sm:text-[24px]
          sm:leading-[30px]

          md:text-[28px]
          md:leading-[36px]

          lg:text-[32px]
          lg:leading-[40px]
        "
        style={{
          fontWeight: 500,
          letterSpacing: "-0.02em",
        }}
      >
        {hero.subtitle}
      </p>
    </div>
  );
}