import React, { useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen.js';

const Section = ({ title, children }) => {
    const ref = useRef(null);
    const isVisible = useOnScreen(ref, { threshold: 0.1 });

    return (
        <section
            ref={ref}
            className={`py-8 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } border-b border-gray-200 last:border-b-0`}
        >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 relative pb-2">
                {title}
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-pink-500 rounded"></span>
            </h2>
            {children}
        </section>
    );
};

export default Section;