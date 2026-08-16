import Image from "next/image";
import { Play } from "lucide-react";

export default function HeroVideo() {
  return (
    <div
      className="
        relative
        aspect-[444/211]
        w-full
        max-w-[444px]
        overflow-hidden
        rounded-[20px]
        bg-[#1A1A1A]
        shadow-xl

        sm:rounded-[22px]
        lg:rounded-[24px]
      "
    >
      {/* Thumbnail */}
      <Image
        src="/images/hero/latest-message.jpg"
        alt="Latest Message"
        fill
        priority
        sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw,444px"
        className="
          object-cover
          transition-transform
          duration-500
          hover:scale-105
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Play Button */}
      <button
        type="button"
        aria-label="Play latest message"
        className="
          absolute
          left-1/2
          top-1/2
          flex
          h-12
          w-12
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          bg-[#F04A23]
          shadow-lg
          transition-all
          duration-300
          hover:scale-110
          hover:bg-[#ff5d33]

          sm:h-14
          sm:w-14

          lg:h-16
          lg:w-16
        "
      >
        <Play
          size={20}
          fill="white"
          className="ml-[2px] text-white sm:h-[22px] sm:w-[22px] lg:h-6 lg:w-6"
        />
      </button>
    </div>
  );
}
