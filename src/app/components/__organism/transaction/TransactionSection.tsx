// "use client";
// import { use, useEffect, useState } from "react";
// import { axiosInstance } from "@/app/libs/axiosInstance";
// import { SearchIcon } from "../../__atoms";
// import SortBySection from "./SortBySection";
// import SortByCategorySection from "./SortByCategorySection";
// import TransactionItem from "./TransactionItem";
// import useAccessToken from "@/app/hooks/use-toke";
// import { DataType } from "@/app/interfaces/interface";
// import { PotsDataType } from "../pots/PotsSection";
// import Pagination from "./Pagination";

// export type TransactionType = {
//   category: string;
//   amount: number;
//   color: string;
//   createdAt?: string;
//   updatedAt?: string;
//   categoryLogo?: string;
//   type: "budget" | "pot";
// };

// const TransactionSection = () => {
//   const { accessToken } = useAccessToken();
//   const [allTransactions, setAllTransactions] = useState<TransactionType[]>([]);
//   const [sortByDropdown, setSortByDropdown] = useState(false);
//   const [sortByValue, setSortByValue] = useState<string | undefined>("Latest");
//   const [filteredCategoryValue, setFilteredCategoryValue] = useState<string | undefined>("All Transactions")
//   const [filteredCategoryDropdown, setFilteredCategoryDropdown] = useState(false)
//   const [filteredAllTransactions, setFilteredAllTransactions] = useState<TransactionType[]>([])

//   console.log(filteredCategoryValue, "filteredCategoryValue")

//   // useEffect(() => {
//   //   const filteredData = allTransactions.filter(item => item.category === filteredCategoryValue)
//   //   setFilteredAllTransactions(filteredData)
//   // },[filteredCategoryValue])

//   useEffect(() => {
//     // Filter transactions based on selected category
//     const filteredData = filteredCategoryValue === "All Transactions"
//       ? allTransactions
//       : allTransactions.filter(item => item.category === filteredCategoryValue);

//     setFilteredAllTransactions(filteredData);
//   }, [filteredCategoryValue, allTransactions]);

//   useEffect(() => {
//     const getAllTransactions = async () => {
//       try {
//         const budgetRes = await axiosInstance.get("/budgets", {
//           headers: { Authorization: `Bearer ${accessToken}` },
//         });
//         const potRes = await axiosInstance.get("/pot", {
//           headers: { Authorization: `Bearer ${accessToken}` },
//         });

//         if (
//           budgetRes?.status >= 200 &&
//           budgetRes?.status <= 204 &&
//           potRes?.status >= 200 &&
//           potRes?.status <= 204
//         ) {
//           const combinedData: TransactionType[] = [
//             ...modifyData(budgetRes.data, "budget"),
//             ...modifyData(potRes.data, "pot"),
//           ];

//           setAllTransactions(combinedData);
//         }
//       } catch (error) {
//         console.error("Error fetching transactions: ", error);
//       }
//     };

//     if (accessToken) {
//       getAllTransactions();
//     }
//   }, [accessToken]);

//   const modifyData = (
//     data: (DataType | PotsDataType)[],
//     type: "budget" | "pot"
//   ): TransactionType[] => {
//     return data.map((item) => {
//       const category = "category" in item ? item.category : item.potName;

//       const transaction: TransactionType = {
//         category: category || "Unknown Category",
//         amount: item.amount,
//         color: item.color,
//         type: type,
//       };
//       if ("createdAt" in item) {
//         transaction.createdAt = item.createdAt;
//       }
//       if ("updatedAt" in item) {
//         transaction.updatedAt = item.updatedAt;
//       }
//       if ("categoryLogo" in item) {
//         transaction.categoryLogo = item.categoryLogo;
//       }
//       return transaction;
//     });
//   };

//   const sortTransactions = (
//     transactions: TransactionType[]
//   ): TransactionType[] => {
//     switch (sortByValue) {
//       case "Latest":
//         return transactions.sort(
//           (a, b) =>
//             new Date(b.createdAt || "").getTime() -
//             new Date(a.createdAt || "").getTime()
//         );
//       case "Oldest":
//         return transactions.sort(
//           (a, b) =>
//             new Date(a.createdAt || "").getTime() -
//             new Date(b.createdAt || "").getTime()
//         );
//       case "A to Z":
//         return transactions.sort((a, b) =>
//           a.category.localeCompare(b.category)
//         );
//       case "Z to A":
//         return transactions.sort((a, b) =>
//           b.category.localeCompare(a.category)
//         );
//       case "Highest":
//         return transactions.sort((a, b) => b.amount - a.amount);
//       case "Lowest":
//         return transactions.sort((a, b) => a.amount - b.amount);
//       default:
//         return transactions;
//     }
//   };

//   return (
//     <section className="w-full h-full min-h-screen">
//       <div className="w-full h-full px-4 pt-8 pb-[105px] md:pb-[113px] lg:py-8 md:px-10 lg:px-6 flex flex-col items-start justify-start gap-8">
//         <h1 className="w-full text-left text-[32px] text-[#201F24] font-bold">
//           Transactions
//         </h1>

//         <div className="w-full min-h-screen p-4 justify-between md:p-8 bg-white flex flex-col gap-6 rounded-lg">
//           <div className="FILTER flex items-center justify-between">
//             <div className="w-[70.95%] relative border border-[#98908B] text-[#98908B] pl-[20px] md:pl-[10px] lg:pl-[20px] py-3 md:w-[22.75%] lg:w-[30.12%] overflow-hidden rounded-md">
//               <input
//                 type="text"
//                 className="w-full bg-transparent border-none focus:outline-none md:truncate md:max-w-[90px] lg:max-w-full"
//                 placeholder="Search transaction"
//               />
//               <SearchIcon />
//             </div>

//             <div className="flex items-center gap-6">
//               <SortBySection
//                 setSortByDropdown={setSortByDropdown}
//                 sortByDropdown={sortByDropdown}
//                 setSortByValue={setSortByValue}
//                 sortByValue={sortByValue}
//               />
//               <SortByCategorySection
//               setFilteredCategoryValue={setFilteredCategoryValue}
//               filteredCategoryValue={filteredCategoryValue}
//               filteredCategoryDropdown={filteredCategoryDropdown}
//               setFilteredCategoryDropdown={setFilteredCategoryDropdown}
//               // filteredAllTransactions={filteredAllTransactions}
//               />
//             </div>
//           </div>

//           <div className="hidden w-full md:flex items-center justify-between py-3 border-b border-b-[#F2F2F2] md:gap-[3.31%] text-xs text-[#696868] font-normal">
//             <div className="md:w-[60.16%] grid grid-cols-[1fr, 120px] md:gap-x-4">
//               <div className="flex items-center justify-between">
//                 <p className="">Category</p>
//                 <p className="md:w-[80px] lg:w-[120px]">Recurring Bills</p>
//               </div>
//             </div>
//             <div className="md:w-[36.51%] flex items-center justify-between">
//               <p className="">Transaction Date</p>
//               <p className="">Amount</p>
//             </div>
//           </div>

//           <div className="BODY w-full min-h-[calc(100vh-300px)] flex items-center flex-col px-4 rounded-lg">
//             {sortTransactions(allTransactions).map((transaction, i) => {
//               const isFirstItem = i === 0;
//               return (
//                 <TransactionItem
//                   key={i}
//                   category={transaction.category}
//                   createdAt={transaction.createdAt}
//                   categoryLogo={transaction.categoryLogo}
//                   amount={transaction.amount}
//                   isFirstItem={isFirstItem}
//                 />
//               );
//             })}
//           </div>

//           <Pagination />
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
  const { accessToken, isLoading } = useAccessToken();
  const [allTransactions, setAllTransactions] = useState<TransactionType[]>([]);
  const [sortByDropdown, setSortByDropdown] = useState(false);
  const [sortByValue, setSortByValue] = useState<string | undefined>("Latest");
  const [filteredCategoryValue, setFilteredCategoryValue] = useState<
    string | undefined
  >("All Transactions");
  const [filteredCategoryDropdown, setFilteredCategoryDropdown] =
    useState(false);
  const [filteredAllTransactions, setFilteredAllTransactions] = useState<
    TransactionType[]
  >([]);

  useEffect(() => {
    const filteredData =
      filteredCategoryValue === "All Transactions"
        ? allTransactions
        : allTransactions.filter(
            (item) => item.category === filteredCategoryValue
          );
    setFilteredAllTransactions(filteredData);
  }, [filteredCategoryValue, allTransactions]);

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
  ): TransactionType[] => {
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

  const sortTransactions = (
    transactions: TransactionType[]
  ): TransactionType[] => {
    switch (sortByValue) {
      case "Latest":
        return transactions.sort(
          (a, b) =>
            new Date(b.createdAt || "").getTime() -
            new Date(a.createdAt || "").getTime()
        );
      case "Oldest":
        return transactions.sort(
          (a, b) =>
            new Date(a.createdAt || "").getTime() -
            new Date(b.createdAt || "").getTime()
        );
      case "A to Z":
        return transactions.sort((a, b) =>
          a.category.localeCompare(b.category)
        );
      case "Z to A":
        return transactions.sort((a, b) =>
          b.category.localeCompare(a.category)
        );
      case "Highest":
        return transactions.sort((a, b) => b.amount - a.amount);
      case "Lowest":
        return transactions.sort((a, b) => a.amount - b.amount);
      default:
        return transactions;
    }
  };

  return (
    <section className="w-full h-full min-h-screen">
      <div className="w-full h-full px-4 pt-8 pb-[105px] md:pb-[113px] lg:py-8 md:px-10 lg:px-6 flex flex-col items-start justify-start gap-8">
        <h1 className="w-full text-left text-[32px] text-[#201F24] font-bold">
          Transactions
        </h1>

        <div className="w-full min-h-screen p-0 justify-between md:p-8  bg-white flex flex-col gap-6 rounded-lg">
          <div className="FILTER flex items-center justify-between p-4 md:p-0">
            <div className="w-[70.95%] relative border border-[#98908B] text-[#98908B] pl-[20px] md:pl-[10px] lg:pl-[20px] py-3 md:w-[22.75%] lg:w-[30.12%] overflow-hidden rounded-md">
              <input
                type="text"
                className="w-full bg-transparent border-none focus:outline-none md:truncate md:max-w-[90px] lg:max-w-full"
                placeholder="Search transaction"
              />
              <SearchIcon />
            </div>

            <div className="flex items-center gap-6">
              <SortBySection
                setSortByDropdown={setSortByDropdown}
                sortByDropdown={sortByDropdown}
                setSortByValue={setSortByValue}
                sortByValue={sortByValue}
              />
              <SortByCategorySection
                setFilteredCategoryValue={setFilteredCategoryValue}
                filteredCategoryValue={filteredCategoryValue}
                filteredCategoryDropdown={filteredCategoryDropdown}
                setFilteredCategoryDropdown={setFilteredCategoryDropdown}
              />
            </div>
          </div>

          <div className="hidden w-full md:flex items-center justify-between py-3 border-b border-b-[#F2F2F2] md:gap-[3.31%] text-xs text-[#696868] font-normal">
            <div className="md:w-[60.16%] grid grid-cols-[1fr, 120px] md:gap-x-4">
              <div className="flex items-center justify-between">
                <p className="">Category</p>
                <p className="md:w-[80px] lg:w-[120px]">Recurring Bills</p>
              </div>
            </div>
            <div className="md:w-[36.51%] flex items-center justify-between">
              <p className="">Transaction Date</p>
              <p className="">Amount</p>
            </div>
          </div>

          {isLoading ? (
            <div className="w-full h-screen flex items-center justify-center">
              Loading...
            </div>
          ) : (
            <div className="BODY w-full min-h-[calc(100vh-300px)] flex items-center flex-col px-4 rounded-lg">
              {sortTransactions(filteredAllTransactions).map(
                (transaction, i) => {
                  const isFirstItem = i === 0;
                  return (
                    <TransactionItem
                      key={i}
                      category={transaction.category}
                      createdAt={transaction.createdAt}
                      categoryLogo={transaction.categoryLogo}
                      amount={transaction.amount}
                      isFirstItem={isFirstItem}
                    />
                  );
                }
              )}
            </div>
          )}

          <Pagination />
        </div>
      </div>
    </section>
  );
};

export default TransactionSection;
