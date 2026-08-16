import SecondaryButton from "@/components/ui/buttons/SecondaryButton";

export default function EventsHeader() {
  return (
    <div className="mt-3 flex flex-col gap-4 sm:mt-4 sm:gap-6 md:mt-5 md:flex-row md:items-end md:justify-between lg:gap-0">
      {/* LEFT SIDE */}
      <div className="flex items-start gap-2 sm:gap-3">
        {/* CALENDAR ICON */}
        <div className="mt-1 flex shrink-0 items-center justify-center sm:mt-2">
          <div className="relative h-[42px] w-[42px] border-[4px] border-[#575656] sm:h-[50px] sm:w-[50px] sm:border-[5px] md:h-[56px] md:w-[56px] md:border-[6px]">
            {/* Top horizontal bar */}
            <div className="absolute left-0 right-0 top-[10px] h-[4px] bg-[#575656] sm:top-[12px] sm:h-[5px] md:top-[14px] md:h-[6px]" />

            {/* Calendar rings */}
            <div className="absolute -top-[9px] left-[6px] h-[14px] w-[4px] bg-[#575656] sm:-top-[11px] sm:left-[8px] sm:h-[16px] sm:w-[5px] md:-top-[13px] md:left-[9px] md:h-[18px] md:w-[6px]" />
            <div className="absolute -top-[9px] right-[6px] h-[14px] w-[4px] bg-[#575656] sm:-top-[11px] sm:right-[8px] sm:h-[16px] sm:w-[5px] md:-top-[13px] md:right-[9px] md:h-[18px] md:w-[6px]" />

            {/* Calendar squares */}
            <div className="absolute left-[6px] top-[18px] grid grid-cols-3 gap-[3px] sm:left-[8px] sm:top-[22px] sm:gap-[4px] md:left-[9px] md:top-[24px] md:gap-[5px]">
              {Array.from({ length: 9 }).map((_, index) => (
                <span
                  key={index}
                  className="h-[4px] w-[4px] bg-[#575656] sm:h-[5px] sm:w-[5px] md:h-[6px] md:w-[6px]"
                />
              ))}
            </div>
          </div>
        </div>

        {/* HEADING */}
        <div className="leading-none">
          <h2 className="heading-font text-[28px] font-black uppercase leading-none text-[#575656] sm:text-[34px] md:text-[40px] lg:text-[46px]">
            OUR
          </h2>
          <h2 className="heading-font text-[28px] font-black uppercase leading-none text-[#ED4823] sm:text-[34px] md:text-[40px] lg:text-[46px]">
            EVENTS
          </h2>
        </div>
      </div>

      {/* RIGHT SIDE BUTTON */}
      <div className="self-start md:self-auto">
        <SecondaryButton href="/events">
          GO TO EVENTS
        </SecondaryButton>
      </div>
    </div>
  );
}