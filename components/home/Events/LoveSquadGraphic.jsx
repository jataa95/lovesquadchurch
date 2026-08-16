import Image from "next/image";

export default function LoveSquadGraphic() {
  return (
    <div className="relative mt-4 h-[140px] w-[160px] sm:mt-6 sm:h-[160px] sm:w-[180px] md:h-[180px] md:w-[200px]">
      <Image
        src="/images/events/lovesquad-graphic.svg"
        alt="LoveSquad"
        fill
        priority
        className="object-contain"
      />
    </div>
  );
}