import Hero from "@/components/home/Hero";
import ServiceRecap from "@/components/home/ServiceRecap";
import About from "@/components/home/About";
import LoveSpots from "@/components/home/LoveSpots";
import Testimonials from "@/components/home/Testimonials";
import Events from "@/components/home/Events";
import Gallery from "@/components/home/Gallery";
import Footer from "@/components/home/Footer";
import Preloader from "@/components/home/Preloader";

export default function Home() {
  return (
    <>
      <Preloader />
      <Hero />
      <ServiceRecap />
      <About />
      <LoveSpots />
      <Testimonials />
      <Events />
      <Gallery />
      <Footer />
    </>
  );
}
