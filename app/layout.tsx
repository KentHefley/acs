import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "America's Cart Service",
  description: "American Cart Service specializes in the recovery of stolen and abandoned shopping carts for retail businesses, helping companies reduce losses and improve operational efficiency.",
  keywords: ["stolen shopping carts", "missing shopping carts", "abandoned shopping carts", "shopping cart recovery", "shopping cart retrieval", "stolen cart recovery", "misplaced shopping carts", "retail cart services", "shopping cart services", "retail cart recovery", "retail cart retrieval", "missing cart recovery", "missing cart retrieval", "cart retrieval services", "cart recovery services", "cart retrieval services", "cart recovery services"],
};

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <Navbar />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
