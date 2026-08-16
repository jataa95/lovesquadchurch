"use client";

export default function PastorKayHero() {
  return (
    <section
      id="pastorkay"
      className="
        mt-[80px]
        w-full
        bg-[#F9E9D3]
        py-6
        text-[#575656]
        sm:py-8
        md:py-12
      "
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
          px-4
          sm:px-6
          md:px-10
          lg:px-12
        "
      >
        {/* =========================================
            1. TOP HERO FEATURED IMAGE BANNER
        ========================================== */}

        <div
          className="
            relative
            aspect-[4/3]
            w-full
            overflow-hidden
            bg-[#171515]
            sm:aspect-[16/10]
            md:aspect-[16/9]
            md:max-h-[500px]
          "
        >
          {/* Image Placeholder Visual */}
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
              className="
                h-10
                w-10
                sm:h-12
                sm:w-12
                md:h-16
                md:w-16
              "
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
            src="/images/leadership/pst-kay.jpg"
            alt="Pastor Kay"
            fill
            priority
            className="object-cover"
            sizes="
              (max-width: 640px) 100vw,
              (max-width: 1024px) 100vw,
              1440px
            "
          />

          */}
        </div>

        {/* =========================================
            2. CENTERED HEADING: PST. KAY
        ========================================== */}

        <div
          className="
            my-7
            w-full
            text-center
            sm:my-9
            md:my-12
          "
        >
          <h1
            className="
              heading-font
              m-0
              whitespace-nowrap
              font-extrabold
              uppercase
              leading-[0.85]
              tracking-[-0.05em]
              text-[#575656]
            "
            style={{
              fontSize: "clamp(3.5rem, 13vw, 10rem)",
            }}
          >
            PST. KAY
          </h1>
        </div>

        {/* =========================================
            3. CENTERED BIO / DESCRIPTION
        ========================================== */}

        <div
          className="
            body-font
            mx-auto
            w-full
            max-w-[900px]
            space-y-5
            text-center
            text-[14px]
            leading-[1.65]
            text-[#575656]
            sm:space-y-6
            sm:text-[15px]
            sm:leading-[1.7]
            md:text-[16px]
            md:leading-relaxed
          "
        >
          <p>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
            Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim
            Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut
            Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor In
            Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla
            Pariatur. Excepteur Sint Occaecat Cupidatat Non Proident, Sunt In
            Culpa Qui Officia Deserunt Mollit Anim Id Est Laborum. Sed Ut
            Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem Accusantium
            Doloremque Laudantium, Totam Rem Aperiam, Eaque Ipsa Quae Ab Illo
            Inventore Veritatis Et Quasi Architecto Beatae Vitae Dicta Sunt
            Explicabo. Nemo Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur
            Aut Odit Aut Fugit, Sed Quia Consequuntur Magni Dolores Eos Qui.
          </p>

          <p>
            Ratione Voluptatem Sequi Nesciunt. Neque Porro Quisquam Est, Qui
            Dolor Ipsum Quia Dolor Sit Amet, Consectetur, Adipisci Velit, Sed
            Quia Non Numquam Eius Modi Tempora Incididunt Ut Labore Et Dolore
            Magnam Aliquam Quaerat Voluptatem. Ut Enim Ad Minima Veniam, Quis
            Nostrud Exercitationem Ullam Corporis Suscipit Laboriosam, Nisi Ut
            Aliquid Ex Ea Commodi Consequatur? Quis Autem Vel Eum Iure
            Reprehenderit Qui In Ea Voluptate Velit Esse Quam Nihil Molestiae
            Consequatur, Vel Illum Qui Dolorem Eum Fugiat Quo Voluptas Nulla
            Pariatur.
          </p>
        </div>
      </div>
    </section>
  );
}
