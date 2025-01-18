"use client";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { PotDataStateType } from "../modal/Modal";
import { CloseIcon } from "../../__atoms";
import useGroupedPots from "@/app/hooks/use-potGroup";
import { PotsDataType } from "./PotsSection";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import { axiosInstance } from "@/app/libs/axiosInstance";
import useAccessToken from "@/app/hooks/use-toke";
import { ProgressBar } from "../../__molecules";
import { ColorEnum } from "@/app/schema/schema";

export type PotModalPropsType = {
  setPotMoney: Dispatch<SetStateAction<boolean>>;
  potMoney: boolean;
  setWithdrawMoney: Dispatch<SetStateAction<boolean>>;
  withdrawMoney: boolean;
  activePotModal: PotDataStateType | null;
  setActivePotModal: Dispatch<SetStateAction<PotDataStateType | null>>;
  potsData: PotsDataType[];
};

export type MoneyEditType = {
  amount: number;
};

export type FilteredGropedDataType =
  | {
      potName: string;
      amount: number;
      color: ColorEnum;
      _id: string;
      potTargetTotalAmount: number;
      portSpendingTotalAmount: number;
      totalSaved: number;
      percentageSpent: number;
    }
  | undefined;

export const moneySchema = Yup.object().shape({
  amount: Yup.number().required("Amount is required"),
});

const PotModal = ({
  setPotMoney,
  potMoney,
  setWithdrawMoney,
  activePotModal,
  setActivePotModal,
  potsData,
  withdrawMoney,
}: PotModalPropsType) => {
  const { accessToken, isLoading } = useAccessToken();
  const groupedPots = useGroupedPots(potsData);
  const filteredGropedData = groupedPots.find(
    (item) => item.potName === activePotModal?.potName
  );

  const [input, setInput] = useState('')
  console.log(input, "input from POTMODAL")

  console.log(filteredGropedData, "filteredGropedData from POTMODAL");
  console.log(potsData, "potsData from POTMODAL")

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<MoneyEditType>({
    resolver: yupResolver(moneySchema),
  });

  const onSubmit = async (formData: MoneyEditType) => {
    try {
      if (potMoney && formData.amount <= 0) {
        toast.error("Amount should be greater than zero.");
        return;
      }

      if (withdrawMoney && formData.amount >= 0) {
        toast.error("Amount should be less than zero.");
        return;
      }

      if (
        withdrawMoney &&
        filteredGropedData &&
        filteredGropedData?.totalSaved < Math.abs(formData.amount)
      ) {
        toast.error("Not enough amount available...");
        return;
      }

      const newFormData = {
        category: filteredGropedData?.potName,
        amount: formData.amount,
        color: filteredGropedData?.color,
      };

      const res = await axiosInstance.post("/pot", newFormData, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      if (res.status === 200 || res.status === 201 || res.status === 204) {
        setActivePotModal(null);
        setPotMoney?.(false);
        setWithdrawMoney?.(false);
        reset();
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-[89.33%] md:max-w-[560px] md:w-[72.91%] lg:w-[38.88%] bg-white rounded-lg py-6 px-[20px] md:p-8 flex flex-col gap-[20px]">
        <div className="TITLE w-full flex items-center justify-between">
          <h1 className="text-[#201F24] text-[20px] md:text-[32px] font-bold capitalize">
            {potMoney
              ? `Add to "${activePotModal?.potName}"`
              : `Withdraw from "${activePotModal?.potName}"`}
          </h1>

          <CloseIcon
            setPotMoney={setPotMoney}
            setWithdrawMoney={setWithdrawMoney}
            setActivePotModal={setActivePotModal}
          />
        </div>

        <div className="TEXT  ">
          <p className="text-[#696868] text-[14px] leading-[21px] font-normal">
            {potMoney
              ? "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus  hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet."
              : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus  hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet."}
          </p>
        </div>

        <div className="flex-flex-col py-[10.5px]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm text-[#696868] font-normal">New Amount</h2>
            <p className="text-[#201F24] font-bold text-[32px]">
              {/* $ {filteredGropedData?.totalSaved.toFixed(2)} */}
              $ { (Number(input) || 0).toFixed(2) }
            </p>
          </div>

          <div className="mb-[13px] overflow-hidden">
            <ProgressBar
              // category={filteredGropedData?.potName}
              // groupSpending={filteredGropedData?.portSpendingTotalAmount ?? 0}
              // color={filteredGropedData?.color}
              // groupTotalAmount={filteredGropedData?.totalSaved}
              // groupTarget={filteredGropedData?.potTargetTotalAmount}
              isPotPage={true}
              filteredGropedData={filteredGropedData}
              withdrawMoney={withdrawMoney}
              potMoney={potMoney}
              input={input}
            />
          </div>
          <div className="flex items-center justify-between text-[#696868]  text-xs">
            <h2 className="font-bold ">
              {filteredGropedData?.percentageSpent.toFixed(2) || 0.0}%
            </h2>
            <p className="font-normal">
              Target of ${filteredGropedData?.potTargetTotalAmount.toFixed(2)}
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full relative flex flex-col gap-[20px]"
        >
          <div className="w-full flex flex-col">
            <div className="w-full flex flex-col gap-1">
              <label
                htmlFor="amount"
                className="w-full text-xs text-[#696868] font-bold"
              >
                {potMoney ? "Amount to Add" : "Amount to Withdraw"}
              </label>
            </div>
            <div className="border border-[#98908B] px-[20px] py-3 flex items-center justify-between gap-4 rounded-lg">
              <input
                type="text"
                className="w-full text-#201F24 text-2xl md:text-[14px] leading-[21px] font-normal outline-none border-none"
                placeholder="Amount"
                {...register("amount")}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
              />
              {errors.amount && (
                <span className="absolute bottom-[-18px] right-[5px] italic text-[#CD2C2C] font-medium text-[12px] tracking-[-0.21px] rounded-md">
                  {errors.amount.message}
                </span>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#201F24] rounded-lg text-white font-bold text-sm py-4"
          >
            {potMoney ? "Confirm Addition" : "Confirm Withdrawal"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PotModal;
