import Container from "@/components/ui/Container";
import HeroHeading from "./HeroHeading";
import HeroBottom from "./HeroBottom";
import HeroBackgroundVideo from "./HeroBackgroundVideo";
import { HeroStage } from "./HeroReveal";

export default function Hero() {
  return (
    <HeroStage
      background={
        <>
          {/* Dark gradient shows if the video can't load */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2A2A2A_0%,#111111_45%,#050505_100%)]" />
          <HeroBackgroundVideo />
          <div className="absolute inset-0 bg-[url('/textures/grain.png')] bg-repeat opacity-60 mix-blend-soft-light" />
        </>
      }
    >
      {/* Hero Content */}
      <Container
        className="
          relative
          z-10
          flex
          h-full
          min-h-[100dvh]
          flex-col
          justify-center
          px-4
          pb-4
          pt-20
          xl:px-8
          xl:pb-24
          xl:pt-28
        "
      >
        <HeroHeading />
        <HeroBottom />
      </Container>
    </HeroStage>
  );
}
