'use client'
import CourseSelector from "./CourseSelector";
import CourseSelector1 from "./CourseSelector1";

// Animation
import { Fade } from "react-awesome-reveal";


const Banner = () => {
  return (
    <main className='banner-image'>
      <div className='relative px-6 lg:px-8'>
        <div className='mx-auto max-w-5xl pt-16 sm:pt-40 sm:pb-24'>
          <div className='text-center'>
              <Fade
                direction="up" delay={400} cascade damping={1e-1}
                triggerOnce={true}
              >
                     {/* Banner Heading */}
                   <h1 className='text-4xl font-bold -tracking-tight sm:text-75px mt-3 md:4px'>
                       Grow your skills <br /> & Advance Career
                    </h1>
              </Fade>

              <Fade
                direction="up" delay={600} cascade damping={1e-1}
                triggerOnce={true}
              >
                     {/* Description */}
                  <p className='mt-6 text-lg leading-8 text-white'>
                   Start, switch, or advance your career with more than 5,000
                   courses, professional Certificates, and degrees from
                   world-class universities and companies.
                </p>
              </Fade>
            
              <Fade
                direction="up" delay={800} cascade damping={1e-1}
                triggerOnce={true}
              >
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
              <div className="sm:pl-8  ">
                  <div className=" flex justify-center sm:justify-start">
                      <h3 className="text-white font-semibold text-2xl mr-2">4.6</h3>
                      <img src={'/assets/banner/Stars.svg'} alt="stars-icons" />
                  </div>
                <div className="text-sm text-white">
                    Rated by 25k on google.
                </div>
              </div>
            </div>
              </Fade>
          </div>

          {/* Dropdown Buttons */}
          <Fade
                direction="up" delay={1000} cascade damping={1e-1}
                triggerOnce={true}
              >
                <div className="mx-auto bg-white max-w-4xl mt-24 pt-6 pb-8 px-6 lg:px-12 lg:max-w-4xl rounded-lg">
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-8 xl:gap-x-8">
                <div className="col-span-3">
                    <CourseSelector />
              </div>

                <div className="col-span-3">
                    <CourseSelector1 />
              </div>

              <div className="col-span-3 sm:col-span-2 mt-2">
              <button className=" global-button w-full mt-1 py-4 px-3 font-bold rounded-full">
                      Start
                </button> 
              </div>
            </div>
          </div>
              </Fade>
          

        </div>
      </div>
    </main>
  );
};

export default Banner;
