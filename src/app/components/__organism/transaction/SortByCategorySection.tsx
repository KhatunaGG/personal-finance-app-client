import React from 'react'
import { ArrowDown } from '../../__atoms';
import { sortCategory } from '@/app/commons/data';

const SortByCategorySection = () => {
  return (
    <div className="TRANSITION-DROPDOWN hidden md:flex items-center gap-3">
    <p className="text-[#696868] font-normal">Category</p>

    <div className="w-[177px] relative border border-[#98908B] rounded-md flex items-center gap-4 px-[20px] py-3 text-[#201F24]">
      <input
        type="text"
        className="bg-transparent border-none focus:outline-none"
       placeholder="All Transactions"
      />
      <button className="absolute right-3 top-1/2 transform -translate-y-1/2  w-4 h-4 flex items-center justify-center ">
        <ArrowDown />
      </button>

      <div className="DROPDOWN hidden py-3 px-[20px] rounded-lg shadow-xl absolute left-0 right-0 top-[60px] z-30 bg-white">
        {Object.values(sortCategory).map((category, i) => {
          const isLastItem = i === Object.values(sortCategory).length - 1;
          return (
            <p key={i} className={`py-3 text-sm font-normal ${isLastItem ? "border-b-none" : "border-b border-b-[#F2F2F2]"}`}>
            {category}
          </p>
          )
        })}
      </div>
    </div>
  </div>
  )
}

export default SortByCategorySection