import Navbar from "@/components/layout/Navbar/Navbar";
import Testimonials from "@/components/home/Testimonials";
import AboutFAQs from "@/components/about/AboutFAQs";
import Footer from "@/components/home/Footer";

export default function TestimonialsPage() {
  return (
    <main className="w-full">
      <Navbar />

      <Testimonials />

      <AboutFAQs />

      <Footer />
    </main>
  );
}
