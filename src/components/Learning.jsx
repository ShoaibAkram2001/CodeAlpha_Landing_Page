import React from "react";
import cta from "../assets/cta.png";

function Learning() {
  return (
    <div className="md:flex flex-row-reverse  justify-around items-center bg-[#E9F8F3B2] w-full h-[900px]  lg:items-center ">
      <div className=" md:left_section flex-col justify-between items-center w-[663px] h-[454px] py-[60px] ">
        <h2 className=" md:text-left  font-serif font-bold text-[40px] leading-[80px]   text-center">
          Join <span className="text-[#20B486] ">World's largest </span>{" "}
          learning platform today
        </h2>
        <p className="md:text-left font-serif  text-[20px] leading-[35px] text-center">
          Start learning by registering for free
        </p>
        <button className="signup_btn font-bold mt-[30px] sm:ml-[160px] align-middle lg:ml-[-10px]">Sign up for Free</button>
      </div>

      <div className="right_section">
        <img src={cta} className="sm:ml-[20px] mt-[-100px]" />
      </div>
    </div>
  );
}

export default Learning;
