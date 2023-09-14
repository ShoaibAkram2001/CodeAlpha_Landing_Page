import React from "react";
import Achieve_Card from "./Achieve_Card";
import AchievementImage from '../assets/achievement.png';
import SchoolIcon from '@mui/icons-material/School';
import VideoCameraBackOutlinedIcon from '@mui/icons-material/VideoCameraBackOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';

function Achievements() {
  return (
    <div className="md:flex justify-between items-center bg-[#fffff] w-[1920px] h-[900px]  py-[25px] ">
      <div className="left_section w-[663px] h-[394px]">
        <h2 className=" md:text-left  font-serif ml-[100px] text-[56px] leading-[80px] text-center ">
          Our <span className="text-[#20B486] ">Achievement</span>
        </h2>
        <p className="md:text-left font-serif ml-[100px] text-[20px] leading-[35px] text-center">
          Various versions have evolved over the years, sometimes by accident,
        </p>

        <div className="grid grid-cols-2 mt-[10px]">

        <Achieve_Card Icon={SchoolIcon} ratio={"300"} title={"Instructor"}/>
        <Achieve_Card Icon={VideoCameraBackOutlinedIcon} ratio={"20,000+"} title={"Student"}/>
        <Achieve_Card Icon={SchoolIcon} ratio={"10,000+"} title={"Video"}/>
        <Achieve_Card Icon={Diversity3OutlinedIcon} ratio={"1,00,000+"} title={"User's"}/>
        </div>
      </div>

      <div className="right_section">

        <img src={AchievementImage} className="sm:ml-[100px]"/>
      </div>
    </div>
  );
}

export default Achievements;
