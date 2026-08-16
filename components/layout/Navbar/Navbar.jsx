"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Menu from "lucide-react/dist/esm/icons/menu";
import MenuOverlay from "./MenuOverlay";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* FIXED NAVBAR HEADER */}
      <header className="fixed left-0 top-0 z-[9999] w-full pointer-events-none bg-transparent">
        <div className="relative z-10 flex items-center justify-between px-4 pt-4 sm:px-2 sm:py-2 lg:px-8 lg:py-8 pointer-events-auto">
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

          {/* MENU BUTTON */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            className="flex items-center justify-center p-1 text-[#F04A23] transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            <Menu
              size={30}
              strokeWidth={2}
              className="text-[#F04A23] sm:h-7 sm:w-7 lg:h-8 lg:w-8"
            />
          </button>
        </div>
      </header>

      {/* MENU OVERLAY */}
      {isMenuOpen && <MenuOverlay onClose={() => setIsMenuOpen(false)} />}
    </>
  );
}
