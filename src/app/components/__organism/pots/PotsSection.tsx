"use client";
import { GlobalContext } from "@/app/context/Context";
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import PotItem from "./PotItem";
import Modal, { PotDataStateType } from "../../__organism/modal/Modal";
import { ColorEnum } from "@/app/schema/schema";
import { usePathname } from "next/navigation";
import useAccessToken from "@/app/hooks/use-toke";
import { axiosInstance } from "@/app/libs/axiosInstance";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import useGroupedPots from "@/app/hooks/use-potGroup";

export type PotsDataType = {
  // id: string;
  potName: string;
  // target: number;
  amount: number;
  color: ColorEnum;
  _id: string;
  setPotMoney: Dispatch<SetStateAction<boolean>>;
};

const PotsSection = () => {
  const context = useContext(GlobalContext);
  const [potsData, setPotsData] = useState<PotsDataType[]>([]);
  const [isEdit, setIsEdit] = useState(false);
  const { accessToken, isLoading } = useAccessToken();
  const path = usePathname();
  const isPotPage = path.includes("pots");
  const [potMoney, setPotMoney] = useState(false);
  const [activePotModal, setActivePotModal] = useState<PotDataStateType | null>(
    null
  );
  const groupedPots = useGroupedPots(potsData);

  useEffect(() => {
    getAllPots();
  }, []);

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
    return <div>Loading...</div>;
  }

  const handleAddMoney = async (id: string) => {
    setIsModal(true);
    setPotMoney(true);

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
  };

  return (
    <section className="w-full h-full min-h-screen">
      {isModal && isPotPage && (
        <Modal
          setIsModal={setIsModal}
          potsData={potsData}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          isPotPage={true}
          getAllPots={getAllPots}
          potMoney={potMoney}
          setPotMoney={setPotMoney}
          activePotModal={activePotModal}
          setActivePotModal={setActivePotModal}
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
                // target={pot.target}
                color={pot.color}
                _id={pot._id}
                handleAddMoney={handleAddMoney}
                potsData={potsData}
                totalSaved={pot.totalSaved}
                percentageSpent={pot.percentageSpent}
                potTargetTotalAmount={pot.potTargetTotalAmount}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default PotsSection;
