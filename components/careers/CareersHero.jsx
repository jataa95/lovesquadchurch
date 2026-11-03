import PageHero from "@/components/ui/PageHero";
import { careers } from "@/data/careers";

export default function CareersHero() {
  return (
    <PageHero
      label={["WORK", "WITH US"]}
      title="CAREERS"
      image={careers.photo}
      imageAlt="LoveSquad Church team"
      intro={careers.intro}
    />
  );
}
