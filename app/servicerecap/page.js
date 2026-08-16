import Navbar from "@/components/layout/Navbar/Navbar";
import ServiceRecap from "@/components/servicerecap/ServiceRecap";
import AboutFAQs from "@/components/about/AboutFAQs";
import Footer from "@/components/home/Footer";

export default function EventsPage() {
  return (
    <main className="w-full">
      {/* Your existing navbar */}

      <Navbar />
      <ServiceRecap />
      <AboutFAQs />
      <Footer />

      {/* More Events sections will go here */}
    </main>
  );
}