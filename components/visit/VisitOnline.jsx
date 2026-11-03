import Image from "next/image";
import AboutSplitSection from "@/components/about/AboutSplitSection";
import { PrimaryButton } from "@/components/ui/buttons";
import VisitDetail from "./VisitDetail";
import { visit } from "@/data/visit";

export default function VisitOnline() {
  const v = visit.online;
  return (
    <AboutSplitSection
      id="online"
      tone="dark"
      divider={false}
      icon="/images/visit/online-icon-cream.svg"
      iconWidth={95}
      iconHeight={95}
      centerOnMobile
      heading={
        <>
          <span className="block">JOIN US</span>
          <span className="block text-[#ED4823]">ONLINE</span>
        </>
      }
    >
      <div className="relative mb-8 aspect-[16/9] w-full overflow-hidden bg-[#171515]">
        <Image
          src={v.photo}
          alt="LoveSquad Church online"
          fill
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover"
        />
      </div>
      <VisitDetail tone="dark" label="GENERAL PRAYERS" rows={v.prayers} />
      <VisitDetail tone="dark" label="LOVESPOT" rows={v.loveSpots} />
      <VisitDetail tone="dark" label="IMPORTANT DETAILS">
        <p className="max-w-[640px] text-[15px] leading-[24px] text-[#F9E9D3]/80 lg:text-[16px]">{v.details}</p>
      </VisitDetail>
      <div className="mt-8">
        <PrimaryButton href="/lovespot">JOIN A LOVESPOT</PrimaryButton>
      </div>
    </AboutSplitSection>
  );
}
