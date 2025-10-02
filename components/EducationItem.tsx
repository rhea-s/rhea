
import React from 'react';

const EducationItem = ({ institution, degree, location, years, coursework }) => {
  return (
    <div>
      <div className="flex justify-between items-start flex-wrap">
        <h3 className="text-xl font-bold text-gray-900">{institution}</h3>
        <p className="text-sm text-gray-500">{years} | {location}</p>
      </div>
      <p className="font-semibold text-pink-600 mb-3">{degree}</p>
      
      <h4 className="font-bold text-gray-700 mb-2">Completed Coursework:</h4>
      <div className="flex flex-wrap">
        {coursework.map(course => (
          <span key={course} className="text-sm bg-gray-200 text-gray-800 mr-2 mb-2 px-3 py-1 rounded-full">
            {course}
          </span>
        ))}
      </div>
    </div>
  );
};

export default EducationItem;