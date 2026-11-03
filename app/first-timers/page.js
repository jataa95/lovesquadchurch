import FirstTimersHero from "@/components/firsttimers/FirstTimersHero";
import WhatToExpect from "@/components/firsttimers/WhatToExpect";
import WhenAndWhere from "@/components/firsttimers/WhenAndWhere";
import ConnectCard from "@/components/firsttimers/ConnectCard";
import AboutFAQs from "@/components/about/AboutFAQs";
import Footer from "@/components/home/Footer";

export const metadata = {
  title: "First Time? | LoveSquad Church",
  description: "New to LoveSquad Church? Here's what to expect, when and where we meet, and how to say hello.",
};

export default function FirstTimersPage() {
  return (
    <>
      <FirstTimersHero />
      <WhatToExpect />
      <WhenAndWhere />
      <ConnectCard />
      <AboutFAQs />
      <Footer />
    </>
  );
}
