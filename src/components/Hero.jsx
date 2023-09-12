import React from "react";

import heroIcon from "../assets/heroImg.png";
import SearchIcon from '@mui/icons-material/Search';

function Hero() {
  return (
    <div className="w-full h-[720px] p-10 gap-86px">
      <div className="flex  gap-10 justify-between items-center w-full h-auto rounded-[8px] sm:flex-col ">
        <div className="flex-col items-center justify-center  ">
          
          <h3 className="text-[#6D737A] mt-[113px]  h-[32px] font-600 text-[24px]">
            START TO SUCCESS
          </h3>
          <h1 className="leading-[72px] w-[677px] text-[55px] h-[216px] mt-[50px]">
            Access To <span className="text-[#6D737A]">5000+</span> Courses from{" "}
            <span className="text-[#6D737A]">300</span> Instructors &
            Institutions
          </h1>
          <p className="text-gray-500 mt-[20px] w-[680px] h-[30px]font-serif text-[22px] leading-[28px] font-400">
            Various versions have evolved over the years, sometimes by accident,
          </p>

          <div className=" flex gap-4 items-center  mt-[25px]  ps-8 bg-white w-[648px] h-[72px] rounded-sm drop-shadow-[0_40px_35px_rgba(0,0,0,0.1)]">
           <SearchIcon className="w-[25px] h-[25px]"/>
            <input className='  text-[18px] text-gray outline-none font w-full h-[25px]'type="search" placeholder="What do want to learn?"/>
          </div>


        </div>
        <img src={heroIcon} className=" w-[773.57px] h-[520.52px] mt-[100px]" />

      </div>
    </div>
  );
}

export default Hero;
