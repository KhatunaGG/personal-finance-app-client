import React, { Dispatch, SetStateAction } from "react";

export type ModalItemPropsType = {
  setIsDelete: Dispatch<SetStateAction<boolean>>;
  setIsModalItem: Dispatch<SetStateAction<boolean>>;
};

const ModalItem = ({ setIsDelete, setIsModalItem }: ModalItemPropsType) => {
  return (
    <section className="max-w-[134px] w-[134px] bg-white rounded-lg absolute top-3 left-[-120px] py-3 px-[20px] flex flex-col items-start z-40 shadow-lg">
      <div className="border-b border-b-[#F2F2F2] w-full">
        <button className="text-[#201F24] text-sm font-normal mb-3">
          Edit Budget
        </button>
      </div>

      <button
        onClick={() => {
          setIsDelete(true);
          setIsModalItem(false);
        }}
        className="text-[#C94736] text-sm font-normal mt-3"
      >
        Delete Budget
      </button>
    </section>
  );
};

export default ModalItem;