import Container from "@/components/ui/Container";
import HeroHeading from "./HeroHeading";
import HeroBottom from "./HeroBottom";
import HeroBackgroundVideo from "./HeroBackgroundVideo";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-[#111111]">
      {/* Background: dark gradient (fallback), video, then a dark overlay
          so the heading stays readable */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2A2A2A_0%,#111111_45%,#050505_100%)]" />
      <HeroBackgroundVideo />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
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
          pb-4
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