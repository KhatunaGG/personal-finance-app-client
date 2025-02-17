"use client";
import useAccessToken from "@/app/hooks/use-toke";
import Image from "next/image";
import { useEffect, useState } from "react";
import DatePickers from "../recurringBills/DatePicker";
import { toast } from "react-toastify";
import { axiosInstance } from "@/app/libs/axiosInstance";
import { CheckMark, ExclamationMark } from "../../__atoms";
import {
  TransactionItemPropsType,
  TransactionOrRecurringBill,
} from "@/app/interfaces/interface";

const TransactionItem = ({
  category,
  createdAt,
  amount,
  categoryLogo,
  isFirstItem,
  isRecurringBills,
  _id,
  color,
  setIsDatePickers,
  activeDatePicker,
  setActiveDatePicker,
  dueDate,
  status,
  getAllRecurringBills,
  resource,
  isDatePickers,
}: TransactionItemPropsType) => {
  const { accessToken } = useAccessToken();
  const [isExistingItem, setIsExistingItem] = useState(false);

  const checkExistingRecurringBill = async () => {
    if (!accessToken || !_id) return;
    try {
      const res = await axiosInstance.get("/recurring-bills", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      if (res?.status >= 200 && res?.status <= 204) {
        const data: TransactionOrRecurringBill[] = res.data || [];

        const isExisting = data.some((item) => item.checkId === _id);
        setIsExistingItem(isExisting);
        getAllRecurringBills?.();
      }
    } catch (error) {
      console.error("Error checking recurring bill:", error);
    }
  };

  useEffect(() => {
    checkExistingRecurringBill();
  }, [accessToken, _id]);

  const handleInputChange = async (id: string) => {
    setIsDatePickers?.(true);
    if (activeDatePicker === id) {
      setActiveDatePicker?.(null);
    } else {
      setActiveDatePicker?.(id);
    }

    try {
      if (!accessToken) {
        return;
      }

      let res = await axiosInstance.get("/recurring-bills", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      const data: TransactionOrRecurringBill[] = res.data || [];
      const exist = data.find((item) => item.checkId === id);

      if (exist) {
        res = await axiosInstance.delete(`/recurring-bills/${id}`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        if (res?.status >= 200 && res?.status <= 204) {
          setIsExistingItem(false);
          setIsDatePickers?.(false);
          setActiveDatePicker?.(null);
          getAllRecurringBills?.();
          toast.success("Recurring bill deleted successfully!");
        }
      } else {
        setIsExistingItem(false);
        setIsDatePickers?.(true);
      }
    } catch (error) {
      console.error("Error in handleInputChange:", error);
    }
  };

  return (
    <div
      className={`w-full flex items-center justify-between md:gap-[3.31%] ${
        isFirstItem
          ? "pt-0 pb-4 border-none"
          : "py-4 border-t border-t-[#F2F2F2]"
      }`}
    >
      <div
        className={`${
          isRecurringBills
            ? "w-[50%] flex flex-col items-center md:w-[88%] md:flex-row"
            : "w-[65%]"
        } md:w-[60.16%] grid grid-cols-[40px,1fr] md:gap-x-4 items-center`}
      >
        <div className="relative w-8 h-8 md:w-[40px] md:h-[40px] rounded-full overflow-hidden object-cover">
          {categoryLogo ? (
            typeof categoryLogo === "string" ? (
              <Image
                className="absolute inset-0 w-full h-full object-cover"
                src={categoryLogo}
                fill
                alt="logo"
              />
            ) : (
              categoryLogo
            )
          ) : (
            <div
              className="w-10 h-10 rounded-full shadow-sm"
              style={{ backgroundColor: color || "gray" }}
            ></div>
          )}
        </div>

        <div
          className={`flex flex-col items-start gap-1 md:flex-row md:gap-0 md:items-center md:justify-between`}
        >
          <p className="text-sm font-bold text-[#201F24]">{category}</p>
          <p
            className={`${isRecurringBills ? "sm:flex" : "md:hidden"} ${
              !isRecurringBills && "hidden"
            } order-2 text-xs text-[#696868] font-normal md:order-1 relative`}
          >
            {isRecurringBills ? dueDate : createdAt}
            <span
              className={`absolute w-[13px] h-[13px] rounded-full -top-1 -right-4 z-10`}
            >
              {isRecurringBills && status === "dueSoon" ? (
                <ExclamationMark />
              ) : isRecurringBills && status === "paid" ? (
                <CheckMark />
              ) : (
                ""
              )}
            </span>
          </p>

          <div className="relative">
            <button
              onClick={() => handleInputChange(_id)}
              className={`${
                isRecurringBills && "hidden"
              } text-xs font-thin border border-[#69686826] py-2 px-1 rounded-md ${
                isExistingItem ? "text-[#C94736]" : "text-[#696868]"
              }`}
            >
              {isExistingItem
                ? "Remove Recurring Bill"
                : "Add to Recurring Bills"}
            </button>
            {activeDatePicker === _id && isDatePickers && !isExistingItem && (
              <DatePickers
                category={category}
                amount={amount}
                categoryLogo={categoryLogo}
                transactionId={_id}
                color={color}
                setIsDatePickers={setIsDatePickers}
                setActiveDatePicker={setActiveDatePicker}
                setIsExistingItem={setIsExistingItem}
                getAllRecurringBills={getAllRecurringBills}
                resource={resource}
              />
            )}
          </div>
        </div>
      </div>

      <div
        className={`${
          isRecurringBills ? "w-[45.68%] text-right" : "w-[35%] md:w-[36.51%]"
        } flex-col gap-1 flex items-end justify-between md:gap-0 md:flex-row md:items-center`}
      >
        <p
          className={`${
            isRecurringBills && "hidden"
          } order-2 text-xs text-[#696868] font-normal md:order-1`}
        >
          {isRecurringBills ? "Monthly - 2nd" : createdAt}
        </p>
        <p
          className={`${
            isRecurringBills && "w-full text-right"
          } order-1 text-sm font-bold ${
            amount < 0 ? "text-[#201F24]" : "text-[#277C78]"
          }`}
        >
          {amount < 0
            ? `-$${Math.abs(amount).toFixed(2)}`
            : `+$${amount.toFixed(2)}`}
        </p>
      </div>
    </div>
  );
};

export default TransactionItem;
