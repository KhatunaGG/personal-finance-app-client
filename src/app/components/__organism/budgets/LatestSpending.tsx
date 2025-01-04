"use client";
import Image from "next/image";


export type LatestSpendingPropsType = {
  logo: string;
  category: string;
  amount: number;
  isLastEl: number;
  // createdAt: string;
  // updatedAt: string;
};

const LatestSpending = ({
  logo,
  category,
  amount,
  isLastEl,
  // createdAt,
  // updatedAt,
}: LatestSpendingPropsType) => {
  return (
    <div
      className={`w-full grid grid-cols-[70%_30%] md:grid-cols-2 py-[20px] ${
        isLastEl !== -1 ? "border-b-[1px] border-b-[#dedada]" : ""
      }`}
    >
      <div className="flex flex-row items-center gap-4">
        <div className="relative w-8 h-8 md:w-[40px] md:h-[40px] rounded-full overflow-hidden object-cover">
          <Image
            className="absolute inset-0 w-full h-full object-cover"
            src={logo}
            fill
            alt={"logo"}
          />
        </div>
        <p className="text-[14px] font-bold">{category}</p>
      </div>

      <div className="flex flex-col gap-y-2 text-right">
        <p className="text-[14px] font-bold">-${Math.abs(amount).toFixed(2)}</p>
        <p className="text-[12px] text-[#696868] font-normal"></p>
      </div>
    </div>
  );
};

export default LatestSpending;
