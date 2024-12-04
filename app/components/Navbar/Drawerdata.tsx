import Link from 'next/link';
import React from 'react';


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
    <div>
      <div>
        <div>
            <div className='nav'>
                {
                   navigation.map((item) =>(
                    <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                        item.current ? 'bg-gray-900 text-orange' : 'text-white hover:bg-gray-700 hover:text-orange', 'block py-2 text-base font-medium'
                    )}
                    >
                       {item.name} 
                    </Link>
                   ))
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default Data
