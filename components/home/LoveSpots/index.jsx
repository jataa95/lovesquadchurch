import Container from "@/components/ui/Container";
import LoveSpotsHeader from "./LoveSpotsHeader";
import LoveSpotsImage from "./LoveSpotsImage";
import LoveSpotsContent from "./LoveSpotsContent";

export default function LoveSpots() {
  return (
    <section className="w-full bg-[#F9E9D3] py-8 sm:py-8 md:py-10">
      <Container>
        <div className="flex w-full flex-col">
          <LoveSpotsHeader />
          <LoveSpotsImage />
          <LoveSpotsContent />
        </div>
      </Container>
    </section>
  );
}