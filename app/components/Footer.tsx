import Link from "next/link"
import Image from "next/image"
import React from "react";


export const footerLinks = [
    { name: 'FAQ', href: '/faq' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Contact', href: '/contact' },
]

const date = new Date().getFullYear();

export default function Footer() {
  return (
    <>
    <div className="border-t-1 border-transparent bg-gradient-to-r from-green-400 to-emerald-600">
  <div className="h-[4px]"></div>
</div>
    <div className="pt-8 pb-4 bg-white w-full flex flex-col items-center justify-center mx-auto ">
        <div className="mb-2">
        <Image src="/large-logo.svg" alt="logo" width={185} height={56} style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
       
        <div className="flex flex-col sm:flex-row mt-5" >
        {footerLinks.map((link, index) => (
            <Link 
            key={index} 
            href={link.href} 
            className={`px-4 text-sm mb-3 text-gray-500 hover:text-gray-900 ${index > 0 ? 'sm:border-l-2 sm:border-gray-200 ' : ''}`}
            >
            {link.name}
            </Link>
        ))}
        </div>
        <div>
            <p className="text-xs text-gray-500 mt-4">© {date} America's Cart Service. All rights reserved.</p>
        </div>
    </div>
    </>
  )
}
