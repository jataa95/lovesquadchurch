"use client";

import Image from "next/image";

export default function UpcomingEvents() {
  return (
    <section id="upcoming-events" className="relative w-full bg-[#F9E9D3] text-[#575656] py-6 md:py-16">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start lg:relative">
          {/* =========================================
              LEFT COLUMN: Header, Calendar SVG Icon & Sticky Wrapper (Mobile & Desktop)
          ========================================== */}
          <div className="flex flex-col lg:col-span-5 sticky top-16 md:top-20 lg:top-28 z-10 bg-[#F9E9D3] pb-4 lg:pb-0">
            {/* Header + Icon Row */}
            <div className="flex items-left justify-center lg:justify-start gap-2">
              {/* SVG Icon File */}
              <div className="relative h-10 w-10 shrink-0 sm:h-14 sm:w-14 md:h-20 md:w-20">
                <Image
                  src="/images/events/calendar.svg"
                  alt="Calendar Icon"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Title with reduced mobile font-size and center alignment */}
              <h2
                className="heading-font font-extrabold uppercase leading-[0.88] tracking-tight text-[#575656] text-left lg:text-left"
                style={{
                  fontSize: "clamp(1.75rem, 5vw, 80px)",
                }}
              >
                UPCOMING
                <br />
                EVENTS
              </h2>
            </div>

            {/* Horizontal Divider Line under the header block (Visible on mobile only) */}
            <div className="border-t border-[#575656]/30 mt-4 lg:hidden" />
          </div>

          {/* Vertical Divider Line for Desktop (Positioned between left and right columns) */}
          <div className="hidden lg:block absolute left-[41.666%] top-0 bottom-0 w-[1px] bg-[#575656]/30" />

          {/* =========================================
              RIGHT COLUMN: Main Content Block (Centered Texts)
          ========================================== */}
          <div className="flex flex-col lg:col-span-7 text-center lg:text-left lg:pl-8">
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

            {/* Featured Event Description */}
            <p className="body-font py-4 text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed text-[#575656]">
              Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa
              Condimentum Quam, A Eleifend Dolor Elit Quis Orci.
            </p>

            {/* Divider Line */}
            <div className="border-t border-[#575656]/20 my-2" />

            {/* Secondary Event List */}
            <div className="flex flex-col gap-3 pt-2">
              <span className="font-mono text-[14px] md:text-[16px] font-bold uppercase tracking-wider text-[#575656]">
                LOREM IPSUM
              </span>

              <div className="space-y-3 body-font text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed text-[#575656]">
                <p>
                  Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus
                  Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.
                </p>
                <p>
                  Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus
                  Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.
                </p>
                <p>
                  Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus
                  Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}