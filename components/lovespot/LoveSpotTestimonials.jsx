"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { TertiaryButton } from "@/components/ui/buttons";

const testimonials = [
  {
    text: "Condimentum Ultricies, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci. Cras Aliquet Sem Consectetur Condimentum Ultricies, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
    name: "PRECIOUS RAMAH",
  },
  {
    text: "Cras Aliquet Sem Consectetur Condimentum Ultricies, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci. Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
    name: "DAVID OLADELE",
  },
  {
    text: "Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci. Cras Aliquet Sem Consectetur Condimentum Ultricies, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
    name: "ESTHER ADEBAYO",
  },
];

export default function LoveSpotTestimonials() {
  const sectionRef = useRef(null);
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const scrollProgress = -rect.top;
      
      const hideThreshold = sectionHeight - 350;
      
      if (scrollProgress > 0 && scrollProgress < hideThreshold) {
        setShowSkip(true);
      } else {
        setShowSkip(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSkipClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const targetElement = document.getElementById("lovespot-faqs");
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
      history.pushState(null, null, "#lovespot-faqs");
    }
  };

  return (
    <section
      ref={sectionRef}
      id="lovespot-testimonials"
      className="relative w-full bg-[#0B0B0B] px-1.5 sm:px-2 lg:px-4 text-[#F4EBDC]"
    >
      {/* SKIP BUTTON */}
      <div className={`fixed right-6 lg:right-12 z-50 transition-all duration-300 pointer-events-none top-24 pt-8 lg:pt-20 lg:top-32 ${showSkip ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
        <div className="pointer-events-auto shadow-2xl" onClick={handleSkipClick}>
          <TertiaryButton href="#lovespot-faqs">
            SKIP
          </TertiaryButton>
        </div>
      </div>

      <div className="relative min-h-screen bg-[#0B0B0B] py-4 text-[#F4EBDC] sm:pb-24 lg:py-24">
        {/* BACKGROUND PATTERN */}
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.045) 0 1px, transparent 1px), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.035) 0 1px, transparent 1px), radial-gradient(circle at 40% 80%, rgba(255,255,255,0.025) 0 1px, transparent 1px)",
            backgroundSize: "5px 5px, 7px 7px, 11px 11px",
          }}
        />

        {/* STICKY HEADER */}
        <div className="sticky top-16 lg:top-24 z-40 mx-auto flex max-w-[1400px] flex-col gap-4 bg-[#0B0B0B]/95 px-4 pt-4 pb-4 backdrop-blur-md sm:px-8 sm:pt-6 sm:pb-6 lg:flex-row lg:items-start lg:justify-between lg:px-12">
          <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
            <h2
              className="heading-font uppercase font-bold leading-[0.85] tracking-[-0.045em] text-[#F4EBDC]"
              style={{ fontSize: "clamp(28px, 4vw, 56px)" }}
            >
              <span className="block">SAPIEN IPSUM, AC TINCIDUNT</span>
              <span className="block text-[#ED4823]">LOREM LACINIA VEL.</span>
            </h2>
          </div>
        </div>

        {/* CONTENT WRAPPER: GRAPHIC ON LEFT, STACKING CARDS ON RIGHT */}
        <div className="relative z-10 mx-auto mt-6 flex max-w-[1400px] flex-col px-4 sm:px-8 lg:mt-12 lg:flex-row lg:items-start lg:gap-12 lg:px-12">
          {/* LEFT SIDE GRAPHIC & MARQUEE (DESKTOP ONLY) */}
          <div className="hidden shrink-0 flex-col items-center justify-center lg:sticky lg:top-72 lg:flex lg:w-[30%] xl:w-[25%]">
            <Image
              src="/images/footer/lovesquad-graphic-cream.svg"
              alt="LoveSquad Church"
              width={180}
              height={180}
              className="h-auto w-36 shrink-0 object-contain lg:w-44 xl:w-52"
            />

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

          {/* RIGHT SIDE STACKING CARDS CONTAINER */}
          <div className="w-full lg:w-[70%] xl:w-[75%]">
            <div className="flex flex-col gap-5 sm:gap-6 lg:gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.name}
                  index={index}
                  text={testimonial.text}
                  name={testimonial.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

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

/* =====================================================
   TESTIMONIAL CARD
===================================================== */

function TestimonialCard({ index, text, name }) {
  return (
    <div
      className="sticky top-44 w-full border border-[#3B3B3B] bg-[#0B0B0B] p-2 shadow-2xl transition-all duration-300 sm:p-3 lg:top-48 lg:p-4"
      style={{
        zIndex: index + 10,
        marginTop: index > 0 ? `${index * 8}px` : "0px",
      }}
    >
      <div className="relative h-full w-full overflow-hidden border border-[#575656] bg-[#0B0B0B] px-[36px] py-[36px] sm:px-[48px] sm:py-[44px] lg:px-[64px] lg:py-[52px]">
        {/* TOP LEFT CORNER */}
        <Image
          src="/images/lovespot/top-left.svg"
          alt=""
          width={70}
          height={70}
          className="pointer-events-none absolute left-[12px] top-[12px] z-30 h-[52px] w-[52px] object-contain sm:left-[16px] sm:top-[16px] sm:h-[60px] sm:w-[60px] lg:left-[18px] lg:top-[18px] lg:h-[70px] lg:w-[70px]"
        />

        {/* BOTTOM RIGHT CORNER */}
        <Image
          src="/images/lovespot/bottom-right.svg"
          alt=""
          width={70}
          height={70}
          className="pointer-events-none absolute bottom-[12px] right-[12px] z-30 h-[52px] w-[52px] object-contain sm:bottom-[16px] sm:right-[16px] sm:h-[60px] sm:w-[60px] lg:bottom-[18px] lg:right-[18px] lg:h-[70px] lg:w-[70px]"
        />

        {/* CARD CONTENT */}
        <div className="flex h-full w-full flex-col justify-between overflow-hidden pl-[10px]">
          {/* TESTIMONIAL */}
          <div className="max-w-[900px]">
            <p
              className="text-[#F4EBDC]"
              style={{
                marginTop: "8px",
                fontSize: "clamp(13px, 1.3vw, 17px)",
                lineHeight: "1.5",
                fontWeight: 300,
              }}
            >
              {text}
            </p>
          </div>

          {/* AUTHOR */}
          <div className="mt-8 flex shrink-0 items-center gap-[9px] sm:gap-[12px]">
            <div className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full border border-[#F4EBDC] sm:h-[28px] sm:w-[28px]">
              <div className="h-[6px] w-[6px] rounded-full bg-[#F4EBDC] sm:h-[7px] sm:w-[7px]" />
            </div>

            <span
              className="heading-font whitespace-nowrap uppercase font-bold text-[#F4EBDC]"
              style={{
                fontSize: "clamp(12px, 1.2vw, 14px)",
                lineHeight: "18px",
              }}
            >
              {name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}