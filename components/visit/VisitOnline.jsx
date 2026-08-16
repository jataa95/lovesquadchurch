"use client";

import Image from "next/image";
import { SecondaryButton } from "@/components/ui/buttons";

export default function VisitOnline() {
  return (
    <section id="online" className="w-full bg-[#F9E9D3]">
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1440px]
          grid-cols-1
          gap-10
          px-5
          pb-12
          pt-8

          sm:px-6
          sm:pb-14

          md:px-8
          md:pb-16

          lg:grid-cols-2
          lg:gap-[60px]
          lg:px-12
          lg:pb-[80px]
          lg:pt-[20px]

          xl:px-[32px]
        "
      >
        {/* =========================================
            LEFT SIDE — ONLINE IMAGE
        ========================================== */}

        <div
          className="
            relative
            h-[220px]
            w-full
            overflow-hidden
            bg-[#171515]

            sm:h-[260px]

            md:h-[300px]

            lg:h-[325px]
          "
        >
          <Image
            src="/images/visit/visit-online.jpg"
            alt="LoveSquad Church online"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw,(max-width: 1024px) 50vw,50vw"
          />
        </div>

        {/* =========================================
            RIGHT SIDE — ONLINE DETAILS
        ========================================== */}

        <div className="w-full">
          {/* =========================================
              ONLINE HEADING
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
              src="/images/visit/VisitOnlineButton.svg"
              alt=""
              width={56}
              height={56}
              className="
                h-[36px]
                w-[36px]
                shrink-0
                object-contain

                sm:h-[42px]
                sm:w-[42px]

                md:h-[48px]
                md:w-[48px]

                lg:h-[56px]
                lg:w-[56px]
              "
            />

            <h2
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
              ONLINE
            </h2>
          </div>

          {/* =========================================
              GENERAL PRAYERS
          ========================================== */}

          <div
            className="
              mt-8
              border-b
              border-[#A9A49D]
              py-3

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
              GENERAL PRAYERS
            </p>

            <div
              className="
                mt-2
                grid
                grid-cols-1
                gap-2

                sm:grid-cols-3
                sm:items-center
                sm:gap-0
              "
            >
              <div
                className="
                  heading-font
                  uppercase
                  font-bold
                  leading-none
                  text-[#4A4A4A]
                "
                style={{
                  fontSize: "clamp(20px, 2.5vw, 32px)",
                }}
              >
                TUESDAYS
              </div>

              <div
                className="
                  heading-font
                  uppercase
                  font-bold
                  leading-none
                  text-[#4A4A4A]

                  sm:text-center
                "
                style={{
                  fontSize: "clamp(20px, 2.5vw, 32px)",
                }}
              >
                5AM
              </div>

              <div
                className="
                  heading-font
                  uppercase
                  font-bold
                  leading-none
                  text-[#4A4A4A]

                  sm:text-right
                "
                style={{
                  fontSize: "clamp(20px, 2.5vw, 32px)",
                }}
              >
                TELEGRAM
              </div>
            </div>
          </div>

          {/* =========================================
              LOVESPOT
          ========================================== */}

          <div
            className="
              mt-8
              border-b
              border-[#A9A49D]
              py-3

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
              LOVESPOT
            </p>

            <div
              className="
                mt-2
                grid
                grid-cols-3
                gap-2
              "
            >
              {/* LOCATIONS */}

              <div
                className="
                  heading-font
                  uppercase
                  font-bold
                  leading-[1.1]
                  text-[#4A4A4A]
                "
                style={{
                  fontSize: "clamp(18px, 2.5vw, 32px)",
                }}
              >
                <div>KETU</div>
                <div>IKEJA</div>
                <div>SOMOLU</div>
              </div>

              {/* DAYS */}

              <div
                className="
                  heading-font
                  text-center
                  uppercase
                  font-bold
                  leading-[1.1]
                  text-[#4A4A4A]
                "
                style={{
                  fontSize: "clamp(18px, 2.5vw, 32px)",
                }}
              >
                <div>TUESDAYS</div>
                <div>DAY</div>
                <div>DAY</div>
              </div>

              {/* TIMES */}

              <div
                className="
                  heading-font
                  text-right
                  uppercase
                  font-bold
                  leading-[1.1]
                  text-[#4A4A4A]
                "
                style={{
                  fontSize: "clamp(18px, 2.5vw, 32px)",
                }}
              >
                <div>7:30PM</div>
                <div>5:30PM</div>
                <div>5:30PM</div>
              </div>
            </div>
          </div>

          {/* =========================================
              IMPORTANT DETAILS
          ========================================== */}

          <div
            className="
              mt-8
              border-b
              border-[#A9A49D]
              py-3

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
                fontSize: "clamp(15px, 1.5vw, 16px)",
                lineHeight: "1.35",
              }}
            >
              Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa
              Condimentum Quam, A Eleifend Dolor Elit Quis Orci.
            </p>
          </div>

          {/* =========================================
              JOIN LOVESPOT BUTTON
          ========================================== */}

          <div className="mt-4">
            <SecondaryButton href="#lovespot">
              JOIN A LOVESPOT
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}