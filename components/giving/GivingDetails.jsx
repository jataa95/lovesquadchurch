"use client";

import Image from "next/image";
import { useState } from "react";
import { Check, Copy } from "lucide-react";
import AboutSplitSection from "@/components/about/AboutSplitSection";
import { PrimaryButton } from "@/components/ui/buttons";
import { giving } from "@/data/giving";

export default function GivingDetails() {
  const [copied, setCopied] = useState(null);

  const copy = async (number, i) => {
    try {
      await navigator.clipboard.writeText(number);
      setCopied(i);
      setTimeout(() => setCopied(null), 1800);
    } catch {
      /* clipboard not available */
    }
  };

  return (
    <AboutSplitSection
      id="offering"
      tone="dark"
      divider={false}
      icon="/images/giving/giving-cream.svg"
      iconWidth={126}
      iconHeight={95}
      centerOnMobile
      heading={
        <>
          <span className="block">GIVING</span>
          <span className="block text-[#ED4823]">DETAILS</span>
        </>
      }
    >
      <div className="flex flex-col gap-5">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#171515]">
          <Image
            src="/images/gallery/gal5.jpg"
            alt="Giving at LoveSquad Church"
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
          />
        </div>
        {giving.accounts.map((a, i) => (
          <article key={i} className="flex flex-col gap-4 border border-[#3B3B3B] p-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="heading-font text-[12px] font-semibold uppercase tracking-[0.22em] text-[#ED4823] sm:text-[13px]">
                {a.label}
              </p>
              <p className="heading-font mt-2 font-bold leading-none tracking-[-0.02em]" style={{ fontSize: "clamp(26px, 3vw, 36px)" }}>
                {a.number}
              </p>
              <p className="mt-2 text-[15px] leading-[24px] text-[#F9E9D3]/80">
                {a.name} · {a.bank}
              </p>
            </div>
            <PrimaryButton onClick={() => copy(a.number, i)} icon={copied === i ? Check : Copy}>
              {copied === i ? "COPIED" : "COPY"}
            </PrimaryButton>
          </article>
        ))}
      </div>
    </AboutSplitSection>
  );
}
