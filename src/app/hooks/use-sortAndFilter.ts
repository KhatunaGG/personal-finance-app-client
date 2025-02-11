// import { useEffect, useState } from "react";
// import { RecurringBillsDataType } from "../components/__organism/recurringBills/RecurringBillsSection";
// import { TransactionType } from "../components/__organism/transaction/TransactionSection";

// type TransactionOrRecurringBill = RecurringBillsDataType | TransactionType;

// const isRecurringBill = (item: TransactionOrRecurringBill): item is RecurringBillsDataType => {
//   return (item as RecurringBillsDataType).amount !== undefined;
// };

// export const useSortAndFilter = (allTransactions: TransactionOrRecurringBill[]) => {
//   const [sortByValue, setSortByValue] = useState<string | undefined>("Latest");
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [filteredCategoryValue, setFilteredCategoryValue] = useState<string | undefined>("All Transactions");
//   const [filteredAllTransactions, setFilteredAllTransactions] = useState<TransactionOrRecurringBill[]>([]);

//   useEffect(() => {
//     const filteredData = filteredCategoryValue === "All Transactions"
//       ? allTransactions
//       : allTransactions.filter(item => item.category === filteredCategoryValue);

//     const filteredBySearchTerm = filteredData.filter(item =>
//       item.category.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     if (JSON.stringify(filteredBySearchTerm) !== JSON.stringify(filteredAllTransactions)) {
//       setFilteredAllTransactions(filteredBySearchTerm);
//     }
//   }, [filteredCategoryValue, allTransactions, searchTerm]);

//   const sortTransactions = (transactions: TransactionOrRecurringBill[]): TransactionOrRecurringBill[] => {
//     const transactionsCopy = [...transactions];

//     switch (sortByValue) {
//       case "Latest":
//         return transactionsCopy.sort((a, b) => {
//           const aDate = isRecurringBill(a) ? new Date(a.dueDate) : new Date(a.createdAt || "");
//           const bDate = isRecurringBill(b) ? new Date(b.dueDate) : new Date(b.createdAt || "");
//           return bDate.getTime() - aDate.getTime();
//         });
//       case "Oldest":
//         return transactionsCopy.sort((a, b) => {
//           const aDate = isRecurringBill(a) ? new Date(a.dueDate) : new Date(a.createdAt || "");
//           const bDate = isRecurringBill(b) ? new Date(b.dueDate) : new Date(b.createdAt || "");
//           return aDate.getTime() - bDate.getTime();
//         });
//       case "A to Z":
//         return transactionsCopy.sort((a, b) => a.category.localeCompare(b.category));
//       case "Z to A":
//         return transactionsCopy.sort((a, b) => b.category.localeCompare(a.category));
//       case "Highest":
//         return transactionsCopy.sort((a, b) => {
//           const aAmount = isRecurringBill(a) ? a.amount : (a as TransactionType).amount;
//           const bAmount = isRecurringBill(b) ? b.amount : (b as TransactionType).amount;
//           return bAmount - aAmount;
//         });
//       case "Lowest":
//         return transactionsCopy.sort((a, b) => {
//           const aAmount = isRecurringBill(a) ? a.amount : (a as TransactionType).amount;
//           const bAmount = isRecurringBill(b) ? b.amount : (b as TransactionType).amount;
//           return aAmount - bAmount;
//         });
//       default:
//         return transactionsCopy;
//     }
//   };

//   return {
//     filteredAllTransactions,
//     searchTerm,
//     setSearchTerm,
//     sortByValue,
//     setSortByValue,
//     filteredCategoryValue,
//     setFilteredCategoryValue,
//     sortTransactions,
//   };
// };

import { useEffect, useState } from "react";
import { RecurringBillsDataType } from "../components/__organism/recurringBills/RecurringBillsSection";
import { TransactionType } from "../components/__organism/transaction/TransactionSection";

type TransactionOrRecurringBill = RecurringBillsDataType | TransactionType;

const isRecurringBill = (
  item: TransactionOrRecurringBill
): item is RecurringBillsDataType => {
  return (item as RecurringBillsDataType).amount !== undefined;
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const useSortAndFilter = (
  allTransactions: TransactionOrRecurringBill[]
) => {
  const [sortByValue, setSortByValue] = useState<string | undefined>("Latest");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredCategoryValue, setFilteredCategoryValue] = useState<
    string | undefined
  >("All Transactions");
  const [filteredAllTransactions, setFilteredAllTransactions] = useState<
    TransactionOrRecurringBill[]
  >([]);

  useEffect(() => {
    const filteredData =
      filteredCategoryValue === "All Transactions"
        ? allTransactions
        : allTransactions.filter(
            (item) => item.category === filteredCategoryValue
          );

    const filteredBySearchTerm = filteredData.filter((item) =>
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (
      JSON.stringify(filteredBySearchTerm) !==
      JSON.stringify(filteredAllTransactions)
    ) {
      setFilteredAllTransactions(filteredBySearchTerm);
    }
  }, [filteredCategoryValue, allTransactions, searchTerm]);

  const sortTransactions = (
    transactions: TransactionOrRecurringBill[]
  ): TransactionOrRecurringBill[] => {
    const transactionsCopy = [...transactions];

    switch (sortByValue) {
      case "Latest":
        return transactionsCopy;

      case "Oldest":
        return transactionsCopy.sort((a, b) => {
          const aDate = new Date(
            isRecurringBill(a) ? a.dueDate : a.createdAt || 0
          );
          const bDate = new Date(
            isRecurringBill(b) ? b.dueDate : b.createdAt || 0
          );
          return aDate.getTime() - bDate.getTime();
        });

      case "A to Z":
        return transactionsCopy.sort((a, b) =>
          a.category.localeCompare(b.category)
        );

      case "Z to A":
        return transactionsCopy.sort((a, b) =>
          b.category.localeCompare(a.category)
        );

      case "Highest":
        return transactionsCopy.sort((a, b) => {
          const aAmount = isRecurringBill(a)
            ? a.amount
            : (a as TransactionType).amount;
          const bAmount = isRecurringBill(b)
            ? b.amount
            : (b as TransactionType).amount;
          return bAmount - aAmount;
        });

      case "Lowest":
        return transactionsCopy.sort((a, b) => {
          const aAmount = isRecurringBill(a)
            ? a.amount
            : (a as TransactionType).amount;
          const bAmount = isRecurringBill(b)
            ? b.amount
            : (b as TransactionType).amount;
          return aAmount - bAmount;
        });

      default:
        return transactionsCopy;
    }
  };

  const formattedTransactions = filteredAllTransactions.map((transaction) => {
    if (transaction.createdAt) {
      return {
        ...transaction,
        createdAt: formatDate(transaction.createdAt),
      };
    }
    return {
      ...transaction,
      createdAt: "No Date Available",
    };
  });

  return {
    filteredAllTransactions: formattedTransactions,
    searchTerm,
    setSearchTerm,
    sortByValue,
    setSortByValue,
    filteredCategoryValue,
    setFilteredCategoryValue,
    sortTransactions,
  };
};
