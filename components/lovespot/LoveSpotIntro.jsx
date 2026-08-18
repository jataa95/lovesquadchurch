"use client";

import Image from "next/image";

const introParagraphs = [
  "Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
  "Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
  "Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
  "Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
];

const whyJoinParagraphs = [
  "Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
  "Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
  "Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
  "Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
];

export default function LoveSpotIntro() {
  return (
    <section
      id="what-is-lovespot"
      className="relative w-full bg-[#F9E9D3] px-[16px] pt-[12x] pb-[8px] sm:px-[24px] md:py-[48px] lg:px-[48px] lg:py-[64px]"
    >
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1400px]
          grid
          grid-cols-1
          items-start
          gap-[2px]
          md:gap-[48px]
          lg:grid-cols-[1fr_1.4fr]
          lg:gap-[16%]
        "
      >
        {/* LEFT SIDE (STICKY CONTAINER WRAPPER) */}
        <div className="sticky top-0 lg:top-28 z-20 h-fit bg-[#F9E9D3] pt-6 pb-2 md:pt-2 md:pb-4 lg:py-0">
          <div className="flex flex-row items-center justify-center text-center gap-[8px] sm:gap-[16px] lg:items-start lg:text-left">
            {/* ICON */}
            <div className="shrink-0 flex justify-center">
              <Image
                src="/images/lovespot/lovespot-icon.svg"
                alt="LoveSpot community"
                width={135}
                height={95}
                className="
                  h-[40px]
                  w-[46px]
                  object-contain
                  sm:h-[56px]
                  sm:w-[68px]
                  lg:h-[80px]
                  lg:w-[96px]
                "
              />
            </div>

            {/* TITLE */}
            <h2
              className="
                heading-font
                uppercase
                font-bold
                leading-[0.82]
                tracking-[-0.045em]
                text-[#575656]
              "
              style={{ fontSize: "clamp(22px, 7vw, 80px)" }}
            >
              <span className="block">WHAT ARE</span>
              <span className="block text-[#ED4823]">LOVESPOTS?</span>
            </h2>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex w-full max-w-[800px] flex-col items-center text-center pt-[1px] lg:items-start lg:text-left lg:pt-0">
          {/* INTRO */}
          <div className="w-full flex flex-col items-center lg:items-start">
            <h3
              className="
                heading-font
                uppercase
                font-bold
                leading-[1]
                tracking-[-0.025em]
                text-[#575656]
              "
              style={{ fontSize: "clamp(18px, 2.5vw, 24px)" }}
            >
              NUNC CONDIMENTUM SAPIEN IPSUM,
              <br />
              AC TINCIDUNT LOREM.
            </h3>

            <div className="mt-[4px] max-w-[500px] sm:mt-[12px] flex flex-col items-center lg:items-start">
              {introParagraphs.map((paragraph, index) => (
                <p
                  key={`intro-${index}`}
                  className="mt-[4px] text-[#575656] sm:mt-[20px]"
                  style={{
                    fontSize: "clamp(14px, 1.8vw, 16px)",
                    lineHeight: "20px",
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* WHY JOIN ONE */}
          <div className="mt-[24px] sm:mt-[32px] w-full flex flex-col items-center lg:items-start">
            <h3
              className="
                heading-font
                uppercase
                font-bold
                leading-none
                tracking-[-0.025em]
                text-[#575656]
              "
              style={{ fontSize: "clamp(18px, 2.5vw, 24px)" }}
            >
              WHY JOIN ONE?
            </h3>

            <div className="mt-[4px] max-w-[800px] sm:mt-[16px] flex flex-col items-center lg:items-start">
              {whyJoinParagraphs.map((paragraph, index) => (
                <p
                  key={`why-${index}`}
                  className="mt-[4px] text-[#575656] sm:mt-[20px]"
                  style={{
                    fontSize: "clamp(14px, 1.8vw, 16px)",
                    lineHeight: "20px",
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}