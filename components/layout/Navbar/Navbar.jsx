"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuOverlay from "./MenuOverlay";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* FIXED NAVBAR HEADER */}
      <header className="fixed left-0 top-0 z-[9999] w-full pointer-events-none">
        {/* Very light dark-to-clear gradient with a soft blur behind the bar. The mask fades the blur
            out at the bottom so there is no hard edge over the page. */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -bottom-6 bg-gradient-to-b from-black/15 via-black/5 to-transparent backdrop-blur-sm [mask-image:linear-gradient(to_bottom,black_55%,transparent)]"
        />

        <div className="relative z-10 flex items-center justify-between px-2 pt-2 pb-2 sm:px-2 sm:py-2 lg:px-6 lg:py-6 pointer-events-auto">
          {/* LOGO */}
          <Link
            href="/"
            className="relative block h-[36px] w-[135px] sm:h-[42px] sm:w-[155px] lg:h-[46px] lg:w-[170px]"
          >
            <Image
              src="/images/branding/logo.svg"
              alt="LoveSquad Church"
              fill
              priority
              className="object-contain object-left"
              sizes="(max-width: 640px) 135px, (max-width: 1024px) 155px, 170px"
            />
          </Link>

          {/* MENU BUTTON: brand-orange pill with "MENU" and two lines */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            className="group flex items-center gap-4 rounded-full border border-white/25 bg-[#ED4823] py-2.5 pl-5 pr-4 text-[#F5EBDD] shadow-[0_8px_24px_rgba(237,72,35,0.30)] transition-all duration-300 hover:bg-[#D63D1A] hover:shadow-[0_10px_28px_rgba(237,72,35,0.40)] active:scale-95 sm:gap-5 sm:py-3 sm:pl-7 sm:pr-5 lg:gap-6 lg:py-3.5 lg:pl-8 lg:pr-6"
          >
            <span className="heading-font text-[12px] font-semibold uppercase leading-none tracking-[0.32em] sm:text-[13px] lg:text-[14px]">
              Menu
            </span>
            <span aria-hidden="true" className="flex w-7 flex-col items-end gap-[6px] lg:w-8">
              <span className="block h-[2px] w-full rounded-full bg-current" />
              <span className="block h-[2px] w-[65%] rounded-full bg-current transition-all duration-300 group-hover:w-full" />
            </span>
          </button>
        </div>
      </header>

      {/* MENU OVERLAY */}
      {isMenuOpen && <MenuOverlay onClose={() => setIsMenuOpen(false)} />}
    </>
  );
}
