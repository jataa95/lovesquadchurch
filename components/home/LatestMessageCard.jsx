import { Play } from "lucide-react";
import { hero } from "@/data/home";

export default function LatestMessageCard() {
  return (
    <div className="overflow-hidden rounded-3xl bg-[#1E1E1E] shadow-xl">
      <div className="relative flex h-[420px] items-center justify-center bg-gray-700">
        <button className="flex h-20 w-20 items-center justify-center rounded-full bg-[#F04A23] text-white transition hover:scale-110">
          <Play fill="white" size={30} />
        </button>
      </div>

      <div className="space-y-3 p-8">
        <p className="text-xs uppercase tracking-[0.25em] text-[#F04A23]">
          Latest Message
        </p>

        <h3 className="heading-font text-3xl">
          {hero.latestMessage.title}
        </h3>

        <p className="text-gray-400">
          {hero.latestMessage.subtitle}
        </p>
      </div>
    </div>
  );
}