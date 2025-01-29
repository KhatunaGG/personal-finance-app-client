// "use client";
// import { sortBy } from "@/app/commons/data";
// import { ArrowDown } from "../../__atoms";
// import { Dispatch, SetStateAction } from "react";

// export type SortBySectionPropsType = {
//   setSortByDropdown: Dispatch<SetStateAction<boolean>>;
//   sortByDropdown: boolean;
//   setSortByValue: Dispatch<SetStateAction<string | undefined>>;
//   sortByValue: string | undefined;
// };

// const SortBySection = ({
//   setSortByDropdown,
//   sortByDropdown,
//   setSortByValue,
//   sortByValue
// }: SortBySectionPropsType) => {

//   const handleSortBy = (item: string) => {
//     setSortByValue(item)
//   };

//   return (
//     <div className="hidden md:flex items-center gap-3 ">
//       <p className="text-[#696868] font-normal">Sort by</p>

//       <div
//         onClick={() => {
//           if (sortByDropdown === true) {
//             setSortByDropdown(false);
//           } else {
//             setSortByDropdown(true);
//           }
//         }}
//         className="w-[114px] relative border border-[#98908B] rounded-md flex items-center gap-4 px-[20px] py-3 text-[#201F24]"
//       >
//         <input
//           type="text"
//           className="bg-transparent border-none focus:outline-none w-[80%] ext-sm font-normal"
//           placeholder="Latest"
//           value={sortByValue}
//           readOnly
//         />
//         <button className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 flex items-center justify-center w-[20%]">
//           <ArrowDown rotated={sortByDropdown}  />
//         </button>
//         {sortByDropdown && (
//           // <div className="DROPDOWN py-3 px-[20px] rounded-lg shadow-xl absolute left-0 right-0 top-[60px] z-30 bg-white   bg-red-500">
//           <div className="DROPDOWN py-3 px-[20px] rounded-lg shadow-xl absolute top-0 -right-6 md:left-0 md:right-0 md:top-[60px] z-30 bg-white   bg-red-500">
//             {Object.values(sortBy).map((item, i) => {
//               const isLastItem = i === Object.values(sortBy).length - 1;
//               return (
//                 <p
//                   onClick={() => handleSortBy(item)}
//                   key={i}
//                   className={`py-3 text-sm font-normal hover:font-bold cursor-pointer ${
//                     isLastItem ? "border-b-none" : "border-b border-b-[#F2F2F2]"
//                   }`}
//                 >
//                   {item}
//                 </p>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SortBySection;















//after custom hook use-sortAndFilter
"use client";
import { sortBy } from "@/app/commons/data";
import { ArrowDown, SortIcon } from "../../__atoms";
import { Dispatch, SetStateAction } from "react";

// export type SortBySectionPropsType = {
//   setSortByDropdown: Dispatch<SetStateAction<boolean>>;
//   sortByDropdown: boolean;
//   setSortByValue: Dispatch<SetStateAction<string | undefined>>;
//   sortByValue: string | undefined;
// };


export type SortBySectionPropsType = {
  setSortByDropdown: Dispatch<SetStateAction<boolean>>;
  sortByDropdown: boolean;
  setSortByValue: Dispatch<SetStateAction<string | undefined>>;
  sortByValue?: string;
};



const SortBySection = ({
  setSortByDropdown,
  sortByDropdown,
  setSortByValue,
  sortByValue,
}: SortBySectionPropsType) => {

  
  const handleSortBy = (item: string) => {
    setSortByValue(item);
  };

  return (
    <div className="relative">
      <div
        onClick={() => setSortByDropdown((prev) => !prev)}
        className="relative w-[20px] h-[20px] md:hidden"
      >
        <SortIcon />
      </div>

      <div className="hidden md:flex items-center gap-3 ">
        <p className="text-[#696868] font-normal">Sort by</p>

        <div
          onClick={() => {
            if (sortByDropdown === true) {
              setSortByDropdown(false);
            } else {
              setSortByDropdown(true);
            }
          }}
          className="w-[114px] relative border border-[#98908B] rounded-md flex items-center gap-4 px-[20px] py-3 text-[#201F24]"
        >
          <input
            type="text"
            className="bg-transparent border-none focus:outline-none w-[80%] ext-sm font-normal"
            placeholder="Latest"
            value={sortByValue}
            readOnly
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 flex items-center justify-center w-[20%]">
            <ArrowDown rotated={sortByDropdown} />
          </button>
        </div>
      </div>

      {sortByDropdown && (
        <div className="DROPDOWN max-w-[114px] py-3 px-[20px] rounded-lg shadow-xl absolute top-10 left-[-62px] md:left-[70px] md:right-0 md:top-[60px] z-30 bg-white">
          {Object.values(sortBy).map((item, i) => {
            const isLastItem = i === Object.values(sortBy).length - 1;
            return (
              <p
                onClick={() => {
                  setSortByDropdown((prev) => !prev);
                  handleSortBy(item);
                }}
                key={i}
                className={`py-3 text-sm font-normal hover:font-bold cursor-pointer ${
                  isLastItem ? "border-b-none" : "border-b border-b-[#F2F2F2]"
                }`}
              >
                {item}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SortBySection;
