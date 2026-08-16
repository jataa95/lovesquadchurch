import Navbar from "@/components/layout/Navbar/Navbar";
import GivingHero from "@/components/giving/GivingHero";
import GivingBeliefs from "@/components/giving/GivingBeliefs";
import GivingDetails from "@/components/giving/GivingDetails";
import AboutFAQs from "@/components/about/AboutFAQs";
import Footer from "@/components/home/Footer";

export default function GivingPage() {
  return (
    <main className="w-full">
      <Navbar />
      <GivingHero />
      <GivingBeliefs />
      <GivingDetails />
      <AboutFAQs />
      <Footer />
    </main>
  );
}
