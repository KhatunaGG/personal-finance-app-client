import React from "react";
import { DotIcon } from "../../__atoms";
import { ProgressBar } from "../../__molecules";
import { ColorEnum } from "@/app/schema/schema";

type PotItemPropsType = {
  isPotPage: boolean;
  potName:string;
  amount: number;
  target: number;
  color: ColorEnum
};

const PotItem = ({ isPotPage, potName, color, amount, target }: PotItemPropsType) => {
  return (
    <div className="w-full bg-white rounded-lg pt-6 pb-[38px] px-[20px] flex flex-col gap-y-8 md:px-6 md:pt-6 md:pb-[38px] lg:p-6  lg:w-[49%]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <div
            style={{ backgroundColor: color }}
            className="w-4 h-4 rounded-full"
          ></div>
          <h2 className="text-[20px] font-bold text-[#201F24]">{potName}</h2>
        </div>

        <div className="relative cursor-pointer">
          <DotIcon />
        </div>
      </div>

      <div className="flex-flex-col py-[10.5px]">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm text-[#696868] font-normal">Total Saved</h2>
          <p className="text-[#201F24] font-bold text-[32px]">$ {target.toFixed(2)}</p>
        </div>

        <div className="mb-[13px] overflow-hidden">
          <ProgressBar
            category={""}
            groupSpending={0}
            color={""}
            groupTotalAmount={0}
            isPotPage={isPotPage}
          />
        </div>
        <div className="flex items-center justify-between text-[#696868]  text-xs">
          <h2 className="font-bold ">$ 7.95</h2>
          <p className="font-normal">Target of ${target.toFixed(2)}</p>
        </div>
      </div>

      <div className="w-full flex items-center lg:flex-row lg:gap-x-4">
        <button className="w-full lg:w-1/2 py-4 rounded-lg bg-[#F8F4F0]">
          + Add Money
        </button>
        <button className="w-full lg:w-1/2 py-4 rounded-lg bg-[#F8F4F0]">
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default PotItem;
