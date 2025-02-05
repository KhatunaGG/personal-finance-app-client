// import * as React from 'react';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// export default function BasicDatePicker() {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer components={['DatePicker']}>
//         <DatePicker
//           sx={{
//             fontSize: "9px",
//             color: "#696868",
//             fontWeight: "100",
//             '& .MuiInputBase-root': {
//               fontSize: "9px",
//               color: "#696868",
//               borderRadius: 2,
//             },
//             position: "absolute",
//             top: 0,
//             right: "-210px",
//             zIndex: 40,
//             maxWidth: "200px",
//             backgroundColor: "white",
//           }}
//           label="Select Date"
//         />
//       </DemoContainer>
//     </LocalizationProvider>
//   );
// }

// "use client";
// import * as React from "react";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { Dayjs } from "dayjs";
// import { ColorEnum } from "@/app/schema/schema";
// import { axiosInstance } from "@/app/libs/axiosInstance";
// import useAccessToken from "@/app/hooks/use-toke";
// import axios from "axios";

// export type DataPikersPropsType = {
//   // formattedRecurrentBillsDate: (date: Dayjs | null) => void;
//   setRecurringBillsDate: React.Dispatch<React.SetStateAction<string>>;

//   category: string;
//   amount: number;
//   categoryLogo?: string;
//   transactionId: string;
//   color?: ColorEnum | string | undefined;
//   type?: string;
//   recurringBillsDate: string;
//   setIsDatePickers: React.Dispatch<React.SetStateAction<boolean>> | undefined;
//   setActiveDatePicker:
//     | React.Dispatch<React.SetStateAction<string | null>>
//     | undefined;
// };

// export type NewRecurringBillType = {
//   category: string;
//   amount: number;
//   categoryLogo: string;
//   transactionId: string;
//   color: ColorEnum | string | undefined;
//   type: string;
//   dueDate: string;
// };

// function getSuffix(day: number): string {
//   if (day >= 11 && day <= 13) {
//     return "th"; // Handle 11th, 12th, 13th
//   }
//   switch (day % 10) {
//     case 1:
//       return "st";
//     case 2:
//       return "nd";
//     case 3:
//       return "rd";
//     default:
//       return "th";
//   }
// }

// export default function BasicDatePicker({
//   setRecurringBillsDate,
//   category,
//   amount,
//   categoryLogo,
//   transactionId,
//   color,
//   type,
//   recurringBillsDate,
//   setIsDatePickers,
//   setActiveDatePicker,
// }: DataPikersPropsType) {
//   const { accessToken } = useAccessToken();
//   const [existingRecurrentBill, setExistingRecurrentBill] = React.useState<NewRecurringBillType[]>();
//   // const formattedRecurrentBillsDate = (date: Dayjs | null) => {
//   //   if (date) {
//   //     const day = date.date();
//   //     const ordinalSuffix = getSuffix(day);
//   //     const formattedDate = `Monthly - ${day}${ordinalSuffix}`;
//   //     setRecurringBillsDate(formattedDate);
//   //     console.log(formattedDate, "formattedDate")
//   //   }

//   // };

//   const formattedRecurrentBillsDate = async (date: Dayjs | null) => {
//     if (date) {
//       const day = date.date();
//       const ordinalSuffix = getSuffix(day);
//       const formattedDate = `Monthly - ${day}${ordinalSuffix}`;
//       setRecurringBillsDate(formattedDate);
//       await create(formattedDate);
//     }
//   };

//   const create = async (dueDate: string) => {
//     try {
//       const newRecurringBill = {
//         category,
//         amount,
//         categoryLogo,
//         transactionId,
//         color,
//         type,
//         dueDate,
//       };
//       const res = await axiosInstance.post(
//         "/recurring-bills",
//         newRecurringBill,
//         {
//           headers: { Authorization: `Bearer ${accessToken}` },
//         }
//       );

//       console.log(newRecurringBill, "newRecurringBill");
//       console.log(res.data, "res.data");
//       if (res.status >= 200 && res.status <= 204) {
//         setIsDatePickers?.(false);
//         setRecurringBillsDate("");
//         setActiveDatePicker?.(null);
//       }
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         console.log("Error response:", error.response);
//         console.log("Error message:", error.message);
//       } else {
//         console.log("Unexpected error:", error);
//       }
//     }
//   };

//   // const handleButtonText = (text: string) =>{

//   // }

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer components={["DatePicker"]}>
//         <DatePicker
//           onChange={(date: Dayjs | null) => {
//             if (date) {
//               formattedRecurrentBillsDate(date);
//             }
//           }}
//           sx={{
//             position: "absolute",
//             top: 0,
//             right: "-210px",
//             zIndex: 40,
//             maxWidth: "200px",
//             backgroundColor: "white",
//           }}
//           label="Select Date"
//           // label={() => handleButtonText(txt)}
//           closeOnSelect={true}
//         />
//       </DemoContainer>
//     </LocalizationProvider>
//   );
// }

"use client";
import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";
import { ColorEnum } from "@/app/schema/schema";
import { axiosInstance } from "@/app/libs/axiosInstance";
import useAccessToken from "@/app/hooks/use-toke";
import { toast } from "react-toastify";
import { RecurringBillsDataType } from "./RecurringBillsSection";

// import { NewRecurringBillType } from "../transaction/TransactionItem";

export type DataPikersPropsType = {
  // formattedRecurrentBillsDate: (date: Dayjs | null) => void;
  setRecurringBillsData?: React.Dispatch<
    React.SetStateAction<RecurringBillsDataType[] | undefined>
  >;
  category: string;
  amount: number;
  categoryLogo?: string;
  transactionId: string;
  color?: ColorEnum | string | undefined;
  type?: string;
  recurringBillsDate: string;
  setIsDatePickers: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  setActiveDatePicker:
    | React.Dispatch<React.SetStateAction<string | null>>
    | undefined;
  setIsExistingItem: React.Dispatch<React.SetStateAction<boolean>>;
  setRecurringBillsDate: React.Dispatch<React.SetStateAction<string>>;
  activeDatePicker: string;
  getAllRecurringBills?: () => Promise<void>;
  resource: string | undefined;
};

function getSuffix(day: number): string {
  if (day >= 11 && day <= 13) {
    return "th"; // Handle 11th, 12th, 13th
  }
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

export default function BasicDatePicker({
  // setRecurringBillsData,
  category,
  amount,
  // categoryLogo,
  transactionId,
  color,
  // type,
  // recurringBillsDate,
  setIsDatePickers,
  setActiveDatePicker,
  // setIsExistingItem,
  setRecurringBillsDate,
  // activeDatePicker,
  getAllRecurringBills,
  resource,
}: DataPikersPropsType) {
  const { accessToken } = useAccessToken();

  const formattedRecurrentBillsDate = async (date: Dayjs | null) => {
    try {
      if (date) {
        const day = date.date();
        const ordinalSuffix = getSuffix(day);
        const formattedDate = `Monthly - ${day}${ordinalSuffix}`;
        setRecurringBillsDate(formattedDate);
        await create(formattedDate);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(category, "category")

  const create = async (dueDate: string) => {
    try {
      const data = {
        transactionId,
        dueDate,
        message: "Done",
        resource: resource === "budget" ? resource : "",

        amount,
        category,
        color

      };

      const res = await axiosInstance.post("/recurring-bills/refs", data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (res.status >= 200 && res.status <= 204) {
        setIsDatePickers?.(false);
        setRecurringBillsDate("");
        setActiveDatePicker?.(null);
        getAllRecurringBills?.();
        toast.success("Recurring bill created successfully!");
      }
    } catch (error) {
      console.error("Error creating recurring bill:", error);
      toast.error("Failed to create recurring bill. Please try again.");
    }
  };

  // const getValidDueDate = (dateString: string): string => {
  //   const dayMatch = dateString.match(/(\d{1,2})(?:st|nd|rd|th)/); // Match the day like "5th", "12th", etc.
  //   if (!dayMatch) {
  //     throw new Error("Invalid due date format");
  //   }

  //   const day = parseInt(dayMatch[1], 10); // Extract the day number

  //   // Create a valid date string (e.g., 5th of the current month)
  //   const currentDate = dayjs(); // Get current date
  //   const validDueDate = currentDate.date(day).format("YYYY-MM-DD"); // Set the day and format as "YYYY-MM-DD"

  //   return validDueDate;
  // };

  // // Example usage:
  // const dueDate = "Monthly - 5th"; // This is your input
  // const validDueDate = getValidDueDate(dueDate);
  // console.log(validDueDate); // This should log something like "2025-02-05"

  // const create = async (dueDate: string) => {
  //   try {
  //     // Convert "Monthly - 5th" to a valid date (e.g., "2025-02-05")
  //     const validDueDate = getValidDueDate(dueDate);

  //     const data = {
  //       id: activeDatePicker, // Send the itemId (either potId or budgetId)
  //       dueDate: validDueDate, // Pass the valid dueDate (now in "YYYY-MM-DD" format)
  //     };

  //     // Send the request to the backend
  //     const response = await axiosInstance.post("/recurring-bills/refs", data, {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`, // Send token if necessary
  //       },
  //     });

  //     if (response.status === 201) {
  //       toast.success("Recurring bill created successfully!");
  //     }
  //   } catch (error) {
  //     console.error("Error creating recurring bill:", error);
  //     toast.error("Failed to create recurring bill. Please try again.");
  //   }
  // };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          onChange={(date: Dayjs | null) => {
            if (date) {
              formattedRecurrentBillsDate(date);
            }
          }}
          sx={{
            position: "absolute",
            top: 0,
            right: "-210px",
            zIndex: 40,
            maxWidth: "200px",
            backgroundColor: "white",
            border: "#69686826",
          }}
          label="Select Date"
          closeOnSelect={true}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
