import PageHero from "@/components/ui/PageHero";
import { leaders } from "@/data/leaders";

export default function LeadersHero() {
  return <PageHero pb label={["OUR", "CHURCH"]} title="LEADERS" intro={leaders.intro} />;
}
