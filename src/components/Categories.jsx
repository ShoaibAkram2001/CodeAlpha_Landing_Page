import React from 'react'
import CategoryItem from './CategoryItem';
import DrawIcon from '@mui/icons-material/Draw';

function Categories() {
  return (
    <div className="flex-col  w-[1900]h-[1050px] py-10 bg-[#E9F8F3B2]">
      <h2 className="md:text-left ml-[100px]  font-serif  text-[56px] leading-[80px] text-center ">
        Most  <span className="text-[#20B486] ">Popular Categories</span>
      </h2>
      <p className="md:text-left font-serif ml-[100px] text-[20px] leading-[35px] text-center">
        Various versions have evolved over the years, sometimes by accident,
      </p>

      <div className='grid grid-cols-2 gap-10  py-[10px] mt-[20px]  md:grid-cols-3  lg:grid-cols-4 justify-items-center'>

      <CategoryItem LeftIcon={DrawIcon} Title={"Design"}/>
      <CategoryItem LeftIcon={DrawIcon} Title={"Marketing"}/>
      <CategoryItem LeftIcon={DrawIcon} Title={"Music"}/>
      <CategoryItem LeftIcon={DrawIcon} Title={"Finance"}/>
      <CategoryItem LeftIcon={DrawIcon} Title={"Business"}/>
      <CategoryItem LeftIcon={DrawIcon} Title={"Teaching"}/>
      <CategoryItem LeftIcon={DrawIcon} Title={"Personal Develop"}/>
         <CategoryItem LeftIcon={DrawIcon} Title={"Health & Fitness"}/>

      </div>

    
        
    </div>
  )
}

export default Categories;
