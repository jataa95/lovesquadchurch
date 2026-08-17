import Image from "next/image";

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
    <section
      id="values"
      className="
        w-full
        bg-[#F9E9D3]
        px-5
        py-12

        sm:px-8
        sm:py-16

        lg:px-[30px]
        lg:py-20
      "
    >
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-8 sm:gap-10 lg:min-h-[540px] lg:flex-row lg:gap-0">
        {/* ================================
            LEFT SIDE
        ================================= */}
        <div className="flex w-full items-start lg:w-1/2">
          <div className="flex items-start gap-3 sm:gap-4 lg:gap-[16px]">
            {/* Icon */}
            <Image
              src="/images/about/our-values-icon.svg"
              alt="Our Values"
              width={96}
              height={80}
              className="mt-1 h-auto w-[36px] shrink-0 object-contain sm:w-[44px] lg:mt-[2px] lg:w-[54px]"
            />

            {/* Heading */}
            <h2
              className="heading-font font-bold uppercase leading-[0.9] tracking-[-0.05em]"
              style={{
                fontSize: "clamp(42px, 10vw, 80px)",
              }}
            >
              <span className="block text-[#4A4A4A]">OUR</span>
              <span className="block text-[#ED4823]">VALUES</span>
            </h2>
          </div>
        </div>

        {/* ================================
            RIGHT SIDE
        ================================= */}
        <div
          className="
            w-full
            border-t-2
            border-[#ED4823]
            pt-6

            sm:pt-8

            lg:w-1/2
            lg:border-l-2
            lg:border-t-0
            lg:pl-[22px]
            lg:pt-0
          "
        >
          <div className="flex flex-col">
            {values.map((value, index) => (
              <div
                key={value.number}
                className={`
                  py-5
                  sm:py-6
                  ${index !== values.length - 1 ? "border-b border-[#9B9B9B]" : "pb-0"}
                  ${index === 0 ? "pt-0" : ""}
                `}
              >
                {/* Number + Title */}
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <span className="heading-font pt-1 text-[12px] font-bold leading-none text-[#4A4A4A] sm:text-[14px]">
                    {value.number}
                  </span>

                  <h3
                    className="heading-font font-bold leading-[0.9] tracking-[-0.02em] text-[#4A4A4A]"
                    style={{
                      fontSize: "clamp(26px, 6vw, 40px)",
                    }}
                  >
                    {value.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="mt-3 mb-2 max-w-[600px] text-[14px] font-normal leading-[20px] text-[#555555] sm:mt-4 sm:mb-3 sm:text-[15px] sm:leading-[22px] lg:text-[16px] lg:leading-[22px]">
                  {value.description}
                </p>

                {/* Scripture */}
                <p className="text-[14px] leading-[18px] text-[#555555] sm:text-[15px] sm:leading-[20px] lg:text-[16px]">
                  {value.scripture}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}