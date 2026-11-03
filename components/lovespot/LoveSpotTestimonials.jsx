"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
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
      className="relative w-full bg-ink section-py text-[#F9E9D3]"
    >
      <Container>
        <SectionTitle tone="dark" top="SAPIEN IPSUM, AC TINCIDUNT" accent="LOREM LACINIA VEL." />

        <div className="mt-(--section-gap)">
          <TestimonialVideos stories={loveSpotStories} />
        </div>
      </Container>
    </section>
  );
}
