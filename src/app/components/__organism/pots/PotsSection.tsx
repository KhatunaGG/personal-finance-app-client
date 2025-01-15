"use client";
import { GlobalContext } from "@/app/context/Context";
import { useContext, useEffect, useState } from "react";
import PotItem from "./PotItem";
import Modal from "../../__organism/modal/Modal";
import { ColorEnum } from "@/app/schema/schema";
import { usePathname } from "next/navigation";
import useAccessToken from "@/app/hooks/use-toke";
import { axiosInstance } from "@/app/libs/axiosInstance";

export type PotsDataType = {
  id: string;
  potName: string;
  target: number;
  amount: number;
  color: ColorEnum;
};

const PotsSection = () => {
  const context = useContext(GlobalContext);
  const [isPot, setIsPot] = useState(false);
  const [potsData, setPotsData] = useState<PotsDataType[]>([]);
  const [isEdit, setIsEdit] = useState(false);
  const [activeModalItem, setActiveModalItem] = useState<number | null>(null);
  const { accessToken, isLoading } = useAccessToken();
  const path = usePathname();
  const isPotPage = path.includes("pots");
  console.log(activeModalItem, "activeModalItem")


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

  return (
    <section className="w-full h-full min-h-screen">
      {isModal && isPot && (
        <Modal
          setIsModal={setIsModal}
          potsData={potsData}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          setActiveModalItem={setActiveModalItem}
          isPotPage={true}
          getAllPots={getAllPots}
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
              setIsPot(true);
            }}
            className="bg-[#201F24] rounded-lg text-white text-[14px] font-bold text-right p-4 whitespace-nowrap"
          >
            + Add New Pot
          </button>
        </div>

        <div className="w-full flex flex-col gap-y-6  lg:flex-row lg:justify-between  lg:flex-wrap">
          {potsData.length > 0 &&
            potsData.map((pot, i) => (
              <PotItem
                key={i}
                isPotPage={isPotPage}
                potName={pot.potName}
                amount={pot.amount}
                target={pot.target}
                color={pot.color}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default PotsSection;
