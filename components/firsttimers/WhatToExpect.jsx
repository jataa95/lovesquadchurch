import AboutSplitSection from "@/components/about/AboutSplitSection";
import { firstTimers } from "@/data/firstTimers";

// Same layout as Our Values: sticky heading + growing orange line.
export default function WhatToExpect() {
  return (
    <AboutSplitSection
      id="what-to-expect"
      icon="/images/lovespot/lovespot-icon.svg"
      iconWidth={135}
      iconHeight={95}
      heading={
        <>
          <span className="block">WHAT TO</span>
          <span className="block text-[#ED4823]">EXPECT</span>
        </>
      }
    >
      <ol className="flex flex-col">
        {firstTimers.expect.map((step, i) => (
          <li
            key={step.title}
            className={`py-6 first:pt-0 last:pb-0 ${
              i !== firstTimers.expect.length - 1 ? "border-b border-[#9B9B9B]" : ""
            }`}
          >
            <div className="flex items-start gap-3">
              <span className="heading-font pt-1 text-[12px] font-bold leading-none sm:text-[14px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                className="heading-font font-bold leading-[0.9] tracking-[-0.02em]"
                style={{ fontSize: "clamp(26px, 6vw, 40px)" }}
              >
                {step.title}
              </h3>
            </div>
            <p className="mt-3 max-w-[600px] text-[15px] leading-[24px] text-[#555555] lg:text-[16px]">
              {step.text}
            </p>
          </li>
        ))}
      </ol>
    </AboutSplitSection>
  );
}
