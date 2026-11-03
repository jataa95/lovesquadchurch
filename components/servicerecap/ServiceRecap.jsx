"use client";

import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
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
      <PageHero
        label={title.split(" ").length > 1 ? [title.split(" ")[0], title.split(" ").slice(1).join(" ")] : [title, ""]}
        title={subtitle}
        image={heroImageUrl}
        imageAlt={`${title} ${subtitle}`}
      >
        <div className="mt-8 flex flex-col items-center lg:mt-10">
          <p
            className="heading-font font-bold uppercase leading-none tracking-[-0.02em] text-[#4A4A4A]"
            style={{ fontSize: "clamp(20px, 2vw, 26px)" }}
          >
            {topic}
          </p>
          <p className="heading-font mt-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#ED4823] sm:text-[13px]">
            {speaker}
          </p>
          <div className="mt-5">
            <SecondaryButton href="/messages">GO TO MESSAGES</SecondaryButton>
          </div>
        </div>
      </PageHero>

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
                <p key={index} className="text-[15px] leading-[24px] text-[#575656] lg:text-[16px]">
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
