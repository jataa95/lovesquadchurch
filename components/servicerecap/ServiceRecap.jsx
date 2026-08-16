// app/service-recap/page.jsx
import Image from "next/image";
import SecondaryButton from "@/components/ui/buttons/SecondaryButton";

export default function ServiceRecapPage({
  title = "LAST SERVICE",
  subtitle = "RECAP",
  topic = "CRAS ALIQUET, SEM",
  speaker = "PST. SDESRWHXBS",
  heroImageUrl = "",
  bodyTitle = "LOREM IPSUM",
  leadText = "Cras Aliquet, Sem Consectetur Condimentum Ultrices, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
  paragraphs = [
    "Cras Aliquet, Sem Consectetur Condimentum Ultrices, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
    "Cras Aliquet, Sem Consectetur Condimentum Ultrices, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
    "Cras Aliquet, Sem Consectetur Condimentum Ultrices, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
    "Cras Aliquet, Sem Consectetur Condimentum Ultrices, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
    "Cras Aliquet, Sem Consectetur Condimentum Ultrices, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
    "Cras Aliquet, Sem Consectetur Condimentum Ultrices, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
    "Cras Aliquet, Sem Consectetur Condimentum Ultrices, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
  ],
  galleryImages = [],
}) {
  return (
    <div
      id="servicerecap"
      className="min-h-screen w-full overflow-hidden bg-[#F9E9D3] text-[#1E1E1E]"
    >
      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <main
        className="
          mx-auto
          w-full
          max-w-7xl
          px-4
          py-6
          sm:px-6
          sm:py-8
          md:px-10
          lg:px-16
          mt-[80px]
        "
      >
        {/* =====================================================
            HEADER SECTION
        ====================================================== */}

        <header
          className="
            flex
            flex-col
            gap-6
            md:flex-row
            md:items-end
            md:justify-between
            md:gap-8
          "
        >
          {/* MAIN TITLE STACK */}

          <div className="leading-none">
            <h1
              className="
                heading-font
                text-xl
                font-bold
                uppercase
                tracking-tight
                text-[#8A8989]
                sm:text-2xl
                md:text-3xl
                lg:text-4xl
              "
            >
              {title}
            </h1>

            <h2
              className="
                heading-font
                mt-1
                text-[clamp(4rem,16vw,9rem)]
                font-black
                uppercase
                leading-[0.78]
                tracking-[-0.06em]
                text-[#575656]
              "
            >
              {subtitle}
            </h2>
          </div>

          {/* RIGHT META INFO */}

          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-1
              text-left
              md:w-auto
              md:min-w-[220px]
              md:items-end
              md:text-right
            "
          >
            <p
              className="
                max-w-full
                text-xs
                font-bold
                uppercase
                tracking-wider
                text-[#575656]
                sm:text-sm
              "
            >
              {topic}
            </p>

            <p
              className="
                max-w-full
                break-words
                text-xs
                font-medium
                uppercase
                tracking-wider
                text-[#8A8989]
                sm:text-sm
              "
            >
              {speaker}
            </p>

            <div className="mt-2">
              <SecondaryButton href="/messages">GO TO MESSAGES</SecondaryButton>
            </div>
          </div>
        </header>

        {/* =====================================================
            HERO MEDIA BLOCK
        ====================================================== */}

        <section className="mt-8 sm:mt-10 md:mt-12">
          <div
            className="
              relative
              aspect-[16/10]
              w-full
              overflow-hidden
              rounded-sm
              bg-[#161616]
              shadow-md
              sm:aspect-[16/9]
            "
          >
            {heroImageUrl ? (
              <Image
                src={heroImageUrl}
                alt={title}
                fill
                priority
                sizes="(max-width: 640px) 100vw,(max-width: 1024px) 100vw,1200px"
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-[#4A4A4A]">
                <svg
                  className="
                    h-10
                    w-10
                    opacity-40
                    sm:h-12
                    sm:w-12
                    md:h-14
                    md:w-14
                  "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            )}
          </div>
        </section>

        {/* =====================================================
            BODY ARTICLE
        ====================================================== */}

        <article
          className="
            mx-auto
            mt-10
            w-full
            max-w-2xl
            text-center
            sm:mt-12
            md:mt-16
          "
        >
          {/* ARTICLE TITLE */}

          <h3
            className="
              heading-font
              text-lg
              font-bold
              uppercase
              tracking-wider
              text-[#1E1E1E]
              sm:text-xl
              md:text-2xl
            "
          >
            {bodyTitle}
          </h3>

          <div className="my-4 border-b border-[#DCD3C5] sm:my-5" />

          {/* LEAD TEXT */}

          <p
            className="
              text-sm
              font-medium
              leading-7
              text-[#4A4A4A]
              sm:text-base
              sm:leading-relaxed
            "
          >
            {leadText}
          </p>

          <div className="my-4 border-b border-[#DCD3C5] sm:my-5" />

          {/* SUBHEADING + PARAGRAPHS */}

          <div
            className="
              space-y-4
              text-left
              text-xs
              leading-6
              text-[#555555]
              sm:text-sm
              sm:leading-relaxed
            "
          >
            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#8C827A]
                sm:text-xs
              "
            >
              {bodyTitle}
            </p>

            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>
      </main>

      {/* =====================================================
          DARK BOTTOM GALLERY GRID
      ====================================================== */}

      <section
        className="
          mt-12
          bg-[#161616]
          py-8
          text-white
          sm:mt-16
          sm:py-12
          md:py-16
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-7xl
            px-4
            sm:px-6
            md:px-10
            lg:px-16
          "
        >
          <div
            className="
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
              sm:gap-5
              lg:grid-cols-3
              lg:gap-6
            "
          >
            {(galleryImages.length > 0 ? galleryImages : [1, 2, 3]).map(
              (item, idx) => (
                <div
                  key={idx}
                  className="
                  relative
                  aspect-[16/10]
                  w-full
                  overflow-hidden
                  rounded-sm
                  bg-[#222222]
                "
                >
                  {typeof item === "string" ? (
                    <Image
                      src={item}
                      alt={`Recap Gallery Image ${idx + 1}`}
                      fill
                      sizes="
                      (max-width: 640px) 100vw,
                      (max-width: 1024px) 50vw,
                      33vw
                    "
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        className="
                        h-8
                        w-8
                        text-[#444444]
                        sm:h-10
                        sm:w-10
                      "
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ),
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
