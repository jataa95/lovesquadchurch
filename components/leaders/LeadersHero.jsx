import Container from "@/components/ui/Container";
import { leaders } from "@/data/leaders";

// Centred hero, same pattern as the LoveSpots and Service Recap pages.
export default function LeadersHero() {
  return (
    <section className="pt-[calc(var(--nav-h)+40px)] pb-(--section-space) lg:pt-[calc(var(--nav-h)+56px)]">
      <Container>
        <div className="flex flex-col items-center text-center">
          <p
            className="heading-font font-bold uppercase leading-none tracking-[-0.035em]"
            style={{ fontSize: "clamp(24px, 3vw, 40px)" }}
          >
            <span className="text-[#ED4823]">OUR</span>{" "}
            <span className="text-[#4A4A4A]">CHURCH</span>
          </p>
          <h1
            className="heading-font font-bold uppercase leading-[0.82] tracking-[-0.055em] text-[#4A4A4A]"
            style={{ fontSize: "clamp(4rem, 13.9vw, 200px)" }}
          >
            LEADERS
          </h1>
          <p className="mt-8 max-w-[620px] text-[15px] leading-[24px] text-[#5A5853] lg:mt-10 lg:text-[16px]">
            {leaders.intro}
          </p>
        </div>
      </Container>
    </section>
  );
}
