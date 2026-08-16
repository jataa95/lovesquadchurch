// components/home/Testimonials/index.jsx

import Container from "@/components/ui/Container"; 
import TestimonialsHeader from "./TestimonialsHeader";
import TestimonialsGrid from "./TestimonialsGrid";
import SecondaryButton from "@/components/ui/buttons/SecondaryButton"; 
import { testimonials } from "@/data/testimonials"; 

export default function Testimonials() {
  return (
    <section 
      className="
        relative 
        overflow-hidden 
        bg-[#0E0E0E] 
        pt-8 sm:pt-12 md:pt-16 lg:pt-20 
        pb-4 sm:pb-6 md:pb-8 lg:pb-10
      "
    >
      <Container>
        {/* HEADER */}
        <TestimonialsHeader />

        {/* TESTIMONIALS GRID */}
        <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-8">
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