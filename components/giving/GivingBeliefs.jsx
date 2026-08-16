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
          gap-10
          px-4
          py-12
          sm:gap-12
          sm:px-6
          sm:py-14
          md:px-8
          md:py-16
          lg:grid-cols-2
          lg:gap-[60px]
          lg:px-[32px]
          lg:py-[80px]
        "
      >
        {/* =========================================
            LEFT — ICON + HEADING
        ========================================== */}

        <div
          className="
            flex
            items-start
            gap-3
            sm:gap-[12px]
            lg:items-center
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
                h-[64px]
                w-[54px]
                object-contain
                sm:h-[76px]
                sm:w-[64px]
                md:h-[84px]
                md:w-[70px]
                lg:h-[96px]
                lg:w-[80px]
              "
            />
          </div>

          {/* HEADING */}

          <h2
            className="
              heading-font
              max-w-[420px]
              uppercase
              font-bold
              leading-[0.88]
              tracking-[-0.055em]
              text-[#4A4A4A]
            "
            style={{
              fontSize: "clamp(3.5rem, 8vw, 80px)",
            }}
          >
            WHAT WE
            <br />
            BELIEVE
            <br />
            GIVING IS.
          </h2>
        </div>

        {/* =========================================
            RIGHT — CONTENT
        ========================================== */}

        <div className="w-full">
          {/* MAIN HEADING */}

          <h3
            className="
              heading-font
              uppercase
              font-bold
              tracking-[-0.025em]
              text-[#4A4A4A]
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
              mt-[12px]
              max-w-[650px]
              text-[#5A5853]
            "
            style={{
              fontSize: "16px",
              lineHeight: "20px",
            }}
          >
            Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa
            Condimentum Quam, A Eleifend Dolor Elit Quis Orci.
          </p>

          {/* =========================================
              SECOND HEADING
          ========================================== */}

          <div className="mt-[28px]">
            <p
              className="
                heading-font
                uppercase
                font-medium
                text-[#77736D]
              "
              style={{
                fontSize: "16px",
                lineHeight: "20px",
              }}
            >
              LOREM IPSUM
            </p>

            {/* =========================================
                BODY CONTENT
            ========================================== */}

            <div className="mt-[6px] space-y-[12px]">
              <p
                className="
                  body-font
                  max-w-[650px]
                  text-[#5A5853]
                "
                style={{
                  fontSize: "16px",
                  lineHeight: "20px",
                }}
              >
                Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus
                Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.
              </p>

              <p
                className="
                  body-font
                  max-w-[650px]
                  text-[#5A5853]
                "
                style={{
                  fontSize: "16px",
                  lineHeight: "20px",
                }}
              >
                Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus
                Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.
              </p>

              <p
                className="
                  body-font
                  max-w-[650px]
                  text-[#5A5853]
                "
                style={{
                  fontSize: "16px",
                  lineHeight: "20px"
                }}
              >
                Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus
                Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.
              </p>

              <p
                className="
                  body-font
                  max-w-[650px]
                  text-[#5A5853]
                "
                style={{
                  fontSize: "16px",
                  lineHeight: "20px",
                }}
              >
                Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus
                Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.
              </p>

              <p
                className="
                  body-font
                  max-w-[650px]
                  text-[#5A5853]
                "
                style={{
                  fontSize: "16px",
                  lineHeight: "20px",
                }}
              >
                Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus
                Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.
              </p>

              <p
                className="
                  body-font
                  max-w-[650px]
                  text-[#5A5853]
                "
                style={{
                  fontSize: "16px",
                  lineHeight: "20px",
                }}
              >
                Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus
                Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}