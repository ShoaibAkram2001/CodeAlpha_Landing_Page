import React from 'react'
import Card from './Card';
import card1 from '../assets/blog1.png';

function Courses() {
  return (
    <div className='flex-col w-[1900]h-[1050px] py-10 bg-[#d4a4a4]'>
   <h2 className=' sm:text-center font-serif  text-[56px] leading-[72px]'>
    Most Popular <span className='text-[#20B486] '>Courses</span>
    </h2>
    <p className='sm:text-center font-serif text-[20px] leading-[35px]'>Various versions have evolved over the years, sometimes by accident,</p>
      
      <Card card1={card1} rating={5} title={"JavaScript Programming"} price={"$500"}/>
    </div>
  )
}

export default Courses;
