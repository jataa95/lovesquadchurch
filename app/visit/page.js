import Navbar from "@/components/layout/Navbar/Navbar";
import VisitHero from "@/components/visit/VisitHero";
import VisitInPerson from "@/components/visit/VisitInPerson";
import VisitOnline from "@/components/visit/VisitOnline";
import VisitDirection from "@/components/visit/VisitDirection";
import LoveSpotFAQs from "@/components/lovespot/LoveSpotFAQs";
import Footer from "@/components/home/Footer";

export default function VisitPage() {
  return (
    <main className="min-h-screen bg-[#F5EBDD]">
      <Navbar />
      <VisitHero />
      <VisitInPerson />
      <VisitOnline />
      <VisitDirection />
      <LoveSpotFAQs />
      <Footer />
    </main>
  );
}