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
          gap-8
          px-4
          py-6
          
          sm:px-6
          sm:py-8

          lg:grid-cols-2
          lg:gap-[60px]
          lg:px-12
          lg:py-[80px]
          
          xl:px-[32px]
          relative
          items-start
        "
      >
        {/* =========================================
            LEFT SIDE (STICKY HEADING BLOCK)
        ========================================== */}

        <div
          className="
            flex
            items-start
            gap-2
            
            sm:gap-4

            sticky
            top-12
            lg:top-24
            self-start
            h-fit
            z-10
            bg-[#F9E9D3]
            py-2
          "
        >
          {/* ICON */}

          <div
            className="
              mt-1.5
              shrink-0

              sm:mt-2

              lg:mt-[10px]
            "
          >
            <Image
              src="/images/visit/greeting.svg"
              alt=""
              width={96}
              height={80}
              className="
                h-[40px]
                w-[46px]
                object-contain

                sm:h-[48px]
                sm:w-[48px]

                lg:h-[64px]
                lg:w-[64px]
              "
            />
          </div>

          {/* HEADING */}

          <h2
            className="
              heading-font
              uppercase
              font-bold
              leading-[0.85]
              tracking-[-0.045em]
              text-[#4A4A4A]
            "
            style={{
              fontSize: "clamp(40px, 11vw, 80px)",
            }}
          >
            WE AWAIT
            <br />
            YOUR VISIT!
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
                h-[30px]
                w-[30px]
                object-contain
                grayscale
                brightness-75

                sm:h-[38px]
                sm:w-[38px]

                lg:h-[48px]
                lg:w-[48px]
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
                fontSize: "clamp(28px, 7vw, 64px)",
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
              mt-5
              border-b
              border-[#A9A49D]
              py-2.5

              sm:mt-6
              sm:py-3

              lg:mt-[32px]
            "
          >
            <p
              className="
                heading-font
                uppercase
                text-[#77736D]
              "
              style={{
                fontSize: "clamp(12px, 1.1vw, 16px)",
                lineHeight: "1.2",
                fontWeight: 500,
              }}
            >
              MEETING TIME
            </p>

            <div
              className="
                mt-1.5
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
                  leading-[1.05]
                  tracking-[-0.015em]
                  text-[#4A4A4A]
                "
                style={{
                  fontSize: "clamp(18px, 3.5vw, 32px)",
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
                  leading-[1.05]
                  tracking-[-0.015em]
                  text-[#4A4A4A]
                "
                style={{
                  fontSize: "clamp(18px, 3.5vw, 32px)",
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
              mt-5
              mb-5
              border-b
              border-[#A9A49D]
              py-2.5

              sm:mt-6
              sm:mb-6
              sm:py-3

              lg:mt-[32px]
              lg:mb-[32px]
            "
          >
            <p
              className="
                heading-font
                uppercase
                text-[#77736D]
              "
              style={{
                fontSize: "clamp(12px, 1.1vw, 16px)",
                lineHeight: "1.2",
                fontWeight: 500,
              }}
            >
              LOCATION
            </p>

            <div
              className="
                mt-1.5
                flex
                flex-row
                items-end
                justify-between
                gap-4

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
                  fontSize: "clamp(18px, 3.5vw, 32px)",
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
                  fontSize: "clamp(12px, 1.1vw, 16px)",
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
              mb-5
              border-b
              border-[#A9A49D]
              py-2.5

              sm:mb-6
              sm:py-3

              lg:mb-[32px]
            "
          >
            <p
              className="
                heading-font
                uppercase
                text-[#77736D]
              "
              style={{
                fontSize: "clamp(12px, 1.1vw, 16px)",
                lineHeight: "1.2",
                fontWeight: 500,
              }}
            >
              IMPORTANT DETAILS
            </p>

            <p
              className="
                body-font
                mt-1.5
                max-w-[650px]
                text-[#5A5853]
              "
              style={{
                fontSize: "clamp(14px, 1.8vw, 20px)",
                lineHeight: "1.3",
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
              py-2.5
              
              sm:py-3
            "
          >
            <p
              className="
                heading-font
                uppercase
                text-[#77736D]
              "
              style={{
                fontSize: "clamp(12px, 1.1vw, 16px)",
                lineHeight: "1.2",
                fontWeight: 500,
              }}
            >
              CHILDREN MINISTRY
            </p>

            <p
              className="
                body-font
                mt-1.5
                max-w-[650px]
                text-[#5A5853]
              "
              style={{
                fontSize: "clamp(14px, 1.8vw, 20px)",
                lineHeight: "1.3",
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