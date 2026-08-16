import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/home/Footer";
import CareersHero from "@/components/careers/CareersHero";
import BecomeVolunteer from "@/components/careers/BecomeVolunteer";
import AboutFAQs from "@/components/about/AboutFAQs"; // Adjust import path if needed

export const metadata = {
  title: "Careers | Love Squad Church",
  description:
    "Join the team at Love Squad Church. Explore available positions and apply today.",
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#F9E9D3]">
      <Navbar />
      <CareersHero />
      <BecomeVolunteer />
      <AboutFAQs />
      <Footer />
    </main>
  );
}
