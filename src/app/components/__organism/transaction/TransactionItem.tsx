// "use client";
// import useAccessToken from "@/app/hooks/use-toke";
// import Image from "next/image";
// import { Dispatch, SetStateAction, useEffect, useState } from "react";
// import { ColorEnum } from "@/app/schema/schema";
// import DatePickers from "../recurringBills/DatePicker";
// import { ToastContainer } from "react-toastify";
// import { axiosInstance } from "@/app/libs/axiosInstance";
// import { RecurringBillsDataType } from "../recurringBills/RecurringBillsSection";
// import { CheckMark, ExclamationMark } from "../../__atoms";
// // import { DataType } from "@/app/interfaces/interface";
// import { TransactionType } from "./TransactionSection";

// export type TransactionItemPropsType = {
//   category: string;
//   createdAt?: string | undefined;
//   categoryLogo?: string;
//   amount: number;
//   isFirstItem: boolean;
//   isRecurringBills?: boolean;
//   _id: string;
//   setInputChecked?: Dispatch<SetStateAction<string>>;
//   inputChecked?: string;
//   type?: string;
//   color?: ColorEnum | string | undefined;
//   setIsDatePickers?: Dispatch<SetStateAction<boolean>>;
//   isDatePickers?: boolean;
//   activeDatePicker?: string | null;
//   setActiveDatePicker?: Dispatch<SetStateAction<string | null>>;
//   dueDate?: string;
//   status?: string;
//   recurringBillsData?: RecurringBillsDataType[] | undefined;
//   setRecurringBillsData?: Dispatch<
//     SetStateAction<RecurringBillsDataType[] | undefined>
//   >;
//   getAllRecurringBills?: () => Promise<void>;
//   allTransactions?: TransactionType[];
//   onTransactionUpdate?: (transactionId: string, updatedTransaction: { color: string; amount: number }) => Promise<void>;

// };

// export type NewRecurringBillType = {
//   category: string;
//   amount: number;
//   categoryLogo: string;
//   transactionId: string;
//   color: ColorEnum | string | undefined;
//   type: string;
//   dueDate: string;
// };

// const TransactionItem = ({
//   category,
//   createdAt,
//   amount,
//   categoryLogo,
//   isFirstItem,
//   isRecurringBills,
//   _id,
//   type,
//   color,
//   setIsDatePickers,
//   isDatePickers,
//   activeDatePicker,
//   setActiveDatePicker,
//   dueDate,
//   status,
//   // recurringBillsData,
//   setRecurringBillsData,
//   getAllRecurringBills,
//   // allTransactions,
//   onTransactionUpdate,

// }: TransactionItemPropsType) => {
//   const { accessToken } = useAccessToken();
//   const [recurringBillsDate, setRecurringBillsDate] = useState("");
//   const [isExistingItem, setIsExistingItem] = useState(false);

// console.log(activeDatePicker, "activeDatePicker")

//   const handleUpdate = (newColor: string, newAmount: number) => {
//     if (onTransactionUpdate) {
//       onTransactionUpdate(_id, { color: newColor, amount: newAmount });
//     }
//   };

//   useEffect(() => {
//     handleUpdate(color as string, amount)
//   }, [color, amount])

// //   const handleTransactionUpdate = (updatedTransaction: DataType) => {
// //     if (setRecurringBillsData && recurringBillsDate) {
// //       setRecurringBillsData((prev) => {
// //         // Ensure that the map returns the updated array correctly
// //         return prev?.map((item) => {
// //           if (item.transactionId === updatedTransaction.id) {
// //             return {
// //               ...item,
// //               amount: updatedTransaction.amount,
// //               color: updatedTransaction.color
// //             };
// //           }
// //           return item; // return the original item if no update
// //         });
// //       });
// //     }
// //   }

// //   const updateTransaction = async (id: string, updatedAmount: number, updatedColor: string) => {
// //     try {
// //         // Assuming you're calling an API to update the transaction
// //         const res = await axiosInstance.patch(`/transactions/${id}`, { amount: updatedAmount, color: updatedColor });
// //         if (res.status === 200) {
// //             // Update the recurring bill data in the parent component
// //             handleTransactionUpdate({ ...res.data, _id: id, amount: updatedAmount, color: updatedColor });
// //         }
// //     } catch (error) {
// //         console.error('Error updating transaction:', error);
// //     }
// // };

//   const checkExistingRecurringBill = async () => {
//     try {
//       const res = await axiosInstance.get("/recurring-bills", {
//         headers: { Authorization: `Bearer ${accessToken}` },
//       });
//       const data = res.data || [];
//       const isExisting = data.some(
//         (item: { transactionId: string }) => item.transactionId === _id
//       );

//       setIsExistingItem(isExisting);

//       // if (!isExisting) {
//       //   setIsDatePickers?.(true);
//       // } else {
//       //   setIsDatePickers?.(false);
//       // }
//     } catch (error) {
//       console.error("Error checking recurring bill:", error);
//     }
//   };

//   useEffect(() => {
//     checkExistingRecurringBill();
//   }, [_id]);

//   const handleInputChange = async (id: string) => {
//     setIsDatePickers?.(true);

//     if (activeDatePicker === id) {
//       setActiveDatePicker?.(null);
//     } else {
//       setActiveDatePicker?.(id);
//     }

//     try {
//       const res = await axiosInstance.get(
//         `/recurring-bills/transaction/${id}`,
//         {
//           headers: { Authorization: `Bearer ${accessToken}` },
//         }
//       );

//       if (res.data === "") {
//         setIsExistingItem(false);
//         setIsDatePickers?.(true);
//       } else {
//         await axiosInstance.delete(`/recurring-bills/transaction/${id}`, {
//           headers: { Authorization: `Bearer ${accessToken}` },
//         });
//         setIsExistingItem(false);
//         setIsDatePickers?.(false);
//         setActiveDatePicker?.(null);
//         getAllRecurringBills?.();
//       }

//       console.log(res.data, "response data");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div
//       className={`w-full  flex items-center justify-between md:gap-[3.31%] ${
//         isFirstItem
//           ? "pt-0 pb-4 border-none"
//           : "py-4 border-t border-t-[#F2F2F2]"
//       }`}
//     >
//       <div
//         className={`${
//           isRecurringBills
//             ? "w-[50%] flex flex-col  items-center md:w-[88%]  md:flex-row "
//             : "w-[65%]"
//         } md:w-[60.16%] grid grid-cols-[40px,1fr] md:gap-x-4 items-center`}
//       >
//         <div className="relative w-8 h-8 md:w-[40px] md:h-[40px] rounded-full overflow-hidden object-cover">
//           <Image
//             className="absolute inset-0 w-full h-full object-cover"
//             src={categoryLogo || "/assets/logos/logo12.svg"}
//             fill
//             alt={"logo"}
//           />
//         </div>
//         <div
//           className={`flex flex-col items-start gap-1 md:flex-row md:gap-0 md:items-center md:justify-between`}
//         >
//           <p className="text-sm font-bold text-[#201F24]">{category}</p>
//           <p
//             className={`${isRecurringBills ? "sm:flex" : "md:hidden"} ${
//               !isRecurringBills && "hidden"
//             } order-2 text-xs text-[#696868] font-normal md:order-1 relative`}
//           >
//             {isRecurringBills ? dueDate : createdAt}
//             <span
//               className={`absolute w-[13px] h-[13px] rounded-full -top-1 -right-4 z-10  `}
//             >
//               {isRecurringBills && status === "dueSoon" ? (
//                 <ExclamationMark />
//               ) : isRecurringBills && status === "paid" ? (
//                 <CheckMark />
//               ) : (
//                 ""
//               )}
//             </span>
//           </p>

//           <div className="relative">
//             <button
//               onClick={() => handleInputChange(_id)}
//               className={`${
//                 isRecurringBills && "hidden"
//               } text-xs  font-thin border border-[#69686826] py-2 px-1 rounded-md ${
//                 isExistingItem ? "text-[#C94736]" : "text-[#696868]"
//               }`}
//             >
//               {/* {isExistingItem
//                 ? "Remove Recurring Bill"
//                 : "Add to Recurring Bills"} */}
//               {isExistingItem
//                 ? "Remove Recurring Bill"
//                 : "Add to Recurring Bills"}
//             </button>
//             {/* {activeDatePicker === _id && isDatePickers &&  ( */}
//             {activeDatePicker === _id && isDatePickers && !isExistingItem && (
//               <DatePickers
//                 setRecurringBillsData={setRecurringBillsData}
//                 category={category}
//                 amount={amount}
//                 categoryLogo={categoryLogo}
//                 transactionId={_id}
//                 color={color}
//                 type={type}
//                 recurringBillsDate={recurringBillsDate}
//                 setRecurringBillsDate={setRecurringBillsDate}
//                 setIsDatePickers={setIsDatePickers}
//                 setActiveDatePicker={setActiveDatePicker}
//                 setIsExistingItem={setIsExistingItem}
//                 activeDatePicker={activeDatePicker}
//               />
//             )}
//           </div>
//         </div>
//       </div>

//       <div
//         className={`${
//           isRecurringBills ? "w-[45.68%] text-right" : "w-[35%] md:w-[36.51%]"
//         } flex-col gap-1 flex items-end justify-between md:gap-0 md:flex-row  md:items-center`}
//       >
//         <p
//           className={`${
//             isRecurringBills && "hidden"
//           } order-2 text-xs text-[#696868] font-normal md:order-1`}
//         >
//           {isRecurringBills ? "Monthly - 2nd" : createdAt}
//         </p>
//         <p
//           className={`${
//             isRecurringBills && "w-full text-right"
//           } order-1 text-sm font-bold ${
//             amount < 0 ? "text-[#201F24]" : "text-[#277C78]"
//           } md:order-2`}
//         >
//           {amount < 0
//             ? `-$${Math.abs(amount).toFixed(2)}`
//             : `+$${amount.toFixed(2)}`}
//         </p>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default TransactionItem;

"use client";
import useAccessToken from "@/app/hooks/use-toke";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ColorEnum } from "@/app/schema/schema";
import DatePickers from "../recurringBills/DatePicker";
import { ToastContainer } from "react-toastify";
import { axiosInstance } from "@/app/libs/axiosInstance";
import { RecurringBillsDataType } from "../recurringBills/RecurringBillsSection";
import { CheckMark, ExclamationMark } from "../../__atoms";
import { TransactionOrRecurringBill } from "./TransactionSection";
// import { TransactionType } from "./TransactionSection";

export type TransactionItemPropsType = {
  category: string;
  createdAt?: string | undefined;
  categoryLogo?: string;
  amount: number;
  isFirstItem: boolean;
  isRecurringBills?: boolean;
  _id: string;
  setInputChecked?: Dispatch<SetStateAction<string>>;
  inputChecked?: string;
  type?: string;
  color?: ColorEnum | string | undefined;
  setIsDatePickers?: Dispatch<SetStateAction<boolean>>;
  isDatePickers?: boolean;
  activeDatePicker?: string | null;
  setActiveDatePicker?: Dispatch<SetStateAction<string | null>>;
  dueDate?: string;
  status?: string;
  recurringBillsData?: RecurringBillsDataType[] | undefined;
  setRecurringBillsData?: Dispatch<
    SetStateAction<RecurringBillsDataType[] | undefined>
  >;
  getAllRecurringBills?: () => Promise<void>;
  // allTransactions?: TransactionType[];







  
  allTransactions?: TransactionOrRecurringBill[];
  resource?: string;
};

const TransactionItem = ({
  category,
  createdAt,
  amount,
  categoryLogo,
  isFirstItem,
  isRecurringBills,
  _id,
  type,
  color,
  setIsDatePickers,
  isDatePickers,
  activeDatePicker,
  setActiveDatePicker,
  dueDate,
  status,
  setRecurringBillsData,
  getAllRecurringBills,
  resource,
}: TransactionItemPropsType) => {
  const { accessToken } = useAccessToken();
  const [isExistingItem, setIsExistingItem] = useState(false);
  const [recurringBillsDate, setRecurringBillsDate] = useState("");

    const checkExistingRecurringBill = async () => {
    if (!accessToken || !_id) return;

    try {
      const res = await axiosInstance.get("/recurring-bills", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      const data = res.data || [];
      const isExisting = data.some(
        (item: { transactionId: string }) => item.transactionId === _id
      );
      setIsExistingItem(isExisting);
    } catch (error) {
      console.error("Error checking recurring bill:", error);
    }
  };

  useEffect(() => {
    checkExistingRecurringBill();
  }, [accessToken, _id]);

  const handleInputChange = async (id: string) => {
    if (activeDatePicker === id) {
      setActiveDatePicker?.(null);
      return;
    }

    setActiveDatePicker?.(id);

    try {
      const res = await axiosInstance.get(
        `/recurring-bills/transaction/${id}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );

      if (res.data === "") {
        setIsExistingItem(false);
        setIsDatePickers?.(true);
      } else {
        await axiosInstance.delete(`/recurring-bills/transaction/${id}`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        setIsExistingItem(false);
        setIsDatePickers?.(false);
        setActiveDatePicker?.(null);
        getAllRecurringBills?.();
      }
    } catch (error) {
      console.error("Error in handleInputChange:", error);
    }
  };

  return (
    <div
      className={`w-full flex items-center justify-between md:gap-[3.31%] ${
        isFirstItem
          ? "pt-0 pb-4 border-none"
          : "py-4 border-t border-t-[#F2F2F2]"
      }`}
    >
      <div
        className={`${
          isRecurringBills
            ? "w-[50%] flex flex-col items-center md:w-[88%] md:flex-row"
            : "w-[65%]"
        } md:w-[60.16%] grid grid-cols-[40px,1fr] md:gap-x-4 items-center`}
      >
        <div className="relative w-8 h-8 md:w-[40px] md:h-[40px] rounded-full overflow-hidden object-cover">
          <Image
            className="absolute inset-0 w-full h-full object-cover"
            src={categoryLogo || "/assets/logos/logo12.svg"}
            fill
            alt={"logo"}
          />
        </div>
        <div
          className={`flex flex-col items-start gap-1 md:flex-row md:gap-0 md:items-center md:justify-between`}
        >
          <p className="text-sm font-bold text-[#201F24]">{category}</p>
          <p
            className={`${isRecurringBills ? "sm:flex" : "md:hidden"} ${
              !isRecurringBills && "hidden"
            } order-2 text-xs text-[#696868] font-normal md:order-1 relative`}
          >
            {isRecurringBills ? dueDate : createdAt}
            <span
              className={`absolute w-[13px] h-[13px] rounded-full -top-1 -right-4 z-10`}
            >
              {isRecurringBills && status === "dueSoon" ? (
                <ExclamationMark />
              ) : isRecurringBills && status === "paid" ? (
                <CheckMark />
              ) : (
                ""
              )}
            </span>
          </p>

          <div className="relative">
            <button
              onClick={() => handleInputChange(_id)}
              className={`${
                isRecurringBills && "hidden"
              } text-xs font-thin border border-[#69686826] py-2 px-1 rounded-md ${
                isExistingItem ? "text-[#C94736]" : "text-[#696868]"
              }`}
            >
              {isExistingItem
                ? "Remove Recurring Bill"
                : "Add to Recurring Bills"}
            </button>
            {activeDatePicker === _id && isDatePickers && !isExistingItem && (
              <DatePickers
                setRecurringBillsData={setRecurringBillsData}
                category={category}
                amount={amount}
                categoryLogo={categoryLogo}
                transactionId={_id}
                color={color}
                type={type}
                recurringBillsDate={recurringBillsDate}
                setRecurringBillsDate={setRecurringBillsDate}
                setIsDatePickers={setIsDatePickers}
                setActiveDatePicker={setActiveDatePicker}
                setIsExistingItem={setIsExistingItem}
                activeDatePicker={activeDatePicker}
                getAllRecurringBills={getAllRecurringBills}
                resource={resource}
              />
            )}
          </div>
        </div>
      </div>

      <div
        className={`${
          isRecurringBills ? "w-[45.68%] text-right" : "w-[35%] md:w-[36.51%]"
        } flex-col gap-1 flex items-end justify-between md:gap-0 md:flex-row md:items-center`}
      >
        <p
          className={`${
            isRecurringBills && "hidden"
          } order-2 text-xs text-[#696868] font-normal md:order-1`}
        >
          {isRecurringBills ? "Monthly - 2nd" : createdAt}
        </p>
        <p
          className={`${
            isRecurringBills && "w-full text-right"
          } order-1 text-sm font-bold ${
            amount < 0 ? "text-[#201F24]" : "text-[#277C78]"
          }`}
        >
          {amount < 0
            ? `-$${Math.abs(amount).toFixed(2)}`
            : `+$${amount.toFixed(2)}`}
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default TransactionItem;
