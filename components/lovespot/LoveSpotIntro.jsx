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
      className="relative w-full overflow-hidden bg-[#F9E9D3] px-[8px]"
    >
      <div
        className="
          relative
          grid
          w-full
          grid-cols-1
          gap-[48px]
          px-[20px]
          py-[48px]
          md:px-[32px]
          md:py-[56px]
          lg:min-h-[650px]
          lg:grid-cols-[1fr_1.5fr]
          lg:gap-[6%]
          lg:px-[32px]
          lg:py-[48px]
        "
      >
        {/* LEFT SIDE */}
        <div className="flex items-start lg:items-center">
          <div className="flex items-start gap-[10px] sm:gap-[14px]">
            {/* ICON */}
            <div className="mt-[4px] shrink-0">
              <Image
                src="/images/lovespot/lovespot-icon.svg"
                alt="LoveSpot community"
                width={135}
                height={95}
                className="
                  h-[56px]
                  w-[68px]
                  object-contain
                  sm:h-[70px]
                  sm:w-[84px]
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
              style={{ fontSize: "clamp(48px, 8vw, 80px)" }}
            >
              <span className="block">WHAT IS</span>
              <span className="block text-[#ED4823]">LOVESPOT?</span>
            </h2>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex w-full max-w-[560px] flex-col pt-[4px]">
          {/* INTRO */}
          <div>
            <h3
              className="
                heading-font
                uppercase
                font-bold
                leading-[1]
                tracking-[-0.025em]
                text-[#575656]
              "
              style={{ fontSize: "clamp(20px, 3vw, 24px)" }}
            >
              NUNC CONDIMENTUM SAPIEN IPSUM,
              <br />
              AC TINCIDUNT LOREM.
            </h3>

            <div className="mt-[10px] max-w-[500px]">
              {introParagraphs.map((paragraph, index) => (
                <p
                  key={`intro-${index}`}
                  className="mt-[20px] text-[#575656] sm:mt-[24px]"
                  style={{
                    fontSize: "clamp(14px, 2vw, 16px)",
                    lineHeight: "20px",
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* WHY JOIN ONE */}
          <div className="mt-[48px] sm:mt-[52px]">
            <h3
              className="
                heading-font
                uppercase
                font-bold
                leading-none
                tracking-[-0.025em]
                text-[#575656]
              "
              style={{ fontSize: "clamp(20px, 3vw, 24px)" }}
            >
              WHY JOIN ONE?
            </h3>

            <div className="mt-[16px] max-w-[500px] sm:mt-[20px]">
              {whyJoinParagraphs.map((paragraph, index) => (
                <p
                  key={`why-${index}`}
                  className="mt-[20px] text-[#575656] sm:mt-[24px]"
                  style={{
                    fontSize: "clamp(14px, 2vw, 16px)",
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