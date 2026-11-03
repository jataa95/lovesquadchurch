import SectionTitle from "@/components/ui/SectionTitle";
import SecondaryButton from "@/components/ui/buttons/SecondaryButton";

export default function EventsHeader() {
  return (
    <div className="flex flex-row items-end justify-between gap-4">
      <SectionTitle align="left" top="OUR" accent="EVENTS" />
      <div className="shrink-0">
        <SecondaryButton href="/events">GO TO EVENTS</SecondaryButton>
      </div>
    </div>
  );
}
