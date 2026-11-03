import AboutSplitSection from "@/components/about/AboutSplitSection";
import { PrimaryButton } from "@/components/ui/buttons";
import { firstTimers } from "@/data/firstTimers";

// Dark section: each service meeting (name, day, time, what it is), then
// the location with a link to directions.
export default function WhenAndWhere() {
  return (
    <AboutSplitSection
      id="our-services"
      tone="dark"
      divider={false}
      icon="/images/firsttimers/our-services-icon.svg"
      iconWidth={95}
      iconHeight={95}
      centerOnMobile
      heading={
        <>
          <span className="block">OUR</span>
          <span className="block text-[#ED4823]">SERVICES</span>
        </>
      }
    >
      <div className="flex flex-col gap-5">
        {firstTimers.services.map((s) => (
          <article
            key={s.name}
            className="flex flex-col gap-4 border border-[#3B3B3B] p-6 sm:flex-row sm:items-end sm:justify-between sm:gap-8"
          >
            <div className="max-w-[420px]">
              <h3
                className="heading-font font-bold uppercase leading-none tracking-[-0.03em]"
                style={{ fontSize: "clamp(24px, 2.6vw, 34px)" }}
              >
                {s.name}
              </h3>
              <p className="mt-3 text-[15px] leading-[24px] text-[#F9E9D3]/80">{s.text}</p>
            </div>
            <div className="shrink-0 sm:text-right">
              <p className="heading-font text-[12px] uppercase tracking-[0.22em] text-[#ED4823] sm:text-[13px]">
                {s.day}
              </p>
              <p className="heading-font mt-1 text-[22px] font-bold leading-none sm:text-[26px]">
                {s.time}
              </p>
            </div>
          </article>
        ))}

        <div className="border border-[#3B3B3B] p-6">
          <p className="heading-font text-[12px] uppercase tracking-[0.22em] text-[#ED4823] sm:text-[13px]">
            LOCATION
          </p>
          <p className="mt-2 text-[16px] leading-[26px] lg:text-[18px]">{firstTimers.address}</p>
          <div className="mt-5">
            <PrimaryButton href="/visit">GET DIRECTIONS</PrimaryButton>
          </div>
        </div>
      </div>
    </AboutSplitSection>
  );
}
