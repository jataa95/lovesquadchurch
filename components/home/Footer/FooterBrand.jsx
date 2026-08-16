import Image from "next/image";

export default function FooterBrand() {
  return (
    <div className="mx-auto flex w-full max-w-[180px] flex-col items-center px-0 pt-[20px] sm:pt-[50px] md:pt-[60px] lg:pt-[30px]">
      {/* =================================
          LOVESQUAD CREAM GRAPHIC
      ================================== */}
      <div className="relative h-[110px] w-[120px] sm:h-[125px] sm:w-[130px] md:h-[135px] md:w-[140px] lg:h-[145px] lg:w-[150px]">
        <Image
          src="/images/footer/lovesquad-graphic-cream.svg"
          alt="LoveSquad Church"
          fill
          priority
          className="object-contain"
        />
      </div>

      {/* =================================
          MOVING TEXT
      ================================== */}
      <div className="mt-[10px] w-[140px] overflow-hidden text-center sm:mt-[12px] sm:w-[150px] md:w-[160px]">
        <div className="footer-marquee">
          <div className="footer-marquee-track whitespace-nowrap text-[9px] sm:text-[10px]">
            <span>
              LOVE IS US * LOVESQUAD CHURCH * LOVE IS US * LOVESQUAD CHURCH *
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}