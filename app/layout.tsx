import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "America's Cart Service",
  description: "American Cart Service specializes in the recovery of stolen and misplaced shopping carts for retail businesses, helping companies reduce losses and improve operational efficiency.",
  keywords: ["shopping cart recovery", "shopping cart retreival", "stolen cart recovery", "misplaced shopping carts", "retail cart services", "cart retrieval service", "Arizona shopping cart recovery", "Texas shopping cart recovery", "lost shopping carts", "cart recovery solutions", "American Cart Service"],
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
        <Navbar/>
        {children}
        <Footer/>
        <SpeedInsights />
      </body>
    </html>
  );
}
