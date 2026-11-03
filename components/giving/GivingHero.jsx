import PageHero from "@/components/ui/PageHero";
import { SecondaryButton } from "@/components/ui/buttons";

export default function GivingHero() {
  return (
    <PageHero
      id="giving-hero"
      label={["GENEROUS", "HEARTS"]}
      title="GIVING"
      image="/images/giving/giving-hero.jpg"
      imageAlt="Giving at LoveSquad Church"
      intro="Cras aliquet, sem consectetur condimentum ultricies, risus massa condimentum quam, a eleifend dolor elit quis orci."
      actions={<SecondaryButton href="#offering">GIVE AN OFFERING</SecondaryButton>}
    />
  );
}
