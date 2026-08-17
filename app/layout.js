import { Space_Grotesk, Poppins } from "next/font/google";
import Navbar from "@/components/layout/Navbar/Navbar"; // Adjust import path based on your folder structure
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-body",
});

export const metadata = {
  title: "LoveSquad Church",
  description: "LoveSquad Church Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${poppins.variable} bg-[#0B0B0B] text-[#F4EBDC] antialiased`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}