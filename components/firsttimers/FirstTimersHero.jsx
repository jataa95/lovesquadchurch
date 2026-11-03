import PageHero from "@/components/ui/PageHero";
import { SecondaryButton } from "@/components/ui/buttons";
import { firstTimers } from "@/data/firstTimers";

export default function FirstTimersHero() {
  return (
    <PageHero
      label={["FIRST", "TIME?"]}
      title="WELCOME"
      image={firstTimers.photo}
      imageAlt="LoveSquad Church worship"
      intro={firstTimers.intro}
      actions={<SecondaryButton href="#connect-card">TELL US ABOUT YOU</SecondaryButton>}
    />
  );
}
