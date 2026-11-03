import VisitHero from "@/components/visit/VisitHero";
import VisitInPerson from "@/components/visit/VisitInPerson";
import VisitOnline from "@/components/visit/VisitOnline";
import AboutFAQs from "@/components/about/AboutFAQs";
import Footer from "@/components/home/Footer";

export const metadata = {
  title: "Plan Your Visit | Love Squad Church",
  description: "Service times, location and how to join Love Squad Church in person or online.",
};

export default function VisitPage() {
  return (
    <main className="min-h-screen bg-cream">
      <VisitHero />
      <VisitInPerson />
      <VisitOnline />
      <AboutFAQs />
      <Footer />
    </main>
  );
}
