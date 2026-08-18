"use client";

import Image from "next/image";

export default function GivingBeliefs() {
  return (
    <section className="w-full">
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1440px]
          grid-cols-1
          gap-4
          px-4
          py-8
          sm:gap-12
          sm:px-6
          sm:py-14
          md:px-8
          md:py-16
          lg:grid-cols-2
          lg:gap-[30px]
          lg:px-[32px]
          lg:py-[40px]
          relative
        "
      >
        {/* =========================================
            LEFT — ICON + HEADING (Sticky)
        ========================================== */}

        <div className="lg:relative">
          <div
            className="
              flex
              flex-row
              items-center
              text-left
              justify-center
              gap-2
              sticky
              top-16
              sm:gap-[8px]
              lg:flex-row
              lg:items-center
              lg:text-left
              lg:gap-2
              lg:sticky
              lg:top-27
            "
          >
            {/* BELIEF ICON */}

            <div
              className="
                shrink-0
                pt-[4px]
              "
            >
              <Image
                src="/images/giving/belief.svg"
                alt=""
                width={96}
                height={80}
                className="
                  h-[40px]
                  w-[36px]
                  object-contain
                  sm:h-[76px]
                  sm:w-[64px]
                  md:h-[84px]
                  md:w-[70px]
                  lg:h-[66px]
                  lg:w-[60px]
                "
              />
            </div>

            {/* HEADING */}

            <h2
              className="
                heading-font
                max-w-[1000px]
                uppercase
                font-bold
                leading-[0.88]
                tracking-[-0.055em]
                text-[#4A4A4A]
                text-[clamp(2.25rem,7.5vw,3rem)]
                sm:text-[clamp(3rem,6vw,4rem)]
                lg:text-[clamp(3.5rem,4.5vw,56px)]
              "
            >
              WHAT WE BELIEVE
              <br />
              GIVING IS.
            </h2>
          </div>
        </div>

        {/* =========================================
            RIGHT — CONTENT
        ========================================== */}

        <div className="w-full flex flex-col items-center text-center lg:items-start lg:text-left">
          {/* MAIN HEADING */}

          <h3
            className="
              heading-font
              uppercase
              font-bold
              tracking-[-0.025em]
              text-[#4A4A4A]/70
            "
            style={{
              fontSize: "clamp(1.75rem, 3vw, 32px)",
              lineHeight: "1",
            }}
          >
            LOREM IPSUM
          </h3>

          {/* DIVIDER */}

          <div className="mt-[8px] h-[1px] w-full bg-[#A9A49D]" />

          {/* INTRO */}

          <p
            className="
              body-font
              mt-[8px]
              max-w-[650px]
              text-[#5A5853]
            "
            style={{
              fontSize: "14px",
              lineHeight: "20px",
            }}
          >
            Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa
            Condimentum Quam, A Eleifend Dolor Elit Quis Orci.
          </p>

          {/* =========================================
              SECOND HEADING
          ========================================== */}

          <div className="mt-[8px] w-full flex flex-col items-center lg:items-start">
            <p
              className="
                heading-font
                uppercase
                font-medium
                text-[#77736D]
              "
              style={{
                fontSize: "14px",
                lineHeight: "20px",
              }}
            >
              LOREM IPSUM
            </p>

            {/* =========================================
                BODY CONTENT
            ========================================== */}

            <div className="mt-[6px] space-y-[12px] w-full flex flex-col items-center lg:items-start">
              <p
                className="
                  body-font
                  max-w-[650px]
                  text-[#5A5853]
                "
                style={{
                  fontSize: "14px",
                  lineHeight: "20px",
                }}
              >
                Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa
                Condimentum Quam, A Eleifend Dolor Elit Quis Orci.
              </p>

              <p
                className="
                  body-font
                  max-w-[650px]
                  text-[#5A5853]
                "
                style={{
                  fontSize: "14px",
                  lineHeight: "20px",
                }}
              >
                Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa
                Condimentum Quam, A Eleifend Dolor Elit Quis Orci.
              </p>

              <p
                className="
                  body-font
                  max-w-[650px]
                  text-[#5A5853]
                "
                style={{
                  fontSize: "14px",
                  lineHeight: "20px",
                }}
              >
                Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa
                Condimentum Quam, A Eleifend Dolor Elit Quis Orci.
              </p>

              <p
                className="
                  body-font
                  max-w-[650px]
                  text-[#5A5853]
                "
                style={{
                  fontSize: "14px",
                  lineHeight: "20px",
                }}
              >
                Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa
                Condimentum Quam, A Eleifend Dolor Elit Quis Orci.
              </p>

              <p
                className="
                  body-font
                  max-w-[650px]
                  text-[#5A5853]
                "
                style={{
                  fontSize: "14px",
                  lineHeight: "20px",
                }}
              >
                Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa
                Condimentum Quam, A Eleifend Dolor Elit Quis Orci.
              </p>

              <p
                className="
                  body-font
                  max-w-[650px]
                  text-[#5A5853]
                "
                style={{
                  fontSize: "14px",
                  lineHeight: "20px",
                }}
              >
                Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa
                Condimentum Quam, A Eleifend Dolor Elit Quis Orci.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}