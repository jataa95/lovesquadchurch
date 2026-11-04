"use client";

import { useEffect, useRef } from "react";
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
  const listRef = useRef(null);

  // Phones/tablets: the section heading sticks under the navbar, so the
  // cards stick just below it. Measure that heading and expose its bottom
  // as --faith-top (desktop uses the shared --sticky-top instead).
  useEffect(() => {
    const list = listRef.current;
    const section = list?.closest("section");
    const head = section?.querySelector(".sticky");
    if (!list || !head) return;
    const update = () => {
      const nav =
        parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--nav-h")) || 0;
      list.style.setProperty("--faith-top", `${Math.round(nav + head.offsetHeight + 12)}px`);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(head);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

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
      <div ref={listRef} className="flex flex-col gap-5 sm:gap-6 lg:gap-8">
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
      className="sticky top-[calc(var(--faith-top,var(--nav-h))+var(--i)*10px)] w-full border border-[#3B3B3B] bg-[#0E0E0E] p-2 shadow-2xl sm:p-3 lg:top-[calc(var(--sticky-top)+var(--i)*14px)] lg:p-4"
      // All screens: cards pin (below the sticky heading on phones, at the
      // heading line on desktop), each a little lower, and stack on top of
      // each other as you scroll.
      style={{ zIndex: index + 10, "--i": index }}
    >
      <article className="relative min-h-[220px] border border-[#3B3B3B] bg-[#0E0E0E] p-4 pb-12 sm:p-6 sm:pb-14 lg:min-h-[280px] lg:p-8 lg:pb-16 xl:p-10 xl:pb-20">
        <h3 className="heading-font text-[24px] font-bold uppercase leading-none tracking-[-0.03em] text-[#F9E9D3] sm:text-[32px] lg:text-[40px] xl:text-[48px]">
          {title}
        </h3>

        <p className="text-[15px] leading-[24px] lg:text-[16px] mt-2 max-w-[680px] text-[#F9E9D3] sm:mt-3 lg:mt-4">
          {description}
        </p>

        <a
          href="#"
          className="absolute bottom-3 left-4 text-[12px] text-[#F9E9D3] underline underline-offset-4 transition-colors duration-300 hover:text-[#ED4823] sm:bottom-4 sm:left-6 sm:text-[13px] lg:bottom-6 lg:left-8 lg:text-[15px]"
        >
          {scripture}
        </a>

        <span className="heading-font absolute bottom-2 right-3 text-[32px] font-normal leading-none text-[#F9E9D3] sm:bottom-3 sm:right-4 sm:text-[44px] lg:bottom-5 lg:right-8 lg:text-[56px] xl:text-[64px]">
          {number}
        </span>
      </article>
    </div>
  );
}