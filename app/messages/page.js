import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/home/Footer";
import MessagesHero from "@/components/messages/MessagesHero";
import MessageSearch from "@/components/messages/MessageSearch";
import AboutFAQs from "@/components/about/AboutFAQs";

export const metadata = {
  title: "Messages | Love Squad Church",
  description: "Browse and search through sermons and messages from Love Squad Church.",
};

export default function MessagesPage() {
  return (
    <main className="min-h-screen bg-[#F9E9D3]">
      <Navbar />
      <MessagesHero />
      <MessageSearch />
      <AboutFAQs />
      <Footer />
    </main>
  );
}