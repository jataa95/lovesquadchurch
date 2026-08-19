"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import EventsSkipButton from "@/components/events/EventsSkipButton";

const events = [
  {
    id: 1,
    image: "/images/events/event-1.jpg",
    alt: "Love Squad Church event 1",
  },
  {
    id: 2,
    image: "/images/events/event-2.jpg",
    alt: "Love Squad Church event 2",
  },
  {
    id: 3,
    image: "/images/events/event-3.jpg",
    alt: "Love Squad Church event 3",
  },
];

export default function EventsHero() {
  const sectionRef = useRef(null);
  const galleryRef = useRef(null);
  
  // State for mobile auto-fading slideshow
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mobile slideshow interval timer
  useEffect(() => {
    // Only run the auto-fade timer on mobile/tablet screens (< 1024px)
    if (window.innerWidth >= 1024) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, 4000); // Changes slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  // Desktop-only horizontal scroll wheel lock triggered when the gallery is 80% visible
  useEffect(() => {
    const section = sectionRef.current;
    const gallery = galleryRef.current;
    if (!section || !gallery) return;

    let isIntersecting = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
      },
      {
        threshold: 0.8,
      }
    );

    observer.observe(gallery);

    const handleWheel = (e) => {
      if (window.innerWidth < 1024 || !isIntersecting) return;

      const isScrollableHorizontally = gallery.scrollWidth > gallery.clientWidth;
      if (!isScrollableHorizontally) return;

      const isAtStart = gallery.scrollLeft === 0;
      const isAtEnd =
        Math.abs(gallery.scrollWidth - gallery.scrollLeft - gallery.clientWidth) < 1;

      if (e.deltaY > 0 && !isAtEnd) {
        e.preventDefault();
        gallery.scrollBy({
          left: e.deltaY * 1.5,
          behavior: "smooth",
        });
      } else if (e.deltaY < 0 && !isAtStart) {
        e.preventDefault();
        gallery.scrollBy({
          left: e.deltaY * 1.5,
          behavior: "smooth",
        });
      }
    };

    section.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      observer.disconnect();
      section.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-[#F9E9D3] text-[#333333]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-6 py-3 md:px-12 md:py-8">
        {/* =========================================
            1. GIANT "EVENTS" HEADING
        ========================================== */}
        <div className="w-full mt-[6px] lg:mt-[60px]">
          <h1
            className="heading-font m-0 w-full uppercase font-extrabold leading-[0.78] tracking-tighter text-[#4A4A4A] mt-[60px] text-center lg:text-left"
            style={{
              fontSize: "clamp(4rem, 16vw, 15rem)",
            }}
          >
            EVENTS
          </h1>
        </div>

        {/* =========================================
            2. LOWER SECTION GRID (GRAPHIC & CARDS)
        ========================================== */}
        <div className="mt-2 flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
          {/* LEFT COLUMN: Graphic + Subtitle */}
          <div className="hidden lg:flex shrink-0 flex-col items-center justify-center lg:w-[220px]">
            {/* SVG Graphic */}
            <div className="relative h-[180px] w-[180px]">
              <Image
                src="/images/events/lovesquad-graphic.svg"
                alt="Love Graphic"
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Red Subtitle Infinite Continuous Loop */}
            <div className="-mt-3 w-full max-w-[220px] overflow-hidden whitespace-nowrap">
              <div className="flex w-max animate-[marquee_12s_linear_infinite]">
                <span className="pr-4 font-mono text-[16px] font-bold uppercase tracking-widest text-[#EE4B2B]">
                  LOVE IS US * LOVESQUAD CHURCH *
                </span>
                <span className="pr-4 font-mono text-[16px] font-bold uppercase tracking-widest text-[#EE4B2B]">
                  LOVE IS US * LOVESQUAD CHURCH *
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Description Header + Gallery Container */}
          <div className="min-w-0 flex-1">
            {/* Description + Imported Tertiary Button */}
            <div className="mb-4 flex flex-col items-end text-center lg:items-end lg:text-left justify-between gap-2 sm:flex-row sm:items-end">
              <div className="max-w-[700px]">
                <h2 className="heading-font mb-1 text-[22px] sm:text-[32px] font-bold uppercase tracking-wide text-[#333333]">
                  NUNC CONDIMENTUM SAPIEN
                </h2>
                <p className="body-font text-[14px] sm:text-[20px] leading-relaxed text-[#666666]">
                  Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus
                  Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.
                </p>
              </div>

              {/* Imported Tertiary Button Component (Hidden on mobile, visible on sm and up) */}
              <div className="hidden sm:flex">
                <EventsSkipButton
                  onClick={() => {
                    const target = document.getElementById("upcoming-events");
                    if (target) {
                      const topPosition =
                        target.getBoundingClientRect().top + window.pageYOffset;
                      window.scrollTo({
                        top: topPosition,
                        behavior: "smooth",
                      });
                    }
                  }}
                  className="text-[#4A4A4A] transition-colors duration-200 hover:text-[#EE4B2B]"
                >
                  SKIP DOWN
                </EventsSkipButton>
              </div>
            </div>

            {/* Gallery Container: Auto-fading slideshow on mobile, horizontal scroll track on desktop */}
            <div
              id="events-gallery"
              ref={galleryRef}
              className="w-full lg:overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {/* MOBILE VIEW: Stacked relative container with cross-fade opacity transitions */}
              <div className="relative w-full h-[260px] sm:h-[320px] lg:hidden bg-[#171515] overflow-hidden">
                {events.map((event, index) => (
                  <div
                    key={event.id}
                    className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
                      index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                  >
                    <Image
                      src={event.image}
                      alt={event.alt}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                    {/* Visual Frame Icon Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center text-white/20">
                      <svg
                        className="h-10 w-10"
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
                ))}
                
                {/* Minimalist dot indicators for mobile slideshow */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                  {events.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      aria-label={`Go to slide ${index + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === currentIndex ? "w-6 bg-white" : "w-1.5 bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* DESKTOP VIEW: Original Horizontal Scroll Layout */}
              <div className="hidden lg:flex lg:flex-row lg:items-start lg:gap-0">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="relative aspect-[4/3] lg:h-[340px] lg:w-[420px] shrink-0 border-r border-white/5 bg-[#171515]"
                  >
                    <Image
                      src={event.image}
                      alt={event.alt}
                      fill
                      className="object-cover"
                      sizes="420px"
                    />
                    {/* Visual Frame Icon Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center text-white/20">
                      <svg
                        className="h-10 w-10"
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}