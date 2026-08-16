import Container from "@/components/ui/Container";
import ServiceRecapHeader from "./ServiceRecapHeader";
import RecapGallery from "./RecapGallery";

export default function ServiceRecap() {
  return (
    <section
      className="
        bg-[#F9E9D3]
        py-12

        sm:py-16

        lg:py-20
      "
    >
      <Container>
        <ServiceRecapHeader />

        <div
          className="
            mt-8

            sm:mt-10

            lg:mt-12
          "
        >
          <RecapGallery />
        </div>
      </Container>
    </section>
  );
}
