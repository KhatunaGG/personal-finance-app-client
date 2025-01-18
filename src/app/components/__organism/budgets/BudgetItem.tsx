"use client";
import { ModalItem, ProgressBar } from "../../__molecules";
import { ArrowRight, DotIcon } from "../../__atoms";
import Link from "next/link";
import { DataType } from "@/app/interfaces/interface";
import LatestSpending from "./LatestSpending";
import useLatestSpendingData from "@/app/hooks/use-latestSpending";
import { Dispatch, SetStateAction, useState } from "react";
import DeleteModal from "../deleteModal/DeleteModal";

export type BudgetItemPropsType = {
  category: string;
  groupSpending: number;
  color: string;
  groupTotalAmount: number;
  data: DataType[];
  getBudgets: () => void;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  activeModalItem: number | null;
  setActiveModalItem: Dispatch<SetStateAction<number | null>>;
  index: number;
  setIsModal: Dispatch<SetStateAction<boolean>>;
};

const BudgetItem = ({
  category,
  groupSpending,
  color,
  groupTotalAmount,
  data,
  getBudgets,
  setIsEdit,
  activeModalItem,
  setActiveModalItem,
  index,
  setIsModal,
}: BudgetItemPropsType) => {
  const [isDelete, setIsDelete] = useState(false);
  const remaining = groupTotalAmount - Math.abs(groupSpending);
  const { latestSpendingData, isLastEl } = useLatestSpendingData(
    data,
    category
  );


  
  const handleOpenModal = () => {
    setActiveModalItem(
      activeModalItem === null || activeModalItem !== index ? index : null
    );
  };

  return (
    <div className="py-6 px-[20px] md:p-8 rounded-lg bg-white flex flex-col gap-y-[20px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <div
            style={{ backgroundColor: color }}
            className="w-4 h-4 rounded-full"
          ></div>
          <h2 className="text-[20px] font-bold text-[#201F24]">{category}</h2>
        </div>

        <div className="relative cursor-pointer" onClick={handleOpenModal}>
          <DotIcon />

          {activeModalItem === index && (
            <ModalItem
              setIsDelete={setIsDelete}
              setIsEdit={setIsEdit}
              setIsModal={setIsModal}
            />
          )}
        </div>
      </div>

      <div className="flex flex-col gap-y-4">
        <p className="text-[14px] font-normal text-[#696868]">
          Maximum of ${groupTotalAmount.toFixed(2)}
        </p>
        <div className="SLIDER w-full overflow-hidden">
          <ProgressBar
            category={category}
            groupSpending={groupSpending}
            color={color}
            groupTotalAmount={groupTotalAmount}
          />
        </div>

        <div className="flex items-center justify-start">
          <div className="flex flex-row gap-4 w-1/2">
            <div
              className="w-[5px] h-full min-h-[43px] rounded-sm"
              style={{ backgroundColor: color }}
            ></div>
            <div className="flex flex-col items-start justify-center gap-1">
              <p className="text-[12px] font-normal text-[#696868]">Spent</p>
              <p className="text-[#201F24] font-bold text-[14px]">
                $
                {groupSpending < 0
                  ? Math.abs(groupSpending).toFixed(2)
                  : "0.00"}
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-4  w-1/2">
            <div className="w-[5px] bg-[#F8F4F0] h-full min-h-[43px] rounded-sm"></div>
            <div className="flex flex-col items-start justify-center gap-1">
              <p className="text-[12px] font-normal text-[#696868]">
                Remaining
              </p>
              <p className="text-[#201F24] font-bold text-[14px] ">
                $
                {groupSpending < groupTotalAmount
                  ? remaining.toFixed(2)
                  : "0.00"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-[#F8F4F0] rounded-xl p-[20px]  h-full w-full   flex flex-col  gap-y-[20px]">
        <div className="w-full flex items-center justify-between">
          <h2 className="font-bold text-[20px] text-[#201F24]">
            Latest Spending
          </h2>
          <Link
            href={"/transactions"}
            className="flex flex-row items-center gap-3"
          >
            <p className="text-[14px] text-[#696868] font-normal">See All</p>
            <ArrowRight />
          </Link>
        </div>

        <div className=" grid grid-cols-1   ">
          {latestSpendingData.map((spending, i) => {
            if (spending.amount < 0) {
              return (
                <LatestSpending
                  key={i}
                  logo={spending.categoryLogo}
                  category={spending.category}
                  amount={spending.amount}
                  isLastEl={i === isLastEl ? -1 : i}
                  createdAt={spending.createdAt}
                  updatedAt={spending.updatedAt}
                />
              );
            }
          })}
        </div>
      </section>
      {isDelete && (
        <DeleteModal
          setIsDelete={setIsDelete}
          category={category}
          getBudgets={getBudgets}
        />
      )}
    </div>
  );
};

export default BudgetItem;
