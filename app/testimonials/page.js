import Testimonials from "@/components/testimonials/Testimonials";
import AboutFAQs from "@/components/about/AboutFAQs";
import Footer from "@/components/home/Footer";

export const metadata = {
  title: "Testimonials | Love Squad Church",
  description: "Stories from the Love Squad Church family.",
};

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Testimonials />
      <AboutFAQs />
      <Footer />
    </main>
  );
}
