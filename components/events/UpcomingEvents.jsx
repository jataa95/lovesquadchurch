import Image from "next/image";
import AboutSplitSection from "@/components/about/AboutSplitSection";
import { eventsPage } from "@/data/events";

export default function UpcomingEvents() {
  const f = eventsPage.featured;
  return (
    <AboutSplitSection
      id="upcoming-events"
      icon="/images/events/calendar.svg"
      iconWidth={86}
      iconHeight={95}
      centerOnMobile
      heading={
        <>
          <span className="block">UPCOMING</span>
          <span className="block text-[#ED4823]">EVENTS</span>
        </>
      }
    >
      {/* Featured event */}
      <article>
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#171515]">
          <Image src={f.photo} alt={f.title} fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
        </div>
        <p className="heading-font mt-5 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#ED4823] sm:text-[13px]">
          {f.label} · {f.date} · {f.time}
        </p>
        <h3
          className="heading-font mt-2 font-bold uppercase leading-[0.9] tracking-[-0.02em] text-[#4A4A4A]"
          style={{ fontSize: "clamp(26px, 6vw, 40px)" }}
        >
          {f.title}
        </h3>
        <p className="mt-3 max-w-[600px] text-[15px] leading-[24px] text-[#575656] lg:text-[16px]">{f.text}</p>
      </article>

      {/* More events */}
      <ul className="mt-10 flex flex-col border-t border-[#9B9B9B]">
        {eventsPage.upcoming.map((e, i) => (
          <li key={i} className="flex flex-col gap-2 border-b border-[#9B9B9B] py-6 sm:flex-row sm:gap-8">
            <p className="heading-font shrink-0 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#ED4823] sm:w-[120px] sm:pt-1.5 sm:text-[13px]">
              {e.date}
            </p>
            <div>
              <h3
                className="heading-font font-bold uppercase leading-none tracking-[-0.02em] text-[#4A4A4A]"
                style={{ fontSize: "clamp(22px, 2.4vw, 30px)" }}
              >
                {e.title}
              </h3>
              <p className="mt-2 max-w-[560px] text-[15px] leading-[24px] text-[#575656] lg:text-[16px]">{e.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </AboutSplitSection>
  );
}
