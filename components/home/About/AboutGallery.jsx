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
    <div className="relative h-[320px] w-[420px] flex-shrink-0 overflow-hidden bg-[#151515] sm:h-[400px] sm:w-[540px] md:h-[480px] md:w-[640px] lg:h-[555px] lg:w-[720px]">
      <Image
        src={image}
        alt={`About Lovesquad ${index + 1}`}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 420px, (max-width: 1024px) 640px, 720px"
      />
    </div>
  );
}

export default function AboutGallery() {
  const validImages = aboutImages.filter(Boolean);

  return (
    /* Updated: Set py-2 sm:py-4 so top and bottom padding match equally */
    <section className="relative z-10 -mt-8 w-full bg-[#1A1A1A] py-2 sm:-mt-12 sm:py-4">
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
          animation: marqueeScroll 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="w-full overflow-hidden scrollbar-hide">
        <div className="animate-marquee flex gap-[12px] px-[20px] sm:gap-[16px] sm:px-[30px] md:gap-[20px] md:px-[40px] lg:px-[0px]">
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