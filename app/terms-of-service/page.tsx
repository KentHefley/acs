"use client"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link"


export default function TermsOfService() {
    
  return (
    <div className="container mx-auto px-8 lg:px-12 py-8 max-w-7xl">
      <h1 className="text-4xl font-bold mb-12 text-center">Terms of Service</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <aside className="md:col-span-1">
          <div className="sticky top-8">
            <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
            <nav className="space-y-2">
              <Link href="#acceptance" className="block text-blue-600 hover:underline">1. Acceptance of Terms</Link>
              <Link href="#provided" className="block text-blue-600 hover:underline">2. Services Provided</Link>
              <Link href="#agreements" className="block text-blue-600 hover:underline">3. Service Agreements</Link>
              <Link href="#gps" className="block text-blue-600 hover:underline">4. Use of GPS Tracking Devices</Link>
              <Link href="#client" className="block text-blue-600 hover:underline">5. Client Responsibilities</Link>
              <Link href="#liability" className="block text-blue-600 hover:underline">6. Limitation of Liability</Link>
              <Link href="#payment" className="block text-blue-600 hover:underline">7. Payment and Fees</Link>
              <Link href="#termination" className="block text-blue-600 hover:underline">8. Termination of Services</Link>
              <Link href="#intellectual" className="block text-blue-600 hover:underline">9. Intellectual Property</Link>
              <Link href="#privacy" className="block text-blue-600 hover:underline">10. Privacy Policy</Link>
              <Link href="#change" className="block text-blue-600 hover:underline">11. Changes to Terms</Link>
              <Link href="#governing" className="block text-blue-600 hover:underline">12. Governing Law</Link>
            </nav>
          </div>
        </aside>
        
        <main className="md:col-span-3">
          <ScrollArea className="h-[calc(100vh-8rem)] pr-4">
            <section id="acceptance" className="mb-8 scroll-mt-20">
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p>By accessing or using America’s Cart Service services, including shopping cart recovery,
                product inventory, and GPS tracking solutions, you agree to be bound by these Terms. If you do
                not agree with any part of these Terms, you must not use our services.</p>
            </section>
            
            <section id="provided" className="mb-8 scroll-mt-20">
              <h2 className="text-2xl font-semibold mb-4">2. Services Provided</h2>
              <p className="mb-3">America's Cart Service provides the following services:</p>
              <ul className="list-disc ml-5 mb-3">
                <li><b>Shopping Cart Recovery:</b> Locating, retrieving, and returning lost or stolen shopping carts. </li>
                <li><b>Product Inventory:</b> Assisting businesses with the management of their product inventory using modern tracking system.</li>
                <li><b>GPS Tracking:</b> Offering GPS tracking solutions to monitor and prevent the loss of shopping carts.</li>
              </ul>
              <p>These services are provided under the terms specified in the service agreement with each client. We reserve the right to modify or discontinue any service at our discretion.</p>
            </section>
            
            <section id="agreements" className="mb-8 scroll-mt-20">
              <h2 className="text-2xl font-semibold mb-4">3. Service Agreements</h2>
              <p>For businesses engaging America’s Cart Service  for our services, a separate Service Agreement will be signed. This agreement will outline the specific terms, conditions, and costs of the services provided. Clients must adhere to the terms outlined in the signed agreement.</p>
            </section>
            
            <section id="gps" className="mb-8 scroll-mt-20">
              <h2 className="text-2xl font-semibold mb-4">4. Use of GPS Tracking Devices</h2>
              <p>Clients utilizing our GPS tracking devices for shopping cart tracking must ensure they comply with all applicable local and federal laws concerning the use of tracking technology. America’s Cart Service is not responsible for any misuse of these devices by clients.</p>
            </section>
            
            <section id="client" className="mb-8 scroll-mt-20">
              <h2 className="text-2xl font-semibold mb-4">5. Client Responsibilities</h2>
              <p>Clients are responsible for providing accurate information when engaging our services. Failure to provide accurate details may result in delays or inability to perform the services.</p>
            </section>
            
            <section id="liability" className="mb-8 scroll-mt-20">
              <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
              <p>To the maximum extent permitted by law, America’s Cart Service shall not be liable for any damages, including but not limited to loss of profits, data, or use, arising from or in connection with our services. This includes delays, errors, or interruptions in services provided.</p>
            </section>
            
            <section id="payment" className="mb-8 scroll-mt-20">
              <h2 className="text-2xl font-semibold mb-4">7. Payment and Fees</h2>
              <p>Clients agree to pay the fees specified in their Service Agreement. All payments must be made in accordance with the agreed terms. Failure to make payments may result in suspension or termination of services.</p>
            </section>
            
            <section id="termination" className="mb-8 scroll-mt-20">
              <h2 className="text-2xl font-semibold mb-4">8. Termination of Services</h2>
              <p>Either party may terminate the service agreement at any time, subject to any terms in the signed Service Agreement. Upon termination, all equipment or GPS tracking devices provided by America’s Cart Service must be returned in good condition.</p>
            </section>
            
            <section id="intellectual" className="mb-8 scroll-mt-20">
              <h2 className="text-2xl font-semibold mb-4">9. Intellectual Property</h2>
              <p>All content, including but not limited to logos, designs, and information found on America’s Cart Service website or materials, is the intellectual property of America’s Cart Service and may not be used without prior written permission.</p>
            </section>
            
            <section id="privacy" className="mb-8 scroll-mt-20">
              <h2 className="text-2xl font-semibold mb-4">10. Privacy Policy</h2>
              <p>Please review our Privacy Policy, which explains how we collect, use, and protect your personal information. By using our services, you agree to the terms outlined in the Privacy Policy.</p>
            </section>

            <section id="change" className="mb-8 scroll-mt-20">
              <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
              <p>We reserve the right to modify these Terms at any time. Any changes will be posted on this page, and continued use of our services after such changes constitutes acceptance of the new terms.</p>
            </section>

            <section id="governing" className="mb-8 scroll-mt-20">
              <h2 className="text-2xl font-semibold mb-4">12. Governing Law</h2>
              <p>These Terms shall be governed by and construed in accordance with the laws of Oklahoma, USA, without regard to its conflict of law provisions.</p>
            </section>
          </ScrollArea>
        </main>
      </div>
      
      <div className="mt-8 text-center">
        <Link href="/">
        <Button>
          Return Home
        </Button>
        </Link>
      </div>
    </div>
  )
}