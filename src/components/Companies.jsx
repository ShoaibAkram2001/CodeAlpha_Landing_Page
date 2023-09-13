import React from "react";

import Logo1 from "../assets/company-logo-1.png";
import Logo2 from "../assets/company-logo-2.png";
import Logo3 from "../assets/company-logo-3.png";
import Logo4 from "../assets/company-logo-4.png";

function Companies() {
  return (
    <div className="flex-col bg-white p-auto p-[50px] ">
      <h1 className="sm:font-[600]  text-[36px] text-[#536E96] leading-[50px]  text-center">
        Trusted by over 25,000 teams around the world.
      </h1>
      <p className="sm:text-[24px]  text-[#536E96] leading-[46px]  text-center">
        Leading companies use the same courses to help employees keep their
        skills fresh.
      </p>
      <div className="sm:flex px-8 gap-8 mt-5 flex justify-center items-center ">
        <img src={Logo1} />
        <img src={Logo2} />
        <img src={Logo3} />
        <img src={Logo4} />
      </div>
    </div>
  );
}

export default Companies;
