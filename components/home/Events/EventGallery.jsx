import Image from "next/image";
import { events } from "@/data/events";

export default function EventGallery() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex h-[200px] w-max items-center gap-4 px-3 sm:h-[240px] sm:gap-6 sm:px-4 md:h-[280px] md:gap-8 md:px-6 lg:h-[320px] lg:gap-10 lg:px-8">
        {events.images.map((image, index) => (
          <div
            key={image}
            className="relative h-[45px] w-[45px] shrink-0 sm:h-[50px] sm:w-[50px] md:h-[55px] md:w-[55px]"
          >
            <Image
              src={image}
              alt={`Event ${index + 1}`}
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
