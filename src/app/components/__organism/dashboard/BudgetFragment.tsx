"use client";
import Link from "next/link";
import { ArrowRight } from "../../__atoms";
import { BudgetPieChart } from "../../__molecules";
import { useGroupedData } from "@/app/hooks/use-categoryGrope";
// import { useRouter } from "next/navigation";
import { BudgetType } from "../modal/Modal";
// import { axiosInstance } from "@/app/libs/axiosInstance";
import { useEffect } from "react";
import useAccessToken from "@/app/hooks/use-toke";
// import { DataType } from "@/app/interfaces/interface";
import useBudgets from "@/app/hooks/use-budgets";

export type BudgetFragmentPropsType = {
  budgets: BudgetType[];
};

const BudgetFragment = ({ budgets }: BudgetFragmentPropsType) => {
  // const router = useRouter();
  // const [data, setData] = useState<DataType[]>([]);
  const { accessToken } = useAccessToken();
  const { data, getBudgets } = useBudgets(accessToken || "");
  const groupedData = useGroupedData(data);



  useEffect(() => {
    getBudgets();
  }, [accessToken, getBudgets]);




  // const getBudgets = async () => {
  //   try {
  //     const res = await axiosInstance.get("/budgets", {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     });
  //     setData(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getBudgets();
  // }, [router, data, groupedData]);

  return (
    <section className="w-full grid grid-cols-1 bg-white rounded-xl px-[20px] py-6 md:p-8 gap-y-[20px]">
      <div className="w-full flex items-center justify-between">
        <h2 className="font-bold text-[20px] text-[#201F24]">Budgets</h2>
        <Link href={"/budgets"} className="flex flex-row items-center gap-3">
          <p className="text-[14px] text-[#696868] font-normal">See Details</p>
          <ArrowRight />
        </Link>
      </div>

      <div className="w-full flex flex-col gap-y-4 md:gap-y-0 md:flex-row relative lg:gap-x-10">
        <div className="w-full h-[240px] flex items-center justify-center md:items-start lg:w-[240px] md:w-1/2">
          <BudgetPieChart groupedData={groupedData} data={data} />
        </div>

        <div className="h-full grid grid-cols-2 gap-y-4 md:space-y-0 md:grid-cols-1 md:absolute  md:right-[15px] md:top-0 md:w-[40%] lg:w-[30%]">
          {budgets.map((item, i) => (
            <div key={i} className="flex flex-row gap-4">
              <div
                style={{ backgroundColor: item.color }}
                className={`w-[5px] bg-[${
                  item.color ?? "#000000"
                }] h-full min-h-[43px] rounded-sm`}
              ></div>{" "}
              <div className="flex flex-col items-start justify-center gap-1">
                <p className="text-[12px] font-normal text-[#696868] whitespace-nowrap">
                  {item.category}
                </p>
                <p className="text-[#201F24] font-bold text-[14px]">
                  {item.amount < 0
                    ? `-$${Math.abs(item.amount).toFixed(2)}`
                    : `$${item.amount.toFixed(2)}`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BudgetFragment;
