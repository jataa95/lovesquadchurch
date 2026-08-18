import Image from "next/image";
import { serviceRecap } from "@/data/serviceRecap";
import SecondaryButton from "@/components/ui/buttons/SecondaryButton";

export default function ServiceRecapHeader() {
  return (
    <div
      className="
        flex
        flex-row
        items-end
        justify-between
        gap-2
      "
    >
      {/* ================================
          LEFT — ICON + TITLE
      ================================= */}
      <div
        className="
          flex
          items-start
          gap-2

          sm:gap-3.5
        "
      >
        {/* Service Icon */}
        <Image
          src="/icons/service-icon.svg"
          alt="Service Icon"
          width={96}
          height={80}
          className="
            h-[30px]
            w-[36px]
            shrink-0
            object-contain

            sm:h-[44px]
            sm:w-[48px]

            md:h-[56px]
            md:w-[68px]

            lg:h-[64px]
            lg:w-[76px]
          "
        />

        {/* Heading Container: Horizontal row on mobile, stacked column on small screens and up */}
        <div className="flex flex-col items-start gap-1.0 leading-none sm:flex-col sm:items-start sm:gap-0">
          {/* Service Title */}
          <h2
            className="
              heading-font
              uppercase
              text-[#ED4823]

              text-[22px]
              leading-none

              sm:text-[36px]
              sm:leading-[36px]

              md:text-[42px]
              md:leading-[42px]

              lg:text-[48px]
              lg:leading-[48px]
            "
            style={{
              fontWeight: 900,
              letterSpacing: "0px",
            }}
          >
            SERVICE
          </h2>

          {/* Recap Title */}
          <h2
            className="
              heading-font
              uppercase
              text-[#575656]

              text-[22px]
              leading-none

              sm:text-[36px]
              sm:leading-[36px]

              md:text-[42px]
              md:leading-[42px]

              lg:text-[48px]
              lg:leading-[48px]
            "
            style={{
              fontWeight: 900,
              letterSpacing: "0px",
            }}
          >
            RECAP
          </h2>
        </div>
      </div>

      {/* ================================
          RIGHT — BUTTON
      ================================= */}
      <div className="shrink-0">
        <SecondaryButton href="/servicerecap">
          {serviceRecap.button}
        </SecondaryButton>
      </div>
    </div>
  );
}