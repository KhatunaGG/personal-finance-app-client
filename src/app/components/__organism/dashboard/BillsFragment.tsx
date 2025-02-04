import { ArrowRight } from "../../__atoms";
import Link from "next/link";
import { RecurringBillsDataType } from "../recurringBills/RecurringBillsSection";

export type BillsFragmentPropsType = {
  recurringBills: RecurringBillsDataType[];
};

const BillsFragment = ({ recurringBills }: BillsFragmentPropsType) => {
  return (
    <section className='bg-white rounded-xl px-[20px] py-6  w-full grid grid-cols-1  gap-8  md:px-0 md:py-0 md:p-6 lg:p-8 "'>
      <div className="w-full flex items-center justify-between">
        <h2 className="font-bold text-[20px] text-[#201F24]">
          Recurring Bills
        </h2>
        <Link
          href={"/bills"}
          className="flex flex-row justify-between items-center gap-3"
        >
          <p>See Details</p>
          <ArrowRight />
        </Link>
      </div>

      <div className="w-full grid grid-cols-1 gap-y-3">
        {recurringBills.map((bill, i) => (
          <div
            key={i}
            className="w-full  grid grid-cols-[5px_1fr] gap-4 bg-[#F8F4F0] rounded-lg  overflow-hidden"
          >
            <div style={{ background: bill.color }}></div>
            <div className="w-full grid grid-cols-2 justify-between py-[20px] pr-4">
              <h2 className="text-[14px] text-[#696868] font-normal">
                {/* Paid Bills */}
                {bill.category}
              </h2>
              <p className="text-right text-[#201F24] text-[14px] font-bold">
                {/* $190.00 */}
                {bill.amount < 0
                  ? `-$${Math.abs(bill.amount).toFixed(2)}`
                  : `$${bill.amount.toFixed(2)}`}
              </p>
            </div>
          </div>
        ))}

        {/* <div className="w-full  grid grid-cols-[5px_1fr] gap-4 bg-[#F8F4F0] rounded-lg  overflow-hidden">
          <div className="h-full bg-[#277C78]  "></div>
          <div className="w-full grid grid-cols-2 justify-between py-[20px] pr-4">
            <h2 className="text-[14px] text-[#696868] font-normal">
              Paid Bills
            </h2>
            <p className="text-right text-[#201F24] text-[14px] font-bold">
              $190.00
            </p>
          </div>
        </div>

        <div className="w-full  grid grid-cols-[5px_1fr] gap-4 bg-[#F8F4F0] rounded-lg  overflow-hidden">
          <div className="h-full bg-[#277C78]  "></div>
          <div className="w-full grid grid-cols-2 justify-between py-[20px] pr-4">
            <h2 className="text-[14px] text-[#696868] font-normal">
              Paid Bills
            </h2>
            <p className="text-right text-[#201F24] text-[14px] font-bold">
              $190.00
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default BillsFragment;
