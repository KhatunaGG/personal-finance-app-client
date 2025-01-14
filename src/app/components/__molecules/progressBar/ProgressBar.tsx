// "use client"
// import LinearProgress from '@mui/material/LinearProgress';

// const ProgressBar = () => {
//   return (
//     <LinearProgress
//       sx={{
//         background: '#F8F4F0', // Rail color (set to green)
//         height: "28px",
//         borderRadius: "8px",
//         padding: "4px",
//         width: "100%",
//         '& .MuiLinearProgress-bar': {
//           backgroundColor: '#277C78', // Color of the progress bar itself
//           borderRadius: "4px",
//         },
//         '& .MuiLinearProgress-root': {
//           padding: "4px",
//         }
//       }}
//       variant="determinate"
//       value={30}
//     />
//   );
// }

// export default ProgressBar;

// import LinearProgress from "@mui/material/LinearProgress";
// import Box from "@mui/material/Box";

// export type ProgressBarPropsType = {
//   category: string;
//   groupSpending: number;
//   color: string;
//   groupTotalAmount: number;
//   isPot?: boolean;
// };

// const ProgressBar = ({
//   // category,
//   groupSpending,
//   color,
//   groupTotalAmount,
//   isPot,
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
//         backgroundColor: "#F8F4F0",
//         // height: "32px",
//         height: isPot ? "8px" : "32px",
//       }}
//     >
//       <LinearProgress
//         sx={{
//           // height: "24px",
//           height: isPot ? "8px" : "32px",
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

import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

export type ProgressBarPropsType = {
  category: string;
  groupSpending: number;
  color: string;
  groupTotalAmount: number;
  isPotPage?: boolean;
};

const ProgressBar = ({
  // category,
  groupSpending,
  color,
  groupTotalAmount,
  isPotPage,
}: ProgressBarPropsType) => {
  const percentage =
    groupTotalAmount > 0
      ? (Math.abs(groupSpending) / groupTotalAmount) * 100
      : 0;
  const progress = Math.min(percentage, 100);

  return (
    <Box
      sx={{
        padding: "4px",
        borderRadius: "8px",
        // backgroundColor: "#F8F4F0",
        backgroundColor: "#F8F4F0",
        orderRadius: isPotPage ? "8px" : "50px",
        height: isPotPage ? "8px" : "32px",
      }}
    >
      <LinearProgress
        sx={{
          height: isPotPage ? "8px" : "32px",
          orderRadius: isPotPage ? "8px" : "50px",
          width: "100%",
          borderRadius: "4px",
          background: "#F8F4F0",
          "& .MuiLinearProgress-bar": {
            backgroundColor: color,
          },
        }}
        variant="determinate"
        value={progress}
      />
    </Box>
  );
};

export default ProgressBar;
