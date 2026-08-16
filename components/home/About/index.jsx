import Container from "@/components/ui/Container";
import AboutContent from "./AboutContent";
import AboutGallery from "./AboutGallery";

export default function About() {
  return (
    <section
      id="about-page"
      className="bg-[#F9E9D3] pt-[20px] pb-[60px] overflow-hidden"
    >
      <Container>
        <AboutContent />

        <div className="mt-[64px]">
          <AboutGallery />
        </div>
      </Container>
    </section>
  );
}
