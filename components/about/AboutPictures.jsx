import Image from "next/image";

const images = [
  "/images/about/about1.jpg",
  "/images/about/about2.jpg",
  "/images/about/about3.jpg",
  "/images/about/about4.jpg",
  "/images/about/about5.jpg",
  "/images/about/about6.jpg",
  "/images/about/about7.jpg",
  "/images/about/about8.jpg",
  "/images/about/about9.jpg",
];

export default function AboutPictures() {
  return (
    <section className="w-full bg-[#F5EBDD] px-[6px] py-[6px]">
      <div
        className="
          relative
          w-full
          overflow-hidden
          border-[8px]
          border-[#ED4823]
          bg-[#1A1A1A]
          p-[10px]

          sm:border-[10px]
          sm:p-[12px]

          lg:border-[16px]
          lg:p-[16px]
        "
      >
        {/* =================================
            DESKTOP / LARGE TABLET
        ================================== */}

        <div
          className="
            hidden
            lg:flex
            w-full
            items-start
            justify-center
            gap-[12px]
            xl:gap-[16px]
          "
        >
          {/* LEFT COLUMN */}
          <div className="flex w-[28%] flex-col gap-[12px] xl:gap-[16px]">
            <ImageTile src={images[0]} alt="LoveSquad church" aspect="wide" />

            <ImageTile src={images[1]} alt="LoveSquad church" aspect="wide" />

            <ImageTile src={images[2]} alt="LoveSquad church" aspect="wide" />
          </div>

          {/* CENTER COLUMN */}
          <div className="flex w-[38%] flex-col gap-[12px] xl:gap-[16px]">
            <ImageTile src={images[3]} alt="LoveSquad church" aspect="center" />

            <ImageTile src={images[4]} alt="LoveSquad church" aspect="center" />

            <ImageTile src={images[5]} alt="LoveSquad church" aspect="center" />
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex w-[28%] flex-col gap-[12px] xl:gap-[16px]">
            <ImageTile src={images[6]} alt="LoveSquad church" aspect="wide" />

            <ImageTile src={images[7]} alt="LoveSquad church" aspect="wide" />

            <ImageTile src={images[8]} alt="LoveSquad church" aspect="wide" />
          </div>
        </div>

        {/* =================================
            TABLET
        ================================== */}

        <div
          className="
            hidden
            sm:grid
            lg:hidden
            grid-cols-2
            gap-[12px]
          "
        >
          {images.map((image, index) => (
            <ImageTile
              key={image}
              src={image}
              alt={`LoveSquad church ${index + 1}`}
              aspect="tablet"
            />
          ))}
        </div>

        {/* =================================
            MOBILE
        ================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-[10px]
            sm:hidden
          "
        >
          {images.map((image, index) => (
            <ImageTile
              key={image}
              src={image}
              alt={`LoveSquad church ${index + 1}`}
              aspect="mobile"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =================================
   IMAGE TILE
================================= */

function ImageTile({ src, alt, aspect = "wide" }) {
  const aspectClasses = {
    wide: "aspect-[16/10]",
    center: "aspect-[5/3]",
    tablet: "aspect-[4/3]",
    mobile: "aspect-[16/10]",
  };

  return (
    <div
      className={`
        relative
        w-full
        overflow-hidden
        bg-[#121212]
        ${aspectClasses[aspect]}
      `}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 639px) 100vw,(max-width: 1023px) 50vw,28vw"
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