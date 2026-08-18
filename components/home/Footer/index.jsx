import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";

export default function Footer() {
  return (
    <footer
      id="homepage-bottom"
      className="relative overflow-hidden bg-[#0E0E0E] px-[20px] pt-[24px] pb-[24px] sm:px-[30px] sm:pt-[40px] sm:pb-[28px] md:px-[40px] md:pt-[45px] md:pb-[28px] lg:px-[40px] lg:pt-[35px] lg:pb-[28px]"
    >
      <div className="mx-auto flex w-fit max-w-full flex-col items-center justify-center gap-[10px] sm:gap-[45px] md:gap-[50px] lg:flex-row lg:items-center lg:justify-center lg:gap-[40px]">
        {/* BRAND */}
        <FooterBrand />

        {/* LINKS */}
        <FooterLinks />
      </div>
    </footer>
  );
}
