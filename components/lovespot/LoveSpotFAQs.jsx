"use client";

import Image from "next/image";
import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "Cras Aliquet, Sem Consectetur?",
    answer:
      "Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
  },
  {
    id: 2,
    question: "Cras Aliquet, Sem Consectetur?",
    answer:
      "Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
  },
  {
    id: 3,
    question: "Cras Aliquet, Sem Consectetur?",
    answer:
      "Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
  },
  {
    id: 4,
    question: "Cras Aliquet, Sem Consectetur?",
    answer:
      "Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
  },
  {
    id: 5,
    question: "Cras Aliquet, Sem Consectetur?",
    answer:
      "Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
  },
  {
    id: 6,
    question: "Cras Aliquet, Sem Consectetur?",
    answer:
      "Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
  },
];

export default function LoveSpotFAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="lovespot-faqs"
      className="relative w-full overflow-hidden bg-[#F9E9D3] px-[8px]"
    >
      <div className="relative w-full bg-[#F9E9D3] px-[16px] py-[24px] sm:px-[24px] sm:py-[48px] md:px-[32px] md:py-[56px]">
        {/* HEADING */}
        <h2
          className="heading-font uppercase font-bold leading-none tracking-[-0.04em] text-[#4A4A4A]"
          style={{ fontSize: "clamp(48px, 8vw, 80px)" }}
        >
          FAQs
        </h2>

        {/* MAIN CONTENT */}
        <div className="mt-[24px] grid grid-cols-1 gap-[24px] sm:gap-[28px] lg:grid-cols-2 lg:gap-[32px]">
          {/* LEFT IMAGE */}
          <div className="relative h-[260px] w-full overflow-hidden bg-[#171515] sm:h-[320px] md:h-[360px] lg:h-[360px] lg:max-w-[580px]">
            <Image
              src="/images/about/faq.jpg"
              alt="LoveSquad FAQ"
              fill
              className="object-cover"
              sizes="(max-width: 1023px) 100vw, 50vw"
            />
          </div>

          {/* RIGHT FAQ LIST */}
          <div className="flex w-full max-w-[620px] flex-col gap-[12px]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.id}
                  className={`group w-full overflow-hidden border border-[#262626] bg-transparent transition-all duration-300 ease-out ${
                    isOpen ? "bg-[#EDE3D2]" : "hover:bg-[#EEE4D4]"
                  }`}
                >
                  {/* QUESTION */}
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="flex min-h-[48px] w-full items-center justify-between px-[12px] py-[10px] text-left transition-all duration-300 ease-out group-hover:px-[15px]"
                  >
                    <span
                      className="heading-font font-bold tracking-[-0.01em] text-[#262626]"
                      style={{ fontSize: "16px", lineHeight: "20px" }}
                    >
                      {faq.question}
                    </span>

                    {/* PLUS / CROSS ICON (INLINE SVG TO PREVENT LUCIDE CHUNK CRASH) */}
                    <span className="ml-[16px] flex h-[24px] w-[24px] shrink-0 items-center justify-center text-[#262626]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-transform duration-300 ease-out ${
                          isOpen ? "rotate-45" : "rotate-0"
                        }`}
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                    </span>
                  </button>

                  {/* ANSWER */}
                  <div
                    className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div
                        className={`border-t border-[#9D9A93] px-[15px] pb-[16px] pt-[12px] transition-all duration-500 ${
                          isOpen
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-[8px] opacity-0"
                        }`}
                      >
                        <p
                          className="max-w-[540px] text-[#5A5853]"
                          style={{ fontSize: "13px", lineHeight: "18px" }}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
