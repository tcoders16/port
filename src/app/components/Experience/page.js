// Experience/page.js
"use client"
import React from 'react';

export default function Experience() {
    return (
      <section id="experience" className="p-8  text-white min-h-screen">
        <div className="space-y-16">
          {/* Experience 1 */}
          <div className="flex justify-between items-start">
            <div className="text-gray-400">2024 — PRESENT</div>
            <div className="w-2/3">
              <h3 className="text-xl font-bold">
                Senior Frontend Engineer, Accessibility · Klaviyo
                <a href="https://klaviyo.com" className="text-blue-500 ml-2" target="_blank" rel="noopener noreferrer">↗</a>
              </h3>
              <p className="mt-2">
                Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.
              </p>
              <div className="mt-2 flex space-x-2">
                <span className="px-2 py-1 bg-gray-800 text-sm rounded">JavaScript</span>
                <span className="px-2 py-1 bg-gray-800 text-sm rounded">TypeScript</span>
                <span className="px-2 py-1 bg-gray-800 text-sm rounded">React</span>
                <span className="px-2 py-1 bg-gray-800 text-sm rounded">Storybook</span>
              </div>
            </div>
          </div>
  
          {/* Experience 2 */}
          <div className="flex justify-between items-start">
            <div className="text-gray-400">2018 — 2024</div>
            <div className="w-2/3">
              <h3 className="text-xl font-bold">
                Lead Engineer · Upstatement
                <a href="https://upstatement.com" className="text-blue-500 ml-2" target="_blank" rel="noopener noreferrer">↗</a>
              </h3>
              <p className="mt-2">
                Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.
              </p>
              <div className="mt-2 flex space-x-2">
                <span className="px-2 py-1 bg-gray-800 text-sm rounded">JavaScript</span>
                <span className="px-2 py-1 bg-gray-800 text-sm rounded">React</span>
                <span className="px-2 py-1 bg-gray-800 text-sm rounded">CSS</span>
                <span className="px-2 py-1 bg-gray-800 text-sm rounded">HTML</span>
              </div>
            </div>
          </div>
  
          {/* Add more experiences here */}
        </div>
      </section>
    );
  }
  
