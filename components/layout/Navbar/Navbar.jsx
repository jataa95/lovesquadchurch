"use client";

import { useEffect, useState } from "react";
import Image, { getImageProps } from "next/image";
import { footer } from "@/data/footer";
import Link from "next/link";
import MenuOverlay from "./MenuOverlay";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Warm the cache with the menu's background photo once the page is idle,
  // so the menu opens without waiting for it.
  useEffect(() => {
    const preload = () => {
      const { props } = getImageProps({
        src: footer.photo,
        alt: "",
        fill: true,
        sizes: "100vw",
      });
      const img = new window.Image();
      img.sizes = props.sizes;
      img.srcset = props.srcSet;
      img.src = props.src;
    };
    const idle = window.requestIdleCallback ?? ((cb) => setTimeout(cb, 1500));
    const id = idle(preload);
    return () => (window.cancelIdleCallback ?? clearTimeout)(id);
  }, []);

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

        <div className="relative z-10 flex items-center justify-between px-4 pt-4 pb-3 lg:px-7 lg:pt-7 lg:pb-5 pointer-events-auto">
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

          {/* MENU BUTTON: transparent with a hairline (1px, 30% orange) border; "MENU" and two lines in soft orange */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            className="group flex items-center gap-2.5 rounded-full border border-[#ED4823]/30 bg-transparent py-2.5 pl-5 pr-4 text-[#ED4823]/85 transition-colors duration-300 hover:border-[#ED4823]/60 hover:text-[#ED4823] active:scale-95 sm:gap-3 sm:py-3 sm:pl-7 sm:pr-5 lg:gap-3 lg:py-3.5 lg:pl-8 lg:pr-6"
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
