import React, { Dispatch, SetStateAction } from "react";
import { ArrowDown, FilterIcon } from "../../__atoms";
import { sortCategory } from "@/app/commons/data";

export type SortByCategorySectionPropsType = {
  setFilteredCategoryValue: Dispatch<SetStateAction<string | undefined>>;
  filteredCategoryValue: string | undefined;
  filteredCategoryDropdown: boolean;
  setFilteredCategoryDropdown: Dispatch<SetStateAction<boolean>>;
};

const SortByCategorySection = ({
  setFilteredCategoryValue,
  filteredCategoryValue,
  filteredCategoryDropdown,
  setFilteredCategoryDropdown,
}: SortByCategorySectionPropsType) => {
  const handleFilterByCategory = (category: string) => {
    setFilteredCategoryValue(category);
  };

  return (
    <div className="relative">
      <div
        onClick={() => setFilteredCategoryDropdown((prev) => !prev)}
        className=" relative w-[20px] h-[20px] md:hidden"
      >
        <FilterIcon />
      </div>

      <div className="hidden md:flex items-center gap-3 ">
        <p className="text-[#696868] font-normal">Category</p>

        <div
          onClick={() => {
            setFilteredCategoryDropdown(!filteredCategoryDropdown);
          }}
          className="w-[177px] relative border border-[#98908B] rounded-md flex items-center gap-4 px-[20px] py-3 text-[#201F24]"
        >
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFilteredCategoryValue(e.target.value)
            }
            type="text"
            className="bg-transparent border-none focus:outline-none"
            placeholder="All Transactions"
            value={filteredCategoryValue || "All Transactions"}
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2  w-4 h-4 flex items-center justify-center ">
            <ArrowDown rotated={filteredCategoryDropdown} />
          </button>
        </div>
      </div>

      {filteredCategoryDropdown && (
        <div className="DROPDOWN py-3 max-w-[177px] px-[20px] rounded-lg shadow-xl absolute left-[-155px] top-10 md:left-[80px] right-0 md:top-[60px] z-30 bg-white">
          {Object.values(sortCategory).map((category, i) => {
            const isLastItem = i === Object.values(sortCategory).length - 1;
            return (
              <p
                onClick={() => {
                  handleFilterByCategory(category);
                  setFilteredCategoryDropdown((prev) => !prev);
                }}
                key={i}
                className={`py-2 text-sm font-normal hover:font-bold cursor-pointer md:py-3 ${
                  isLastItem ? "border-b-none" : "border-b border-b-[#F2F2F2]"
                }`}
              >
                {category}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SortByCategorySection;
