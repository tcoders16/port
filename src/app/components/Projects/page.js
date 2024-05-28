// Projects/page.js
"use client"
import React from 'react';

export default function Projects() {
    const projects = [
      {
        year: "2020",
        title: "Integrating Algolia Search with WordPress Multisite",
        link: "https://example.com",
        image: "/cat.png",
      },
      {
        year: "2019",
        title: "Building a Headless Mobile App CMS From Scratch",
        link: "https://example.com",
        image: "/planet.png",
      },
      // Add more projects here
    ];
  
    return (
      <section id="projects" className="p-8  text-white min-h-screen">
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="flex items-start space-x-4">
              <img src={project.image} alt={project.title} className="w-32 h-32 object-cover rounded-md" />
              <div>
                <div className="text-gray-400">{project.year}</div>
                <h3 className="text-xl font-bold">
                  {project.title}
                  <a href={project.link} className="text-blue-500 ml-2" target="_blank" rel="noopener noreferrer">↗</a>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
}