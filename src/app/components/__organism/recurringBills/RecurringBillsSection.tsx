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
// import { useSortAndFilter } from "@/app/hooks/use-sortAndFilter";
// import Summary from "./Summary";
// import dayjs from "dayjs";
// import { DataType } from "@/app/interfaces/interface";
// import { PotsDataType } from "../pots/PotsSection";

// export type RecurringBillsDataType = {
//   amount: number;
//   category: string;
//   categoryLogo: string;
//   color: ColorEnum | string | undefined;
//   dueDate: string;
//   type: string;
//   _id: string;
//   status: string;
//   transactionId: string;
// };

// const RecurringBillsSection = () => {
//   const path = usePathname();
//   const isRecurringBills = path.includes("recurringbills");
//   const { accessToken, isLoading } = useAccessToken();
//   const [recurringBillsData, setRecurringBillsData] = useState<RecurringBillsDataType[]>();
//   const [sortByDropdown, setSortByDropdown] = useState(false);
//   const [transactions, setTransactions] = useState<(DataType | PotsDataType)[]>([]);

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(e.target.value);
//   };

//   const {
//     filteredAllTransactions,
//     setSearchTerm,
//     setSortByValue,
//     sortTransactions,
//   } = useSortAndFilter(recurringBillsData || []);

//   const fetchAllTransactions = async () => {
//     try {
//       const res = await axiosInstance.get(`/budgets/resources`, {
//         headers: { Authorization: `Bearer ${accessToken}` },
//       });

//       const modifiedTransactions = res.data.map((item: { category?: string; potName?: string }) => {
//         const category = item.category || item.potName || "Unknown";
//         return { ...item, category };
//       });
//       setTransactions(modifiedTransactions);
//     } catch (error) {
//       console.error("Error fetching transactions:", error);
//     }
//   };

//   useEffect(() => {
//     if (accessToken) {
//       fetchAllTransactions();
//     }
//   }, [accessToken]);

//   const isDataType = (transaction: DataType | PotsDataType): transaction is DataType => {
//     return (transaction as DataType).category !== undefined;
//   };

//   useEffect(() => {
//     const updateRecurringBillsStatus = (bills: RecurringBillsDataType[]) => {
//       const today = dayjs();
//       const lastDayOfMonth = today.endOf("month").date();

//       return bills.map((bill) => {
//         const dueDay = parseInt(bill.dueDate.split(" - ")[1]);
//         const adjustedDueDay = Math.min(dueDay, lastDayOfMonth);
//         const dueDate = today.date(adjustedDueDay);

//         let status = bill.status || "upcoming";
//         let daysUntilDue = dueDate.diff(today, "days");
//         if (daysUntilDue < 0) {
//           const nextMonthDueDate = today.add(1, "month").date(dueDay);
//           daysUntilDue = nextMonthDueDate.diff(today, "days");
//         }
//         if (daysUntilDue <= 3 && daysUntilDue > 0) {
//           status = "dueSoon";
//         }
//           if (today.isSame(dueDate, "day")) {
//           status = "dueSoon";
//         }
//         if (today.isSame(dueDate, "day")) {
//           const isPaid = transactions.some((t) => {
//             if (isDataType(t)) {
//               return (
//                 t.amount === bill.amount &&
//                 t.category === bill.category &&
//                 t.color === bill.color &&
//                 t.status === "paid"
//               );
//             }
//             return false;
//           });

//           if (isPaid) {
//             status = "paid";
//           }
//         }
//         if (today.isAfter(dueDate, "day") && bill.status === "dueSoon") {
//           const isPaid = transactions.some((t) => {
//             if (isDataType(t)) {
//               return (
//                 t.amount === bill.amount &&
//                 t.category === bill.category &&
//                 t.color === bill.color &&
//                 t.status === "paid"
//               );
//             }
//             return false;
//           });

//           if (!isPaid) {
//             status = "upcoming";
//           }
//         }

//         return { ...bill, status };
//       });
//     };

//     const getAllRecurringBills = async () => {
//       try {
//         const res = await axiosInstance.get("/recurring-bills", {
//           headers: { Authorization: `Bearer ${accessToken}` },
//         });

//         if (res?.status >= 200 && res?.status <= 204) {
//           setRecurringBillsData(updateRecurringBillsStatus(res.data));
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     if (transactions.length > 0) {
//       getAllRecurringBills();
//     }
//   }, [accessToken, transactions]);

//   return (
//     <section className="w-full h-full min-h-screen px-4 py-6 md:px-6 md:py-8 flex flex-col gap-8">
//       <h1 className="w-full text-left text-[32px] text-[#201F24] font-bold">
//         Recurring Bills
//       </h1>

//       <div className="w-full flex flex-col gap-6 lg:flex-row">
//       <Summary recurringBillsData={recurringBillsData} />
//         {/* <div className="LEFT flex flex-col gap-3 md:flex-row md:gap-6 lg:flex-col w-full lg:w-[32.52%]">
//           <div className="bg-[#201F24] text-white rounded-xl md:w-1/2 lg:w-full pt-[38px] px-6 pb-6 flex flex-row gap-[20px] items-center md:flex-col md:gap-8 md:items-start">
//             <RecurringBillsIcon />
//             <div>
//               <p className="text-sm font-normal">Total Bills</p>
//               <h2 className="text-[32px] font-bold">$384.98</h2>
//             </div>
//           </div>
//           <Summary recurringBillsData={recurringBillsData} />
//         </div> */}

//         <div className="RIGHT rounded-xl lg:w-[67.47%]">
//           <div className="w-full py-6 px-[20px] md:p-8 flex flex-col gap-6 rounded-xl bg-white">
//             <div className="SORT flex items-center justify-between">
//               <Search handleSearchChange={handleSearchChange} isRecurringBills={isRecurringBills} />
//               <SortBySection
//                 setSortByDropdown={setSortByDropdown}
//                 sortByDropdown={sortByDropdown}
//                 setSortByValue={setSortByValue}
//               />
//             </div>

//             <SortFilterHeader isRecurringBills={isRecurringBills} />
//             {isLoading ? (
//               <div className="w-full h-screen flex items-center justify-center">Loading...</div>
//             ) : (
//               <div className="w-full">
//                 {sortTransactions(filteredAllTransactions || []).map((transaction, i) => {
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
//                       recurringBillsData={recurringBillsData}
//                       setRecurringBillsData={setRecurringBillsData}
//                       {...("dueDate" in transaction && { dueDate: transaction.dueDate })}
//                       {...("status" in transaction && { status: transaction.status })}
//                       getAllRecurringBills={getAllRecurringBills}
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

//OK before recurringBills data mapping

"use client";
import { usePathname } from "next/navigation";
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
import dayjs from "dayjs";
import { DataType } from "@/app/interfaces/interface";
import { PotsDataType } from "../pots/PotsSection";

// export type RecurringBillsDataType = {
//   amount: number;
//   category: string;
//   categoryLogo: string;
//   color: ColorEnum | string | undefined;
//   dueDate: string;
//   type: string;
//   _id: string;
//   status: string;
//   transactionId: string;
//   resource?: string;
// };

export type RecurringBillsDataType = {
  _id: string;
  budgetId?: {
    _id: string; 
    category: string; 
    amount: number; 
    categoryLogo: string; 
    color: ColorEnum | string | undefined; 
    resource: string; 
    createdAt: string; 
    updatedAt: string; 
    __v: number; 
  };
  potId?: {
    _id: string; 
    potName: string; 
    amount: number; 
    color: ColorEnum | string | undefined; 
    createdAt: string; 
    updatedAt: string; 
    __v: number; 
  };
  dueDate: string; 
  resource: string; 
  createdAt: string;
  updatedAt: string; 
  __v: number; 

  status?: string;
  amount: number
};

const RecurringBillsSection = () => {
  const path = usePathname();
  const isRecurringBills = path.includes("recurringbills");
  const { accessToken, isLoading } = useAccessToken();
  const [recurringBillsData, setRecurringBillsData] =
    useState<RecurringBillsDataType[]>();
  const [sortByDropdown, setSortByDropdown] = useState(false);
  const [transactions] = useState<(DataType | PotsDataType)[]>(
    []
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const {
    // filteredAllTransactions,
    setSearchTerm,
    setSortByValue,
    // sortTransactions,
  } = useSortAndFilter(recurringBillsData || []);

  // const fetchAllTransactions = async () => {
  //   try {
  //     const res = await axiosInstance.get("/budgets/resources", {
  //       headers: { Authorization: `Bearer ${accessToken}` },
  //     });

  //     const modifiedTransactions = res.data.map((item: { category?: string; potName?: string }) => {
  //       const category = item.category || item.potName || "Unknown";
  //       return { ...item, category };
  //     });
  //     setTransactions(modifiedTransactions);
  //   } catch (error) {
  //     console.error("Error fetching transactions:", error);
  //   }
  // };



  // const getTransactions = async () => {
  //   try {
  //     const res = await axiosInstance.get("/transactions", {
  //       headers: { Authorization: `Bearer ${accessToken}` },
  //     });
  //     setTransactions(res.data);
  //   } catch (error) {
  //     console.error("Error fetching transactions:", error);
  //   }
  // };

  const updateRecurringBillsStatus = (bills: RecurringBillsDataType[]) => {
    const today = dayjs();
    const lastDayOfMonth = today.endOf("month").date();

    return bills.map((bill) => {
      const dueDay = parseInt(bill.dueDate.split(" - ")[1]);
      const adjustedDueDay = Math.min(dueDay, lastDayOfMonth);
      const dueDate = today.date(adjustedDueDay);

      let amount: number;
      let category: string;
      let color: string;

      if (bill.resource === "budget" && bill.budgetId) {
        amount = bill.budgetId.amount;
        category = bill.budgetId.category;
        color = bill.budgetId.color ?? "defaultColor"; 
      } else if (bill.resource === "pot" && bill.potId) {
        amount = bill.potId.amount;
        category = bill.potId.potName;

        color = bill.potId.color ?? "defaultColor"; 
      } else {
        return { ...bill, status: "upcoming" };
      }
      let status = "upcoming";
      let daysUntilDue = dueDate.diff(today, "days");

      if (daysUntilDue < 0) {
        const nextMonthDueDate = today.add(1, "month").date(dueDay);
        daysUntilDue = nextMonthDueDate.diff(today, "days");
      }

      if (daysUntilDue <= 3 && daysUntilDue > 0) {
        status = "dueSoon";
      }
      if (today.isSame(dueDate, "day")) {
        status = "dueSoon";
      }

      if (today.isSame(dueDate, "day")) {
        const isPaid = transactions.some((t) => {
          if (isDataType(t)) {
            return (
              t.amount === amount &&
              t.category === category &&
              t.color === color &&
              t.status === "paid"
            );
          }
          return false;
        });

        if (isPaid) {
          status = "paid";
        }
      }

      if (today.isAfter(dueDate, "day") && status === "dueSoon") {
        const isPaid = transactions.some((t) => {
          if (isDataType(t)) {
            return (
              t.amount === amount &&
              t.category === category &&
              t.color === color &&
              t.status === "paid"
            );
          }
          return false;
        });

        if (!isPaid) {
          status = "upcoming";
        }
      }

      return { ...bill, status };
    });
  };

  const getAllRecurringBills = async () => {
    try {
      const res = await axiosInstance.get("/recurring-bills", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      if (res?.status >= 200 && res?.status <= 204) {
        const updatedBills = updateRecurringBillsStatus(res.data);
        setRecurringBillsData(updatedBills);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllRecurringBills();
  }, [accessToken]);

  // useEffect(() => {
  //   if (accessToken) {
  //     fetchAllTransactions();
  //   }
  // }, [accessToken]);

  const isDataType = (
    transaction: DataType | PotsDataType
  ): transaction is DataType => {
    return (transaction as DataType).category !== undefined;
  };

  return (
    <section className="w-full h-full min-h-screen px-4 py-6 md:px-6 md:py-8 flex flex-col gap-8">
      <h1 className="w-full text-left text-[32px] text-[#201F24] font-bold">
        Recurring Bills
      </h1>

      <div className="w-full flex flex-col gap-6 lg:flex-row">
        <Summary recurringBillsData={recurringBillsData} />

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
              // <div className="w-full">
              //   {sortTransactions(filteredAllTransactions || []).map((transaction, i) => {
              //     const isFirstItem = i === 0;
              //     return (
              //       <TransactionItem
              //         key={transaction._id}
              //         category={transaction.category}
              //         amount={transaction.amount}
              //         isFirstItem={isFirstItem}
              //         isRecurringBills={isRecurringBills}
              //         _id={transaction._id}
              //         categoryLogo={transaction.categoryLogo}
              //         color={transaction.color}
              //         recurringBillsData={recurringBillsData}
              //         setRecurringBillsData={setRecurringBillsData}
              //         {...("dueDate" in transaction && { dueDate: transaction.dueDate })}
              //         {...("status" in transaction && { status: transaction.status })}
              //         getAllRecurringBills={getAllRecurringBills}

              //       />
              //     );
              //   })}
              // </div>

              <div className="w-full">
                {(recurringBillsData || []).map((transaction, i) => {
                  const isFirstItem = i === 0;

                  const amount = transaction.budgetId?.amount || transaction.potId?.amount || 0; 
                  const category =
                    transaction.budgetId?.category ||
                    transaction.potId?.potName ||
                    "Unknown"; 
                  // const dueDate = transaction.dueDate;

                  return (
                    <TransactionItem
                      key={transaction._id}
                      category={category}
                      amount={amount}
                      isFirstItem={isFirstItem}
                      isRecurringBills={isRecurringBills}
                      _id={transaction._id}
                      categoryLogo={transaction.budgetId?.categoryLogo || ""}
                      color={
                        transaction.budgetId?.color ||
                        transaction.potId?.color ||
                        ""
                      } 
                      recurringBillsData={recurringBillsData}
                      setRecurringBillsData={setRecurringBillsData}
                      {...("dueDate" in transaction && {
                        dueDate: transaction.dueDate,
                      })} 
                      {...("status" in transaction && {
                        status: transaction.status,
                      })} 
                      getAllRecurringBills={getAllRecurringBills}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecurringBillsSection;
