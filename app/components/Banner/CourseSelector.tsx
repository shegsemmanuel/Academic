import React, { useState } from 'react';

const CourseSelector: React.FC = () => {
  // Initial state to hold the selected course
  const [selectedCourse, setSelectedCourse] = useState<string>('');

  // Array of course options
  const course: string[] = [
    'UI/UX, Design',
    'Front End Development',
    'Back End Development',
    'Ethical Hacking',
  ];

  // Handler for change event
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCourse(event.target.value);
  };

  return (
    <div className='w-full'>
      <h2 className='text-lg text-lightgrey'>What do you want to learn?</h2>
      <select className="block w-full p-2 border border-gray-300 rounded-lg bg-white !text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 " value={selectedCourse} onChange={handleChange}>
      
        {course.map((courseName, index) => (
          <option key={index} value={courseName}>
            {courseName}
          </option>
        ))}
      </select>
      {selectedCourse && <p className='text-lightgrey'>You selected: {selectedCourse}</p>}
    </div>
  );
};

export default CourseSelector;
