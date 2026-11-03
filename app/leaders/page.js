import LeadersHero from "@/components/leaders/LeadersHero";
import LeadersGrid from "@/components/leaders/LeadersGrid";
import Footer from "@/components/home/Footer";

export const metadata = {
  title: "Our Leaders | LoveSquad Church",
  description: "Meet the pastors and leaders who serve LoveSquad Church.",
};

export default function LeadersPage() {
  return (
    <>
      <LeadersHero />
      <LeadersGrid />
      <Footer />
    </>
  );
}
