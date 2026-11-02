import Container from "@/components/ui/Container";
import LoveSpotsHeader from "./LoveSpotsHeader";
import LoveSpotsImage from "./LoveSpotsImage";
import LoveSpotsContent from "./LoveSpotsContent";

export default function LoveSpots() {
  return (
    <section className="w-full bg-cream section-py">
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