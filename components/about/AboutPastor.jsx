"use client";

import Image from "next/image";
import { PrimaryButton } from "@/components/ui/buttons";

export default function AboutPastor() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#0B0B0B]
        px-[8px]
        text-[#F4EBDC]
      "
    >
      {/* Background texture */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-40
        "
        style={{
          backgroundImage: `
            radial-gradient(
              circle at 20% 20%,
              rgba(255,255,255,0.045) 0 1px,
              transparent 1px
            ),
            radial-gradient(
              circle at 80% 70%,
              rgba(255,255,255,0.035) 0 1px,
              transparent 1px
            ),
            radial-gradient(
              circle at 40% 80%,
              rgba(255,255,255,0.025) 0 1px,
              transparent 1px
            )
          `,
          backgroundSize: "5px 5px, 7px 7px, 11px 11px",
        }}
      />

      {/* INNER WRAPPER */}
      <div
        className="
          relative
          z-10
          grid
          w-full
          grid-cols-1
          gap-[40px]
          px-[16px]
          py-[48px]

          sm:px-[24px]
          sm:py-[56px]

          md:grid-cols-2
          md:gap-[32px]
          md:px-[32px]
          md:py-[28px]

          lg:gap-[36px]
          lg:px-[40px]
        "
      >
        {/* ================================= */}
        {/* LEFT SIDE                         */}
        {/* ================================= */}

        <div
          className="
            flex
            flex-col
            justify-start
            pt-0

            md:pt-[4px]
          "
        >
          {/* HEADING */}
          <h2
            className="
              heading-font
              uppercase
              font-bold
              leading-[0.82]
              tracking-[-0.05em]
              text-[52px]

              sm:text-[62px]

              md:text-[64px]

              lg:text-[72px]
            "
          >
            <span className="block text-[#F4EBDC]">
              OUR
            </span>

            <span className="block text-[#F4EBDC]">
              LEAD{" "}
              <span className="text-[#ED4823]">
                PASTOR
              </span>
            </span>
          </h2>

          {/* DIVIDER */}
          <div
            className="
              mt-[18px]
              h-[2px]
              w-full
              max-w-[600px]
              bg-[#77736D]
            "
          />

          {/* DESCRIPTION CARD */}
          <div
            className="
              mt-[24px]
              w-full
              max-w-[600px]
              border
              border-[#3A3A3A]
              px-[14px]
              py-[16px]

              sm:px-[18px]
              sm:py-[18px]
            "
          >
            <p
              className="
                font-normal
                leading-[1.5]
                text-[#F4EBDC]
                text-[12px]

                sm:text-[13px]
              "
            >
              Lorem Ipsum Adipiscing Elit. Proin Tempor
              Ligula Euismod Nibh Facilisis Molestie Non
              Vitae Dolor. Cras Auctor Venenatis Sem,
              Ultricies Rutrum Est Ultricies Vel. Proin Sit
              Amet Neque Nec Risus Tincidunt Ultricies In
              Quis Lorem.
            </p>

            <p
              className="
                mt-[10px]
                font-normal
                leading-[1.5]
                text-[#F4EBDC]
                text-[12px]

                sm:text-[13px]
              "
            >
              Lorem Ipsum Adipiscing Elit. Proin Tempor
              Ligula Euismod Nibh Facilisis Molestie Non
              Vitae Dolor. Cras Auctor Venenatis Sem,
              Ultricies Rutrum Est Ultricies Vel. Proin Sit
              Amet Neque Nec Risus Tincidunt Ultricies In
              Quis Lorem.
            </p>

            <p
              className="
                mt-[10px]
                font-normal
                leading-[1.5]
                text-[#F4EBDC]
                text-[12px]

                sm:text-[13px]
              "
            >
              Cras Auctor Venenatis Sem, Ultricies Rutrum
              Est Ultricies Vel. Proin Sit Amet Neque Nec
              Risus Tincidunt Ultricies In Quis Lorem.
            </p>

            {/* PRIMARY BUTTON */}
            <div className="mt-[16px]">
              <PrimaryButton href="/pastorkay">
                MORE INFO
              </PrimaryButton>
            </div>
          </div>
        </div>

        {/* ================================= */}
        {/* RIGHT SIDE                        */}
        {/* ================================= */}

        <div
          className="
            flex
            w-full
            items-start
            justify-center

            md:justify-end
          "
        >
          <div
            className="
              relative
              h-[400px]
              w-full
              max-w-[500px]
              overflow-hidden
              bg-[#171515]

              sm:h-[480px]

              md:h-[500px]

              lg:h-[580px]
            "
          >
            <Image
              src="/images/about/pastor.jpg"
              alt="LoveSquad Lead Pastor"
              fill
              className="
                object-cover
                transition-transform
                duration-500
                hover:scale-105
              "
              sizes="(max-width: 767px) 100vw,(max-width: 1024px) 50vw,500px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}