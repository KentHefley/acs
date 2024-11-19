"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, BarChart3, ShoppingCart } from "lucide-react"
import Link from "next/link"
import ServiceCard from "./ServiceCard"

export default function Services() {
  return (

<section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="mx-auto container px-4 md:px-6 max-w-7xl">
          <h2 className="text-3xl text-black font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Services</h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      <ServiceCard 
        icon={ShoppingCart}
        title="Cart Recovery"
        description="We locate and return lost or stolen shopping carts to your store, reducing replacement costs and inventory loss."
      />
      <ServiceCard 
        icon={MapPin}
        title="GPS Tracking"
        description="Our advanced GPS tracking system helps prevent cart theft and makes recovery quick and efficient."
      />
      <ServiceCard 
        icon={BarChart3}
        title="Inventory Management"
        description="We provide detailed reports on cart usage and loss, helping you optimize your cart inventory."
      />
    </div>
          <div className="mt-12 text-center">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">
                Request a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
  )}