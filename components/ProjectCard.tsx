
import React from 'react';

interface ProjectCardProps {
  name: string;
  image: string;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, image, link }) => {
  const CardContent = (
      <div className="relative w-full h-40 group overflow-hidden rounded-lg shadow-md">
          <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
              <h3 className="text-white text-lg font-bold text-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {name}
              </h3>
          </div>
      </div>
  );

  if (link) {
      return (
          <a href={link} target="_blank" rel="noopener noreferrer" className="block transform hover:-translate-y-1 transition-transform">
              {CardContent}
          </a>
      );
  }

  return (
    <div className="transform hover:-translate-y-1 transition-transform">
        {CardContent}
    </div>
  );
};

export default ProjectCard;
