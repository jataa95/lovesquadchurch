"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import HeroDescription from "./HeroDescription";
import LatestMessageHeading from "./LatestMessageHeading";
import HeroVideo from "./HeroVideo";

export default function HeroBottom() {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  // Moves element down smoothly on scroll only when on mobile
  const y = useTransform(scrollYProgress, [0, 1], isMobile ? [-40, 0] : [0, 0]);

  return (
    <motion.section
      ref={ref}
      style={{ y }}
      className="mt-0 w-full transition-transform duration-75 ease-out"
    >
      <div
        className="
          grid
          w-full
          grid-cols-1
          gap-2

          md:grid-cols-2
          md:items-end
          md:gap-10

          lg:grid-cols-12
          lg:gap-x-12
        "
      >
        {/* LEFT COLUMN */}
        <div className="w-full md:col-span-1 lg:col-span-6">
          <HeroDescription />
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex w-full flex-col items-center text-center sm:items-end sm:text-right md:col-span-1 lg:col-span-6">
          <LatestMessageHeading />
          <div className="mt-2 w-full sm:mt-5">
            <HeroVideo />
          </div>
        </div>
      </div>
    </motion.section>
  );
}