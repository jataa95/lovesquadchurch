import Footer from "@/components/home/Footer";
import CareersHero from "@/components/careers/CareersHero";
import AvailablePositions from "@/components/careers/AvailablePositions";
import BecomeVolunteer from "@/components/careers/BecomeVolunteer";
import AboutFAQs from "@/components/about/AboutFAQs";

export const metadata = {
  title: "Careers | Love Squad Church",
  description:
    "Join the team at Love Squad Church. Explore available positions and apply today.",
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-cream">
      <CareersHero />
      <AvailablePositions />
      <BecomeVolunteer />
      <AboutFAQs />
      <Footer />
    </main>
  );
}
