import AboutSplitSection from "@/components/about/AboutSplitSection";
import NumberedList from "@/components/ui/NumberedList";
import { firstTimers } from "@/data/firstTimers";

// Same layout as Our Values: sticky heading + growing orange line.
export default function WhatToExpect() {
  return (
    <AboutSplitSection
      id="what-to-expect"
      icon="/images/firsttimers/what-to-expect-icon.svg"
      iconWidth={95}
      iconHeight={95}
      centerOnMobile
      heading={
        <>
          <span className="block">WHAT TO</span>
          <span className="block text-[#ED4823]">EXPECT</span>
        </>
      }
    >
      <NumberedList items={firstTimers.expect} />
    </AboutSplitSection>
  );
}
