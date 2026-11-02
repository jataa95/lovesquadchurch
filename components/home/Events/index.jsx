import Container from "@/components/ui/Container";
import EventsHeader from "./EventsHeader";
import EventsContent from "./EventsContent";

export default function Events() {
  return (
    <section className="relative overflow-hidden bg-[#F9E9D3] section-py">
      {/* EVENTS HEADER */}
      <Container>
        <EventsHeader />
      </Container>

      {/* EVENTS CONTENT */}
      <EventsContent />
    </section>
  );
}
