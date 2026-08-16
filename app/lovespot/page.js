import Navbar from "@/components/layout/Navbar/Navbar";
import LoveSpotHero from "@/components/lovespot/LoveSpotHero";
import LoveSpotIntro from "@/components/lovespot/LoveSpotIntro";
import LoveSpotTestimonials from "@/components/lovespot/LoveSpotTestimonials";
import LoveSpotFAQs from "@/components/lovespot/LoveSpotFAQs";
import Footer from "@/components/home/Footer";

export default function LoveSpotPage() {
  return (
    <>
      <Navbar />
      <LoveSpotHero />
      <LoveSpotIntro />
      <LoveSpotTestimonials />
      <LoveSpotFAQs />
      <Footer />
    </>
  );
}