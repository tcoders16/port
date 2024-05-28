"use client"
import React from 'react';
import Main from './components/Main/page';

import Custompointer from './components/Custompointer/page';


export default function Home() {
  return(
    <>
    <Custompointer/>

      <div className="app">
        <Main/>
      </div>

    </>
  );
}