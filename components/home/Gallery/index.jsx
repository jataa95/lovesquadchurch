import Container from "@/components/ui/Container";
import GalleryHeader from "./GalleryHeader";
import GalleryPanels from "./GalleryPanels";

export default function Gallery() {
  return (
    <section
      className="bg-cream section-py"
    >
      {/* =========================
          GALLERY HEADER
      ========================== */}
      <Container>
        <GalleryHeader />
      </Container>

      {/* =========================
          GALLERY PANELS
      ========================== */}
      <Container>
        <div className="mt-(--section-gap)">
          <GalleryPanels />
        </div>
      </Container>
    </section>
  );
}
