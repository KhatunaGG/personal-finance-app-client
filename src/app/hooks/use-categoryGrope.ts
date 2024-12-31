// import { useEffect, useState } from "react";
// import { DataType } from "../interfaces/interface";
// import { CategoryEnum, ColorEnum } from "../schema/schema";

// type GroupedCategory = {
//   category: CategoryEnum;
//   spending: number;
//   totalAmount: number;
//   color: ColorEnum;
//   categoryLogo: string;
// };

// export const useGroupedData = (data: DataType[]) => {
//   const [groupedData, setGroupedData] = useState<GroupedCategory[]>([]);

//   useEffect(() => {
//     const groupData = () => {
//       // Create a dictionary to hold grouped data
//       const groups: { [key: string]: GroupedCategory } = {};

//       data.forEach((item) => {
//         const { category, amount, color, categoryLogo } = item;

//         // Check if the category already exists in groups
//         if (!groups[category]) {
//           groups[category] = {
//             category,
//             spending: 0,
//             totalAmount: 0,
//             color,
//             categoryLogo,
//           };
//         }

//         // If amount is negative, treat it as spending
//         if (amount < 0) {
//           groups[category].spending += amount;
//         } else {
//           // If the amount is positive, treat it as totalAmount
//           groups[category].totalAmount += amount;
//         }
//       });

//       // Prevent transactions if totalAmount is less than the spending
//       for (const category in groups) {
//         const group = groups[category];

//         // If spending exceeds totalAmount, reset spending to 0 (prevent further transactions)
//         if (group.totalAmount + group.spending < 0) {
//           group.spending = 0;
//         }
//       }

//       // Convert the dictionary to an array of grouped categories
//       setGroupedData(Object.values(groups));
//     };

//     // Call groupData whenever the `data` changes
//     groupData();
//   }, [data]);

//   return groupedData;
// };



import { useEffect, useState } from "react";
import { DataType } from "../interfaces/interface";
import { CategoryEnum, ColorEnum } from "../schema/schema";

type GroupedCategory = {
  category: CategoryEnum;
  spending: number;
  totalAmount: number;
  color: ColorEnum;
  categoryLogo: string;
  remaining: number;
};

export const useGroupedData = (data: DataType[]) => {
  const [groupedData, setGroupedData] = useState<GroupedCategory[]>([]);

  useEffect(() => {
    const groupData = () => {
      const groups: { [key: string]: GroupedCategory } = {};

      data.forEach((item) => {
        const { category, amount, color, categoryLogo } = item;

        if (!groups[category]) {
          groups[category] = {
            category,
            color,
            spending: 0,
            totalAmount: 0,
            categoryLogo,
            remaining: 0,
          };
        }

        if (amount < 0) {
          // If amount is negative (spending), we check if it exceeds the remaining balance
          const currentRemaining = groups[category].totalAmount - groups[category].spending;

          if (Math.abs(amount) <= currentRemaining) {
            groups[category].spending += amount; // Add to spending (negative amount)
          }
        } else {
          // If amount is positive (income), add to totalAmount
          groups[category].totalAmount += amount;
        }

        // Calculate remaining after all transactions for this category
        groups[category].remaining = groups[category].totalAmount - Math.abs(groups[category].spending);
      });

      // Convert object to an array for state
      setGroupedData(Object.values(groups));
    };

    groupData();
  }, [data]);

  return groupedData;
};
