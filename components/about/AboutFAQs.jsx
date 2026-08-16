"use client";

import Image from "next/image";
import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Cras Aliquet, Sem Consectetur?",
    answer:
      "Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
  },
  {
    question: "Cras Aliquet, Sem Consectetur?",
    answer:
      "Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
  },
  {
    question: "Cras Aliquet, Sem Consectetur?",
    answer:
      "Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
  },
  {
    question: "Cras Aliquet, Sem Consectetur?",
    answer:
      "Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
  },
  {
    question: "Cras Aliquet, Sem Consectetur?",
    answer:
      "Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
  },
  {
    question: "Cras Aliquet, Sem Consectetur?",
    answer:
      "Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
  },
];

export default function AboutFAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#F9E9D3]
        px-[8px]
      "
    >
      {/* =====================================================
          INNER WRAPPER
      ====================================================== */}
      <div
        className="
          relative
          w-full
          bg-[#F9E9D3]
          px-[16px]
          py-[40px]

          sm:px-[24px]
          sm:py-[48px]

          md:px-[32px]
          md:py-[56px]

          lg:px-[40px]
          lg:py-[64px]
        "
      >
        {/* =====================================================
            HEADING
        ====================================================== */}
        <h2
          className="
            heading-font
            uppercase
            font-bold
            leading-none
            tracking-[-0.04em]
            text-[#4A4A4A]

            text-[52px]

            sm:text-[64px]

            md:text-[72px]

            lg:text-[80px]
          "
        >
          FAQs
        </h2>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}
        <div
          className="
            mt-[24px]
            grid
            grid-cols-1
            gap-[28px]

            sm:gap-[36px]

            md:grid-cols-2
            md:gap-[32px]

            lg:gap-[48px]
          "
        >
          {/* =================================================
              LEFT IMAGE
          ================================================== */}
          <div
            className="
              relative
              h-[280px]
              w-full
              overflow-hidden
              bg-[#171515]

              sm:h-[340px]

              md:h-[360px]

              lg:h-[420px]
            "
          >
            <Image
              src="/images/about/faq.jpg"
              alt="LoveSquad FAQ"
              fill
              className="
                object-cover
                transition-transform
                duration-500
                hover:scale-105
              "
              sizes="(max-width: 767px) 100vw,(max-width: 1024px) 50vw,50vw"
            />
          </div>

          {/* =================================================
              RIGHT FAQ LIST
          ================================================== */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-[10px]

              sm:gap-[12px]
            "
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`
                    group
                    w-full
                    overflow-hidden
                    border
                    border-[#262626]
                    bg-transparent
                    transition-all
                    duration-300
                    ease-out

                    ${
                      isOpen
                        ? "bg-[#EDE3D2]"
                        : "hover:bg-[#EEE4D4]"
                    }
                  `}
                >
                  {/* =================================================
                      QUESTION
                  ================================================== */}
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="
                      flex
                      min-h-[52px]
                      w-full
                      items-center
                      justify-between
                      px-[12px]
                      py-[10px]
                      text-left
                      transition-all
                      duration-300
                      ease-out

                      sm:min-h-[56px]
                      sm:px-[14px]
                      sm:py-[12px]

                      md:min-h-[60px]
                    "
                  >
                    {/* QUESTION TEXT */}
                    <span
                      className="
                        heading-font
                        max-w-[90%]
                        font-bold
                        tracking-[-0.01em]
                        text-[#575656]
                      "
                      style={{
                        fontSize: "clamp(14px, 1.4vw, 16px)",
                        lineHeight: "20px",
                      }}
                    >
                      {faq.question}
                    </span>

                    {/* PLUS ICON */}
                    <span
                      className="
                        ml-[12px]
                        flex
                        h-[24px]
                        w-[24px]
                        shrink-0
                        items-center
                        justify-center
                        text-[#575656]

                        sm:h-[26px]
                        sm:w-[26px]
                      "
                    >
                      <Plus
                        size={22}
                        strokeWidth={1.8}
                        className={`
                          transition-transform
                          duration-300
                          ease-out

                          ${
                            isOpen
                              ? "rotate-45"
                              : "rotate-0"
                          }
                        `}
                      />
                    </span>
                  </button>

                  {/* =================================================
                      ANSWER
                  ================================================== */}
                  <div
                    className={`
                      grid
                      transition-all
                      duration-500
                      ease-[cubic-bezier(0.22,1,0.36,1)]

                      ${
                        isOpen
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }
                    `}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div
                        className={`
                          border-t
                          border-[#9D9A93]
                          px-[14px]
                          pb-[16px]
                          pt-[12px]
                          transition-all
                          duration-500

                          ${
                            isOpen
                              ? "translate-y-0 opacity-100"
                              : "-translate-y-[8px] opacity-0"
                          }
                        `}
                      >
                        <p
                          className="
                            max-w-[540px]
                            text-[#575656]
                          "
                          style={{
                            fontSize: "13px",
                            lineHeight: "18px",
                          }}
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