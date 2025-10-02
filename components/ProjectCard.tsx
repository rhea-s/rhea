
import React from 'react';

interface ProjectCardProps {
  name: string;
  description: string;
  image: string;
  link?: string;
}

const ArrowRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
);


const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, image, link }) => {
  const CardContent = () => (
    <>
        <div className="overflow-hidden">
            <img src={image} alt={name} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
        </div>
        <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
            <p className="text-gray-700 text-sm mb-4">{description}</p>
            {link && (
                 <span className="font-semibold text-pink-600 group-hover:text-pink-700 transition-colors inline-flex items-center">
                    Learn More
                    <ArrowRightIcon />
                </span>
            )}
        </div>
    </>
  );

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group transform hover:-translate-y-1">
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="block">
          <CardContent />
        </a>
      ) : (
        <div>
          <CardContent />
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
