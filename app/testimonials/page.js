import Navbar from "@/components/layout/Navbar/Navbar";
import TestimonialsHero from "@/components/testimonials/TestimonialsHero";
import AboutFAQs from "@/components/about/AboutFAQs";
import Footer from "@/components/home/Footer";

export default function TestimonialsPage() {
  return (
    <main className="w-full">
      <Navbar />

      <TestimonialsHero />

      <AboutFAQs />

      <Footer />
    </main>
  );
}