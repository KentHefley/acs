import React from 'react'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function faq()  {
    const faqs = [
        {
            question: "What services do you offer?",
            answer: "We offer a comprehensive shopping cart recovery service for retail and grocery stores. This includes locating and returning lost or stolen carts, GPS tracking for prevention of theft, and inventory management reporting."
          },
          {
            question: "How does your cart recovery process work?",
            answer: "Our team uses advanced tracking technology to locate missing carts. Once found, we collect the carts and return them to their respective stores. We also provide detailed reports on recovery locations to help prevent future losses."
          },
          {
            question: "What areas do you service?",
            answer: "We primarily work in the states of Arizona and Texas, but can reach any area of the United States. Please contact us for specific information about service in your area."
          },
          {
            question: "How much does your service cost?",
            answer: "Our pricing is customized based on the size of your store, the number of carts, and the frequency of service needed. Please reach out to our sales team for a personalized quote."
          },
          {
            question: "Do you offer GPS tracking for carts?",
            answer: "Yes, we offer GPS tracking as part of our premium service package. This allows real-time monitoring of cart locations and helps prevent theft and unauthorized removal from store premises."
          },
          {
            question: "How quickly can you recover lost carts?",
            answer: "Our average recovery time is within 48 hours of receiving a report. However, this can vary depending on the location and circumstances of the lost cart."
          },
          {
            question: "Do you also repair damaged carts?",
            answer: "While our primary focus is on recovery, we do offer basic repair services for minor damages. For extensive repairs, we can recommend trusted partners in your area."
          },
          {
            question: "Do you provide power washing services?",
            answer: "Yes, we offer cart washing services and can also clean sidewalks and the areas behind store trash disposal units"
          },
          {
            question: "How do I report a lost cart?",
            answer: "Customers can report lost carts through our support form on the contact page, or by calling us at (602) 268-9008. We'll need information such as the cart's last known location and any identifying features."
          },
          {
            question: "Can you help reduce cart loss in high-theft areas?",
            answer: "Absolutely. We offer consultations on cart retention strategies and can implement advanced tracking systems in high-risk areas to minimize losses."
          },
          {
            question: "What makes your service better than handling cart recovery in-house?",
            answer: "Our specialized equipment, trained staff, and efficient processes allow us to recover carts more quickly and cost-effectively than most in-house solutions. We also provide valuable data insights to help prevent future losses."
          },
          {
            question: "Do you work with municipalities to manage particular state and city ordinances.",
            answer: "We maintain several agreements with associated cities to protect the customer from fines and violations."
          }
    ]

  return (
   <section className="py-12">
    <div className="mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-gray-600 font-semibold">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-[4rem] text-center">
          <Link href="/contact">
          <Button>Contact Us for More Information</Button>
          </Link>
        </div>
    </div>

   </section>
  )
}
