import Navbar from "@/components/layout/Navbar/Navbar";
import Testimonials from "@/components/testimonials/Testimonials";
import AboutFAQs from "@/components/about/AboutFAQs";
import Footer from "@/components/home/Footer";

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <Testimonials />
      <AboutFAQs />
      <Footer />
    </>
  );
}