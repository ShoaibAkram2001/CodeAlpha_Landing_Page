import { useState } from 'react';

import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Companies from './components/Companies';
import Courses from './components/Courses';
 './components/Courses';

function App() {


  return (
    <div className='flex-col gap-8 h-screen justify-between items-center  bg-[#E9F8F3B2] '>

    <Navbar/>
    <Hero/>
   <Companies/>
   <Courses/>
    </div>
  )
}

export default App;
