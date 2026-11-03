import AboutSplitSection from "@/components/about/AboutSplitSection";
import { giving } from "@/data/giving";

export default function GivingBeliefs() {
  return (
    <AboutSplitSection
      id="giving-belief"
      icon="/images/giving/belief.svg"
      iconWidth={84}
      iconHeight={95}
      centerOnMobile
      heading={
        <>
          <span className="block">WHAT WE BELIEVE</span>
          <span className="block text-[#ED4823]">GIVING IS</span>
        </>
      }
    >
      <p className="text-[18px] font-medium leading-[28px] text-[#4A4A4A] lg:text-[20px] lg:leading-[30px]">
        {giving.belief.lead}
      </p>
      <div className="mt-6 flex flex-col gap-4">
        {giving.belief.paragraphs.map((p, i) => (
          <p key={i} className="max-w-[640px] text-[15px] leading-[24px] text-[#575656] lg:text-[16px]">
            {p}
          </p>
        ))}
      </div>
    </AboutSplitSection>
  );
}
