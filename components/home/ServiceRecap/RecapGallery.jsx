"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { serviceRecap } from "@/data/serviceRecap";

export default function RecapGallery() {
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // =====================================================
  // SCROLL-DRIVEN HORIZONTAL MOVEMENT
  // =====================================================

  useEffect(() => {
    const slider = sliderRef.current;
    const section = sectionRef.current;

    if (!slider || !section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress =
        (windowHeight - rect.top) /
        (windowHeight + rect.height);

      const clampedProgress = Math.min(
        Math.max(progress, 0),
        1
      );

      const maxScroll =
        slider.scrollWidth - slider.clientWidth;

      slider.scrollLeft =
        clampedProgress * maxScroll;
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  // =====================================================
  // DRAG START
  // =====================================================

  const handleDragStart = (clientX) => {
    const slider = sliderRef.current;

    if (!slider) return;

    isDragging.current = true;

    startX.current =
      clientX - slider.getBoundingClientRect().left;

    scrollLeft.current =
      slider.scrollLeft;

    slider.classList.add("cursor-grabbing");
  };

  // =====================================================
  // DRAG MOVE
  // =====================================================

  const handleDragMove = (clientX) => {
    const slider = sliderRef.current;

    if (!isDragging.current || !slider) return;

    const x =
      clientX -
      slider.getBoundingClientRect().left;

    const distance =
      (x - startX.current) * 1.5;

    slider.scrollLeft =
      scrollLeft.current - distance;
  };

  // =====================================================
  // DRAG END
  // =====================================================

  const handleDragEnd = () => {
    const slider = sliderRef.current;

    isDragging.current = false;

    slider?.classList.remove(
      "cursor-grabbing"
    );
  };

  // =====================================================
  // MOUSE EVENTS
  // =====================================================

  const handleMouseDown = (e) => {
    handleDragStart(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;

    e.preventDefault();

    handleDragMove(e.clientX);
  };

  // =====================================================
  // TOUCH EVENTS
  // =====================================================

  const handleTouchStart = (e) => {
    handleDragStart(
      e.touches[0].clientX
    );
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;

    handleDragMove(
      e.touches[0].clientX
    );
  };

  return (
    <section
      ref={sectionRef}
      className="
        relative
        left-1/2
        right-1/2
        -mx-[50vw]
        w-screen
      "
    >
      <div
        ref={sliderRef}

        /* Mouse */
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}

        /* Touch */
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
        "
      >
        {serviceRecap.images.map(
          (image, index) => (
            <div
              key={index}
              className="
                relative
                flex-none
                w-[85vw]
                h-[360px]
                bg-[#111]

                sm:w-[70vw]
                sm:h-[420px]

                md:w-[60vw]
                md:h-[460px]

                lg:w-[50vw]
                lg:h-[520px]
              "
            >
              <Image
                src={image}
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
            </div>
          )
        )}
      </div>
    </section>
  );
}