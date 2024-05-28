"use client"
import { Link } from 'react-scroll';
import { useState } from 'react';

export default function InteractiveButtons() {
  const [hoveredButton, setHoveredButton] = useState(null);

  const baseClass = 'relative inline-block text-gray-400 transition-transform duration-500';
  const hoverClass = 'transform scale-105 text-white ';

  return (
    <div className='flex text-xl flex-col font-semibold space-y-4 my-16'>
      {['about', 'experience', 'projects'].map((section) => (
        <div 
          key={section} 
          className={`${baseClass} ${hoveredButton === section ? hoverClass : ''}`}
          onMouseEnter={() => setHoveredButton(section)}
          onMouseLeave={() => setHoveredButton(null)}
        >
          <Link to={section} smooth={true} duration={1500}>
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
          <span className={`absolute w-1/5 h-0.5 bottom-0 left-0 bg-white transition-transform duration-1000 origin-left ${hoveredButton === section ? 'scale-x-100' : 'scale-x-0'}`}></span>
        </div>
      ))}
    </div>
  );
}
