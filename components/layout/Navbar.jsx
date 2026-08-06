import Image from "next/image";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full bg-[#F5EBDD]">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-8 py-6">
        <Image
          src="/images/branding/logo.svg"
          alt="LoveSquad Church"
          width={160}
          height={52}
          priority
        />

        <button
          className="
            w-14
            h-14
            rounded-full
            bg-[#F04A23]
            text-white
            flex
            items-center
            justify-center
            transition-all
            duration-300
            hover:scale-105
          "
        >
          <Menu size={28} />
        </button>
      </div>
    </header>
  );
}