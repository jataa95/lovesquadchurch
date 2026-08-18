"use client";

import Image from "next/image";
import SecondaryButton from "@/components/ui/buttons/SecondaryButton"; // or direct path

export default function LoveSpotHero() {
  return (
    <section
      id="lovespot"
      className="
        relative
        min-h-[calc(100vh-70px)]
        w-full
        overflow-hidden
        bg-[#F9E9D3]
        px-[12px]
        pb-[24px]
        pt-[60px]
        sm:px-[18px]
        sm:pb-[32px]
        lg:pt-[100px]
      "
    >
      {/* ================================= */}
      {/* HERO CONTENT                      */}
      {/* ================================= */}

      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
        "
      >
        {/* ================================= */}
        {/* TITLE                             */}
        {/* ================================= */}

        <div className="mt-[20px] sm:mt-[24px]">
          {/* LOVESQUAD IN */}

          <div
            className="
              heading-font
              uppercase
              font-bold
              leading-none
              tracking-[-0.035em]
            "
            style={{
              fontSize: "clamp(24px, 3vw, 40px)",
              lineHeight: "1",
            }}
          >
            <span className="text-[#ED4823]">LOVESQUAD</span>{" "}
            <span className="text-[#4A4A4A]">IN</span>
          </div>

          {/* LOVESPOTS */}

          <h1
            className="
              heading-font
              uppercase
              font-bold
              leading-[0.82]
              tracking-[-0.055em]
              text-[#4A4A4A]
            "
            style={{
              fontSize: "clamp(4.5rem, 13.9vw, 200px)",
            }}
          >
            LOVESPOTS
          </h1>
        </div>

        {/* ================================= */}
        {/* LOWER HERO CONTENT                */}
        {/* ================================= */}

        <div
          className="
            mt-[18px]
            grid
            grid-cols-1
            gap-[18px]
            lg:grid-cols-[minmax(0,1fr)_320px]
            lg:items-end
          "
        >
          {/* ================================= */}
          {/* IMAGE / VIDEO                    */}
          {/* ================================= */}

          <div
            className="
              relative
              h-[280px]
              w-full
              overflow-hidden
              bg-[#171515]
              sm:h-[340px]
              md:h-[380px]
              lg:h-[420px]
            "
          >
            <Image
              src="/images/lovespot/lovespot-hero.jpg"
              alt="LoveSpot"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 639px) 100vw,(max-width: 1023px) 100vw,70vw"
            />
          </div>

          {/* ================================= */}
          {/* DESCRIPTION                      */}
          {/* ================================= */}

          <div
            className="
              flex
              flex-col
              justify-end
              pb-0
              lg:h-[420px]
            "
          >
            <h2
              className="
                heading-font
                uppercase
                font-bold
                leading-none
                tracking-[-0.02em]
                text-[#4A4A4A]
              "
              style={{
                fontSize: "clamp(20px, 2vw, 24px)",
              }}
            >
              LOREM IPSUM
            </h2>

            <p
              className="
                mt-[8px]
                max-w-[700px]
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

            <div className="mt-[8px]">
              <SecondaryButton href="#lovespots">
                JOIN A LOVESPOT
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
