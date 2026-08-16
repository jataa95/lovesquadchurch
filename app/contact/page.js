import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/home/Footer";
import ContactHero from "@/components/contact/ContactHero";
import AboutFaqs from "@/components/about/AboutFAQs"; // Adjust to your FAQs component path

export const metadata = {
  title: "Contact | Love Squad Church",
  description:
    "Get in touch with Love Squad Church. Send us a message or inquiry.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F9E9D3]">
      <Navbar />
      <ContactHero />
      <AboutFaqs />
      <Footer />
    </main>
  );
}
