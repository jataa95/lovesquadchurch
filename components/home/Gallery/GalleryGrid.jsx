import Image from "next/image";
import { galleryImages } from "@/data/gallery";

function GalleryImage({ image }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0E0E0E]">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 767px) 100vw, (max-width: 1024px) 33vw, 33vw"
        className="
          object-cover
          transition-transform
          duration-500
          hover:scale-105
        "
      />
    </div>
  );
}

export default function GalleryGrid() {
  return (
    <div
      id="gallery"
      className="
        mt-[24px]
        h-auto
        w-full
        overflow-hidden
        bg-[#242323]

        sm:mt-[28px]

        md:h-[600px]

        lg:h-[750px]
      "
    >
      <div
        className="
          grid
          h-auto
          w-full
          grid-cols-1
          gap-[10px]

          sm:gap-[12px]

          md:h-full
          md:grid-cols-[1fr_2fr_1fr]
          md:gap-[14px]

          lg:grid-cols-[1fr_2.2fr_1fr]
          lg:gap-[18px]
        "
      >
        {/* =================================
            LEFT COLUMN
        ================================== */}
        <div
          className="
            grid
            grid-cols-1
            gap-[10px]

            md:h-full
            md:grid-cols-1
            md:grid-rows-[repeat(3,1fr)]
            md:gap-[14px]

            lg:grid-rows-[250px_250px_250px]
            lg:gap-[20px]
          "
        >
          <div className="h-[220px] sm:h-[260px] md:h-auto">
            <GalleryImage image={galleryImages[0]} />
          </div>

          <div className="h-[220px] sm:h-[260px] md:h-auto">
            <GalleryImage image={galleryImages[3]} />
          </div>

          <div className="h-[220px] sm:h-[260px] md:h-auto">
            <GalleryImage image={galleryImages[6]} />
          </div>
        </div>

        {/* =================================
            CENTER COLUMN
        ================================== */}
        <div
          className="
            grid
            grid-cols-1
            gap-[10px]

            md:h-full
            md:grid-rows-[repeat(3,1fr)]
            md:gap-[14px]

            lg:h-[660px]
            lg:grid-rows-[300px_300px_300px]
            lg:gap-[20px]
          "
        >
          <div className="h-[280px] sm:h-[320px] md:h-auto">
            <GalleryImage image={galleryImages[1]} />
          </div>

          <div className="h-[280px] sm:h-[320px] md:h-auto">
            <GalleryImage image={galleryImages[4]} />
          </div>

          <div className="h-[280px] sm:h-[320px] md:h-auto">
            <GalleryImage image={galleryImages[7]} />
          </div>
        </div>

        {/* =================================
            RIGHT COLUMN
        ================================== */}
        <div
          className="
            grid
            grid-cols-1
            gap-[10px]

            md:h-full
            md:grid-rows-[repeat(3,1fr)]
            md:gap-[14px]

            lg:grid-rows-[250px_250px_250px]
            lg:gap-[20px]
          "
        >
          <div className="h-[220px] sm:h-[260px] md:h-auto">
            <GalleryImage image={galleryImages[2]} />
          </div>

          <div className="h-[220px] sm:h-[260px] md:h-auto">
            <GalleryImage image={galleryImages[5]} />
          </div>

          <div className="h-[220px] sm:h-[260px] md:h-auto">
            <GalleryImage image={galleryImages[8]} />
          </div>
        </div>
      </div>
    </div>
  );
}