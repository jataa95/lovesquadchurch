"use client";

import { useRef } from "react";
import Image from "next/image";
import { serviceRecap } from "@/data/serviceRecap";

export default function RecapGallery() {
  const slider = useRef(null);

  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    slider.current.classList.add("cursor-grabbing");
    startX = e.pageX - slider.current.offsetLeft;
    scrollLeft = slider.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
    slider.current.classList.remove("cursor-grabbing");
  };

  const handleMouseUp = () => {
    isDown = false;
    slider.current.classList.remove("cursor-grabbing");
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;

    e.preventDefault();

    const x = e.pageX - slider.current.offsetLeft;

    const walk = (x - startX) * 1.8;

    slider.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="relative">
      {/* Left Fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#F9E9D3] to-transparent" />

      {/* Right Fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#F9E9D3] to-transparent" />

      <div
        ref={slider}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="
          flex
          gap-6
          overflow-x-auto
          scroll-smooth
          snap-x
          snap-mandatory
          no-scrollbar
          cursor-grab
          select-none
          pb-4
        "
      >
        {serviceRecap.images.map((image, index) => (
          <div
            key={index}
            className="
              relative
              w-[500px]
              h-[320px]
              flex-shrink-0
              overflow-hidden
              rounded-[28px]
              snap-start
              group
            "
          >
            <Image
              src={image}
              alt={`Service Recap ${index + 1}`}
              fill
              draggable={false}
              className="
                object-cover
                transition-transform
                duration-500
                group-hover:scale-105
              "
            />
          </div>
        ))}
      </div>
    </div>
  );
}