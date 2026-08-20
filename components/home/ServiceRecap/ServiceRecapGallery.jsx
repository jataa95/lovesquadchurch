// app/components/ServiceRecapGallery.jsx
"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { serviceRecap } from "@/data/serviceRecap";
import SecondaryButton from "@/components/ui/buttons/SecondaryButton";
import TertiaryButton from "@/components/ui/buttons/TertiaryButton";

const GALLERY_IMAGES = [
  "/images/service-recap/sr1.jpg",
  "/images/service-recap/sr2.jpg",
  "/images/service-recap/sr3.jpg",
  "/images/service-recap/sr4.jpg",
  "/images/service-recap/sr5.jpg",
  "/images/service-recap/sr6.jpg",
  "/images/service-recap/sr7.jpg",
  "/images/service-recap/sr8.jpg",
  "/images/service-recap/sr9.jpg",
  "/images/service-recap/sr10.jpg",
];

export default function ServiceRecapGallery() {
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);
  const [skipOpacity, setSkipOpacity] = useState(1);
  
  const lastScrollTop = useRef(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // =====================================================
  // SCROLL-DRIVEN HORIZONTAL MOVEMENT & UI TRIGGERS
  // =====================================================

  useEffect(() => {
    const slider = sliderRef.current;
    const section = sectionRef.current;

    if (!slider || !section) return;

    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const isScrollingDown = currentScrollTop > lastScrollTop.current;
      lastScrollTop.current = currentScrollTop <= 0 ? 0 : currentScrollTop;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress through the 300dvh section
      const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
      const clampedProgress = Math.min(Math.max(progress, 0), 1);

      const maxScroll = slider.scrollWidth - slider.clientWidth;
      slider.scrollLeft = clampedProgress * maxScroll;

      // Fade boundaries
      const fadeStart = 0.35;
      const fadeEnd = 0.50;

      if (clampedProgress >= fadeEnd) {
        // Past the midpoint: hide when scrolling down, show when scrolling up
        if (isScrollingDown) {
          setSkipOpacity(0);
        } else {
          setSkipOpacity(1);
        }
      } else {
        // Before the midpoint: handle gradual fade based on progress
        if (clampedProgress > fadeStart) {
          const fadeProgress = (clampedProgress - fadeStart) / (fadeEnd - fadeStart);
          setSkipOpacity(isScrollingDown ? Math.max(0, 1 - fadeProgress) : 1);
        } else {
          setSkipOpacity(1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =====================================================
  // SKIP BUTTON HANDLER
  // =====================================================

  const handleSkip = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about-page");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    } else if (sectionRef.current) {
      const sectionBottom = sectionRef.current.offsetTop + sectionRef.current.offsetHeight;
      window.scrollTo({ top: sectionBottom, behavior: "smooth" });
    }
  };

  // =====================================================
  // DRAG START / MOVE / END
  // =====================================================

  const handleDragStart = (clientX) => {
    const slider = sliderRef.current;
    if (!slider) return;

    isDragging.current = true;
    startX.current = clientX - slider.getBoundingClientRect().left;
    scrollLeft.current = slider.scrollLeft;
    slider.classList.add("cursor-grabbing");
  };

  const handleDragMove = (clientX) => {
    const slider = sliderRef.current;
    if (!isDragging.current || !slider) return;

    const x = clientX - slider.getBoundingClientRect().left;
    const distance = (x - startX.current) * 1.5;
    slider.scrollLeft = scrollLeft.current - distance;
  };

  const handleDragEnd = () => {
    const slider = sliderRef.current;
    isDragging.current = false;
    slider?.classList.remove("cursor-grabbing");
  };

  const handleMouseDown = (e) => handleDragStart(e.clientX);
  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    handleDragMove(e.clientX);
  };

  const handleTouchStart = (e) => handleDragStart(e.touches[0].clientX);
  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    handleDragMove(e.touches[0].clientX);
  };

  return (
    <section
      ref={sectionRef}
      className="
        relative
        h-[300dvh]
        left-1/2
        right-1/2
        -mx-[50vw]
        w-screen
        bg-[#F9E9D3]
      "
    >
      {/* Sticky Viewport Wrapper */}
      <div className="sticky top-8 flex flex-col h-dvh justify-center overflow-hidden py-2 pt-2 sm:pt-2 lg:top-3">
        
        {/* ================================
            SERVICE RECAP HEADER (CENTERED)
        ================================= */}
        <div className="w-full px-4 mt-0 mb-2 sm:mb-6 lg:mt-12 flex justify-center shrink-0">
          <div
            className="
              flex
              items-center
              justify-center
              gap-2
              sm:gap-3.5
            "
          >
            {/* Service Icon */}
            <Image
              src="/icons/service-icon.svg"
              alt="Service Icon"
              width={96}
              height={80}
              className="
                h-[30px]
                w-[36px]
                shrink-0
                object-contain
                sm:h-[44px]
                sm:w-[48px]
                md:h-[56px]
                md:w-[68px]
                lg:h-[64px]
                lg:w-[76px]
              "
            />

            {/* Heading Container */}
            <div className="flex flex-row items-start leading-none gap-2">
              <h2
                className="
                  heading-font
                  uppercase
                  text-[#ED4823]
                  text-[22px]
                  leading-none
                  sm:text-[36px]
                  sm:leading-[36px]
                  md:text-[42px]
                  md:leading-[42px]
                  lg:text-[48px]
                  lg:leading-[48px]
                "
                style={{ fontWeight: 900, letterSpacing: "0px" }}
              >
                SERVICE
              </h2>
              <h2
                className="
                  heading-font
                  uppercase
                  text-[#575656]
                  text-[22px]
                  leading-none
                  sm:text-[36px]
                  sm:leading-[36px]
                  md:text-[42px]
                  md:leading-[42px]
                  lg:text-[48px]
                  lg:leading-[48px]
                "
                style={{ fontWeight: 900, letterSpacing: "0px" }}
              >
                RECAP
              </h2>
            </div>
          </div>
        </div>

        {/* ================================
            GALLERY CONTAINER WITH OVERLAYS
        ================================= */}
        <div className="relative w-full shrink-0">
          
          {/* SLIDER TRACK */}
          <div
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleDragEnd}
            className="
              flex
              gap-[2px]
              overflow-x-auto
              overflow-y-hidden
              cursor-grab
              select-none
              scrollbar-hide
              touch-pan-y
              w-full
              bg-[#111]
            "
          >
            {GALLERY_IMAGES.map((imagePath, index) => (
              <div
                key={index}
                className="
                  relative
                  overflow-hidden
                  flex-none
                  w-[85vw]
                  h-[400px]
                  bg-[#111]
                  sm:w-[70vw]
                  sm:h-[420px]
                  md:w-[60vw]
                  md:h-[460px]
                  lg:w-[45vw]
                  lg:h-[400px]
                "
              >
                <Image
                  src={imagePath}
                  alt={`Service Recap ${index + 1}`}
                  fill
                  draggable={false}
                  sizes="(max-width: 640px) 85vw,(max-width: 768px) 70vw,(max-width: 1024px) 60vw,50vw"
                  className="
                    pointer-events-none
                    object-cover
                    transition-transform
                    duration-500
                    hover:scale-105
                  "
                />
                
                {/* DARK OVERLAY ON PICTURE ONLY */}
                <div className="absolute inset-0 bg-black/40 pointer-events-none z-10" />
              </div>
            ))}
          </div>

          {/* =========================================================
              MOBILE OVERLAY CONTROLS (< md breakpoint)
          ========================================================= */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-center gap-3 w-11/12 max-w-xs md:hidden">
            {/* Description Block */}
            <div className="pointer-events-none">
              <span className="block text-[11px] tracking-widest text-[#F9E9D3]/80 font-semibold mb-0.5">
                ASFDHHSGDDHZ
              </span>
              <p className="text-[#F9E9D3] text-xs leading-relaxed">
                Condimentum Ultrices, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.
              </p>
            </div>

            {/* Recap Last Service Button */}
            <div>
              <SecondaryButton href="/servicerecap">
                {serviceRecap.button}
              </SecondaryButton>
            </div>

            {/* Skip Button */}
            <div
              className="cursor-pointer transition-opacity duration-200 text-xs sm:text-sm"
              style={{ opacity: skipOpacity, pointerEvents: skipOpacity === 0 ? "none" : "auto" }}
              onClick={handleSkip}
            >
              <TertiaryButton href="#about-page">
                Skip
              </TertiaryButton>
            </div>
          </div>

          {/* =========================================================
              DESKTOP OVERLAY CONTROLS (>= md breakpoint)
          ========================================================= */}
          <div className="hidden md:block">
            {/* Left Description Block */}
            <div className="absolute bottom-8 left-12 z-20 max-w-xs pointer-events-none">
              <span className="block text-xs tracking-widest text-[#575656] font-semibold mb-1">
                ASFDHHSGDDHZ
              </span>
              <p className="text-[#F9E9D3] text-sm leading-relaxed">
                Condimentum Ultrices, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.
              </p>
            </div>

            {/* Centered Skip Button */}
            <div
              className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 cursor-pointer transition-opacity duration-200"
              style={{ opacity: skipOpacity, pointerEvents: skipOpacity === 0 ? "none" : "auto" }}
              onClick={handleSkip}
            >
              <TertiaryButton href="#about-page">
                Skip
              </TertiaryButton>
            </div>

            {/* Right Action Button */}
            <div className="absolute bottom-8 right-12 z-25">
              <SecondaryButton href="/servicerecap">
                {serviceRecap.button}
              </SecondaryButton>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}