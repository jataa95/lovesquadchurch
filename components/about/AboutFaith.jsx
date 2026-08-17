"use client";

import Image from "next/image";
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
  return (
    <section
      id="statement-of-faith"
      className="relative w-full bg-[#F9E9D3] px-1.5 sm:px-2 lg:px-4"
    >
      <div className="relative min-h-screen bg-[#0B0B0B] pb-16 text-[#F4EBDC] sm:pb-24 lg:pb-36">
        {/* BACKGROUND TEXTURE */}
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.045) 0 1px, transparent 1px), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.035) 0 1px, transparent 1px), radial-gradient(circle at 40% 80%, rgba(255,255,255,0.025) 0 1px, transparent 1px)",
            backgroundSize: "5px 5px, 7px 7px, 11px 11px",
          }}
        />

        {/* STICKY HEADER CONTAINER */}
        <div className="sticky top-24 z-40 mx-auto flex max-w-[1400px] flex-col gap-4 bg-[#0B0B0B]/95 px-4 pt-4 pb-4 backdrop-blur-md sm:px-8 sm:pt-6 sm:pb-6 lg:flex-row lg:items-start lg:justify-between lg:px-12">
          {/* HEADER TITLE */}
          <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
            <Image
              src="/images/about/statement-of-faith-icon.svg"
              alt="Statement of Faith"
              width={96}
              height={80}
              className="mt-1 h-8 w-8 shrink-0 object-contain sm:h-12 sm:w-12 lg:mt-1.5 lg:h-16 lg:w-16"
            />

            <h2 className="heading-font text-[36px] font-bold uppercase leading-[0.88] tracking-[-0.05em] sm:text-[52px] lg:text-[72px] xl:text-[84px]">
              <span className="block">OUR STATEMENTS</span>
              <span className="block">
                OF <span className="text-[#ED4823]">FAITH</span>
              </span>
            </h2>
          </div>

          {/* STICKY SKIP BUTTON DESKTOP ALIGNMENT */}
          <div className="hidden lg:flex lg:self-center">
            <TertiaryButton href="#about_vision-mission">
              SKIP DOWN
            </TertiaryButton>
          </div>
        </div>

        {/* MOBILE STICKY SKIP BUTTON */}
        <div className="sticky top-[104px] z-30 mx-auto flex max-w-[1400px] justify-end px-4 sm:px-8 lg:hidden">
          <TertiaryButton href="#about_vision-mission">
            SKIP DOWN
          </TertiaryButton>
        </div>

        {/* MAIN CONTENT LAYOUT */}
        <div className="relative z-10 mx-auto mt-6 flex max-w-[1400px] flex-col px-4 sm:px-8 lg:mt-12 lg:flex-row lg:items-start lg:gap-12 lg:px-12">
          {/* LOVESQUAD GRAPHIC (Sticky on Desktop) */}
          <div className="hidden shrink-0 flex-col items-center justify-center lg:sticky lg:top-72 lg:flex lg:w-[30%] xl:w-[25%]">
            <Image
              src="/images/footer/lovesquad-graphic-cream.svg"
              alt="LoveSquad Church"
              width={180}
              height={180}
              className="h-auto w-36 shrink-0 object-contain lg:w-44 xl:w-52"
            />

            {/* MARQUEE */}
            <div className="mt-4 w-36 overflow-hidden whitespace-nowrap lg:w-44 xl:w-52">
              <div className="marquee-track flex w-max">
                <span className="marquee-text heading-font shrink-0 text-[10px] font-bold uppercase tracking-[-0.02em] text-[#ED4823]">
                  LOVE IS US * LOVESQUAD CHURCH * LOVE IS US * LOVESQUAD CHURCH
                  *
                </span>
                <span
                  className="marquee-text heading-font shrink-0 text-[10px] font-bold uppercase tracking-[-0.02em] text-[#ED4823]"
                  aria-hidden="true"
                >
                  LOVE IS US * LOVESQUAD CHURCH * LOVE IS US * LOVESQUAD CHURCH
                  *
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: STACKING CARDS */}
          <div className="w-full lg:w-[70%] xl:w-[75%]">
            <div className="flex flex-col gap-5 sm:gap-6 lg:gap-8">
              {faithStatements.map((statement, index) => (
                <FaithCard
                  key={statement.number}
                  index={index}
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

      {/* MARQUEE ANIMATION */}
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

/* RESPONSIVE STACKING FAITH CARD (JSX Plain JavaScript) */
function FaithCard({ index, number, title, description, scripture }) {
  return (
    <div
      className="sticky top-44 w-full border border-[#3B3B3B] bg-[#0B0B0B] p-2 shadow-2xl transition-all duration-300 sm:p-3 lg:top-48 lg:p-4"
      style={{
        zIndex: index + 10,
        marginTop: index > 0 ? `${index * 8}px` : "0px",
      }}
    >
      <article className="relative min-h-[220px] border border-[#3B3B3B] bg-[#0B0B0B] p-4 pb-12 sm:p-6 sm:pb-14 lg:min-h-[280px] lg:p-8 lg:pb-16 xl:p-10 xl:pb-20">
        {/* TITLE */}
        <h3 className="heading-font text-[24px] font-bold uppercase leading-none tracking-[-0.03em] text-[#F4EBDC] sm:text-[32px] lg:text-[40px] xl:text-[48px]">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="mt-2 max-w-[680px] text-[13px] leading-[18px] text-[#F4EBDC] sm:mt-3 sm:text-[15px] sm:leading-[22px] lg:mt-4 lg:text-[16px] lg:leading-[24px] xl:text-[17px] xl:leading-[26px]">
          {description}
        </p>

        {/* SCRIPTURES */}
        <a
          href="#"
          className="absolute bottom-3 left-4 text-[12px] text-[#F4EBDC] underline underline-offset-4 transition-colors duration-300 hover:text-[#ED4823] sm:bottom-4 sm:left-6 sm:text-[13px] lg:bottom-6 lg:left-8 lg:text-[15px]"
        >
          {scripture}
        </a>

        {/* NUMBER */}
        <span className="heading-font absolute bottom-2 right-3 text-[32px] font-normal leading-none text-[#F4EBDC] sm:bottom-3 sm:right-4 sm:text-[44px] lg:bottom-5 lg:right-8 lg:text-[56px] xl:text-[64px]">
          {number}
        </span>
      </article>
    </div>
  );
}