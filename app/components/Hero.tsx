"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight} from "lucide-react"
import Link from "next/link"
import { useEffect } from "react";

export default function Component() {
  useEffect(() => {
    const cart = document.querySelector(".cart-animation");
    if (cart) {
      // Trigger a reflow
      cart.getBoundingClientRect();
      // Add animation class
      cart.classList.add("start-animation");
    }
  }, []);

  return (
    <main>
      <section className="w-full py-12 md:py-14 lg:py-18 xl:py-22 bg-gradient-to-r from-green-400 to-emerald-600">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="w-full h-32 relative mb-4 overflow-hidden">
              <div className="cart-animation absolute left-1/2 top-0 -translate-x-1/2"  style={{ transform: "translateX(-150vw)" }} >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="106"
                  height="106"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <circle cx="8" cy="21" r="1" />
                  <circle cx="19" cy="21" r="1" />
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                </svg>
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold mb-4 sm:text-4xl md:text-5xl lg:text-6xl sm:leading-[3.5rem] md:leading-[4rem] lg:leading-[5rem] text-white">
              Reliable Shopping Cart Recovery Services for America’s Retailers
              </h1>
              <p className="mx-auto max-w-[700px] text-green-100 md:text-xl">
                America's Cart Service specializes in recovering lost, stolen, and abandoned shopping carts for retail and grocery stores, helping you save money and improve customer experience.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild className="bg-white text-primary hover:bg-green-100">
                <Link href="/about">
                  About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      
      <style jsx global>{`
         @keyframes moveCart {
          0% {
            transform: translateX(-150vw);
            opacity: 0;
          }
            10% {
            opacity: 1;
            }
          100% {
            transform: translateX(-50%);
            opacity: 1;
          }
        }
        .cart-animation {
          opacity: 0;
          animation: moveCart 1s ease-out forwards;
        }
      `}</style>
    </main>
  )
}