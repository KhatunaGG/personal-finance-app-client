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


import Image from "next/image";

export type TransactionItemPropsType = {
  category: string;
  createdAt: string | undefined;
  categoryLogo?: string;
  amount: number;
  isFirstItem: boolean;
};

const TransactionItem = ({
  category,
  createdAt,
  amount,
  categoryLogo,
  isFirstItem,
}: TransactionItemPropsType) => {
  return (
    <div
      className={`w-full  flex items-center justify-between md:gap-[3.31%] ${
        isFirstItem
          ? "pt-0 pb-4 border-none"
          : "py-4 border-t border-t-[#F2F2F2]"
      }`}
    >
      <div className="w-[65%] md:w-[60.16%] grid grid-cols-[40px,1fr] md:gap-x-4">
        <div className="relative w-8 h-8 md:w-[40px] md:h-[40px] rounded-full overflow-hidden object-cover">
          <Image
            className="absolute inset-0 w-full h-full object-cover"
            src={categoryLogo || "/assets/logos/logo12.svg"}
            fill
            alt={"logo"}
          />
        </div>
        <div className="flex flex-col items-start gap-1 md:flex-row md:gap-0 md:items-center md:justify-between">
          <p className="text-sm font-bold text-[#201F24]">{category}</p>
          {/* <div className="md:w-[80px] lg:w-[120px]">
            <input type="checkbox" name="" id="" />
          </div> */}
          <div className="md:w-[80px] lg:w-[120px] flex items-center gap-[6px]">
            <input type="checkbox" name="" id="" />
            <p className="text-[10px] text-[#696868] md:hidden">Recurring Bills</p>
          </div>
        </div>
      </div>

      <div className="w-[35%] flex-col gap-1 flex items-end justify-between md:gap-0 md:flex-row md:w-[36.51%] md:items-center">
        <p className="order-2 text-xs text-[#696868] font-normal md:order-1">
          {createdAt}
        </p>
        <p
          className={`order-1 text-sm font-bold ${
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
