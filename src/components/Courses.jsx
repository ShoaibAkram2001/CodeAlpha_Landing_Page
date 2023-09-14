import React from "react";
import Card from "./Card";
import card1 from "../assets/blog1.png";
import Slider from "react-slick";
import { courses } from "../data/Courses";

function Courses() {
 

  return (
    <div className="flex-col  w-[1900]h-[1050px] py-10 bg-[#E9F8F3B2]">
      <h2 className="md:text-left ml-[100px]  font-serif  text-[56px] leading-[80px] text-center ">
        Most Popular <span className="text-[#20B486] ">Courses</span>
      </h2>
      <p className="md:text-left font-serif ml-[100px] text-[20px] leading-[35px] text-center">
        Various versions have evolved over the years, sometimes by accident,
      </p>

      <div className="grid grid-cols-1 gap-1 px-[20px] py-[10px] md:grid-cols-2  lg:grid-cols-4 mt-[10px] justify-items-center  ">
      {courses.map((course, i) => (
        <Card  key={i}course={course} />
     
        ))}

      </div>
        
    </div>
  );
}

export default Courses;
