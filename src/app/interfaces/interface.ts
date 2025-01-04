import { Dispatch, SetStateAction } from "react";
import { CategoryEnum, ColorEnum } from "../schema/schema";
import { GroupedCategory } from "../hooks/use-categoryGrope";

export type ModalPropsType = {
  setIsModal: Dispatch<SetStateAction<boolean>>;
  data: DataType[];
  getBudgets: () => void;
  setIsAddBudget: Dispatch<SetStateAction<boolean>>;
  isAddBudget: boolean;
  groupedData: GroupedCategory[];
  createdAt?: string;
};

export type DataType = {
  category: CategoryEnum;
  amount: number;
  color: ColorEnum;
  categoryLogo: string;
  createdAt?: string;
  updatedAt?: string;
  id: string;
};
