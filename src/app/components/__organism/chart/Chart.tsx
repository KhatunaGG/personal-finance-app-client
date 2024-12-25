// "use client";
// import * as React from "react";
// import { PieChart } from "@mui/x-charts/PieChart";
// import { ChartDataType } from "../budgetFragment/BudgetFragment";

// export type ChartDataPropsType = {
//   data: ChartDataType[];
// };

// const Chart = ({ data }: ChartDataPropsType) => {
//   return (
//     <div className="bg-blue-200" style={{ display: 'flex', alignItems: 'center' }}>
//       <PieChart
//         series={[
//           {
//             data: data,
//             innerRadius: 30,
//           },
//         ]}
//         width={240}
//         height={240}
//       />
//     </div>
//   );
// };

// export default Chart;













// md:grid-cols-[65.93%_27.74%]



"use client";
import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { ChartDataType } from "../budgets/budgetFragment/BudgetFragment";

// ChartDataPropsType for data passed in
export type ChartDataPropsType = {
  data: ChartDataType[];
};


const size = {
  width: 240,
  height: 240,
};

const Chart = ({ data }: ChartDataPropsType) => {
  return (
    <div className="bg-blue-200 grid grid-cols-1 md:grid-cols md:grid-cols-[65.93%_27.74%] justify-between  py-[31px]">
      {/* PieChart Section (Left Side - 65.93%) */}
      
      <div className="h-[240px] w-full flex justify-center items-center bg-yellow-200 ">
        <PieChart



          series={[
            {
              data: data.map(item => ({
                ...item,
                label: undefined,  // Remove labels from PieChart data
              })),
              innerRadius: 30,

            },
          ]}
          width={240}
          height={240}
          // {...size}
        />
      </div>

      {/* Labels Section (Right Side - 27.74%) */}
      <div className="w-full flex flex-col justify-start items-start gap-4">
        {data.map((item, i) => (
          <Label key={i} label={item.label} value={item.value} color={item.color} />
        ))}
      </div>
    </div>
  );
};

export default Chart;

// Label Component for rendering individual labels with color and value
const Label = ({ label, value, color }: { label: string; value: number; color?: string }) => {
  return (
    <div className="flex flex-row gap-4">
      <div className={`w-[5px] bg-[${color ?? "#000000"}] h-full min-h-[43px] rounded-sm`}></div> {/* Default color black if not provided */}
      <div className="flex flex-col items-start justify-center gap-1">
        <p className="text-[12px] font-normal text-[#696868]">{label}</p>
        <p className="text-[#201F24] font-bold text-[14px]">${value}</p>
      </div>
    </div>
  );
};



