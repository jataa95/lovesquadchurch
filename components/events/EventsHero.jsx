"use client";

import { useEffect, useRef } from "react";
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
  const galleryRef = useRef(null);

  // Vertical scroll to horizontal scroll handler for event cards
  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const handleWheel = (e) => {
      // If there is horizontal scroll room left, convert vertical wheel scroll to horizontal
      if (e.deltaY !== 0) {
        e.preventDefault();
        gallery.scrollBy({
          left: e.deltaY * 1.5,
          behavior: "smooth",
        });
      }
    };

    gallery.addEventListener("wheel", handleWheel, { passive: false });
    return () => gallery.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <section className="w-full bg-[#F9E9D3] text-[#333333]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-6 py-6 md:px-12 md:py-8">

        {/* =========================================
            1. GIANT "EVENTS" HEADING
        ========================================== */}
        <div className="w-full mt-[80px]">
          <h1
            className="heading-font m-0 w-full uppercase font-extrabold leading-[0.78] tracking-tighter text-[#4A4A4A] mt-[60px]"
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
        <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
          
          {/* LEFT COLUMN: Graphic + Subtitle (Center-Aligned Vertically) */}
          <div className="flex shrink-0 flex-col items-center justify-center lg:w-[220px]">
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

          {/* RIGHT COLUMN: Description Header + Horizontal Cards Container */}
          <div className="min-w-0 flex-1">
            
            {/* Description + Imported Tertiary Button */}
            <div className="mb-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div className="max-w-[700px]">
                <h2 className="heading-font mb-1 text-[32px] font-bold uppercase tracking-wide text-[#333333]">
                  NUNC CONDIMENTUM SAPIEN
                </h2>
                <p className="body-font text-[20px] leading-relaxed text-[#666666]">
                  Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa
                  Condimentum Quam, A Eleifend Dolor Elit Quis Orci.
                </p>
              </div>

              {/* Imported Tertiary Button Component */}
              <EventsSkipButton
                onClick={() => {
                  galleryRef.current?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-[#4A4A4A] transition-colors duration-200 hover:text-[#EE4B2B]"
              >
                SKIP DOWN 
              </EventsSkipButton>
            </div>

            {/* Horizontal Scroll Cards (With Wheel Autoscroll Listener) */}
            <div
              id="events-gallery"
              ref={galleryRef}
              className="w-full overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              <div className="flex items-start gap-0">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="relative aspect-[4/3] h-[260px] w-[320px] shrink-0 border-r border-white/5 bg-[#171515] sm:h-[300px] sm:w-[380px] md:h-[340px] md:w-[420px]"
                  >
                    <Image
                      src={event.image}
                      alt={event.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 320px, (max-width: 768px) 380px, 420px"
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