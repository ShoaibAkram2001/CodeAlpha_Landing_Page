import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logo.svg';
import lockIcon from '../assets/lock.svg'
import HamburgerMenu from '../assets/hamburgerMenu.svg'
import '../style/Navbar.css';
import {Button,IconButton } from '@mui/material';
import close from '../assets/close.svg'
function Navbar() {

  const [toggale,setToggale]=useState(false);
  
   const handleToggale=()=>{
  setToggale((prev)=>!prev);
   }
  return (
    <>
    <div className='flex  justify-around items-center border-b-[2px] p-4 shadow-sm bg-white'>
      <img src={logo} alt='Logo' className='h-[25px]'/>
  <nav>
    <ul className='menus md:flex gap-9 text-[18px] font-Public cursor-pointer justify-between Sans font-[500] text-[#6D737A] sm:hidden'>
        <li>Home</li>
        <li>About</li>
        <li>Course</li>
        <li>Blog</li>
        <li>Contact</li>
    </ul>

    </nav>
    <img src={toggale?close:HamburgerMenu} className='md:hidden outline-gray cursor-pointer' onClick={handleToggale}/>
    <div className='lg:flex gap-8  hidden'>
    <div className='flex cursor-pointer justify-center items-center gap-2 '>
    <img src={lockIcon} className='h-[30px] w-[30px] '/>
    <h2 className='text-[#6D737A] text-[16px] text-center  font-bold '>Login</h2>
  </div>
  
  <button className='signup_btn font-bold'>
  Sign up for Free
</button>
    </div>


    </div>

    
    <div className={toggale? 'sm:flex-col items-end px-[20px] py-[20px] space-y-10 md:hidden':'hidden'}>

    <ul className={toggale?'flex-col bg-[whitesmoke] block border-b-[3px] pb-5 text-[20px] w-full font-Public  Sans font-[500] text-[#6D737A]':'hidden'}>
        <li className='hover:bg-[#CEE9F2] px-5 py-2 w-full cursor-pointer  '>Home</li>
        <li className='hover:bg-[#CEE9F2] px-5 py-2 w-full cursor-pointer  '>About</li>
        <li className='hover:bg-[#CEE9F2] px-5 py-2 w-full cursor-pointer '>Course</li>
        <li className='hover:bg-[#CEE9F2] px-5 py-2 w-full cursor-pointer '>Blog</li>
        <li className='hover:bg-[#CEE9F2] px-5 py-2 w-full cursor-pointer '>Contact</li>
    </ul>
   <div className={'flex px-3 py-2 gap-2 hover:bg-[#20B486] rounded-[8px] w-full justify-center items-center bg-[white] border-[2px] cursor-pointer'}>
   <img src={lockIcon} className='lockIcon hover:text-[#ffff] h-[30px] w-[30px] '/>
    <h2 className='hover:text-[#ffff] text-[#6D737A] text-[20px] text-center  font-bold '>Login</h2>
   </div>
   <button className='signup_btn font-bold w-full text-[20px]'>
  Sign up for Free
</button>
    </div>


</>

  )
}

export default Navbar;
