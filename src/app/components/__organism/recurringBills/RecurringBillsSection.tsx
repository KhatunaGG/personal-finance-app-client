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

//before custom hook use-sortAndFilter*********************************************
// "use client";
// import { usePathname } from "next/navigation";
// import { RecurringBillsIcon } from "../../__atoms";
// import Search from "../transaction/Search";
// import { useEffect, useState } from "react";
// import SortBySection from "../transaction/SortBySection";
// import { SortFilterHeader } from "../../__molecules";
// import TransactionItem from "../transaction/TransactionItem";
// import { axiosInstance } from "@/app/libs/axiosInstance";
// import useAccessToken from "@/app/hooks/use-toke";
// import { ColorEnum } from "@/app/schema/schema";

// export type RecurringBillsDataType = {
//   amount: number;
//   category: string;
//   categoryLogo: string;
//   color: ColorEnum | string | undefined;
//   dueDate: string;
//   type: string;
//   _id: string;
// };

// const RecurringBillsSection = () => {
//   const path = usePathname();
//   const isRecurringBills = path.includes("recurringbills");
//   const { accessToken, isLoading } = useAccessToken();
//   const [recurringBillsData, setRecurringBillsData] =
//     useState<RecurringBillsDataType[]>();

//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [sortByDropdown, setSortByDropdown] = useState(false);
//   const [sortByValue, setSortByValue] = useState<string | undefined>("Latest");
//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(e.target.value);
//   };

//   console.log(searchTerm, "searchTerm");
//   console.log(sortByValue, "sortByValue");

//   // useEffect(() => {
//   //   const sortedRecurringBillsData = recurringBillsData?.sort

//   // }, [sortByValue, searchTerm])

//   useEffect(() => {
//     const getAllRecurringBills = async () => {
//       try {
//         const res = await axiosInstance.get("/recurring-bills", {
//           headers: { Authorization: `Bearer ${accessToken}` },
//         });

//         if (res?.status >= 200 && res?.status <= 204) {
//           setRecurringBillsData(res.data);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getAllRecurringBills();
//   }, []);

//   console.log(recurringBillsData, "recurringBillsData");

//   return (
//     <section className="w-full h-full min-h-screen px-4 py-6 md:px-6 md:py-8 flex flex-col gap-8">
//       <h1 className="w-full text-left text-[32px] text-[#201F24] font-bold">
//         Recurring Bills
//       </h1>

//       <div className="w-full flex flex-col gap-6 lg:flex-row">
//         <div className="LEFT flex flex-col gap-3 md:flex-row md:gap-6 lg:flex-col w-full lg:w-[32.52%]">
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

//         <div className="RIGHT rounded-xl lg:w-[67.47%]">
//           <div className="w-full py-6 px-[20px] md:p-8 flex flex-col gap-6 rounded-xl bg-white">
//             <div className="SORT flex items-center justify-between">
//               <Search
//                 handleSearchChange={handleSearchChange}
//                 isRecurringBills={isRecurringBills}
//               />
//               <SortBySection
//                 setSortByDropdown={setSortByDropdown}
//                 sortByDropdown={sortByDropdown}
//                 setSortByValue={setSortByValue}
//                 // sortByValue={sortByValue}
//               />
//             </div>

//             <SortFilterHeader isRecurringBills={isRecurringBills} />

//             {/* <div className="w-full">
//               {isLoading ? (
//                 <div className="w-full h-screen flex items-center justify-center">
//                   Loading...
//                 </div>
//               ) : (
//                 <TransactionItem
//                   category={""}
//                   createdAt={undefined}
//                   amount={0}
//                   isFirstItem={false}
//                   isRecurringBills={isRecurringBills}
//                   _id={""}
//                 />
//               )}
//             </div> */}

//             {isLoading ? (
//               <div className="w-full h-screen flex items-center justify-center">
//                 Loading...
//               </div>
//             ) : (
//               <div className="w-full">
//                 {recurringBillsData?.map((transaction, i) => {
//                   const isFirstItem = i === 0;
//                   return (
//                     <TransactionItem
//                       key={transaction._id}
//                       category={transaction.category}
//                       amount={transaction.amount}
//                       isFirstItem={isFirstItem}
//                       isRecurringBills={isRecurringBills}
//                       _id={transaction._id}
//                       categoryLogo={transaction.categoryLogo}
//                       color={transaction.color}
//                     />
//                   );
//                 })}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RecurringBillsSection;

//after custom hook use-sortAndFilter***********************************
"use client";
import { usePathname } from "next/navigation";
import { RecurringBillsIcon } from "../../__atoms";
import Search from "../transaction/Search";
import { useEffect, useState } from "react";
import SortBySection from "../transaction/SortBySection";
import { SortFilterHeader } from "../../__molecules";
import TransactionItem from "../transaction/TransactionItem";
import { axiosInstance } from "@/app/libs/axiosInstance";
import useAccessToken from "@/app/hooks/use-toke";
import { ColorEnum } from "@/app/schema/schema";
import { useSortAndFilter } from "@/app/hooks/use-sortAndFilter";
import Summary from "./Summary";

export type RecurringBillsDataType = {
  amount: number;
  category: string;
  categoryLogo: string;
  color: ColorEnum | string | undefined;
  dueDate: string;
  type: string;
  _id: string;
};

const RecurringBillsSection = () => {
  const path = usePathname();
  const isRecurringBills = path.includes("recurringbills");
  const { accessToken, isLoading } = useAccessToken();
  const [recurringBillsData, setRecurringBillsData] =
    useState<RecurringBillsDataType[]>();
  const [sortByDropdown, setSortByDropdown] = useState(false);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const {
    filteredAllTransactions,
    setSearchTerm,
    setSortByValue,
    sortTransactions,
  } = useSortAndFilter(recurringBillsData || []);

  useEffect(() => {
    const getAllRecurringBills = async () => {
      try {
        const res = await axiosInstance.get("/recurring-bills", {
          headers: { Authorization: `Bearer ${accessToken}` },
        });

        if (res?.status >= 200 && res?.status <= 204) {
          setRecurringBillsData(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAllRecurringBills();
  }, [accessToken]);


  // const calculateRecurringBill = async () => {
  //   recurringBillsData?.reduce((acc, entry) => {
  //     const paidBills = 
  //   }, 0)
  // }

  console.log(recurringBillsData, "recurringBillsData");

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
          <Summary />
          {/* <div className="rounded-lg md:w-1/2 lg:w-full bg-white p-[20px]">
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
          </div> */}

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
              />
            </div>

            <SortFilterHeader isRecurringBills={isRecurringBills} />
            {isLoading ? (
              <div className="w-full h-screen flex items-center justify-center">
                Loading...
              </div>
            ) : (
              <div className="w-full">
                {sortTransactions(filteredAllTransactions || []).map(
                  (transaction, i) => {
                    const isFirstItem = i === 0;
                    return (
                      <TransactionItem
                        key={transaction._id}
                        category={transaction.category}
                        amount={transaction.amount}
                        isFirstItem={isFirstItem}
                        isRecurringBills={isRecurringBills}
                        _id={transaction._id}
                        categoryLogo={transaction.categoryLogo}
                        color={transaction.color}
                      />
                    );
                  }
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecurringBillsSection;
