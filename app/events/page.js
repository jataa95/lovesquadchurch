import EventsHero from "@/components/events/EventsHero";
import UpcomingEvents from "@/components/events/UpcomingEvents";
import AboutFAQs from "@/components/about/AboutFAQs";
import Footer from "@/components/home/Footer";

export const metadata = {
  title: "Events | Love Squad Church",
  description: "See what's coming up at Love Squad Church.",
};

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-cream">
      <EventsHero />
      <UpcomingEvents />
      <AboutFAQs />
      <Footer />
    </main>
  );
}
