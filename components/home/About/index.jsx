import Container from "@/components/ui/Container";
import AboutContent from "./AboutContent";
import AboutGallery from "./AboutGallery";

export default function About() {
  return (
    <section
      id="about-page"
      className="bg-cream section-py overflow-hidden"
    >
      <Container>
        <AboutContent />

        <div className="mt-(--section-gap)">
          <AboutGallery />
        </div>
      </Container>
    </section>
  );
}