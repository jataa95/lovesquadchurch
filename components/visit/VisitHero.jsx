"use client";

import Image from "next/image";
import VisitInPersonButton from "@/components/visit/VisitInPersonButton";
import VisitOnlineButton from "@/components/visit/VisitOnlineButton";

export default function VisitHero() {
  return (
    <section className="mt-[80px] bg-[#F9E9D3] w-full">
      {/* =========================================
          HERO CONTENT
      ========================================== */}

      <div
        id="visit"
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          px-5
          pt-6
          pb-8

          sm:px-6
          sm:pt-7
          sm:pb-10

          md:px-8
          md:pt-8

          lg:px-12

          xl:px-[32px]
        "
      >
        {/* =========================================
            TOP HERO CONTENT
        ========================================== */}

        <div
          className="
            grid
            grid-cols-1
            items-end
            gap-8

            lg:grid-cols-[minmax(0,1fr)_380px]
            lg:gap-[40px]
          "
        >
          {/* =========================================
              TITLE + DESCRIPTION
          ========================================== */}

          <div>
            {/* PLAN YOUR */}

            <div
              className="
                heading-font
                uppercase
                font-medium
                leading-none
                tracking-[-0.035em]
                text-[#8B8B8B]
              "
              style={{
                fontSize: "clamp(22px, 3vw, 32px)",
                lineHeight: "1.05",
              }}
            >
              PLAN YOUR
            </div>

            {/* VISIT */}

            <h1
              className="
                heading-font
                uppercase
                font-bold
                leading-[0.78]
                tracking-[-0.065em]
                text-[#4A4A4A]
              "
              style={{
                fontSize: "clamp(80px, 14vw, 200px)",
              }}
            >
              VISIT
            </h1>

            {/* DESCRIPTION */}

            <p
              className="
                body-font
                mt-4
                max-w-[520px]
                text-[#5A5853]

                md:mt-5
              "
              style={{
                fontSize: "16px",
                lineHeight: "1.25",
              }}
            >
              Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa
            </p>
          </div>

          {/* =========================================
              VISIT OPTIONS
          ========================================== */}

          <div className="w-full pb-0 lg:pb-[2px]">
            {/* DIVIDER */}

            <div className="mb-3 h-px w-full bg-[#F9E9D3]" />

            {/* HEADING */}

            <h2
              className="
                heading-font
                uppercase
                font-bold
                leading-[1]
                tracking-[-0.025em]
                text-[#555555]
              "
              style={{
                fontSize: "clamp(22px, 2.5vw, 28px)",
              }}
            >
              HOW DO YOU PLAN
              <br />
              TO VISIT US?
            </h2>

            {/* =====================================
                VISIT BUTTONS
            ====================================== */}

            <div
              className="
                mt-4
                flex
                flex-wrap
                items-center
                gap-3
              "
            >
              <VisitInPersonButton href="#in-person">
                IN PERSON
              </VisitInPersonButton>

              <VisitOnlineButton href="#online">ONLINE</VisitOnlineButton>
            </div>
          </div>
        </div>

        {/* =========================================
            HERO IMAGE
        ========================================== */}

        <div
          className="
            relative
            mt-7
            h-[180px]
            w-full
            overflow-hidden
            bg-[#171515]

            sm:h-[210px]

            md:h-[230px]

            lg:h-[258px]
          "
        >
          <Image
            src="/images/visit/visit-hero.jpg"
            alt="Plan your visit to LoveSquad Church"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}
