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
          items-center
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
            LEFT — GIVING DETAILS HEADING
        ========================================== */}

        <div
          className="
            flex
            items-start
            gap-3
            sm:gap-[14px]
          "
        >
          {/* GIVING DETAILS ICON */}

          <div
            className="
              shrink-0
              pt-[6px]
              sm:pt-[8px]
              lg:pt-[10px]
            "
          >
            <Image
              src="/images/giving/giving.svg"
              alt=""
              width={76}
              height={56}
              className="
                h-[60px]
                w-[72px]
                object-contain
                sm:h-[70px]
                sm:w-[84px]
                lg:h-[80px]
                lg:w-[96px]
              "
            />
          </div>

          {/* HEADING */}

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
              fontSize: "clamp(3.5rem, 8vw, 80px)",
            }}
          >
            GIVING
            <br />
            DETAILS
          </h2>
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