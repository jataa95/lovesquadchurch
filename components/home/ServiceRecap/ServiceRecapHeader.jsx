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
        gap-6

        sm:flex-row
        sm:items-end
        sm:justify-between
        sm:gap-4
      "
    >
      {/* ================================
          LEFT — ICON + TITLE
      ================================= */}
      <div
        className="
          flex
          items-start
          gap-3

          sm:gap-4
        "
      >
        {/* Service Icon */}
        <Image
          src="/icons/service-icon.svg"
          alt="Service Icon"
          width={96}
          height={80}
          className="
            h-[52px]
            w-[62px]
            shrink-0
            object-contain

            sm:h-[64px]
            sm:w-[76px]

            md:h-[72px]
            md:w-[86px]

            lg:h-[80px]
            lg:w-[96px]
          "
        />

        {/* Heading */}
        <div className="leading-none">
          <h2
            className="
              heading-font
              uppercase
              text-[#ED4823]

              text-[38px]
              leading-[38px]

              sm:text-[46px]
              sm:leading-[46px]

              md:text-[52px]
              md:leading-[52px]

              lg:text-[60px]
              lg:leading-[60px]
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

              text-[38px]
              leading-[38px]

              sm:text-[46px]
              sm:leading-[46px]

              md:text-[52px]
              md:leading-[52px]

              lg:text-[60px]
              lg:leading-[60px]
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
