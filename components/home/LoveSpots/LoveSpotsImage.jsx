import Image from "next/image";
import { loveSpots } from "@/data/lovespots";

export default function LoveSpotsImage() {
  // Safe path extraction: handles array or object data structures
  // and ensures a leading slash is present.
  const rawPath =
    (Array.isArray(loveSpots) ? loveSpots[0]?.image : loveSpots?.image) ||
    "/images/lovespot/lovespot-hero.jpg";

  const imageSrc = rawPath.startsWith("/") ? rawPath : `/${rawPath}`;

  return (
    <div className="relative -mt-4 mb-2 h-[280px] w-full overflow-hidden sm:-mt-6 sm:mb-3 sm:h-[360px] md:-mt-8 md:mb-4 md:h-[450px] lg:h-[560px]">
      <Image
        src={imageSrc}
        alt="LoveSpot"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
    </div>
  );
}
