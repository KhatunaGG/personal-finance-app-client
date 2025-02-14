import { RecurringBillsDataType } from "./RecurringBillsSection";
import { RecurringBillsIcon } from "../../__atoms";

export type SummeryPropsType = {
  recurringBillsData: RecurringBillsDataType[] | undefined;
};

const Summary = ({ recurringBillsData }: SummeryPropsType) => {
  const result = recurringBillsData?.reduce(
    (acc, item) => {
      if (item.status === "dueSoon") {
        acc.dueSoonTotal += Math.abs(item.amount);
        acc.dueSoonLength += 1;
      } else if (item.status === "upcoming") {
        acc.upcomingTotal += Math.abs(item.amount);
        acc.upcomingLength += 1;
      } else if (item.status === "paid") {
        acc.paidTotal += Math.abs(item.amount);
        acc.paidLength += 1;
      }
      acc.recurringBillsDataTotal += Math.abs(item.amount);
      return acc;
    },
    {
      dueSoonTotal: 0,
      dueSoonLength: 0,
      upcomingTotal: 0,
      upcomingLength: 0,
      paidTotal: 0,
      paidLength: 0,
      recurringBillsDataTotal: 0,
    }
  );

  const {
    dueSoonTotal = 0,
    dueSoonLength = 0,
    upcomingTotal = 0,
    upcomingLength = 0,
    paidTotal = 0,
    paidLength = 0,
    recurringBillsDataTotal = 0,
  } = result || {};

  return (
    <div className="LEFT flex flex-col gap-3 md:flex-row md:gap-6 lg:flex-col w-full lg:w-[32.52%]">
      <div className="bg-[#201F24] text-white rounded-xl md:w-1/2 lg:w-full pt-[38px] px-6 pb-6 flex flex-row gap-[20px] items-center md:flex-col md:gap-8 md:items-start">
        <RecurringBillsIcon />
        <div>
          <p className="text-sm font-normal">Total Bills</p>
          <h2 className="text-[32px] font-bold">
            ${recurringBillsDataTotal.toFixed(2)}
          </h2>
        </div>
      </div>

      <div className="rounded-lg md:w-1/2 lg:w-full bg-white p-[20px]">
        <h3 className="text-base font-bold mb-[20px]">Summary</h3>
        <div className="w-full flex flex-row items-center justify-between">
          <p className="text-sm font-normal text-[#696868] w-[65%]">
            Paid Bills
          </p>
          <p className="text-xs font-bold text-[#201F24] w-[35%] text-right">
            {paidLength} (${paidTotal.toFixed(2)})
          </p>
        </div>
        <div className="h-[1px] w-full bg-[#69686826] my-4"></div>
        <div className="flex flex-row items-center justify-between">
          <p className="text-sm font-normal text-[#696868] w-[65%]">
            Upcoming Bills
          </p>
          <p className="text-xs font-bold text-[#201F24] w-[35%] text-right">
            {upcomingLength} (${upcomingTotal.toFixed(2)})
          </p>
        </div>
        <div className="h-[1px] w-full bg-[#69686826] my-4"></div>
        <div className="flex flex-row items-center justify-between">
          <p className="text-sm font-normal text-[#C94736] w-[65%]">Due Soon</p>
          <p className="text-xs font-bold text-[#C94736] w-[35%] text-right">
            {dueSoonLength} (${dueSoonTotal.toFixed(2)})
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
