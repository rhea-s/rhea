
import React from 'react';

const ActivityItem = ({ role, organization, dates, location, points, isLast }) => {
  return (
    <div className={`relative pl-10 ${isLast ? '' : 'pb-8'} border-l-2 border-pink-200`}>
      <div className="absolute -left-[9px] top-1 w-4 h-4 bg-white border-2 border-pink-500 rounded-full"></div>
      <h3 className="text-xl font-bold text-gray-900">{organization}</h3>
      <p className="font-semibold text-pink-600">{role}</p>
      <p className="text-sm text-gray-500 mb-3">{dates} | {location}</p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        {points.map((point, index) => <li key={index}>{point}</li>)}
      </ul>
    </div>
  );
};

export default ActivityItem;
