import React from "react";
import { ProgressBar } from "../../__molecules";
import Image from "next/image";
import { ArrowRight, DotIcon } from "../../__atoms";
import Link from "next/link";

const BudgetItem = () => {
  return (
    <div className="py-6 px-[20px] md:p-8 rounded-lg bg-white flex flex-col gap-y-[20px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <div className="bg-[#277C78] w-4 h-4 rounded-full"></div>
          <h2 className="text-[20px] font-bold text-[#201F24]">
            Entertainment
          </h2>
        </div>
        <DotIcon />
      </div>

      <div className="flex flex-col gap-y-4">
        <p className="text-[14px] font-normal text-[#696868]">
          Maximum of $50.00
        </p>
        <div className="SLIDER w-full">
          <ProgressBar />
        </div>

        <div className="flex items-center justify-start">
          <div className="flex flex-row gap-4 w-1/2">
            <div className="w-[5px] bg-[#277C78] h-full min-h-[43px] rounded-sm"></div>
            <div className="flex flex-col items-start justify-center gap-1">
              <p className="text-[12px] font-normal text-[#696868]">Savings</p>
              <p className="text-[#201F24] font-bold text-[14px]">$15</p>
            </div>
          </div>

          <div className="flex flex-row gap-4  w-1/2">
            <div className="w-[5px] bg-[#F8F4F0] h-full min-h-[43px] rounded-sm"></div>
            <div className="flex flex-col items-start justify-center gap-1">
              <p className="text-[12px] font-normal text-[#696868]">
                Remaining
              </p>
              <p className="text-[#201F24] font-bold text-[14px] ">$35</p>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-[#F8F4F0] rounded-xl p-[20px]  h-full w-full   flex flex-col  gap-y-[20px]">
        <div className="w-full flex items-center justify-between">
          <h2 className="font-bold text-[20px] text-[#201F24]">Transactions</h2>
          <Link
            href={"/transactions"}
            className="flex flex-row items-center gap-3"
          >
            <p className="text-[14px] text-[#696868] font-normal">See All</p>
            <ArrowRight />
          </Link>
        </div>

        <div className=" grid grid-cols-1   ">
          <div className="w-full grid grid-cols-[70%_30%] md:grid-cols-2   py-[20px]  border-b-[1px] border-b-[#dedada]">
            <div className="flex flex-row items-center gap-4">
              <div className="relative w-8 h-8 md:w-[40px] md:h-[40px] rounded-full overflow-hidden object-cover">
                <Image
                  className="absolute inset-0 w-full h-full object-cover"
                  src={"/assets/images/Person-1.jpg"}
                  fill
                  alt={""}
                />
              </div>
              <p className="text-[14px] font-bold">Emma Richardson</p>
            </div>

            <div className="flex flex-col gap-y-2 text-right">
              <p className="text-[14px] font-bold">+$75.50</p>
              <p className="text-[12px] text-[#696868] font-normal">
                19 Aug 2024
              </p>
            </div>
          </div>

          <div className="w-full grid grid-cols-[70%_30%] md:grid-cols-2     py-[20px]  border-b-[1px] border-b-[#dedada]">
            <div className="flex flex-row items-center gap-4">
              <div className="relative w-8 h-8 md:w-[40px] md:h-[40px] rounded-full overflow-hidden object-cover">
                <Image
                  className="absolute inset-0 w-full h-full object-cover"
                  src={"/assets/images/Person-1.jpg"}
                  fill
                  alt={""}
                />
              </div>
              <p className="text-[14px] font-bold">Emma Richardson</p>
            </div>

            <div className="flex flex-col gap-y-2 text-right">
              <p className="text-[14px] font-bold">+$75.50</p>
              <p className="text-[12px] text-[#696868] font-normal">
                19 Aug 2024
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BudgetItem;
