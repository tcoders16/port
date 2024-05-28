'use client'
import React, { useEffect, useState } from 'react';
import Nameleft from "../Nameleft/page";
import Interactivebuttons from "../Interactivebuttons/page";
import Experience from "../Experience/page";
import Projects from "../Projects/page";
import About from "../About/page";
import Contactform from '../Contactform/page';
import './mobile.css'; // Import the mobile CSS

export default function Main() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sectionWidth = isMobile ? 'w-[900px]' : 'w-full';

  return (
    <section id="about" className={`bg-gray-900 text-white ${sectionWidth} min-h-screen pb-24`}>
      <div className="flex flex-col md:flex-row">
        {/* Left Section: Fixed */}
        <div className={`left-section ${isMobile ? 'w-full' : 'md:w-1/2 md:h-screen md:fixed md:top-0 md:left-0 p-8'} flex flex-col items-start justify-start`}>
          <Nameleft className="nameleft-class mb-5 md:mb-0"/>
          <Interactivebuttons className="interactivebuttons-class mt-5 md:mt-0"/>
        </div>

        {/* Right Section: Scrollable */} 
        <div className={`right-section ${isMobile ? '' : 'md:w-1/2 md:ml-auto md:pl-8 md:pt-8'} flex flex-col space-y-24`}>
          <div>
            <About className="about-class" />
            <Experience className="experience-class" />
            <Projects className="projects-class" />
            <Contactform className="contactform-class"/>
          </div>
        </div>
      </div>
    </section>
  );
}
