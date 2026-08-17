import Container from "@/components/ui/Container";
import AboutContent from "./AboutContent";
import AboutGallery from "./AboutGallery";

export default function About() {
  return (
    <section
      id="about-page"
      className="bg-[#F9E9D3] pt-0 pb-0 sm:pt-[2px] sm:pb-[2px] overflow-hidden"
    >
      <Container>
        <AboutContent />

        <div className="mt-10 sm:mt-[60px]">
          <AboutGallery />
        </div>
      </Container>
    </section>
  );
}