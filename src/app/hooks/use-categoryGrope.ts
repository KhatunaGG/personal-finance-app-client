import { useEffect, useState } from "react";
import { DataType } from "../interfaces/interface";
import { CategoryEnum, ColorEnum } from "../schema/schema";

export type GroupedCategory = {
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
          const currentRemaining =
            groups[category].totalAmount - groups[category].spending;

          if (Math.abs(amount) <= currentRemaining) {
            groups[category].spending += amount;
          }
        } else {
          groups[category].totalAmount += amount;
        }
        groups[category].remaining =
          groups[category].totalAmount - Math.abs(groups[category].spending);
      });
      setGroupedData(Object.values(groups));
    };

    groupData();
  }, [data]);

  return groupedData;
};
