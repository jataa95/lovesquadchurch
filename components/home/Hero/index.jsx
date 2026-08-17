import Container from "@/components/ui/Container";
import HeroHeading from "./HeroHeading";
import HeroBottom from "./HeroBottom";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-[#111111]">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2A2A2A_0%,#111111_45%,#050505_100%)]" />
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-[url('/images/noise.png')] bg-repeat opacity-[0.03] mix-blend-soft-light" />

      {/* Hero Content */}
      <Container
        className="
          relative
          z-10
          flex
          min-h-[100dvh]
          flex-col
          justify-center   {/* Spreads top heading and bottom content to fill full height */}
          px-4
          pb-8
          pt-20             {/* Clearance for Navbar */}

          xl:px-8
          xl:pb-24
          xl:pt-28
        "
      >
        <HeroHeading />
        <HeroBottom />
      </Container>
    </section>
  );
}