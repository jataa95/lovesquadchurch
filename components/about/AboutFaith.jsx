"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { TertiaryButton } from "@/components/ui/buttons";

const faithStatements = [
  {
    number: "01",
    title: "GOD",
    description:
      "Lorem Ipsum Adipiscing Elit. Proin Tempor Ligula Euismod Nibh Facilisis Molestie Non Vitae Dolor. Cras Auctor Venenatis Sem, Ultricies Rutrum Est Ultricies Vel. Proin Sit Amet Neque Nec Risus Tincidunt Ultricies In Quis Lorem.",
    scripture: "Scriptures",
  },
  {
    number: "02",
    title: "JESUS CHRIST",
    description:
      "Lorem Ipsum Adipiscing Elit. Proin Tempor Ligula Euismod Nibh Facilisis Molestie Non Vitae Dolor. Cras Auctor Venenatis Sem, Ultricies Rutrum Est Ultricies Vel. Proin Sit Amet Neque Nec Risus Tincidunt Ultricies In Quis Lorem.",
    scripture: "Scriptures",
  },
  {
    number: "03",
    title: "HOLY SPIRIT",
    description:
      "Lorem Ipsum Adipiscing Elit. Proin Tempor Ligula Euismod Nibh Facilisis Molestie Non Vitae Dolor. Cras Auctor Venenatis Sem, Ultricies Rutrum Est Ultricies Vel. Proin Sit Amet Neque Nec Risus Tincidunt Ultricies In Quis Lorem.",
    scripture: "Scriptures",
  },
  {
    number: "04",
    title: "THE CHURCH",
    description:
      "Lorem Ipsum Adipiscing Elit. Proin Tempor Ligula Euismod Nibh Facilisis Molestie Non Vitae Dolor. Cras Auctor Venenatis Sem, Ultricies Rutrum Est Ultricies Vel. Proin Sit Amet Neque Nec Risus Tincidunt Ultricies In Quis Lorem.",
    scripture: "Scriptures",
  },
];

export default function AboutFaith() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !trackRef.current) return;

      const section = sectionRef.current;
      const track = trackRef.current;

      const rect = section.getBoundingClientRect();

      const scrollDistance =
        section.offsetHeight - window.innerHeight;

      if (scrollDistance <= 0) return;

      const progress = Math.min(
        Math.max(-rect.top / scrollDistance, 0),
        1
      );

      const viewportWidth =
        track.parentElement.offsetWidth;

      const trackWidth = track.scrollWidth;

      const maxTranslate = Math.max(
        trackWidth - viewportWidth,
        0
      );

      setTranslateX(-maxTranslate * progress);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      id="statement-of-faith"
      ref={sectionRef}
      className="
        relative
        w-full
        bg-[#F9E9D3]
        px-[6px]
        sm:px-[8px]
        lg:h-[220vh]
      "
    >
      <div
        className="
          sticky
          top-0
          h-auto
          min-h-screen
          overflow-hidden
          bg-[#0B0B0B]
          text-[#F4EBDC]

          lg:h-screen
        "
      >
        {/* =========================================
            BACKGROUND TEXTURE
        ========================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-40
          "
          style={{
            backgroundImage: `
              radial-gradient(
                circle at 20% 20%,
                rgba(255,255,255,0.045) 0 1px,
                transparent 1px
              ),
              radial-gradient(
                circle at 80% 70%,
                rgba(255,255,255,0.035) 0 1px,
                transparent 1px
              ),
              radial-gradient(
                circle at 40% 80%,
                rgba(255,255,255,0.025) 0 1px,
                transparent 1px
              )
            `,
            backgroundSize:
              "5px 5px, 7px 7px, 11px 11px",
          }}
        />

        {/* =========================================
            HEADER
        ========================================== */}

        <div
          className="
            relative
            z-20
            flex
            flex-col
            gap-[24px]
            px-[20px]
            pt-[30px]

            sm:px-[28px]
            sm:pt-[35px]

            lg:flex-row
            lg:items-start
            lg:justify-between
            lg:px-[38px]
            lg:pt-[30px]
          "
        >
          {/* HEADER TITLE */}

          <div
            className="
              flex
              items-start
              gap-[10px]

              sm:gap-[14px]

              lg:gap-[16px]
            "
          >
            <Image
              src="/images/about/statement-of-faith-icon.svg"
              alt="Statement of Faith"
              width={96}
              height={80}
              className="
                mt-[3px]
                h-[38px]
                w-[38px]
                shrink-0
                object-contain

                sm:h-[46px]
                sm:w-[46px]

                lg:mt-[5px]
                lg:h-[54px]
                lg:w-[54px]
              "
            />

            <h2
              className="
                heading-font
                uppercase
                font-bold
                leading-[0.85]
                tracking-[-0.05em]
              "
              style={{
                fontSize: "clamp(38px, 7vw, 80px)",
              }}
            >
              <span className="block">
                OUR STATEMENTS
              </span>

              <span className="block">
                OF{" "}
                <span className="text-[#ED4823]">
                  FAITH
                </span>
              </span>
            </h2>
          </div>

          {/* SKIP BUTTON */}

          <div
            className="
              self-start
              ml-[48px]

              sm:ml-[60px]

              lg:mt-[100px]
              lg:mr-[28px]
              lg:ml-0
            "
          >
            <TertiaryButton href="#about_vision-mission">
              SKIP DOWN
            </TertiaryButton>
          </div>
        </div>

        {/* =========================================
            MAIN CONTENT
        ========================================== */}

        <div
          className="
            relative
            z-10
            mt-[40px]
            flex
            min-h-[calc(100vh-220px)]
            flex-col

            lg:mt-[25px]
            lg:h-[calc(100vh-150px)]
            lg:min-h-0
            lg:flex-row
            lg:items-center
          "
        >
          {/* =========================================
              LOVESQUAD AREA
          ========================================== */}

          <div
            className="
              flex
              w-full
              shrink-0
              flex-col
              items-center
              justify-center
              overflow-hidden
              py-[30px]

              sm:py-[40px]

              lg:h-full
              lg:w-[32%]
              lg:py-0
            "
          >
            <Image
              src="/images/footer/lovesquad-graphic-cream.svg"
              alt="LoveSquad Church"
              width={180}
              height={180}
              className="
                h-auto
                w-[120px]
                shrink-0
                object-contain

                sm:w-[150px]

                lg:w-[180px]
              "
            />

            {/* MARQUEE */}

            <div
              className="
                mt-[14px]
                w-[150px]
                overflow-hidden
                whitespace-nowrap

                sm:mt-[18px]
                sm:w-[180px]
              "
            >
              <div
                className="
                  marquee-track
                  flex
                  w-max
                "
              >
                <span
                  className="
                    marquee-text
                    shrink-0
                    heading-font
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[-0.02em]
                    text-[#ED4823]

                    sm:text-[10px]
                  "
                >
                  LOVE IS US * LOVESQUAD CHURCH * LOVE IS US *
                  LOVESQUAD CHURCH *
                </span>

                <span
                  className="
                    marquee-text
                    shrink-0
                    heading-font
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[-0.02em]
                    text-[#ED4823]

                    sm:text-[10px]
                  "
                  aria-hidden="true"
                >
                  LOVE IS US * LOVESQUAD CHURCH * LOVE IS US *
                  LOVESQUAD CHURCH *
                </span>
              </div>
            </div>
          </div>

          {/* =========================================
              CARD VIEWPORT
          ========================================== */}

          <div
            className="
              relative
              w-full
              overflow-hidden
              px-[20px]
              pb-[50px]

              sm:px-[28px]

              lg:h-[380px]
              lg:w-[68%]
              lg:px-0
              lg:pb-0
            "
          >
            {/* CARD TRACK */}

            <div
              ref={trackRef}
              className="
                flex
                w-max
                items-stretch
                gap-[16px]

                sm:gap-[20px]

                lg:gap-[24px]
              "
              style={{
                transform: `translate3d(${translateX}px, 0, 0)`,
              }}
            >
              {faithStatements.map((statement) => (
                <FaithCard
                  key={statement.number}
                  number={statement.number}
                  title={statement.title}
                  description={statement.description}
                  scripture={statement.scripture}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          MARQUEE ANIMATION
      ========================================== */}

      <style jsx>{`
        .marquee-track {
          animation: lovesquad-marquee 12s linear infinite;
        }

        @keyframes lovesquad-marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}

/* =========================================
   FAITH CARD
========================================= */

function FaithCard({
  number,
  title,
  description,
  scripture,
}) {
  return (
    <div
      className="
        w-[calc(100vw-40px)]
        max-w-[420px]
        shrink-0
        border
        border-[#3B3B3B]
        p-[12px]

        sm:w-[440px]
        sm:p-[16px]

        lg:w-[520px]
        lg:p-[20px]
      "
    >
      <article
        className="
          relative
          h-[300px]
          border
          border-[#3B3B3B]
          px-[16px]
          py-[14px]

          sm:h-[320px]
          sm:px-[18px]

          lg:h-[338px]
          lg:px-[20px]
          lg:py-[15px]
        "
      >
        {/* TITLE */}

        <h3
          className="
            heading-font
            uppercase
            font-bold
            leading-none
            tracking-[-0.03em]
            text-[#F4EBDC]
          "
          style={{
            fontSize: "clamp(28px, 5vw, 36px)",
          }}
        >
          {title}
        </h3>

        {/* DESCRIPTION */}

        <p
          className="
            mt-[12px]
            max-w-[390px]
            text-[13px]
            leading-[18px]
            text-[#F4EBDC]

            sm:text-[14px]
          "
        >
          {description}
        </p>

        {/* SCRIPTURES */}

        <a
          href="#"
          className="
            absolute
            bottom-[20px]
            left-[16px]
            text-[11px]
            text-[#F4EBDC]
            underline
            underline-offset-[3px]
            transition-colors
            duration-300
            hover:text-[#ED4823]

            sm:bottom-[22px]
            sm:left-[18px]
            sm:text-[12px]

            lg:bottom-[25px]
            lg:left-[20px]
          "
        >
          {scripture}
        </a>

        {/* NUMBER */}

        <span
          className="
            absolute
            bottom-[10px]
            right-[10px]
            heading-font
            font-normal
            leading-none
            text-[#F4EBDC]

            sm:bottom-[12px]
            sm:right-[12px]
          "
          style={{
            fontSize: "clamp(40px, 7vw, 52px)",
          }}
        >
          {number}
        </span>
      </article>
    </div>
  );
}