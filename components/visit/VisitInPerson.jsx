"use client";

import Image from "next/image";

export default function VisitInPerson() {
  return (
    <section id="in-person" className="w-full bg-[#F9E9D3]">
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1440px]
          grid-cols-1
          gap-12
          px-5
          pb-12
          pt-8

          sm:px-6
          sm:pb-14

          md:px-8
          md:pb-16
          md:pt-10

          lg:grid-cols-2
          lg:gap-[60px]
          lg:px-12
          lg:pb-[80px]
          lg:pt-[20px]

          xl:px-[32px]
        "
      >
        {/* =========================================
            LEFT SIDE
        ========================================== */}

        <div
          className="
            flex
            items-start
            gap-3

            sm:gap-4

            lg:pt-[4px]
          "
        >
          {/* ICON */}

          <div
            className="
              mt-3
              shrink-0

              sm:mt-5

              lg:mt-[35px]
            "
          >
            <Image
              src="/images/visit/greeting.svg"
              alt=""
              width={96}
              height={80}
              className="
                h-[48px]
                w-[48px]
                object-contain

                sm:h-[60px]
                sm:w-[60px]

                md:h-[70px]
                md:w-[70px]

                lg:h-[80px]
                lg:w-[80px]
              "
            />
          </div>

          {/* HEADING */}

          <h2
            className="
              heading-font
              uppercase
              font-bold
              leading-[0.82]
              tracking-[-0.045em]
              text-[#4A4A4A]
            "
            style={{
              fontSize: "clamp(52px, 7vw, 80px)",
            }}
          >
            WE AWAIT
            <br />
            YOUR
            <br />
            VISIT!
          </h2>
        </div>

        {/* =========================================
            RIGHT SIDE
        ========================================== */}

        <div className="w-full">
          {/* =========================================
              TITLE
          ========================================== */}

          <div
            className="
              flex
              items-center
              gap-2
              border-b
              border-[#A9A49D]
              pb-2

              sm:gap-[10px]
            "
          >
            <Image
              src="/images/visit/VisitInPersonButton.svg"
              alt=""
              width={60}
              height={60}
              className="
                h-[36px]
                w-[36px]
                object-contain
                grayscale
                brightness-75

                sm:h-[42px]
                sm:w-[42px]

                md:h-[48px]
                md:w-[48px]
              "
            />

            <h3
              className="
                heading-font
                uppercase
                font-bold
                tracking-[-0.025em]
                text-[#4A4A4A]
              "
              style={{
                fontSize: "clamp(36px, 5vw, 64px)",
                lineHeight: "1",
              }}
            >
              IN-PERSON
            </h3>
          </div>

          {/* =========================================
              MEETING TIME
          ========================================== */}

          <div
            className="
              mt-8
              border-b
              border-[#A9A49D]
              py-3

              sm:mt-9

              lg:mt-[40px]
            "
          >
            <p
              className="
                heading-font
                uppercase
                text-[#77736D]
              "
              style={{
                fontSize: "clamp(13px, 1.2vw, 16px)",
                lineHeight: "1.25",
                fontWeight: 500,
              }}
            >
              MEETING TIME
            </p>

            <div
              className="
                mt-2
                flex
                items-end
                justify-between
                gap-4
              "
            >
              <div
                className="
                  heading-font
                  uppercase
                  font-bold
                  leading-[1]
                  tracking-[-0.015em]
                  text-[#4A4A4A]
                "
                style={{
                  fontSize: "clamp(20px, 2.5vw, 32px)",
                }}
              >
                <div>SUNDAYS</div>
                <div>WEDNESDAYS</div>
              </div>

              <div
                className="
                  heading-font
                  text-right
                  font-bold
                  leading-[1]
                  tracking-[-0.015em]
                  text-[#4A4A4A]
                "
                style={{
                  fontSize: "clamp(20px, 2.5vw, 32px)",
                }}
              >
                <div>9AM</div>
                <div>5:30PM</div>
              </div>
            </div>
          </div>

          {/* =========================================
              LOCATION
          ========================================== */}

          <div
            className="
              mt-8
              mb-8
              border-b
              border-[#A9A49D]
              py-3

              lg:mt-[40px]
              lg:mb-[40px]
            "
          >
            <p
              className="
                heading-font
                uppercase
                text-[#77736D]
              "
              style={{
                fontSize: "clamp(13px, 1.2vw, 16px)",
                lineHeight: "1.25",
                fontWeight: 500,
              }}
            >
              LOCATION
            </p>

            <div
              className="
                mt-2
                flex
                flex-col
                items-start
                gap-3

                sm:flex-row
                sm:items-end
                sm:justify-between
                sm:gap-4
              "
            >
              <div
                className="
                  heading-font
                  uppercase
                  font-bold
                  leading-[1.05]
                  tracking-[-0.015em]
                  text-[#4A4A4A]
                "
                style={{
                  fontSize: "clamp(20px, 2.5vw, 32px)",
                }}
              >
                <div>53 RIKAZ PLAZA,</div>
                <div>ROAD, IKEJA LAGOS</div>
              </div>

              <button
                type="button"
                className="
                  heading-font
                  uppercase
                  text-[#4A4A4A]
                  transition-opacity
                  duration-200
                  hover:opacity-60
                "
                style={{
                  fontSize: "clamp(12px, 1.2vw, 16px)",
                  lineHeight: "1",
                }}
              >
                ( COPY )
              </button>
            </div>
          </div>

          {/* =========================================
              IMPORTANT DETAILS
          ========================================== */}

          <div
            className="
              mb-8
              border-b
              border-[#A9A49D]
              py-3

              lg:mb-[40px]
            "
          >
            <p
              className="
                heading-font
                uppercase
                text-[#77736D]
              "
              style={{
                fontSize: "clamp(13px, 1.2vw, 16px)",
                lineHeight: "1.25",
                fontWeight: 500,
              }}
            >
              IMPORTANT DETAILS
            </p>

            <p
              className="
                body-font
                mt-2
                max-w-[650px]
                text-[#5A5853]
              "
              style={{
                fontSize: "clamp(15px, 1.5vw, 20px)",
                lineHeight: "1.2",
              }}
            >
              Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa
              Condimentum Quam, A Eleifend Dolor Elit Quis Orci.
            </p>
          </div>

          {/* =========================================
              CHILDREN MINISTRY
          ========================================== */}

          <div
            className="
              mb-8
              py-3

              lg:mb-[40px]
            "
          >
            <p
              className="
                heading-font
                uppercase
                text-[#77736D]
              "
              style={{
                fontSize: "clamp(13px, 1.2vw, 16px)",
                lineHeight: "1.25",
                fontWeight: 500,
              }}
            >
              CHILDREN MINISTRY
            </p>

            <p
              className="
                body-font
                mt-2
                max-w-[650px]
                text-[#5A5853]
              "
              style={{
                fontSize: "clamp(15px, 1.5vw, 20px)",
                lineHeight: "1.2",
              }}
            >
              Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa
              Condimentum Quam, A Eleifend Dolor Elit Quis Orci.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}