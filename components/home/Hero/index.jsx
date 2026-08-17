import Container from "@/components/ui/Container";
import HeroHeading from "./HeroHeading";
import HeroBottom from "./HeroBottom";

export default function Hero() {
  return (
    <section className="relative min-h-fit overflow-hidden bg-[#111111] xl:min-h-screen">
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
          flex-col
          justify-start
          gap-3
          px-4
          pb-8
          pt-20

          xl:min-h-screen
          xl:justify-between
          xl:gap-0
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