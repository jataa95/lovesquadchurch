"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import SecondaryButton from "@/components/ui/buttons/SecondaryButton";

/*
 * LoveSpots hero: everything centred. Top padding clears the fixed navbar
 * with room to breathe; the bottom uses the site's section spacing so the
 * gap to the next section matches the other pages.
 */
export default function LoveSpotHero() {
  return (
    <section
      id="lovespot"
      className="relative w-full overflow-hidden bg-cream pt-[calc(var(--nav-h)+40px)] pb-(--section-space) lg:pt-[calc(var(--nav-h)+56px)]"
    >
      <Container>
        <div className="flex flex-col items-center text-center">
          {/* Title */}
          <div
            className="heading-font font-bold uppercase leading-none tracking-[-0.035em]"
            style={{ fontSize: "clamp(24px, 3vw, 40px)" }}
          >
            <span className="text-[#ED4823]">LOVESQUAD</span>{" "}
            <span className="text-[#4A4A4A]">IN</span>
          </div>
          <h1
            className="heading-font font-bold uppercase leading-[0.82] tracking-[-0.055em] text-[#4A4A4A]"
            style={{ fontSize: "clamp(4rem, 13.9vw, 200px)" }}
          >
            LOVESPOTS
          </h1>

          {/* Image */}
          <div className="relative mt-6 h-[260px] w-full overflow-hidden bg-[#171515] sm:h-[340px] md:h-[380px] lg:mt-8 lg:h-[460px]">
            <Image
              src="/images/lovespot/lovespot-hero.jpg"
              alt="LoveSpot"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1152px"
            />
          </div>

          {/* Description */}
          <div className="mt-8 flex max-w-[620px] flex-col items-center lg:mt-10">
            <h2
              className="heading-font font-bold uppercase leading-none tracking-[-0.02em] text-[#4A4A4A]"
              style={{ fontSize: "clamp(20px, 2vw, 26px)" }}
            >
              LOREM IPSUM
            </h2>
            <p className="mt-3 text-[14px] leading-[22px] text-[#5A5853] sm:text-[15px] lg:text-[16px] lg:leading-[24px]">
              Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa
              Condimentum Quam, A Eleifend Dolor Elit Quis Orci.
            </p>
            <div className="mt-5">
              <SecondaryButton href="#what-is-lovespot">JOIN A LOVESPOT</SecondaryButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
