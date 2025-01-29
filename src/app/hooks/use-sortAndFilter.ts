// import { useEffect, useState } from "react";
// import { TransactionType } from "../components/__organism/transaction/TransactionSection";

// export const useSortAndFilter = (allTransactions: TransactionType[]) => {
//   const [sortByValue, setSortByValue] = useState<string>("Latest");
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [filteredCategoryValue, setFilteredCategoryValue] = useState<
//     string | undefined
//   >("All Transactions");
//   const [filteredData, setFilteredData] = useState<TransactionType[]>([]);
//   const [filteredAllTransactions, setFilteredAllTransactions] = useState<
//     TransactionType[]
//   >([]);

//   useEffect(() => {
//     const filteredData =
//       filteredCategoryValue === "All Transactions"
//         ? allTransactions
//         : allTransactions.filter(
//             (item) => item.category === filteredCategoryValue
//           );

//     const filteredBySearchTerm = filteredData.filter((item) =>
//       item.category.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     setFilteredAllTransactions(filteredBySearchTerm);
//   }, [filteredCategoryValue, allTransactions, searchTerm, sortByValue]);





//   const sortTransactions = (
//     transactions: TransactionType[]
//   ): TransactionType[] => {
//     switch (sortByValue) {
//       case "Latest":
//         return transactions.sort(
//           (a, b) =>
//             new Date(b.createdAt || "").getTime() -
//             new Date(a.createdAt || "").getTime()
//         );
//       case "Oldest":
//         return transactions.sort(
//           (a, b) =>
//             new Date(a.createdAt || "").getTime() -
//             new Date(b.createdAt || "").getTime()
//         );
//       case "A to Z":
//         return transactions.sort((a, b) =>
//           a.category.localeCompare(b.category)
//         );
//       case "Z to A":
//         return transactions.sort((a, b) =>
//           b.category.localeCompare(a.category)
//         );
//       case "Highest":
//         return transactions.sort((a, b) => b.amount - a.amount);
//       case "Lowest":
//         return transactions.sort((a, b) => a.amount - b.amount);
//       default:
//         return transactions;
//     }
//   };



//   return {
//     filteredData,
//     searchTerm,
//     setSearchTerm,
//     sortByValue,
//     setSortByValue,
//     filteredCategoryValue,
//     setFilteredCategoryValue,
//     sortTransactions
//   };
// };















// import { useEffect, useState } from "react";
// import { TransactionType } from "../components/__organism/transaction/TransactionSection";

// export const useSortAndFilter = (allTransactions: TransactionType[]) => {
// //   const [sortByValue, setSortByValue] = useState<string>("Latest");
//   const [sortByValue, setSortByValue] = useState<string | undefined>("Latest");

//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [filteredCategoryValue, setFilteredCategoryValue] = useState<string | undefined>("All Transactions");
//   const [filteredAllTransactions, setFilteredAllTransactions] = useState<TransactionType[]>([]);

//   // Effect to filter and update filtered transactions based on search term and category
//   useEffect(() => {
//     const filteredData = filteredCategoryValue === "All Transactions"
//       ? allTransactions
//       : allTransactions.filter(item => item.category === filteredCategoryValue);

//     const filteredBySearchTerm = filteredData.filter(item =>
//       item.category.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     setFilteredAllTransactions(filteredBySearchTerm);
//   }, [filteredCategoryValue, allTransactions, searchTerm]);

//   // Function to sort transactions based on selected criteria
//   const sortTransactions = (transactions: TransactionType[]): TransactionType[] => {
//     const transactionsCopy = [...transactions]; // Make a copy to avoid direct mutation

//     switch (sortByValue) {
//       case "Latest":
//         return transactionsCopy.sort((a, b) =>
//           new Date(b.createdAt || "").getTime() - new Date(a.createdAt || "").getTime()
//         );
//       case "Oldest":
//         return transactionsCopy.sort((a, b) =>
//           new Date(a.createdAt || "").getTime() - new Date(b.createdAt || "").getTime()
//         );
//       case "A to Z":
//         return transactionsCopy.sort((a, b) => a.category.localeCompare(b.category));
//       case "Z to A":
//         return transactionsCopy.sort((a, b) => b.category.localeCompare(a.category));
//       case "Highest":
//         return transactionsCopy.sort((a, b) => b.amount - a.amount);
//       case "Lowest":
//         return transactionsCopy.sort((a, b) => a.amount - b.amount);
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












//OK
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
//     const filteredData = filteredCategoryValue === "All Transactions"
//       ? allTransactions
//       : allTransactions.filter(item => item.category === filteredCategoryValue);

//     const filteredBySearchTerm = filteredData.filter(item =>
//       item.category.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     setFilteredAllTransactions(filteredBySearchTerm);
//   }, [filteredCategoryValue, allTransactions, searchTerm]);

//   const sortTransactions = (transactions: TransactionOrRecurringBill[]): TransactionOrRecurringBill[] => {
//     const transactionsCopy = [...transactions]; 

//     switch (sortByValue) {
//       case "Latest":
//         return transactionsCopy.sort((a, b) => {
//           const aDate = "dueDate" in a ? new Date(a.dueDate) : new Date(a.createdAt || "");
//           const bDate = "dueDate" in b ? new Date(b.dueDate) : new Date(b.createdAt || "");
//           return bDate.getTime() - aDate.getTime();
//         });
//       case "Oldest":
//         return transactionsCopy.sort((a, b) => {
//           const aDate = "dueDate" in a ? new Date(a.dueDate) : new Date(a.createdAt || "");
//           const bDate = "dueDate" in b ? new Date(b.dueDate) : new Date(b.createdAt || "");
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

    // Only update state if filtered data is different
    if (JSON.stringify(filteredBySearchTerm) !== JSON.stringify(filteredAllTransactions)) {
      setFilteredAllTransactions(filteredBySearchTerm);
    }
  }, [filteredCategoryValue, allTransactions, searchTerm]);

  const sortTransactions = (transactions: TransactionOrRecurringBill[]): TransactionOrRecurringBill[] => {
    const transactionsCopy = [...transactions]; 

    switch (sortByValue) {
      case "Latest":
        return transactionsCopy.sort((a, b) => {
          const aDate = "dueDate" in a ? new Date(a.dueDate) : new Date(a.createdAt || "");
          const bDate = "dueDate" in b ? new Date(b.dueDate) : new Date(b.createdAt || "");
          return bDate.getTime() - aDate.getTime();
        });
      case "Oldest":
        return transactionsCopy.sort((a, b) => {
          const aDate = "dueDate" in a ? new Date(a.dueDate) : new Date(a.createdAt || "");
          const bDate = "dueDate" in b ? new Date(b.dueDate) : new Date(b.createdAt || "");
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
