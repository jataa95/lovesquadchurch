import Container from "@/components/ui/Container";
import GalleryHeader from "./GalleryHeader";
import GalleryGrid from "./GalleryGrid";

export default function Gallery() {
  return (
    <section
      className="bg-[#F9E9D3] section-py"
    >
      {/* =========================
          GALLERY HEADER
      ========================== */}
      <Container>
        <GalleryHeader />
      </Container>

      {/* =========================
          GALLERY GRID
      ========================== */}
      <Container>
        <div className="mt-(--section-gap)">
          <GalleryGrid />
        </div>
      </Container>
    </section>
  );
}
