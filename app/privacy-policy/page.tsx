"use client"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link"


export default function TermsOfService() {
    
  return (
    <div className="container mx-auto px-8 lg:px-12 py-8 max-w-7xl">
      <h1 className="text-4xl font-bold mb-12 text-center">Privacy Policy</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <aside className="md:col-span-1">
          <div className="sticky top-8">
            <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
            <nav className="space-y-2">
              <Link href="#intro" className="block text-blue-600 hover:underline">1. Introduction</Link>
              <Link href="#information" className="block text-blue-600 hover:underline">2. Infomation Collection</Link>
              <Link href="#use" className="block text-blue-600 hover:underline">3. Use of Information</Link>
              <Link href="#sharing" className="block text-blue-600 hover:underline">4. Information Sharing</Link>
              <Link href="#data" className="block text-blue-600 hover:underline">5. Data Security</Link>
              <Link href="#comm" className="block text-blue-600 hover:underline">6. Communications</Link>
              <Link href="#rights" className="block text-blue-600 hover:underline">7. Your Rights</Link>
              <Link href="#change" className="block text-blue-600 hover:underline">8. Changes to This Policy</Link>
              <Link href="#contact" className="block text-blue-600 hover:underline">9. Contact Us</Link>
            </nav>
          </div>
        </aside>
        
        <main className="md:col-span-3">
          <ScrollArea className="h-[calc(100vh-8rem)] pr-4">
            <section id="intro" className="mb-8 scroll-mt-20">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p>This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website or services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</p>
            </section>
            
            <section id="information" className="mb-8 scroll-mt-20">
              <h2 className="text-2xl font-semibold mb-4">2. Information Collection</h2>
              <p className="mb-3">We collect personal information that you voluntarily provide to us when you use our contact form. This may include your name, email address, and any other information you choose to provide in your message. We do not collect any personal information automatically through the use of our website.</p>
            </section>
            
            <section id="use" className="mb-8 scroll-mt-20">
              <h2 className="text-2xl font-semibold mb-4">3. Use of Information</h2>
              <p>We use the information we collect to respond to your inquiries and provide you with the services you request. We may also use your information to send you product updates and promotional invites, but only if you have consented to receive such communications.</p>
            </section>
            
            <section id="sharing" className="mb-8 scroll-mt-20">
              <h2 className="text-2xl font-semibold mb-4">4. Information Sharing</h2>
              <p>We want to stress that we do not sell, trade, or otherwise transfer your personally identifiable information to third parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.</p>
            </section>
            
            <section id="data" className="mb-8 scroll-mt-20">
              <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
              <p>We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure, so we cannot guarantee its absolute security.</p>
            </section>
            
            <section id="comm" className="mb-8 scroll-mt-20">
              <h2 className="text-2xl font-semibold mb-4">6. Communications</h2>
              <p>We may use your personal information to contact you with product updates, newsletters, marketing or promotional materials and other information that may be of interest to you. You may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.</p>
            </section>
            
            <section id="rights" className="mb-8 scroll-mt-20">
              <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
              <p>You have the right to access, update, or delete your personal information at any time. You can do this by contacting us using the contact information provided below. Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases.</p>
            </section>
            
            <section id="change" className="mb-8 scroll-mt-20">
              <h2 className="text-2xl font-semibold mb-4">8. Changes to This Policy</h2>
              <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>
            </section>
            
            <section id="contact" className="mb-8 scroll-mt-20">
              <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please <Link className="text-primary hover:text-primary/75" href="/contact">contact us.</Link></p>
            </section>
          </ScrollArea>
        </main>
      </div>
      
      <div className="mt-8 text-center">
        <Link href="/">
        <Button>
          I Understand
        </Button>
        </Link>
      </div>
    </div>
  )
}