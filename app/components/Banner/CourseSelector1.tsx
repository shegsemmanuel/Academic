import React, { useState } from 'react';

const CourseSelector: React.FC = () => {
  // Initial state to hold the selected course
  const [selectedCourse, setSelectedCourse] = useState<string>('');

  // Array of course options
  const Hour: string[] = [
    '20hrs in a month',
    '30hrs in a month',
    '40hrs in a month',
    '50hrs in a month',
  ];

  // Handler for change event
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCourse(event.target.value);
  };

  return (
    <div className='w-full ' >
      <h2 className='text-lg text-lightgrey'>Hours you going to invest?</h2>
      <select className="block w-full p-2 border border-gray-300 rounded-lg bg-white !text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 " value={selectedCourse} onChange={handleChange}>
      
        {Hour.map((courseName, index) => (
          <option key={index} value={courseName}>
            {courseName}
          </option>
        ))}
      </select>
      {selectedCourse && <p>You selected: {selectedCourse}</p>}
    </div>
  );
};

export default CourseSelector;
