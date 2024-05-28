// components/CustomPointer.js
"use client"
import { useEffect, useState } from 'react';
import './custompointer.css';

export default function CustomPointer() {
  useEffect(() => {
    const customPointer = document.getElementById('custom-pointer');
    const body = document.body;
    let mouseX = 0, mouseY = 0;
    let pointerX = 0, pointerY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      body.style.setProperty('--mouse-x', `${e.clientX}px`);
      body.style.setProperty('--mouse-y', `${e.clientY}px`);
    });

    function updatePointer() {
      pointerX += (mouseX - pointerX) * 0.1;
      pointerY += (mouseY - pointerY) * 0.1;
      customPointer.style.left = `${pointerX}px`;
      customPointer.style.top = `${pointerY}px`;
      requestAnimationFrame(updatePointer);
    }

    updatePointer();
  }, []);

  return <div id="custom-pointer"></div>;
}