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

import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

export type ProgressBarPropsType = {
  category: string;
  groupSpending: number;
  color: string;
  groupTotalAmount: number;
};

const ProgressBar = ({
  // category,
  groupSpending,
  color,
  groupTotalAmount,
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
        backgroundColor: "#F8F4F0",
        height: "32px",
      }}
    >
      <LinearProgress
        sx={{
          height: "24px",
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
