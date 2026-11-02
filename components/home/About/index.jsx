import Container from "@/components/ui/Container";
import AboutContent from "./AboutContent";
import AboutGallery from "./AboutGallery";
import AboutCollage from "./AboutCollage";

export default function About() {
  return (
    <section id="about-page" className="bg-cream section-py overflow-hidden">
      {/* Phones and tablets: text, then the swipeable slider */}
      <div className="lg:hidden">
        <Container>
          <AboutContent />

          <div className="mt-(--section-gap)">
            <AboutGallery />
          </div>
        </Container>
      </div>

      {/* Desktop: centred text with scattered photos */}
      <div className="hidden lg:block">
        <AboutCollage />
      </div>
    </section>
  );
}
