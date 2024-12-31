import { Dispatch, SetStateAction } from "react";
// import { DataType } from "../components/__organism/budgets/BudgetSections";
import { CategoryEnum, ColorEnum } from "../schema/schema";

export type ModalPropsType = {
  setIsModal: Dispatch<SetStateAction<boolean>>;
  data: DataType[];
  getBudgets: () => void;
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