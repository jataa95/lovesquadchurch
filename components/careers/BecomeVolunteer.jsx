"use client";

import Image from "next/image";
import SecondaryButton from "@/components/ui/buttons/SecondaryButton";

export default function BecomeVolunteer() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F9E9D3] py-10 text-[#575656] sm:py-14 md:py-16 lg:py-20">
      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-10 lg:px-12">
        <div
          className="
            grid
            grid-cols-1
            gap-4
            sm:gap-12
            lg:grid-cols-2
            lg:items-start
            lg:gap-12
            xl:gap-20
          "
        >
          {/* =========================================
              LEFT COLUMN: IMAGE
          ========================================== */}
          <div className="w-full">
            <div
              className="
                relative
                aspect-square
                w-full
                overflow-hidden
                bg-[#171515]
              "
            >
              {/* IMAGE */}

              {/* Uncomment when your image is ready */}
              {/*
              <Image
                src="/images/careers/volunteer.jpg"
                alt="Become a Volunteer"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw,(max-width: 1024px) 90vw,50vw"
              />
              */}

              {/* Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center text-white/20">
                <svg
                  className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* =========================================
              RIGHT COLUMN: CONTENT
          ========================================== */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-3
              sm:gap-7
              lg:pt-1
              xl:pt-2
            "
          >
            {/* MAIN HEADING */}
            <h2
              className="
                heading-font
                uppercase
                font-extrabold
                leading-[0.9]
                tracking-[-0.04em]
                text-[#575656]
                text-center
              "
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              BECOME A VOLUNTEER!
            </h2>

            {/* =========================================
                INTRO LIST
            ========================================== */}
            <div className="space-y-3 sm:space-y-6">
              <VolunteerItem />
              <VolunteerItem />
              <VolunteerItem />
            </div>

            {/* APPLY BUTTON */}
            <div className="pt-0.5 sm:pt-1 flex justify-center">
              <SecondaryButton href="#volunteer-apply">APPLY</SecondaryButton>
            </div>

            {/* STANDALONE PARAGRAPH */}
            <p
              className="
                body-font
                pt-1
                text-[#575656]
                text-center
                text-[15px]
              "
              style={{
                lineHeight: "1.55",
              }}
            >
              Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa
              Condimentum Quam, A Eleifend Dolor Elit Quis Orci.
            </p>

            {/* DIVIDER */}
            <div className="my-1 border-t border-[#575656]/20 sm:my-2" />

            {/* =========================================
                LONG LIST
            ========================================== */}
            <div className="space-y-3 sm:space-y-5 flex flex-col items-center">
              <span
                className="
                  font-mono
                  text-[13px]
                  font-bold
                  uppercase
                  tracking-[0.08em]
                  text-[#575656]
                  sm:text-[14px]
                  md:text-[16px]
                  text-center
                "
              >
                LOREM IPSUM
              </span>

              <div
                className="
                  body-font
                  space-y-3
                  text-[#575656]
                  sm:space-y-4
                  text-center
                  text-[15px]
                "
                style={{
                  lineHeight: "1.55",
                }}
              >
                <VolunteerParagraph />
                <VolunteerParagraph />
                <VolunteerParagraph />
                <VolunteerParagraph />
                <VolunteerParagraph />
                <VolunteerParagraph />
                <VolunteerParagraph />
                <VolunteerParagraph />
                <VolunteerParagraph />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================
   REUSABLE VOLUNTEER ITEM
========================================= */

function VolunteerItem() {
  return (
    <div className="text-center">
      <span
        className="
          font-mono
          text-[13px]
          font-bold
          uppercase
          tracking-[0.08em]
          text-[#575656]
          sm:text-[14px]
          md:text-[16px]
          block
        "
      >
        LOREM IPSUM
      </span>

      <p
        className="
          body-font
          mt-1
          text-[#575656]
          text-[15px]
        "
        style={{
          lineHeight: "1.55",
        }}
      >
        Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa
        Condimentum Quam, A Eleifend Dolor Elit Quis Orci.
      </p>
    </div>
  );
}

/* =========================================
   REUSABLE LONG-LIST PARAGRAPH
========================================= */

function VolunteerParagraph() {
  return (
    <p className="text-[15px]">
      Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa
      Condimentum Quam, A Eleifend Dolor Elit Quis Orci.
    </p>
  );
}