import Container from "@/components/ui/Container";

import LoveSpotsHeader from "./LoveSpotsHeader";
import LoveSpotsImage from "./LoveSpotsImage";
import LoveSpotsContent from "./LoveSpotsContent";

export default function LoveSpots() {
  return (
    <section
      className="
        bg-[#F9E9D3]

        pt-[48px]
        pb-[70px]

        sm:pt-[60px]
        sm:pb-[85px]

        md:pt-[70px]
        md:pb-[100px]

        lg:pt-[80px]
        lg:pb-[120px]
      "
    >
      <Container>
        {/* ================================
            HEADER
        ================================= */}
        <LoveSpotsHeader />

        {/* ================================
            IMAGE
        ================================= */}
        <div
          className="
            mt-[32px]

            sm:mt-[40px]

            md:mt-[48px]

            lg:mt-[56px]
          "
        >
          <LoveSpotsImage />
        </div>

        {/* ================================
            CONTENT
        ================================= */}
        <div
          className="
            mt-[32px]

            sm:mt-[40px]

            md:mt-[48px]

            lg:mt-[56px]
          "
        >
          <LoveSpotsContent />
        </div>
      </Container>
    </section>
  );
}
