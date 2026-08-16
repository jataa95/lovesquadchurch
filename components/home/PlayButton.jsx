import { Play } from "lucide-react";

export default function PlayButton() {
  return (
    <button className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 backdrop-blur transition hover:scale-110">
      <Play fill="white" size={34} className="ml-1" />
    </button>
  );
}