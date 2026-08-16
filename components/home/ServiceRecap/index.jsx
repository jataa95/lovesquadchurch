import Container from "@/components/ui/Container";
import ServiceRecapHeader from "./ServiceRecapHeader";
import RecapGallery from "./RecapGallery";

export default function ServiceRecap() {
  return (
    <section
      className="
        bg-[#F9E9D3]
        pt-8
        pb-8

        sm:pt-10
        sm:pb-10

        lg:pt-12
        lg:pb-12
      "
    >
      <Container>
        <ServiceRecapHeader />

        {/* Tighter spacing above gallery */}
        <div
          className="
            mt-3

            sm:mt-4

            lg:mt-5
          "
        >
          <RecapGallery />
        </div>
      </Container>
    </section>
  );
}