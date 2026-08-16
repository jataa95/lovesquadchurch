import Container from "@/components/ui/Container";
import TestimonialsHeader from "./TestimonialsHeader";
import TestimonialsGrid from "./TestimonialsGrid";
import SecondaryButton from "@/components/ui/buttons/SecondaryButton";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#0E0E0E] py-8 sm:py-12 md:py-16 lg:py-20">
      <Container>
        {/* HEADER */}
        <TestimonialsHeader />

        {/* TESTIMONIALS GRID */}
        <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10">
          <TestimonialsGrid />
        </div>

        {/* BUTTON */}
        <div className="mt-4 flex justify-center sm:mt-6 md:mt-8 lg:mt-10">
          <SecondaryButton href="/testimonials">
            {testimonials.button}
          </SecondaryButton>
        </div>
      </Container>
    </section>
  );
}