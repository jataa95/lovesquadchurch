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
        px-[16px]
        py-[60px]
        sm:px-[24px]
        sm:py-[70px]
        lg:px-[30px]
        lg:py-[80px]
      "
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1400px]
          flex-col
          gap-[50px]
          lg:min-h-[540px]
          lg:flex-row
          lg:gap-0
        "
      >
        {/* ================================
            LEFT SIDE
        ================================= */}

        <div
          className="
            flex
            w-full
            items-start
            lg:w-1/2
          "
        >
          <div
            className="
              flex
              items-start
              gap-[8px]
            "
          >
            {/* Icon */}
            <Image
              src="/images/about/our-values-icon.svg"
              alt="Our Values"
              width={96}
              height={80}
              className="
                mt-[3px]
                h-[42px]
                w-[42px]
                shrink-0
                sm:h-[50px]
                sm:w-[50px]
                lg:mt-[5px]
                lg:h-[54px]
                lg:w-[54px]
              "
            />

            {/* Heading */}
            <h2
              className="
                heading-font
                uppercase
                font-bold
                leading-[0.88]
                tracking-[-0.05em]
              "
              style={{
                fontSize: "clamp(52px, 7vw, 80px)",
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
            border-l-0
            border-t-[2px]
            border-[#ED4823]
            pt-[28px]
            lg:w-1/2
            lg:border-l-[2px]
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
                  pb-[20px]
                  ${
                    index !== values.length - 1
                      ? "border-b border-[#9B9B9B]"
                      : ""
                  }
                  ${index !== 0 ? "pt-[22px]" : ""}
                `}
              >
                {/* Number + Title */}
                <div className="flex items-start gap-[10px]">
                  <span
                    className="
                      heading-font
                      pt-[3px]
                      text-[11px]
                      font-bold
                      leading-[10px]
                      text-[#4A4A4A]
                      sm:text-[12px]
                    "
                  >
                    {value.number}
                  </span>

                  <h3
                    className="
                      heading-font
                      font-bold
                      leading-[0.8]
                      tracking-[-0.02em]
                      text-[#4A4A4A]
                    "
                    style={{
                      fontSize: "clamp(28px, 4vw, 40px)",
                    }}
                  >
                    {value.title}
                  </h3>
                </div>

                {/* Description */}
                <p
                  className="
                    mt-[16px]
                    mb-[14px]
                    max-w-[600px]
                    text-[14px]
                    font-normal
                    leading-[19px]
                    text-[#555555]
                    sm:text-[15px]
                    sm:leading-[20px]
                    lg:text-[16px]
                    lg:leading-[18px]
                  "
                >
                  {value.description}
                </p>

                {/* Scripture */}
                <p
                  className="
                    mt-[3px]
                    mb-[4px]
                    text-[14px]
                    leading-[18px]
                    text-[#555555]
                    sm:text-[15px]
                    lg:text-[16px]
                  "
                >
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
