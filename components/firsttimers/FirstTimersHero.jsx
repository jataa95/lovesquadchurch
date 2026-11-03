import Image from "next/image";
import Container from "@/components/ui/Container";
import SecondaryButton from "@/components/ui/buttons/SecondaryButton";
import { firstTimers } from "@/data/firstTimers";

// Centred hero, same pattern as the LoveSpots / Leaders pages.
export default function FirstTimersHero() {
  return (
    <section className="pt-[calc(var(--nav-h)+40px)] lg:pt-[calc(var(--nav-h)+56px)]">
      <Container>
        <div className="flex flex-col items-center text-center">
          <p
            className="heading-font font-bold uppercase leading-none tracking-[-0.035em]"
            style={{ fontSize: "clamp(24px, 3vw, 40px)" }}
          >
            <span className="text-[#ED4823]">FIRST</span>{" "}
            <span className="text-[#4A4A4A]">TIME?</span>
          </p>
          <h1
            className="heading-font font-bold uppercase leading-[0.82] tracking-[-0.055em] text-[#4A4A4A]"
            style={{ fontSize: "clamp(3.6rem, 13.9vw, 200px)" }}
          >
            WELCOME
          </h1>

          <div className="relative mt-6 h-[260px] w-full overflow-hidden bg-[#171515] sm:h-[340px] md:h-[380px] lg:mt-8 lg:h-[460px]">
            <Image
              src={firstTimers.photo}
              alt="LoveSquad Church worship"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1152px"
              className="object-cover"
            />
          </div>

          <div className="mt-8 flex max-w-[620px] flex-col items-center lg:mt-10">
            <p className="text-[15px] leading-[24px] text-[#5A5853] lg:text-[16px]">
              {firstTimers.intro}
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              <SecondaryButton href="#what-to-expect">WHAT TO EXPECT</SecondaryButton>
              <SecondaryButton href="#connect-card">TELL US ABOUT YOU</SecondaryButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
