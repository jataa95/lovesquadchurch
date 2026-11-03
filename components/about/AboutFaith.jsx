"use client";

import AboutSplitSection from "./AboutSplitSection";

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
    <AboutSplitSection
      id="statement-of-faith"
      tone="dark"
      divider={false}
      icon="/images/about/statement-of-faith-icon.svg"
      iconWidth={84}
      iconHeight={95}
      iconAlt="Statement of Faith"
      heading={
        <>
          <span className="block">OUR STATEMENTS</span>
          <span className="block">
            OF <span className="text-[#ED4823]">FAITH</span>
          </span>
        </>
      }
    >
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
    </AboutSplitSection>
  );
}

function FaithCard({ index, number, title, description, scripture }) {
  return (
    <div
      className="w-full border border-[#3B3B3B] bg-[#0E0E0E] p-2 shadow-2xl sm:p-3 lg:sticky lg:p-4"
      // Desktop: cards pin at the heading line, each a little lower, and
      // stack on top of each other as you scroll.
      style={{
        zIndex: index + 10,
        top: `calc(var(--sticky-top) + ${index * 14}px)`,
      }}
    >
      <article className="relative min-h-[220px] border border-[#3B3B3B] bg-[#0E0E0E] p-4 pb-12 sm:p-6 sm:pb-14 lg:min-h-[280px] lg:p-8 lg:pb-16 xl:p-10 xl:pb-20">
        <h3 className="heading-font text-[24px] font-bold uppercase leading-none tracking-[-0.03em] text-[#F4EBDC] sm:text-[32px] lg:text-[40px] xl:text-[48px]">
          {title}
        </h3>

        <p className="mt-2 max-w-[680px] text-[13px] leading-[18px] text-[#F4EBDC] sm:mt-3 sm:text-[15px] sm:leading-[22px] lg:mt-4 lg:text-[16px] lg:leading-[24px] xl:text-[17px] xl:leading-[26px]">
          {description}
        </p>

        <a
          href="#"
          className="absolute bottom-3 left-4 text-[12px] text-[#F4EBDC] underline underline-offset-4 transition-colors duration-300 hover:text-[#ED4823] sm:bottom-4 sm:left-6 sm:text-[13px] lg:bottom-6 lg:left-8 lg:text-[15px]"
        >
          {scripture}
        </a>

        <span className="heading-font absolute bottom-2 right-3 text-[32px] font-normal leading-none text-[#F4EBDC] sm:bottom-3 sm:right-4 sm:text-[44px] lg:bottom-5 lg:right-8 lg:text-[56px] xl:text-[64px]">
          {number}
        </span>
      </article>
    </div>
  );
}