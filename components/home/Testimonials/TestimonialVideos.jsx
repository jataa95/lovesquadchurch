"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Play } from "lucide-react";
import { testimonials } from "@/data/testimonials";

gsap.registerPlugin(useGSAP);

const STORIES = testimonials.videos ?? [];

/*
 * Featured video testimony with a list of other stories beside it.
 *
 * - The featured player shows the poster with a silent preview loop and a
 *   play button. Pressing play restarts the video with sound and controls.
 * - Picking another story wipes it in over the current one.
 * - Desktop: list on the right. Phones/tablets: the list is replaced by
 *   swiping on the player and pill indicators under it.
 */
export default function TestimonialVideos() {
  const rootRef = useRef(null);
  const stageRef = useRef(null);
  const videoRef = useRef(null);
  const dragX = useRef(null);
  const busy = useRef(false);

  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [inView, setInView] = useState(false);

  const story = STORIES[active];

  // Silent preview only while the section is on screen.
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), {
      threshold: 0.3,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || playing) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    v.muted = true;
    if (inView && !reduce) v.play().catch(() => {});
    else v.pause();
  }, [inView, playing, active]);

  const play = () => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.muted = false;
    v.controls = true;
    v.play().catch(() => {});
    setPlaying(true);
  };

  // Kill any running switch animation when the section unmounts.
  useGSAP(() => {}, { scope: rootRef });

  const goTo = (index) => {
    const next = (index + STORIES.length) % STORIES.length;
    if (next === active || busy.current) return;
    busy.current = true;
    const stage = stageRef.current;
    const dir = next > active ? 1 : -1;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Cover the stage, swap the story underneath, then uncover.
    const cover = stage.querySelector("[data-story-cover]");
    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      onComplete: () => {
        busy.current = false;
      },
    });
    if (reduce) {
      tl.to(stage, { autoAlpha: 0, duration: 0.2 })
        .add(() => {
          setPlaying(false);
          setActive(next);
        })
        .to(stage, { autoAlpha: 1, duration: 0.2 });
      return;
    }
    tl.fromTo(
      cover,
      { clipPath: dir > 0 ? "inset(0% 0% 0% 100%)" : "inset(0% 100% 0% 0%)" },
      { clipPath: "inset(0% 0% 0% 0%)", duration: 0.45 },
    )
      .add(() => {
        setPlaying(false);
        setActive(next);
      })
      .fromTo(
        stage.querySelector("[data-story-media]"),
        { scale: 1.08 },
        { scale: 1, duration: 0.9, ease: "power3.out" },
        "+=0.05",
      )
      .to(
        cover,
        {
          clipPath: dir > 0 ? "inset(0% 100% 0% 0%)" : "inset(0% 0% 0% 100%)",
          duration: 0.5,
        },
        "<",
      )
      .fromTo(
        stage.querySelectorAll("[data-story-caption] > *"),
        { autoAlpha: 0, y: 16 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.06,
          ease: "power3.out",
        },
        "<0.15",
      );
  };

  // Swipe (touch) / drag (mouse) on the player for previous/next.
  const onPointerDown = (e) => {
    if (playing || e.target.closest("button")) return;
    dragX.current = e.clientX;
  };
  const onPointerUp = (e) => {
    if (dragX.current == null) return;
    const dx = e.clientX - dragX.current;
    dragX.current = null;
    if (Math.abs(dx) < 40) return;
    goTo(active + (dx < 0 ? 1 : -1));
  };

  if (!story) return null;

  return (
    <div
      ref={rootRef}
      className="grid w-full grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch lg:gap-10"
    >
      {/* ===================== Featured player ===================== */}
      <div className="flex flex-col lg:col-span-7">
        <div
          ref={stageRef}
          className="relative aspect-[4/5] w-full touch-pan-y sm:aspect-video lg:aspect-auto lg:min-h-[480px] lg:flex-1 overflow-hidden bg-[#151515] select-none"
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={() => (dragX.current = null)}
        >
          <div data-story-media className="absolute inset-0">
            <video
              key={story.id}
              ref={videoRef}
              src={story.video}
              poster={story.poster}
              muted
              loop={!playing}
              playsInline
              preload="metadata"
              onEnded={() => setPlaying(false)}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          {/* Caption + play button (hidden while the video plays) */}
          {!playing && (
            <>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />

              <button
                type="button"
                onClick={play}
                aria-label={`Play ${story.name}'s testimony`}
                className="group absolute left-1/2 top-1/2 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#ED4823] text-[#F5EBDD] shadow-[0_10px_30px_rgba(237,72,35,0.35)] transition-transform duration-300 hover:scale-110 sm:h-20 sm:w-20"
              >
                <span className="absolute inset-0 animate-ping rounded-full bg-[#ED4823]/40 motion-reduce:hidden" />
                <Play className="relative ml-1 h-6 w-6 fill-current sm:h-7 sm:w-7" />
              </button>

              <div
                data-story-caption
                className="pointer-events-none absolute inset-x-0 bottom-0 z-10 p-5 sm:p-8"
              >
                <p className="heading-font text-[11px] uppercase tracking-[0.25em] text-[#ED4823] sm:text-[12px]">
                  Testimony · {story.duration}
                </p>
                <p className="mt-3 max-w-[520px] text-[18px] leading-[1.35] text-[#F5EBDD] sm:text-[24px]">
                  “{story.quote}”
                </p>
                <p className="heading-font mt-4 text-[14px] font-bold uppercase tracking-wide text-[#F5EBDD] sm:text-[16px]">
                  {story.name}
                  <span className="ml-2 font-normal normal-case tracking-normal text-[#F5EBDD]/60">
                    {story.detail}
                  </span>
                </p>
              </div>
            </>
          )}

          {/* Orange cover used by the switch transition */}
          <div
            data-story-cover
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-20 bg-[#ED4823]"
            style={{ clipPath: "inset(0% 100% 0% 0%)" }}
          />
        </div>

        {/* Phones/tablets: pill indicators, same as the other sliders */}
        <div className="mt-4 flex justify-center gap-1 lg:hidden">
          {STORIES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Show ${s.name}'s testimony`}
              aria-current={i === active}
              className={`h-[5px] rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-[#ED4823]" : "w-1.5 bg-[#F4EBDC]/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ===================== Story list (desktop) ===================== */}
      <ul className="hidden flex-col justify-between gap-3 lg:col-span-5 lg:flex">
        {STORIES.map((s, i) => {
          const isActive = i === active;
          return (
            <li key={s.id} className="flex-1">
              <button
                type="button"
                onClick={() => goTo(i)}
                aria-current={isActive}
                className={`group flex h-full w-full items-center gap-5 border p-3 text-left transition-colors duration-300 ${
                  isActive
                    ? "border-[#ED4823]/60 bg-[#F5EBDD]/[0.04]"
                    : "border-[#F5EBDD]/10 hover:border-[#F5EBDD]/30"
                }`}
              >
                <span className="relative aspect-[4/3] w-[120px] shrink-0 overflow-hidden bg-[#151515] xl:w-[140px]">
                  <Image
                    src={s.poster}
                    alt=""
                    fill
                    sizes="140px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute bottom-1.5 right-1.5 bg-black/70 px-1.5 py-0.5 text-[10px] tabular-nums text-[#F5EBDD]">
                    {s.duration}
                  </span>
                </span>

                <span className="min-w-0 flex-1">
                  <span
                    className={`heading-font block text-[10px] uppercase tracking-[0.25em] transition-colors ${
                      isActive ? "text-[#ED4823]" : "text-[#F5EBDD]/40"
                    }`}
                  >
                    {isActive
                      ? "Now showing"
                      : `Story ${String(i + 1).padStart(2, "0")}`}
                  </span>
                  <span className="heading-font mt-1 block text-[16px] font-bold uppercase text-[#F5EBDD] xl:text-[18px]">
                    {s.name}
                  </span>
                  <span className="mt-1 block truncate text-[13px] text-[#F5EBDD]/60">
                    “{s.quote}”
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
