"use client";
import { usePathname } from "next/navigation";
import Search from "../transaction/Search";
import { useContext, useEffect, useState } from "react";
import SortBySection from "../transaction/SortBySection";
import { Loading, SortFilterHeader, Title } from "../../__molecules";
import TransactionItem from "../transaction/TransactionItem";
import { axiosInstance } from "@/app/libs/axiosInstance";
import useAccessToken from "@/app/hooks/use-toke";
import { useSortAndFilter } from "@/app/hooks/use-sortAndFilter";
import Summary from "./Summary";
import dayjs from "dayjs";
import { GlobalContext } from "@/app/context/Context";
import {
  DataType,
  PotsDataType,
  RecurringBillsDataType,
} from "@/app/interfaces/interface";

const RecurringBillsSection = () => {
  const path = usePathname();
  const isRecurringBills = path.includes("recurringbills");
  const { accessToken, isLoading } = useAccessToken();
  const [recurringBillsData, setRecurringBillsData] = useState<
    RecurringBillsDataType[]
  >([]);
  const [sortByDropdown, setSortByDropdown] = useState(false);
  const [transactions] = useState<(DataType | PotsDataType)[]>([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const context = useContext(GlobalContext);

  const {
    filteredAllTransactions,
    setSearchTerm,
    setSortByValue,
    sortTransactions,
    sortByValue,
  } = useSortAndFilter(recurringBillsData || []);

  const updateRecurringBillsStatus = (bills: RecurringBillsDataType[]) => {
    const today = dayjs();
    const lastDayOfMonth = today.endOf("month").date();

    return bills.map((bill) => {
      const dueDay = parseInt(bill.dueDate.split(" - ")[1]);
      const adjustedDueDay = Math.min(dueDay, lastDayOfMonth);
      const dueDate = today.date(adjustedDueDay);

      let amount: number;
      let category: string;
      let color: string;

      if (bill.resource === "budget" && bill.budgetId) {
        amount = bill.budgetId.amount;
        category = bill.budgetId.category;
        color = bill.budgetId.color ?? "defaultColor";
      } else if (bill.resource === "pot" && bill.potId) {
        amount = bill.potId.amount;
        category = bill.potId.potName;
        color = bill.potId.color ?? "defaultColor";
      } else {
        return { ...bill, status: "upcoming" };
      }

      let status = "upcoming";
      let daysUntilDue = dueDate.diff(today, "days");

      if (daysUntilDue < 0) {
        const nextMonthDueDate = today.add(1, "month").date(dueDay);
        daysUntilDue = nextMonthDueDate.diff(today, "days");
      }
      if (daysUntilDue <= 3 && daysUntilDue > 0) {
        status = "dueSoon";
      } else if (today.isSame(dueDate, "day")) {
        status = "dueSoon";
      }
      if (today.isSame(dueDate, "day")) {
        const isPaid = transactions.some((t) => {
          return (
            isDataType(t) &&
            t.amount === amount &&
            t.category === category &&
            t.color === color &&
            t.status === "paid"
          );
        });
        if (isPaid) {
          status = "paid";
        }
      }
      if (today.isAfter(dueDate, "day") && status === "dueSoon") {
        const isPaid = transactions.some((t) => {
          return (
            isDataType(t) &&
            t.amount === amount &&
            t.category === category &&
            t.color === color &&
            t.status === "paid"
          );
        });
        if (!isPaid) {
          status = "upcoming";
        }
      }
      return { ...bill, status };
    });
  };

  const getAllRecurringBills = async () => {
    if (!accessToken) {
      return;
    }
    try {
      const res = await axiosInstance.get("/recurring-bills", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      if (res?.status >= 200 && res?.status <= 204) {
        const updatedBills = updateRecurringBillsStatus(res.data);
        setRecurringBillsData(updatedBills);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllRecurringBills();
  }, [accessToken]);

  const isDataType = (
    transaction: DataType | PotsDataType
  ): transaction is DataType => {
    return (transaction as DataType).category !== undefined;
  };

  if (!context) return null;
  const { minimize } = context;

  return (
    <section
      className={`w-full h-full ${
        minimize ? "lg:pl-[88px]" : "lg:pl-[300px]"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="w-full h-full min-h-screen px-4 py-6 md:px-6 md:py-8 flex flex-col gap-8 ">
        <Title isRecurringBills={isRecurringBills} />

        <div className="w-full flex flex-col gap-6 lg:flex-row">
          <Summary recurringBillsData={recurringBillsData} />

          <div className="RIGHT rounded-xl lg:w-[67.47%]">
            <div className="w-full py-6 px-[20px] md:p-8 flex flex-col gap-6 rounded-xl bg-white">
              <div className="SORT flex items-center justify-between">
                <Search
                  handleSearchChange={handleSearchChange}
                  isRecurringBills={isRecurringBills}
                />
                <SortBySection
                  setSortByDropdown={setSortByDropdown}
                  sortByDropdown={sortByDropdown}
                  setSortByValue={setSortByValue}
                  sortByValue={sortByValue}
                />
              </div>

              <SortFilterHeader isRecurringBills={isRecurringBills} />
              {isLoading ? (
                <div className="w-full h-screen flex items-center justify-center">
                  <Loading />
                </div>
              ) : (
                <div className="w-full">
                  {sortTransactions(filteredAllTransactions || []).map(
                    (transaction, i) => {
                      const isFirstItem = i === 0;
                      const amount =
                        "amount" in transaction ? transaction.amount : 0;
                      const category =
                        "category" in transaction
                          ? transaction.category
                          : "Unknown";
                      const color =
                        "color" in transaction
                          ? transaction.color
                          : "defaultColor";
                      const categoryLogo =
                        "categoryLogo" in transaction ? (
                          transaction.categoryLogo
                        ) : (
                          <div
                            className="w-10 h-10 rounded-full"
                            style={{
                              backgroundColor: transaction.color || "gray",
                            }}
                          ></div>
                        );

                      return (
                        <TransactionItem
                          key={transaction._id}
                          category={category}
                          amount={amount}
                          isFirstItem={isFirstItem}
                          isRecurringBills={isRecurringBills}
                          _id={transaction._id}
                          categoryLogo={categoryLogo}
                          color={color}
                          recurringBillsData={recurringBillsData}
                          {...("dueDate" in transaction && {
                            dueDate: transaction.dueDate,
                          })}
                          {...("status" in transaction && {
                            status: transaction.status,
                          })}
                          getAllRecurringBills={getAllRecurringBills}
                        />
                      );
                    }
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecurringBillsSection;
