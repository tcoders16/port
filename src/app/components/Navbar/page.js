// app/components/Navbar.js
"use client"
import React from 'react';

export default function Navbar() {
    return (
      <nav className="p-4 bg-gray-800 text-white flex justify-between">
        <div className="text-xl">My Portfolio</div>
        <div className="space-x-4">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
        </div>
      </nav>
    );
  }
  
