import Navbar from "@/components/layout/Navbar/Navbar";
import Hero from "@/components/home/Hero";
import ServiceRecap from "@/components/home/ServiceRecap";
import About from "@/components/home/About";
import LoveSpots from "@/components/home/LoveSpots";
import Testimonials from "@/components/home/Testimonials";
import Events from "@/components/home/Events";
import Gallery from "@/components/home/Gallery";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
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
