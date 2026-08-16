import Navbar from "@/components/layout/Navbar/Navbar";
import EventsHero from "@/components/events/EventsHero";
import UpcomingEvents from "@/components/events/UpcomingEvents";
import AboutFAQs from "@/components/about/AboutFAQs";
import Footer from "@/components/home/Footer";

export default function EventsPage() {
  return (
    <main className="w-full">
      {/* Your existing navbar */}

      <Navbar />
      <EventsHero />
      <UpcomingEvents />
      <AboutFAQs />
      <Footer />

      {/* More Events sections will go here */}
    </main>
  );
}