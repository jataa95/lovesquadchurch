import Footer from "@/components/home/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import AboutFAQs from "@/components/about/AboutFAQs";

export const metadata = {
  title: "Contact | Love Squad Church",
  description:
    "Get in touch with Love Squad Church. Send us a message or inquiry.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-cream">
      <ContactHero />
      <ContactForm />
      <AboutFAQs />
      <Footer />
    </main>
  );
}
