import SecondaryButton from "@/components/ui/buttons/SecondaryButton";

export default function EventsHeader() {
  return (
    <div className="flex flex-row items-end justify-between sm:gap-6 md:flex-row md:items-end md:justify-between lg:gap-0">
      {/* LEFT SIDE */}
      <div className="flex items-start gap-2 sm:gap-3">
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
      <div className="self-end md:self-auto">
        <SecondaryButton href="/events">GO TO EVENTS</SecondaryButton>
      </div>
    </div>
  );
}
