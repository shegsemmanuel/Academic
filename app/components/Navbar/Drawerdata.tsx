import Link from 'next/link';
import React from 'react';
import Contactus from './Contactus'


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

const Data = () => {
  return (
    <div className='rounded-md max-w-sm w-full mx-auto'>
      <div className='flex-1 space-y-4 py-1'>
        <div className='sm:block'>
            <div className='nav' >
                {
                   navigation.map((item) =>(
                    <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                        item.current ? 'bg-gray-900 text-orange' : 'text-white hover:bg-gray-700 hover:text-orange', 'block py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                    >
                       {item.name} 
                    </Link>
                   ))
                }
                <Contactus />
                <div className='mt-4'></div>
                <button
                className='global-button bg-white w-full hover:text-white text-black border border-purple font-medium py-2 px-4 rounded'>
                  Sign In
                </button>

                <button
                className='global-button bg-white w-full hover:text-white text-black border border-pur font-medium py-2 px-4 rounded'>
                  Register
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Data
