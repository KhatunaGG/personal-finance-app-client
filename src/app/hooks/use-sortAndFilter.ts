import { useEffect, useState } from "react";
import { RecurringBillsDataType } from "../components/__organism/recurringBills/RecurringBillsSection"; 
import { TransactionType } from "../components/__organism/transaction/TransactionSection"; 

type TransactionOrRecurringBill = RecurringBillsDataType | TransactionType; 

export const useSortAndFilter = (allTransactions: TransactionOrRecurringBill[]) => {
  const [sortByValue, setSortByValue] = useState<string | undefined>("Latest");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredCategoryValue, setFilteredCategoryValue] = useState<string | undefined>("All Transactions");
  const [filteredAllTransactions, setFilteredAllTransactions] = useState<TransactionOrRecurringBill[]>([]);

  useEffect(() => {
    const filteredData = filteredCategoryValue === "All Transactions"
      ? allTransactions
      : allTransactions.filter(item => item.category === filteredCategoryValue);
    const filteredBySearchTerm = filteredData.filter(item =>
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (JSON.stringify(filteredBySearchTerm) !== JSON.stringify(filteredAllTransactions)) {
      setFilteredAllTransactions(filteredBySearchTerm);
    }
  }, [filteredCategoryValue, allTransactions, searchTerm]);

  const sortTransactions = (transactions: TransactionOrRecurringBill[]): TransactionOrRecurringBill[] => {
    const transactionsCopy = [...transactions]; 
    switch (sortByValue) {
      // case "Latest":
      //   return transactionsCopy.sort((a, b) => {
      //     const aDate = "dueDate" in a ? new Date(a.dueDate) : new Date(a.createdAt || "");
      //     const bDate = "dueDate" in b ? new Date(b.dueDate) : new Date(b.createdAt || "");
      //     return bDate.getTime() - aDate.getTime();
      //   });
      // case "Oldest":
      //   return transactionsCopy.sort((a, b) => {
      //     const aDate = "dueDate" in a ? new Date(a.dueDate) : new Date(a.createdAt || "");
      //     const bDate = "dueDate" in b ? new Date(b.dueDate) : new Date(b.createdAt || "");
      //     return aDate.getTime() - bDate.getTime();
      //   });

      case "Latest":
      return transactionsCopy.sort((a, b) => {
        const aDate = "dueDate" in a ? new Date(a.dueDate) : new Date((a as TransactionType).createdAt || "");
        const bDate = "dueDate" in b ? new Date(b.dueDate) : new Date((b as TransactionType).createdAt || "");
        return bDate.getTime() - aDate.getTime();
      });
    case "Oldest":
      return transactionsCopy.sort((a, b) => {
        const aDate = "dueDate" in a ? new Date(a.dueDate) : new Date((a as TransactionType).createdAt || "");
        const bDate = "dueDate" in b ? new Date(b.dueDate) : new Date((b as TransactionType).createdAt || "");
        return aDate.getTime() - bDate.getTime();
      });
      case "A to Z":
        return transactionsCopy.sort((a, b) => a.category.localeCompare(b.category));
      case "Z to A":
        return transactionsCopy.sort((a, b) => b.category.localeCompare(a.category));
      case "Highest":
        return transactionsCopy.sort((a, b) => (b.amount as number) - (a.amount as number));
      case "Lowest":
        return transactionsCopy.sort((a, b) => (a.amount as number) - (b.amount as number));
      default:
        return transactionsCopy;
    }
  };
  return {
    filteredAllTransactions,
    searchTerm,
    setSearchTerm,
    sortByValue,
    setSortByValue,
    filteredCategoryValue,
    setFilteredCategoryValue,
    sortTransactions,
  };
};










// import { useEffect, useState } from "react";
// import { RecurringBillsDataType } from "../components/__organism/recurringBills/RecurringBillsSection"; 
// import { TransactionType } from "../components/__organism/transaction/TransactionSection"; 

// type TransactionOrRecurringBill = RecurringBillsDataType | TransactionType; 

// export const useSortAndFilter = (allTransactions: TransactionOrRecurringBill[]) => {
//   const [sortByValue, setSortByValue] = useState<string | undefined>("Latest");
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [filteredCategoryValue, setFilteredCategoryValue] = useState<string | undefined>("All Transactions");
//   const [filteredAllTransactions, setFilteredAllTransactions] = useState<TransactionOrRecurringBill[]>([]);

//   useEffect(() => {
//     // Step 1: Filter by category (if any)
//     const filteredData = filteredCategoryValue === "All Transactions"
//       ? allTransactions
//       : allTransactions.filter(item => item.category === filteredCategoryValue);

//     // Step 2: Filter by search term (handling undefined category)
//     const filteredBySearchTerm = filteredData.filter(item => {
//       // Ensure item.category is a string before calling toLowerCase
//       return item.category && typeof item.category === 'string'
//         ? item.category.toLowerCase().includes(searchTerm.toLowerCase())
//         : false; // Exclude items with undefined or non-string categories
//     });

//     // Step 3: Only update state if filtered data is different
//     if (JSON.stringify(filteredBySearchTerm) !== JSON.stringify(filteredAllTransactions)) {
//       setFilteredAllTransactions(filteredBySearchTerm);
//     }
//   }, [filteredCategoryValue, allTransactions, searchTerm]);

//   // Sorting function based on the selected criteria
//   const sortTransactions = (transactions: TransactionOrRecurringBill[]): TransactionOrRecurringBill[] => {
//     const transactionsCopy = [...transactions];

//     switch (sortByValue) {
//       case "Latest":
//         return transactionsCopy.sort((a, b) => {
//           const aDate = "dueDate" in a ? new Date(a.dueDate) : new Date((a as TransactionType).createdAt || "");
//           const bDate = "dueDate" in b ? new Date(b.dueDate) : new Date((b as TransactionType).createdAt || "");
//           return bDate.getTime() - aDate.getTime();
//         });
//       case "Oldest":
//         return transactionsCopy.sort((a, b) => {
//           const aDate = "dueDate" in a ? new Date(a.dueDate) : new Date((a as TransactionType).createdAt || "");
//           const bDate = "dueDate" in b ? new Date(b.dueDate) : new Date((b as TransactionType).createdAt || "");
//           return aDate.getTime() - bDate.getTime();
//         });
//       case "A to Z":
//         return transactionsCopy.sort((a, b) => a.category.localeCompare(b.category));
//       case "Z to A":
//         return transactionsCopy.sort((a, b) => b.category.localeCompare(a.category));
//       case "Highest":
//         return transactionsCopy.sort((a, b) => (b.amount as number) - (a.amount as number));
//       case "Lowest":
//         return transactionsCopy.sort((a, b) => (a.amount as number) - (b.amount as number));
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
