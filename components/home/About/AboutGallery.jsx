"use client";

import Image from "next/image";

const aboutImages = [
  "/images/about/about1.jpg",
  "/images/about/about2.jpg",
  "/images/about/about3.jpg",
  "/images/about/about4.jpg",
  "/images/about/about5.jpg",
  "/images/about/about6.jpg",
];

function AboutGalleryCard({ image, index }) {
  if (!image) return null;

  return (
    <div className="relative h-[360px] w-[85vw] flex-shrink-0 overflow-hidden bg-[#151515] sm:h-[480px] sm:w-[90vw] md:h-[600px] lg:h-[720px]">
      <Image
        src={image}
        alt={`About Lovesquad ${index + 1}`}
        fill
        className="object-cover"
        sizes="100vw"
        priority={index < 2}
      />
    </div>
  );
}

export default function AboutGallery() {
  const validImages = aboutImages.filter(Boolean);

  return (
    <section className="relative z-10 -mt-8 w-screen left-1/2 -translate-x-1/2 bg-[#1A1A1A] py-2 sm:-mt-12 sm:py-4 overflow-hidden">
      <style jsx>{`
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marqueeScroll 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="w-full overflow-hidden scrollbar-hide">
        <div className="animate-marquee flex gap-[12px] px-0 sm:gap-[16px] md:gap-[20px]">
          {/* First track copy */}
          {validImages.map((image, index) => (
            <AboutGalleryCard
              key={`original-${image}-${index}`}
              image={image}
              index={index}
            />
          ))}
          {/* Duplicate track copy for seamless continuous infinite marquee loop */}
          {validImages.map((image, index) => (
            <AboutGalleryCard
              key={`duplicate-${image}-${index}`}
              image={image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}