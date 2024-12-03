import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from '@heroicons/react/24/outline';
import React from "react";

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
  return (
    <div className="bg-lightpink navbar z-50">
      <>
        <div>
            <div>
                <div>
                    {/* Logo */}
                    <div>
                        <img src={'/assets/logo/Logo.svg'} alt="Courses-Logo" />
                    </div>
                </div>
            </div>
        </div>
      </>
    </div>
  )
}

export default Navbar
