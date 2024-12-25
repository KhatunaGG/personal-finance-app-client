"use client";
import Link from "next/link";
import { ArrowRight, DotIcon } from "../../__atoms";
import Image from "next/image";
import { BudgetPieChart, ProgressBar } from "../../__molecules";
import BudgetItem from "./BudgetItem";
import Spending from "./Spending";

const BudgetSections = () => {
  return (
    <section className="w-full h-full min-h-screen ">
      <div className="w-full h-full bg-[#F8F4F0] py-8 px-4 md:px-10 lg:px-6 flex flex-col items-start justify-start gap-8">
        <div className="w-full flex flex-row items-center justify-between">
          <h1 className="w-full text-left text-[32px] text-[#201F24] font-bold">
            Budgets
          </h1>
          <button className="bg-[#201F24] rounded-lg text-white text-[14px] font-bold text-right p-4 whitespace-nowrap">
            + Add New Budget
          </button>
        </div>

        <div className="w-full flex flex-col lg:flex-row items-start gap-y-6 lg:gap-x-[2.26%]">
          <div className="bg-white w-full max-w-[375px] md:max-w-[758px] lg:w-[40.38%] p-8 rounded-lg flex flex-col md:flex-row lg:flex-col items-center justify-center gap-y-8 md:gap-x-8 lg:gap-y-8">
            <div className="w-[240px] h-[240px]  flex flex-col md:flex-row lg:flex-col items-center justify-center">
              <BudgetPieChart />
            </div>

            <Spending />
          </div>

          <div className="bg-red-200 w-full lg:w-[57.36%] flex flex-col gap-y-6">
            <BudgetItem />
            <BudgetItem />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BudgetSections;
