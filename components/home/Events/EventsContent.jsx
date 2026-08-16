import Image from "next/image";
import { events } from "@/data/events";
import LoveSquadGraphic from "./LoveSquadGraphic";

export default function EventsContent() {
  // Safe path fallback for events image
  const rawPath = events?.image || "/images/events/default-event.jpg";
  const imageSrc = rawPath.startsWith("/") ? rawPath : `/${rawPath}`;

  return (
    <div className="mt-4 sm:mt-5 md:mt-6">
      <div className="flex flex-col md:flex-row md:items-center">
        {/* LEFT COLUMN (DESKTOP ONLY) */}
        <div className="hidden flex-col items-center md:flex md:w-[30%] md:shrink-0 md:px-3 lg:px-6">
          {/* LoveSquad Graphic */}
          <LoveSquadGraphic />

          {/* MOVING LOVE TEXT */}
          <div className="mt-2 w-[220px] overflow-hidden sm:mt-3 sm:w-[240px] md:w-[260px]">
            <div className="events-marquee">
              <div className="events-marquee-track">
                <span>
                  LOVE IS US * LOVESQUAD CHURCH * LOVE IS US * LOVESQUAD CHURCH
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (FULL WIDTH ON MOBILE) */}
        <div className="w-full shrink-0 px-3 sm:px-4 md:w-[70%] md:px-0">
          {/* Event Title */}
          <h3 className="heading-font mb-2 text-[20px] font-bold uppercase leading-tight tracking-normal text-[#575656] sm:mb-3 sm:text-[24px] md:text-[26px] lg:text-[28px]">
            {events?.title || "Upcoming Event"}
          </h3>

          {/* EVENT IMAGE */}
          <div className="relative h-[200px] w-full overflow-hidden bg-[#0E0E0E] sm:h-[260px] md:h-[300px] lg:h-[360px]">
            <Image
              src={imageSrc}
              alt={events?.title || "Event Image"}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 70vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
