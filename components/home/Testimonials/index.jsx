// components/home/Testimonials/index.jsx

import Container from "@/components/ui/Container"; 
import TestimonialsHeader from "./TestimonialsHeader";
import TestimonialVideos from "./TestimonialVideos";
import SecondaryButton from "@/components/ui/buttons/SecondaryButton"; 
import { testimonials } from "@/data/testimonials"; 

export default function Testimonials() {
  return (
    <section 
      className="
        relative 
        overflow-hidden 
        bg-ink 
        section-py
      "
    >
      <Container>
        {/* HEADER */}
        <TestimonialsHeader />

        {/* VIDEO TESTIMONIES */}
        <div className="mt-(--section-gap)">
          <TestimonialVideos />
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