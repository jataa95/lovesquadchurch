import Image from "next/image";
import { Play } from "lucide-react";

export default function HeroVideo() {
  return (
    <div
      className="
        relative
        aspect-[444/211]
        w-full
        max-w-[300px]
        mx-auto sm:ml-auto sm:mr-0   {/* Centered on mobile, right-aligned on sm+ */}
        overflow-hidden
        rounded-[20px]
        bg-[#1A1A1A]
        shadow-xl

        sm:max-w-[380px]
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
        sizes="(max-width: 300px) 80vw, (max-width: 824px) 50vw, 380px"
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
          h-10
          w-10
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

          sm:h-12
          sm:w-12

          lg:h-14
          lg:w-14
        "
      >
        <Play
          size={18}
          fill="white"
          className="ml-[2px] text-white sm:h-[20px] sm:w-[20px] lg:h-5 lg:w-5"
        />
      </button>
    </div>
  );
}