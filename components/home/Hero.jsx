import Container from "@/components/ui/Container";
import HeroContent from "./HeroContent";
import LatestMessageCard from "./LatestMessageCard";

export default function Hero() {
  return (
    <section className="bg-[#111111] py-20 text-white">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <HeroContent />
          <LatestMessageCard />
        </div>
      </Container>
    </section>
  );
}