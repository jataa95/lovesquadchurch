import SectionTitle from "@/components/ui/SectionTitle";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsHeader() {
  return (
    <div className="relative z-10">
      <SectionTitle tone="dark" top={testimonials.titleTop} accent={testimonials.titleBottom} />
    </div>
  );
}
