import Container from "@/components/ui/Container";
import AboutContent from "./AboutContent";
import AboutGallery from "./AboutGallery";
import AboutCollage from "./AboutCollage";

export default function About() {
  return (
    <section
      id="about-page"
      // Desktop: the collage's parallax lifts the last picture ~30px as the
      // section leaves, so trim the bottom padding by that much to keep
      // the visible gap to the next section the usual 80px.
      className="bg-cream section-py overflow-hidden lg:pb-[calc(var(--section-space)-30px)]"
    >
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
