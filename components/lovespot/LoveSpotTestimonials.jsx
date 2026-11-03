"use client";

import Container from "@/components/ui/Container";
import TestimonialVideos from "@/components/home/Testimonials/TestimonialVideos";
import { loveSpotStories } from "@/data/lovespots";

/*
 * LoveSpot testimonies: centred heading, then the same video player as
 * the homepage (featured video + story list on desktop, swipeable video
 * on phones), with LoveSpot-specific stories.
 */
export default function LoveSpotTestimonials() {
  return (
    <section
      id="lovespot-testimonials"
      className="relative w-full bg-ink section-py text-[#F4EBDC]"
    >
      <Container>
        <h2
          className="heading-font text-center font-bold uppercase leading-[0.9] tracking-[-0.045em]"
          style={{ fontSize: "clamp(30px, 4.4vw, 60px)" }}
        >
          <span className="block">SAPIEN IPSUM, AC TINCIDUNT</span>
          <span className="block text-[#ED4823]">LOREM LACINIA VEL.</span>
        </h2>

        <div className="mt-(--section-gap)">
          <TestimonialVideos stories={loveSpotStories} />
        </div>
      </Container>
    </section>
  );
}
