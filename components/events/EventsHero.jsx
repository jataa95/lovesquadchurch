import PageHero from "@/components/ui/PageHero";
import { SecondaryButton } from "@/components/ui/buttons";
import { eventsPage } from "@/data/events";

export default function EventsHero() {
  return (
    <PageHero
      label={["WHAT'S", "ON"]}
      title="EVENTS"
      image={eventsPage.photo}
      imageAlt="LoveSquad Church event"
      intro={eventsPage.intro}
      actions={<SecondaryButton href="#upcoming-events">UPCOMING EVENTS</SecondaryButton>}
    />
  );
}
