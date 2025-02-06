"use client";
import { GlobalContext } from "@/app/context/Context";
import { useContext, useEffect, useState } from "react";

import Modal, { PotDataStateType } from "../../__organism/modal/Modal";
import { ColorEnum } from "@/app/schema/schema";
import { usePathname } from "next/navigation";
import useAccessToken from "@/app/hooks/use-toke";
import { axiosInstance } from "@/app/libs/axiosInstance";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import useGroupedPots from "@/app/hooks/use-potGroup";
import PotModal from "./PotModal";
import PotItem from "./PotItem";

export type PotsDataType = {
  potName: string;
  amount: number;
  color: ColorEnum;
  _id: string;
  createdAt: string;
  updatedAd: string;

  resource?: string

  checkId: string
};

export type GropedPotsType = {
  potName: string;
  amount: number;
  color: string;
  _id: string;
  potTargetTotalAmount: number;
  portSpendingTotalAmount: number;
  totalSaved: number;
  percentageSpent: number;



};

const PotsSection = () => {
  const context = useContext(GlobalContext);
  const [potsData, setPotsData] = useState<PotsDataType[]>([]);
  const [isEdit, setIsEdit] = useState(false);
  const { accessToken, isLoading } = useAccessToken();
  const path = usePathname();
  const isPotPage = path.includes("pots");
  const [potMoney, setPotMoney] = useState(false);
  const [withdrawMoney, setWithdrawMoney] = useState(false);
  const [activePotModal, setActivePotModal] = useState<PotDataStateType | null>(
    null
  );
  const groupedPots = useGroupedPots(potsData);
  const [activePot, setActivePot] = useState<GropedPotsType | undefined>(
    undefined
  );
  const [activeModalItem, setActiveModalItem] = useState<number | null>(null);

  useEffect(() => {
    if (activeModalItem !== null) {
      setActivePot(groupedPots[activeModalItem]);
    } else {
      setActivePot(undefined);
    }
  }, [activeModalItem, groupedPots]);

  useEffect(() => {
    getAllPots();
  }, [potMoney, withdrawMoney]);

  const getAllPots = async () => {
    try {
      const res = await axiosInstance.get("/pot", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setPotsData(res.data);
    } catch (error) {
      console.log(error);
    }
  };


  if (!context) return null;
  const { isModal, setIsModal } = context;

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  const handleClickPots = async (id: string) => {
    try {
      try {
        const res = await axiosInstance.get(`/pot/${id}`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        setActivePotModal(res.data);
      } catch (error) {
        const errorMessage =
          error instanceof AxiosError && error.response
            ? error.response.data.message
            : "An unexpected error occurred. Please try again.";
        toast.error(errorMessage);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="w-full h-full min-h-screen">
      {(withdrawMoney || potMoney) && (
        <PotModal
          potMoney={potMoney}
          withdrawMoney={withdrawMoney}
          setWithdrawMoney={setWithdrawMoney}
          setPotMoney={setPotMoney}
          activePotModal={activePotModal}
          setActivePotModal={setActivePotModal}
          potsData={potsData}
        />
      )}

      {isModal && isPotPage && (
        <Modal
          setIsModal={setIsModal}
          potsData={potsData}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          isPotPage={true}
          getAllPots={getAllPots}
          activePotModal={activePotModal}
          setActivePotModal={setActivePotModal}
          groupedPots={groupedPots}
          activePot={activePot}
          setActivePot={setActivePot}
        />
      )}

      <div className="w-full h-full min-h-screen flex flex-col gap-y-8 pt-6 px-4 pb-[105px] md:pb-[113px] md:px-8 md:pt-8 lg:p-8 ">
        <div className="w-full flex flex-row items-center justify-between">
          <h1 className="w-full text-left text-[32px] text-[#201F24] font-bold">
            Pots
          </h1>
          <button
            onClick={() => {
              setIsModal(true);
            }}
            className="bg-[#201F24] rounded-lg text-white text-[14px] font-bold text-right p-4 whitespace-nowrap"
          >
            + Add New Pot
          </button>
        </div>

        <div className="w-full flex flex-col gap-y-6  lg:flex-row lg:justify-between  lg:flex-wrap">
          {groupedPots.length > 0 &&
            groupedPots.map((pot, i) => (
              <PotItem
                key={i}
                isPotPage={isPotPage}
                potName={pot.potName}
                amount={pot.amount}
                color={pot.color}
                _id={pot._id}
                potsData={potsData}
                totalSaved={pot.totalSaved}
                percentageSpent={pot.percentageSpent}
                potTargetTotalAmount={pot.potTargetTotalAmount}
                handleClickPots={handleClickPots}
                setPotMoney={setPotMoney}
                setWithdrawMoney={setWithdrawMoney}
                portSpendingTotalAmount={pot.portSpendingTotalAmount}
                setIsEdit={setIsEdit}
                activePot={activePot}
                setIsModal={setIsModal}
                index={i}
                activeModalItem={activeModalItem}
                setActiveModalItem={setActiveModalItem}
                getAllPots={getAllPots}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default PotsSection;
