"use client"
import React, { useState } from 'react';
import { GlobeAltIcon, DevicePhoneMobileIcon, CircleStackIcon, CloudIcon } from '@heroicons/react/24/outline';
import { Fade } from 'react-awesome-reveal';

interface Name {
  course: string;
  imagesSrc: string;
  profession: string;
  price: string;
  category: 'mobiledevelopment' |'webdevelopment' | 'datascience' | 'cloudcomputing';
}

const names: Name[] = [
  {
    course: 'HTML, CSS, JS',
    imagesSrc: '/assets/courses/course-thumb-1.jpg',
    profession: 'HTML, CSS, Javascript Development',
    price: '40',
    category: 'webdevelopment'
  },
  {
    course: 'Node.js',
    imagesSrc: '/assets/courses/course-thumb-2.jpg',
    profession: 'Backend with Node.js and Express.js',
    price: '21',
    category: 'webdevelopment'
  },
  {
    course: 'React.js',
    imagesSrc: '/assets/courses/course-thumb-4.jpg',
    profession: 'Learn React with Redux toolkit Structure',
    price: '99',
    category: 'mobiledevelopment'
  },

  {
    course: 'React Native',
    imagesSrc: '/assets/courses/course-thumb-5.jpg',
    profession: 'Learn React Native with Node.js Formal',
    price: '89',
    category: 'mobiledevelopment'
  },
  {
    course: 'Swift',
    imagesSrc: '/assets/courses/course-thumb-6.jpg',
    profession: 'Learn Swift from Scratch with Development',
    price: '89',
    category: 'mobiledevelopment'
  },
  {
    course: 'Flutter',
    imagesSrc: '/assets/courses/course-thumb-7.jpg',
    profession: 'Flutter App Development from Scratch',
    price: '69',
    category: 'mobiledevelopment'
  },

  {
    course: 'TensorFlow',
    imagesSrc: '/assets/courses/course-thumb-1.jpg',
    profession: 'Learn TensorFlow with SQL Database',
    price: '99',
    category: 'datascience'
  },
  {
    course: 'AWS',
    imagesSrc: '/assets/courses/course-thumb-2.jpg',
    profession: 'AWS Deep Learning AMI Architect',
    price: '99',
    category: 'datascience'
  },
  {
    course: 'Bokeh',
    imagesSrc: '/assets/courses/course-thumb-3.jpg',
    profession: 'Learn Bokeh with Python Programming',
    price: '99',
    category: 'datascience'
  },

  {
    course: 'Laas',
    imagesSrc: '/assets/courses/course-thumb-5.jpg',
    profession: 'Infra-as-a-Service Structure Format',
    price: '21',
    category: 'cloudcomputing'
  },
  {
    course: 'Iaas',
    imagesSrc: '/assets/courses/course-thumb-6.jpg',
    profession: 'Info-as-a-Service Computating Global',
    price: '29',
    category: 'cloudcomputing'
  },
  {
    course: 'Paas',
    imagesSrc: '/assets/courses/course-thumb-7.jpg',
    profession: 'Platform-as-a-Service Infrastructure',
    price: '99',
    category: 'cloudcomputing'
  },

];

const NameList = () => {

  const [selectedButton, setSelectedButton] = useState<'mobiledevelopment' | 'webdevelopment' | 'datascience' | 'cloudcomputing' | 'all' | null> 
  ('webdevelopment');

  const mobileDevelopment = names.filter((name) => name.category === 'mobiledevelopment');
  const webDevelopment = names.filter((name) => name.category === 'webdevelopment');
  const dataScience = names.filter((names) => names.category === 'datascience');
  const cloudComputing = names.filter((names) => names.category === 'cloudcomputing') ;

  let selectedNames: Name[] = [];

  if (selectedButton === 'mobiledevelopment') {
    selectedNames = mobileDevelopment;
  } else if (selectedButton === 'webdevelopment') {
    selectedNames = webDevelopment;
  } else if (selectedButton === 'datascience') {
    selectedNames = dataScience;
  } else if (selectedButton === 'cloudcomputing') {
    selectedNames = cloudComputing;
  }

  const nameElements = selectedNames.map((name, index) => (
      <Fade key={index}direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
          <div >
      <div className='text-lg sm:text-sm py-5 px-8 lg:px-8 lg:py-8 bg-[#141c3e]'>
       <div className='lg:aspect-w-1 lg:aspect-h-1 overflow-hidden rounded-full group-hover:opacity-75 border-2 border-white ring-2'>
        <img
         src={name.imagesSrc}
         alt={name.imagesSrc}
         className='lg:w-[350px] lg:h-[300px] w-[full] h-[300px] hover:scale-125 transition-all duration-300 object-cover object-center'
        />
       </div>

        <div className='flex justify-between'>
          <div className='mt-6 block font-bold text-white'>{name.course}</div>
          <div className='mt-6 block text-lg font-semibold border-solid border-2 bg-green text-white rounded-full px-3'>${name.price}</div>
        </div>

        <p aria-hidden="true" className='mt-2 mb-5 text-2xl font-semibold text-white'>
          {name.profession}
        </p>

          <div className='flex justify-between border-solid bg-purple rounded-full p-4'>
            <p className='text-white'>12 Classes</p>
            <div className='flex flex-row space-x-4'>
              <div className='flex'>
                <img src={'/assets/courses/account.svg'} alt='circle' />
                <p className='text-white ml-1'>120</p>
              </div>
              <div className='flex'>
                <img src={'/assets/courses/Star.svg'} alt='star' />
                <p className='ml-1 text-white'>4.5</p>
              </div>
            </div>
          </div>

      </div>
    </div>
      </Fade>
    
  ))  

  return (
   <div>
      <div id='courses-section' className='mx-auto max-w-2xl py-16 px-4 sm:py-36 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='sm:flex justify-between items-center pb-12'>
          <h2 className='text-white text-3xl sm:text-5xl font-bold tracking-tight my-4'>Popular Courses</h2>
          <button className='global-button font-medium py-3 px-4 rounded-full transition-all duration-300'>
            Explore Classes
          </button> 
          </div>
        </div>

        <div className='flex nowhitespace space-x-8 px-10 rounded-xl p-1 overflow-x-auto'>
              {/* For Desktop View */}
          <div onClick={() => setSelectedButton('webdevelopment')}
            className={"text-white" + (selectedButton === 'webdevelopment' ? 'text-black border-b-2 border-orange' : 'text-lightgrey') + "pb-2 text-lg hidden sm:block"}>Web Development</div>
          <div onClick={() => setSelectedButton('mobiledevelopment')} className={"text-white" + (selectedButton === 'mobiledevelopment' ? 'text-black border-b-2 border-orange' : 'text-lightgrey') + "pb-2 text-lg hidden sm:block"} >Mobile Development</div>
          <div onClick={() => setSelectedButton('datascience')} className={"text-white" + (selectedButton === 'datascience' ? 'text-black border-b-2 border-orange' : 'text-lightgrey') + "pb-2 text-lg hidden sm:block"} >Data Science</div>
          <div onClick={() => setSelectedButton('cloudcomputing')} className={"text-white" + (selectedButton === 'cloudcomputing' ? 'text-black border-b-2 border-orange' : 'text-lightgrey') + "pb-2 text-lg hidden sm:block"} >Cloud Computing </div>

          {/* For Mobile View */}
          <GlobeAltIcon onClick={() => setSelectedButton('webdevelopment')} width={40} height={40} className={"text-white" + (selectedButton === 'webdevelopment' ? 'border-b-2 border-orange' : '') + "pb-2 block sm:hidden" } />
          <DevicePhoneMobileIcon onClick={() => setSelectedButton('mobiledevelopment')} width={40} height={40} className={"text-white" + (selectedButton === 'mobiledevelopment' ? 'border-b-2 border-orange' : '') + "pb-2 block sm:hidden" } />
          <CircleStackIcon onClick={() => setSelectedButton('datascience')} width={40} height={40} className={"text-white" + (selectedButton === 'datascience' ? 'border-b-2 border-orange' : '') + "pb-2 block sm:hidden" } />
          <CloudIcon onClick={() => setSelectedButton('cloudcomputing')} width={40} height={40} className={"text-white" + (selectedButton === 'cloudcomputing' ? 'border-b-2 border-orange' : '') + "pb-2 block sm:hidden" } />
        </div>

        <div>
          <div className='mx-auto max-w-7xl'>
            <div className='grid grid-cols-1 gap-y-10 gap-x-8 py-12'>
              <div className='col-start-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8'>
                {
                  nameElements.length > 0 ? (
                    nameElements
                  ) : (
                      <p>No data to show</p>
                  )
                }
              </div>
            </div>
          </div>
        </div>
   </div>
  )
}

export default NameList
