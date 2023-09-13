import React from "react";
import StarRating from "./StarRating";

function Card({ card1,rating,title,price }) {
  return (
    <div className="flex-col ml-[20px] w-[312px] h-[403px] pb-8 rounded-[24px] bg-[#FFFFFF]  )">
      <img
        src={card1}
        className="mt-[10px] p-0.5 w-[310px] h-[250px] rounded-[12px]"
      />
      <h1 className=" font-bold text-[20px] ml-[10px] mt-[5px] leading-[28px] text-[#363A3D]">
      {title}
      </h1>
      <StarRating rating={rating}/>

      <h1 className="text-[22px] ml-[15px] mt-[20px] font-black-700 leading-[28px] text-[#363A3D]">{price}</h1>

    </div>
  );
}

export default Card;
