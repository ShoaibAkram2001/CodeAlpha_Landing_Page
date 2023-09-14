import React from 'react';
import '../style/Achieve_Card.css';
import SchoolIcon from '@mui/icons-material/School';


function Achieve_Card({Icon,ratio,title}) {
  return (
    <div className='flex flex-5 ml-[100px] gap-10 items-center Achieve'>
      <Icon className="Achieve_Icon"/>
      <div className='flex-col '>
     <h1 className='text-[30px] font-bold leading-[60px] text-center'>{ratio}</h1>
     <p className='text-[gray] text-[16px]'>{title}</p>
      </div>
    </div>
  )
}

export default Achieve_Card
