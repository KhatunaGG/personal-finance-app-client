// "use client";
// import { ArrowLeft, PaginationArrowRight } from "../../__atoms";

// export type PaginationPropsType = {
//   currentPage: number;
//   totalPages: number;
//   handlePrevPage: () => void;
//   handleNextPage: () => void;
//   setCurrentPage: (page: number) => void;
// };

// const Pagination = ({ currentPage, handleNextPage, handlePrevPage, totalPages, setCurrentPage }: PaginationPropsType) => {

//   console.log(totalPages, "totalPages from Pagination")

//   return (
//     <div className="PAGINATION w-full flex mb-6 px-4  items-center justify-between md:mb-0 md:px-0">
//       <button
//         onClick={handlePrevPage}
//         className="flex items-center gap-4 py-3 px-4 border border-[#98908B] rounded-lg"
//       >
//         <ArrowLeft />
//         <p className="hidden text-[#201F24] text-sm font-normal md:flex">
//           Prev
//         </p>
//       </button>

//       <div className="flex items-center gap-2">
//       {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             key={index}
//             className={`py-[9.5px] px-[17px] border border-[#98908B] rounded-lg text-[#201F24] text-sm font-normal ${currentPage === index + 1 ? "bg-[#201F24] text-white" : ""}`}
//             onClick={() => setCurrentPage(index + 1)}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>

//       <button
//         onClick={handleNextPage}
//         className="flex items-center gap-4 py-3 px-4 border border-[#98908B] rounded-lg"
//       >
//         <p className="hidden text-[#201F24] text-sm font-normal md:flex">
//           Next
//         </p>
//         <PaginationArrowRight />
//       </button>
//     </div>
//   );
// };

// export default Pagination;













"use client";
import { ArrowLeft, PaginationArrowRight } from "../../__atoms";

export type PaginationPropsType = {
  currentPage: number;
  totalPages: number;
  handlePrevPage: () => void;
  handleNextPage: () => void;
  setCurrentPage: (page: number) => void;
};

const Pagination = ({
  currentPage,
  handleNextPage,
  handlePrevPage,
  totalPages,
  setCurrentPage,
}: PaginationPropsType) => {
  
  const getPaginationButtons = () => {
    let buttons: (number | string)[] = [];
    if (totalPages <= 4) {
      buttons = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      if (currentPage <= 3) {
        buttons = [1, 2, 3, 4];
      } else if (currentPage > totalPages - 4) {
        buttons = [totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
      } else {
        buttons = [currentPage - 1, currentPage, currentPage + 1, currentPage + 2];
      }
    }

    return buttons;
  };

  const renderButtons = () => {
    const buttons = getPaginationButtons();

    return buttons.map((button, index) => (
      <button
        key={index}
        className={`py-[9.5px] px-[17px] border border-[#98908B] rounded-lg text-[#201F24] text-sm font-normal ${
          currentPage === button ? "bg-[#201F24] text-white" : ""
        }`}
        onClick={() => button !== "..." && setCurrentPage(button as number)}
        disabled={typeof button === "string"}
      >
        {button}
      </button>
    ));
  };

  return (
    <div className="PAGINATION w-full flex mb-6 px-4 items-center justify-between md:mb-0 md:px-0">
      <button
        onClick={handlePrevPage}
        className="flex items-center gap-4 py-3 px-4 border border-[#98908B] rounded-lg"
      >
        <ArrowLeft />
        <p className="hidden text-[#201F24] text-sm font-normal md:flex">
          Prev
        </p>
      </button>

      <div className="flex items-center gap-2">{renderButtons()}</div>

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
