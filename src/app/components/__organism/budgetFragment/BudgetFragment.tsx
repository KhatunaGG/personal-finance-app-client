// "use client";
// import Link from "next/link";
// import { ArrowRight } from "../../__atoms";
// import Chart from "../chart/Chart";
// import { Labels } from "../../__molecules";

// // Define ChartDataType as an array of objects
// export type ChartDataType = {
//   id: number;
//   value: number;
//   label: string;
//   color?: string; // Make color optional
// };

// // Correctly define the data as an array of objects
// const data: ChartDataType[] = [
//   { id: 0, value: 159.00, label: "Entertainment", color: 'orange' },
//   { id: 1, value: 75.00, label: "75.00" },
//   { id: 2, value: 100.00, label: "100.00" },
// ];

// const BudgetFragment = () => {
//   return (
//     <section className="w-full grid grid-cols-1 bg-white rounded-xl px-[20px] py-6 md:p-8 gap-y-[20px]">
//       <div className="w-full flex items-center justify-between">
//         <h2 className="font-bold text-[20px] text-[#201F24]">Budgets</h2>
//         <Link href={"/budgets"} className="flex flex-row items-center gap-3">
//           <p>See Details</p>
//           <ArrowRight />
//         </Link>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-[65.93%_27.74%] justify-between w-full rounded-xl">
//         <div className="PIE bg-green-200 py-[28px] md:py-[31px] w-full flex items-center justify-center">
//           {/* Pass the entire data array */}
//           <Chart data={data} />
//         </div>
//         <div className="List bg-red-200 grid grid-cols-2 max-w-full gap-x-4 md:gap-x-0 gap-y-4 md:grid-cols-1">
//           {/* Pass the entire data array */}
//           <Labels data={data} />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BudgetFragment;



"use client";
import Link from "next/link";
import { PieChart } from "@mui/x-charts";
import { ArrowRight } from "../../__atoms";



export type ChartDataType = {
  id: number;
  value: number;
  label: string;
  color?: string; 
};

const data: ChartDataType[] = [
  { id: 0, value: 159.0, label: "Entertainment", color: "#277C78" },
  { id: 1, value: 75.0, label: "Bills", color: "#82C9D7" },
  { id: 2, value: 100.0, label: "Dining Out", color: "#626070" },
  { id: 3, value: 150.0, label: "Personal Care", color: "#F2CDAC" },
];

const BudgetFragment = () => {
  return (
    <section className="w-full grid grid-cols-1 bg-white rounded-xl px-[20px] py-6 md:p-8 gap-y-[20px]">
      <div className="w-full flex items-center justify-between">
        <h2 className="font-bold text-[20px] text-[#201F24]">Budgets</h2>
        <Link href={"/budgets"} className="flex flex-row items-center gap-3">
          <p className="text-[14px] text-[#696868] font-normal">See Details</p>
          <ArrowRight />
        </Link>
      </div>

      {/* <div className="w-full flex flex-col  md:flex-row relative my-[31px]"> */}
      <div className="w-full flex flex-col gap-y-4  md:flex-row relative my-[31px]">
        <div className="w-full h-[240px]  flex  lg:items-start">
          <PieChart
            className="lg:-ml-8 flex items-center justify-center"
            series={[
              {
                data: data.map((item) => ({
                  ...item,
                  label: undefined,
                })),
                innerRadius: 50,
              },
            ]}
          />
        </div>

        {/* <div className="h-full flex flex-col items-start justify-center absolute  lg:right-[15px] top-0 gap-y-4"> */}
        <div className="h-full grid grid-cols-2 gap-y-4 md:space-y-0 md:grid-cols-1 md:absolute  md:right-[15px] md:top-0 ">
          {data.map((item, i) => (
            <div key={i} className="flex flex-row gap-4">
              <div
                style={{ backgroundColor: item.color }}
                className={`w-[5px] bg-[${
                  item.color ?? "#000000"
                }] h-full min-h-[43px] rounded-sm`}
              ></div>{" "}
              <div className="flex flex-col items-start justify-center gap-1">
                <p className="text-[12px] font-normal text-[#696868]">
                  {item.label}
                </p>
                <p className="text-[#201F24] font-bold text-[14px]">
                  ${item.value}
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
