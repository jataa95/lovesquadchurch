// app/components/ServiceRecap.jsx
import Container from "@/components/ui/Container";
import ServiceRecapGallery from "./ServiceRecapGallery";

export default function ServiceRecap() {
  return (
    <section
      className="
        bg-[#F9E9D3]
        pt-2
        pb-4
        sm:pt-2
        sm:pb-4
        lg:pt-2
        lg:pb-12
      "
    >
      <Container>
        <div
          className="
            mt-0
            sm:mt-4
            lg:mt-5
          "
        >
          <ServiceRecapGallery />
        </div>
      </Container>
    </section>
  );
}