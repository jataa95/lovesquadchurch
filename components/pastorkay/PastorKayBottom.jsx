"use client";

import Image from "next/image";
import Link from "next/link";
import SecondaryButton from "@/components/ui/buttons/SecondaryButton";

export default function PastorKayBottom() {
  return (
    <div className="w-full">
      {/* =========================================
          1. 3-COLUMN IMAGE GALLERY
      ========================================== */}
      <section className="w-full bg-[#171515] py-8 sm:py-12 md:py-16">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-12">
          <div
            className="
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
              sm:gap-5
              md:grid-cols-3
              md:gap-6
            "
          >
            {/* Image 1 */}
            <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden bg-[#201D1D]">
              <div className="text-white/20">
                <svg
                  className="h-10 w-10 sm:h-12 sm:w-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>

              {/* <Image
                src="/images/leadership/kay-1.jpg"
                alt="Pastor Kay Gallery 1"
                fill
                sizes="
                  (max-width: 639px) 100vw,
                  (max-width: 767px) 50vw,
                  33vw
                "
                className="object-cover"
              /> */}
            </div>

            {/* Image 2 */}
            <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden bg-[#201D1D]">
              <div className="text-white/20">
                <svg
                  className="h-10 w-10 sm:h-12 sm:w-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 002-2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>

              {/* <Image
                src="/images/leadership/kay-2.jpg"
                alt="Pastor Kay Gallery 2"
                fill
                sizes="
                  (max-width: 639px) 100vw,
                  (max-width: 767px) 50vw,
                  33vw
                "
                className="object-cover"
              /> */}
            </div>

            {/* Image 3 */}
            <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden bg-[#201D1D]">
              <div className="text-white/20">
                <svg
                  className="h-10 w-10 sm:h-12 sm:w-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>

              {/* <Image
                src="/images/leadership/kay-3.jpg"
                alt="Pastor Kay Gallery 3"
                fill
                sizes="
                  (max-width: 639px) 100vw,
                  (max-width: 767px) 50vw,
                  33vw
                "
                className="object-cover"
              /> */}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. CALL TO ACTION STRIP
      ========================================== */}
      <section
        className="
          flex
          w-full
          items-center
          justify-center
          bg-[#F9E9D3]
          px-4
          py-8
          sm:py-10
        "
      >
        <SecondaryButton href="/contact">WRITE TO PASTOR KAY</SecondaryButton>
      </section>

      {/* =========================================
          3. MINIMAL DARK FOOTER
      ========================================== */}
      <footer className="w-full bg-[#171515] py-10 text-[#F9E9D3] sm:py-12">
        <div
          className="
            mx-auto
            flex
            max-w-[1440px]
            flex-col
            items-center
            justify-center
            gap-5
            px-4
            text-center
            sm:gap-6
            sm:px-6
            md:px-12
          "
        >
          {/* Logo Heading */}
          <h3
            className="
              heading-font
              text-xl
              font-bold
              uppercase
              tracking-wider
              text-[#A39E98]
              sm:text-2xl
            "
          >
            LOGO
          </h3>

          {/* Social Links */}
          <div
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-3
              gap-y-2
              font-mono
              text-[10px]
              font-bold
              uppercase
              tracking-wider
              text-[#F9E9D3]
              sm:gap-4
              sm:text-[12px]
            "
          >
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#ED4823]"
            >
              INSTAGRAM
            </a>

            <span className="text-[#A39E98]">|</span>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#ED4823]"
            >
              FACEBOOK
            </a>

            <span className="text-[#A39E98]">|</span>

            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#ED4823]"
            >
              TIKTOK
            </a>
          </div>

          {/* Copyright Line */}
          <p
            className="
              max-w-full
              font-mono
              text-[9px]
              uppercase
              tracking-wider
              text-[#A39E98]
              sm:text-[11px]
            "
          >
            COPYRIGHT 2025 © PASTOR KAY
          </p>
        </div>
      </footer>
    </div>
  );
}
