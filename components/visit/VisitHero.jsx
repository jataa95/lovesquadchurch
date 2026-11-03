import PageHero from "@/components/ui/PageHero";
import { SecondaryButton } from "@/components/ui/buttons";
import { visit } from "@/data/visit";

export default function VisitHero() {
  return (
    <PageHero
      id="visit"
      label={["PLAN", "YOUR"]}
      title="VISIT"
      image={visit.photo}
      imageAlt="Plan your visit to LoveSquad Church"
      intro={visit.intro}
      actions={
        <>
          <SecondaryButton href="#in-person">IN PERSON</SecondaryButton>
          <SecondaryButton href="#online">ONLINE</SecondaryButton>
        </>
      }
    />
  );
}
