import AboutSplitSection from "./AboutSplitSection";

const values = [
  {
    number: "01",
    title: "LOVE GOD",
    description:
      "Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
    scripture: "Scriptures",
  },
  {
    number: "02",
    title: "LOREM IPSUM",
    description:
      "Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
    scripture: "Scriptures",
  },
  {
    number: "03",
    title: "LOREM IPSUM",
    description:
      "Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
    scripture: "Scriptures",
  },
  {
    number: "04",
    title: "LOREM IPSUM",
    description:
      "Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa Condimentum Quam, A Eleifend Dolor Elit Quis Orci.",
    scripture: "Scriptures",
  },
];

export default function AboutValues() {
  return (
    <AboutSplitSection
      id="about_values"
      icon="/images/about/our-values-icon.svg"
      iconAlt="Our Values"
      heading={
        <>
          <span className="block">OUR</span>
          <span className="block text-[#ED4823]">VALUES</span>
        </>
      }
    >
      <div className="flex flex-col">
        {values.map((value, index) => (
          <div
            key={value.number}
            className={`py-6 first:pt-0 last:pb-0 ${
              index !== values.length - 1 ? "border-b border-[#9B9B9B]" : ""
            }`}
          >
            <div className="flex items-start gap-3">
              <span className="heading-font pt-1 text-[12px] font-bold leading-none sm:text-[14px]">
                {value.number}
              </span>
              <h3
                className="heading-font font-bold leading-[0.9] tracking-[-0.02em]"
                style={{ fontSize: "clamp(26px, 6vw, 40px)" }}
              >
                {value.title}
              </h3>
            </div>
            <p className="mb-2 mt-3 max-w-[600px] text-[14px] leading-[20px] text-[#555555] sm:text-[15px] sm:leading-[22px] lg:text-[16px]">
              {value.description}
            </p>
            <p className="text-[14px] leading-[18px] text-[#555555] sm:text-[15px] lg:text-[16px]">
              {value.scripture}
            </p>
          </div>
        ))}
      </div>
    </AboutSplitSection>
  );
}
