"use client"

import { Fade } from "react-awesome-reveal"

const Newsletter = () => {
  return (
    <div id='join-section'>
         <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
         <div className='mx-auto max-w-2xl py-16 md:py-24 px-4 sm:px-6 md:max-w-7xl lg:px-24 bg-orange rounded-lg bg-newsletter'>

<div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 xl:gap-x-8'>
  {/* Column 1 */}
  <div>
    <h3 className='text-5xl font-bold mb-3 text-black'>Join Our Newsletter</h3>
    <h4 className='text-lg font-medium mb-7 text-black'>Subscribe to our newsletter for discounts, promo and many more.</h4>
    <div className='flex gap-2'>
     <input type="Email address" name="q" className='py-4
      text-sm w-full text-black bg-white rounded-md pl-4'
      placeholder='Enter your email' autoComplete='off' />
      <button className='global-button bg-purple hover:bg-blue-700 font-medium py-2 px-4 rounded'>Subscribe</button>
    </div>
  </div>

  {/* Column 2 */}
  <div className='hidden sm:block'>
    <div className='float-right -mt-32'>
      <img
      src={'/assets/newsletter/Free.svg'}
      alt='bgimg'
      />
    </div>
  </div>
</div>
</div>
          </Fade> 
        
    </div>
  )
}

export default Newsletter
