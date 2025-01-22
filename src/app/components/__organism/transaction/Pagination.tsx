import React from "react";
import { ArrowLeft, ArrowRight } from "../../__atoms";

const Pagination = () => {
  return (
    <div className="PAGINATION w-full flex pt-6 items-center justify-between">
      <button className="flex items-center gap-4 py-3 px-4 border border-[#98908B] rounded-lg">
        <ArrowLeft />
        <p className="text-[#201F24] text-sm font-normal">Prev</p>
      </button>

      <div className="flex items-center gap-2">
        <button className="py-[9.5px] px-[17px] border border-[#98908B] rounded-lg text-[#201F24] text-sm font-normal">
          1
        </button>
        <button className="py-[9.5px] px-[17px] border border-[#98908B] rounded-lg text-[#201F24] text-sm font-normal">
          1
        </button>
        <button className="py-[9.5px] px-[17px] border border-[#98908B] rounded-lg text-[#201F24] text-sm font-normal">
          1
        </button>
      </div>

      <button className="flex items-center gap-4 py-3 px-4 border border-[#98908B] rounded-lg">
        <p className="text-[#201F24] text-sm font-normal">Next</p>
        <ArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
