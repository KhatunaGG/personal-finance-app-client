"use client";
import { BudgetPieChart, FragmentTitle } from "../../__molecules";
import { useGroupedData } from "@/app/hooks/use-categoryGrope";
import { BudgetType } from "../modal/Modal";
import useAccessToken from "@/app/hooks/use-toke";
import useBudgets from "@/app/hooks/use-budgets";

export type BudgetFragmentPropsType = {
  budgets: BudgetType[];
};

const BudgetFragment = ({ budgets = [] }: BudgetFragmentPropsType) => {
  const { accessToken } = useAccessToken();
  const { data } = useBudgets(accessToken ?? "");

  if (!Array.isArray(budgets)) {
    console.error("Expected 'budgets' to be an array, but got:", budgets);
  }
  const groupedData = useGroupedData(data);

  return (
    <section className="w-full grid grid-cols-1 bg-white rounded-xl px-[20px] py-6 md:p-8 gap-y-[20px]">
      <FragmentTitle isFragment={true} title={"Budgets"} />
      {budgets.length > 0 ? (
        <div className="w-full flex flex-col gap-y-4 md:gap-y-0 md:flex-row relative lg:gap-x-10">
          <div className="w-full h-[240px] flex items-center justify-center md:items-start lg:w-[240px] md:w-1/2">
            <BudgetPieChart groupedData={groupedData} data={data} />
          </div>

          <div className="h-full grid grid-cols-2 gap-y-4 md:space-y-0 md:grid-cols-1 md:absolute  md:right-[15px] md:top-0 md:w-[40%] lg:w-[30%]">
            {budgets.map((item, i) => (
              <div key={i} className="flex flex-row gap-4 max-h-[43px]">
                <div
                  style={{ backgroundColor: item.color }}
                  className={`w-[5px]  bg-[${
                    item.color ?? "#000000"
                  }] h-full min-h-[43px] rounded-sm`}
                ></div>{" "}
                <div className="flex flex-col items-start justify-center gap-1">
                  <p className="text-[12px] font-normal text-[#696868] whitespace-nowrap">
                    {item.category}
                  </p>
                  <p className="text-[#201F24] font-bold text-[14px]">
                    {item.amount < 0
                      ? `-$${Math.abs(item.amount).toFixed(2)}`
                      : `$${item.amount.toFixed(2)}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white  w-full p-8 flex items-center justify-center gap-[20px] ">
          <p className="text-[10px] text-[#696868]">
            No Budgets available. Start by creating one!
          </p>{" "}
        </div>
      )}
    </section>
  );
};

export default BudgetFragment;
