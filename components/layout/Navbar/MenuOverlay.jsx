"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const aboutLinks = [
  { label: "OUR MISSION", href: "/about#mission" },
  { label: "OUR VALUES", href: "/about#values" },
  { label: "OUR BELIEFS", href: "/about#beliefs" },
  { label: "OUR LEADERS", href: "/about#leaders" },
];

const connectLinks = [
  { label: "LOVESPOT", href: "/lovespot" },
  { label: "EVENTS", href: "/events" },
  { label: "CONTACT US", href: "/contact" },
  { label: "INSTAGRAM", href: "/instagram" },
  { label: "YOUTUBE", href: "/youtube" },
];

const menuItems = [
  {
    label: "ABOUT",
    href: "/about",
    subLinks: aboutLinks,
  },
  {
    label: "CONNECT",
    href: "/lovespot",
    subLinks: connectLinks,
  },
  {
    label: "MESSAGES",
    href: "/messages",
  },
  {
    label: "GIVE",
    href: "/giving",
  },
  {
    label: "PLAN YOUR VISIT",
    href: "/visit",
  },
];

export default function MenuOverlay({ onClose }) {
  const [bgError, setBgError] = useState(false);

  return (
    <div className="fixed inset-0 z-[99999] overflow-hidden bg-[#0B0B0B] text-[#F5EBDD] animate-in fade-in slide-in-from-bottom-6 duration-300">
      {/* =====================================================
          1. BACKGROUND IMAGE
      ====================================================== */}
      {!bgError && (
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src="/images/hero/heromenubg.jpg"
            alt=""
            fill
            priority
            quality={100}
            onError={() => setBgError(true)}
            className="object-cover object-center opacity-80"
          />
        </div>
      )}

      {/* =====================================================
          2. MOVING BACKGROUND SVG
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 z-1 flex items-center justify-center overflow-hidden opacity-20">
        <div className="relative h-[120vh] w-[120vw] animate-pulse">
          <Image
            src="/images/hero/lsbg.svg"
            alt=""
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>

      {/* =====================================================
          HEADER
      ====================================================== */}
      <header className="relative z-50 flex w-full items-center justify-between px-6 pt-6 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          onClick={onClose}
          className="relative block h-10 w-40 sm:h-12 sm:w-48"
        >
          <Image
            src="/images/branding/logo.svg"
            alt="LoveSquad Church"
            fill
            priority
            className="object-contain object-left"
          />
        </Link>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="flex h-16 w-16 items-center justify-center rounded-full bg-transparent text-[#F04423] transition-transform duration-200 hover:scale-105 sm:h-16 sm:w-16"
        >
          <span className="text-3xl font-light leading-none">×</span>
        </button>
      </header>

      {/* =====================================================
          MAIN NAVIGATION
      ====================================================== */}
      <nav className="relative z-40 flex flex-col items-center justify-center px-6 pt-6 sm:px-12">
        <div className="flex flex-col items-center gap-4 text-center sm:gap-6">
          {menuItems.map((item) => {
            const hasSubLinks = Boolean(
              item.subLinks && item.subLinks.length > 0,
            );

            return (
              <div
                key={item.label}
                className="group relative flex flex-col items-center"
              >
                {/* MAIN LINK */}
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="heading-font relative inline-block uppercase font-bold leading-[0.95] tracking-tight text-[#F5EBDD] transition-colors duration-200 group-hover:text-[#F04423]"
                  style={{
                    fontSize: "clamp(36px, 5vw, 72px)",
                  }}
                >
                  {item.label}

                  {/* Orange underline */}
                  <span className="absolute -bottom-1 left-0 h-1.5 w-full origin-center scale-x-0 bg-[#F04423] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </Link>

                {/* SUBMENU */}
                {hasSubLinks && (
                  <div className="pointer-events-none mt-0 flex max-h-0 flex-wrap items-center justify-center gap-3 overflow-hidden opacity-0 transition-all duration-300 ease-in-out group-hover:pointer-events-auto group-hover:mt-2 group-hover:max-h-32 group-hover:opacity-100 lg:gap-5">
                    {item.subLinks.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        onClick={onClose}
                        className="heading-font relative z-10 flex items-center text-xs font-semibold uppercase tracking-tight text-[#F5EBDD] transition-colors duration-200 hover:text-[#F04423] sm:text-sm lg:text-base"
                      >
                        <span className="mr-1 text-[#F04423]">(</span>
                        {sub.label}
                        <span className="ml-1 text-[#F04423]">)</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
