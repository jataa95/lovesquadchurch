"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import AboutSplitSection from "@/components/about/AboutSplitSection";
import { SecondaryButton } from "@/components/ui/buttons";
import VisitDetail from "./VisitDetail";
import { visit } from "@/data/visit";

const text = "max-w-[640px] text-[15px] leading-[24px] text-[#575656] lg:text-[16px]";

export default function VisitInPerson() {
  const v = visit.inPerson;
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(v.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard not available */
    }
  };

  return (
    <AboutSplitSection
      id="in-person"
      icon="/images/visit/greeting.svg"
      iconWidth={96}
      iconHeight={80}
      centerOnMobile
      heading={
        <>
          <span className="block">WE AWAIT</span>
          <span className="block text-[#ED4823]">YOUR VISIT</span>
        </>
      }
    >
      <h3
        className="heading-font mb-6 font-bold uppercase leading-[0.9] tracking-[-0.02em] text-[#4A4A4A]"
        style={{ fontSize: "clamp(26px, 6vw, 40px)" }}
      >
        IN PERSON
      </h3>
      <VisitDetail label="MEETING TIMES" rows={v.times} />
      <VisitDetail label="LOCATION">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <p
            className="heading-font font-bold uppercase leading-[1.1] tracking-[-0.015em] text-[#4A4A4A]"
            style={{ fontSize: "clamp(18px, 2.4vw, 30px)" }}
          >
            {v.address}
          </p>
          <SecondaryButton onClick={copy} icon={copied ? Check : Copy} className="shrink-0">
            {copied ? "COPIED" : "COPY"}
          </SecondaryButton>
        </div>
      </VisitDetail>
      <VisitDetail label="IMPORTANT DETAILS">
        <p className={text}>{v.details}</p>
      </VisitDetail>
      <VisitDetail label="CHILDREN MINISTRY">
        <p className={text}>{v.children}</p>
      </VisitDetail>

      {/* Map: replace with a Google Maps embed when ready. */}
      <div className="mt-8 aspect-[16/9] w-full bg-[#171515]" aria-label="Map" />
      <div className="mt-6">
        <SecondaryButton href={v.mapsUrl} target="_blank" rel="noopener noreferrer">
          GET DIRECTIONS
        </SecondaryButton>
      </div>
    </AboutSplitSection>
  );
}
