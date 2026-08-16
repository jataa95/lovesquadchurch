"use client";

import SecondaryButton from "@/components/ui/buttons/SecondaryButton";

export default function CareersHero() {
  return (
    <section className="w-full bg-[#F9E9D3] text-[#575656]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          px-[18px]
          py-[24px]
          sm:px-[28px]
          sm:py-[32px]
          lg:px-[48px]
          lg:py-[40px]
        "
      >
        {/* =========================================
            GIANT CAREERS HEADING
        ========================================== */}

        <div className="w-full overflow-hidden">
          <h1
            className="
              heading-font
              m-0
              mt-[55px]
              w-full
              uppercase
              font-extrabold
              leading-[0.8]
              tracking-[-0.06em]
              text-[#575656]
              sm:mt-[65px]
              lg:mt-[90px]
            "
            style={{
              fontSize: "clamp(4rem, 16vw, 15rem)",
            }}
          >
            CAREERS
          </h1>
        </div>

        {/* =========================================
            MAIN GRID
        ========================================== */}

        <div
          className="
            mt-[40px]
            grid
            grid-cols-1
            gap-[48px]
            sm:mt-[50px]
            sm:gap-[60px]
            lg:mt-[32px]
            lg:grid-cols-12
            lg:items-start
            lg:gap-[48px]
          "
        >
          {/* =========================================
              LEFT COLUMN
          ========================================== */}

          <div
            className="
              flex
              flex-col
              gap-[32px]
              lg:col-span-6
              lg:gap-[36px]
            "
          >
            {/* INTRODUCTION */}

            <div
              className="
                body-font
                space-y-[14px]
                text-[17px]
                leading-[1.55]
                text-[#575656]
                sm:text-[18px]
                lg:text-[20px]
                lg:leading-relaxed
              "
            >
              <p>
                Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa
                Condimentum Quam, A Eleifend Dolor Elit Quis Orci.
              </p>

              <p>
                Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa
                Condimentum Quam, A Eleifend Dolor Elit Quis Orci.
              </p>

              <p>
                Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa
                Condimentum Quam, A Eleifend Dolor Elit Quis Orci.
              </p>
            </div>

            {/* =========================================
                AVAILABLE POSITIONS
            ========================================== */}

            <div className="mt-[4px] flex flex-col gap-[20px]">
              <h2
                className="
                  heading-font
                  uppercase
                  font-bold
                  tracking-[-0.03em]
                  text-[#575656]
                  text-[24px]
                  leading-[28px]
                  sm:text-[28px]
                  sm:leading-[32px]
                  lg:text-[32px]
                  lg:leading-[36px]
                "
              >
                AVAILABLE POSITIONS
              </h2>

              <div className="space-y-[24px]">
                {/* POSITION 1 */}

                <div>
                  <span
                    className="
                      font-mono
                      text-[13px]
                      font-bold
                      uppercase
                      tracking-[0.08em]
                      text-[#575656]
                      sm:text-[14px]
                      lg:text-[16px]
                    "
                  >
                    LOREM IPSUM
                  </span>

                  <p
                    className="
                      body-font
                      mt-[5px]
                      text-[16px]
                      leading-[1.5]
                      text-[#575656]
                      sm:text-[17px]
                      lg:text-[20px]
                      lg:leading-relaxed
                    "
                  >
                    Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus
                    Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.
                  </p>
                </div>

                {/* POSITION 2 */}

                <div>
                  <span
                    className="
                      font-mono
                      text-[13px]
                      font-bold
                      uppercase
                      tracking-[0.08em]
                      text-[#575656]
                      sm:text-[14px]
                      lg:text-[16px]
                    "
                  >
                    LOREM IPSUM
                  </span>

                  <p
                    className="
                      body-font
                      mt-[5px]
                      text-[16px]
                      leading-[1.5]
                      text-[#575656]
                      sm:text-[17px]
                      lg:text-[20px]
                      lg:leading-relaxed
                    "
                  >
                    Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus
                    Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.
                  </p>
                </div>

                {/* POSITION 3 */}

                <div>
                  <span
                    className="
                      font-mono
                      text-[13px]
                      font-bold
                      uppercase
                      tracking-[0.08em]
                      text-[#575656]
                      sm:text-[14px]
                      lg:text-[16px]
                    "
                  >
                    LOREM IPSUM
                  </span>

                  <p
                    className="
                      body-font
                      mt-[5px]
                      text-[16px]
                      leading-[1.5]
                      text-[#575656]
                      sm:text-[17px]
                      lg:text-[20px]
                      lg:leading-relaxed
                    "
                  >
                    Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus
                    Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.
                  </p>
                </div>
              </div>
            </div>

            {/* =========================================
                APPLY BUTTON
            ========================================== */}

            <div className="pt-[0px]">
              <SecondaryButton href="#apply">APPLY</SecondaryButton>
            </div>
          </div>

          {/* =========================================
              RIGHT COLUMN / IMAGE
          ========================================== */}

          <div
            className="
              lg:col-span-6
            "
          >
            <div
              className="
                relative
                aspect-square
                w-full
                overflow-hidden
                bg-[#171515]
                sm:aspect-[4/3]
                lg:aspect-square
              "
            >
              {/* Image placeholder */}

              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  text-white/20
                "
              >
                <svg
                  className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>

              {/* REAL IMAGE
              
              <Image
                src="/images/careers/hero.jpg"
                alt="Careers at LoveSquad Church"
                fill
                priority
                sizes="(max-width: 1024px) 100vw,50vw"
                className="object-cover"
              />
              
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
