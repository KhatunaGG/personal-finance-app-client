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
};

export type DataType = {
  category: CategoryEnum;
  amount: number;
  color: ColorEnum;
  categoryLogo: string;
  createAt: string;
  updatedAt: string;
  id: string;
};
