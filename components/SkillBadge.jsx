
import React from 'react';

const SkillBadge = ({ skill, category }) => {
    const categoryColors = {
        'Back-End': 'bg-blue-100 text-blue-800',
        'Front-End': 'bg-pink-100 text-pink-800',
    };
    
    return (
        <span className={`inline-block ${categoryColors[category]} text-sm font-semibold mr-2 mb-2 px-3 py-1 rounded-full transition-transform hover:scale-105 cursor-default`}>
            {skill}
        </span>
    );
};

export default SkillBadge;
