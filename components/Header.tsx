
import React from 'react';

const MailIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);

const LinkedInIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);

const Header = ({ name, title, contact, profileImage }) => {
    return (
        <header className="flex flex-col sm:flex-row items-center text-center sm:text-left p-8 md:p-12 bg-gradient-to-br from-pink-50 to-rose-100 relative">
            <div className="w-full sm:w-auto flex justify-center">
                <img 
                    src={profileImage} 
                    alt={name} 
                    className="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="sm:ml-8 mt-4 sm:mt-0">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">{name}</h1>
                <p className="text-md md:text-lg text-pink-600 font-semibold mt-2 tracking-wide uppercase">{title}</p>
                 <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-2 sm:space-y-0 sm:space-x-4 mt-4 text-gray-600">
                    <a href={`mailto:${contact.email}`} className="flex items-center hover:text-pink-600 transition-colors">
                        <MailIcon /> {contact.email}
                    </a>
                    <a href={`https://linkedin.com${contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-pink-600 transition-colors">
                        <LinkedInIcon /> {contact.linkedin}
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;