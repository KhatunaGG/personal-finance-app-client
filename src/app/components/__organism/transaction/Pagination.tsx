"use client";
import { ArrowLeft, PaginationArrowRight } from "../../__atoms";

export type PaginationPropsType = {
  currentPage: number;
  totalPages: number;
  handlePrevPage: () => void;
  handleNextPage: () => void;
  setCurrentPage: (page: number) => void;
};

const Pagination = ({ currentPage, handleNextPage, handlePrevPage, totalPages, setCurrentPage }: PaginationPropsType) => {

  console.log(totalPages, "totalPages from Pagination")


  return (
    <div className="PAGINATION w-full flex pt-6 items-center justify-between">
      <button
        onClick={handlePrevPage}
        className="flex items-center gap-4 py-3 px-4 border border-[#98908B] rounded-lg"
      >
        <ArrowLeft />
        <p className="hidden text-[#201F24] text-sm font-normal md:flex">
          Prev
        </p>
      </button>

      <div className="flex items-center gap-2">
      {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`py-[9.5px] px-[17px] border border-[#98908B] rounded-lg text-[#201F24] text-sm font-normal ${currentPage === index + 1 ? "bg-[#201F24] text-white" : ""}`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <button
        onClick={handleNextPage}
        className="flex items-center gap-4 py-3 px-4 border border-[#98908B] rounded-lg"
      >
        <p className="hidden text-[#201F24] text-sm font-normal md:flex">
          Next
        </p>
        <PaginationArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
