import PrimaryButton from "@/components/ui/buttons/PrimaryButton";

export default function LatestMessageHeading() {
  return (
    <div className="flex flex-col items-center sm:items-end"> {/* Center on mobile, right-align on sm+ */}
      <h2
        className="
          heading-font
          mt-0
          uppercase
          text-[#F04A23]

          text-[20px]          {/* Reduced from 28px */}
          leading-[22px]        {/* Reduced from 34px */}

          sm:text-[20px]
          sm:leading-[20px]

          lg:text-[36px]
          lg:leading-[48px]
        "
        style={{
          fontWeight: 300,
          letterSpacing: "-0.03em",
        }}
      >
        Latest Message
      </h2>

      <div className="mt-1 sm:mt-4">
        <div className="scale-90 origin-center sm:scale-100"> {/* Optional: Scales down button slightly on mobile */}
          <PrimaryButton href="/messages">WATCH NOW</PrimaryButton>
        </div>
      </div>
    </div>
  );
}