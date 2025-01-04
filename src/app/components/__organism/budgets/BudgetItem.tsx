import { ProgressBar } from "../../__molecules";
import { ArrowRight, DotIcon } from "../../__atoms";
import Link from "next/link";
import { DataType } from "@/app/interfaces/interface";
import LatestSpending from "./LatestSpending";
import useLatestSpendingData from "@/app/hooks/use-latestSpending";

export type BudgetItemPropsType = {
  category: string;
  groupSpending: number;
  // logo: string;
  color: string;
  groupTotalAmount: number;
  data: DataType[];
};

const BudgetItem = ({
  category,
  // logo,
  groupSpending,
  color,
  groupTotalAmount,
  data,
}: BudgetItemPropsType) => {
  const remaining = groupTotalAmount - Math.abs(groupSpending);
  const { latestSpendingData, isLastEl } = useLatestSpendingData(
    data,
    category
  );

  // const latestSpending = data
  //   .filter((item) => item.category === category)
  //   .filter((item) => item.amount < 0);
  // const latestSpendingData =
  //   latestSpending.length < 3
  //     ? latestSpending
  //     : latestSpending.slice(latestSpending.length - 3);

  //     const isLastEl = latestSpendingData.length - 1;

  return (
    <div className="py-6 px-[20px] md:p-8 rounded-lg bg-white flex flex-col gap-y-[20px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <div
            style={{ backgroundColor: color }}
            className="w-4 h-4 rounded-full"
          ></div>
          <h2 className="text-[20px] font-bold text-[#201F24]">{category}</h2>
        </div>
        <DotIcon />
      </div>

      <div className="flex flex-col gap-y-4">
        <p className="text-[14px] font-normal text-[#696868]">
          Maximum of ${groupTotalAmount.toFixed(2)}
        </p>
        <div className="SLIDER w-full">
          <ProgressBar
            category={category}
            groupSpending={groupSpending}
            color={color}
            groupTotalAmount={groupTotalAmount}
          />
        </div>

        <div className="flex items-center justify-start">
          <div className="flex flex-row gap-4 w-1/2">
            {/* <div className="w-[5px] bg-[#277C78] h-full min-h-[43px] rounded-sm"></div> */}
            <div
              className="w-[5px] h-full min-h-[43px] rounded-sm"
              style={{ backgroundColor: color }}
            ></div>
            <div className="flex flex-col items-start justify-center gap-1">
              <p className="text-[12px] font-normal text-[#696868]">Spent</p>
              <p className="text-[#201F24] font-bold text-[14px]">
                $
                {groupSpending < 0
                  ? Math.abs(groupSpending).toFixed(2)
                  : "0.00"}
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-4  w-1/2">
            <div className="w-[5px] bg-[#F8F4F0] h-full min-h-[43px] rounded-sm"></div>
            <div className="flex flex-col items-start justify-center gap-1">
              <p className="text-[12px] font-normal text-[#696868]">
                Remaining
              </p>
              <p className="text-[#201F24] font-bold text-[14px] ">
                $
                {groupSpending < groupTotalAmount
                  ? remaining.toFixed(2)
                  : "0.00"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-[#F8F4F0] rounded-xl p-[20px]  h-full w-full   flex flex-col  gap-y-[20px]">
        <div className="w-full flex items-center justify-between">
          <h2 className="font-bold text-[20px] text-[#201F24]">
            Latest Spending
          </h2>
          <Link
            href={"/transactions"}
            className="flex flex-row items-center gap-3"
          >
            <p className="text-[14px] text-[#696868] font-normal">See All</p>
            <ArrowRight />
          </Link>
        </div>

        <div className=" grid grid-cols-1   ">
          {latestSpendingData.map((spending, i) => {
            if (spending.amount < 0) {
              console.log(
                spending.createdAt,
                spending.updatedAt,
                "Spending Dates"
              );

              return (
                <LatestSpending
                  key={i}
                  logo={spending.categoryLogo}
                  category={spending.category}
                  amount={spending.amount}
                  isLastEl={i === isLastEl ? -1 : i}
                  createdAt={spending.createdAt}
                  updatedAt={spending.updatedAt}
                />
              );
            }
          })}

          {/* <div className="w-full grid grid-cols-[70%_30%] md:grid-cols-2   py-[20px]  border-b-[1px] border-b-[#dedada]">
            <div className="flex flex-row items-center gap-4">
              <div className="relative w-8 h-8 md:w-[40px] md:h-[40px] rounded-full overflow-hidden object-cover">
                <Image
                  className="absolute inset-0 w-full h-full object-cover"
                  src={logo}
                  fill
                  alt={""}
                />
              </div>
              <p className="text-[14px] font-bold">Emma Richardson</p>
            </div>

            <div className="flex flex-col gap-y-2 text-right">
              <p className="text-[14px] font-bold">+$75.50</p>
              <p className="text-[12px] text-[#696868] font-normal">
                19 Aug 2024
              </p>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default BudgetItem;
