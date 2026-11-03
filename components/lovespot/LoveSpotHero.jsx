import PageHero from "@/components/ui/PageHero";
import { SecondaryButton } from "@/components/ui/buttons";

export default function LoveSpotHero() {
  return (
    <PageHero
      id="lovespot"
      label={["LOVESQUAD", "IN"]}
      title="LOVESPOTS"
      image="/images/lovespot/lovespot-hero.jpg"
      imageAlt="LoveSpot"
    >
      <div className="mt-8 flex max-w-[620px] flex-col items-center lg:mt-10">
        <h2
          className="heading-font font-bold uppercase leading-none tracking-[-0.02em] text-[#4A4A4A]"
          style={{ fontSize: "clamp(20px, 2vw, 26px)" }}
        >
          LOREM IPSUM
        </h2>
        <p className="mt-3 text-[15px] leading-[24px] text-[#575656] lg:text-[16px]">
          Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa
          Condimentum Quam, A Eleifend Dolor Elit Quis Orci.
        </p>
        <div className="mt-5">
          <SecondaryButton href="#what-is-lovespot">JOIN A LOVESPOT</SecondaryButton>
        </div>
      </div>
    </PageHero>
  );
}
