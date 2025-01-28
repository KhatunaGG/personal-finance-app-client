// // "use client";
// import Image from "next/image";
// // import { AllTransactionsType } from "./TransactionSection";

// export type TransactionItemPropsType = {
//   // transaction: AllTransactionsType;
//   category: string;
//   createdAt: string | undefined;
//   color: String;
//   categoryLogo?: string;
//   amount: number;
//   isFirstItem: boolean;
// };

// const TransactionItem = ({
//   category,
//   createdAt,
//   color,
//   amount,
//   categoryLogo,
//   isFirstItem
// }: TransactionItemPropsType) => {

//   return (
//     <div className={` w-full  flex items-center justify-between md:gap-[3.31%] ${isFirstItem ? "pt-0 pb-4 border-none" : "py-4 border-t border-t-[#F2F2F2]"}`}>
//       <div className="-200 md:w-[60.16%] grid grid-cols-[40px,1fr] md:gap-x-4">
//         <div className="relative w-8 h-8 md:w-[40px] md:h-[40px] rounded-full overflow-hidden object-cover bg-green-700">
//           <Image
//             className="absolute inset-0 w-full h-full object-cover"
//             src={categoryLogo || "/assets/logos/logo12.svg"}
//             fill
//             alt={"logo"}
//           />
//         </div>

//         <div className="flex items-center justify-between">
//           <p className="text-sm font-bold text-[#201F24]">{category}</p>
//           <div className="md:w-[80px] lg:w-[120px]">
//             <input type="checkbox" name="" id="" />
//           </div>
//         </div>
//       </div>

//       <div className="md:w-[36.51%] flex items-center justify-between">
//         <p className="text-xs text-[#696868] font-normal">{createdAt}</p>
//         <p className={`text-sm font-bold ${amount < 0 ? "text-[#201F24]" : "text-[#277C78]"}`}>
//           {amount < 0 ? `-$${Math.abs(amount).toFixed(2)}` : `+$${amount.toFixed(2)}`}
//       </p>
//       </div>
//     </div>
//   );
// };

// export default TransactionItem;

//OK
// import Image from "next/image";

// export type TransactionItemPropsType = {
//   category: string;
//   createdAt: string | undefined;
//   categoryLogo?: string;
//   amount: number;
//   isFirstItem: boolean;
// };

// const TransactionItem = ({
//   category,
//   createdAt,
//   amount,
//   categoryLogo,
//   isFirstItem,
// }: TransactionItemPropsType) => {
//   return (
//     <div
//       className={`w-full  flex items-center justify-between md:gap-[3.31%] ${
//         isFirstItem
//           ? "pt-0 pb-4 border-none"
//           : "py-4 border-t border-t-[#F2F2F2]"
//       }`}
//     >
//       <div className="w-[65%] md:w-[60.16%] grid grid-cols-[40px,1fr] md:gap-x-4">
//         <div className="relative w-8 h-8 md:w-[40px] md:h-[40px] rounded-full overflow-hidden object-cover">
//           <Image
//             className="absolute inset-0 w-full h-full object-cover"
//             src={categoryLogo || "/assets/logos/logo12.svg"}
//             fill
//             alt={"logo"}
//           />
//         </div>
//         <div className="flex flex-col items-start gap-1 md:flex-row md:gap-0 md:items-center md:justify-between">
//           <p className="text-sm font-bold text-[#201F24]">{category}</p>
//           {/* <div className="md:w-[80px] lg:w-[120px]">
//             <input type="checkbox" name="" id="" />
//           </div> */}
//           <div className="md:w-[80px] lg:w-[120px] flex items-center gap-[6px]">
//             <input type="checkbox" name="" id="" />
//             <p className="text-[10px] text-[#696868] md:hidden">Recurring Bills</p>
//           </div>
//         </div>
//       </div>

//       <div className="w-[35%] flex-col gap-1 flex items-end justify-between md:gap-0 md:flex-row md:w-[36.51%] md:items-center">
//         <p className="order-2 text-xs text-[#696868] font-normal md:order-1">
//           {createdAt}
//         </p>
//         <p
//           className={`order-1 text-sm font-bold ${
//             amount < 0 ? "text-[#201F24]" : "text-[#277C78]"
//           } md:order-2`}
//         >
//           {amount < 0
//             ? `-$${Math.abs(amount).toFixed(2)}`
//             : `+$${amount.toFixed(2)}`}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default TransactionItem;

//with recurringbills;



"use client";
import useAccessToken from "@/app/hooks/use-toke";
import { axiosInstance } from "@/app/libs/axiosInstance";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { ColorEnum } from "@/app/schema/schema";

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
};

const TransactionItem = ({
  category,
  createdAt,
  amount,
  categoryLogo,
  isFirstItem,
  isRecurringBills,
  _id,
  setInputChecked,
  inputChecked,
  type,
  color
}: TransactionItemPropsType) => {
  const { accessToken } = useAccessToken();


  const handleInputChange = async () => {
    if (inputChecked === _id) {
      setInputChecked?.("");
    } else {
      setInputChecked?.(_id);
    }

    try {
      const newRecurringBill = {
        category,
        amount,
        categoryLogo,
        _id,
        color,
        type,
        dueDate: ""
      }

      console.log(newRecurringBill, "newRecurringBill")

      const res = await axiosInstance.post('/recurring-bills', newRecurringBill,  {
        headers: { Authorization: `Bearer ${accessToken}` },
      })

      if (res?.status >= 200 && res?.status <= 204) {
        console.log(res.data)
      }

    } catch(error) {
      console.log(error)
    }
  };
  
  


  return (
    <div
      className={`w-full  flex items-center justify-between md:gap-[3.31%] ${
        isFirstItem
          ? "pt-0 pb-4 border-none"
          : "py-4 border-t border-t-[#F2F2F2]"
      }`}
    >
      <div
        className={`${
          isRecurringBills
            ? "w-[50%] flex flex-col  items-center md:w-[88%]  md:flex-row "
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
          <p className="text-sm font-bold text-[#201F24]">
          {category}
            {/* {isRecurringBills ? "yyyy" : category} */}
          </p>

          <p
            className={`${isRecurringBills ? "sm:flex" : "md:hidden"} ${
              !isRecurringBills && "hidden"
            } order-2 text-xs text-[#696868] font-normal md:order-1`}
          >
            {/* {createdAt} */}
            {isRecurringBills ? "Monthly - 2nd" : createdAt}
          </p>

          <div
            className={`${
              isRecurringBills ? "hidden w-0" : "flex"
            } md:w-[80px] lg:w-[120px] flex items-center gap-[6px]`}
          >
            <input
              onChange={() => handleInputChange()}
              checked={inputChecked === _id}
              type="checkbox"
              name=""
              id=""
            />
            <p className="text-[10px] text-[#696868] md:hidden">
              Recurring Bills
            </p>
          </div>
        </div>
      </div>

      <div
        className={`${
          isRecurringBills ? "w-[45.68%] text-right" : "w-[35%] md:w-[36.51%]"
        } flex-col gap-1 flex items-end justify-between md:gap-0 md:flex-row  md:items-center`}
      >
        <p
          className={`${
            isRecurringBills && "hidden"
          } order-2 text-xs text-[#696868] font-normal md:order-1`}
        >
          {/* {createdAt} */}
          {isRecurringBills ? "Monthly - 2nd" : createdAt}
        </p>
        <p
          className={`${
            isRecurringBills && "w-full text-right"
          } order-1 text-sm font-bold ${
            amount < 0 ? "text-[#201F24]" : "text-[#277C78]"
          } md:order-2`}
        >
          {amount < 0
            ? `-$${Math.abs(amount).toFixed(2)}`
            : `+$${amount.toFixed(2)}`}
        </p>
      </div>
    </div>
  );
};

export default TransactionItem;
