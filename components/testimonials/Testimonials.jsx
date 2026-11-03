import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import TestimonialVideos from "@/components/home/Testimonials/TestimonialVideos";

/*
 * Testimonials page: the standard centred hero, then the same video
 * testimonies player as the homepage and LoveSpots page.
 */
export default function Testimonials() {
  return (
    <>
      <PageHero
        pb
        label={["OUR", "AMAZING"]}
        title="STORIES"
        image="/images/testimonials/testimonial-1.jpg"
        imageAlt="LoveSquad Church testimonies"
        intro="Cras aliquet, sem consectetur condimentum ultricies, risus massa condimentum quam, a eleifend dolor elit quis orci."
      />
      <section id="stories" className="relative w-full bg-ink section-py text-[#F9E9D3]">
        <Container>
          <h2
            className="heading-font text-center font-bold uppercase leading-[0.9] tracking-[-0.05em]"
            style={{ fontSize: "clamp(40px, 4.6vw, 66px)" }}
          >
            <span className="block">REAL PEOPLE,</span>
            <span className="block text-[#ED4823]">REAL STORIES</span>
          </h2>
          <div className="mt-(--section-gap)">
            <TestimonialVideos />
          </div>
        </Container>
      </section>
    </>
  );
}
