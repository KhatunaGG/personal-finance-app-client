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



import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

const ProgressBar = () => {
  return (
    <Box sx={{
      padding: '4px', // Apply padding to the rail here
      borderRadius: '8px', // Optional: round the corners of the rail
      backgroundColor: '#F8F4F0', // Rail color (green)
      height: "32px",

    }}>
      <LinearProgress
        sx={{
          height: "24px", // Adjust height to fit inside the wrapper with padding
          borderRadius: "4px", // Optional: round the corners of the progress bar itself
          background: '#F8F4F0', // Background color of the rail (light color)
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#277C78', // Color of the progress bar (blue)
          },
        }}
        variant="determinate"
        value={30}
      />
    </Box>
  );
}

export default ProgressBar;
