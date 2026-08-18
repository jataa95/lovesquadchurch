"use client";

import Image from "next/image";

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
    <section
      id="about_vision-mission"
      className="relative w-full bg-[#F5EBDD] px-[8px]"
    >
      {/* INNER WRAPPER */}
      <div
        className="
          relative
          w-full
          bg-[#F9E9D3]
          px-[18px]
          py-[55px]
          sm:px-[28px]
          sm:py-[65px]
          lg:min-h-[720px]
          lg:px-[72px]
          lg:py-[56px]
        "
      >
        <div
          className="
            grid
            w-full
            grid-cols-1
            items-start
            gap-[55px]
            lg:min-h-[610px]
            lg:grid-cols-2
            lg:gap-0
          "
        >
          {/* =================================
              LEFT SIDE (STICKY)
          ================================== */}
          <div
            className="
              flex
              flex-col
              items-start
              pt-0
              sticky
              top-16.5
              lg:top-28
              h-fit
              bg-[#F9E9D3]
              z-10
              pb-4
              lg:pb-0
              lg:pt-[8px]
            "
          >
            <div
              className="
                flex
                items-start
                gap-[12px]
                sm:gap-[16px]
                lg:gap-[22px]
              "
            >
              {/* ICON */}
              <div
                className="
                  mt-[20px]
                  shrink-0
                  sm:mt-[25px]
                  lg:mt-[50px]
                "
              >
                <Image
                  src="/images/about/our-vision-icon.svg"
                  alt="Our vision and mission"
                  width={96}
                  height={80}
                  className="
                    h-[32px]
                    w-[32px]
                    object-contain
                    sm:h-[50px]
                    sm:w-[50px]
                    lg:h-[62px]
                    lg:w-[62px]
                  "
                />
              </div>

              {/* HEADING */}
              <h2
                className="
                  heading-font
                  uppercase
                  font-bold
                  leading-[0.84]
                  tracking-[-0.045em]
                  text-[#4A4A4A]
                "
                style={{
                  fontSize: "clamp(36px, 7vw, 80px)",
                }}
              >
                <span className="block">OUR</span>

                <span className="block text-[#ED4823]">VISION</span>

                <span className="block">
                  &amp; <span className="text-[#ED4823]">MISSION</span>
                </span>

                <span className="block">STATEMENTS</span>
              </h2>
            </div>

            {/* Sticky Orange Divider (Mobile / Tablet) */}
            <div className="mt-4 w-full border-t-2 border-[#ED4823] lg:hidden" />
          </div>

          {/* =================================
              RIGHT SIDE
          ================================== */}
          <div
            className="
              flex
              w-full
              pt-0

              lg:border-l-[3px]
              lg:border-[#ED4823]
              lg:pl-[34px]
              lg:pt-0
            "
          >
            <div
              className="
                flex
                w-full
                flex-col
                gap-[30px]
                sm:gap-[42px]
                lg:gap-[80px]
              "
            >
              {statements.map((statement, index) => (
                <Statement
                  key={statement.title}
                  title={statement.title}
                  text={statement.text}
                  isLast={index === statements.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
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
          text-[#5A5853]
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