import Image from "next/image";
import { loveSpots } from "@/data/lovespots";

export default function LoveSpotsImage() {
  return (
    <div className="relative my-4 h-[200px] w-full overflow-hidden bg-[#151515] sm:my-6 sm:h-[320px] md:my-8 md:h-[420px] lg:h-[480px]">
      <Image
        src={loveSpots.image}
        alt={loveSpots.heading || "LoveSpots"}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
    </div>
  );
}