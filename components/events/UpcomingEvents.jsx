"use client";

import Image from "next/image";

export default function UpcomingEvents() {
  return (
    <section className="w-full bg-[#F9E9D3] text-[#575656] py-12 md:py-16">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* =========================================
              LEFT COLUMN: Header & Calendar SVG Icon
          ========================================== */}
          <div className="flex items-start gap-4 lg:col-span-5">
            {/* SVG Icon File */}
            <div className="relative h-16 w-16 shrink-0 md:h-20 md:w-20">
              <Image
                src="/images/events/calendar.svg"
                alt="Calendar Icon"
                fill
                className="object-contain"
              />
            </div>

            {/* Title with 80px font-size on desktop & #575656 color */}
            <h2
              className="heading-font font-extrabold uppercase leading-[0.88] tracking-tight text-[#575656]"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 80px)",
              }}
            >
              UPCOMING<br />EVENTS
            </h2>
          </div>

          {/* =========================================
              RIGHT COLUMN: Main Content Block
          ========================================== */}
          <div className="flex flex-col lg:col-span-7">
            
            {/* Section Subhead & Top Border Line */}
            <div className="border-t border-[#575656]/30 pt-2 pb-4">
              <span className="heading-font text-sm font-bold uppercase tracking-wider text-[#575656]">
                LOREM IPSUM
              </span>
            </div>

            {/* Featured Image Box */}
            <div className="relative aspect-square w-full bg-[#171515]">
              {/* Image Placeholder Visual */}
              <div className="absolute inset-0 flex items-center justify-center text-white/20">
                <svg
                  className="h-12 w-12"
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

              {/* Real Image Placeholder:
              <Image
                src="/images/events/upcoming-featured.jpg"
                alt="Upcoming Event"
                fill
                className="object-cover"
              /> 
              */}
            </div>

            {/* Featured Event Description (16px, #575656) */}
            <p className="body-font py-4 text-[20px] leading-relaxed text-[#575656]">
              Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa
              Condimentum Quam, A Eleifend Dolor Elit Quis Orci.
            </p>

            {/* Divider Line */}
            <div className="border-t border-[#575656]/20 my-2" />

            {/* Secondary Event List (16px, #575656) */}
            <div className="flex flex-col gap-3 pt-2">
              <span className="font-mono text-[16px] font-bold uppercase tracking-wider text-[#575656]">
                LOREM IPSUM
              </span>

              <div className="space-y-3 body-font text-[20px] leading-relaxed text-[#575656]">
                <p>
                  Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa
                  Condimentum Quam, A Eleifend Dolor Elit Quis Orci.
                </p>
                <p>
                  Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa
                  Condimentum Quam, A Eleifend Dolor Elit Quis Orci.
                </p>
                <p>
                  Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa
                  Condimentum Quam, A Eleifend Dolor Elit Quis Orci.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}