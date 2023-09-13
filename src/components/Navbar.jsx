import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logo.svg';
import lockIcon from '../assets/lock.svg'
import HamburgerMenu from '../assets/hamburgerMenu.svg'
import '../style/Navbar.css';
import {Button,IconButton } from '@mui/material';

function Navbar() {

  return (
    <div className='flex  justify-around items-center border-b-2 p-4 shadow-sm bg-white'>
      <img src={logo} alt='Logo' className='h-[25px]'/>
  <nav>
    <ul className='menus  md:flex gap-9 text-[18px] font-Public cursor-pointer justify-between Sans font-[500] text-[#6D737A] sm:hidden'>
        <li>Home</li>
        <li>About</li>
        <li>Course</li>
        <li>Blog</li>
        <li>Contact</li>
    </ul>

    </nav>
    <img src={HamburgerMenu} className='md:hidden outline-gray cursor-pointer'/>
    <div className='lg:flex gap-8  hidden'>
    <div className='flex cursor-pointer justify-center items-center gap-2 '>
    <img src={lockIcon} className='h-[30px] w-[30px] '/>
    <h2 className='text-[#6D737A] text-[16px] text-center font-[500] '>Login</h2>
  </div>
  
  <button className='signup_btn'>
  Sign up for Free
</button>
    </div>

    </div>
  )
}

export default Navbar;
