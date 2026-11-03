"use client";

import AboutSplitSection from "./AboutSplitSection";

const statements = [
  {
    title: "VISION",
    text: "Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
  },
  {
    title: "VISION FOR THE CITY",
    text: "Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
  },
  {
    title: "MISSION",
    text: "Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
  },
  {
    title: "PURPOSE",
    text: "Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
  },
];

export default function AboutVisionMission() {
  return (
    <AboutSplitSection
      id="about_vision-mission"
      icon="/images/about/our-vision-icon.svg"
      iconAlt="Our Vision"
      heading={
        <>
          <span className="block">OUR</span>
          <span className="block text-[#ED4823]">VISION</span>
          <span className="block">
            &amp; <span className="text-[#ED4823]">MISSION</span>
          </span>
          <span className="block">STATEMENTS</span>
        </>
      }
    >
      <div className="flex w-full flex-col gap-[30px] sm:gap-[42px] lg:gap-[64px]">
        {statements.map((statement, index) => (
          <Statement
            key={statement.title}
            title={statement.title}
            text={statement.text}
            isLast={index === statements.length - 1}
          />
        ))}
      </div>
    </AboutSplitSection>
  );
}

/* =================================
    STATEMENT
================================= */

function Statement({ title, text, isLast }) {
  return (
    <div
      className={
        "w-full " + (!isLast ? "border-b border-[#9D9A93] pb-[16px]" : "")
      }
    >
      {/* TITLE */}
      <h3
        className="
          heading-font
          uppercase
          font-bold
          leading-none
          tracking-[-0.025em]
          text-[#4A4A4A]
        "
        style={{
          fontSize: "clamp(24px, 3vw, 32px)",
        }}
      >
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p
        className="
          mt-[8px]
          w-full
          max-w-[430px]
          font-normal
          leading-[1.4]
          text-[#575656]
        "
        style={{
          fontSize: "13px",
        }}
      >
        {text}
      </p>
    </div>
  );
}