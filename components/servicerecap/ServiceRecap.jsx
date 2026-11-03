"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import SecondaryButton from "@/components/ui/buttons/SecondaryButton";
import ServiceRecapGallery from "@/components/home/ServiceRecap/ServiceRecapGallery";

/*
 * Service Recap page: centred hero (like the other pages), the recap
 * write-up in the site's standard type, then the homepage's scroll-driven
 * Service Recap picture slider.
 */
export default function ServiceRecapPage({
  title = "LAST SERVICE",
  subtitle = "RECAP",
  topic = "CRAS ALIQUET, SEM",
  speaker = "PST. SDESRWHXBS",
  heroImageUrl = "/images/service-recap/sr4.jpg",
  bodyTitle = "LOREM IPSUM",
  leadText = "Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
  paragraphs = [
    "Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
    "Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
    "Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
    "Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
    "Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
  ],
}) {
  return (
    <div id="servicerecap" className="w-full bg-cream text-[#575656]">
      {/* ---------------- Hero ---------------- */}
      <section className="pt-[calc(var(--nav-h)+40px)] lg:pt-[calc(var(--nav-h)+56px)]">
        <Container>
          <div className="flex flex-col items-center text-center">
            <h1
              className="heading-font font-bold uppercase leading-none tracking-[-0.035em]"
              style={{ fontSize: "clamp(24px, 3vw, 40px)" }}
            >
              <span className="text-[#ED4823]">{title}</span>
            </h1>
            <h2
              className="heading-font font-bold uppercase leading-[0.82] tracking-[-0.055em] text-[#4A4A4A]"
              style={{ fontSize: "clamp(4rem, 13.9vw, 200px)" }}
            >
              {subtitle}
            </h2>

            <div className="relative mt-6 h-[260px] w-full overflow-hidden bg-[#171515] sm:h-[340px] md:h-[380px] lg:mt-8 lg:h-[460px]">
              <Image
                src={heroImageUrl}
                alt={`${title} ${subtitle}`}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1152px"
                className="object-cover"
              />
            </div>

            <div className="mt-8 flex flex-col items-center lg:mt-10">
              <p
                className="heading-font font-bold uppercase leading-none tracking-[-0.02em] text-[#4A4A4A]"
                style={{ fontSize: "clamp(20px, 2vw, 26px)" }}
              >
                {topic}
              </p>
              <p className="mt-2 text-[14px] uppercase tracking-[0.12em] text-[#5A5853] sm:text-[15px]">
                {speaker}
              </p>
              <div className="mt-5">
                <SecondaryButton href="/messages">GO TO MESSAGES</SecondaryButton>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------------- Write-up ---------------- */}
      <section className="section-py">
        <Container>
          <article className="mx-auto flex max-w-[680px] flex-col items-center text-center">
            <h3
              className="heading-font font-bold uppercase leading-[1.05] tracking-[-0.025em] text-[#4A4A4A]"
              style={{ fontSize: "clamp(26px, 3.4vw, 40px)" }}
            >
              {bodyTitle}
            </h3>
            <div className="mt-5 h-[2px] w-16 bg-[#ED4823]" />
            <p className="mt-6 text-[16px] font-medium leading-[26px] text-[#4A4A4A] lg:text-[18px] lg:leading-[28px]">
              {leadText}
            </p>
            <div className="mt-6 flex flex-col gap-4">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-[15px] leading-[24px] lg:text-[16px]">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        </Container>
      </section>

      {/* ---------------- Pictures (same slider as the homepage) ---------------- */}
      <ServiceRecapGallery withText={false} id="recap-gallery" />
    </div>
  );
}
