import Container from "@/components/ui/Container";
import AboutContent from "./AboutContent";
import AboutGallery from "./AboutGallery";

export default function About() {
  return (
    <section
      id="about-page"
      className="bg-cream section-pt overflow-hidden"
    >
      <Container>
        <AboutContent />

        <div className="mt-(--section-space)">
          <AboutGallery />
        </div>
      </Container>
    </section>
  );
}