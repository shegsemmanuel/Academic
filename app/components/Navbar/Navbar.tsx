"use client"

import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from '@heroicons/react/24/outline';
import React from "react";
import Link from "next/link";
import Contactus from "./Contactus";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata"



interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Home',href: '/', current: true },
    { name: 'Courses',href: '#courses-section', current: false },
    { name: 'Mentors',href: '#mentors-section', current: false },
    { name: 'Testimonial',href: '#testimonial-section', current: false },
    { name: 'Join',href: '#join-section', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join('')
}

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Disclosure as="nav" className="bg-lightpink navbar z-50">
      <>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
                <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
                    {/* Logo */}
                    <div className="flex flex-shrink-0 items-center">
                        <img 
                        className="block h-30px w-30px space-links lg-hidden"
                        src={'/assets/logo/Logo.svg'} 
                        alt="Courses-Logo" 
                        />

                    <img 
                        className="hidden h-48px w-48px space-links lg-hidden"
                        src={'/assets/logo/Logo.svg'} 
                        alt="Courses-Logo" 
                        />
                    </div>

                    {/* Navigation */}
                    <div className="hidden sm:ml-14 md:block">
                        <div className="flex font-medium space-x-6 ">
                        {navigation.map((item) => (
                         <Link
                            href={item.href}
                             key={item.name}
                             className={classNames(
                                item.current ? "text-orange" : "hover:text-orange",
                                "px-3 py-4 text-15px font-medium text-white"
                             )}
                               aria-current={item.href ? 'page' : undefined}
                             >      
                             {item.name}
                            </Link>
                     ))
                     }
                      <Contactus />
                        </div>
                    </div>
                </div>

                {/* Hamberger */}
                <div className="block md:hidden">
                    <Bars3Icon 
                     className="block h-6 w-6 text-white"
                     aria-hidden="true"
                     onClick={() => setIsOpen(true)}
                    />
                </div>

                  {/* Drawer Dialog */}
                  <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                        <Drawerdata />
                  </Drawer>
            </div>
        </div>
      </>
    </Disclosure>
  )
}

export default Navbar
