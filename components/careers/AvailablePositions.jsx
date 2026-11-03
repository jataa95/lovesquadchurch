import AboutSplitSection from "@/components/about/AboutSplitSection";
import NumberedList from "@/components/ui/NumberedList";
import { SecondaryButton } from "@/components/ui/buttons";
import { careers } from "@/data/careers";

export default function AvailablePositions() {
  return (
    <AboutSplitSection
      id="positions"
      icon="/images/careers/positions-icon.svg"
      iconWidth={95}
      iconHeight={95}
      centerOnMobile
      heading={
        <>
          <span className="block">AVAILABLE</span>
          <span className="block text-[#ED4823]">POSITIONS</span>
        </>
      }
    >
      <NumberedList items={careers.positions} />
      <div className="mt-8">
        <SecondaryButton href="/contact">APPLY</SecondaryButton>
      </div>
    </AboutSplitSection>
  );
}
