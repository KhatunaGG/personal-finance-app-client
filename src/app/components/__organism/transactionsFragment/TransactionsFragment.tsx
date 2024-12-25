"use client";
import { ArrowRight } from "../../__atoms";
import Link from "next/link";
import Image from "next/image";

const TransactionsFragment = () => {
  return (
    <section className="bg-white rounded-xl px-[20px] py-6 h-full w-full  md:p-6 lg:p-8 flex flex-col  gap-y-[20px]">
      <div className="w-full flex items-center justify-between">
        <h2 className="font-bold text-[20px] text-[#201F24]">Transactions</h2>
        <Link
          href={"/transactions"}
          className="flex flex-row items-center gap-3"
        >
          <p className="text-[14px] text-[#696868] font-normal">See Details</p>
          <ArrowRight />
        </Link>
      </div>

      <div className=" grid grid-cols-1 py-[20px]  ">
        <div className="w-full grid grid-cols-[70%_30%] md:grid-cols-2   py-[20px]  border-b-[1px] border-b-[#F2F2F2]">
          <div className="flex flex-row items-center gap-4">
            <div className="relative w-8 h-8 md:w-[40px] md:h-[40px] rounded-full overflow-hidden object-cover">
              <Image
               className="absolute inset-0 w-full h-full object-cover"
                src={"/assets/images/Person-1.jpg"}
                fill
                alt={""}
              />
            </div>
            <p className="text-[14px] font-bold">Emma Richardson</p>
          </div>

          <div className="flex flex-col gap-y-2 text-right">
            <p className="text-[14px] font-bold">+$75.50</p>
            <p className="text-[12px] text-[#696868] font-normal">19 Aug 2024</p>
          </div>
        </div>




        <div className="w-full grid grid-cols-[70%_30%] md:grid-cols-2     py-[20px]  border-b-[1px] border-b-[#F2F2F2]">
          <div className="flex flex-row items-center gap-4">
            <div className="relative w-8 h-8 md:w-[40px] md:h-[40px] rounded-full overflow-hidden object-cover">
              <Image
               className="absolute inset-0 w-full h-full object-cover"
                src={"/assets/images/Person-1.jpg"}
                fill
                alt={""}
              />
            </div>
            <p className="text-[14px] font-bold">Emma Richardson</p>
          </div>

          <div className="flex flex-col gap-y-2 text-right">
            <p className="text-[14px] font-bold">+$75.50</p>
            <p className="text-[12px] text-[#696868] font-normal">19 Aug 2024</p>
          </div>
        </div>





      </div>







    </section>
  );
};

export default TransactionsFragment;
