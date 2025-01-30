import React from "react";

const Summary = () => {
  return (
    <div className="rounded-lg md:w-1/2 lg:w-full bg-white p-[20px]">
      <h3 className="text-base font-bold mb-[20px]">Summary</h3>

      <div className="w-full flex flex-row items-center justify-between">
        <p className="text-sm font-normal text-[#696868] w-[65%]">Paid Bills</p>
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
        <p className="text-sm font-normal text-[#C94736] w-[65%]">Paid Bills</p>
        <p className="text-xs font-bold text-[#C94736] w-[35%] text-right">
          4 ($190.00)
        </p>
      </div>
    </div>
  );
};

export default Summary;
