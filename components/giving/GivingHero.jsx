"use client";

import Image from "next/image";
import GiveAnOfferingButton from "@/components/giving/GiveAnOfferingButton";

export default function GivingHero() {
  return (
    <section id="giving-hero" className="mt-[60px] w-full">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          px-4
          pt-4
          pb-4
          sm:px-6
          sm:pt-7
          sm:pb-10
          md:px-8
          md:pt-8
          md:pb-10
          lg:px-[32px]
          lg:pt-[60px]
          lg:pb-[40px]
        "
      >
        {/* =========================================
            TOP HERO CONTENT
        ========================================== */}

        <div
          className="
            grid
            grid-cols-1
            items-center
            text-center
            gap-2
            sm:gap-10
            lg:grid-cols-2
            lg:items-end
            lg:text-left
            lg:gap-[40px]
          "
        >
          {/* =========================================
              LEFT — TITLE
          ========================================== */}

          <div className="w-full">
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
                fontSize: "clamp(5rem, 16vw, 200px)",
              }}
            >
              GIVING
            </h1>
          </div>

          {/* =========================================
              RIGHT — DESCRIPTION + BUTTON
          ========================================== */}

          <div
            className="
              flex
              flex-col
              items-center
              text-center
              gap-4
              pb-0
              sm:gap-5
              lg:flex-row
              lg:items-start
              lg:text-left
              lg:gap-[20px]
              lg:pb-[8px]
            "
          >
            {/* VERTICAL DIVIDER (Hidden on mobile, shown on lg+) */}

            <div
              className="
                hidden
                lg:block
                h-[80px]
                w-[1px]
                shrink-0
                bg-[#A9A49D]
              "
            />

            {/* TEXT + BUTTON */}

            <div
              className="
                flex
                flex-col
                items-center
                text-center
                lg:items-start
                lg:text-left
              "
            >
              <p
                className="
                  body-font
                  max-w-[300px]
                  text-[#5A5853]
                "
                style={{
                  fontSize: "16px",
                  lineHeight: "16px",
                }}
              >
                Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa
              </p>

              {/* GIVE AN OFFERING */}

              <div className="mt-[8px]">
                <GiveAnOfferingButton href="#offering">
                  GIVE AN OFFERING
                </GiveAnOfferingButton>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            HERO IMAGE
        ========================================== */}

        <div
          className="
            relative
            mt-5
            h-[220px]
            w-full
            overflow-hidden
            bg-[#171515]
            sm:h-[250px]
            md:h-[280px]
            lg:mt-[20px]
            lg:h-[300px]
          "
        >
          <Image
            src="/images/giving/giving-hero.jpg"
            alt="Giving at LoveSquad Church"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}