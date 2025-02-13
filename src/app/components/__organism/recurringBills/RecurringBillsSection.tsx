// "use client";
// import { usePathname } from "next/navigation";
// import Search from "../transaction/Search";
// import { useEffect, useState } from "react";
// import SortBySection from "../transaction/SortBySection";
// import { SortFilterHeader, Title } from "../../__molecules";
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
//   _id: string;
//   budgetId?: {
//     _id: string;
//     category: string;
//     amount: number;
//     categoryLogo: string;
//     color: ColorEnum | string | undefined;
//     resource: string;
//     createdAt: string;
//     updatedAt: string;
//     __v: number;
//   };
//   potId?: {
//     _id: string;
//     potName: string;
//     amount: number;
//     color: ColorEnum | string | undefined;
//     createdAt: string;
//     updatedAt: string;
//     __v: number;
//   };
//   dueDate: string;
//   resource: string;
//   createdAt: string;
//   updatedAt: string;
//   __v: number;

//   status?: string;
//   amount: number;
//   category: string;
//   color: string;
//   checkId: string;
// };

// const RecurringBillsSection = () => {
//   const path = usePathname();
//   const isRecurringBills = path.includes("recurringbills");
//   const { accessToken, isLoading } = useAccessToken();
//   const [recurringBillsData, setRecurringBillsData] = useState<
//     RecurringBillsDataType[]
//   >([]);
//   const [sortByDropdown, setSortByDropdown] = useState(false);
//   const [transactions] = useState<(DataType | PotsDataType)[]>([]);

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(e.target.value);
//   };

//   const {
//     filteredAllTransactions,
//     setSearchTerm,
//     setSortByValue,
//     sortTransactions,
//   } = useSortAndFilter(recurringBillsData || []);

//   console.log(filteredAllTransactions, "filteredAllTransactions");

//   const updateRecurringBillsStatus = (bills: RecurringBillsDataType[]) => {
//     const today = dayjs();
//     const lastDayOfMonth = today.endOf("month").date();

//     return bills.map((bill) => {
//       const dueDay = parseInt(bill.dueDate.split(" - ")[1]);
//       const adjustedDueDay = Math.min(dueDay, lastDayOfMonth);
//       const dueDate = today.date(adjustedDueDay);

//       let amount: number;
//       let category: string;
//       let color: string;

//       if (bill.resource === "budget" && bill.budgetId) {
//         amount = bill.budgetId.amount;
//         category = bill.budgetId.category;
//         color = bill.budgetId.color ?? "defaultColor";
//       } else if (bill.resource === "pot" && bill.potId) {
//         amount = bill.potId.amount;
//         category = bill.potId.potName;

//         color = bill.potId.color ?? "defaultColor";
//       } else {
//         return { ...bill, status: "upcoming" };
//       }
//       let status = "upcoming";
//       let daysUntilDue = dueDate.diff(today, "days");

//       if (daysUntilDue < 0) {
//         const nextMonthDueDate = today.add(1, "month").date(dueDay);
//         daysUntilDue = nextMonthDueDate.diff(today, "days");
//       }

//       if (daysUntilDue <= 3 && daysUntilDue > 0) {
//         status = "dueSoon";
//       }
//       if (today.isSame(dueDate, "day")) {
//         status = "dueSoon";
//       }

//       if (today.isSame(dueDate, "day")) {
//         const isPaid = transactions.some((t) => {
//           if (isDataType(t)) {
//             return (
//               t.amount === amount &&
//               t.category === category &&
//               t.color === color &&
//               t.status === "paid"
//             );
//           }
//           return false;
//         });

//         if (isPaid) {
//           status = "paid";
//         }
//       }

//       if (today.isAfter(dueDate, "day") && status === "dueSoon") {
//         const isPaid = transactions.some((t) => {
//           if (isDataType(t)) {
//             return (
//               t.amount === amount &&
//               t.category === category &&
//               t.color === color &&
//               t.status === "paid"
//             );
//           }
//           return false;
//         });

//         if (!isPaid) {
//           status = "upcoming";
//         }
//       }

//       return { ...bill, status };
//     });
//   };

//   const getAllRecurringBills = async () => {
//     try {
//       const res = await axiosInstance.get("/recurring-bills", {
//         headers: { Authorization: `Bearer ${accessToken}` },
//       });

//       if (res?.status >= 200 && res?.status <= 204) {
//         const updatedBills = updateRecurringBillsStatus(res.data);
//         setRecurringBillsData(updatedBills);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getAllRecurringBills();
//   }, [accessToken]);

//   const isDataType = (
//     transaction: DataType | PotsDataType
//   ): transaction is DataType => {
//     return (transaction as DataType).category !== undefined;
//   };

//   return (
//     <section className="w-full h-full min-h-screen px-4 py-6 md:px-6 md:py-8 flex flex-col gap-8 ">
//       {/* <h1 className="w-full text-left text-[32px] text-[#201F24] font-bold">
//         Recurring Bills
//       </h1> */}
// {/*
//       <Title isRecurringBills={isRecurringBills} /> */}
//       <Title  isRecurringBills={isRecurringBills} />

//       <div className="w-full flex flex-col gap-6 lg:flex-row">
//         <Summary recurringBillsData={recurringBillsData} />

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
//               />
//             </div>

//             <SortFilterHeader isRecurringBills={isRecurringBills} />
//             {isLoading ? (
//               <div className="w-full h-screen flex items-center justify-center">
//                 Loading...
//               </div>
//             ) : (
//               <div className="w-full">
//                 {sortTransactions(filteredAllTransactions || []).map(
//                   (transaction, i) => {
//                     const isFirstItem = i === 0;
//                     const amount =
//                       "amount" in transaction ? transaction.amount : 0;
//                     const category =
//                       "category" in transaction
//                         ? transaction.category
//                         : "Unknown";
//                     const color =
//                       "color" in transaction
//                         ? transaction.color
//                         : "defaultColor";
//                     const categoryLogo =
//                       "categoryLogo" in transaction
//                         ? transaction.category
//                         : "/assets/logos/logo12.svg";

//                     return (
//                       <TransactionItem
//                         key={transaction._id}
//                         category={category}
//                         amount={amount}
//                         isFirstItem={isFirstItem}
//                         isRecurringBills={isRecurringBills}
//                         _id={transaction._id}
//                         categoryLogo={categoryLogo}
//                         color={color}
//                         recurringBillsData={recurringBillsData}
//                         // setRecurringBillsData={setRecurringBillsData}
//                         {...("dueDate" in transaction && {
//                           dueDate: transaction.dueDate,
//                         })}
//                         {...("status" in transaction && {
//                           status: transaction.status,
//                         })}
//                         getAllRecurringBills={getAllRecurringBills}
//                       />
//                     );
//                   }
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RecurringBillsSection;

"use client";
import { usePathname } from "next/navigation";
import Search from "../transaction/Search";
import { useContext, useEffect, useState } from "react";
import SortBySection from "../transaction/SortBySection";
import { Loading, SortFilterHeader, Title } from "../../__molecules";
import TransactionItem from "../transaction/TransactionItem";
import { axiosInstance } from "@/app/libs/axiosInstance";
import useAccessToken from "@/app/hooks/use-toke";
import { ColorEnum } from "@/app/schema/schema";
import { useSortAndFilter } from "@/app/hooks/use-sortAndFilter";
import Summary from "./Summary";
import dayjs from "dayjs";
import { DataType } from "@/app/interfaces/interface";
import { PotsDataType } from "../pots/PotsSection";
import { GlobalContext } from "@/app/context/Context";

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
  amount: number;
  category: string;
  color: string;
  checkId: string;







};

const RecurringBillsSection = () => {
  const path = usePathname();
  const isRecurringBills = path.includes("recurringbills");
  const { accessToken, isLoading } = useAccessToken();
  const [recurringBillsData, setRecurringBillsData] = useState<
    RecurringBillsDataType[]
  >([]);
  const [sortByDropdown, setSortByDropdown] = useState(false);
  const [transactions] = useState<(DataType | PotsDataType)[]>([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const context = useContext(GlobalContext);

  const {
    filteredAllTransactions,
    setSearchTerm,
    setSortByValue,
    sortTransactions,
    sortByValue,
  } = useSortAndFilter(recurringBillsData || []);



  console.log(recurringBillsData, "recurringBillsData")

  // const updateRecurringBillsStatus = (bills: RecurringBillsDataType[]) => {
  //   const today = dayjs();
  //   const lastDayOfMonth = today.endOf("month").date();

  //   return bills.map((bill) => {
  //     const dueDay = parseInt(bill.dueDate.split(" - ")[1]);
  //     const adjustedDueDay = Math.min(dueDay, lastDayOfMonth);
  //     const dueDate = today.date(adjustedDueDay);

  //     let amount: number;
  //     let category: string;
  //     let color: string;

  //     if (bill.resource === "budget" && bill.budgetId) {
  //       amount = bill.budgetId.amount;
  //       category = bill.budgetId.category;
  //       color = bill.budgetId.color ?? "defaultColor";
  //     } else if (bill.resource === "pot" && bill.potId) {
  //       amount = bill.potId.amount;
  //       category = bill.potId.potName;

  //       color = bill.potId.color ?? "defaultColor";
  //     } else {
  //       return { ...bill, status: "upcoming" };
  //     }
  //     let status = "upcoming";
  //     let daysUntilDue = dueDate.diff(today, "days");

  //     if (daysUntilDue < 0) {
  //       const nextMonthDueDate = today.add(1, "month").date(dueDay);
  //       daysUntilDue = nextMonthDueDate.diff(today, "days");
  //     }

  //     if (daysUntilDue <= 3 && daysUntilDue > 0) {
  //       status = "dueSoon";
  //     }
  //     if (today.isSame(dueDate, "day")) {
  //       status = "dueSoon";
  //     }

  //     if (today.isSame(dueDate, "day")) {
  //       const isPaid = transactions.some((t) => {
  //         if (isDataType(t)) {
  //           return (
  //             t.amount === amount &&
  //             t.category === category &&
  //             t.color === color &&
  //             t.status === "paid"
  //           );
  //         }
  //         return false;
  //       });

  //       if (isPaid) {
  //         status = "paid";
  //       }
  //     }

  //     if (today.isAfter(dueDate, "day") && status === "dueSoon") {
  //       const isPaid = transactions.some((t) => {
  //         if (isDataType(t)) {
  //           return (
  //             t.amount === amount &&
  //             t.category === category &&
  //             t.color === color &&
  //             t.status === "paid"
  //           );
  //         }
  //         return false;
  //       });

  //       if (!isPaid) {
  //         status = "upcoming";
  //       }
  //     }

  //     return { ...bill, status };
  //   });
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

    // Adjust for bills due next month if today's date is after the due date
    if (daysUntilDue < 0) {
      const nextMonthDueDate = today.add(1, "month").date(dueDay);
      daysUntilDue = nextMonthDueDate.diff(today, "days");
    }

    // Update status based on days until due
    if (daysUntilDue <= 3 && daysUntilDue > 0) {
      status = "dueSoon";
    } else if (today.isSame(dueDate, "day")) {
      status = "dueSoon";
    }

    // Check if the bill has been paid
    if (today.isSame(dueDate, "day")) {
      const isPaid = transactions.some((t) => {
        return (
          isDataType(t) &&
          t.amount === amount &&
          t.category === category &&
          t.color === color &&
          t.status === "paid"
        );
      });

      if (isPaid) {
        status = "paid";
      }
    }

    // If today is after due date and it's still "dueSoon", revert to "upcoming"
    if (today.isAfter(dueDate, "day") && status === "dueSoon") {
      const isPaid = transactions.some((t) => {
        return (
          isDataType(t) &&
          t.amount === amount &&
          t.category === category &&
          t.color === color &&
          t.status === "paid"
        );
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

  const isDataType = (
    transaction: DataType | PotsDataType
  ): transaction is DataType => {
    return (transaction as DataType).category !== undefined;
  };

  if (!context) return null;
  const { minimize } = context;

  return (
    <section
      className={`w-full h-full ${
        minimize ? "lg:pl-[88px]" : "lg:pl-[300px]"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="w-full h-full min-h-screen px-4 py-6 md:px-6 md:py-8 flex flex-col gap-8 ">
        <Title isRecurringBills={isRecurringBills} />

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
                  sortByValue={sortByValue}
                />
              </div>

              <SortFilterHeader isRecurringBills={isRecurringBills} />
              {isLoading ? (
                <div className="w-full h-screen flex items-center justify-center">
                  {/* Loading... */}
                  <Loading />
                </div>
              ) : (
                <div className="w-full">
                  {sortTransactions(filteredAllTransactions || []).map(
                    (transaction, i) => {
                      const isFirstItem = i === 0;
                      const amount =
                        "amount" in transaction ? transaction.amount : 0;
                      const category =
                        "category" in transaction
                          ? transaction.category
                          : "Unknown";
                      const color =
                        "color" in transaction
                          ? transaction.color
                          : "defaultColor";
                      // const categoryLogo =
                      //   "categoryLogo" in transaction
                      //     ? transaction.categoryLogo
                      //     : "/assets/logos/logo12.svg";
                      const categoryLogo = 'categoryLogo' in transaction ? (
                        transaction.categoryLogo
                      ) : (
                        <div className="w-10 h-10 rounded-full" style={{ backgroundColor: transaction.color || "gray" }}></div>
                      );

                      return (
                        <TransactionItem
                          key={transaction._id}
                          category={category}
                          amount={amount}
                          isFirstItem={isFirstItem}
                          isRecurringBills={isRecurringBills}
                          _id={transaction._id}
                          categoryLogo={categoryLogo}
                          color={color}
                          recurringBillsData={recurringBillsData}
                          // setRecurringBillsData={setRecurringBillsData}
                          {...("dueDate" in transaction && {
                            dueDate: transaction.dueDate,
                          })}
                          {...("status" in transaction && {
                            status: transaction.status,
                          })}
                          getAllRecurringBills={getAllRecurringBills}
                        />
                      );
                    }
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecurringBillsSection;
