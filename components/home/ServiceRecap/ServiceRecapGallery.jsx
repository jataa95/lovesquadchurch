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
  const mobileContainerRef = useRef(null);

  const [skipOpacity, setSkipOpacity] = useState(1);
  const [mobileOpacity, setMobileOpacity] = useState(1);
  const [mobileSlide, setMobileSlide] = useState(0);
  const [mounted, setMounted] = useState(false);

  const lastScrollTop = useRef(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    setMounted(true);

    const slider = sliderRef.current;
    const section = sectionRef.current;
    const mobileContainer = mobileContainerRef.current;

    if (!section) return;

    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      const isScrollingDown =
        currentScrollTop > lastScrollTop.current;

      lastScrollTop.current =
        currentScrollTop <= 0 ? 0 : currentScrollTop;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress =
        (windowHeight - rect.top) /
        (windowHeight + rect.height);

      const clampedProgress = Math.min(Math.max(progress, 0), 1);

      // DESKTOP
      if (window.innerWidth >= 1024 && slider) {
        const maxScroll =
          slider.scrollWidth - slider.clientWidth;

        slider.scrollLeft = clampedProgress * maxScroll;

        const fadeStart = 0.35;
        const fadeEnd = 0.5;

        if (clampedProgress >= fadeEnd) {
          setSkipOpacity(isScrollingDown ? 0 : 1);
        } else if (clampedProgress > fadeStart) {
          const fadeProgress =
            (clampedProgress - fadeStart) /
            (fadeEnd - fadeStart);

          setSkipOpacity(
            isScrollingDown
              ? Math.max(0, 1 - fadeProgress)
              : 1
          );
        } else {
          setSkipOpacity(1);
        }
      }

      // MOBILE FADE
      if (window.innerWidth < 1024 && mobileContainer) {
        const mobileFadeStart = 0.6;
        const mobileFadeEnd = 0.9;

        if (clampedProgress >= mobileFadeEnd) {
          setMobileOpacity(0);
        } else if (clampedProgress > mobileFadeStart) {
          const fadeVal =
            (clampedProgress - mobileFadeStart) /
            (mobileFadeEnd - mobileFadeStart);

          setMobileOpacity(1 - fadeVal);
        } else {
          setMobileOpacity(1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    const timer = setInterval(() => {
      if (window.innerWidth < 1024) {
        setMobileSlide(
          (prev) => (prev + 1) % GALLERY_IMAGES.length
        );
      }
    }, 3000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timer);
    };
  }, []);

  const handleSkip = (e) => {
    e.preventDefault();

    const aboutSection =
      document.getElementById("about-page");

    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
      });
    } else if (sectionRef.current) {
      const sectionBottom =
        sectionRef.current.offsetTop +
        sectionRef.current.offsetHeight;

      window.scrollTo({
        top: sectionBottom,
        behavior: "smooth",
      });
    }
  };

  const handleDragStart = (clientX) => {
    const slider = sliderRef.current;
    if (!slider) return;

    isDragging.current = true;
    startX.current =
      clientX - slider.getBoundingClientRect().left;
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

  const handleMouseDown = (e) =>
    handleDragStart(e.clientX);

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    handleDragMove(e.clientX);
  };

  const handleTouchStart = (e) =>
    handleDragStart(e.touches[0].clientX);

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    handleDragMove(e.touches[0].clientX);
  };

  // Mobile navigation
  const goToPrevious = () => {
    setMobileSlide((prev) =>
      prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setMobileSlide(
      (prev) => (prev + 1) % GALLERY_IMAGES.length
    );
  };

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-screen
        left-1/2
        right-1/2
        -mx-[50vw]
        bg-[#F9E9D3]
        h-auto
        lg:h-[1600px]
      "
    >
      {/* ================= MOBILE ================= */}

      <div
        ref={mobileContainerRef}
        className="block lg:hidden py-6 px-4 w-full transition-opacity duration-500"
        style={{ opacity: mobileOpacity }}
      >
        {/* Header */}

        <div className="w-full mb-4 mt-8 flex justify-center">
          <div className="flex items-center justify-center gap-2">
            <Image
              src="/icons/service-icon.svg"
              alt="Service Icon"
              width={96}
              height={80}
              className="h-[28px] w-[34px] object-contain"
            />

            <div className="flex gap-1.5 leading-none">
              <h2 className="heading-font uppercase text-[#ED4823] text-[20px] font-black">
                SERVICE
              </h2>

              <h2 className="heading-font uppercase text-[#575656] text-[20px] font-black">
                RECAP
              </h2>
            </div>
          </div>
        </div>

        {/* Mobile Slideshow */}

        <div className="w-full">
          <div className="relative w-full h-[395px] overflow-hidden rounded-xl bg-[#111] shadow-sm">
            {mounted &&
              GALLERY_IMAGES.map((imagePath, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    mobileSlide === index
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                >
                  <Image
                    src={imagePath}
                    alt={`Service Recap ${index + 1}`}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/40" />

                  {/* Left Arrow */}
                  <button
                    onClick={goToPrevious}
                    className="absolute left-2.5 top-[46%] -translate-y-1/2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/30 backdrop-blur-sm"
                    aria-label="Previous image"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>

                  {/* Right Arrow */}
                  <button
                    onClick={goToNext}
                    className="absolute right-2.5 top-[46%] -translate-y-1/2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/30 backdrop-blur-sm"
                    aria-label="Next image"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>

                  {/* Centered Content */}
                  <div className="absolute bottom-5 left-1/2 z-20 w-[85%] -translate-x-1/2 text-center flex flex-col items-center">
                    <span className="block text-[14px] tracking-[0.1em] font-semibold mb-1 text-[#575656]">
                      ASFDHHSGDDHZ
                    </span>

                    <p className="text-[12px] leading-snug mb-2 text-[#F9E9D3]/70">
                      Condimentum Ultrices, Risus Massa
                      Condimentum Quam.
                    </p>

                    <div className="flex justify-center mb-6">
                      <SecondaryButton href="/servicerecap">
                        {serviceRecap.button}
                      </SecondaryButton>
                    </div>

                    {/* Indicators positioned after the button */}
                    <div className="flex justify-center gap-1">
                      {GALLERY_IMAGES.map((_, dotIndex) => (
                        <button
                          key={dotIndex}
                          onClick={() => setMobileSlide(dotIndex)}
                          aria-label={`Go to slide ${dotIndex + 1}`}
                          className={`rounded-full transition-all duration-300 ${
                            mobileSlide === dotIndex
                              ? "w-6 h-[5px] bg-[#ED4823]"
                              : "w-1.5 h-[5px] bg-[#D8CBB8]/60"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* ================= DESKTOP ================= */}

      <div className="hidden lg:block sticky top-0 h-[750px] overflow-hidden pt-2">
        {/* Header */}

        <div className="w-full px-4 lg:mb-3 lg:mt-20 flex justify-center shrink-0">
          <div className="flex items-center justify-center gap-3.5">
            <Image
              src="/icons/service-icon.svg"
              alt="Service Icon"
              width={96}
              height={80}
              className="h-[64px] w-[76px] object-contain"
            />

            <div className="flex gap-2 leading-none">
              <h2 className="heading-font uppercase text-[#ED4823] text-[48px] font-black">
                SERVICE
              </h2>

              <h2 className="heading-font uppercase text-[#575656] text-[48px] font-black">
                RECAP
              </h2>
            </div>
          </div>
        </div>

        {/* Gallery */}

        <div className="relative w-full shrink-0">
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
              w-full
              bg-[#111]
            "
          >
            {GALLERY_IMAGES.map((imagePath, index) => (
              <div
                key={index}
                className="relative overflow-hidden flex-none w-[35vw] h-[700px] bg-[#111] lg:h-[500px]"
              >
                <Image
                  src={imagePath}
                  alt={`Service Recap ${index + 1}`}
                  fill
                  draggable={false}
                  sizes="35vw"
                  className="pointer-events-none object-cover transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/40 pointer-events-none z-10" />
              </div>
            ))}
          </div>

          {/* Desktop Description */}

          <div className="absolute bottom-28 left-12 z-20 max-w-xs pointer-events-none">
            <span className="block text-xs tracking-widest text-[#575656] font-semibold mb-1">
              ASFDHHSGDDHZ
            </span>

            <p className="text-[#F9E9D3]/70 text-sm leading-relaxed">
              Condimentum Ultrices, Risus Massa
              Condimentum Quam, A Eleifend Dolor Elit Quis
              Orci.
            </p>
          </div>

          {/* Desktop Skip */}

          <div
            className="absolute bottom-28 left-1/2 z-20 -translate-x-1/2 cursor-pointer transition-opacity duration-200"
            style={{
              opacity: skipOpacity,
              pointerEvents:
                skipOpacity === 0 ? "none" : "auto",
            }}
            onClick={handleSkip}
          >
            <TertiaryButton href="#about-page">
              Skip
            </TertiaryButton>
          </div>

          {/* Desktop CTA */}

          <div className="absolute bottom-28 right-12 z-20">
            <SecondaryButton href="/servicerecap">
              {serviceRecap.button}
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}