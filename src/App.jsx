import { useState } from 'react';

import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Companies from './components/Companies';
import Courses from './components/Courses';
import Achievements from './components/Achievements';
import Categories from './components/Categories';
import Learning from './components/Learning';
import Footer from './components/Footer';

 './components/Courses';

function App() {


  return (
    <div className='flex-col gap-8 h-screen justify-between items-center  bg-[#E9F8F3B2] '>

    <Navbar/>
    <Hero/>
   <Companies/>
   <Courses/>
   <Achievements/>
   <Categories />
   <Learning />
<Footer/>
    </div>
  )
}

export default App;
