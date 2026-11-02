"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { about } from "@/data/about";
import SecondaryButton from "@/components/ui/buttons/SecondaryButton";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

/*
 * Desktop About section: a centred column (heading + button, a large
 * centre picture, then the paragraph + anchor scripture) with black and
 * white photos scattered around it. Each scattered photo zooms in or out
 * and drifts as the page scrolls; the text reveals line by line.
 *
 * Positions were designed at 1440px wide: `left` and `width` scale with
 * the screen (%/vw, widths capped at their 1440px size so wider screens
 * don't push photos out of the section); `top` is in px.
 */

// Scattered photos (about.collage[1..7]). zoom: "in" grows, "out" shrinks.
const SCATTERED = [
  { left: "0%", top: 0, width: "min(30vw, 432px)", ratio: "3 / 2", zoom: "in", drift: -50 },
  { left: "80%", top: 30, width: "min(21vw, 302px)", ratio: "4 / 3", zoom: "out", drift: 40 },
  { left: "82%", top: 520, width: "min(18vw, 259px)", ratio: "3 / 4", zoom: "in", drift: -60 },
  { left: "3.5%", top: 640, width: "min(20vw, 288px)", ratio: "4 / 3", zoom: "out", drift: 50 },
  { left: "0%", top: 1080, width: "min(22vw, 317px)", ratio: "3 / 4", zoom: "in", drift: -40 },
  { left: "78%", top: 930, width: "min(21vw, 302px)", ratio: "4 / 3", zoom: "out", drift: 60 },
  // The 8th picture sits close to the paragraph.
  { left: "60%", top: 1235, width: "min(16vw, 230px)", ratio: "4 / 3", zoom: "in", drift: -30 },
];

const ZOOM = {
  in: [0.82, 1.08],
  out: [1.12, 0.88],
};

export default function AboutCollage() {
  const rootRef = useRef(null);
  const [centre, ...scattered] = about.collage;

  useGSAP(
    () => {
      const q = gsap.utils.selector(rootRef);
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        let cancelled = false;
        const splits = [];

        // Scattered photos: zoom in/out and drift while they cross the screen.
        q("[data-collage-photo]").forEach((el) => {
          const [from, to] = ZOOM[el.dataset.zoom];
          const drift = Number(el.dataset.drift);
          gsap.fromTo(
            el,
            { scale: from, y: -drift },
            {
              scale: to,
              y: drift,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            }
          );
        });

        // Centre picture: the photo zooms out inside its frame.
        gsap.fromTo(
          q("[data-collage-centre] img"),
          { scale: 1.3 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: q("[data-collage-centre]")[0],
              start: "top bottom",
              end: "bottom 30%",
              scrub: 1,
            },
          }
        );

        // Text: lines rise from their masks when reached, and go back
        // down when scrolled back above them.
        document.fonts.ready.then(() => {
          if (cancelled) return;
          q("[data-collage-text]").forEach((block) => {
            const lines = SplitText.create(
              block.querySelectorAll("[data-collage-lines]"),
              { type: "lines", mask: "lines" }
            );
            splits.push(lines);
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: block,
                  start: "top 82%",
                  toggleActions: "play none none reverse",
                },
              })
              .fromTo(
                lines.lines,
                { yPercent: 110 },
                { yPercent: 0, duration: 0.9, ease: "expo.out", stagger: 0.08 }
              )
              .fromTo(
                block.querySelectorAll("[data-collage-fade]"),
                { autoAlpha: 0, y: 20 },
                { autoAlpha: 1, y: 0, duration: 0.7, ease: "power3.out" },
                "-=0.5"
              );
          });
          ScrollTrigger.refresh();
        });

        return () => {
          cancelled = true;
          splits.forEach((s) => s.revert());
        };
      });

      return () => mm.revert();
    },
    { scope: rootRef }
  );

  return (
    <div ref={rootRef} className="relative h-[1520px] w-full">
      {/* Scattered photos */}
      {scattered.map((src, i) => {
        const p = SCATTERED[i];
        if (!p) return null;
        return (
          <div
            key={src}
            data-collage-photo
            data-zoom={p.zoom}
            data-drift={p.drift}
            className="absolute overflow-hidden bg-[#151515] will-change-transform"
            style={{
              left: p.left,
              top: p.top,
              width: p.width,
              aspectRatio: p.ratio,
            }}
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="30vw"
              className="object-cover grayscale"
            />
          </div>
        );
      })}

      {/* Centre column */}
      <div className="relative z-10 mx-auto flex w-[min(640px,44vw)] flex-col items-center pt-[260px] text-center">
        {/* 1. Heading + button */}
        <div data-collage-text className="flex flex-col items-center">
          <h2
            data-collage-lines
            className="heading-font text-[40px] font-black uppercase leading-[1.05] text-[#575656] xl:text-[48px]"
          >
            {about.heading.map((part, i) =>
              part.accent ? (
                <span key={i} className="text-[#ED4823]">
                  {part.text}
                </span>
              ) : (
                <span key={i}>{part.text}</span>
              )
            )}
          </h2>
          <div data-collage-fade className="mt-10">
            <SecondaryButton href="/about">{about.button}</SecondaryButton>
          </div>
        </div>

        {/* 2. Centre picture */}
        <div
          data-collage-centre
          className="relative mt-16 aspect-[16/11] w-full overflow-hidden bg-[#151515]"
        >
          <Image
            src={centre}
            alt="Worship at LoveSquad"
            fill
            sizes="(min-width: 1440px) 640px, 44vw"
            className="object-cover grayscale"
          />
        </div>

        {/* 3. Paragraph + anchor scripture */}
        <div data-collage-text className="mt-14 flex flex-col items-center">
          <p
            data-collage-lines
            className="max-w-[560px] text-[20px] leading-[1.6] text-[#575656]"
          >
            {about.description}
          </p>
          <p
            data-collage-fade
            className="mt-6 text-[16px] font-medium uppercase tracking-[0.08em] text-[#575656]"
          >
            {about.scripture}
          </p>
        </div>
      </div>
    </div>
  );
}
