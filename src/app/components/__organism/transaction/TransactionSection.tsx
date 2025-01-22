// "use client";
// // import Image from "next/image";
// import { ArrowLeft, ArrowRight, SearchIcon } from "../../__atoms";
// import { usePathname } from "next/navigation";
// import SortBySection from "./SortBySection";
// import SortByCategorySection from "./SortByCategorySection";
// import TransactionItem from "./TransactionItem";
// import useAccessToken from "@/app/hooks/use-toke";
// import { useEffect, useState } from "react";
// import { axiosInstance } from "@/app/libs/axiosInstance";
// import { BudgetType, PotType } from "../modal/Modal";
// import { DataType } from "@/app/interfaces/interface";
// import { PotsDataType } from "../pots/PotsSection";

// export type AllTransactionsType = (DataType | PotsDataType) & {
//   type: "budget" | "pot"; // To distinguish between the two data types
// };

// const TransactionSection = () => {
//   const path = usePathname();
//   const isTransactionPage = path.includes("transaction");
//   const { accessToken } = useAccessToken();
//   const [BudgetData, setBudgetData] = useState<DataType[]>([]);
//   const [potData, setPotData] = useState<PotsDataType[]>([]);
//   const [allTransactions, setAllTransactions] = useState<AllTransactionsType[]>(
//     []
//   );
//   console.log(BudgetData, "BudgetData");
//   console.log(potData, "potData");

//   useEffect(() => {
//     const getAllTransactions = async () => {
//       try {
//         const budgetRes = await axiosInstance.get("/budgets", {
//           headers: { Authorization: `Bearer ${accessToken}` },
//         });

//         const potRes = await axiosInstance.get("/pot", {
//           headers: { Authorization: `Bearer ${accessToken}` },
//         });

//         // if (budgetRes?.status >= 200 && budgetRes?.status < 300 && potRes?.status >= 200 && potRes?.status < 300) {
//         //   const combinedData: AllTransactionsType[] = [
//         //     ...budgetRes.data.map((item: DataType) => ({
//         //       ...item,
//         //       type: "budget",
//         //     })),
//         //     ...potRes.data.map((item: PotsDataType) => ({
//         //       ...item,
//         //       type: "pot",
//         //     })),
//         //   ];

//         //   setAllTransactions(combinedData);
//         // }
//       } catch (error) {
//         console.error("Error fetching transactions: ", error);
//       }
//     };

//     if (accessToken) {
//       getAllTransactions();
//     }
//   }, [accessToken]);

//   // const allTransactions = [...BudgetData, ...potData];
//   // console.log(allTransactions, "allTransactions");

//   return (
//     <section className="w-full h-full min-h-screen ">
//       <div className="w-full h-full pt-8 pb-[105px] md:pb-[113px] lg:py-8 px-4 md:px-10 lg:px-6 flex flex-col items-start justify-start gap-8">
//         <h1 className="w-full text-left text-[32px] text-[#201F24] font-bold">
//           Transactions
//         </h1>

//         <div className="w-full min-h-screen p-8 bg-white flex flex-col gap-6 rounded-lg">
//           <div className="FILTER flex items-center justify-between ">
//             <div className="w-full relative border border-[#98908B] pl-[20px] py-3 md:w-[23.54%] lg:w-[30.18%] overflow-hidden rounded-md">
//               <input
//                 type="text"
//                 className="w-full bg-transparent border-none focus:outline-none"
//                 placeholder="Search transaction"
//               />
//               <SearchIcon />
//             </div>

//             <div className="flex items-center gap-6  ">
//               <SortBySection />
//               <SortByCategorySection />
//             </div>
//           </div>

//           <div className=" w-full flex items-center justify-between py-3 border-b border-b-[#F2F2F2] md:gap-[3.31%] text-xs text-[#696868] font-normal">
//             <div className="md:w-[60.16%] grid grid-cols-[1fr, 120px] md:gap-x-4">
//               <div className="flex items-center justify-between">
//                 <p className="">Category</p>
//                 <p className="md:w-[80px] lg:w-[120px]">Recurring Bills</p>
//               </div>
//             </div>

//             <div className=" md:w-[36.51%] flex items-center justify-between">
//               <p className="">Transaction Date</p>
//               <p className="">Amount</p>
//             </div>
//           </div>

//           <div className="BODY w-full min-h-[calc(100vh-300px)] flex items-center flex-col   px-4 rounded-lg">
//             {allTransactions.map((transaction, i) => {
//               return (
//                 <TransactionItem key={i}  />
//               );
//             })}
//           </div>

//           <div className="PAGINATION w-full flex pt-6 items-center justify-between">
//             <button className="flex items-center gap-4 py-3 px-4 border border-[#98908B] rounded-lg">
//               <ArrowLeft />
//               <p className="text-[#201F24] text-sm font-normal">Prev</p>
//             </button>

//             <div className="flex items-center gap-2">
//               <button className="py-[9.5px] px-[17px] border border-[#98908B] rounded-lg text-[#201F24] text-sm font-normal">
//                 1
//               </button>
//               <button className="py-[9.5px] px-[17px] border border-[#98908B] rounded-lg text-[#201F24] text-sm font-normal">
//                 1
//               </button>
//               <button className="py-[9.5px] px-[17px] border border-[#98908B] rounded-lg text-[#201F24] text-sm font-normal">
//                 1
//               </button>
//             </div>

//             <button className="flex items-center gap-4 py-3 px-4 border border-[#98908B] rounded-lg">
//               <p className="text-[#201F24] text-sm font-normal">Nest</p>
//               <ArrowRight />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TransactionSection;

"use client";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/app/libs/axiosInstance";
import { SearchIcon } from "../../__atoms";
// import { usePathname } from "next/navigation";
import SortBySection from "./SortBySection";
import SortByCategorySection from "./SortByCategorySection";
import TransactionItem from "./TransactionItem";
import useAccessToken from "@/app/hooks/use-toke";
import { DataType } from "@/app/interfaces/interface";
import { PotsDataType } from "../pots/PotsSection";
import Pagination from "./Pagination";


export type TransactionType = {
  category: string;
  amount: number;
  color: string;
  createdAt?: string;
  updatedAt?: string;
  categoryLogo?: string;
  type: "budget" | "pot";
};

const TransactionSection = () => {
  // const path = usePathname();
  const { accessToken } = useAccessToken();
  const [allTransactions, setAllTransactions] = useState<TransactionType[]>([]);

  useEffect(() => {
    const getAllTransactions = async () => {
      try {
        const budgetRes = await axiosInstance.get("/budgets", {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        const potRes = await axiosInstance.get("/pot", {
          headers: { Authorization: `Bearer ${accessToken}` },
        });

        if (
          budgetRes?.status >= 200 &&
          budgetRes?.status <= 204 &&
          potRes?.status >= 200 &&
          potRes?.status <= 204
        ) {
          const combinedData: TransactionType[] = [
            ...modifyData(budgetRes.data, "budget"),
            ...modifyData(potRes.data, "pot"),
          ];

          setAllTransactions(combinedData);
        }
      } catch (error) {
        console.error("Error fetching transactions: ", error);
      }
    };

    if (accessToken) {
      getAllTransactions();
    }
  }, [accessToken]);

  const modifyData = (
    data: (DataType | PotsDataType)[],
    type: "budget" | "pot"
  ) => {
    return data.map((item) => {
      const category = "category" in item ? item.category : item.potName;

      const transaction: TransactionType = {
        category: category || "Unknown Category",
        amount: item.amount,
        color: item.color,
        type: type,
      };
      if ("createdAt" in item) {
        transaction.createdAt = item.createdAt;
      }
      if ("updatedAt" in item) {
        transaction.updatedAt = item.updatedAt;
      }
      if ("categoryLogo" in item) {
        transaction.categoryLogo = item.categoryLogo;
      }
      return transaction;
    });
  };

  return (
    <section className="w-full h-full min-h-screen">
      <div className="w-full h-full  px-4 pt-8 pb-[105px] md:pb-[113px] lg:py-8 md:px-10 lg:px-6 flex flex-col items-start justify-start gap-8">
        <h1 className="w-full text-left text-[32px] text-[#201F24] font-bold">
          Transactions
        </h1>

        <div className="w-full min-h-screen p-4 justify-between md:p-8 bg-white flex flex-col gap-6 rounded-lg">
          <div className="FILTER  flex items-center justify-between ">
            <div className="w-[70.95%] relative border border-[#98908B] text-[#98908B] pl-[20px] md:pl-[10px] lg:pl-[20px] py-3 md:w-[22.75%] lg:w-[30.12%] overflow-hidden rounded-md">
              <input
                type="text"
                className="w-full bg-transparent border-none focus:outline-none md:truncate md:max-w-[90px] lg:max-w-full"
                placeholder="Search transaction"
              />
              <SearchIcon />
            </div>

            <div className="flex items-center gap-6">
              <SortBySection />
              <SortByCategorySection />
            </div>
          </div>

          <div className="hidden w-full md:flex items-center justify-between py-3 border-b border-b-[#F2F2F2] md:gap-[3.31%] text-xs text-[#696868] font-normal">
            <div className="md:w-[60.16%] grid grid-cols-[1fr, 120px] md:gap-x-4">
              <div className="flex items-center justify-between">
                <p className="">Category</p>
                <p className="md:w-[80px] lg:w-[120px]">Recurring Bills</p>
              </div>
            </div>
            <div className=" md:w-[36.51%] flex items-center justify-between">
              <p className="">Transaction Date</p>
              <p className="">Amount</p>
            </div>
          </div>

          <div className="BODY w-full min-h-[calc(100vh-300px)] flex items-center flex-col px-4 rounded-lg">
            {allTransactions.map((transaction, i) => {
              const isFirstItem = i === 0;
              return (
                <TransactionItem
                  key={i}
                  category={transaction.category}
                  createdAt={transaction.createdAt}
                  // color={transaction.color}
                  categoryLogo={transaction.categoryLogo}
                  amount={transaction.amount}
                  isFirstItem={isFirstItem}
                />
              );
            })}
          </div>

          <Pagination />
        </div>
      </div>
    </section>
  );
};

export default TransactionSection;
