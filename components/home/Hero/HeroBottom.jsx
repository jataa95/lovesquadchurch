import HeroDescription from "./HeroDescription";
import LatestMessageHeading from "./LatestMessageHeading";
import HeroVideo from "./HeroVideo";

export default function HeroBottom() {
  return (
    <section className="mt-12 w-full sm:mt-16 lg:mt-0">
      <div
        className="
          grid
          w-full
          grid-cols-1
          gap-12

          md:grid-cols-2
          md:items-end
          md:gap-10

          lg:grid-cols-12
          lg:gap-x-12
        "
      >
        {/* LEFT COLUMN */}
        <div
          className="
            w-full

            md:col-span-1

            lg:col-span-6
          "
        >
          <HeroDescription />
        </div>

        {/* RIGHT COLUMN */}
        <div
          className="
            flex
            w-full
            flex-col
            items-center sm:items-end   {/* Centered on mobile, right-aligned on desktop */}
            text-center sm:text-right   {/* Text alignment for child headings */}

            md:col-span-1

            lg:col-span-6
          "
        >
          <LatestMessageHeading />

          <div className="mt-4 w-full sm:mt-5">
            <HeroVideo />
          </div>
        </div>
      </div>
    </section>
  );
}