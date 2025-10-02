
import React from 'react';
import ProjectCard from './ProjectCard.tsx';

// Define Project type for clarity
interface Project {
  name: string;
  image: string;
  link?: string;
}

interface ExperienceItemProps {
  role: string;
  company: string;
  dates: string;
  location: string;
  points: string[];
  isLast: boolean;
  projects?: Project[]; // Add optional projects prop
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ role, company, dates, location, points, isLast, projects }) => {
  return (
    <div className={`relative pl-10 ${isLast ? '' : 'pb-8'} border-l-2 border-pink-200`}>
      <div className="absolute -left-[9px] top-1 w-4 h-4 bg-white border-2 border-pink-500 rounded-full"></div>
      <h3 className="text-xl font-bold text-gray-900">{role}</h3>
      <p className="font-semibold text-pink-600">{company}</p>
      <p className="text-sm text-gray-500 mb-3">{dates} | {location}</p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        {points.map((point, index) => <li key={index}>{point}</li>)}
      </ul>
      {projects && projects.length > 0 && (
          <div className="mt-6">
              <h4 className="font-bold text-gray-800 mb-4 text-lg">Project Gallery</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {projects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                  ))}
              </div>
          </div>
      )}
    </div>
  );
};

export default ExperienceItem;
