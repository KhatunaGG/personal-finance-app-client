// import LinearProgress from "@mui/material/LinearProgress";
// import Box from "@mui/material/Box";

// export type ProgressBarPropsType = {
//   category: string;
//   groupSpending: number;
//   color: string;
//   groupTotalAmount: number;
//   isPotPage?: boolean;
// };

// const ProgressBar = ({
//   // category,
//   groupSpending,
//   color,
//   groupTotalAmount,
//   isPotPage,
// }: ProgressBarPropsType) => {
//   const percentage =
//     groupTotalAmount > 0
//       ? (Math.abs(groupSpending) / groupTotalAmount) * 100
//       : 0;
//   const progress = Math.min(percentage, 100);

//   return (
//     <Box
//       sx={{
//         padding: "4px",
//         borderRadius: "8px",
//         // backgroundColor: "#F8F4F0",
//         backgroundColor: "#F8F4F0",
//         orderRadius: isPotPage ? "8px" : "50px",
//         height: isPotPage ? "8px" : "32px",
//       }}
//     >
//       <LinearProgress
//         sx={{
//           height: isPotPage ? "8px" : "32px",
//           orderRadius: isPotPage ? "8px" : "50px",
//           width: "100%",
//           borderRadius: "4px",
//           background: "#F8F4F0",
//           "& .MuiLinearProgress-bar": {
//             backgroundColor: color,
//           },
//         }}
//         variant="determinate"
//         value={progress}
//       />
//     </Box>
//   );
// };

// export default ProgressBar;



//OK


import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import { FilteredGropedDataType } from "../../__organism/pots/PotModal";

export type ProgressBarPropsType = {
  category?: string;
  groupSpending?: number;
  color?: string;
  groupTotalAmount?: number;
  isPotPage?: boolean;
  filteredGropedData?: FilteredGropedDataType;
  withdrawMoney?: boolean;
  potMoney?: boolean;
  input?: string;
  // portSpendingTotalAmount?: number;
  height?: string
};

const ProgressBar = ({
  // category,
  groupSpending,
  color,
  groupTotalAmount,
  isPotPage,
  filteredGropedData,
  withdrawMoney,
  potMoney,
  input,
  // portSpendingTotalAmount
  height
}: ProgressBarPropsType) => {
  const inputNumber = Number(input);


  const greenColor = "#4caf50";
  const blackColor = "#000000";
  const redColor = "#f44336";

  let progressSegments: { color: string; value: number }[] = [];
  let totalSavedPercentage = 0;
  // let totalPotSpendingPercentage = 0;
  let newInputNumberPercentage = 0;

  if (isPotPage && filteredGropedData) {
    const { totalSaved, potTargetTotalAmount } = filteredGropedData;

    totalSavedPercentage = potTargetTotalAmount ? (totalSaved / potTargetTotalAmount) * 100 : 0;
    // totalPotSpendingPercentage = potTargetTotalAmount ? (Math.abs(portSpendingTotalAmount) / potTargetTotalAmount) * 100 : 0;


    if (potMoney && inputNumber > 0) {
        newInputNumberPercentage = (inputNumber / (filteredGropedData.potTargetTotalAmount + inputNumber)) * 100;
    } else if (withdrawMoney && inputNumber < 0 && Math.abs(inputNumber) <= totalSaved) {
        newInputNumberPercentage = (Math.abs(inputNumber) / potTargetTotalAmount) * 100;
    } else {
        newInputNumberPercentage = 0;
    }


    if (potMoney && newInputNumberPercentage > 0) {
        progressSegments = [
            { color: blackColor, value: filteredGropedData.percentageSpent },
            { color: greenColor, value: newInputNumberPercentage },
        ];
    } else if (withdrawMoney && newInputNumberPercentage > 0) {
        progressSegments = [
            { color: blackColor, value: filteredGropedData.percentageSpent },
            { color: redColor, value: newInputNumberPercentage },
        ];
    } else {
        progressSegments = [
            { color: color || "", value: totalSavedPercentage },
        ];
    }
    console.log('Progress Segments:', progressSegments);
}



  let progress = 0;
  if (
    !isPotPage &&
    groupTotalAmount &&
    groupTotalAmount > 0 &&
    groupSpending !== undefined
  ) {
    const percentage = (Math.abs(groupSpending) / groupTotalAmount) * 100;
    progress = Math.min(percentage, 100);
  }

  return (
    <Box
      sx={{
        padding: "4px",
        borderRadius: "8px",
        overflow: "hidden",
        backgroundColor: "#F8F4F0",
        // height: isPotPage ? "8px" : "32px",
        height: height ? height : isPotPage ? "8px" : !height && isPotPage ? "32px" : "",
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      {isPotPage ? (
        <>
          {progressSegments.map((segment, index) => {
            const accumulatedWidth = progressSegments
              .slice(0, index)
              .reduce((acc, cur) => acc + cur.value, 0);

            return (
              <Box
                key={index}
                sx={{
                  backgroundColor: segment.color,
                  height: "100%",
                  width: `${segment.value}%`,
                  borderRadius: "8px",
                  position: "absolute",
                  left: `${accumulatedWidth}%`,
                }}
              />
            );
          })}
        </>
      ) : (
        <LinearProgress
          sx={{
            height: height ? height : "32px",
            borderRadius: "8px",
            width: "100%",
            background: "#F8F4F0",
            "& .MuiLinearProgress-bar": {
              backgroundColor: color || "#4caf50",
            },
          }}
          variant="determinate"
          value={progress}
        />
      )}
    </Box>
  );
};

export default ProgressBar;



