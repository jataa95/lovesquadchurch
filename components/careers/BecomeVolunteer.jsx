import Image from "next/image";
import AboutSplitSection from "@/components/about/AboutSplitSection";
import NumberedList from "@/components/ui/NumberedList";
import { PrimaryButton } from "@/components/ui/buttons";
import { careers } from "@/data/careers";

export default function BecomeVolunteer() {
  const v = careers.volunteer;
  return (
    <AboutSplitSection
      id="volunteer"
      tone="dark"
      divider={false}
      icon="/images/careers/volunteer-icon.svg"
      iconWidth={95}
      iconHeight={95}
      centerOnMobile
      heading={
        <>
          <span className="block">BECOME A</span>
          <span className="block text-[#ED4823]">VOLUNTEER</span>
        </>
      }
    >
      <div className="flex flex-col gap-8">
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#171515]">
          <Image
            src={v.photo}
            alt="LoveSquad volunteers"
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
          />
        </div>
        <p className="max-w-[600px] text-[15px] leading-[24px] text-[#F9E9D3]/80 lg:text-[16px]">
          {v.intro}
        </p>
        <NumberedList items={v.teams} tone="dark" />
        <div>
          <PrimaryButton href="/contact">JOIN A TEAM</PrimaryButton>
        </div>
      </div>
    </AboutSplitSection>
  );
}
