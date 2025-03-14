"use client";
import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";
import { axiosInstance } from "@/app/libs/axiosInstance";
import useAccessToken from "@/app/hooks/use-toke";
import { toast } from "react-toastify";
import { DataPikersPropsType } from "@/app/interfaces/interface";



function getSuffix(day: number): string {
  if (day >= 11 && day <= 13) {
    return "th";
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
  category,
  amount,
  transactionId,
  color,
  setIsDatePickers,
  setActiveDatePicker,
  setIsExistingItem,
  getAllRecurringBills,
  resource,
  categoryLogo,
}: DataPikersPropsType) {
  const { accessToken } = useAccessToken();

  const formattedRecurrentBillsDate = async (date: Dayjs | null) => {
    try {
      if (date) {
        const day = date.date();
        const ordinalSuffix = getSuffix(day);
        const formattedDate = `Monthly - ${day}${ordinalSuffix}`;
        await create(formattedDate);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const create = async (dueDate: string) => {
    if (!accessToken) {
      return;
    }
    try {
      const data = {
        transactionId,
        dueDate,
        message: "Done",
        resource: resource === "budget" ? resource : "",
        amount,
        category,
        color,
        checkId: transactionId,
        categoryLogo: resource === "budget" ? categoryLogo : "",
      };

      const res = await axiosInstance.post("/recurring-bills/refs", data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (res.status === 201) {
        setIsExistingItem(true);
        getAllRecurringBills?.();
        setIsDatePickers?.(false);
        setActiveDatePicker?.(null);
        toast.success("Recurring bill created successfully!");
      }
    } catch (error) {
      console.error("Error creating recurring bill:", error);
      toast.error("Failed to create recurring bill. Please try again.");
    }
  };

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
            "@media (max-width: 640px)": {
              right: "-100px",
              top: "auto",
              zIndex: 40,
            },
          }}
          label="Select Date"
          closeOnSelect={true}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
