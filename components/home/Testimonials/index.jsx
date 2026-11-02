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
        section-py
      "
    >
      <Container>
        {/* HEADER */}
        <TestimonialsHeader />

        {/* TESTIMONIALS GRID */}
        <div className="mt-(--section-gap)">
          <TestimonialsGrid />
        </div>

        {/* BUTTON */}
        <div className="mt-(--section-gap) flex justify-center">
          <SecondaryButton href="/testimonials">
            {testimonials.button}
          </SecondaryButton>
        </div>
      </Container>
    </section>
  );
}