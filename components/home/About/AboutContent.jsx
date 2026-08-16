import { about } from "@/data/about";
import SecondaryButton from "@/components/ui/buttons/SecondaryButton";

export default function AboutContent() {
  return (
    <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 lg:items-start">
      {/* LEFT COLUMN */}
      <div className="flex flex-col lg:col-span-5 xl:col-span-4">
        {/* Description */}
        <p
          className="text-[#575656]"
          style={{fontSize: "clamp(16px, 2vw, 20px)",fontWeight: 400,lineHeight: "1.5",}}
        >
          {about.description}
        </p>

        {/* Anchor Scripture */}
        <p
          className="mt-4 uppercase text-[#575656] sm:mt-6"
          style={{fontSize: "clamp(16px, 2vw, 20px)",fontWeight: 500,lineHeight: "1.5",}}
        >
          {about.scripture}
        </p>
      </div>

      {/* RIGHT COLUMN */}
      <div className="flex flex-col items-start lg:items-end lg:col-span-7 xl:col-span-8">
        <h2
          className="heading-font uppercase text-left lg:text-right font-black"
          style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            lineHeight: "1.1",
            letterSpacing: "0px",
          }}
        >
          <div className="text-[#575656]">
            NUNC CONDIMENTUM
          </div>

          <div>
            <span className="text-[#ED4823]">
              SAPIEN
            </span>
            <span className="text-[#575656]">
              {" "}IPSUM, AC{" "}
            </span>
            <span className="text-[#ED4823]">
              TINCIDUNT
            </span>
          </div>

          <div>
            <span className="text-[#ED4823]">
              LOREM LACINIA
            </span>
            <span className="text-[#575656]">
              {" "}VEL.
            </span>
          </div>
        </h2>

        <div className="mt-6 sm:mt-8 lg:mt-10">
          <SecondaryButton href="/about">
            {about.button}
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
}