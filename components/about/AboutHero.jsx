"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { PrimaryButton } from "@/components/ui/buttons";
import SpotlightPhoto from "@/components/ui/SpotlightPhoto";
import { footer } from "@/data/footer";

gsap.registerPlugin(SplitText, useGSAP);

const aboutLinks = [
  { label: "OUR VALUES", href: "#about_values" },
  { label: "OUR STATEMENT OF FAITH", href: "#statement-of-faith" },
  { label: "OUR VISION", href: "#about_vision-mission" },
];

/*
 * About hero: the footer/menu photo background with the mouse spotlight,
 * and a 3D "flip" reveal on load: WELCOME flips up letter by letter, then
 * the links, the description lines and the button flip into place.
 */
export default function AboutHero() {
  const rootRef = useRef(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(rootRef);
      const content = q("[data-hero-content]");
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(content, { autoAlpha: 1 });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        let cancelled = false;
        let tl;
        const splits = [];

        document.fonts.ready.then(() => {
          if (cancelled) return;
          const title = SplitText.create(q("[data-flip-title]"), { type: "chars" });
          const desc = SplitText.create(q("[data-flip-desc]"), {
            type: "lines",
            mask: "lines",
          });
          splits.push(title, desc);

          tl = gsap.timeline({ defaults: { ease: "expo.out" }, delay: 0.15 });
          tl.fromTo(
            title.chars,
            { rotateX: -100, yPercent: 40, autoAlpha: 0, transformOrigin: "50% 100% -40px" },
            { rotateX: 0, yPercent: 0, autoAlpha: 1, duration: 1.2, stagger: 0.06 }
          )
            .fromTo(
              q("[data-flip-link]"),
              { rotateX: -90, autoAlpha: 0, transformOrigin: "50% 100%" },
              { rotateX: 0, autoAlpha: 1, duration: 0.9, stagger: 0.1 },
              0.55
            )
            .fromTo(
              desc.lines,
              { rotateX: -80, yPercent: 100, transformOrigin: "50% 100%" },
              { rotateX: 0, yPercent: 0, duration: 0.9, stagger: 0.08 },
              0.8
            )
            .fromTo(
              q("[data-flip-cta]"),
              { rotateX: -90, autoAlpha: 0, transformOrigin: "50% 100%" },
              { rotateX: 0, autoAlpha: 1, duration: 0.8 },
              1.05
            );

          gsap.set(content, { autoAlpha: 1 });
        });

        return () => {
          cancelled = true;
          tl?.kill();
          splits.forEach((s) => s.revert());
        };
      });
      return () => mm.revert();
    },
    { scope: rootRef }
  );

  return (
    <section
      ref={rootRef}
      className="relative isolate flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-hidden bg-[#0E0E0E] px-6 pb-16 pt-[calc(var(--nav-h)+48px)] text-[#F4EBDC] sm:px-8 lg:px-10"
    >
      {/* Same photo + mouse spotlight as the footer and menu */}
      <SpotlightPhoto src={footer.photo} priority />

      {/* Hidden until the flip reveal has set its starting states */}
      <div
        data-hero-content
        className="invisible flex flex-col items-center [perspective:900px]"
      >
        <h1
          data-flip-title
          className="heading-font text-center text-[48px] font-bold uppercase leading-none tracking-[-0.06em] text-[#F4EBDC] sm:text-[100px] md:text-[135px] lg:text-[170px] xl:text-[200px]"
        >
          WELCOME
        </h1>

        <nav className="mt-6 flex max-w-[900px] flex-wrap items-center justify-center gap-x-4 gap-y-3 sm:mt-[20px] sm:gap-x-[40px] sm:gap-y-[20px] md:mt-[25px] md:gap-x-[60px] lg:mt-[60px] lg:gap-x-[90px]">
          {aboutLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              data-flip-link
              className="heading-font inline-block text-[15px] font-medium uppercase leading-tight tracking-[-0.02em] text-[#F4EBDC] transition-colors duration-300 hover:text-[#ED4823] sm:text-[20px] sm:leading-[24px] md:text-[26px] md:leading-[34px] lg:text-[32px] lg:leading-[40px]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p
          data-flip-desc
          className="mt-6 max-w-[330px] text-center text-[14px] leading-[22px] text-[#F4EBDC]/70 sm:mt-[40px] sm:max-w-[500px] sm:text-[17px] sm:leading-[26px] md:mt-[70px] md:max-w-[620px] md:text-[18px] md:leading-[28px] lg:mt-[80px] lg:max-w-[700px] lg:text-[20px] lg:leading-[30px]"
        >
          Condimentum Ultricies, Risus Massa Condimentum Quam, A Eleifend Dolor
          Elit Quis Orci. Condimentum Ultricies, Risus Massa Condimentum Quam, A
          Eleifend Dolor Elit Quis Orci.
        </p>

        <div data-flip-cta className="mt-6 sm:mt-[32px] md:mt-[40px]">
          <PrimaryButton href="/visit">PLAN YOUR VISIT</PrimaryButton>
        </div>
      </div>
    </section>
  );
}
