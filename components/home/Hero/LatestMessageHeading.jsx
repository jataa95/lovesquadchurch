import PrimaryButton from "@/components/ui/buttons/PrimaryButton";

export default function LatestMessageHeading() {
  return (
    <div className="flex flex-col items-start">
      <h2
        className="
          heading-font
          mt-0
          uppercase
          text-[#F04A23]

          text-[28px]
          leading-[34px]

          sm:text-[32px]
          sm:leading-[40px]

          lg:text-[36px]
          lg:leading-[48px]
        "
        style={{
          fontWeight: 500,
          letterSpacing: "-0.03em",
        }}
      >
        Latest Message
      </h2>

      <div className="mt-3 sm:mt-4">
        <PrimaryButton href="/messages">
          WATCH NOW
        </PrimaryButton>
      </div>
    </div>
  );
}