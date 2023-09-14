import React from "react";
import logo from "../assets/logo.svg";
import '../App.css';

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';


function Footer() {
  return (
    <div className=" md: grid grid-cols-3 justify-center gap-[80px] h-[850px] w-[1920px] px-[258px] py-[120px] sm:grid-cols-1 lg:grid-cols-3">
      <div className="flex-col space-y-6 mr-[100px] w-[350px] ">
        <img src={logo} alt="Logo" className="h-[25px]" />
        <h1 className=" text-[22px] font-bold">Contact Us</h1>
        <p className="text-[#6D737A] text-[18px]">Call : +123 400 123</p>
        <p className="text-[#6D737A] text-[18px]">Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.</p>
        <p className=" text-[#363A3D] text-[18px] font-semibold  ">Email: shoaibakram2001@gmail.com</p>

      <div className="flex gap-8  rounded-[8px] ">
        <FacebookIcon   sx={{ fontSize: 50 ,padding:"5px",bgcolor:"whitesmoke"}}/>
         <LinkedInIcon sx={{ fontSize: 50 ,padding:"5px",bgcolor:"whitesmoke"}}/>
        <InstagramIcon sx={{ fontSize: 50 ,padding:"5px",bgcolor:"whitesmoke"}}/>
        <EmailSharpIcon sx={{ fontSize: 50,padding:"5px",bgcolor:"whitesmoke"}}/>
       
      </div>
      </div>
     <div className="grid grid-cols-2  justify-center w-[1220px] ">
     <div className="flex-col space-y-8 rounded-[8px]">
      <h1 className=" text-[22px] font-bold">Explore</h1>
      <ul className='flex-col space-y-6 '>
        <li className="text-[20px] cursor-pointer p-[2px] text-[#6D737A]">Home</li>
        <li className="text-[20px] cursor-pointer p-[2px] text-[#6D737A]" >About</li>
        <li  className="text-[20px] cursor-pointer p-[2px] text-[#6D737A]">Course</li>
        <li className="text-[20px] cursor-pointer  p-[2px] text-[#6D737A]" >Blog</li>
        <li  className="text-[20px] cursor-pointer p-[2px] text-[#6D737A]">Contact</li>
    </ul>
      </div>
      <div className="flex-col space-y-8 rounded-[8px] sm:ml-[-400px]">
      <h1 className=" text-[22px] font-bold">Categories</h1>
      <ul className='flex-col space-y-6 '>
        <li className="text-[20px] cursor-pointer p-[2px] text-[#6D737A]">Design</li>
        <li className="text-[20px] cursor-pointer p-[2px] text-[#6D737A]" >Marketing</li>
        <li  className="text-[20px] cursor-pointer p-[2px] text-[#6D737A]">Finance</li>
        <li className="text-[20px] cursor-pointer  p-[2px] text-[#6D737A]" >Music</li>
        <li  className="text-[20px] cursor-pointer p-[2px] text-[#6D737A]">Business</li>
        <li  className="text-[20px] cursor-pointer p-[2px] text-[#6D737A]">Teaching</li>
    </ul>
      </div>
     </div>
  
      <div className="flex-col space-y-6 mr-[5px] w-[350px] sm:pb-[50px]">
        <h1 className=" text-[22px] font-bold">Subscribe</h1>
        <p className="text-[#6D737A] text-[18px]">Lorem Ipsum has been them an industry printer took a galley make book.</p>
        
        <input type="text" placeholder="Email here" className="p-[16px] bg-[#F2F3F4] rounded-[8px] w-[312px] h-[60px]" />
        
        <button className='signup_btn md:px-[12px] py-[20px] text-center h-[60px] w-[300px] font-bold  text-[20px] sm:block w-'>
     Subscribe Now
</button>
      </div>
    </div>
  );
}

export default Footer;
