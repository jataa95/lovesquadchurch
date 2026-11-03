"use client";

import Image from "next/image";
import { PrimaryButton } from "@/components/ui/buttons";
import AboutSplitSection from "./AboutSplitSection";

export default function AboutPastor() {
  return (
    <AboutSplitSection
      id="about_leaders"
      tone="dark"
      divider={false}
      heading={
        <>
          <span className="block">OUR</span>
          <span className="block text-[#ED4823]">LEADERS</span>
        </>
      }
    >
      <div className="flex flex-col gap-8">
        {/* Description */}
        <div className="w-full border border-[#3A3A3A] p-5 sm:p-6">
          <p className="text-[13px] leading-[1.6] sm:text-[14px] lg:text-[15px]">
            Lorem Ipsum Adipiscing Elit. Proin Tempor Ligula Euismod Nibh
            Facilisis Molestie Non Vitae Dolor. Cras Auctor Venenatis Sem,
            Ultricies Rutrum Est Ultricies Vel. Proin Sit Amet Neque Nec Risus
            Tincidunt Ultricies In Quis Lorem.
          </p>
          <p className="mt-3 text-[13px] leading-[1.6] sm:text-[14px] lg:text-[15px]">
            Lorem Ipsum Adipiscing Elit. Proin Tempor Ligula Euismod Nibh
            Facilisis Molestie Non Vitae Dolor. Cras Auctor Venenatis Sem,
            Ultricies Rutrum Est Ultricies Vel. Proin Sit Amet Neque Nec Risus
            Tincidunt Ultricies In Quis Lorem.
          </p>
          <p className="mt-3 text-[13px] leading-[1.6] sm:text-[14px] lg:text-[15px]">
            Cras Auctor Venenatis Sem, Ultricies Rutrum Est Ultricies Vel. Proin
            Sit Amet Neque Nec Risus Tincidunt Ultricies In Quis Lorem.
          </p>
          <div className="mt-5">
            <PrimaryButton href="/pastorkay">MORE INFO</PrimaryButton>
          </div>
        </div>

        {/* Photo */}
        <div className="relative aspect-[4/5] w-full max-w-[520px] overflow-hidden bg-[#171515]">
          <Image
            src="/images/about/pastor.jpg"
            alt="LoveSquad leaders"
            fill
            sizes="(max-width: 1024px) 100vw, 520px"
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </AboutSplitSection>
  );
}
