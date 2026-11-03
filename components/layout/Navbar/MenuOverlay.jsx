"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

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
    label: "PASTOR KAY",
    href: "/pastorkay",
  },
  {
    label: "PLAN YOUR VISIT",
    href: "/visit",
  },
];

/*
 * Opening: an orange layer sweeps out from the menu button's corner
 * (top right), the dark menu follows just behind it, the background
 * settles from a slight zoom, then each menu item rises out of a mask,
 * one after another. Closing plays the same thing backwards, faster.
 */
export default function MenuOverlay({ onClose }) {
  const [bgError, setBgError] = useState(false);
  const rootRef = useRef(null);
  const tlRef = useRef(null);
  const closingRef = useRef(false);

  useGSAP(
    () => {
      const q = gsap.utils.selector(rootRef);
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const tl = gsap.timeline({
        defaults: { ease: "power4.inOut" },
        onReverseComplete: () => onClose(),
      });

      if (reduce) {
        tl.fromTo(
          rootRef.current,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.25 },
        );
      } else {
        const from = "circle(0% at 100% 0%)";
        const to = "circle(150% at 100% 0%)";
        tl.fromTo(
          q("[data-menu-wipe]"),
          { clipPath: from },
          { clipPath: to, duration: 0.8 },
          0,
        )
          .fromTo(
            q("[data-menu-panel]"),
            { clipPath: from },
            { clipPath: to, duration: 0.8 },
            0.14,
          )
          .fromTo(
            q("[data-menu-bg]"),
            { scale: 1.15 },
            { scale: 1, duration: 1.4, ease: "power3.out" },
            0.14,
          )
          .fromTo(
            q("[data-menu-header]"),
            { autoAlpha: 0, y: -16 },
            { autoAlpha: 1, y: 0, duration: 0.5, ease: "power3.out" },
            0.55,
          )
          .fromTo(
            q("[data-menu-link]"),
            { yPercent: 115, rotate: 3 },
            {
              yPercent: 0,
              rotate: 0,
              duration: 0.9,
              ease: "expo.out",
              stagger: 0.07,
            },
            0.5,
          );
      }
      tlRef.current = tl;
    },
    { scope: rootRef },
  );

  // Close = play the opening backwards (a bit faster), then unmount.
  const close = useCallback(() => {
    if (closingRef.current) return;
    closingRef.current = true;
    const tl = tlRef.current;
    if (!tl) return onClose();
    tl.timeScale(1.6).reverse();
  }, [onClose]);

  // Lock page scrolling while open; Escape closes.
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [close]);

  return (
    <div
      ref={rootRef}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      className="fixed inset-0 z-[99999] text-[#F5EBDD]"
    >
      {/* Orange layer that leads the sweep */}
      <div
        data-menu-wipe
        aria-hidden="true"
        className="absolute inset-0 bg-[#ED4823]"
        style={{ clipPath: "circle(0% at 100% 0%)" }}
      />

      {/* The menu itself */}
      <div
        data-menu-panel
        className="absolute inset-0 flex flex-col justify-between overflow-hidden bg-[#0B0B0B]"
        style={{ clipPath: "circle(0% at 100% 0%)" }}
      >
        {/* =====================================================
          1. BACKGROUND IMAGE
      ====================================================== */}
        {!bgError && (
          <div
            data-menu-bg
            className="pointer-events-none absolute inset-0 z-0"
          >
            <Image
              src="/images/hero/heromenubg.png"
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
        <header
          data-menu-header
          className="relative z-50 flex w-full items-center justify-between px-4 pt-4 pb-3 lg:px-7 lg:pt-7 lg:pb-5"
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={close}
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
            onClick={close}
            aria-label="Close navigation menu"
            className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full text-[#F04423] transition-transform duration-200 hover:scale-105"
          >
            <span className="text-3xl font-light leading-none">×</span>
          </button>
        </header>

        {/* =====================================================
          MAIN NAVIGATION
      ====================================================== */}
        <nav className="relative z-40 my-auto flex flex-col items-center justify-center px-6">
          <div className="flex flex-col items-center gap-4 text-center sm:gap-6 lg:gap-3">
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
                    onClick={close}
                    className="heading-font relative inline-block uppercase font-bold leading-[0.95] tracking-tight text-[#F5EBDD] transition-colors duration-200 group-hover:text-[#F04423]"
                    style={{
                      fontSize: "clamp(36px, 5vw, 72px)",
                    }}
                  >
                    {/* Masked so the label can rise into view */}
                    <span className="block overflow-hidden pb-[0.08em]">
                      <span
                        data-menu-link
                        className="block will-change-transform"
                      >
                        {item.label}
                      </span>
                    </span>

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
                          onClick={close}
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

        {/* FOOTER SPACER TO BALANCE THE HEADER */}
        <div className="relative z-50 h-10 sm:h-12" />
      </div>
    </div>
  );
}
