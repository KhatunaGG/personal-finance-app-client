// "use client";

// import { usePathname } from "next/navigation";
// import { RecurringBillsIcon } from "../../__atoms";

// const RecurringBillsSection = () => {
//   const path = usePathname();
//   console.log(path, "path");
//   return (
//     <section className="w-full h-full min-h-screen px-4 py-6 md:px-6 md:py-8 flex flex-col gap-8">
//       <h1 className="w-full text-left text-[32px] text-[#201F24] font-bold">
//         Recurring Bills
//       </h1>

//       <div className="w-full flex flex-col gap-6 lg:flex-row">
//         <div className="LEFT bg-blue-200 flex flex-col gap-3 md:flex-row md:gap-6 lg:flex-col w-full lg:w-[32.52%]">
//           <div className="bg-[#201F24] text-white rounded-xl md:w-1/2 lg:w-full pt-[38px] px-6 pb-6 flex flex-row gap-[20px] items-center  md:flex-col md:gap-8 md:items-start">
//             <RecurringBillsIcon />
//             <div>
//               <p className="text-sm font-normal">Total Bills</p>
//               <h2 className="text-[32px] font-bold">$384.98</h2>
//             </div>
//           </div>

//           <div className="rounded-lg md:w-1/2 lg:w-full bg-white p-[20px]">
//             <h3 className="text-base font-bold mb-[20px]">Summary</h3>

//             <div className="w-full flex flex-row items-center justify-between">
//               <p className="text-sm font-normal text-[#696868] w-[65%]">
//                 Paid Bills
//               </p>
//               <p className="text-xs font-bold text-[##201F24] w-[35%] text-right">
//                 4 ($190.00)
//               </p>
//             </div>

//             <div className="h-[1px] w-full bg-[#69686826] my-4"></div>

//             <div className="flex flex-row items-center justify-between">
//               <p className="text-sm font-normal text-[#696868] w-[65%]">
//                 Total Upcoming
//               </p>
//               <p className="text-xs font-bold text-[##201F24] w-[35%] text-right">
//                 4 ($194.98)
//               </p>
//             </div>

//             <div className="h-[1px] w-full bg-[#69686826] my-4"></div>

//             <div className="flex flex-row items-center justify-between">
//               <p className="text-sm font-normal text-[#C94736] w-[65%]">
//                 Paid Bills
//               </p>
//               <p className="text-xs font-bold text-[#C94736] w-[35%] text-right">
//                 4 ($190.00)
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="RIGHT bg-green-200 rounded-xl lg:w-[67.47%]">
//           <div>wwwwwwwwww</div>
//           <div>wwwwwwwwww</div>
//           <div>wwwwwwwwww</div>
//           <div>wwwwwwwwww</div>
//           <div>wwwwwwwwww</div>
//           <div>wwwwwwwwww</div>
//           <div>wwwwwwwwww</div>
//           <div>wwwwwwwwww</div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RecurringBillsSection;

"use client";

import { usePathname } from "next/navigation";
import { RecurringBillsIcon } from "../../__atoms";
import Search from "../transaction/Search";
import { useState } from "react";
import SortBySection from "../transaction/SortBySection";
import { SortFilterHeader } from "../../__molecules";
import TransactionItem from "../transaction/TransactionItem";

const RecurringBillsSection = () => {
  const path = usePathname();
  console.log(path, "path");
  const isRecurringBills = path.includes("recurringbills");

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortByDropdown, setSortByDropdown] = useState(false);
  const [sortByValue, setSortByValue] = useState<string | undefined>("Latest");
  console.log(searchTerm, "searchTerm");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <section className="w-full h-full min-h-screen px-4 py-6 md:px-6 md:py-8 flex flex-col gap-8">
      <h1 className="w-full text-left text-[32px] text-[#201F24] font-bold">
        Recurring Bills
      </h1>

      <div className="w-full flex flex-col gap-6 lg:flex-row">
        <div className="LEFT flex flex-col gap-3 md:flex-row md:gap-6 lg:flex-col w-full lg:w-[32.52%]">
          <div className="bg-[#201F24] text-white rounded-xl md:w-1/2 lg:w-full pt-[38px] px-6 pb-6 flex flex-row gap-[20px] items-center  md:flex-col md:gap-8 md:items-start">
            <RecurringBillsIcon />
            <div>
              <p className="text-sm font-normal">Total Bills</p>
              <h2 className="text-[32px] font-bold">$384.98</h2>
            </div>
          </div>

          <div className="rounded-lg md:w-1/2 lg:w-full bg-white p-[20px]">
            <h3 className="text-base font-bold mb-[20px]">Summary</h3>

            <div className="w-full flex flex-row items-center justify-between">
              <p className="text-sm font-normal text-[#696868] w-[65%]">
                Paid Bills
              </p>
              <p className="text-xs font-bold text-[##201F24] w-[35%] text-right">
                4 ($190.00)
              </p>
            </div>

            <div className="h-[1px] w-full bg-[#69686826] my-4"></div>

            <div className="flex flex-row items-center justify-between">
              <p className="text-sm font-normal text-[#696868] w-[65%]">
                Total Upcoming
              </p>
              <p className="text-xs font-bold text-[##201F24] w-[35%] text-right">
                4 ($194.98)
              </p>
            </div>

            <div className="h-[1px] w-full bg-[#69686826] my-4"></div>

            <div className="flex flex-row items-center justify-between">
              <p className="text-sm font-normal text-[#C94736] w-[65%]">
                Paid Bills
              </p>
              <p className="text-xs font-bold text-[#C94736] w-[35%] text-right">
                4 ($190.00)
              </p>
            </div>
          </div>
        </div>

        <div className="RIGHT rounded-xl lg:w-[67.47%]">
          <div className="w-full py-6 px-[20px] md:p-8 flex flex-col gap-6 rounded-xl bg-white">
            <div className="SORT flex items-center justify-between">
              <Search
                handleSearchChange={handleSearchChange}
                isRecurringBills={isRecurringBills}
              />
              <SortBySection
                setSortByDropdown={setSortByDropdown}
                sortByDropdown={sortByDropdown}
                setSortByValue={setSortByValue}
                sortByValue={sortByValue}
              />
            </div>

            <SortFilterHeader isRecurringBills={isRecurringBills} />

            <div className="w-full">
              <TransactionItem
                category={""}
                createdAt={undefined}
                amount={0}
                isFirstItem={false}
                isRecurringBills={isRecurringBills}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecurringBillsSection;
