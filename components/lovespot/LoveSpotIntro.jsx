"use client";

import AboutSplitSection from "@/components/about/AboutSplitSection";

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

// Same layout as the About sections: sticky heading on the left, and an
// orange line between it and the details that grows with scroll.
export default function LoveSpotIntro() {
  return (
    <AboutSplitSection
      id="what-is-lovespot"
      icon="/images/lovespot/lovespot-icon.svg"
      iconAlt="LoveSpot community"
      heading={
        <>
          <span className="block">WHAT ARE</span>
          <span className="block text-[#ED4823]">LOVESPOTS?</span>
        </>
      }
    >
      <div className="flex max-w-[640px] flex-col text-[#575656]">
        <h3
          className="heading-font font-bold uppercase leading-[1.05] tracking-[-0.025em]"
          style={{ fontSize: "clamp(20px, 2.5vw, 26px)" }}
        >
          NUNC CONDIMENTUM SAPIEN IPSUM,
          <br />
          AC TINCIDUNT LOREM.
        </h3>
        <div className="mt-4 flex flex-col gap-4">
          {introParagraphs.map((paragraph, index) => (
            <p key={`intro-${index}`} className="text-[15px] leading-[24px] lg:text-[16px]">
              {paragraph}
            </p>
          ))}
        </div>

        <h3
          className="heading-font mt-10 font-bold uppercase leading-none tracking-[-0.025em]"
          style={{ fontSize: "clamp(20px, 2.5vw, 26px)" }}
        >
          WHY JOIN ONE?
        </h3>
        <div className="mt-4 flex flex-col gap-4">
          {whyJoinParagraphs.map((paragraph, index) => (
            <p key={`why-${index}`} className="text-[15px] leading-[24px] lg:text-[16px]">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </AboutSplitSection>
  );
}
