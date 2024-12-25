import React from "react";

const TotalsFragment = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-y-3 md:gap-x-6">
      <div className="flex flex-col gap-3 items-start p-6 rounded-lg bg-[#201F24]">
        <p className="text-[14px] font-normal text-[#696868]">
          Current Balance
        </p>
        <p className=" font-bold text-[32px] text-white">$4,832.00</p>
      </div>

      <div className="flex flex-col gap-3 items-start p-6 rounded-lg bg-white">
        <p className="text-[14px] font-normal text-[#696868]">Income</p>
        <p className="text-[#201F24] font-bold text-[32px] ">$3,814.25</p>
      </div>

      <div className="flex flex-col gap-3 items-start p-6 rounded-lg bg-white">
        <p className="text-[14px] font-normal text-[#696868]">Expenses</p>
        <p className="text-[#201F24] font-bold text-[32px] ">$1,700.50</p>
      </div>
    </div>
  );
};

export default TotalsFragment;
