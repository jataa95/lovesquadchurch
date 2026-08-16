"use client";

import Link from "next/link";
import { PrimaryButton } from "@/components/ui/buttons";

const aboutLinks = [
  {
    label: "OUR VALUES",
    href: "#values",
  },
  {
    label: "OUR STATEMENT OF FAITH",
    href: "#statement-of-faith",
  },
  {
    label: "OUR VISION",
    href: "#vision",
  },
];

export default function AboutHero() {
  return (
    <section
      className="
        relative
        min-h-[calc(100vh-70px)]
        overflow-hidden
        bg-[#0B0B0B]
        text-[#F4EBDC]
      "
    >
      {/* =========================================
          BACKGROUND TEXTURE
      ========================================== */}
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

      {/* =========================================
          HERO CONTENT
      ========================================== */}
      <div
        className="
          relative
          z-10
          flex
          min-h-[calc(100vh-70px)]
          flex-col
          items-center
          px-5
          pt-[50px]
          pb-[60px]
          text-center

          sm:px-8
          sm:pt-[65px]
          sm:pb-[70px]

          md:px-10
          md:pt-[75px]

          lg:pt-[90px]
        "
      >
        {/* =========================================
            WELCOME
        ========================================== */}
        <h1
          className="
            heading-font
            uppercase
            font-bold
            leading-none
            tracking-[-0.06em]
            text-[#F4EBDC]

            text-[72px]

            sm:text-[100px]

            md:text-[135px]

            lg:text-[170px]

            xl:text-[200px]
          "
        >
          WELCOME
        </h1>

        {/* =========================================
            ABOUT LINKS
        ========================================== */}
        <nav
          className="
            mt-[40px]
            flex
            max-w-[900px]
            flex-wrap
            items-center
            justify-center
            gap-x-[24px]
            gap-y-[16px]

            sm:mt-[50px]
            sm:gap-x-[40px]
            sm:gap-y-[20px]

            md:mt-[55px]
            md:gap-x-[60px]
            md:gap-y-[22px]

            lg:mt-[60px]
            lg:gap-x-[90px]
            lg:gap-y-[24px]
          "
        >
          {aboutLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="
                heading-font
                text-[18px]
                font-medium
                leading-[24px]
                uppercase
                tracking-[-0.02em]
                text-[#F4EBDC]
                transition-colors
                duration-300
                hover:text-[#ED4823]

                sm:text-[21px]
                sm:leading-[28px]

                md:text-[26px]
                md:leading-[34px]

                lg:text-[32px]
                lg:leading-[40px]
              "
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* =========================================
            DESCRIPTION
        ========================================== */}
        <p
          className="
            mt-[55px]
            max-w-[330px]
            text-center
            text-[16px]
            font-normal
            leading-[24px]
            text-[#F4EBDC]
            opacity-60

            sm:mt-[65px]
            sm:max-w-[500px]
            sm:text-[17px]
            sm:leading-[26px]

            md:mt-[70px]
            md:max-w-[620px]
            md:text-[18px]
            md:leading-[28px]

            lg:mt-[80px]
            lg:max-w-[700px]
            lg:text-[20px]
            lg:leading-[30px]
          "
        >
          Condimentum Ultricies, Risus Massa Condimentum Quam, A Eleifend
          Dolor Elit Quis Orci. Condimentum Ultricies, Risus Massa
          Condimentum Quam, A Eleifend Dolor Elit Quis Orci.
        </p>

        {/* =========================================
            PRIMARY BUTTON
        ========================================== */}
        <div
          className="
            mt-[36px]

            sm:mt-[42px]

            md:mt-[48px]

            lg:mt-[52px]
          "
        >
          <PrimaryButton href="/visit">
            PLAN YOUR VISIT
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}