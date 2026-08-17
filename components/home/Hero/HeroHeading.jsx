import { hero } from "@/data/hero";

export default function HeroHeading() {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        text-left
        mt-0               {/* Removed top margin */}
        mb-2               {/* Minimal gap before description */}

        sm:mt-[30px]
        sm:mb-0
        md:mt-[30px]
        lg:mt-[60px]
      "
    >
      {/* WELCOME HOME! */}
      <p
        className="
          heading-font
          uppercase
          text-[#F5EBDD]
          text-[14px]      {/* Scaled down slightly */}
          leading-none     {/* Removes extra inline line-height spacing */}

          sm:text-[20px]
          sm:leading-[30px]
          md:text-[28px]
          md:leading-[36px]
          lg:text-[32px]
          lg:leading-[40px]
        "
        style={{ fontWeight: 300, letterSpacing: "-0.02em" }}
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
          my-1             {/* Zero margins on mobile */}
          text-[52px]      {/* Reduced slightly to fit tighter */}
          leading-[0.8]
          tracking-[-0.06em]

          sm:mt-[14px]
          sm:mb-[22px]
          sm:text-[80px]
          md:mt-[18px]
          md:mb-[28px]
          md:text-[100px]
          lg:mt-[20px]
          lg:mb-[32px]
          lg:text-[170px]
          xl:text-[200px]
        "
        style={{ fontWeight: 700 }}
      >
        {hero.title}
      </h1>

      {/* CHURCH */}
      <p
        className="
          heading-font
          uppercase
          text-[#F5EBDD]
          text-[14px]      {/* Scaled down slightly */}
          leading-none     {/* Removes extra inline line-height spacing */}

          sm:text-[20px]
          sm:leading-[30px]
          md:text-[28px]
          md:leading-[36px]
          lg:text-[32px]
          lg:leading-[40px]
        "
        style={{ fontWeight: 300, letterSpacing: "-0.02em" }}
      >
        {hero.subtitle}
      </p>
    </div>
  );
}