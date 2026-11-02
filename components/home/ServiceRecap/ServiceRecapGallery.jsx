"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import Container from "@/components/ui/Container";
import { serviceRecap } from "@/data/serviceRecap";
import SecondaryButton from "@/components/ui/buttons/SecondaryButton";
import TertiaryButton from "@/components/ui/buttons/TertiaryButton";

const GALLERY_IMAGES = [
  "/images/service-recap/sr1.jpg",
  "/images/service-recap/sr2.jpg",
  "/images/service-recap/sr3.jpg",
  "/images/service-recap/sr4.jpg",
  "/images/service-recap/sr5.jpg",
  "/images/service-recap/sr6.jpg",
  "/images/service-recap/sr7.jpg",
  "/images/service-recap/sr8.jpg",
  "/images/service-recap/sr9.jpg",
  "/images/service-recap/sr10.jpg",
];

const COUNT = GALLERY_IMAGES.length;

// Height of the fixed navbar on desktop; the panel pins just below it.
const NAV_OFFSET = 94;
// How much page scroll (in vh) moves the gallery on by one picture.
const SCROLL_PER_SLIDE_VH = 35;
// Width of the main picture as a share of the pictures box.
const MAIN_WIDTH = 0.68;
// Gap between pictures, in px.
const SLIDE_GAP = 16;
// How much smaller the picture waiting to be revealed is.
const NEXT_SCALE = 0.8;

/* ------------------------------------------------------------------ */
/* Text block (heading, description, buttons)                          */
/* ------------------------------------------------------------------ */

function RecapText({ onSkip }) {
  return (
    <div className="flex w-full flex-col items-start lg:w-1/2">
      <h2 className="heading-font text-[28px] font-black uppercase leading-none sm:text-[36px] md:text-[40px] lg:text-[48px]">
        <span className="text-[#ED4823]">Service</span>{" "}
        <span className="text-[#575656]">Recap</span>
      </h2>

      <span className="mt-4 block text-[12px] font-semibold uppercase tracking-[0.1em] text-[#575656] sm:mt-5 sm:text-[13px] lg:mt-6">
        {serviceRecap.label}
      </span>

      <p className="mt-2 max-w-[460px] text-[14px] leading-[21px] text-[#575656] sm:text-[16px] sm:leading-[24px] lg:text-[18px] lg:leading-[27px]">
        {serviceRecap.description}
      </p>

      <div className="mt-6 flex flex-col items-start gap-4 sm:mt-8 lg:mt-10">
        <SecondaryButton href="/servicerecap">
          {serviceRecap.button}
        </SecondaryButton>

        <TertiaryButton href="#about-page" tone="dark" onClick={onSkip}>
          Skip
        </TertiaryButton>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Desktop: pictures slide sideways as the page scrolls                */
/* ------------------------------------------------------------------ */

function DesktopSlide({ src, index, position, slideWidth }) {
  // 0 when this picture is the main one, 1 when it is a full step away.
  const distance = useTransform(position, (p) =>
    Math.min(Math.abs(p - index), 1)
  );
  const scale = useTransform(distance, (d) => 1 - (1 - NEXT_SCALE) * d);
  const shade = useTransform(distance, (d) => 0.15 + 0.35 * d);
  // Upcoming pictures shrink towards their left edge, passed ones towards
  // their right edge, so each one stays tucked against the main picture.
  const origin = useTransform(position, (p) =>
    index >= p ? "0% 50%" : "100% 50%"
  );

  return (
    <motion.div
      className="relative h-full shrink-0 overflow-hidden bg-[#111]"
      style={{ width: slideWidth, scale, transformOrigin: origin }}
    >
      <Image
        src={src}
        alt={`Service recap photo ${index + 1}`}
        fill
        draggable={false}
        sizes="(min-width: 1280px) 420px, 34vw"
        className="pointer-events-none object-cover"
      />
      <motion.div
        className="pointer-events-none absolute inset-0 bg-black"
        style={{ opacity: shade }}
      />
    </motion.div>
  );
}

function DesktopGallery({ sectionRef, panelRef }) {
  const boxRef = useRef(null);
  const [boxWidth, setBoxWidth] = useState(0);
  const reduceMotion = useReducedMotion();

  // 0 → first picture is main, 1 → last picture is main.
  const progress = useMotionValue(0);
  const smooth = useSpring(progress, {
    stiffness: 120,
    damping: 26,
    mass: 0.35,
  });
  const driver = reduceMotion ? progress : smooth;

  const slideWidth = boxWidth * MAIN_WIDTH;
  const step = slideWidth + SLIDE_GAP;
  const position = useTransform(driver, (v) => v * (COUNT - 1));
  const x = useTransform(position, (p) => -p * step);

  // Keep the picture size in step with the box width.
  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    const observer = new ResizeObserver(([entry]) =>
      setBoxWidth(entry.contentRect.width)
    );
    observer.observe(box);
    return () => observer.disconnect();
  }, []);

  // Map the page scroll while the panel is pinned onto 0 → 1.
  useEffect(() => {
    const update = () => {
      const section = sectionRef.current;
      const panel = panelRef.current;
      if (!section || !panel) return;
      const travel = section.offsetHeight - panel.offsetHeight;
      if (travel <= 0) return;
      const moved = NAV_OFFSET - section.getBoundingClientRect().top;
      progress.set(Math.min(Math.max(moved / travel, 0), 1));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [progress, sectionRef, panelRef]);

  return (
    <div
      ref={boxRef}
      className="relative w-full overflow-hidden"
      style={{
        // Fit the pinned panel inside the screen under the navbar.
        height: `clamp(360px, calc(100dvh - ${NAV_OFFSET}px - 2 * var(--section-space)), 520px)`,
      }}
    >
      {boxWidth > 0 && (
        <motion.div
          className="flex h-full items-center"
          style={{ x, gap: SLIDE_GAP }}
        >
          {GALLERY_IMAGES.map((src, index) => (
            <DesktopSlide
              key={src}
              src={src}
              index={index}
              position={position}
              slideWidth={slideWidth}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Phone / tablet: swipeable row with the same big + small look        */
/* ------------------------------------------------------------------ */

function MobileGallery() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  const handleScroll = () => {
    const track = trackRef.current;
    const first = track?.firstElementChild;
    if (!track || !first) return;
    const slideStep = first.offsetWidth + SLIDE_GAP;
    setActive(
      Math.min(COUNT - 1, Math.max(0, Math.round(track.scrollLeft / slideStep)))
    );
  };

  const goTo = (index) => {
    const track = trackRef.current;
    const slide = track?.children[index];
    if (!track || !slide) return;
    track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: "smooth" });
  };

  return (
    <div className="w-full">
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="scrollbar-hide flex snap-x snap-mandatory overflow-x-auto"
        style={{ gap: SLIDE_GAP }}
      >
        {GALLERY_IMAGES.map((src, index) => {
          const isMain = index === active;
          return (
            <div
              key={src}
              className={`relative aspect-[4/5] w-[78%] shrink-0 snap-start overflow-hidden bg-[#111] transition-transform duration-500 ease-out sm:aspect-[4/3] ${
                isMain
                  ? "scale-100"
                  : index > active
                    ? "origin-left scale-[0.85]"
                    : "origin-right scale-[0.85]"
              }`}
            >
              <Image
                src={src}
                alt={`Service recap photo ${index + 1}`}
                fill
                sizes="(min-width: 640px) 60vw, 78vw"
                className="object-cover"
              />
              <div
                className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                  isMain ? "opacity-15" : "opacity-50"
                }`}
              />
            </div>
          );
        })}
      </div>

      {/* Slide indicators */}
      <div className="mt-4 flex gap-1">
        {GALLERY_IMAGES.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Show photo ${index + 1}`}
            className={`h-[5px] rounded-full transition-all duration-300 ${
              active === index ? "w-6 bg-[#ED4823]" : "w-1.5 bg-[#575656]/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

export default function ServiceRecapGallery() {
  const sectionRef = useRef(null);
  const panelRef = useRef(null);

  const handleSkip = (e) => {
    e.preventDefault();
    const about = document.getElementById("about-page");
    if (about) {
      about.scrollIntoView({ behavior: "smooth" });
    } else if (sectionRef.current) {
      const s = sectionRef.current;
      window.scrollTo({ top: s.offsetTop + s.offsetHeight, behavior: "smooth" });
    }
  };

  return (
    <div ref={sectionRef} id="service-recap" className="relative w-full bg-cream">
      {/* Pinned on desktop while the pictures slide; normal flow below lg */}
      <div
        ref={panelRef}
        className="section-py lg:sticky"
        style={{ top: NAV_OFFSET }}
      >
        <Container>
          <div className="flex flex-col gap-(--section-gap) lg:flex-row lg:items-center lg:gap-[60px]">
            <RecapText onSkip={handleSkip} />

            <div className="w-full lg:hidden">
              <MobileGallery />
            </div>

            <div className="hidden w-1/2 lg:block">
              <DesktopGallery sectionRef={sectionRef} panelRef={panelRef} />
            </div>
          </div>
        </Container>
      </div>

      {/* Extra scroll distance that drives the desktop slide (desktop only) */}
      <div
        aria-hidden="true"
        className="hidden lg:block"
        style={{ height: `${(COUNT - 1) * SCROLL_PER_SLIDE_VH}vh` }}
      />
    </div>
  );
}
