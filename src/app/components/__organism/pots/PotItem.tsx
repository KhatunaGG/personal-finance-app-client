"use client";
import { DotIcon } from "../../__atoms";
import { ModalItem, ProgressBar } from "../../__molecules";
import { ColorEnum } from "@/app/schema/schema";
import { GropedPotsType, PotsDataType } from "./PotsSection";
import { Dispatch, SetStateAction, useState } from "react";
import DeleteModal from "../deleteModal/DeleteModal";

type PotItemPropsType = {
  isPotPage: boolean;
  potName: string;
  amount: number;
  color: ColorEnum;
  _id: string;
  handleClickPots: (id: string) => void;
  potsData: PotsDataType[];
  totalSaved: number;
  percentageSpent: number;
  potTargetTotalAmount: number;
  setPotMoney: Dispatch<SetStateAction<boolean>>;
  setWithdrawMoney: Dispatch<SetStateAction<boolean>>;
  portSpendingTotalAmount: number;
  // groupedPots: GropedPotsType[];
  // isEdit: boolean;
  // isModal: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  activePot: GropedPotsType | undefined;
  // handleOpenModal: (value: string) => void;




  activeModalItem: number | null;
  setActiveModalItem: Dispatch<SetStateAction<number | null>>;
  index: number;
  getAllPots: () => void;
};

const PotItem = ({
  isPotPage,
  potName,
  color,
  // amount,
  _id,
  totalSaved,
  percentageSpent,
  potTargetTotalAmount,
  handleClickPots,
  setPotMoney,
  setWithdrawMoney,
  portSpendingTotalAmount,
  setIsEdit,
  activePot,
  // handleOpenModal,
  activeModalItem,
  setActiveModalItem,
  index,
  getAllPots
}: PotItemPropsType) => {
  // console.log(amount);
  const [isDelete, setIsDelete] = useState(false);
  console.log(activePot, "activePot")

  const handleOpenModal = () => {
    setActiveModalItem(
      activeModalItem === null || activeModalItem !== index ? index : null
    );
  };

  return (
    <div className="w-full bg-white rounded-lg pt-6 pb-[38px] px-[20px] flex flex-col gap-y-8 md:px-6 md:pt-6 md:pb-[38px] lg:p-6  lg:w-[49%]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <div
            style={{ backgroundColor: color }}
            className="w-4 h-4 rounded-full"
          ></div>
          <h2 className="text-[20px] font-bold text-[#201F24] capitalize">
            {potName}
          </h2>
        </div>

        <div
          // onClick={() => handleOpenModal(potName)}
          onClick={handleOpenModal}
          className="relative cursor-pointer"
        >
          <DotIcon />

          {activePot?.potName === potName && (
            <ModalItem
              setIsDelete={setIsDelete}
              setIsEdit={setIsEdit}
              // setIsModal={setIsModal}
            />
          )}
        </div>
      </div>

      <div className="flex-flex-col py-[10.5px]">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm text-[#696868] font-normal">Total Saved</h2>
          <p className="text-[#201F24] font-bold text-[32px]">
            $ {totalSaved.toFixed(2)}
          </p>
        </div>

        <div className="mb-[13px] overflow-hidden">
          <ProgressBar
            category={potName}
            groupSpending={portSpendingTotalAmount}
            color={color}
            groupTotalAmount={potTargetTotalAmount}
            // isPotPage={true}
            // portSpendingTotalAmount={portSpendingTotalAmount}
            height={"8px"}
          />
        </div>
        <div className="flex items-center justify-between text-[#696868]  text-xs">
          <h2 className="font-bold ">{percentageSpent.toFixed(2)}%</h2>
          <p className="font-normal">
            Target of ${potTargetTotalAmount.toFixed(2)}
          </p>
        </div>
      </div>

      <div className="w-full flex items-center gap-x-4 lg:flex-row">
        <button
          onClick={() => {
            handleClickPots(_id);
            setPotMoney(true);
            setWithdrawMoney(false);
          }}
          className="w-full lg:w-1/2 py-4 rounded-lg bg-[#F8F4F0]"
        >
          + Add Money
        </button>
        <button
          onClick={() => {
            handleClickPots(_id);
            setWithdrawMoney(true);
            setPotMoney(false);
          }}
          className="w-full lg:w-1/2 py-4 rounded-lg bg-[#F8F4F0]"
        >
          Withdraw
        </button>
      </div>
      {isDelete && (
        <DeleteModal
          setIsDelete={setIsDelete}
          category={potName}
          isPotPage={isPotPage}
          getAllPots={getAllPots}
        />
      )}
    </div>
  );
};

export default PotItem;
