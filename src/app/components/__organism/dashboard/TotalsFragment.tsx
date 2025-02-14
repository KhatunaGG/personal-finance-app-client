"use client";
import useAccessToken from "@/app/hooks/use-toke";
import { axiosInstance } from "@/app/libs/axiosInstance";
import { useEffect, useState } from "react";
import { TransactionType } from "../transaction/TransactionSection";
import { Loading } from "../../__molecules";

const TotalsFragment = () => {
  const { accessToken, isLoading } = useAccessToken();
  const [allData, setAllData] = useState<TransactionType[]>([]);
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);

  const calculateAllResourcesAmounts = async () => {
    try {
      const res = await axiosInstance.get("budgets/resources", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (res?.status >= 200 && res?.status <= 204) {
        if (Array.isArray(res.data)) {
          setAllData(res.data);
        } else {
          setAllData([]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (accessToken) {
      calculateAllResourcesAmounts();
    }
  }, [accessToken]);

  useEffect(() => {
    if (Array.isArray(allData) && allData.length > 0) {
      const totalIncome = allData.reduce((acc, entry) => {
        if (entry.amount > 0) acc += entry.amount;
        return acc;
      }, 0);

      const totalExpenses = allData.reduce((acc, entry) => {
        if (entry.amount < 0) acc += entry.amount;
        return acc;
      }, 0);

      setIncome(totalIncome);
      setExpenses(totalExpenses);
    } else {
      setIncome(0);
      setExpenses(0);
    }
  }, [allData]);

  if (!accessToken) return;
  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-y-3 md:gap-x-6">
      <div className="flex flex-col gap-3 items-start p-6 rounded-lg bg-[#201F24]">
        <p className="text-[14px] font-normal text-[#696868]">
          Current Balance
        </p>
        <p className=" font-bold text-[32px] text-white">
          ${(income + expenses).toFixed(2)}
        </p>
      </div>

      <div className="flex flex-col gap-3 items-start p-6 rounded-lg bg-white">
        <p className="text-[14px] font-normal text-[#696868]">Income</p>
        <p className="text-[#201F24] font-bold text-[32px] ">
          ${income.toFixed(2)}
        </p>
      </div>

      <div className="flex flex-col gap-3 items-start p-6 rounded-lg bg-white">
        <p className="text-[14px] font-normal text-[#696868]">Expenses</p>
        <p className="text-[#201F24] font-bold text-[32px] ">
          ${Math.abs(expenses).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default TotalsFragment;
