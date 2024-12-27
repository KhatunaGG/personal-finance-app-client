"use client";
import React, { useEffect, useState } from "react";
import { PieChart, Pie, Label } from "recharts";

const data = [
  { name: "Group A", value: 400, fill: "#0088FE" },
  { name: "Group B", value: 300, fill: "#00C49F" },
  { name: "Group C", value: 300, fill: "#FFBB28" },
  { name: "Group D", value: 200, fill: "#FF8042" },
];

// const renderColorfulLegendText = (value: string, entry: any) => {
//   return (
//     <span style={{ color: "#596579", fontWeight: 500, padding: "10px" }}>
//       {value}
//     </span>
//   );
// };



const BudgetPieChart = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); 
  }, []);

  if (!mounted) {
    return null; 
  }

  return (
    <PieChart
      width={240}
      height={240}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
    >
      {/* <Legend
        height={36}
        iconType="circle"
        layout="vertical"
        verticalAlign="middle"
        iconSize={10}
        formatter={renderColorfulLegendText}
      /> */}

      <Pie
        data={data}
        cx={120}
        cy={120}
        innerRadius={70}
        outerRadius={120}
        fill="#8884d8"
        paddingAngle={0}
        dataKey="value"
        className="shadow-lg"
      >
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
                $338
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
                of $975 limit
              </tspan>{" "}
            </text>
          }
        />
      </Pie>
    </PieChart>
  );
};

export default BudgetPieChart;
