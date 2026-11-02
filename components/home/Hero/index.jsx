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
      {/* Top padding clears the fixed navbar; bottom padding leaves room
          for the Scroll cue. The section grows if the content needs more
          than one screen, so nothing is ever cut off. */}
      <Container
        className="
          relative
          z-10
          flex
          flex-1
          flex-col
          justify-center
          px-4
          pt-[104px]
          pb-[96px]
          sm:pt-[120px]
          sm:pb-[104px]
          lg:pt-[136px]
          lg:pb-[112px]
          xl:px-8
        "
      >
        <HeroHeading />
        <HeroBottom />
      </Container>
    </HeroStage>
  );
}
