"use client";

export default function MessagesHero() {
  return (
    <section
      id="messages"
      className="
        mt-[80px]
        w-full
        bg-[#F9E9D3]
        pt-6
        pb-4
        text-[#575656]
        sm:pt-8
        md:pb-6
      "
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          px-4
          sm:px-6
          md:px-12
        "
      >
        {/* =========================================
            GIANT MESSAGES HEADING
        ========================================== */}

        <div className="w-full overflow-hidden">
          <h1
            className="
              heading-font
              m-0
              w-full
              font-extrabold
              uppercase
              leading-[0.8]
              tracking-tighter
              text-[#575656]
              whitespace-nowrap
            "
            style={{
              fontSize: "clamp(3.5rem, 16vw, 15rem)",
            }}
          >
            MESSAGES
          </h1>
        </div>

        {/* =========================================
            SUBTITLE PARAGRAPH
        ========================================== */}

        <p
          className="
            body-font
            mt-3
            w-full
            max-w-[500px]
            text-[15px]
            leading-[1.5]
            text-[#575656]
            sm:mt-4
            sm:text-[16px]
            sm:leading-relaxed
          "
        >
          Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa
          Condimentum Quam, A Eleifend Dolor Elit Quis Orci.
        </p>
      </div>
    </section>
  );
}
