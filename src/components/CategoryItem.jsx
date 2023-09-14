import React, { useState } from 'react';
import CallMadeIcon from '@mui/icons-material/CallMade';
function CategoryItem({LeftIcon,Title}) {

  const [selected,setSelected]=useState(false);

  const handleSelect=()=>{
    setSelected((prev)=>!prev);
  }
  return (
    <div className= {'bg-[#ffffff] flex justify-between items-center w-[258px] h-[90px] cursor-pointer rounded-[8px] py-[25px] px-[24px]' }onClick={handleSelect}>
      
     <LeftIcon className='text-[gray]'/>
     <h1 className='text-[18px] font-bold'>{Title}</h1>
     <CallMadeIcon  className={ selected?'bg-[#20B486] text-[white]' :'text-[gray]'} />
    

    </div>
  )
}

export default CategoryItem
