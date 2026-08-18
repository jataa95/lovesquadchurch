"use client";

import Image from "next/image";

export default function GivingDetails() {
  return (
    <section className="w-full">
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1440px]
          grid-cols-1
          items-start
          gap-4
          px-4
          py-2
          sm:gap-12
          sm:px-6
          sm:py-14
          md:px-8
          md:py-16
          lg:grid-cols-2
          lg:gap-[40px]
          lg:px-[32px]
          lg:py-[40px]
          relative
        "
      >
        {/* =========================================
            LEFT — GIVING DETAILS HEADING (Sticky)
        ========================================== */}

        <div className="lg:relative">
          <div
            className="
              flex
              items-center
              justify-center
              gap-2
              sm:gap-[14px]
              lg:sticky
              lg:top-24
            "
          >
            {/* GIVING DETAILS ICON (Reduced size) */}

            <div
              className="
                shrink-0
                pt-[4px]
                sm:pt-[6px]
                lg:pt-[8px]
              "
            >
              <Image
                src="/images/giving/giving.svg"
                alt=""
                width={76}
                height={56}
                className="
                  h-[40px]
                  w-[48px]
                  object-contain
                  sm:h-[56px]
                  sm:w-[68px]
                  lg:h-[64px]
                  lg:w-[76px]
                "
              />
            </div>

            {/* HEADING (Reduced size) */}

            <h2
              className="
                heading-font
                uppercase
                font-bold
                leading-[0.88]
                tracking-[-0.055em]
                text-[#4A4A4A]
              "
              style={{
                fontSize: "clamp(2.75rem, 6vw, 60px)",
              }}
            >
              GIVING DETAILS
            </h2>
          </div>
        </div>

        {/* =========================================
            RIGHT — IMAGE
        ========================================== */}

        <div
          className="
            relative
            h-[300px]
            w-full
            overflow-hidden
            bg-[#171515]
            sm:h-[340px]
            md:h-[380px]
            lg:h-[422px]
          "
        >
          <Image
            src="/images/giving/giving-hero.jpg"
            alt="Giving details"
            fill
            className="object-cover"
            sizes="(max-width: 1023px) 100vw,50vw"
          />
        </div>
      </div>
    </section>
  );
}