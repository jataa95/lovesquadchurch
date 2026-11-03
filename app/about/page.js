import AboutHero from "@/components/about/AboutHero";
import Gallery from "@/components/home/Gallery";
import AboutValues from "@/components/about/AboutValues";
import AboutFaith from "@/components/about/AboutFaith";
import AboutVisionMission from "@/components/about/AboutVisionMission";
import AboutPastor from "@/components/about/AboutPastor";
import AboutFAQs from "@/components/about/AboutFAQs";
import Footer from "@/components/home/Footer";

export default function AboutPage() {
  return (
    <>

      <main>
        <AboutHero />
        <Gallery />
        <AboutValues />
        <AboutFaith />
        <AboutVisionMission />
        <AboutPastor />
        <AboutFAQs />
        <Footer />
      </main>
    </>
  );
}
