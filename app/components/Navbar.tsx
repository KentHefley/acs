'use client'

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import MobileMenu from "./MobileMenu"

export const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Our Team', href: '/our-team' },
    { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
    const pathname = usePathname();

  return (
    <nav className="sticky top-0 bg-white w-full z-10">
        {/* container */}
        <div className="mx-auto px-4 md:px-8 py-5 grid grid-cols-12 max-w-7xl">
        <div className="col-span-6 md:col-span-3">
            <Link href='/'>
            <Image
             src="/logo.svg"
             alt="American Cart Service Logo"
             width={112}
             height={46}
             style={{ maxWidth: '100%', height: 'auto' }}
            />
            </Link>
        </div>
        <div className="hidden sm:flex justify-center items-center col-span-6">
            <NavigationMenu>
                <NavigationMenuList>
                {navigationItems.map((item, index) => (
                    <NavigationMenuItem  key={index} >
                        <Link href={item.href} legacyBehavior passHref>
                            <NavigationMenuLink  active={pathname === item.href} className={navigationMenuTriggerStyle()}>
                                {item.name}
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                ))}
                </NavigationMenuList>
            </NavigationMenu>
        </div>

        <div className="flex items-center justify-end md:col-span-3 col-span-6">
            <Link href="/contact">
            <Button className="hidden md:block">Report Carts</Button>
            </Link>
                <div className="sm:hidden">
                <MobileMenu/>
            </div>
        </div>
        </div>
    </nav>
  )
}
