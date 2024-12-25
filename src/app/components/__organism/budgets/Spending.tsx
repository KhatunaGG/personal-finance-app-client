import React from "react";

const Spending = () => {
  return (
    <div className="w-full flex flex-col gap-y-2">
      <p className="text-[#201F24] text-[20px] font-bold">Spending Summary</p>
      <div>
        <div className="flex flex-row gap-4 py-4">
          <div className="w-[5px] bg-[#277C78] h-full min-h-[21px] rounded-sm"></div>
          <div className="w-full flex flex-row items-center justify-between ">
            <p className="text-[12px] font-normal text-[#696868]">
              Entertainment
            </p>
            <div className="flex items-center gap-2">
              <p className="text-[#201F24] font-bold text-[14px]">$159</p>
              <p className="text-[#696868] font-normal text-[12px]">
                of $50.00
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-4 py-4">
          <div className="w-[5px] bg-[#277C78] h-full min-h-[21px] rounded-sm"></div>
          <div className="w-full flex flex-row items-center justify-between ">
            <p className="text-[12px] font-normal text-[#696868]">Bills</p>
            <div className="flex items-center gap-2">
              <p className="text-[#201F24] font-bold text-[14px]">$150.00</p>
              <p className="text-[#696868] font-normal text-[12px]">
                of $750.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spending;
