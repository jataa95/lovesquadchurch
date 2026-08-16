import Image from "next/image";
import { serviceRecap } from "@/data/serviceRecap";
import SecondaryButton from "@/components/ui/buttons/SecondaryButton";

export default function ServiceRecapHeader() {
  return (
    <div
      className="
        flex
        flex-col
        items-start
        gap-2

        sm:flex-row
        sm:items-end
        sm:justify-between
        sm:gap-2
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
            h-[38px]
            w-[46px]
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

        {/* Heading */}
        <div className="leading-none">
          <h2
            className="
              heading-font
              uppercase
              text-[#ED4823]

              text-[28px]
              leading-[1.05]

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

          <h2
            className="
              heading-font
              uppercase
              text-[#575656]

              text-[28px]
              leading-[1.05]

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
      <div className="self-start sm:self-auto">
        <SecondaryButton href="/servicerecap">
          {serviceRecap.button}
        </SecondaryButton>
      </div>
    </div>
  );
}