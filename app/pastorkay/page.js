import Navbar from "@/components/layout/Navbar/Navbar";
import PastorKayHero from "@/components/pastorkay/PastorKayHero";
import PastorKayBottom from "@/components/pastorkay/PastorKayBottom";

export const metadata = {
  title: "Pst. Kay | Love Squad Church",
  description: "Learn more about Pst. Kay and their mission at Love Squad Church.",
};

export default function PastorKayPage() {
  return (
    <main className="min-h-screen bg-[#F9E9D3]">
      <Navbar />
      <PastorKayHero />
      <PastorKayBottom />
    
    </main>
  );
}