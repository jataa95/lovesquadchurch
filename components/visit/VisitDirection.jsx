"use client";

export default function VisitDirection() {
  return (
    <section id="direction" className="w-full bg-[#F9E9D3]">
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-5
          sm:px-6
          md:px-8
          lg:px-12
          xl:px-[32px]
          pb-12
          sm:pb-14
          md:pb-16
          lg:pb-[80px]
        "
      >
        {/* DIRECTION LABEL */}
        <p
          className="
            heading-font
            uppercase
            text-[#77736D]
          "
          style={{
            fontSize: "clamp(13px, 1.2vw, 16px)",
            lineHeight: "1.25",
            fontWeight: 500,
            letterSpacing: "-0.01em",
          }}
        >
          DIRECTION EMBED
        </p>

        {/* MAP / DIRECTION EMBED */}
        <div
          className="
            relative
            mt-2
            h-[140px]
            sm:h-[150px]
            md:h-[168px]
            lg:h-[180px]
            w-full
            overflow-hidden
            bg-[#171515]
          "
        >
          {/* Replace this placeholder with your Google Maps embed */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm text-[#666666]">
              {/* Map embed goes here */}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}