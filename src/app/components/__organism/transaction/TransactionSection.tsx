"use client";
// import Image from "next/image";
import { ArrowLeft, ArrowRight, SearchIcon } from "../../__atoms";
import { usePathname } from "next/navigation";
import SortBySection from "./SortBySection";
import SortByCategorySection from "./SortByCategorySection";
import TransactionItem from "./TransactionItem";

const TransactionSection = () => {
  const path = usePathname();
  const isTransactionPage = path.includes("transaction");
  console.log(isTransactionPage, "isTransactionPage");
  return (
    <section className="w-full h-full min-h-screen ">
      <div className="w-full h-full pt-8 pb-[105px] md:pb-[113px] lg:py-8 px-4 md:px-10 lg:px-6 flex flex-col items-start justify-start gap-8">
        <h1 className="w-full text-left text-[32px] text-[#201F24] font-bold">
          Transactions
        </h1>

        <div className="w-full min-h-screen p-8 bg-white flex flex-col gap-6 rounded-lg">
          <div className="FILTER flex items-center justify-between ">
            <div className="w-full relative border border-[#98908B] pl-[20px] py-3 md:w-[23.54%] lg:w-[30.18%] overflow-hidden rounded-md">
              <input
                type="text"
                className="w-full bg-transparent border-none focus:outline-none"
                placeholder="Search transaction"
              />
              <SearchIcon />
            </div>

            <div className="flex items-center gap-6  ">
              <SortBySection />
              <SortByCategorySection />
            </div>
          </div>

          <div className=" w-full flex items-center justify-between py-3 border-b border-b-[#F2F2F2] md:gap-[3.31%] text-xs text-[#696868] font-normal">
            <div className="md:w-[60.16%] grid grid-cols-[1fr, 120px] md:gap-x-4">
              <div className="flex items-center justify-between">
                <p className="">Category</p>
                <p className="md:w-[80px] lg:w-[120px]">Recurring Bills</p>
              </div>
            </div>

            <div className=" md:w-[36.51%] flex items-center justify-between">
              <p className="">Transaction Date</p>
              <p className="">Amount</p>
            </div>
          </div>

          <div className="BODY w-full min-h-[calc(100vh-315.20px)] flex items-center flex-col   px-4 rounded-lg">
            <TransactionItem />
            <TransactionItem />

          </div>

          <div className="PAGINATION w-full flex pt-6 items-center justify-between">
            <button className="flex items-center gap-4 py-3 px-4 border border-[#98908B] rounded-lg">
              <ArrowLeft />
              <p className="text-[#201F24] text-sm font-normal">Prev</p>
            </button>

            <div className="flex items-center gap-2">
              <button className="py-[9.5px] px-[17px] border border-[#98908B] rounded-lg text-[#201F24] text-sm font-normal">1</button>
              <button className="py-[9.5px] px-[17px] border border-[#98908B] rounded-lg text-[#201F24] text-sm font-normal">1</button>
              <button className="py-[9.5px] px-[17px] border border-[#98908B] rounded-lg text-[#201F24] text-sm font-normal">1</button>

            </div>


            <button className="flex items-center gap-4 py-3 px-4 border border-[#98908B] rounded-lg">
              <p className="text-[#201F24] text-sm font-normal">Nest</p>
              <ArrowRight />
            </button>
          </div>


        </div>
      </div>
    </section>
  );
};

export default TransactionSection;
