"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import TertiaryButton from "@/components/ui/buttons/TertiaryButton";

const images = [
  "/images/about/about1.jpg",
  "/images/about/about2.jpg",
  "/images/about/about3.jpg",
  "/images/about/about4.jpg",
  "/images/about/about5.jpg",
  "/images/about/about6.jpg",
  "/images/about/about7.jpg",
  "/images/about/about8.jpg",
  "/images/about/about9.jpg",
  "/images/about/about10.jpg",
  "/images/about/about11.jpg",
  "/images/about/about12.jpg",
  "/images/about/about13.jpg",
  "/images/about/about14.jpg",
  "/images/about/about15.jpg",
];

export default function AboutPictures() {
  const containerRef = useRef(null);
  const mobileListRef = useRef(null);
  const [showSkip, setShowSkip] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Track mobile scroll progress to show skip button while stacking is active
  useEffect(() => {
    const handleScroll = () => {
      if (!mobileListRef.current) return;
      const rect = mobileListRef.current.getBoundingClientRect();
      const scrolledDistance = -rect.top;
      // Show skip after the first 2 images and hide near the end of the stack sequence
      if (scrolledDistance > 300 && scrolledDistance < rect.height - 250) {
        setShowSkip(true);
      } else {
        setShowSkip(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax translation offsets for desktop columns
  const leftColumnY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const centerColumnY = useTransform(scrollYProgress, [0, 1], [-20, 50]);
  const rightColumnY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={containerRef} className="w-full bg-[#F5EBDD] px-[6px] py-[6px] relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="
          relative
          w-full
          border-[8px]
          border-[#ED4823]
          bg-[#1A1A1A]
          p-[10px]

          sm:border-[10px]
          sm:p-[12px]

          lg:border-[16px]
          lg:p-[16px]
          lg:overflow-hidden
          lg:h-[950px]
          xl:h-[1100px]
        "
      >
        {/* =================================
            DESKTOP / LARGE TABLET
        ================================== */}

        <div
          className="
            hidden
            lg:flex
            w-full
            items-start
            justify-between
            gap-[12px]
            xl:gap-[16px]
            relative
            h-full
          "
        >
          {/* LEFT COLUMN */}
          <motion.div 
            style={{ y: leftColumnY }}
            className="flex w-[30%] flex-col gap-[12px] xl:gap-[16px] relative z-10"
          >
            <ImageTile src={images[0]} alt="LoveSquad church" aspect="wide" delay={0.1} />
            <ImageTile src={images[1]} alt="LoveSquad church" aspect="wide" delay={0.2} />
            <ImageTile src={images[2]} alt="LoveSquad church" aspect="wide" delay={0.3} />
            <ImageTile src={images[9]} alt="LoveSquad church" aspect="wide" delay={0.4} />
            <ImageTile src={images[10]} alt="LoveSquad church" aspect="wide" delay={0.5} />
          </motion.div>

          {/* CENTER COLUMN */}
          <motion.div 
            style={{ y: centerColumnY }}
            className="flex w-[40%] flex-col gap-[12px] xl:gap-[16px] relative z-10"
          >
            <ImageTile src={images[3]} alt="LoveSquad church" aspect="center" delay={0.15} />
            <ImageTile src={images[4]} alt="LoveSquad church" aspect="center" delay={0.25} />
            <ImageTile src={images[5]} alt="LoveSquad church" aspect="center" delay={0.35} />
            <ImageTile src={images[11]} alt="LoveSquad church" aspect="center" delay={0.45} />
            <ImageTile src={images[12]} alt="LoveSquad church" aspect="center" delay={0.55} />
            <ImageTile src={images[15] || images[0]} alt="LoveSquad church" aspect="center" delay={0.65} />
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div 
            style={{ y: rightColumnY }}
            className="flex w-[30%] flex-col gap-[12px] xl:gap-[16px] relative z-10"
          >
            <ImageTile src={images[6]} alt="LoveSquad church" aspect="wide" delay={0.2} />
            <ImageTile src={images[7]} alt="LoveSquad church" aspect="wide" delay={0.3} />
            <ImageTile src={images[8]} alt="LoveSquad church" aspect="wide" delay={0.4} />
            <ImageTile src={images[13]} alt="LoveSquad church" aspect="wide" delay={0.5} />
            <ImageTile src={images[14]} alt="LoveSquad church" aspect="wide" delay={0.6} />
          </motion.div>
        </div>

        {/* =================================
            TABLET
        ================================== */}

        <div
          className="
            hidden
            sm:grid
            lg:hidden
            grid-cols-2
            gap-[12px]
          "
        >
          {images.map((image, index) => (
            <ImageTile
              key={image}
              src={image}
              alt={`LoveSquad church ${index + 1}`}
              aspect="tablet"
              delay={0}
              isStacked={false}
              stackIndex={index}
            />
          ))}
        </div>

        {/* =================================
            MOBILE
        ================================== */}

        <div
          ref={mobileListRef}
          className="
            flex
            flex-col
            gap-[8px]
            sm:hidden
            relative
          "
        >
          {images.map((image, index) => (
            <ImageTile
              key={image}
              src={image}
              alt={`LoveSquad church ${index + 1}`}
              aspect="mobile"
              delay={0}
              isStacked={true}
              stackIndex={index}
            />
          ))}
        </div>
      </motion.div>

      {/* FLOATING SKIP BUTTON */}
      <AnimatePresence>
        {showSkip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 bottom-12 z-50 flex justify-center pointer-events-none sm:hidden"
          >
            <div className="pointer-events-auto">
              <TertiaryButton href="#values">
                Skip
              </TertiaryButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* =================================
   IMAGE TILE WITH SCROLL ENTRY + HOVER
================================= */

function ImageTile({ src, alt, aspect = "wide", delay = 0, isStacked = false, stackIndex = 0 }) {
  const aspectClasses = {
    wide: "aspect-[16/10]",
    center: "aspect-[5/3]",
    tablet: "aspect-[4/3]",
    mobile: "aspect-[16/10]",
  };

  const stackedProps = isStacked ? {
    style: {
      position: "sticky",
      top: `${12 + stackIndex * 2}px`,
      zIndex: stackIndex + 1,
    }
  } : {};

  return (
    <motion.div
      {...stackedProps}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10px" }}
      transition={{ duration: 0.15, delay, ease: "easeOut" }}
      className={`
        relative
        w-full
        overflow-hidden
        bg-[#121212]
        transition-all
        duration-300
        hover:z-30
        ${aspectClasses[aspect]}
      `}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 639px) 100vw,(max-width: 1023px) 50vw,33vw"
        className="
          object-cover
          grayscale
          brightness-90
          contrast-125
          transition-all
          duration-500
          ease-out
          hover:grayscale-0
          hover:brightness-100
          hover:scale-105
        "
      />
    </motion.div>
  );
}