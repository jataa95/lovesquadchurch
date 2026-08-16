import Container from "@/components/ui/Container";
import HeroHeading from "./HeroHeading";
import HeroBottom from "./HeroBottom";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#111111]">
      {/* Background */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,#2A2A2A_0%,#111111_45%,#050505_100%)]
        "
      />

      {/* Soft vignette */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Noise */}
      <div
        className="
          absolute
          inset-0
          bg-[url('/images/noise.png')]
          bg-repeat
          opacity-[0.03]
          mix-blend-soft-light
        "
      />

      {/* Hero Content */}
      <Container
        className="
          relative
          z-10
          flex
          min-h-screen
          flex-col
          justify-between
          
          px-4
          pb-16
          pt-20

          sm:px-6
          sm:pb-20
          sm:pt-24

          lg:px-8
          lg:pb-24
          lg:pt-28
        "
      >
        <HeroHeading />

        <HeroBottom />
      </Container>
    </section>
  );
}
