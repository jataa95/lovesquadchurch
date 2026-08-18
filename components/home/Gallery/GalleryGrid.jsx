"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import TertiaryButton from "@/components/ui/buttons/TertiaryButton";
import { galleryImages } from "@/data/gallery";

export default function GalleryGrid() {
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
      // Show skip after the first few items and hide near the end of the stack sequence
      if (scrolledDistance > 300 && scrolledDistance < rect.height - 250) {
        setShowSkip(true);
      } else {
        setShowSkip(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Precise scroll handler ensuring it aligns cleanly to the top of the next section
  const handleSkipClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const targetElement = document.getElementById("homepage-bottom");
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
      history.pushState(null, null, "#homepage-bottom");
    }
  };

  // Parallax translation offsets for desktop columns
  const leftColumnY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const centerColumnY = useTransform(scrollYProgress, [0, 1], [-20, 50]);
  const rightColumnY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={containerRef} id="gallery" className="w-full bg-[#242323] px-[6px] py-[6px] relative mt-[24px] sm:mt-[28px]">
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
          {/* LEFT COLUMN (Indices 0 - 4) */}
          <motion.div 
            style={{ y: leftColumnY }}
            className="flex w-[30%] flex-col gap-[12px] xl:gap-[16px] relative z-10"
          >
            <ImageTile src={galleryImages[0]?.src} alt={galleryImages[0]?.alt || "Gallery image"} aspect="wide" delay={0.1} />
            <ImageTile src={galleryImages[1]?.src} alt={galleryImages[1]?.alt || "Gallery image"} aspect="wide" delay={0.2} />
            <ImageTile src={galleryImages[2]?.src} alt={galleryImages[2]?.alt || "Gallery image"} aspect="wide" delay={0.3} />
            <ImageTile src={galleryImages[3]?.src} alt={galleryImages[3]?.alt || "Gallery image"} aspect="wide" delay={0.4} />
            <ImageTile src={galleryImages[4]?.src} alt={galleryImages[4]?.alt || "Gallery image"} aspect="wide" delay={0.5} />
          </motion.div>

          {/* CENTER COLUMN (Indices 5 - 9) */}
          <motion.div 
            style={{ y: centerColumnY }}
            className="flex w-[40%] flex-col gap-[12px] xl:gap-[16px] relative z-10"
          >
            <ImageTile src={galleryImages[5]?.src} alt={galleryImages[5]?.alt || "Gallery image"} aspect="center" delay={0.15} />
            <ImageTile src={galleryImages[6]?.src} alt={galleryImages[6]?.alt || "Gallery image"} aspect="center" delay={0.25} />
            <ImageTile src={galleryImages[7]?.src} alt={galleryImages[7]?.alt || "Gallery image"} aspect="center" delay={0.35} />
            <ImageTile src={galleryImages[8]?.src} alt={galleryImages[8]?.alt || "Gallery image"} aspect="center" delay={0.45} />
            <ImageTile src={galleryImages[9]?.src} alt={galleryImages[9]?.alt || "Gallery image"} aspect="center" delay={0.55} />
          </motion.div>

          {/* RIGHT COLUMN (Indices 10 - 14) */}
          <motion.div 
            style={{ y: rightColumnY }}
            className="flex w-[30%] flex-col gap-[12px] xl:gap-[16px] relative z-10"
          >
            <ImageTile src={galleryImages[10]?.src} alt={galleryImages[10]?.alt || "Gallery image"} aspect="wide" delay={0.2} />
            <ImageTile src={galleryImages[11]?.src} alt={galleryImages[11]?.alt || "Gallery image"} aspect="wide" delay={0.3} />
            <ImageTile src={galleryImages[12]?.src} alt={galleryImages[12]?.alt || "Gallery image"} aspect="wide" delay={0.4} />
            <ImageTile src={galleryImages[13]?.src} alt={galleryImages[13]?.alt || "Gallery image"} aspect="wide" delay={0.5} />
            <ImageTile src={galleryImages[14]?.src} alt={galleryImages[14]?.alt || "Gallery image"} aspect="wide" delay={0.6} />
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
          {galleryImages.map((image, index) => (
            <ImageTile
              key={image?.src || index}
              src={image?.src}
              alt={image?.alt || `Gallery image ${index + 1}`}
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
          {galleryImages.map((image, index) => (
            <ImageTile
              key={image?.src || index}
              src={image?.src}
              alt={image?.alt || `Gallery image ${index + 1}`}
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
            className="fixed inset-x-0 bottom-20 z-50 flex justify-center pointer-events-none sm:hidden"
          >
            <div 
              className="pointer-events-auto cursor-pointer"
              onClick={handleSkipClick}
            >
              <TertiaryButton href="#homepage-bottom">
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
  if (!src) return null;

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
          transition-all
          duration-500
          ease-out
          hover:scale-105
        "
      />
    </motion.div>
  );
}