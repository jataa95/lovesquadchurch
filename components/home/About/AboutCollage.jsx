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
 * as the page scrolls, and everything moves with parallax: photos at
 * different speeds, the text blocks slower, so the layers separate. The
 * text also reveals line by line.
 *
 * Positions were designed at 1440px wide: `left` and `width` scale with
 * the screen (%/vw, widths capped at their 1440px size so wider screens
 * don't push photos out of the section); `top` is in px.
 */

// Scattered photos (about.collage[1..6]). zoom: "in" grows, "out" shrinks.
// speed: how far (px) the photo travels up while the section scrolls by.
// Bigger = feels closer and faster; mixed speeds give the parallax depth.
const SCATTERED = [
  {
    left: "0%",
    top: 0,
    width: "min(27vw, 389px)",
    ratio: "3 / 2",
    zoom: "in",
    speed: 300,
  },
  {
    left: "80%",
    top: 30,
    width: "min(21vw, 302px)",
    ratio: "4 / 3",
    zoom: "out",
    speed: 200,
  },
  {
    left: "82%",
    top: 520,
    width: "min(18vw, 259px)",
    ratio: "3 / 4",
    zoom: "in",
    speed: 420,
  },
  {
    left: "3.5%",
    top: 640,
    width: "min(20vw, 288px)",
    ratio: "4 / 3",
    zoom: "out",
    speed: 260,
  },
  {
    left: "0%",
    top: 1080,
    width: "min(22vw, 317px)",
    ratio: "3 / 4",
    zoom: "in",
    speed: 340,
  },
  {
    left: "78%",
    top: 900,
    width: "min(21vw, 302px)",
    ratio: "4 / 3",
    zoom: "out",
    speed: 300,
  },
];

const ZOOM = {
  in: [0.82, 1.08],
  out: [1.12, 0.88],
};

export default function AboutCollage() {
  const rootRef = useRef(null);
  const [centre, ...rest] = about.collage;
  const scattered = rest.slice(0, SCATTERED.length);
  // The last photo sits in the column, right under the paragraph.
  const closing = rest[SCATTERED.length];

  useGSAP(
    () => {
      const q = gsap.utils.selector(rootRef);
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        let cancelled = false;
        const splits = [];

        // Scattered photos: zoom in/out while crossing the screen, plus
        // parallax (each moves up at its own speed over the section).
        q("[data-collage-photo]").forEach((el) => {
          const [from, to] = ZOOM[el.dataset.zoom];
          gsap.fromTo(
            el,
            { scale: from },
            {
              scale: to,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            },
          );
        });

        // Two vertical lines grow from 0 to the section's full height as
        // it scrolls through, and shrink back when scrolling up.
        gsap.fromTo(
          q("[data-collage-line]"),
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: rootRef.current,
              start: "top 75%",
              end: "bottom 75%",
              scrub: 1,
            },
          }
        );

        // Parallax: photos and text blocks move up at different speeds
        // while the section scrolls past.
        q("[data-parallax]").forEach((el) => {
          const speed = Number(el.dataset.parallax);
          gsap.fromTo(
            el,
            { y: speed },
            {
              y: -speed,
              ease: "none",
              scrollTrigger: {
                trigger: rootRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2,
              },
            },
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
          },
        );

        // Text: lines rise from their masks when reached, and go back
        // down when scrolled back above them.
        document.fonts.ready.then(() => {
          if (cancelled) return;
          q("[data-collage-text]").forEach((block) => {
            const lines = SplitText.create(
              block.querySelectorAll("[data-collage-lines]"),
              { type: "lines", mask: "lines" },
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
                { yPercent: 0, duration: 0.9, ease: "expo.out", stagger: 0.08 },
              )
              .fromTo(
                block.querySelectorAll("[data-collage-fade]"),
                { autoAlpha: 0, y: 20 },
                { autoAlpha: 1, y: 0, duration: 0.7, ease: "power3.out" },
                "-=0.5",
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
    { scope: rootRef },
  );

  return (
    <div ref={rootRef} className="relative w-full">
      {/* Two vertical lines, far apart, behind the photos */}
      {/* Left line grows down from the top, right line grows up from
          the bottom. */}
      <span
        data-collage-line
        aria-hidden="true"
        className="pointer-events-none absolute top-0 bottom-0 left-[6%] w-px origin-top bg-[#ED4823]"
      />
      <span
        data-collage-line
        aria-hidden="true"
        className="pointer-events-none absolute top-0 bottom-0 right-[6%] w-px origin-bottom bg-[#ED4823]"
      />

      {/* Scattered photos */}
      {scattered.map((src, i) => {
        const p = SCATTERED[i];
        if (!p) return null;
        return (
          <div
            key={src}
            data-parallax={p.speed}
            className="absolute will-change-transform"
            style={{
              left: p.left,
              top: p.top,
              width: p.width,
              aspectRatio: p.ratio,
            }}
          >
            <div
              data-collage-photo
              data-zoom={p.zoom}
              className="relative h-full w-full overflow-hidden bg-[#171515] will-change-transform"
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="30vw"
                className="object-cover grayscale"
              />
            </div>
          </div>
        );
      })}

      {/* Centre column */}
      <div className="relative z-10 mx-auto flex w-[min(640px,44vw)] flex-col items-center pt-0 text-center">
        {/* 1. The heading, the same heading again, then the button. Light
            parallax so the first heading stays level with the top of the
            vertical lines as the section arrives. */}
        <div data-parallax="40" className="-mt-4 will-change-transform">
          <div data-collage-text className="flex flex-col items-center">
            <h2
              data-collage-lines
              className="heading-font text-[26px] font-bold uppercase leading-[1.05] tracking-[-0.03em] text-[#4A4A4A] sm:text-[34px] lg:text-[42px] xl:text-[48px]"
            >
              {about.heading.map((part, i) =>
                part.accent ? (
                  <span key={i} className="text-[#ED4823]">
                    {part.text}
                  </span>
                ) : (
                  <span key={i}>{part.text}</span>
                ),
              )}
            </h2>
            <p
              data-collage-lines
              aria-hidden="true"
              className="mt-8 heading-font text-[40px] font-black uppercase leading-[1.05] text-[#575656] xl:text-[48px]"
            >
              {about.heading.map((part, i) =>
                part.accent ? (
                  <span key={i} className="text-[#ED4823]">
                    {part.text}
                  </span>
                ) : (
                  <span key={i}>{part.text}</span>
                ),
              )}
            </p>
            <div data-collage-fade className="mt-10">
              <SecondaryButton href="/about">{about.button}</SecondaryButton>
            </div>
          </div>
        </div>

        {/* 2. Centre picture */}
        <div
          data-parallax="80"
          data-collage-centre
          className="relative mt-16 aspect-[16/11] w-full overflow-hidden bg-[#171515] will-change-transform"
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
        <div data-parallax="190" className="mt-14 will-change-transform">
          <div data-collage-text className="flex flex-col items-center">
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

        {/* 4. The 8th picture, same size as the centre one, right under
            the paragraph and offset to the right */}
        {closing && (
          <div
            data-parallax="40"
            className="relative left-[36%] mt-12 aspect-[16/11] w-full will-change-transform"
          >
            <div
              data-collage-photo
              data-zoom="in"
              className="relative h-full w-full overflow-hidden bg-[#171515] will-change-transform"
            >
              <Image
                src={closing}
                alt=""
                fill
                sizes="(min-width: 1440px) 640px, 44vw"
                className="object-cover grayscale"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
