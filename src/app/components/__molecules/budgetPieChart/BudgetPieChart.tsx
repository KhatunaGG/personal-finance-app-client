// "use client";
// import { CategoryEnum, ColorEnum } from "@/app/schema/schema";
// import React, { useEffect, useState } from "react";
// import { PieChart, Pie, Label } from "recharts";

// const data = [
//   { name: "Group A", value: 400, fill: "#0088FE" },
//   { name: "Group B", value: 300, fill: "#00C49F" },
//   { name: "Group C", value: 300, fill: "#FFBB28" },
//   { name: "Group D", value: 200, fill: "#FF8042" },
// ];

// // const renderColorfulLegendText = (value: string, entry: any) => {
// //   return (
// //     <span style={{ color: "#596579", fontWeight: 500, padding: "10px" }}>
// //       {value}
// //     </span>
// //   );
// // };

// export type BudgetPieChartPropsType = {
//     category: CategoryEnum;
//     spending: number;
//     totalAmount: number;
//     color: ColorEnum;
//     categoryLogo: string;
//     remaining: number;
// }

// const BudgetPieChart = ({category, spending, totalAmount, color, remaining, categoryLogo  }: BudgetPieChartPropsType) => {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return null;
//   }

//   return (
//     <PieChart
//       width={240}
//       height={240}
//       margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
//     >
//       {/* <Legend
//         height={36}
//         iconType="circle"
//         layout="vertical"
//         verticalAlign="middle"
//         iconSize={10}
//         formatter={renderColorfulLegendText}
//       /> */}

//       <Pie
//         data={data}
//         cx={120}
//         cy={120}
//         innerRadius={70}
//         outerRadius={120}
//         fill="#8884d8"
//         paddingAngle={0}
//         dataKey="value"
//         className="shadow-lg"
//       >

//         <Label
//           position="center"
//           content={
//             <text
//               x={120}
//               y={120}
//               textAnchor="middle"
//               dominantBaseline="middle"
//               fontSize={32}
//               fill="#333"
//             >
//               <tspan
//                 style={{
//                   fontSize: "32px",
//                   fontWeight: "bold",
//                   fill: "#201F24",
//                   marginBottom: "0.5rem",
//                 }}
//                 x={125}
//                 dy="-5"
//               >
//                 $338
//               </tspan>{" "}
//               <tspan
//                 x={125}
//                 dy="25"
//                 style={{
//                   fontSize: "12px",
//                   fontWeight: "normal",
//                   fill: "#696868",
//                 }}
//               >
//                 of $975 limit
//               </tspan>{" "}
//             </text>
//           }
//         />
//       </Pie>
//     </PieChart>
//   );
// };

// export default BudgetPieChart;

"use client";
import useBudgetUtils from "@/app/hooks/use-budgetUtils";
import { CategoryEnum, ColorEnum } from "@/app/schema/schema";
import React, { useEffect, useState } from "react";
import { PieChart, Pie, Label, Cell } from "recharts";

export type BudgetPieChartPropsType = {
  groupedData: {
    category: string;
    color: ColorEnum;
    spending: number;
    totalAmount: number;
    categoryLogo: string;
    remaining: number;
  }[];
  data: {
    category: CategoryEnum;
    amount: number;
    color: ColorEnum;
    categoryLogo: string;
    createAt: string;
    updatedAt: string;
    id: string;
  }[];
};

const BudgetPieChart = ({ groupedData }: BudgetPieChartPropsType) => {
  const [mounted, setMounted] = useState(false);
  const { getColorHex } = useBudgetUtils();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const totalSpendingByGroup = groupedData.reduce(
    (acc, entry) => acc + entry.spending,
    0
  );
  const totalAmountByGroup = groupedData.reduce(
    (acc, entry) => acc + entry.totalAmount,
    0
  );

  const pieData = groupedData.map((entry) => ({
    value: (Math.abs(entry.spending) / totalAmountByGroup) * 100,
    color: getColorHex(entry.color),
  }));

  return (
    <PieChart
      width={240}
      height={240}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
    >
      <Pie
        data={pieData}
        cx={120}
        cy={120}
        innerRadius={70}
        outerRadius={120}
        fill="#8884d8"
        paddingAngle={0}
        dataKey="value"
        style={{
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        {pieData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
        <Label
          position="center"
          content={
            <text
              x={120}
              y={120}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={32}
              fill="#333"
            >
              <tspan
                style={{
                  fontSize: "32px",
                  fontWeight: "bold",
                  fill: "#201F24",
                  marginBottom: "0.5rem",
                }}
                x={125}
                dy="-5"
              >
                ${Math.abs(Math.round(totalSpendingByGroup))}
              </tspan>{" "}
              <tspan
                x={125}
                dy="25"
                style={{
                  fontSize: "12px",
                  fontWeight: "normal",
                  fill: "#696868",
                }}
              >
                of ${Math.round(totalAmountByGroup)} limit
              </tspan>{" "}
            </text>
          }
        />
      </Pie>
    </PieChart>
  );
};

export default BudgetPieChart;
