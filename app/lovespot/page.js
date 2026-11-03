import LoveSpotHero from "@/components/lovespot/LoveSpotHero";
import LoveSpotIntro from "@/components/lovespot/LoveSpotIntro";
import LoveSpotTestimonials from "@/components/lovespot/LoveSpotTestimonials";
import AboutFAQs from "@/components/about/AboutFAQs";
import Footer from "@/components/home/Footer";

export default function LoveSpotPage() {
  return (
    <>
      <LoveSpotHero />
      <LoveSpotIntro />
      <LoveSpotTestimonials />
      <AboutFAQs id="lovespot-faqs" />
      <Footer />
    </>
  );
}
