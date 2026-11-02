import HeroDescription from "./HeroDescription";
import LatestMessageHeading from "./LatestMessageHeading";
import HeroVideo from "./HeroVideo";
import { Reveal } from "./HeroReveal";

export default function HeroBottom() {
  return (
    <section className="mt-0 w-full">
      <div
        className="
          grid
          w-full
          grid-cols-1
          gap-2

          md:grid-cols-2
          md:items-end
          md:gap-10

          lg:grid-cols-12
          lg:gap-x-12
        "
      >
        {/* LEFT COLUMN */}
        <Reveal start={0.5} end={0.76} className="w-full md:col-span-1 lg:col-span-6">
          <HeroDescription />
        </Reveal>

        {/* RIGHT COLUMN */}
        <Reveal
          start={0.58}
          end={0.88}
          y={40}
          className="flex w-full flex-col items-center text-center sm:items-end sm:text-right md:col-span-1 lg:col-span-6"
        >
          <LatestMessageHeading />
          <div className="mt-2 w-full sm:mt-5">
            <HeroVideo />
          </div>
        </Reveal>
      </div>
    </section>
  );
}