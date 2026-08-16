import Container from "@/components/ui/Container";
import GalleryHeader from "./GalleryHeader";
import GalleryGrid from "./GalleryGrid";

export default function Gallery() {
  return (
    <section
      className="
        bg-[#F9E9D3]
        pt-[24px]
        pb-[36px]

        sm:pt-[32px]
        sm:pb-[44px]

        md:pt-[36px]
        md:pb-[52px]

        lg:pt-[40px]
        lg:pb-[60px]
      "
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
        <div
          className="
            mt-[16px]

            sm:mt-[20px]

            md:mt-[24px]

            lg:mt-[28px]
          "
        >
          <GalleryGrid />
        </div>
      </Container>
    </section>
  );
}