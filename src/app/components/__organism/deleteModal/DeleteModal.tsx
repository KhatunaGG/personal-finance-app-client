"use client";
import { CloseIcon } from "../../__atoms";
import { Dispatch, SetStateAction } from "react";
import useAccessToken from "@/app/hooks/use-toke";
import { axiosInstance } from "@/app/libs/axiosInstance";

export type DeleteModalPropsType = {
  setIsDelete: Dispatch<SetStateAction<boolean>>;
  setIsModal: Dispatch<SetStateAction<boolean>>;
  category: string;
  getBudgets: () => void;
};

const DeleteModal = ({
  setIsDelete,
  category,
  getBudgets,
}: DeleteModalPropsType) => {
  const { accessToken } = useAccessToken();

  const deleteCategory = async (category: string) => {
    console.log(category, "category for deleting");
    try {
      const res = await axiosInstance.delete(`/budgets/category/${category}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (res.status === 200 || res.status === 201) {
        setIsDelete(false);
        getBudgets();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="absolute inset-0 bg-black/20 w-full h-full z-20 ">
      <div className="w-full h-screen flex items-center justify-center">
        <div className=" w-[89.33%] md:max-w-[560px] md:w-[72.91%] lg:w-[38.88%] bg-white rounded-lg p-8 flex flex-col gap-[20px]  ">
          <div className="TITLE w-full flex items-center justify-between">
            <h1 className="text-[#201F24] text-[32px] font-bold">
              Delete {`"${category}"`}?
            </h1>
            <CloseIcon setIsDelete={setIsDelete} />
          </div>

          <div className="TEXT  ">
            <p className="text-[#696868] text-2xl md:text-[14px] leading-[21px] font-normal">
              Are you sure you want to delete this budget? This action cannot be
              reversed, and all the data inside it will be removed forever.
            </p>
          </div>

          <button
            onClick={() => deleteCategory(category)}
            className="text-sm font-bold text-white bg-[#C94736] rounded-lg py-4"
          >
            Yes, Confirm Deletion
          </button>

          <button
            onClick={() => {
              setIsDelete(false);
            }}
            className="text-sm font-bold text-[#696868] bg-transparent"
          >
            No, Go Back
          </button>
        </div>
      </div>
    </section>
  );
};

export default DeleteModal;