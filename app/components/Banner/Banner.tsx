import Dropdownone from "./dropdownone";

const Banner = () => {
  return (
    <main className='banner-image'>
      <div className='relative px-6 lg:px-8'>
        <div className='mx-auto max-w-5xl pt-16 sm:pt-40 sm:pb-24'>
          <div className='text-center'>
            {/* Banner Heading */}
            <h1 className='text-4xl font-bold -tracking-tight sm:text-75px md:4px'>
              Grow your skills <br /> & Advance Career
            </h1>

            {/* Description */}
            <p className='mt-6 text-lg leading-8'>
              Start, switch, or advance your career with more than 5,000
              courses, professional Certificates, and degrees from 
              world-class universities and companies. 
            </p>

            {/* stack Icons */}
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <div className='hidden sm:block space-x-2 overflow-hidden'>
               <img 
                    className='inline-block h-12 w-12 rounded-full'
                    src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" 
                  />
                <img 
                    className='inline-block h-12 w-12 rounded-full'
                    src="https://images.unsplash.com/photo-1579038773867-044c48829161?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" 
                  /> 
                  <img
                      className='inline-block h-12 w-12 rounded-full' 
                      src="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" 
                  />
                  <img 
                      className='inline-block h-12 w-12 rounded-full' 
                      src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" 
                      />
                  <img
                      className='inline-block h-12 w-12 rounded-full'  
                      src="https://plus.unsplash.com/premium_photo-1689564003745-946f35267ffe?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFkeXxlbnwwfHwwfHx8MA%3D%3D" alt="" 
                      />
              </div>
            </div>
          </div>

              {/* Dropdown Buttons */}
          <div>
            <div>
              <div>
                 < Dropdownone />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Banner;
